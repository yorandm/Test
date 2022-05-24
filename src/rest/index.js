const Router = require('@koa/router');
const installUserRouter = require('./_user');
const installCategorieRouter = require('./_categorie');
const installDoelstellingRouter = require('./_doelstelling');
const installSdgRouter = require('./_sdgs');
const installDatasourceRouter = require('./_datasource');
const installTemplateRouter = require('./_template');
/**
 * Install all routes in the given Koa application.
 *
 * @param {Koa} app - The Koa application.
 */
module.exports = (app) => {
    const router = new Router({
        prefix: '/api',
    });


    installUserRouter(router);
    installCategorieRouter(router);
    installDoelstellingRouter(router);
    installSdgRouter(router);
    installDatasourceRouter(router);
    installTemplateRouter(router);

    app.use(router.routes()).use(router.allowedMethods());
};