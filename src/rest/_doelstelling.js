const Router = require('@koa/router');
const doelstellingService = require('../service/doelstelling');

const getAllDoelstellingen = async(ctx) => {
    ctx.body = await doelstellingService.getAllDoelstellingen();
};

const getDoelstellingForSdg = async(ctx) => {
    ctx.body = await doelstellingService.getDoelstellingenBySdg(ctx.params.sdg);
};

module.exports = (app) => {
    const router = new Router({
        prefix: '/doelstellingen',
    });

    // router.get('/', getAllDoelstellingen);
    router.get('/sdg/:sdg', getDoelstellingForSdg);

    app.use(router.routes()).use(router.allowedMethods());
};