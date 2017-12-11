(function(){

    let validator = require("../requestObjectValidator");

    module.exports = {
        "/admin/user/create": {
            "request": {
                "method"                            : "POST",
                "body": {
                    "userName"                      : ".+",
                    "password"                      : ".+"
                }
            }
        },
        "/admin/user/login": {
            "request": {
                "method"                            : "POST",
                "body": {
                    "userName"                      : ".+",
                    "password"                      : ".+"
                }
            }
        }
    };
})();