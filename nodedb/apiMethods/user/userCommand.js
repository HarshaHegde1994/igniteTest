(function(){

    let getMethod = require("../../config/getGlobalMethod");

    let methodName = getMethod.FileName;

    let modelName = "Login";

    module.exports.userCreate = async (commandObj) => {
        let request = commandObj.body;
        let model = getMethod(methodName.dbAbstrator)(modelName);
        let utils = commandObj.utils;

        let response = await model.save(request);
        console.log("At response************",response);
        return utils.createResponseObj(response, "SignUpFailed", "SignUpCompleted");
    };
})();