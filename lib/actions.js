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
        callback(_store2.default, data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSSxXQUFXLFNBQVgsUUFBVyxDQUFDLEVBQUQsRUFBSyxJQUFMLEVBQWM7QUFDekIseUJBQVcsZ0JBQVgsQ0FBNEI7QUFDeEIsb0JBQWEsRUFBYjtBQUNBLGNBQWEsSUFBYjtLQUZKLEVBRHlCO0NBQWQ7Ozs7O0FBVWYsSUFBSSxjQUFjLENBQWQ7O2tCQUVXLFVBQUMsT0FBRCxFQUFVLFFBQVYsRUFBdUI7Ozs7O0FBS2xDLFFBQUksS0FBSyxhQUFMOzs7Ozs7QUFMOEIsbUJBV2xDLENBQU0sT0FBTixDQUFjLEVBQWQsSUFBb0IsVUFBQyxJQUFELEVBQVU7QUFDMUIsa0NBQWdCLElBQWhCLEVBRDBCO0tBQVYsQ0FYYzs7QUFlbEMsUUFBRyxXQUFXLFFBQVEsR0FBUixFQUFhOzs7OztBQUt2QixlQUFPLHVCQUFRLE9BQVIsRUFBaUIsSUFBakIsQ0FBc0IsVUFBQyxJQUFELEVBQVU7QUFDbkMscUJBQVMsRUFBVCxFQUFhLElBQWIsRUFEbUM7QUFFbkMsbUJBQU8sUUFBUSxPQUFSLEVBQVAsQ0FGbUM7U0FBVixDQUF0QixDQUdKLEtBSEksQ0FHRSxVQUFDLFNBQUQsRUFBZTtBQUNwQixtQkFBTyxRQUFRLE1BQVIsQ0FBZSxTQUFmLENBQVAsQ0FEb0I7U0FBZixDQUhULENBTHVCO0tBQTNCLE1BWU87Ozs7O0FBS0gsaUJBQVMsRUFBVCxFQUxHO0FBTUgsZUFBTyxRQUFRLE9BQVIsRUFBUCxDQU5HO0tBWlA7Q0FmVyIsImZpbGUiOiJhY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSAnLi9kaXNwYXRjaGVyLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vcmVxdWVzdC5qcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZS5qcyc7XG5cbmxldCBkaXNwYXRjaCA9IChpZCwgZGF0YSkgPT4ge1xuICAgIGRpc3BhdGNoZXIuaGFuZGxlVmlld0FjdGlvbih7XG4gICAgICAgIGFjdGlvblR5cGUgOiBpZCxcbiAgICAgICAgZGF0YSAgICAgICA6IGRhdGFcbiAgICB9KTtcbn07XG5cbi8qKlxuICogdXNlZCB0byBpZGVudGlmeSB0aGUgc3RvcmUgbWV0aG9kc1xuICovXG5sZXQgbWV0aG9kQ291bnQgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCAob3B0aW9ucywgY2FsbGJhY2spID0+IHtcblxuICAgIC8qKlxuICAgICAqIGNhY2hlcyB0aGUgbWV0aG9kIGNvdW50IHNvIHRoZSBjb3JyZWN0IG1ldGhvZCBpcyBjYWxsZWQgbGF0ZXIgb24uXG4gICAgICovXG4gICAgbGV0IGlkID0gbWV0aG9kQ291bnQrKztcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBtZXRob2QgaW4gdGhlIHN0b3JlIHRoYXQgaXMgY2FsbGVkIGluIHRoZSBzdG9yZSB2aWFcbiAgICAgKiBkaXNwYXRjaGVyIGNhbGwgYmVsb3cuXG4gICAgICovXG4gICAgc3RvcmUubWV0aG9kc1tpZF0gPSAoZGF0YSkgPT4ge1xuICAgICAgICBjYWxsYmFjayhzdG9yZSwgZGF0YSk7XG4gICAgfTtcblxuICAgIGlmKG9wdGlvbnMgJiYgb3B0aW9ucy51cmwpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbHMgdGhlIFJFU1Qgc2VydmljZSB1cmwgcHJvdmlkZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gcmVxdWVzdChvcHRpb25zKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChpZCwgZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH0pLmNhdGNoKChlcnJvckRhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvckRhdGEpO1xuICAgICAgICB9KTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJ5cGFzc2VzIGFueSBzZXJ2aWNlIGNhbGxzIGFuZCBnb2VzIHJpZ2h0IHRvIHRoZSBkaXNwYXRjaGVyIHRoZW4gc3RvcmUuXG4gICAgICAgICAqL1xuICAgICAgICBkaXNwYXRjaChpZCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG59O1xuIl19