import dispatcher from './dispatcher.js';
import request from './request.js';
import store from './store.js';

let dispatch = (id, data) => {
    dispatcher.handleViewAction({
        actionType : id,
        data       : data
    });
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
         * Calls the REST service url provided.
         */
        return request(options).then((data) => {
            dispatch(id, data);
            return Promise.resolve();
        }).catch((errorData) => {
            return Promise.reject(errorData);
        });

    } else {

        /**
         * Bypasses any service calls and goes right to the dispatcher then store.
         */
        dispatch(id);
        return Promise.resolve();
    }
};
