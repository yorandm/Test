const Joi = require('joi');
const Router = require('@koa/router');

const categorieService = require('../service/categorie');
const Role = require('../core/roles');
const {
    requireAuthentication,
    makeRequireRole
} = require('../core/auth');

const validate = require('./_validation');

const getAllCategorie = async(ctx) => {
    const categories = await categorieService.getAll(ctx.state.session);
    ctx.body = categories;
};


const getCategorieEnSdg = async(ctx) => {
    const categories = await categorieService.getCatEnSdg(ctx.state.session);
    ctx.body = categories;
};

/**
 * Install user routes in the given router.
 *
 * @param {Router} app - The parent router.
 */
module.exports = function installUsersRoutes(app) {
    const router = new Router({
        prefix: '/categorie',
    });

    // Public routes
    // const requireAdmin = makeRequireRole(Role.ADMIN);

    // Routes with authentication/autorisation
    // , requireAuthentication, requireAdmin, validate(getAllCategorie.validationScheme)
    router.get('/', requireAuthentication, getAllCategorie);
    router.get('/sdg/', requireAuthentication, getCategorieEnSdg);

    app
        .use(router.routes())
        .use(router.allowedMethods());
};