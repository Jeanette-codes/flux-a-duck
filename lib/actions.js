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
         * TODO: test that data made it to server.
         */
        if (options.httpMethod === 'POST') {
            return _request2.default.post(options).then(function (data) {
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
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxJQUFJLGdCQUFnQixTQUFoQixhQUFnQixDQUFDLEtBQUQsRUFBVztBQUMzQixRQUFJLFNBQVMsTUFBTSxLQUFOLEVBQWE7QUFDdEIsZ0JBQVEsS0FBUixDQUFjLE1BQU0sS0FBTixDQUFkLENBRHNCO0tBQTFCLE1BRU87QUFDSCxnQkFBUSxLQUFSLENBQWMsS0FBZCxFQURHO0tBRlA7Q0FEZ0I7Ozs7O0FBV3BCLElBQUksY0FBYyxDQUFkOztrQkFFVyxVQUFDLE9BQUQsRUFBYTs7Ozs7QUFLeEIsUUFBSSxLQUFLLGFBQUw7Ozs7Ozs7QUFMb0IsV0FZeEIsQ0FBUSxHQUFSLENBQVksV0FBWixFQUF5QixPQUF6QixFQVp3QjtBQWF4QixvQkFBTSxPQUFOLENBQWMsRUFBZCxJQUFvQixVQUFDLElBQUQsRUFBVTtBQUMxQixnQkFBUSxXQUFSLENBQW9CLElBQXBCLG1CQUQwQjtLQUFWLENBYkk7O0FBaUJ4QixRQUFHLFFBQVEsR0FBUixFQUFhOzs7Ozs7O0FBT1osWUFBRyxRQUFRLFVBQVIsS0FBdUIsTUFBdkIsRUFBK0I7QUFDOUIsbUJBQU8sa0JBQVEsSUFBUixDQUFhLE9BQWIsRUFBc0IsSUFBdEIsQ0FBMkIsVUFBQyxJQUFELEVBQVU7QUFDeEMscUNBQVcsZ0JBQVgsQ0FBNEI7QUFDeEIsZ0NBQWEsRUFBYjtBQUNBLDBCQUFhLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBYjtpQkFGSixFQUR3QztBQUt4Qyx1QkFBTyxRQUFRLE9BQVIsRUFBUCxDQUx3QzthQUFWLENBQTNCLENBTUosS0FOSSxDQU1FLFVBQUMsU0FBRCxFQUFlO0FBQ3BCLDhCQUFjLFNBQWQsRUFEb0I7QUFFcEIsdUJBQU8sUUFBUSxNQUFSLENBQWUsU0FBZixDQUFQLENBRm9CO2FBQWYsQ0FOVCxDQUQ4QjtTQUFsQyxNQVdPO0FBQ0gsbUJBQU8sa0JBQVEsR0FBUixDQUFZLE9BQVosRUFBcUIsSUFBckIsQ0FBMEIsVUFBQyxJQUFELEVBQVU7QUFDdkMscUNBQVcsZ0JBQVgsQ0FBNEI7QUFDeEIsZ0NBQWEsRUFBYjtBQUNBLDBCQUFhLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBYjtpQkFGSixFQUR1QztBQUt2Qyx1QkFBTyxRQUFRLE9BQVIsRUFBUCxDQUx1QzthQUFWLENBQTFCLENBTUosS0FOSSxDQU1FLFVBQUMsU0FBRCxFQUFlO0FBQ3BCLDhCQUFjLFNBQWQsRUFEb0I7QUFFcEIsdUJBQU8sUUFBUSxNQUFSLENBQWUsU0FBZixDQUFQLENBRm9CO2FBQWYsQ0FOVCxDQURHO1NBWFA7S0FQSixNQStCTzs7Ozs7QUFLSCw2QkFBVyxnQkFBWCxDQUE0QjtBQUN4Qix3QkFBYSxFQUFiO0FBQ0Esa0JBQWEsRUFBYjtTQUZKLEVBTEc7QUFTSCxlQUFPLFFBQVEsT0FBUixFQUFQLENBVEc7S0EvQlA7Q0FqQlciLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkaXNwYXRjaGVyIGZyb20gJy4vZGlzcGF0Y2hlci5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3JlcXVlc3QuanMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUuanMnO1xuXG4vKipcbiAqIFNvIEVycm9ycyBhcmVuJ3QgaGlkZGVuIGJ5IHRoZSBkaXNwYXRjaGVyLlxuICovXG5sZXQgZ2V0RXJyb3JTdGFjayA9IChlcnJvcikgPT4ge1xuICAgIGlmIChlcnJvciAmJiBlcnJvci5zdGFjaykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLnN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIHVzZWQgdG8gaWRlbnRpZnkgdGhlIHN0b3JlIG1ldGhvZHNcbiAqL1xubGV0IG1ldGhvZENvdW50ID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgKG9wdGlvbnMpID0+IHtcblxuICAgIC8qKlxuICAgICAqIGNhY2hlcyB0aGUgbWV0aG9kIGNvdW50IHNvIHRoZSBjb3JyZWN0IG1ldGhvZCBpcyBjYWxsZWQgbGF0ZXIgb24uXG4gICAgICovXG4gICAgbGV0IGlkID0gbWV0aG9kQ291bnQrKztcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBtZXRob2QgaW4gdGhlIHN0b3JlIHRoYXQgaXMgY2FsbGVkIGluIHRoZSBzdG9yZSB2aWFcbiAgICAgKiBkaXNwYXRjaGVyIGNhbGwgYmVsb3cuXG4gICAgICovXG5cbiAgICBjb25zb2xlLmxvZygnb3B0aW9uczogJywgb3B0aW9ucyk7XG4gICAgc3RvcmUubWV0aG9kc1tpZF0gPSAoZGF0YSkgPT4ge1xuICAgICAgICBvcHRpb25zLnN0b3JlTWV0aG9kKGRhdGEsIHN0b3JlKTtcbiAgICB9O1xuXG4gICAgaWYob3B0aW9ucy51cmwpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbHMgdGhlIFJFU1Qgc2VydmljZSB1cmwgcHJvdmlkZWQgZm9yIG5vdy5cbiAgICAgICAgICogVE9ETzogYWRkIG90aGVyIFJFU1QgbWV0aG9kcy5cbiAgICAgICAgICogVE9ETzogdGVzdCB0aGF0IGRhdGEgbWFkZSBpdCB0byBzZXJ2ZXIuXG4gICAgICAgICAqL1xuICAgICAgICBpZihvcHRpb25zLmh0dHBNZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QucG9zdChvcHRpb25zKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2hlci5oYW5kbGVWaWV3QWN0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uVHlwZSA6IGlkLFxuICAgICAgICAgICAgICAgICAgICBkYXRhICAgICAgIDogSlNPTi5wYXJzZShkYXRhKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvckRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBnZXRFcnJvclN0YWNrKGVycm9yRGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yRGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0LmdldChvcHRpb25zKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2hlci5oYW5kbGVWaWV3QWN0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uVHlwZSA6IGlkLFxuICAgICAgICAgICAgICAgICAgICBkYXRhICAgICAgIDogSlNPTi5wYXJzZShkYXRhKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvckRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBnZXRFcnJvclN0YWNrKGVycm9yRGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yRGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQnlwYXNzZXMgYW55IHNlcnZpY2UgY2FsbHMgYW5kIGdvZXMgcmlnaHQgdG8gdGhlIGRpc3BhdGNoZXIgdGhlbiBzdG9yZS5cbiAgICAgICAgICovXG4gICAgICAgIGRpc3BhdGNoZXIuaGFuZGxlVmlld0FjdGlvbih7XG4gICAgICAgICAgICBhY3Rpb25UeXBlIDogaWQsXG4gICAgICAgICAgICBkYXRhICAgICAgIDoge31cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG59O1xuIl19
