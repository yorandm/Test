const {
    getChildLogger
} = require('../core/logging');
const ServiceError = require('../core/serviceError');
const datasourceRepository = require('../repository/datasource');

const debugLog = (message, meta = {}) => {
    if (!this.logger) this.logger = getChildLogger('sdg-service');
    this.logger.debug(message, meta);
};

const getDatasourceBySourceId = async(
    sourceId,
) => {
    debugLog('Fetching SDG en Doelstelling  categorieen', {
        sourceId,
    });
    const datasourceInfo = await datasourceRepository.findInfo(sourceId);
    const data = await datasourceRepository.findData(sourceId);
    datasourceInfo.data = data;
    return datasourceInfo;
};

module.exports = {
    getDatasourceBySourceId,
};