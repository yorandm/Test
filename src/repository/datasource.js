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

const SELECT_AXIS_DATA = [`${tables.datasources}.xasWaarde`, `${tables.datasources}.yasWaarde`];

const findInfo = async(sourceID) => {
    const data = await getKnex()(tables.datasource)
        .select()
        .where(`${tables.datasource}.id`, sourceID)
        .first();

    return data;
}

const findData = async(sourceID) => {
    const data = await getKnex()(tables.datasources)
        .select(SELECT_AXIS_DATA)
        .where(`${tables.datasources}.id`, sourceID)
        .orderBy('xasWaarde');

    return data;
}

module.exports = {
    findInfo,
    findData,
};