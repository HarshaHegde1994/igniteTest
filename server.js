(function(){

    var koa = require("koa");

    var mongoDB = require("koa-mongoose");

    var inputConfig = process.argv[2] || "systemConfig";
    var systemConfigFile = "./nodedb/config/"+ inputConfig +".json";

    var getMethod = require("./nodedb/config/getGlobalMethod");
    var methodName = getMethod.FileName;

    var config = getMethod(methodName.serverConfig)("admin", systemConfigFile);
    config.appPort = 3000;

    getMethod(methodName.database)(mongoDB);
    var middleware = require("./nodedb/router/admin/middleware");
    var app = new koa();

    middleware(app, mongoDB, config);
    var exception = getMethod(methodName.exceptionManager)(config, "appStarted");

    //Exception Handling
    exception.enableAppExceptionHandling(app);
    exception.enableExceptionHandling();

    app.listen(config.appPort);
})();