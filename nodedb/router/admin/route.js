(function () {

    module.exports = [
        {
            "path"             : "/admin/user/create",
            "method"           : "post",
            "model"            : "Login",
            "module"           : "userCommand",
            "handler"          : "userCreate",
            "contentType"      : "application/json"
        },
        {
            "path"             : "/admin/user/login",
            "method"           : "post",
            "model"            : "Login",
            "module"           : "userQuery",
            "handler"          : "userLogin",
            "contentType"      : "application/json"
        }
    ];

})();