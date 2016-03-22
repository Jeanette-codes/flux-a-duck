'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _dispatcher = require('./dispatcher.js');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _request = require('./request.js');

var _request2 = _interopRequireDefault(_request);

var _store = require('./store.js');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dispatch = function dispatch(id, data) {
    _dispatcher2.default.handleViewAction({
        actionType: id,
        data: data
    });
};

/**
 * used to identify the store methods
 */
var methodCount = 0;

exports.default = function (options, callback) {

    /**
     * caches the method count so the correct method is called later on.
     */
    var id = methodCount++;

    /**
     * Creates a method in the store that is called in the store via
     * dispatcher call below.
     */
    _store2.default.methods[id] = function (data) {
        console.log(typeof callback === 'undefined' ? 'undefined' : _typeof(callback));
        callback(data, _store2.default);
    };

    if (options && options.url) {

        /**
         * Calls the REST service url provided.
         */
        return (0, _request2.default)(options).then(function (data) {
            dispatch(id, data);
            return Promise.resolve();
        }).catch(function (errorData) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLElBQUksV0FBVyxTQUFYLFFBQVcsQ0FBQyxFQUFELEVBQUssSUFBTCxFQUFjO0FBQ3pCLHlCQUFXLGdCQUFYLENBQTRCO0FBQ3hCLG9CQUFhLEVBQWI7QUFDQSxjQUFhLElBQWI7S0FGSixFQUR5QjtDQUFkOzs7OztBQVVmLElBQUksY0FBYyxDQUFkOztrQkFFVyxVQUFDLE9BQUQsRUFBVSxRQUFWLEVBQXVCOzs7OztBQUtsQyxRQUFJLEtBQUssYUFBTDs7Ozs7O0FBTDhCLG1CQVdsQyxDQUFNLE9BQU4sQ0FBYyxFQUFkLElBQW9CLFVBQUMsSUFBRCxFQUFVO0FBQzFCLGdCQUFRLEdBQVIsUUFBbUIsMERBQW5CLEVBRDBCO0FBRTFCLGlCQUFTLElBQVQsbUJBRjBCO0tBQVYsQ0FYYzs7QUFnQmxDLFFBQUcsV0FBVyxRQUFRLEdBQVIsRUFBYTs7Ozs7QUFLdkIsZUFBTyx1QkFBUSxPQUFSLEVBQWlCLElBQWpCLENBQXNCLFVBQUMsSUFBRCxFQUFVO0FBQ25DLHFCQUFTLEVBQVQsRUFBYSxJQUFiLEVBRG1DO0FBRW5DLG1CQUFPLFFBQVEsT0FBUixFQUFQLENBRm1DO1NBQVYsQ0FBdEIsQ0FHSixLQUhJLENBR0UsVUFBQyxTQUFELEVBQWU7QUFDcEIsbUJBQU8sUUFBUSxNQUFSLENBQWUsU0FBZixDQUFQLENBRG9CO1NBQWYsQ0FIVCxDQUx1QjtLQUEzQixNQVlPOzs7OztBQUtILGlCQUFTLEVBQVQsRUFMRztBQU1ILGVBQU8sUUFBUSxPQUFSLEVBQVAsQ0FORztLQVpQO0NBaEJXIiwiZmlsZSI6ImFjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGlzcGF0Y2hlciBmcm9tICcuL2Rpc3BhdGNoZXIuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9yZXF1ZXN0LmpzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlLmpzJztcblxubGV0IGRpc3BhdGNoID0gKGlkLCBkYXRhKSA9PiB7XG4gICAgZGlzcGF0Y2hlci5oYW5kbGVWaWV3QWN0aW9uKHtcbiAgICAgICAgYWN0aW9uVHlwZSA6IGlkLFxuICAgICAgICBkYXRhICAgICAgIDogZGF0YVxuICAgIH0pO1xufTtcblxuLyoqXG4gKiB1c2VkIHRvIGlkZW50aWZ5IHRoZSBzdG9yZSBtZXRob2RzXG4gKi9cbmxldCBtZXRob2RDb3VudCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IChvcHRpb25zLCBjYWxsYmFjaykgPT4ge1xuXG4gICAgLyoqXG4gICAgICogY2FjaGVzIHRoZSBtZXRob2QgY291bnQgc28gdGhlIGNvcnJlY3QgbWV0aG9kIGlzIGNhbGxlZCBsYXRlciBvbi5cbiAgICAgKi9cbiAgICBsZXQgaWQgPSBtZXRob2RDb3VudCsrO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG1ldGhvZCBpbiB0aGUgc3RvcmUgdGhhdCBpcyBjYWxsZWQgaW4gdGhlIHN0b3JlIHZpYVxuICAgICAqIGRpc3BhdGNoZXIgY2FsbCBiZWxvdy5cbiAgICAgKi9cbiAgICBzdG9yZS5tZXRob2RzW2lkXSA9IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBjYWxsYmFjayk7XG4gICAgICAgIGNhbGxiYWNrKGRhdGEsIHN0b3JlKTtcbiAgICB9O1xuXG4gICAgaWYob3B0aW9ucyAmJiBvcHRpb25zLnVybCkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxscyB0aGUgUkVTVCBzZXJ2aWNlIHVybCBwcm92aWRlZC5cbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiByZXF1ZXN0KG9wdGlvbnMpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGlkLCBkYXRhKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yRGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yRGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQnlwYXNzZXMgYW55IHNlcnZpY2UgY2FsbHMgYW5kIGdvZXMgcmlnaHQgdG8gdGhlIGRpc3BhdGNoZXIgdGhlbiBzdG9yZS5cbiAgICAgICAgICovXG4gICAgICAgIGRpc3BhdGNoKGlkKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbn07XG4iXX0=
