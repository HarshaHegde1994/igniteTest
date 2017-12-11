(function () {
    <!--##################################Require the Modules########################################################-->

    let timestamps = require("@cloudmpower/utility_async").timestamp;

    module.exports = function(db) {

        let mongoose = db.mongoose;

        let Schema = mongoose.Schema;

        let Login = new Schema({
            userName: {type: String, required: true},
            password: {type: String, default: 'P'}
        });

        module.exports.Login = mongoose.model('login', Login);
    }
})();