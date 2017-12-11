(function(){

    let moment = require("moment");

    let later = require("later");

    let getMethod = require("../config/getGlobalMethod");

    let methodName = getMethod.FileName;

    let Scheduler = function Scheduler(config, tnxId){
        this.config = config;
        this.config.requestType = "Query";
        this.tnxId = "Scheduler Manager";
        //this.queryDate = moment().add(1, "days").format("MM/DD/YYYY");
        //this.endDate = new Date(this.queryDate).getTime() + 60 * 60 * 23.9999 * 1000;
        later.date.UTC();
    };

    Scheduler.prototype = {
        runScheduleJobs: function(){
            //let everyDay8am = later.parse.text("at 2:30 am");//
            //let everyDay730am = later.parse.text("at 2:00 am");//

            let everyMorning = later.parse.text("at 6:29 pm");//IST REDUCE -5:30 from actual time
            //let everyDay = later.parse.text("every 1 mins");//
            //let everySaturday = later.parse.text("at 3:30 pm on Sat");
            //let everyMonFri = later.parse.text("at 5:30 am on Mon and Fri");

            this.scheduleServices("assignNuggetToUsers", everyMorning, this.config, this.tnxId);
            //this.scheduleServices("sendScheduledEmails", everyDay730am, this.config, this.tnxId);
        },
        scheduleServices: function(fName, timer, config, tnxId){
            later.setInterval(function(){
                let scheduler = new Scheduler(config, tnxId);
                scheduler[fName]();
            }, timer);
        },
        assignNuggetToUsers: function(){
            let nuggetMethod = getMethod(methodName.nugget);
            let resHandle = this.scheduleTaskComplete.bind(this);

            let query = {};
            let nugget = nuggetMethod(this.config, this.tnxId);
            nugget.everydayAssignNugget(query, resHandle);
        },
        scheduleTaskComplete: function(){
        }
    };

    module.exports = function(config , tnxId){
        return (new Scheduler(config , tnxId));
    };
})();