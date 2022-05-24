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
const roles = require('../core/roles');

const SELECT_COLUMNS = [
    `${tables.tempcat}.templategrid`, `${tables.tempcat}.id`
];

const SELECT_COLUMNS_ACTIVE = [
    `${tables.user}.activeTemplate as id`, `${tables.templates}.name`,
];

const SELECT_COLUMNS_ROL = [
    `${tables.templates}.id`, `${tables.templates}.name`
];

const SELECT_COLUMNS_BY_ROLE = [
    `${tables.tempcat}.id`, `${tables.tempcat}.templategrid`, `${tables.tempcat}.catId`, `${tables.templates}.name`, `${tables.roles}.role`, `${tables.categorie}.naam`
];

const SELECT_COLUMNS_BY_USER = [
    `${tables.tempcat}.id`, `${tables.tempcat}.templategrid`, `${tables.tempcat}.catId`, `${tables.templates}.name`, `${tables.categorie}.naam`
];

const findAllTemplatesByRole = async() => {
    const data = await getKnex()(tables.templates).select(SELECT_COLUMNS_BY_ROLE)
        .join(tables.tempcat, `${tables.tempcat}.id`, `${tables.templates}.id`)
        .join(tables.roles, `${tables.roles}.templateID`, `${tables.templates}.id`)
        .join(tables.categorie, `${tables.categorie}.id`, `${tables.tempcat}.catId`)
        .orderBy(`${tables.templates}.id`);
    return data;
}

const findTemplateByUser = async(userId) => {
    const data = await getKnex()(tables.templates)
        .select(SELECT_COLUMNS_BY_USER)
        .join(tables.tempcat, `${tables.tempcat}.id`, `${tables.templates}.id`)
        .join(tables.categorie, `${tables.categorie}.id`, `${tables.tempcat}.catId`)
        .where(`${tables.templates}.userId`, userId)
    return data;
}

const findTemplateByUserAndCat = async(userId, catId) => {
    const data = await getKnex()(tables.templates)
        .select(SELECT_COLUMNS)
        .join(tables.user, `${tables.user}.activeTemplate`, `${tables.templates}.id`)
        .join(tables.tempcat, `${tables.tempcat}.id`, `${tables.templates}.id`)
        .where(`${tables.user}.id`, userId)
        .where(`${tables.tempcat}.catId`, catId)
        .first();
    return data;
}

const findActiveAndRole = async(userId) => {
    const data = await getKnex()(tables.templates)
        .select(SELECT_COLUMNS_ACTIVE)
        .join(tables.user, `${tables.user}.activeTemplate`, `${tables.templates}.id`)
        // .join(tables.roles, `${tables.user}.role`, `${tables.roles}.id`)
        .where(`${tables.user}.id`, userId)
        // .orWhere(`${tables.user}.role`, `${tables.roles}.id`)
        .first();
    return data;
}

const findRole = async(userId) => {
    const data = await getKnex()(tables.templates)
        .select(SELECT_COLUMNS_ROL)
        .join(tables.roles, `${tables.roles}.templateID`, `${tables.templates}.id`)
        .join(tables.user, `${tables.user}.role`, `${tables.roles}.id`)
        .where(`${tables.user}.id`, userId)
        // .where(`${tables.user}.role`, `${tables.roles}.id`)
        .first();
    return data;
}

const findTemplateOwned = async(sessie) => {
    const data = sessie.roles === roles.MVO_COORDINATOR ? (await getKnex()(tables.templates)
        .select()
        .where({
            userId: sessie.userId
        })
        .orWhere({
            userId: null,
        })) : (await getKnex()(tables.templates)
        .select()
        .where({
            userId: sessie.userId,
        }));
    return data;
}

const updateTemplateByUserAndCat = async(layoutId, catId, layout) => {
    const data = await getKnex()(tables.tempcat)
        .update(`${tables.tempcat}.templategrid`, JSON.stringify(layout))
        .where(`${tables.tempcat}.id`, layoutId)
        .where(`${tables.tempcat}.catId`, catId);
    return data;
}

const updateDefault = async(userId, id) => {
    const data = await getKnex()(tables.user)
        .update(`${tables.user}.ActiveTemplate`, id)
        .where(`${tables.user}.id`, userId);
    return data;
}


const deleteTemplateById = async(id, catId) => {
    const data = await getKnex()(tables.tempcat).delete().where('id', id).where('catId', catId);
    return data;
}

//tijdelijk
const createTemplate = async(naam, sessie) => {
    try {
        const id = uuid.v4();
        await getKnex()(tables.templates)
            .insert({
                "id": id,
                "name": naam,
                "userId": sessie.userId,
            });
        return await findTemplateByUser(sessie.userId);
    } catch (error) {
        const logger = getChildLogger('template-repo');
        logger.error('Error tijdens het creeëren van template', {
            error
        });

    }
}

const createTemplateCat = async(layoutId, catId, layout) => {
    try {
        const id = uuid.v4();
        await getKnex()(tables.tempcat)
            .insert({
                "id": layoutId,
                "templategrid": JSON.stringify(layout),
                "catId": catId,
            });
        // return await findTemplateByUser(sessie.userId);
    } catch (error) {
        const logger = getChildLogger('template-repo');
        logger.error('Error tijdens het creeëren van template', {
            error
        });

    }
}

module.exports = {
    findAllTemplatesByRole,
    findTemplateByUser,
    findTemplateOwned,
    findActiveAndRole,
    findRole,
    findTemplateByUserAndCat,
    createTemplate,
    createTemplateCat,
    updateTemplateByUserAndCat,
    updateDefault,
    deleteTemplateById,
}