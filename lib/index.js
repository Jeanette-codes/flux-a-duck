'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This is where the API is declared
 */

var FAD = function () {

    /**
     * Public methods and variables go here
     */

    function FAD() {
        _classCallCheck(this, FAD);

        this.action = this._action;
        this.getAllJS = this._getAllJS;
        this.addChangeListener = this._addChangeListener;
    }

    _createClass(FAD, [{
        key: '_action',
        value: function _action(options) {
            return (0, _actions2.default)(options).then(function () {
                return Promise.resolve();
            });
        }
    }, {
        key: '_addChangeListener',
        value: function _addChangeListener(callback) {
            return _store2.default.addChangeListener(callback);
        }
    }, {
        key: '_getAllJS',
        value: function _getAllJS() {
            return _store2.default.getAllJS();
        }
    }]);

    return FAD;
}();

exports.default = new FAD();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU1NOzs7Ozs7QUFLRixhQUxFLEdBS0YsR0FBYzs4QkFMWixLQUtZOztBQUNWLGFBQUssTUFBTCxHQUFjLEtBQUssT0FBTCxDQURKO0FBRVYsYUFBSyxRQUFMLEdBQWdCLEtBQUssU0FBTCxDQUZOO0FBR1YsYUFBSyxpQkFBTCxHQUF5QixLQUFLLGtCQUFMLENBSGY7S0FBZDs7aUJBTEU7O2dDQVdNLFNBQVM7QUFDYixtQkFBTyx1QkFBUSxPQUFSLEVBQWlCLElBQWpCLENBQXNCLFlBQU07QUFDL0IsdUJBQU8sUUFBUSxPQUFSLEVBQVAsQ0FEK0I7YUFBTixDQUE3QixDQURhOzs7OzJDQU1FLFVBQVU7QUFDekIsbUJBQU8sZ0JBQU0saUJBQU4sQ0FBd0IsUUFBeEIsQ0FBUCxDQUR5Qjs7OztvQ0FJakI7QUFDUixtQkFBTyxnQkFBTSxRQUFOLEVBQVAsQ0FEUTs7OztXQXJCVjs7O2tCQTBCUyxJQUFJLEdBQUoiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG4vKipcbiAqIFRoaXMgaXMgd2hlcmUgdGhlIEFQSSBpcyBkZWNsYXJlZFxuICovXG5jbGFzcyBGQUQge1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIG1ldGhvZHMgYW5kIHZhcmlhYmxlcyBnbyBoZXJlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gdGhpcy5fYWN0aW9uO1xuICAgICAgICB0aGlzLmdldEFsbEpTID0gdGhpcy5fZ2V0QWxsSlM7XG4gICAgICAgIHRoaXMuYWRkQ2hhbmdlTGlzdGVuZXIgPSB0aGlzLl9hZGRDaGFuZ2VMaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBfYWN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbnMob3B0aW9ucykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9hZGRDaGFuZ2VMaXN0ZW5lcihjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gc3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIoY2FsbGJhY2spO1xuICAgIH1cblxuICAgIF9nZXRBbGxKUygpIHtcbiAgICAgICAgcmV0dXJuIHN0b3JlLmdldEFsbEpTKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRkFEKCk7XG4iXX0=
