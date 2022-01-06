webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\\uC560\uB4DC\uD2B8\uB77C\uC774\uBE0C\\Desktop\\react-nodebird-re\\prepare\\front\\components\\CommentForm.js",
    _this = undefined,
    _s = $RefreshSig$();








var CommentForm = function CommentForm(_ref) {
  _s();

  var post = _ref.post;
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      commentText = _useInput2[0],
      onChangeCommentText = _useInput2[1];

  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    console.log(post.id, commentText);
  }, [commentText]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onFinish: onSubmitComment,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
      style: {},
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].TextArea, {
        value: commentText,
        onChange: onChangeCommentText,
        rows: 4
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "primary",
        htmlType: "submit",
        children: "\uC090\uC57D"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, _this);
};

_s(CommentForm, "PptqMkMnW7reCXQEE7qotaIWwp0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__["default"]];
});

_c = CommentForm;
CommentForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

var _c;

$RefreshReg$(_c, "CommentForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb21tZW50Rm9ybSIsInBvc3QiLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ1c2VJbnB1dCIsImNvbW1lbnRUZXh0Iiwib25DaGFuZ2VDb21tZW50VGV4dCIsIm9uU3VibWl0Q29tbWVudCIsInVzZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDOUIsTUFBTUMsRUFBRSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSw2QkFBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEVBQXRCLG1EQUFXLGVBQWVKLEVBQTFCO0FBQUEsR0FBRCxDQUF0Qjs7QUFDQSxrQkFBMkNLLCtEQUFRLENBQUMsRUFBRCxDQUFuRDtBQUFBO0FBQUEsTUFBT0MsV0FBUDtBQUFBLE1BQW9CQyxtQkFBcEI7O0FBQ0EsTUFBTUMsZUFBZSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDdENDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWixJQUFJLENBQUNDLEVBQWpCLEVBQXFCTSxXQUFyQjtBQUNILEdBRmtDLEVBRWhDLENBQUNBLFdBQUQsQ0FGZ0MsQ0FBbkM7QUFJQSxzQkFDSSxxRUFBQyx5Q0FBRDtBQUFNLFlBQVEsRUFBRUUsZUFBaEI7QUFBQSwyQkFDSSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxXQUFLLEVBQUUsRUFBbEI7QUFBQSw4QkFDSSxxRUFBQywwQ0FBRCxDQUFPLFFBQVA7QUFBZ0IsYUFBSyxFQUFFRixXQUF2QjtBQUFvQyxnQkFBUSxFQUFFQyxtQkFBOUM7QUFBbUUsWUFBSSxFQUFFO0FBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJLHFFQUFDLDJDQUFEO0FBQVEsWUFBSSxFQUFDLFNBQWI7QUFBdUIsZ0JBQVEsRUFBQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVFILENBZkQ7O0dBQU1ULFc7VUFDU0csdUQsRUFDZ0NJLHVEOzs7S0FGekNQLFc7QUFpQk5BLFdBQVcsQ0FBQ2MsU0FBWixHQUF3QjtBQUNwQmIsTUFBSSxFQUFFYyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURILENBQXhCO0FBS2VqQiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMTdjZjNmZjljYTY1YzdjNDRiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgQ29tbWVudEZvcm0gPSAoeyBwb3N0IH0pID0+IHtcclxuICAgIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZCk7XHJcbiAgICBjb25zdCBbY29tbWVudFRleHQsIG9uQ2hhbmdlQ29tbWVudFRleHRdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3Qgb25TdWJtaXRDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBvc3QuaWQsIGNvbW1lbnRUZXh0KTtcclxuICAgIH0sIFtjb21tZW50VGV4dF0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0Q29tbWVudH0+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW0gc3R5bGU9e3sgIH19PlxyXG4gICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhIHZhbHVlPXtjb21tZW50VGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudFRleHR9IHJvd3M9ezR9IC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3ByaW1hcnknIGh0bWxUeXBlPVwic3VibWl0XCI+7IKQ7JW9PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgIClcclxufTtcclxuXHJcbkNvbW1lbnRGb3JtLnByb3BUeXBlcyA9IHtcclxuICAgIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==