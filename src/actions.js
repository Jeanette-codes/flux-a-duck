import dispatcher from './dispatcher.js';
import request from './request.js';
import store from './store.js';

/**
 * So Errors aren't hidden by the dispatcher.
 */
let getErrorStack = (error) => {
    if (error && error.stack) {
        console.error(error.stack);
    } else {
        console.error(error);
    }
};

/**
 * used to identify the store methods
 */
let methodCount = 0;

export default (options) => {

    /**
     * caches the method count so the correct method is called later on.
     */
    let id = methodCount++;

    /**
     * Creates a method in the store that is called in the store via
     * dispatcher call below.
     */
    store.methods[id] = (data) => {
        options.storeMethod(data, store);
    };

    if(options.url) {

        /**
         * Calls the REST service url provided for now.
         */
        return request(options).then((data) => {
            dispatcher.handleViewAction({
                actionType : id,
                data       : JSON.parse(data)
            });
            return Promise.resolve();
        }).catch((errorData) => {
            getErrorStack(errorData);
            return Promise.reject(errorData);
        });

    } else {

        /**
         * Bypasses any service calls and goes right to the dispatcher then store.
         */
        dispatcher.handleViewAction({
            actionType : id,
            data       : {}
        });
        return Promise.resolve();
    }
};
