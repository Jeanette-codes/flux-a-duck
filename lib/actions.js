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

exports.default = function (options) {

    /**
     * caches the method count so the correct method is called later on.
     */
    var id = methodCount++;

    /**
     * Creates a method in the store that is called in the store via
     * dispatcher call below.
     */

    console.log('options: ', options);
    _store2.default.methods[id] = function (data) {
        options.storeMethod(data, _store2.default);
    };

    if (options.url) {

        /**
         * Calls the REST service url provided for now.
         * TODO: add other REST methods.
         */
        return _request2.default.get(options).then(function (data) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxJQUFJLGdCQUFnQixTQUFoQixhQUFnQixDQUFDLEtBQUQsRUFBVztBQUMzQixRQUFJLFNBQVMsTUFBTSxLQUFOLEVBQWE7QUFDdEIsZ0JBQVEsS0FBUixDQUFjLE1BQU0sS0FBTixDQUFkLENBRHNCO0tBQTFCLE1BRU87QUFDSCxnQkFBUSxLQUFSLENBQWMsS0FBZCxFQURHO0tBRlA7Q0FEZ0I7Ozs7O0FBV3BCLElBQUksY0FBYyxDQUFkOztrQkFFVyxVQUFDLE9BQUQsRUFBYTs7Ozs7QUFLeEIsUUFBSSxLQUFLLGFBQUw7Ozs7Ozs7QUFMb0IsV0FZeEIsQ0FBUSxHQUFSLENBQVksV0FBWixFQUF5QixPQUF6QixFQVp3QjtBQWF4QixvQkFBTSxPQUFOLENBQWMsRUFBZCxJQUFvQixVQUFDLElBQUQsRUFBVTtBQUMxQixnQkFBUSxXQUFSLENBQW9CLElBQXBCLG1CQUQwQjtLQUFWLENBYkk7O0FBaUJ4QixRQUFHLFFBQVEsR0FBUixFQUFhOzs7Ozs7QUFNWixlQUFPLGtCQUFRLEdBQVIsQ0FBWSxPQUFaLEVBQXFCLElBQXJCLENBQTBCLFVBQUMsSUFBRCxFQUFVO0FBQ3ZDLGlDQUFXLGdCQUFYLENBQTRCO0FBQ3hCLDRCQUFhLEVBQWI7QUFDQSxzQkFBYSxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWI7YUFGSixFQUR1QztBQUt2QyxtQkFBTyxRQUFRLE9BQVIsRUFBUCxDQUx1QztTQUFWLENBQTFCLENBTUosS0FOSSxDQU1FLFVBQUMsU0FBRCxFQUFlO0FBQ3BCLDBCQUFjLFNBQWQsRUFEb0I7QUFFcEIsbUJBQU8sUUFBUSxNQUFSLENBQWUsU0FBZixDQUFQLENBRm9CO1NBQWYsQ0FOVCxDQU5ZO0tBQWhCLE1BZ0JPOzs7OztBQUtILDZCQUFXLGdCQUFYLENBQTRCO0FBQ3hCLHdCQUFhLEVBQWI7QUFDQSxrQkFBYSxFQUFiO1NBRkosRUFMRztBQVNILGVBQU8sUUFBUSxPQUFSLEVBQVAsQ0FURztLQWhCUDtDQWpCVyIsImZpbGUiOiJhY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSAnLi9kaXNwYXRjaGVyLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vcmVxdWVzdC5qcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZS5qcyc7XG5cbi8qKlxuICogU28gRXJyb3JzIGFyZW4ndCBoaWRkZW4gYnkgdGhlIGRpc3BhdGNoZXIuXG4gKi9cbmxldCBnZXRFcnJvclN0YWNrID0gKGVycm9yKSA9PiB7XG4gICAgaWYgKGVycm9yICYmIGVycm9yLnN0YWNrKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3Iuc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbn1cblxuLyoqXG4gKiB1c2VkIHRvIGlkZW50aWZ5IHRoZSBzdG9yZSBtZXRob2RzXG4gKi9cbmxldCBtZXRob2RDb3VudCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IChvcHRpb25zKSA9PiB7XG5cbiAgICAvKipcbiAgICAgKiBjYWNoZXMgdGhlIG1ldGhvZCBjb3VudCBzbyB0aGUgY29ycmVjdCBtZXRob2QgaXMgY2FsbGVkIGxhdGVyIG9uLlxuICAgICAqL1xuICAgIGxldCBpZCA9IG1ldGhvZENvdW50Kys7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbWV0aG9kIGluIHRoZSBzdG9yZSB0aGF0IGlzIGNhbGxlZCBpbiB0aGUgc3RvcmUgdmlhXG4gICAgICogZGlzcGF0Y2hlciBjYWxsIGJlbG93LlxuICAgICAqL1xuXG4gICAgY29uc29sZS5sb2coJ29wdGlvbnM6ICcsIG9wdGlvbnMpO1xuICAgIHN0b3JlLm1ldGhvZHNbaWRdID0gKGRhdGEpID0+IHtcbiAgICAgICAgb3B0aW9ucy5zdG9yZU1ldGhvZChkYXRhLCBzdG9yZSk7XG4gICAgfTtcblxuICAgIGlmKG9wdGlvbnMudXJsKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxzIHRoZSBSRVNUIHNlcnZpY2UgdXJsIHByb3ZpZGVkIGZvciBub3cuXG4gICAgICAgICAqIFRPRE86IGFkZCBvdGhlciBSRVNUIG1ldGhvZHMuXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gcmVxdWVzdC5nZXQob3B0aW9ucykudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hlci5oYW5kbGVWaWV3QWN0aW9uKHtcbiAgICAgICAgICAgICAgICBhY3Rpb25UeXBlIDogaWQsXG4gICAgICAgICAgICAgICAgZGF0YSAgICAgICA6IEpTT04ucGFyc2UoZGF0YSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9KS5jYXRjaCgoZXJyb3JEYXRhKSA9PiB7XG4gICAgICAgICAgICBnZXRFcnJvclN0YWNrKGVycm9yRGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3JEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQnlwYXNzZXMgYW55IHNlcnZpY2UgY2FsbHMgYW5kIGdvZXMgcmlnaHQgdG8gdGhlIGRpc3BhdGNoZXIgdGhlbiBzdG9yZS5cbiAgICAgICAgICovXG4gICAgICAgIGRpc3BhdGNoZXIuaGFuZGxlVmlld0FjdGlvbih7XG4gICAgICAgICAgICBhY3Rpb25UeXBlIDogaWQsXG4gICAgICAgICAgICBkYXRhICAgICAgIDoge31cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG59O1xuIl19
