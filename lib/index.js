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

var FAD = function () {
    function FAD() {
        _classCallCheck(this, FAD);

        this.action = this._action;
        this.getAllJS = this._getAllJS;
        this.addChangeListener = this._addChangeListener;
    }

    _createClass(FAD, [{
        key: '_action',
        value: function _action(options) {
            return (0, _actions2.default)({
                url: options.url,
                name: options.name,
                storeMethod: options.storeMethod
            }).then(function () {
                return Promise.resolve();
            });
        }
    }, {
        key: '_addChangeListener',
        value: function _addChangeListener(callback) {
            console.log('callback: ', callback);
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