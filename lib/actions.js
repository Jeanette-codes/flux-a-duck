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

/**
 * So Errors aren't hidden by the dispatcher.
 */
var getErrorStack = function getErrorStack(error) {
    if (error && error.stack) {
        console.error(error.stack);
    } else {
        console.error(error);
    }
};

/**
 * used to identify the store methods
 */
var methodCount = 0;

exports.default = function (settings) {

    /**
     * caches the method count so the correct method is called later on.
     */
    var id = methodCount++;

    /**
     * Creates a method in the store that is called in the store via
     * dispatcher call below.
     */
    _store2.default.methods[id] = function (data) {
        settings.storeMethod(data, _store2.default);
    };

    if (settings.url) {

        /**
         * Calls the REST service url provided for now.
         * TODO: add other REST methods.
         */
        return _request2.default.get(settings.url, {}).then(function (data) {
            _dispatcher2.default.handleViewAction({
                actionType: id,
                data: JSON.parse(data)
            });
            return Promise.resolve();
        }).catch(function (errorData) {
            getErrorStack(errorData);
            return Promise.reject(errorData);
        });
    } else {

        /**
         * Bypasses any service calls and goes right to the dispatcher then store. 
         */
        _dispatcher2.default.handleViewAction({
            actionType: id,
            data: {}
        });
        return Promise.resolve();
    }
};