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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0EsSUFBSSxnQkFBZ0IsU0FBaEIsYUFBZ0IsQ0FBQyxLQUFELEVBQVc7QUFDM0IsUUFBSSxTQUFTLE1BQU0sS0FBTixFQUFhO0FBQ3RCLGdCQUFRLEtBQVIsQ0FBYyxNQUFNLEtBQU4sQ0FBZCxDQURzQjtLQUExQixNQUVPO0FBQ0gsZ0JBQVEsS0FBUixDQUFjLEtBQWQsRUFERztLQUZQO0NBRGdCOzs7OztBQVdwQixJQUFJLGNBQWMsQ0FBZDs7a0JBRVcsVUFBQyxRQUFELEVBQWM7Ozs7O0FBS3pCLFFBQUksS0FBSyxhQUFMOzs7Ozs7QUFMcUIsbUJBV3pCLENBQU0sT0FBTixDQUFjLEVBQWQsSUFBb0IsVUFBQyxJQUFELEVBQVU7QUFDMUIsaUJBQVMsV0FBVCxDQUFxQixJQUFyQixtQkFEMEI7S0FBVixDQVhLOztBQWV6QixRQUFHLFNBQVMsR0FBVCxFQUFjOzs7Ozs7QUFNYixlQUFPLGtCQUFRLEdBQVIsQ0FBWSxTQUFTLEdBQVQsRUFBYyxFQUExQixFQUE4QixJQUE5QixDQUFtQyxVQUFDLElBQUQsRUFBVTtBQUNoRCxpQ0FBVyxnQkFBWCxDQUE0QjtBQUN4Qiw0QkFBYSxFQUFiO0FBQ0Esc0JBQWEsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFiO2FBRkosRUFEZ0Q7QUFLaEQsbUJBQU8sUUFBUSxPQUFSLEVBQVAsQ0FMZ0Q7U0FBVixDQUFuQyxDQU1KLEtBTkksQ0FNRSxVQUFDLFNBQUQsRUFBZTtBQUNwQiwwQkFBYyxTQUFkLEVBRG9CO0FBRXBCLG1CQUFPLFFBQVEsTUFBUixDQUFlLFNBQWYsQ0FBUCxDQUZvQjtTQUFmLENBTlQsQ0FOYTtLQUFqQixNQWdCTzs7Ozs7QUFLSCw2QkFBVyxnQkFBWCxDQUE0QjtBQUN4Qix3QkFBYSxFQUFiO0FBQ0Esa0JBQWEsRUFBYjtTQUZKLEVBTEc7QUFTSCxlQUFPLFFBQVEsT0FBUixFQUFQLENBVEc7S0FoQlA7Q0FmVyIsImZpbGUiOiJhY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSAnLi9kaXNwYXRjaGVyLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vcmVxdWVzdC5qcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZS5qcyc7XG5cbi8qKlxuICogU28gRXJyb3JzIGFyZW4ndCBoaWRkZW4gYnkgdGhlIGRpc3BhdGNoZXIuXG4gKi9cbmxldCBnZXRFcnJvclN0YWNrID0gKGVycm9yKSA9PiB7XG4gICAgaWYgKGVycm9yICYmIGVycm9yLnN0YWNrKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3Iuc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbn1cblxuLyoqXG4gKiB1c2VkIHRvIGlkZW50aWZ5IHRoZSBzdG9yZSBtZXRob2RzXG4gKi9cbmxldCBtZXRob2RDb3VudCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncykgPT4ge1xuXG4gICAgLyoqXG4gICAgICogY2FjaGVzIHRoZSBtZXRob2QgY291bnQgc28gdGhlIGNvcnJlY3QgbWV0aG9kIGlzIGNhbGxlZCBsYXRlciBvbi5cbiAgICAgKi9cbiAgICBsZXQgaWQgPSBtZXRob2RDb3VudCsrO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG1ldGhvZCBpbiB0aGUgc3RvcmUgdGhhdCBpcyBjYWxsZWQgaW4gdGhlIHN0b3JlIHZpYVxuICAgICAqIGRpc3BhdGNoZXIgY2FsbCBiZWxvdy5cbiAgICAgKi9cbiAgICBzdG9yZS5tZXRob2RzW2lkXSA9IChkYXRhKSA9PiB7XG4gICAgICAgIHNldHRpbmdzLnN0b3JlTWV0aG9kKGRhdGEsIHN0b3JlKTtcbiAgICB9O1xuXG4gICAgaWYoc2V0dGluZ3MudXJsKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxzIHRoZSBSRVNUIHNlcnZpY2UgdXJsIHByb3ZpZGVkIGZvciBub3cuXG4gICAgICAgICAqIFRPRE86IGFkZCBvdGhlciBSRVNUIG1ldGhvZHMuXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gcmVxdWVzdC5nZXQoc2V0dGluZ3MudXJsLCB7fSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hlci5oYW5kbGVWaWV3QWN0aW9uKHtcbiAgICAgICAgICAgICAgICBhY3Rpb25UeXBlIDogaWQsXG4gICAgICAgICAgICAgICAgZGF0YSAgICAgICA6IEpTT04ucGFyc2UoZGF0YSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9KS5jYXRjaCgoZXJyb3JEYXRhKSA9PiB7XG4gICAgICAgICAgICBnZXRFcnJvclN0YWNrKGVycm9yRGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3JEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQnlwYXNzZXMgYW55IHNlcnZpY2UgY2FsbHMgYW5kIGdvZXMgcmlnaHQgdG8gdGhlIGRpc3BhdGNoZXIgdGhlbiBzdG9yZS5cbiAgICAgICAgICovXG4gICAgICAgIGRpc3BhdGNoZXIuaGFuZGxlVmlld0FjdGlvbih7XG4gICAgICAgICAgICBhY3Rpb25UeXBlIDogaWQsXG4gICAgICAgICAgICBkYXRhICAgICAgIDoge31cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG59O1xuIl19