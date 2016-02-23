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

    return true; // No errors.  Needed by promise in Dispatcher.
});

module.exports = _Store;