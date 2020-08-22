"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var resolveRoutes = function resolveRoutes(route) {
  if (route.length <= 3) {
    var validRotue = route === '/' ? route : '/:id';
    return validRotue;
  }

  return "/".concat(route); //about
};

var _default = resolveRoutes;
exports["default"] = _default;