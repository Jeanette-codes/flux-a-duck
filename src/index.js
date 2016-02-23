import actions from './actions';
import store from './store';

/**
 * This is where the API is declared
 */
class FAD {

    /**
     * Public methods and variables go here
     */
    constructor() {
        this.action = this._action;
        this.getAllJS = this._getAllJS;
        this.addChangeListener = this._addChangeListener;
    }

    _action(options) {
        return actions({
            url : options.url,
            storeMethod : options.storeMethod
        }).then(() => {
            return Promise.resolve();
        });
    }

    _addChangeListener(callback) {
        return store.addChangeListener(callback);
    }

    _getAllJS() {
        return store.getAllJS();
    }
}

export default new FAD();
