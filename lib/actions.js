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

exports.default = function (options) {

    /**
     * caches the method count so the correct method is called later on.
     */
    var id = methodCount++;

    /**
     * Creates a method in the store that is called in the store via
     * dispatcher call below.
     */
    _store2.default.methods[id] = function (data) {
        options.storeMethod(data, _store2.default);
    };

    if (options.url) {

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFJLFdBQVcsU0FBWCxRQUFXLENBQUMsRUFBRCxFQUFLLElBQUwsRUFBYztBQUN6Qix5QkFBVyxnQkFBWCxDQUE0QjtBQUN4QixvQkFBYSxFQUFiO0FBQ0EsY0FBYSxJQUFiO0tBRkosRUFEeUI7Q0FBZDs7Ozs7QUFVZixJQUFJLGNBQWMsQ0FBZDs7a0JBRVcsVUFBQyxPQUFELEVBQWE7Ozs7O0FBS3hCLFFBQUksS0FBSyxhQUFMOzs7Ozs7QUFMb0IsbUJBV3hCLENBQU0sT0FBTixDQUFjLEVBQWQsSUFBb0IsVUFBQyxJQUFELEVBQVU7QUFDMUIsZ0JBQVEsV0FBUixDQUFvQixJQUFwQixtQkFEMEI7S0FBVixDQVhJOztBQWV4QixRQUFHLFFBQVEsR0FBUixFQUFhOzs7OztBQUtaLGVBQU8sdUJBQVEsT0FBUixFQUFpQixJQUFqQixDQUFzQixVQUFDLElBQUQsRUFBVTtBQUNuQyxxQkFBUyxFQUFULEVBQWEsSUFBYixFQURtQztBQUVuQyxtQkFBTyxRQUFRLE9BQVIsRUFBUCxDQUZtQztTQUFWLENBQXRCLENBR0osS0FISSxDQUdFLFVBQUMsU0FBRCxFQUFlO0FBQ3BCLG1CQUFPLFFBQVEsTUFBUixDQUFlLFNBQWYsQ0FBUCxDQURvQjtTQUFmLENBSFQsQ0FMWTtLQUFoQixNQVlPOzs7OztBQUtILGlCQUFTLEVBQVQsRUFMRztBQU1ILGVBQU8sUUFBUSxPQUFSLEVBQVAsQ0FORztLQVpQO0NBZlciLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkaXNwYXRjaGVyIGZyb20gJy4vZGlzcGF0Y2hlci5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3JlcXVlc3QuanMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUuanMnO1xuXG5sZXQgZGlzcGF0Y2ggPSAoaWQsIGRhdGEpID0+IHtcbiAgICBkaXNwYXRjaGVyLmhhbmRsZVZpZXdBY3Rpb24oe1xuICAgICAgICBhY3Rpb25UeXBlIDogaWQsXG4gICAgICAgIGRhdGEgICAgICAgOiBkYXRhXG4gICAgfSk7XG59O1xuXG4vKipcbiAqIHVzZWQgdG8gaWRlbnRpZnkgdGhlIHN0b3JlIG1ldGhvZHNcbiAqL1xubGV0IG1ldGhvZENvdW50ID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgKG9wdGlvbnMpID0+IHtcblxuICAgIC8qKlxuICAgICAqIGNhY2hlcyB0aGUgbWV0aG9kIGNvdW50IHNvIHRoZSBjb3JyZWN0IG1ldGhvZCBpcyBjYWxsZWQgbGF0ZXIgb24uXG4gICAgICovXG4gICAgbGV0IGlkID0gbWV0aG9kQ291bnQrKztcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBtZXRob2QgaW4gdGhlIHN0b3JlIHRoYXQgaXMgY2FsbGVkIGluIHRoZSBzdG9yZSB2aWFcbiAgICAgKiBkaXNwYXRjaGVyIGNhbGwgYmVsb3cuXG4gICAgICovXG4gICAgc3RvcmUubWV0aG9kc1tpZF0gPSAoZGF0YSkgPT4ge1xuICAgICAgICBvcHRpb25zLnN0b3JlTWV0aG9kKGRhdGEsIHN0b3JlKTtcbiAgICB9O1xuXG4gICAgaWYob3B0aW9ucy51cmwpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbHMgdGhlIFJFU1Qgc2VydmljZSB1cmwgcHJvdmlkZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gcmVxdWVzdChvcHRpb25zKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChpZCwgZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH0pLmNhdGNoKChlcnJvckRhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvckRhdGEpO1xuICAgICAgICB9KTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJ5cGFzc2VzIGFueSBzZXJ2aWNlIGNhbGxzIGFuZCBnb2VzIHJpZ2h0IHRvIHRoZSBkaXNwYXRjaGVyIHRoZW4gc3RvcmUuXG4gICAgICAgICAqL1xuICAgICAgICBkaXNwYXRjaChpZCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG59O1xuIl19
