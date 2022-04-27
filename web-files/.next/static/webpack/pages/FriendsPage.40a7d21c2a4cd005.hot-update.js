"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/FriendsPage",{

/***/ "./pages/FriendsPage.js":
/*!******************************!*\
  !*** ./pages/FriendsPage.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sidebar */ \"./components/Sidebar.js\");\n/* harmony import */ var _components_Feed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Feed */ \"./components/Feed.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _components_FriendPosts_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/FriendPosts.js */ \"./components/FriendPosts.js\");\n/* harmony import */ var _components_FriendsVerticalCard_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/FriendsVerticalCard.js */ \"./components/FriendsVerticalCard.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\nvar _jsxFileName = \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\pages\\\\FriendsPage.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n // Loads the friends page and components \n\n\n\nfunction FriendsPage(_ref) {\n  _s();\n\n  var posts = _ref.posts;\n  var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.getAuth)();\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),\n      loaded = _useState[0],\n      setLoaded = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {\n    var unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.onAuthStateChanged)(auth, function (user) {\n      if (!user) {\n        setLoaded(false);\n        router.push(\"/\");\n      } else {\n        setLoaded(true);\n      }\n    }); // Cleanup subscription on unmount\n\n    return function () {\n      return unsubscribe();\n    };\n  }, []);\n\n  if (!loaded) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 23\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"title\", {\n        children: \"The Lounge\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"main\", {\n      className: \"flex flex-wrap relative space-x-2\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_FriendsVerticalCard_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, this);\n}\n\n_s(FriendsPage, \"qr8feAtBH6YL9kZ5N1x+KXznK1w=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];\n});\n\n_c = FriendsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FriendsPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"FriendsPage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9GcmllbmRzUGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7OztBQUVBLFNBQVNtQixXQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBUkMsS0FBUSxRQUFSQSxLQUFRO0FBQzVCLE1BQU1DLElBQUksR0FBR2hCLHNEQUFPLEVBQXBCO0FBQ0EsTUFBTWlCLE1BQU0sR0FBR2xCLHNEQUFTLEVBQXhCOztBQUNBLGtCQUE0QkssK0NBQVEsQ0FBQyxLQUFELENBQXBDO0FBQUEsTUFBT2MsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0FkLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1lLFdBQVcsR0FBR2xCLGlFQUFrQixDQUFDYyxJQUFELEVBQU8sVUFBQUssSUFBSSxFQUFHO0FBQ2xELFVBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1RGLFFBQUFBLFNBQVMsQ0FBQyxLQUFELENBQVQ7QUFDQUYsUUFBQUEsTUFBTSxDQUFDSyxJQUFQLENBQVksR0FBWjtBQUNELE9BSEQsTUFHTztBQUNMSCxRQUFBQSxTQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0Q7QUFFRixLQVJxQyxDQUF0QyxDQURjLENBWWQ7O0FBQ0EsV0FBTztBQUFBLGFBQU1DLFdBQVcsRUFBakI7QUFBQSxLQUFQO0FBQ0QsR0FkUSxFQWNOLEVBZE0sQ0FBVDs7QUFrQkEsTUFBRyxDQUFDRixNQUFKLEVBQVc7QUFBRSx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFBb0I7O0FBQ2pDLHNCQUNFO0FBQUEsNEJBQ0UsK0RBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFLCtEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FO0FBQU0sZUFBUyxFQUFDLG1DQUFoQjtBQUFBLDhCQUVJLCtEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQU1NLCtEQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1CRDs7R0ExQ1FKO1VBRVFmOzs7S0FGUmU7QUE0Q1QsK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRnJpZW5kc1BhZ2UuanM/NDg3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0ICcuLi9maXJlYmFzZS5qcydcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInIFxyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInXHJcbmltcG9ydCBGZWVkIGZyb20gXCIuLi9jb21wb25lbnRzL0ZlZWRcIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge2dldEF1dGgsIHNpZ25PdXQsIG9uQXV0aFN0YXRlQ2hhbmdlZH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQge2NvbGxlY3Rpb24sIG9uU25hcHNob3QsIGdldERvY3MscXVlcnksIG9yZGVyQnl9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IEZyaWVuZFBvc3RzIGZyb20gJy4uL2NvbXBvbmVudHMvRnJpZW5kUG9zdHMuanMnXHJcbmltcG9ydCBGcmllbmRzVmVydGljYWxDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvRnJpZW5kc1ZlcnRpY2FsQ2FyZC5qcydcclxuXHJcbi8vIExvYWRzIHRoZSBmcmllbmRzIHBhZ2UgYW5kIGNvbXBvbmVudHMgXHJcblxyXG5mdW5jdGlvbiBGcmllbmRzUGFnZSh7cG9zdHN9KSB7XHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgdXNlcj0+IHtcclxuICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgc2V0TG9hZGVkKGZhbHNlKVxyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldExvYWRlZCh0cnVlKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vIENsZWFudXAgc3Vic2NyaXB0aW9uIG9uIHVubW91bnRcclxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xyXG4gIH0sIFtdKTtcclxuICBcclxuXHJcbiBcclxuICBpZighbG9hZGVkKXsgcmV0dXJuIDxkaXY+PC9kaXY+IH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj4gXHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5UaGUgTG91bmdlPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPEhlYWRlci8+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT0nZmxleCBmbGV4LXdyYXAgcmVsYXRpdmUgc3BhY2UteC0yJz5cclxuICAgICAgICAgXHJcbiAgICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEZyaWVuZHNWZXJ0aWNhbENhcmQgLz5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvbWFpbj4gIFxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZyaWVuZHNQYWdlIl0sIm5hbWVzIjpbIkhlYWRlciIsIlNpZGViYXIiLCJGZWVkIiwiSGVhZCIsInVzZVJvdXRlciIsImdldEF1dGgiLCJzaWduT3V0Iiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImRiIiwiY29sbGVjdGlvbiIsIm9uU25hcHNob3QiLCJnZXREb2NzIiwicXVlcnkiLCJvcmRlckJ5IiwiRnJpZW5kUG9zdHMiLCJGcmllbmRzVmVydGljYWxDYXJkIiwiRnJpZW5kc1BhZ2UiLCJwb3N0cyIsImF1dGgiLCJyb3V0ZXIiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJ1bnN1YnNjcmliZSIsInVzZXIiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/FriendsPage.js\n");

/***/ })

});