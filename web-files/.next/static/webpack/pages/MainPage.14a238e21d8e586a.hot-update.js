"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/MainPage",{

/***/ "./components/Posts.js":
/*!*****************************!*\
  !*** ./components/Posts.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Post */ \"./components/Post.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\Posts.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Posts() {\n  _s();\n\n  var _this = this;\n\n  // Gets the posts from the database and renders them in real time \n  var _useCollection = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__.useCollection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_1__.db, \"Posts\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.orderBy)(\"timestamp\", \"desc\"))),\n      _useCollection2 = (0,C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useCollection, 3),\n      realtimePosts = _useCollection2[0],\n      loading = _useCollection2[1],\n      error = _useCollection2[2]; //orderBy(\"name\", \"desc\")\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    children: realtimePosts === null || realtimePosts === void 0 ? void 0 : realtimePosts.docs.map(function (post) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Post__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        key_id: post.id,\n        name: post.data().username,\n        message: post.data().content,\n        uid: post.data().uid,\n        timestamp: post.data().timestamp,\n        likes: post.data().likes,\n        postImage: post.data().postImage\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 11\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, this);\n  {\n    /* \r\n     <div>\r\n       {realtimePosts\r\n         ? \r\n         realtimePosts?.docs.map((post) => (\r\n             <Post\r\n               key={post.id}\r\n               name={post.data().username}\r\n               message={post.data().content}\r\n              \r\n               timestamp={post.data().timestamp}\r\n               \r\n               postImage={post.data().postImage}\r\n             />\r\n           ))\r\n         : posts.map((post) => (\r\n             <Post\r\n               key={post.id}\r\n               name={post.username}\r\n               message={post.content}\r\n              \r\n               timestamp={post.timestamp}\r\n               postImage={post.postImage}\r\n             />\r\n           ))}\r\n     </div>\r\n         */\n  }\n}\n\n_s(Posts, \"hWlN6KBAv9EVKiOdWxaRMvBa/y0=\", false, function () {\n  return [react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__.useCollection];\n});\n\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\n\nvar _c;\n\n$RefreshReg$(_c, \"Posts\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0MsU0FBU00sS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUVoQjtBQUNHLHVCQUF5Q0wsNkVBQWEsQ0FDdERHLHlEQUFLLENBQUNELDhEQUFVLENBQUNILHlDQUFELEVBQUssT0FBTCxDQUFYLEVBQTBCSywyREFBTyxDQUFDLFdBQUQsRUFBYyxNQUFkLENBQWpDLENBRGlELENBQXREO0FBQUE7QUFBQSxNQUFPRSxhQUFQO0FBQUEsTUFBc0JDLE9BQXRCO0FBQUEsTUFBK0JDLEtBQS9CLHNCQUhhLENBTWhCOzs7QUFFQSxzQkFDRTtBQUFBLGNBRUVGLGFBRkYsYUFFRUEsYUFGRix1QkFFRUEsYUFBYSxDQUFFRyxJQUFmLENBQW9CQyxHQUFwQixDQUF3QixVQUFDQyxJQUFEO0FBQUEsMEJBRXBCLDhEQUFDLDZDQUFEO0FBQ0UsY0FBTSxFQUFFQSxJQUFJLENBQUNDLEVBRGY7QUFFRSxZQUFJLEVBQUVELElBQUksQ0FBQ0UsSUFBTCxHQUFZQyxRQUZwQjtBQUdFLGVBQU8sRUFBRUgsSUFBSSxDQUFDRSxJQUFMLEdBQVlFLE9BSHZCO0FBSUUsV0FBRyxFQUFJSixJQUFJLENBQUNFLElBQUwsR0FBWUcsR0FKckI7QUFLRSxpQkFBUyxFQUFFTCxJQUFJLENBQUNFLElBQUwsR0FBWUksU0FMekI7QUFNRSxhQUFLLEVBQUlOLElBQUksQ0FBQ0UsSUFBTCxHQUFZSyxLQU52QjtBQU9FLGlCQUFTLEVBQUVQLElBQUksQ0FBQ0UsSUFBTCxHQUFZTTtBQVB6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRm9CO0FBQUEsS0FBeEI7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQkE7QUFBQztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBVztBQUVWOztHQXREU2Q7VUFHb0NMOzs7S0FIcENLO0FBd0RWLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdHMuanM/NzVkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyB1c2VDb2xsZWN0aW9uIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgUG9zdCBmcm9tIFwiLi9Qb3N0XCI7XHJcbmltcG9ydCB7Y29sbGVjdGlvbiwgcXVlcnksIG9yZGVyQnl9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuIGZ1bmN0aW9uIFBvc3RzKCkge1xyXG5cclxuICAvLyBHZXRzIHRoZSBwb3N0cyBmcm9tIHRoZSBkYXRhYmFzZSBhbmQgcmVuZGVycyB0aGVtIGluIHJlYWwgdGltZSBcclxuICAgICBjb25zdCBbcmVhbHRpbWVQb3N0cywgbG9hZGluZywgZXJyb3JdID0gIHVzZUNvbGxlY3Rpb24oXHJcbiAgICAgcXVlcnkoY29sbGVjdGlvbihkYiwgXCJQb3N0c1wiKSwgb3JkZXJCeShcInRpbWVzdGFtcFwiLCBcImRlc2NcIikpXHJcbiAgKTtcclxuICAvL29yZGVyQnkoXCJuYW1lXCIsIFwiZGVzY1wiKVxyXG4gXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICB7XHJcbiAgICAgIHJlYWx0aW1lUG9zdHM/LmRvY3MubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8UG9zdFxyXG4gICAgICAgICAgICBrZXlfaWQ9e3Bvc3QuaWR9XHJcbiAgICAgICAgICAgIG5hbWU9e3Bvc3QuZGF0YSgpLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICBtZXNzYWdlPXtwb3N0LmRhdGEoKS5jb250ZW50fVxyXG4gICAgICAgICAgICB1aWQgPSB7cG9zdC5kYXRhKCkudWlkfVxyXG4gICAgICAgICAgICB0aW1lc3RhbXA9e3Bvc3QuZGF0YSgpLnRpbWVzdGFtcH1cclxuICAgICAgICAgICAgbGlrZXMgPSB7cG9zdC5kYXRhKCkubGlrZXN9XHJcbiAgICAgICAgICAgIHBvc3RJbWFnZT17cG9zdC5kYXRhKCkucG9zdEltYWdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICkpXHJcbiAgICAgfVxyXG4gIDwvZGl2PilcclxuICB7LyogXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7cmVhbHRpbWVQb3N0c1xyXG4gICAgICAgID8gXHJcbiAgICAgICAgcmVhbHRpbWVQb3N0cz8uZG9jcy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgPFBvc3RcclxuICAgICAgICAgICAgICBrZXk9e3Bvc3QuaWR9XHJcbiAgICAgICAgICAgICAgbmFtZT17cG9zdC5kYXRhKCkudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgbWVzc2FnZT17cG9zdC5kYXRhKCkuY29udGVudH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHRpbWVzdGFtcD17cG9zdC5kYXRhKCkudGltZXN0YW1wfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHBvc3RJbWFnZT17cG9zdC5kYXRhKCkucG9zdEltYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICA6IHBvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICA8UG9zdFxyXG4gICAgICAgICAgICAgIGtleT17cG9zdC5pZH1cclxuICAgICAgICAgICAgICBuYW1lPXtwb3N0LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U9e3Bvc3QuY29udGVudH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHRpbWVzdGFtcD17cG9zdC50aW1lc3RhbXB9XHJcbiAgICAgICAgICAgICAgcG9zdEltYWdlPXtwb3N0LnBvc3RJbWFnZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgKi99XHJcbiBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdHM7Il0sIm5hbWVzIjpbImRiIiwidXNlQ29sbGVjdGlvbiIsIlBvc3QiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJvcmRlckJ5IiwiUG9zdHMiLCJyZWFsdGltZVBvc3RzIiwibG9hZGluZyIsImVycm9yIiwiZG9jcyIsIm1hcCIsInBvc3QiLCJpZCIsImRhdGEiLCJ1c2VybmFtZSIsImNvbnRlbnQiLCJ1aWQiLCJ0aW1lc3RhbXAiLCJsaWtlcyIsInBvc3RJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Posts.js\n");

/***/ })

});