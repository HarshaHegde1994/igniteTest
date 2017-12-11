(function(){

    let send = require("koa-send");

    let getMethod = require("../../config/getGlobalMethod");

    let methodName = getMethod.FileName;

    let apiLoader = getMethod(methodName.apiLoader);

    let routes = getMethod(methodName.adminRoutes);

    module.exports = function (router) {

        router.get("/admin", async function (ctx, next) {
            await send(ctx, "./public/admin/index.html");
        });

        router.get("/admin/image/:id/:extension", async function (ctx, next) {
            let requestParam = ctx.request.params;
            let imagePath = requestParam.id + "/" + requestParam.id + "." + requestParam.extension;
            await send(ctx, "./nodedb/imageAbstractor/" + imagePath);
        });

        apiLoader(router, routes);
    };
})();