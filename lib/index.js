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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNTTs7Ozs7O0FBS0YsYUFMRSxHQUtGLEdBQWM7OEJBTFosS0FLWTs7QUFDVixhQUFLLE1BQUwsR0FBYyxLQUFLLE9BQUwsQ0FESjtBQUVWLGFBQUssUUFBTCxHQUFnQixLQUFLLFNBQUwsQ0FGTjtBQUdWLGFBQUssaUJBQUwsR0FBeUIsS0FBSyxrQkFBTCxDQUhmO0tBQWQ7O2lCQUxFOztnQ0FXTSxTQUFTO0FBQ2IsbUJBQU8sdUJBQVEsT0FBUixFQUFpQixJQUFqQixDQUFzQixZQUFNO0FBQy9CLHVCQUFPLFFBQVEsT0FBUixFQUFQLENBRCtCO2FBQU4sQ0FBN0IsQ0FEYTs7OzsyQ0FNRSxVQUFVO0FBQ3pCLG1CQUFPLGdCQUFNLGlCQUFOLENBQXdCLFFBQXhCLENBQVAsQ0FEeUI7Ozs7b0NBSWpCO0FBQ1IsbUJBQU8sZ0JBQU0sUUFBTixFQUFQLENBRFE7Ozs7V0FyQlY7OztrQkEwQlMsSUFBSSxHQUFKIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcblxuLyoqXG4gKiBUaGlzIGlzIHdoZXJlIHRoZSBBUEkgaXMgZGVjbGFyZWRcbiAqL1xuY2xhc3MgRkFEIHtcblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBtZXRob2RzIGFuZCB2YXJpYWJsZXMgZ28gaGVyZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFjdGlvbiA9IHRoaXMuX2FjdGlvbjtcbiAgICAgICAgdGhpcy5nZXRBbGxKUyA9IHRoaXMuX2dldEFsbEpTO1xuICAgICAgICB0aGlzLmFkZENoYW5nZUxpc3RlbmVyID0gdGhpcy5fYWRkQ2hhbmdlTGlzdGVuZXI7XG4gICAgfVxuXG4gICAgX2FjdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBhY3Rpb25zKG9wdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfYWRkQ2hhbmdlTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBfZ2V0QWxsSlMoKSB7XG4gICAgICAgIHJldHVybiBzdG9yZS5nZXRBbGxKUygpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEZBRCgpO1xuIl19