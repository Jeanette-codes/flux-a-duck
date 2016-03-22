'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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
        value: function _action() {
            var options = undefined,
                callback = undefined;

            // This allows the options or callback arguments to be in any order
            // takes only the first arguments to make the options and callback
            // all others are discarded.
            for (var i = 0, len = arguments.length; i < len; i++) {
                if (_typeof(arguments[i]) === 'object' && options === undefined) {
                    options = arguments[i];
                } else if (typeof arguments[i] === 'function' && callback === undefined) {
                    callback = arguments[i];
                }
            }

            return (0, _actions2.default)(options, callback).then(function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTU07Ozs7OztBQUtGLGFBTEUsR0FLRixHQUFjOzhCQUxaLEtBS1k7O0FBQ1YsYUFBSyxNQUFMLEdBQWMsS0FBSyxPQUFMLENBREo7QUFFVixhQUFLLFFBQUwsR0FBZ0IsS0FBSyxTQUFMLENBRk47QUFHVixhQUFLLGlCQUFMLEdBQXlCLEtBQUssa0JBQUwsQ0FIZjtLQUFkOztpQkFMRTs7a0NBV1E7QUFDTixnQkFBSSxtQkFBSjtnQkFBYSxvQkFBYjs7Ozs7QUFETSxpQkFNRixJQUFJLElBQUksQ0FBSixFQUFPLE1BQU0sVUFBVSxNQUFWLEVBQWtCLElBQUksR0FBSixFQUFTLEdBQWhELEVBQXFEO0FBQ2pELG9CQUFHLFFBQU8sVUFBVSxDQUFWLEVBQVAsS0FBd0IsUUFBeEIsSUFBb0MsWUFBWSxTQUFaLEVBQXVCO0FBQzFELDhCQUFVLFVBQVUsQ0FBVixDQUFWLENBRDBEO2lCQUE5RCxNQUVPLElBQUcsT0FBTyxVQUFVLENBQVYsQ0FBUCxLQUF3QixVQUF4QixJQUFzQyxhQUFhLFNBQWIsRUFBd0I7QUFDcEUsK0JBQVcsVUFBVSxDQUFWLENBQVgsQ0FEb0U7aUJBQWpFO2FBSFg7O0FBUUEsbUJBQU8sdUJBQVEsT0FBUixFQUFpQixRQUFqQixFQUEyQixJQUEzQixDQUFnQyxZQUFNO0FBQ3pDLHVCQUFPLFFBQVEsT0FBUixFQUFQLENBRHlDO2FBQU4sQ0FBdkMsQ0FkTTs7OzsyQ0FtQlMsVUFBVTtBQUN6QixtQkFBTyxnQkFBTSxpQkFBTixDQUF3QixRQUF4QixDQUFQLENBRHlCOzs7O29DQUlqQjtBQUNSLG1CQUFPLGdCQUFNLFFBQU4sRUFBUCxDQURROzs7O1dBbENWOzs7a0JBdUNTLElBQUksR0FBSiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbi8qKlxuICogVGhpcyBpcyB3aGVyZSB0aGUgQVBJIGlzIGRlY2xhcmVkXG4gKi9cbmNsYXNzIEZBRCB7XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgbWV0aG9kcyBhbmQgdmFyaWFibGVzIGdvIGhlcmVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSB0aGlzLl9hY3Rpb247XG4gICAgICAgIHRoaXMuZ2V0QWxsSlMgPSB0aGlzLl9nZXRBbGxKUztcbiAgICAgICAgdGhpcy5hZGRDaGFuZ2VMaXN0ZW5lciA9IHRoaXMuX2FkZENoYW5nZUxpc3RlbmVyO1xuICAgIH1cblxuICAgIF9hY3Rpb24oKSB7XG4gICAgICAgIGxldCBvcHRpb25zLCBjYWxsYmFjaztcblxuICAgICAgICAvLyBUaGlzIGFsbG93cyB0aGUgb3B0aW9ucyBvciBjYWxsYmFjayBhcmd1bWVudHMgdG8gYmUgaW4gYW55IG9yZGVyXG4gICAgICAgIC8vIHRha2VzIG9ubHkgdGhlIGZpcnN0IGFyZ3VtZW50cyB0byBtYWtlIHRoZSBvcHRpb25zIGFuZCBjYWxsYmFja1xuICAgICAgICAvLyBhbGwgb3RoZXJzIGFyZSBkaXNjYXJkZWQuXG4gICAgICAgIGZvcihsZXQgaSA9IDAsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYodHlwZW9mIGFyZ3VtZW50c1tpXSA9PT0gJ29iamVjdCcgJiYgb3B0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZih0eXBlb2YgYXJndW1lbnRzW2ldID09PSAnZnVuY3Rpb24nICYmIGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3Rpb25zKG9wdGlvbnMsIGNhbGxiYWNrKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2FkZENoYW5nZUxpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBzdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcihjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgX2dldEFsbEpTKCkge1xuICAgICAgICByZXR1cm4gc3RvcmUuZ2V0QWxsSlMoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGQUQoKTtcbiJdfQ==
