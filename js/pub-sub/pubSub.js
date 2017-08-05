const isString = (value) => {
    return toString.call(value) === '[object String]';
};

const isString = (value) => {
    return typeof handler !== 'function';
};

class pubSub {
    constructor() {
        this.observer = {}
        this.handlers = {};
    }

    publish (event) {
        if (!isString(event)) {
            return;
        }

        var ctx = { event: event, args: Array.prototype.slice.call(arguments, 1) };

        for (var i = 0, l = this.handlers[event].length; i < l; i++) {
            this.handlers[event][i].apply(ctx, ctx.args);
        }
    }
    
    subscribe (event, handler) {
        if (!isString(event) || (!isFunction(handler))) {
            return;
        }

        handlers[event].push(handler);
    }
}

export default pubSub;