(function(){

    let interactor = require("@cloudmpower/interactor_async");

    let loadOtherModules = function(){

        let exceptionManager = require("@cloudmpower/exceptionmanager_async");

        let adminRoutes = require("../router/admin/route");

        let database = require("../databases/dbModel/model");

        let apiLoader = require("@cloudmpower/apiloader_async");

        let userCommand = require("../apiMethods/user/userCommand");

        let userQuery = require("../apiMethods/user/userQuery");

        let referenceObj = [
            {
                fileName        : "exceptionManager",
                fileObj         : exceptionManager
            },
            {
                fileName        : "database",
                fileObj         : database
            },
            {
                fileName        : "adminRoutes",
                fileObj         : adminRoutes
            },
            {
                fileName        : "apiLoader",
                fileObj         : apiLoader
            },
            {
                fileName        : "userCommand",
                fileObj         : userCommand
            },
            {
                fileName        : "userQuery",
                fileObj         : userQuery
            }
        ];
        interactor.requireHandler(referenceObj);
    };

    module.exports = interactor;

    module.exports.FileName = interactor.fileName();

    loadOtherModules();
})();