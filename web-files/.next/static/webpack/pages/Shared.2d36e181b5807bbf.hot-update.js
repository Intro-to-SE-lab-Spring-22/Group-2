"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Shared",{

/***/ "./pages/Shared.js":
/*!*************************!*\
  !*** ./pages/Shared.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sidebar */ \"./components/Sidebar.js\");\n/* harmony import */ var _components_Feed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Feed */ \"./components/Feed.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _components_AccountInfo_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/AccountInfo.js */ \"./components/AccountInfo.js\");\n/* harmony import */ var _components_SharedPosts_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SharedPosts.js */ \"./components/SharedPosts.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\nvar _jsxFileName = \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\pages\\\\Shared.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n // Loads the shared posts page\n\n\n\nfunction Shared(_ref) {\n  _s();\n\n  var posts = _ref.posts;\n  var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.getAuth)();\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),\n      loaded = _useState[0],\n      setLoaded = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {\n    var unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.onAuthStateChanged)(auth, function (user) {\n      if (!user) {\n        setLoaded(false);\n        router.push(\"/\");\n      } else {\n        setLoaded(true);\n      }\n    }); // Cleanup subscription on unmount\n\n    return function () {\n      return unsubscribe();\n    };\n  }, []);\n\n  if (!loaded) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 23\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"title\", {\n        children: \"The Lounge\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"main\", {\n      className: \"flex flex-wrap relative\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_SharedPosts_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        posts: posts\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Shared, \"qr8feAtBH6YL9kZ5N1x+KXznK1w=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];\n});\n\n_c = Shared;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shared);\n\nvar _c;\n\n$RefreshReg$(_c, \"Shared\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9TaGFyZWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7Ozs7QUFFQSxTQUFTbUIsTUFBVCxPQUF5QjtBQUFBOztBQUFBLE1BQVJDLEtBQVEsUUFBUkEsS0FBUTtBQUN2QixNQUFNQyxJQUFJLEdBQUdoQixzREFBTyxFQUFwQjtBQUNBLE1BQU1pQixNQUFNLEdBQUdsQixzREFBUyxFQUF4Qjs7QUFDQSxrQkFBNEJLLCtDQUFRLENBQUMsS0FBRCxDQUFwQztBQUFBLE1BQU9jLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBZCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNZSxXQUFXLEdBQUdsQixpRUFBa0IsQ0FBQ2MsSUFBRCxFQUFPLFVBQUFLLElBQUksRUFBRztBQUNsRCxVQUFJLENBQUNBLElBQUwsRUFBVztBQUNURixRQUFBQSxTQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0FGLFFBQUFBLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZLEdBQVo7QUFDRCxPQUhELE1BR087QUFDTEgsUUFBQUEsU0FBUyxDQUFDLElBQUQsQ0FBVDtBQUNEO0FBRUYsS0FScUMsQ0FBdEMsQ0FEYyxDQVlkOztBQUNBLFdBQU87QUFBQSxhQUFNQyxXQUFXLEVBQWpCO0FBQUEsS0FBUDtBQUNELEdBZFEsRUFjTixFQWRNLENBQVQ7O0FBa0JBLE1BQUcsQ0FBQ0YsTUFBSixFQUFXO0FBQUUsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQW9COztBQUNqQyxzQkFDRTtBQUFBLDRCQUNFLCtEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSwrREFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFNRTtBQUFNLGVBQVMsRUFBQyx5QkFBaEI7QUFBQSw4QkFFSSwrREFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSSwrREFBQyxtRUFBRDtBQUFhLGFBQUssRUFBRUg7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0dBdENRRDtVQUVRZjs7O0tBRlJlO0FBd0NULCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1NoYXJlZC5qcz85ODc3Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgJy4uL2ZpcmViYXNlLmpzJ1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcicgXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhcidcclxuaW1wb3J0IEZlZWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmVlZFwiXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7Z2V0QXV0aCwgc2lnbk91dCwgb25BdXRoU3RhdGVDaGFuZ2VkfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7Y29sbGVjdGlvbiwgb25TbmFwc2hvdCwgZ2V0RG9jcyxxdWVyeSwgb3JkZXJCeX0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgQWNjb3VudEluZm8gZnJvbSAnLi4vY29tcG9uZW50cy9BY2NvdW50SW5mby5qcyc7XHJcbmltcG9ydCBTaGFyZWRQb3N0cyBmcm9tICcuLi9jb21wb25lbnRzL1NoYXJlZFBvc3RzLmpzJ1xyXG5cclxuLy8gTG9hZHMgdGhlIHNoYXJlZCBwb3N0cyBwYWdlXHJcblxyXG5mdW5jdGlvbiBTaGFyZWQoe3Bvc3RzfSkge1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIHVzZXI9PiB7XHJcbiAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgIHNldExvYWRlZChmYWxzZSlcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIilcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRMb2FkZWQodHJ1ZSlcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyBDbGVhbnVwIHN1YnNjcmlwdGlvbiBvbiB1bm1vdW50XHJcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcclxuICB9LCBbXSk7XHJcbiAgXHJcblxyXG4gXHJcbiAgaWYoIWxvYWRlZCl7IHJldHVybiA8ZGl2PjwvZGl2PiB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+IFxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VGhlIExvdW5nZTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxIZWFkZXIvPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9J2ZsZXggZmxleC13cmFwIHJlbGF0aXZlJz5cclxuICAgICAgICAgXHJcbiAgICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgICAgPFNoYXJlZFBvc3RzIHBvc3RzPXtwb3N0c30vPlxyXG4gICAgICAgIDwvbWFpbj4gIFxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoYXJlZCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJTaWRlYmFyIiwiRmVlZCIsIkhlYWQiLCJ1c2VSb3V0ZXIiLCJnZXRBdXRoIiwic2lnbk91dCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJkYiIsImNvbGxlY3Rpb24iLCJvblNuYXBzaG90IiwiZ2V0RG9jcyIsInF1ZXJ5Iiwib3JkZXJCeSIsIkFjY291bnRJbmZvIiwiU2hhcmVkUG9zdHMiLCJTaGFyZWQiLCJwb3N0cyIsImF1dGgiLCJyb3V0ZXIiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJ1bnN1YnNjcmliZSIsInVzZXIiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Shared.js\n");

/***/ })

});