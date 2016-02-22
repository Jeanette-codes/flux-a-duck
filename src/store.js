import dispatcher from './dispatcher.js';
import EventEmitter from 'events';
import Immutable from 'immutable';

let CHANGE_EVENT = 'change';

let _store = Immutable.fromJS({
    testData : 'Test Data'
});

class Store extends EventEmitter {
    constructor() {
        super();
        this.methods = {};
    }

    getAll() {
        return _store;
    }

    getAllJS() {
        return _store.toJS();
    }

    replace(newStore) {
        _store = newStore;
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
};

const _Store = new Store();

_Store.dispatchToken = dispatcher.register((payload) => {
    let action = payload.action;

    if(_Store.methods[action.actionType]) {
        _Store.methods[action.actionType](action.data);
    } else {
        throw 'there is no ' + action.actionType + ' method in the store';
    }

    _Store.emitChange();

    return true; // No errors.  Needed by promise in Dispatcher.
});

module.exports = _Store;
