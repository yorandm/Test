const Joi = require('joi');
const Router = require('@koa/router');

const sdgService = require('../service/sdg');
const Role = require('../core/roles');
const {
    requireAuthentication,
    makeRequireRole
} = require('../core/auth');

const validate = require('./_validation');


const getByCatId = async(ctx) => {
    const sdgs = await sdgService.getSdgByCatId(ctx.params.catId);
    ctx.body = sdgs;
}

const getDoelstellingBySdg = async(ctx) => {
    const sdgs = await sdgService.getSdgEnDoel(ctx.params.id);
    ctx.body = sdgs;
}



/**
 * Install user routes in the given router.
 *
 * @param {Router} app - The parent router.
 */
module.exports = function installUsersRoutes(app) {
    const router = new Router({
        prefix: '/sdg',
    });

    // Public routes
    // const requireAdmin = makeRequireRole(Role.ADMIN);

    // Routes with authentication/autorisation
    // , requireAuthentication, requireAdmin, validate(getAllCategorie.validationScheme)
    // router.get('/', getAllSdg);
    // router.get('/doelstellingen/:id', getDoelstellingBySdg);
    router.get('/:catId', getByCatId);
    // router.put('/:id', requireAuthentication, validate(updateUserById.validationScheme), updateUserById);
    // router.delete('/:id', requireAuthentication, validate(deleteUserById.validationScheme), deleteUserById);

    app
        .use(router.routes())
        .use(router.allowedMethods());
};