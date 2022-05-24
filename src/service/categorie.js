const {
    getChildLogger
} = require('../core/logging');
const ServiceError = require('../core/serviceError');
const categorieRepository = require('../repository/categorie');
const sdgService = require('./sdg');

const debugLog = (message, meta = {}) => {
    if (!this.logger) this.logger = getChildLogger('categorie-service');
    this.logger.debug(message, meta);
};


/**
 * Get all categorie.
 *
 */
const getAll = async(rol) => {
    debugLog('Fetching all categorieen');
    const data = await categorieRepository.findAll(rol.roles);

    return data;
};


const getCatEnSdg = async(rol) => {
    debugLog('Fetching all categorieen');
    const data = await categorieRepository.findAll(rol.roles);
    const catEnSdg = data.map(async(x) => {
        x.sdg = await sdgService.getSdgByCat(x.catId);
        return x;
    });
    return Promise.all(catEnSdg);
};



module.exports = {
    getAll,
    getCatEnSdg
};