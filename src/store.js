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

    // This often goes in each case that should trigger a UI change. This store
    // needs to trigger a UI change after every view action, so we can make the
    // code less repetitive by putting it here.  We need the default case,
    // however, to make sure this only gets called after one of the cases above.
    _Store.emitChange();

    return true; // No errors.  Needed by promise in Dispatcher.
});

module.exports = _Store;

//class Store extends EventEmitter {
    //emitChange() {
        //this.emit('change');
    //}

    //addChangeListener(callback) {
        //this.on('change', callback);
    //}

    //removeChangeListener(callback) {
        //this.removeListener('change', callback);
    //}

    //getAll() {
        //let jsStore = _store.toJS();

        //return jsStore;
    //}
//}

//const _Store = new Store();

//_Store.dispatchToken = AppDispatcher.register(payload => {
    //let action = payload;

//});
