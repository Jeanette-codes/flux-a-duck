import dispatcher from './dispatcher.js';
import request from './request.js';
import store from './store.js';

let getErrorStack = (error) => {
    if (error && error.stack) {
        console.error(error.stack);
    } else {
        console.error(error);
    }
}

export default (settings) => {

    /**
     * Checks for duplicate store methods so that they are not overwritten.
     * Duplicates will not be used in the store, only the first of a given name. 
     */
    for(let method in store.methods) {
        if(method === settings.name) {
            throw 'Error, there is already a store method of the name: '+ settings.name +'. Duplicate store methods will not be accessible.';
        }
    }

    /**
     * Creates method in the store that is called in the index file
     */
    store.methods[settings.name] = (data) => {
        settings.storeMethod(data, store);
    };


    return request.get(settings.url, {}).then((data) => {
        dispatcher.handleViewAction({
            actionType : settings.name,
            data       : JSON.parse(data)
        });
        return Promise.resolve();
    }).catch((errorData) => {
        getErrorStack(errorData);
        return Promise.reject(errorData);
    });
};
