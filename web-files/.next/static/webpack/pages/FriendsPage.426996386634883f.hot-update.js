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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sidebar */ \"./components/Sidebar.js\");\n/* harmony import */ var _components_Feed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Feed */ \"./components/Feed.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _components_FriendPosts_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/FriendPosts.js */ \"./components/FriendPosts.js\");\n/* harmony import */ var _components_FriendsVerticalCard_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/FriendsVerticalCard.js */ \"./components/FriendsVerticalCard.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\nvar _jsxFileName = \"C:\\\\Users\\\\Sam\\\\Documents\\\\GitHub\\\\Group-2\\\\web-files\\\\pages\\\\FriendsPage.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n // Loads the friends page and components \n\n\n\nfunction FriendsPage(_ref) {\n  _s();\n\n  var posts = _ref.posts;\n  var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.getAuth)();\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),\n      loaded = _useState[0],\n      setLoaded = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {\n    var unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.onAuthStateChanged)(auth, function (user) {\n      if (!user) {\n        setLoaded(false);\n        router.push(\"/\");\n      } else {\n        setLoaded(true);\n      }\n    }); // Cleanup subscription on unmount\n\n    return function () {\n      return unsubscribe();\n    };\n  }, []);\n\n  if (!loaded) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 23\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"title\", {\n        children: \"The Lounge\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"main\", {\n      className: \"flex flex-wrap relative space-x-2\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_FriendPosts_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        posts: posts\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_FriendsVerticalCard_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, this);\n}\n\n_s(FriendsPage, \"qr8feAtBH6YL9kZ5N1x+KXznK1w=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];\n});\n\n_c = FriendsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FriendsPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"FriendsPage\");\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9GcmllbmRzUGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7OztBQUVBLFNBQVNtQixXQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBUkMsS0FBUSxRQUFSQSxLQUFRO0FBQzVCLE1BQU1DLElBQUksR0FBR2hCLHNEQUFPLEVBQXBCO0FBQ0EsTUFBTWlCLE1BQU0sR0FBR2xCLHNEQUFTLEVBQXhCOztBQUNBLGtCQUE0QkssK0NBQVEsQ0FBQyxLQUFELENBQXBDO0FBQUEsTUFBT2MsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0FkLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1lLFdBQVcsR0FBR2xCLGlFQUFrQixDQUFDYyxJQUFELEVBQU8sVUFBQUssSUFBSSxFQUFHO0FBQ2xELFVBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1RGLFFBQUFBLFNBQVMsQ0FBQyxLQUFELENBQVQ7QUFDQUYsUUFBQUEsTUFBTSxDQUFDSyxJQUFQLENBQVksR0FBWjtBQUNELE9BSEQsTUFHTztBQUNMSCxRQUFBQSxTQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0Q7QUFFRixLQVJxQyxDQUF0QyxDQURjLENBWWQ7O0FBQ0EsV0FBTztBQUFBLGFBQU1DLFdBQVcsRUFBakI7QUFBQSxLQUFQO0FBQ0QsR0FkUSxFQWNOLEVBZE0sQ0FBVDs7QUFrQkEsTUFBRyxDQUFDRixNQUFKLEVBQVc7QUFBRSx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFBb0I7O0FBQ2pDLHNCQUNFO0FBQUEsNEJBQ0UsK0RBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFLCtEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FO0FBQU0sZUFBUyxFQUFDLG1DQUFoQjtBQUFBLDhCQUVJLCtEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJLCtEQUFDLGtFQUFEO0FBQWEsYUFBSyxFQUFFSDtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUFJSSwrREFBQywyRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O0dBdkNRRDtVQUVRZjs7O0tBRlJlO0FBeUNULCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0ZyaWVuZHNQYWdlLmpzPzQ4NzIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCAnLi4vZmlyZWJhc2UuanMnXHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJyBcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlYmFyJ1xyXG5pbXBvcnQgRmVlZCBmcm9tIFwiLi4vY29tcG9uZW50cy9GZWVkXCJcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtnZXRBdXRoLCBzaWduT3V0LCBvbkF1dGhTdGF0ZUNoYW5nZWR9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcclxuaW1wb3J0IHtjb2xsZWN0aW9uLCBvblNuYXBzaG90LCBnZXREb2NzLHF1ZXJ5LCBvcmRlckJ5fSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBGcmllbmRQb3N0cyBmcm9tICcuLi9jb21wb25lbnRzL0ZyaWVuZFBvc3RzLmpzJ1xyXG5pbXBvcnQgRnJpZW5kc1ZlcnRpY2FsQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0ZyaWVuZHNWZXJ0aWNhbENhcmQuanMnXHJcblxyXG4vLyBMb2FkcyB0aGUgZnJpZW5kcyBwYWdlIGFuZCBjb21wb25lbnRzIFxyXG5cclxuZnVuY3Rpb24gRnJpZW5kc1BhZ2Uoe3Bvc3RzfSkge1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIHVzZXI9PiB7XHJcbiAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgIHNldExvYWRlZChmYWxzZSlcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIilcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRMb2FkZWQodHJ1ZSlcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyBDbGVhbnVwIHN1YnNjcmlwdGlvbiBvbiB1bm1vdW50XHJcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcclxuICB9LCBbXSk7XHJcbiAgXHJcblxyXG4gXHJcbiAgaWYoIWxvYWRlZCl7IHJldHVybiA8ZGl2PjwvZGl2PiB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+IFxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VGhlIExvdW5nZTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxIZWFkZXIvPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9J2ZsZXggZmxleC13cmFwIHJlbGF0aXZlIHNwYWNlLXgtMic+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgICAgIDxGcmllbmRQb3N0cyBwb3N0cz17cG9zdHN9Lz5cclxuICAgICAgICAgIDxGcmllbmRzVmVydGljYWxDYXJkIC8+XHJcbiAgICAgICAgPC9tYWluPiAgXHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kc1BhZ2UiXSwibmFtZXMiOlsiSGVhZGVyIiwiU2lkZWJhciIsIkZlZWQiLCJIZWFkIiwidXNlUm91dGVyIiwiZ2V0QXV0aCIsInNpZ25PdXQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZGIiLCJjb2xsZWN0aW9uIiwib25TbmFwc2hvdCIsImdldERvY3MiLCJxdWVyeSIsIm9yZGVyQnkiLCJGcmllbmRQb3N0cyIsIkZyaWVuZHNWZXJ0aWNhbENhcmQiLCJGcmllbmRzUGFnZSIsInBvc3RzIiwiYXV0aCIsInJvdXRlciIsImxvYWRlZCIsInNldExvYWRlZCIsInVuc3Vic2NyaWJlIiwidXNlciIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/FriendsPage.js\n");

/***/ })

});