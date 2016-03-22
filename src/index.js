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

    _action() {
        let options, callback;

        // This allows the options or callback arguments to be in any order
        // takes only the first arguments to make the options and callback
        // all others are discarded.
        for(let i = 0, len = arguments.length; i < len; i++) {
            if(typeof arguments[i] === 'object' && options === undefined) {
                options = arguments[i];
            } else if(typeof arguments[i] === 'function' && callback === undefined) {
                callback = arguments[i];
            }
        }

        return actions(options, callback).then(() => {
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
