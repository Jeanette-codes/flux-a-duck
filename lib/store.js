'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dispatcher = require('./dispatcher.js');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CHANGE_EVENT = 'change';

var _store = _immutable2.default.fromJS({
    testData: 'Test Data'
});

var Store = function (_EventEmitter) {
    _inherits(Store, _EventEmitter);

    function Store() {
        _classCallCheck(this, Store);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Store).call(this));

        _this.methods = {};
        return _this;
    }

    _createClass(Store, [{
        key: 'getAll',
        value: function getAll() {
            return _store;
        }
    }, {
        key: 'getAllJS',
        value: function getAllJS() {
            return _store.toJS();
        }
    }, {
        key: 'replace',
        value: function replace(newStore) {
            _store = newStore;
        }
    }, {
        key: 'emitChange',
        value: function emitChange() {
            this.emit(CHANGE_EVENT);
        }
    }, {
        key: 'addChangeListener',
        value: function addChangeListener(callback) {
            this.on(CHANGE_EVENT, callback);
        }
    }, {
        key: 'removeChangeListener',
        value: function removeChangeListener(callback) {
            this.removeListener(CHANGE_EVENT, callback);
        }
    }]);

    return Store;
}(_events2.default);

;

var _Store = new Store();

_Store.dispatchToken = _dispatcher2.default.register(function (payload) {
    var action = payload.action;

    if (_Store.methods[action.actionType]) {
        _Store.methods[action.actionType](action.data);
    } else {
        throw 'there is no ' + action.actionType + ' method in the store';
    }

    _Store.emitChange();
});

module.exports = _Store;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdG9yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFJLGVBQWUsUUFBZjs7QUFFSixJQUFJLFNBQVMsb0JBQVUsTUFBVixDQUFpQjtBQUMxQixjQUFXLFdBQVg7Q0FEUyxDQUFUOztJQUlFOzs7QUFDRixhQURFLEtBQ0YsR0FBYzs4QkFEWixPQUNZOzsyRUFEWixtQkFDWTs7QUFFVixjQUFLLE9BQUwsR0FBZSxFQUFmLENBRlU7O0tBQWQ7O2lCQURFOztpQ0FNTztBQUNMLG1CQUFPLE1BQVAsQ0FESzs7OzttQ0FJRTtBQUNQLG1CQUFPLE9BQU8sSUFBUCxFQUFQLENBRE87Ozs7Z0NBSUgsVUFBVTtBQUNkLHFCQUFTLFFBQVQsQ0FEYzs7OztxQ0FJTDtBQUNULGlCQUFLLElBQUwsQ0FBVSxZQUFWLEVBRFM7Ozs7MENBSUssVUFBVTtBQUN4QixpQkFBSyxFQUFMLENBQVEsWUFBUixFQUFzQixRQUF0QixFQUR3Qjs7Ozs2Q0FJUCxVQUFVO0FBQzNCLGlCQUFLLGNBQUwsQ0FBb0IsWUFBcEIsRUFBa0MsUUFBbEMsRUFEMkI7Ozs7V0ExQjdCOzs7QUE2Qkw7O0FBRUQsSUFBTSxTQUFTLElBQUksS0FBSixFQUFUOztBQUVOLE9BQU8sYUFBUCxHQUF1QixxQkFBVyxRQUFYLENBQW9CLFVBQUMsT0FBRCxFQUFhO0FBQ3BELFFBQUksU0FBUyxRQUFRLE1BQVIsQ0FEdUM7O0FBR3BELFFBQUcsT0FBTyxPQUFQLENBQWUsT0FBTyxVQUFQLENBQWxCLEVBQXNDO0FBQ2xDLGVBQU8sT0FBUCxDQUFlLE9BQU8sVUFBUCxDQUFmLENBQWtDLE9BQU8sSUFBUCxDQUFsQyxDQURrQztLQUF0QyxNQUVPO0FBQ0gsY0FBTSxpQkFBaUIsT0FBTyxVQUFQLEdBQW9CLHNCQUFyQyxDQURIO0tBRlA7O0FBTUEsV0FBTyxVQUFQLEdBVG9EO0NBQWIsQ0FBM0M7O0FBWUEsT0FBTyxPQUFQLEdBQWlCLE1BQWpCIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSAnLi9kaXNwYXRjaGVyLmpzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnRzJztcbmltcG9ydCBJbW11dGFibGUgZnJvbSAnaW1tdXRhYmxlJztcblxubGV0IENIQU5HRV9FVkVOVCA9ICdjaGFuZ2UnO1xuXG5sZXQgX3N0b3JlID0gSW1tdXRhYmxlLmZyb21KUyh7XG4gICAgdGVzdERhdGEgOiAnVGVzdCBEYXRhJ1xufSk7XG5cbmNsYXNzIFN0b3JlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tZXRob2RzID0ge307XG4gICAgfVxuXG4gICAgZ2V0QWxsKCkge1xuICAgICAgICByZXR1cm4gX3N0b3JlO1xuICAgIH1cblxuICAgIGdldEFsbEpTKCkge1xuICAgICAgICByZXR1cm4gX3N0b3JlLnRvSlMoKTtcbiAgICB9XG5cbiAgICByZXBsYWNlKG5ld1N0b3JlKSB7XG4gICAgICAgIF9zdG9yZSA9IG5ld1N0b3JlO1xuICAgIH1cblxuICAgIGVtaXRDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuZW1pdChDSEFOR0VfRVZFTlQpO1xuICAgIH1cblxuICAgIGFkZENoYW5nZUxpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub24oQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2hhbmdlTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihDSEFOR0VfRVZFTlQsIGNhbGxiYWNrKTtcbiAgICB9XG59O1xuXG5jb25zdCBfU3RvcmUgPSBuZXcgU3RvcmUoKTtcblxuX1N0b3JlLmRpc3BhdGNoVG9rZW4gPSBkaXNwYXRjaGVyLnJlZ2lzdGVyKChwYXlsb2FkKSA9PiB7XG4gICAgbGV0IGFjdGlvbiA9IHBheWxvYWQuYWN0aW9uO1xuXG4gICAgaWYoX1N0b3JlLm1ldGhvZHNbYWN0aW9uLmFjdGlvblR5cGVdKSB7XG4gICAgICAgIF9TdG9yZS5tZXRob2RzW2FjdGlvbi5hY3Rpb25UeXBlXShhY3Rpb24uZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgJ3RoZXJlIGlzIG5vICcgKyBhY3Rpb24uYWN0aW9uVHlwZSArICcgbWV0aG9kIGluIHRoZSBzdG9yZSc7XG4gICAgfVxuXG4gICAgX1N0b3JlLmVtaXRDaGFuZ2UoKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9TdG9yZTtcbiJdfQ==