const uuid = require('uuid');
const {
    tables,
    getKnex
} = require('../data');
const {
    getChildLogger
} = require('../core/logging');
const {
    x
} = require('joi');

const doelRepo = require('../repository/doelstelling');

const SELECT_SDGNR_EN_NAAM = [`${tables.sdg}.sdgNummer`, `${tables.sdg}.naam`];

const findSdgByCatId = async(categorieID) => {
    const data = await getKnex()(tables.sdg)
        .select(SELECT_SDGNR_EN_NAAM)
        .where(`${tables.sdg}.categorieID`, categorieID);
    return data;
};

const findSdgByNummer = async(sdgnummer) => {
    const data = await getKnex()(tables.sdg)
        .select()
        .where(`${tables.sdg}.sdgNummer`, sdgnummer)
        .first();
    return data;
};

module.exports = {
    findSdgByCatId,
    findSdgByNummer,
};