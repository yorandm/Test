const Joi = require('joi');
const Router = require('@koa/router');

const datasourceService = require('../service/datasource');
const Role = require('../core/roles');
const {
    requireAuthentication,
    makeRequireRole
} = require('../core/auth');

const validate = require('./_validation');


const getBySourceId = async(ctx) => {
    const datasource = await datasourceService.getDatasourceBySourceId(ctx.params.sourceId);
    ctx.body = datasource;
}


/**
 * Install user routes in the given router.
 *
 * @param {Router} app - The parent router.
 */
module.exports = function installUsersRoutes(app) {
    const router = new Router({
        prefix: '/datasource',
    });

    // Public routes
    // const requireAdmin = makeRequireRole(Role.ADMIN);

    // Routes with authentication/autorisation
    // , requireAuthentication, requireAdmin, validate(getAllCategorie.validationScheme)
    // router.get('/:sourceId', getBySourceId);
    // router.put('/:id', requireAuthentication, validate(updateUserById.validationScheme), updateUserById);
    // router.delete('/:id', requireAuthentication, validate(deleteUserById.validationScheme), deleteUserById);

    app
        .use(router.routes())
        .use(router.allowedMethods());
};