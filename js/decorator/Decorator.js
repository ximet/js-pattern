var TimeManager = function () {
    console.log('defaultTimeManager');
};

TimeManager.prototype = {
    logWork: function () {
        console.log('Logging work');
    },

    deleteLogWork: function () {
        console.log('Delete Logging work');
    },

    checkLogWork: function () {
        return 6;
    }
};

TimeManagerDecorator = function (TimeManager) {
    this.TimeManager = TimeManager;
};

TimeManagerDecorator.proptotype = {
    checkLogWorkWithDinner: function () {
        return this.TimeManager.checkLogWork() + 1;
    }
};
