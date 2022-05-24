const config = require('config');
const {
    getChildLogger
} = require('../core/logging');
const doelstellingRepository = require('../repository/doelstelling');

const debugLog = (message, meta = {}) => {
    if (!this.logger) this.logger = getChildLogger('doelstelling-service');
    this.logger.debug(message, meta);
};

const getAllDoelstellingen = async() => {
    debugLog('Fetching all doelstellingen');
    const data = await doelstellingRepository.getAllDoelstellingen();
    return data;
};

const getDoelstellingenBySdg = async(sdgnummer) => {
    const data = await doelstellingRepository.getDoelstellingenBySdg(sdgnummer);
    return data;
}


module.exports = {
    getAllDoelstellingen,
    getDoelstellingenBySdg
};