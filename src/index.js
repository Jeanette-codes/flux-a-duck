import actions from './actions';
import store from './store';

class FAD {

    constructor() {
        this.action = this._action;
        this.getAllJS = this._getAllJS;
        this.addChangeListener = this._addChangeListener;
    }

    _action(options) {
        return actions({
            url : options.url,
            name : options.name,
            storeMethod : options.storeMethod
        }).then(() => {
            return Promise.resolve();
        });
    }

    _addChangeListener(callback) {
        console.log('callback: ', callback);
        return store.addChangeListener(callback);
    }

    _getAllJS() {
        return store.getAllJS();
    }
}

export default new FAD();
