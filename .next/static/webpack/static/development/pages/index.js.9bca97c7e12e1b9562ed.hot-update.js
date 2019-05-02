webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/arthur/dev/react/bitprice/components/Prices.js";


var Prices =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Prices, _React$Component);

  function Prices() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Prices);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Prices).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Prices, [{
    key: "render",
    value: function render() {
      var bpi = this.props.bpi;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "list-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, bpi.map(function (b, index) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          className: "list-group-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }, b[index].description, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "badge badge-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, b[index].code), ": ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, b[index].rate));
      })));
    }
  }]);

  return Prices;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Prices);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false

})
//# sourceMappingURL=index.js.9bca97c7e12e1b9562ed.hot-update.js.map