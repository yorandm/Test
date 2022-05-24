const config = require('config');
const {
    getChildLogger
} = require('../core/logging');
const templateRepository = require('../repository/template');

const debugLog = (message, meta = {}) => {
    if (!this.logger) this.logger = getChildLogger('doelstelling-service');
    this.logger.debug(message, meta);
};

const getAllTemplatesByRole = async() => {
    debugLog(`Fetching template by role`);
    return data = await templateRepository.findAllTemplatesByRole();

}

const getTemplateByUser = async(userId) => {
    debugLog(`Fetching template by user ${userId}`)
    const h = await templateRepository.findTemplateByUser(userId);
    const b = await getActiveAndRole(userId);
    return {
        templates: [...h],
        actief: b.actieve,
        rol: b.role
    }
}

const getTemplateByUserAndCat = async(sessie, catId) => {
    const userId = sessie.userId;
    debugLog(`Fetching template by user ${userId} and Category ${catId}`)
    return await templateRepository.findTemplateByUserAndCat(userId, catId);
}

const getActiveAndRole = async(userId) => {
    // debugLog(`Fetching template by user ${userId} and Category ${catId}`)
    const role = await templateRepository.findRole(userId);
    const actieve = await templateRepository.findActiveAndRole(userId);

    return {
        role: role,
        actieve: actieve
    }
}

const getTemplateOwned = async(sessie) => {
    debugLog(`Fetching template by Owner`);
    return await templateRepository.findTemplateOwned(sessie);
}

const updateTemplateByUserAndCat = async(layoutId, catId, layout) => {
    debugLog(`Fetching template by category ${catId}`);
    return data = await templateRepository.updateTemplateByUserAndCat(layoutId, catId, layout);

}

const updateDefault = async(userId, id) => {
    debugLog(`updateing templatefor ${userId}`);
    return data = await templateRepository.updateDefault(userId, id);

}


const createTemplate = async(naam, sessie) => {
    debugLog(`Creating template  ${naam}`);
    return data = await templateRepository.createTemplate(naam, sessie);
}

const createTemplateCat = async(layoutId, catId, layout) => {
    debugLog(`Creating template  ${layoutId}`);
    return data = await templateRepository.createTemplateCat(layoutId, catId, layout);
}

const deleteTemplateById = async(id, catId) => {
    debugLog(`Deleting template ${id}`);
    return await templateRepository.deleteTemplateById(id, catId);

    // if (!deleted) {
    //     throw ServiceError.notFound(`Template ${id} not found`, {id});
    // }
}

module.exports = {
    getAllTemplatesByRole,
    getTemplateByUser,
    getTemplateOwned,
    getTemplateByUserAndCat,
    getActiveAndRole,
    updateTemplateByUserAndCat,
    updateDefault,
    deleteTemplateById,
    createTemplateCat,
    createTemplate,
}