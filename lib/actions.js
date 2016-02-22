'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dispatcher = require('./dispatcher.js');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _request = require('./request.js');

var _request2 = _interopRequireDefault(_request);

var _store = require('./store.js');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getErrorStack = function getErrorStack(error) {
    if (error && error.stack) {
        console.error(error.stack);
    } else {
        console.error(error);
    }
};

exports.default = function (settings) {

    /**
     * Checks for duplicate store methods so that they are not overwritten.
     * Duplicates will not be used in the store, only the first of a given name. 
     */
    for (var method in _store2.default.methods) {
        if (method === settings.name) {
            throw 'Error, there is already a store method of the name: ' + settings.name + '. Duplicate store methods will not be accessible.';
        }
    }

    /**
     * Creates method in the store that is called in the index file
     */
    _store2.default.methods[settings.name] = function (data) {
        settings.storeMethod(data, _store2.default);
    };

    return _request2.default.get(settings.url, {}).then(function (data) {
        _dispatcher2.default.handleViewAction({
            actionType: settings.name,
            data: JSON.parse(data)
        });
        return Promise.resolve();
    }).catch(function (errorData) {
        getErrorStack(errorData);
        return Promise.reject(errorData);
    });
};