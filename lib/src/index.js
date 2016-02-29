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
        console.log('test');
    }

    _createClass(FAD, [{
        key: '_action',
        value: function _action(options) {
            return (0, _actions2.default)({
                url: options.url,
                storeMethod: options.storeMethod
            }).then(function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNTTs7Ozs7O0FBS0YsYUFMRSxHQUtGLEdBQWM7OEJBTFosS0FLWTs7QUFDVixhQUFLLE1BQUwsR0FBYyxLQUFLLE9BQUwsQ0FESjtBQUVWLGFBQUssUUFBTCxHQUFnQixLQUFLLFNBQUwsQ0FGTjtBQUdWLGFBQUssaUJBQUwsR0FBeUIsS0FBSyxrQkFBTCxDQUhmO0FBSVYsZ0JBQVEsR0FBUixDQUFZLE1BQVosRUFKVTtLQUFkOztpQkFMRTs7Z0NBWU0sU0FBUztBQUNiLG1CQUFPLHVCQUFRO0FBQ1gscUJBQU0sUUFBUSxHQUFSO0FBQ04sNkJBQWMsUUFBUSxXQUFSO2FBRlgsRUFHSixJQUhJLENBR0MsWUFBTTtBQUNWLHVCQUFPLFFBQVEsT0FBUixFQUFQLENBRFU7YUFBTixDQUhSLENBRGE7Ozs7MkNBU0UsVUFBVTtBQUN6QixtQkFBTyxnQkFBTSxpQkFBTixDQUF3QixRQUF4QixDQUFQLENBRHlCOzs7O29DQUlqQjtBQUNSLG1CQUFPLGdCQUFNLFFBQU4sRUFBUCxDQURROzs7O1dBekJWOzs7a0JBOEJTLElBQUksR0FBSiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbi8qKlxuICogVGhpcyBpcyB3aGVyZSB0aGUgQVBJIGlzIGRlY2xhcmVkXG4gKi9cbmNsYXNzIEZBRCB7XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgbWV0aG9kcyBhbmQgdmFyaWFibGVzIGdvIGhlcmVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSB0aGlzLl9hY3Rpb247XG4gICAgICAgIHRoaXMuZ2V0QWxsSlMgPSB0aGlzLl9nZXRBbGxKUztcbiAgICAgICAgdGhpcy5hZGRDaGFuZ2VMaXN0ZW5lciA9IHRoaXMuX2FkZENoYW5nZUxpc3RlbmVyO1xuICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuICAgIH1cblxuICAgIF9hY3Rpb24ob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gYWN0aW9ucyh7XG4gICAgICAgICAgICB1cmwgOiBvcHRpb25zLnVybCxcbiAgICAgICAgICAgIHN0b3JlTWV0aG9kIDogb3B0aW9ucy5zdG9yZU1ldGhvZFxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2FkZENoYW5nZUxpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBzdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcihjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgX2dldEFsbEpTKCkge1xuICAgICAgICByZXR1cm4gc3RvcmUuZ2V0QWxsSlMoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGQUQoKTtcbiJdfQ==