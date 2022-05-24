const {
    tables,
    getKnex
} = require('../data/index');
const {
    getChildLogger
} = require('../core/logging');
const datasourceService = require('../service/datasource');

const berkenBehaald = (data, doel, groter) => {
    return groter === 1 ? doel >= data : doel <= data;
}
const getRecentsteWaarde = (data) => {
    return data[data.length - 1].yasWaarde;
}

const getAllDoelstellingen = () => {
    return getKnex()(tables.doel)
        .select()
};

const getDoelstellingenBySdg = async(sdgnummer) => {
    const data = await doelstellingenOphalen(sdgnummer);
    data.map(doelen => {
        const doelwaarde = getRecentsteWaarde(doelen.doelwaardes.data);
        const datasour = getRecentsteWaarde(doelen.datasource.data);
        doelen.isBehaald = berkenBehaald(datasour, doelwaarde, doelen.doelwaardeMoetGroterZijnDanHuidigeWaarde);
        doelen.doelwaarde = doelwaarde;
        return doelen;
    })
    return data;
};

const doelstellingenOphalen = async(sdgnummer) => {
    const doelstellingen = await getKnex()(tables.doel)
        .select()
        .where('sdgnummer', sdgnummer)
    const doel = await doelstellingen.map(async(x) => {

        x.datasource = await datasourceService.getDatasourceBySourceId(x.datasourceID);
        x.doelwaardes = await datasourceService.getDatasourceBySourceId(x.doelwaarde);
        return x
    });

    return Promise.all(doel);
}



module.exports = {
    getAllDoelstellingen,
    getDoelstellingenBySdg,
};