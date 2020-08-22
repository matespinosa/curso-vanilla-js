"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _header = _interopRequireDefault(require("../templates/header"));

var _Home = _interopRequireDefault(require("../pages/Home"));

var _Chararcter = _interopRequireDefault(require("../pages/Chararcter"));

var _Error = _interopRequireDefault(require("../pages/Error404"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = {
  '/': _Home["default"],
  '/:id': _Chararcter["default"],
  '/contact': 'Contact'
};

var router = function router() {
  var header, content;
  return regeneratorRuntime.async(function router$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          header = null || document.getElementById('header');
          content = null || document.getElementById('content');
          _context.next = 4;
          return regeneratorRuntime.awrap((0, _header["default"])());

        case 4:
          header.innerHTML = _context.sent;

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = router;
exports["default"] = _default;