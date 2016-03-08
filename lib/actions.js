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
    _store2.default.methods[id] = function (data) {
        options.storeMethod(data, _store2.default);
    };

    if (options.url) {

        /**
         * Calls the REST service url provided for now.
         */
        return (0, _request2.default)(options).then(function (data) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxJQUFJLGdCQUFnQixTQUFoQixhQUFnQixDQUFDLEtBQUQsRUFBVztBQUMzQixRQUFJLFNBQVMsTUFBTSxLQUFOLEVBQWE7QUFDdEIsZ0JBQVEsS0FBUixDQUFjLE1BQU0sS0FBTixDQUFkLENBRHNCO0tBQTFCLE1BRU87QUFDSCxnQkFBUSxLQUFSLENBQWMsS0FBZCxFQURHO0tBRlA7Q0FEZ0I7Ozs7O0FBV3BCLElBQUksY0FBYyxDQUFkOztrQkFFVyxVQUFDLE9BQUQsRUFBYTs7Ozs7QUFLeEIsUUFBSSxLQUFLLGFBQUw7Ozs7OztBQUxvQixtQkFXeEIsQ0FBTSxPQUFOLENBQWMsRUFBZCxJQUFvQixVQUFDLElBQUQsRUFBVTtBQUMxQixnQkFBUSxXQUFSLENBQW9CLElBQXBCLG1CQUQwQjtLQUFWLENBWEk7O0FBZXhCLFFBQUcsUUFBUSxHQUFSLEVBQWE7Ozs7O0FBS1osZUFBTyx1QkFBUSxPQUFSLEVBQWlCLElBQWpCLENBQXNCLFVBQUMsSUFBRCxFQUFVO0FBQ25DLGlDQUFXLGdCQUFYLENBQTRCO0FBQ3hCLDRCQUFhLEVBQWI7QUFDQSxzQkFBYSxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWI7YUFGSixFQURtQztBQUtuQyxtQkFBTyxRQUFRLE9BQVIsRUFBUCxDQUxtQztTQUFWLENBQXRCLENBTUosS0FOSSxDQU1FLFVBQUMsU0FBRCxFQUFlO0FBQ3BCLDBCQUFjLFNBQWQsRUFEb0I7QUFFcEIsbUJBQU8sUUFBUSxNQUFSLENBQWUsU0FBZixDQUFQLENBRm9CO1NBQWYsQ0FOVCxDQUxZO0tBQWhCLE1BZ0JPOzs7OztBQUtILDZCQUFXLGdCQUFYLENBQTRCO0FBQ3hCLHdCQUFhLEVBQWI7QUFDQSxrQkFBYSxFQUFiO1NBRkosRUFMRztBQVNILGVBQU8sUUFBUSxPQUFSLEVBQVAsQ0FURztLQWhCUDtDQWZXIiwiZmlsZSI6ImFjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGlzcGF0Y2hlciBmcm9tICcuL2Rpc3BhdGNoZXIuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9yZXF1ZXN0LmpzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlLmpzJztcblxuLyoqXG4gKiBTbyBFcnJvcnMgYXJlbid0IGhpZGRlbiBieSB0aGUgZGlzcGF0Y2hlci5cbiAqL1xubGV0IGdldEVycm9yU3RhY2sgPSAoZXJyb3IpID0+IHtcbiAgICBpZiAoZXJyb3IgJiYgZXJyb3Iuc3RhY2spIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5zdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxufTtcblxuLyoqXG4gKiB1c2VkIHRvIGlkZW50aWZ5IHRoZSBzdG9yZSBtZXRob2RzXG4gKi9cbmxldCBtZXRob2RDb3VudCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IChvcHRpb25zKSA9PiB7XG5cbiAgICAvKipcbiAgICAgKiBjYWNoZXMgdGhlIG1ldGhvZCBjb3VudCBzbyB0aGUgY29ycmVjdCBtZXRob2QgaXMgY2FsbGVkIGxhdGVyIG9uLlxuICAgICAqL1xuICAgIGxldCBpZCA9IG1ldGhvZENvdW50Kys7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbWV0aG9kIGluIHRoZSBzdG9yZSB0aGF0IGlzIGNhbGxlZCBpbiB0aGUgc3RvcmUgdmlhXG4gICAgICogZGlzcGF0Y2hlciBjYWxsIGJlbG93LlxuICAgICAqL1xuICAgIHN0b3JlLm1ldGhvZHNbaWRdID0gKGRhdGEpID0+IHtcbiAgICAgICAgb3B0aW9ucy5zdG9yZU1ldGhvZChkYXRhLCBzdG9yZSk7XG4gICAgfTtcblxuICAgIGlmKG9wdGlvbnMudXJsKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxzIHRoZSBSRVNUIHNlcnZpY2UgdXJsIHByb3ZpZGVkIGZvciBub3cuXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gcmVxdWVzdChvcHRpb25zKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaGVyLmhhbmRsZVZpZXdBY3Rpb24oe1xuICAgICAgICAgICAgICAgIGFjdGlvblR5cGUgOiBpZCxcbiAgICAgICAgICAgICAgICBkYXRhICAgICAgIDogSlNPTi5wYXJzZShkYXRhKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH0pLmNhdGNoKChlcnJvckRhdGEpID0+IHtcbiAgICAgICAgICAgIGdldEVycm9yU3RhY2soZXJyb3JEYXRhKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvckRhdGEpO1xuICAgICAgICB9KTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJ5cGFzc2VzIGFueSBzZXJ2aWNlIGNhbGxzIGFuZCBnb2VzIHJpZ2h0IHRvIHRoZSBkaXNwYXRjaGVyIHRoZW4gc3RvcmUuXG4gICAgICAgICAqL1xuICAgICAgICBkaXNwYXRjaGVyLmhhbmRsZVZpZXdBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uVHlwZSA6IGlkLFxuICAgICAgICAgICAgZGF0YSAgICAgICA6IHt9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxufTtcbiJdfQ==
