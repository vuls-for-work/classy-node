'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ClassyResource2 = require('../ClassyResource');

var _ClassyResource3 = _interopRequireDefault(_ClassyResource2);

var _classyMethod = require('../classyMethod');

var _classyMethod2 = _interopRequireDefault(_classyMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Campaign = function (_ClassyResource) {
  _inherits(Campaign, _ClassyResource);

  function Campaign(Classy) {
    _classCallCheck(this, Campaign);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Campaign).call(this, Classy));

    _this.path = 'campaign';

    _this.create = (0, _classyMethod2.default)({
      method: "POST",
      path: '/campaigns/{campaignId}',
      urlParams: ["campaignId"]
    });
    return _this;
  }

  return Campaign;
}(_ClassyResource3.default);

exports.default = Campaign;