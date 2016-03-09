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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLElBQUksZUFBZSxRQUFmOztBQUVKLElBQUksU0FBUyxvQkFBVSxNQUFWLENBQWlCO0FBQzFCLGNBQVcsV0FBWDtDQURTLENBQVQ7O0lBSUU7OztBQUNGLGFBREUsS0FDRixHQUFjOzhCQURaLE9BQ1k7OzJFQURaLG1CQUNZOztBQUVWLGNBQUssT0FBTCxHQUFlLEVBQWYsQ0FGVTs7S0FBZDs7aUJBREU7O2lDQU1PO0FBQ0wsbUJBQU8sTUFBUCxDQURLOzs7O21DQUlFO0FBQ1AsbUJBQU8sT0FBTyxJQUFQLEVBQVAsQ0FETzs7OztnQ0FJSCxVQUFVO0FBQ2QscUJBQVMsUUFBVCxDQURjOzs7O3FDQUlMO0FBQ1QsaUJBQUssSUFBTCxDQUFVLFlBQVYsRUFEUzs7OzswQ0FJSyxVQUFVO0FBQ3hCLGlCQUFLLEVBQUwsQ0FBUSxZQUFSLEVBQXNCLFFBQXRCLEVBRHdCOzs7OzZDQUlQLFVBQVU7QUFDM0IsaUJBQUssY0FBTCxDQUFvQixZQUFwQixFQUFrQyxRQUFsQyxFQUQyQjs7OztXQTFCN0I7OztBQTZCTDs7QUFFRCxJQUFNLFNBQVMsSUFBSSxLQUFKLEVBQVQ7O0FBRU4sT0FBTyxhQUFQLEdBQXVCLHFCQUFXLFFBQVgsQ0FBb0IsVUFBQyxPQUFELEVBQWE7QUFDcEQsUUFBSSxTQUFTLFFBQVEsTUFBUixDQUR1Qzs7QUFHcEQsUUFBRyxPQUFPLE9BQVAsQ0FBZSxPQUFPLFVBQVAsQ0FBbEIsRUFBc0M7QUFDbEMsZUFBTyxPQUFQLENBQWUsT0FBTyxVQUFQLENBQWYsQ0FBa0MsT0FBTyxJQUFQLENBQWxDLENBRGtDO0tBQXRDLE1BRU87QUFDSCxjQUFNLGlCQUFpQixPQUFPLFVBQVAsR0FBb0Isc0JBQXJDLENBREg7S0FGUDs7QUFNQSxXQUFPLFVBQVAsR0FUb0Q7Q0FBYixDQUEzQzs7QUFZQSxPQUFPLE9BQVAsR0FBaUIsTUFBakIiLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGlzcGF0Y2hlciBmcm9tICcuL2Rpc3BhdGNoZXIuanMnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudHMnO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tICdpbW11dGFibGUnO1xuXG5sZXQgQ0hBTkdFX0VWRU5UID0gJ2NoYW5nZSc7XG5cbmxldCBfc3RvcmUgPSBJbW11dGFibGUuZnJvbUpTKHtcbiAgICB0ZXN0RGF0YSA6ICdUZXN0IERhdGEnXG59KTtcblxuY2xhc3MgU3RvcmUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1ldGhvZHMgPSB7fTtcbiAgICB9XG5cbiAgICBnZXRBbGwoKSB7XG4gICAgICAgIHJldHVybiBfc3RvcmU7XG4gICAgfVxuXG4gICAgZ2V0QWxsSlMoKSB7XG4gICAgICAgIHJldHVybiBfc3RvcmUudG9KUygpO1xuICAgIH1cblxuICAgIHJlcGxhY2UobmV3U3RvcmUpIHtcbiAgICAgICAgX3N0b3JlID0gbmV3U3RvcmU7XG4gICAgfVxuXG4gICAgZW1pdENoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5lbWl0KENIQU5HRV9FVkVOVCk7XG4gICAgfVxuXG4gICAgYWRkQ2hhbmdlTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5vbihDSEFOR0VfRVZFTlQsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICByZW1vdmVDaGFuZ2VMaXN0ZW5lcihjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKENIQU5HRV9FVkVOVCwgY2FsbGJhY2spO1xuICAgIH1cbn07XG5cbmNvbnN0IF9TdG9yZSA9IG5ldyBTdG9yZSgpO1xuXG5fU3RvcmUuZGlzcGF0Y2hUb2tlbiA9IGRpc3BhdGNoZXIucmVnaXN0ZXIoKHBheWxvYWQpID0+IHtcbiAgICBsZXQgYWN0aW9uID0gcGF5bG9hZC5hY3Rpb247XG5cbiAgICBpZihfU3RvcmUubWV0aG9kc1thY3Rpb24uYWN0aW9uVHlwZV0pIHtcbiAgICAgICAgX1N0b3JlLm1ldGhvZHNbYWN0aW9uLmFjdGlvblR5cGVdKGFjdGlvbi5kYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyAndGhlcmUgaXMgbm8gJyArIGFjdGlvbi5hY3Rpb25UeXBlICsgJyBtZXRob2QgaW4gdGhlIHN0b3JlJztcbiAgICB9XG5cbiAgICBfU3RvcmUuZW1pdENoYW5nZSgpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gX1N0b3JlO1xuIl19
