const {
    getChildLogger
} = require('../core/logging');
const ServiceError = require('../core/serviceError');
const sdgRepository = require('../repository/sdg');

const doelService = require('./doelstelling');

const debugLog = (message, meta = {}) => {
    if (!this.logger) this.logger = getChildLogger('sdg-service');
    this.logger.debug(message, meta);
};

// const berkenBehaald = (data, doel, groter) => {
//     return groter === 1 ? doel[doel.length - 1].yasWaarde >= data[data.length - 1].yasWaarde : doel[doel.length - 1].yasWaarde <= data[data.length - 1].yasWaarde;
// }


const getSdgByCatId = async(
    categorieID,
) => {
    debugLog('Fetching SDG en Doelstelling  categorieen', {
        categorieID,
    });
    const data = await sdgRepository.findSdgByCatId(categorieID);
    const sdgEnDoel = await data.map(async(x) => {
        x.doelstellingen = await doelService.getDoelstellingenBySdg(x.sdgNummer);
        // x.doelstellingen.map(doelen => {
        //     doelen.isBehaald = berkenBehaald(doelen.datasource.data, doelen.doelwaardes.data, doelen.doelwaardeMoetGroterZijnDanHuidigeWaarde);
        //     return doelen;
        // })
        return x;
    });
    return Promise.all(sdgEnDoel);
};


const getSdgByCat = async(
    categorieID,
) => {
    debugLog('Fetching SDG en Doelstelling  categorieen', {
        categorieID,
    });
    const data = await sdgRepository.findSdgByCatId(categorieID);

    return data;
};



const getSdgEnDoel = async(sdgnummer) => {
    debugLog('Fetching all sdg');
    const data = await sdgRepository.findSdgByNummer(sdgnummer);
    const doel = await doelService.getDoelstellingenBySdg(sdgnummer);
    data.doelstellingen = doel;

    return {
        data: data,
    };
};



module.exports = {
    getSdgByCatId,
    getSdgEnDoel,
    getSdgByCat,
};