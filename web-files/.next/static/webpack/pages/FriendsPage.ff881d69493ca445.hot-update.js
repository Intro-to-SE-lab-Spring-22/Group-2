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

/***/ "./components/Posts.js":
/*!*****************************!*\
  !*** ./components/Posts.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Post */ \"./components/Post.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\Posts.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Posts() {\n  _s();\n\n  var _this = this;\n\n  var user = _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.currentUser;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null),\n      profilePicture = _useState[0],\n      setProfilePicture = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),\n      userFriends = _useState2[0],\n      setUserFriends = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),\n      debounce = _useState3[0],\n      setDebounce = _useState3[1]; // Gets the posts from the database and renders them in real time\n\n\n  var _useCollection = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__.useCollection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"Posts\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.orderBy)(\"timestamp\", \"desc\"))),\n      _useCollection2 = (0,C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useCollection, 3),\n      realtimePosts = _useCollection2[0],\n      loading = _useCollection2[1],\n      error = _useCollection2[2];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)( /*#__PURE__*/(0,C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n    var sfRef, collections, data, tempArray;\n    return C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            sfRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, 'Friends', user.uid);\n            _context.next = 3;\n            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDoc)(sfRef);\n\n          case 3:\n            collections = _context.sent;\n            data = collections.data();\n            tempArray = [];\n\n            if (data != null) {\n              Object.keys(data).forEach(function (key) {\n                // tempArray.push( {\n                //   [key]: data[key]\n                // })\n                tempArray.push(key);\n              });\n\n              if (tempArray.length != 0) {\n                setUserFriends(tempArray);\n              }\n\n              setDebounce(true);\n            } else {\n              setDebounce(true);\n            }\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []); //orderBy(\"name\", \"desc\")\n\n  if (debounce == false) {\n    return false;\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n    children: [console.log(userFriends), realtimePosts === null || realtimePosts === void 0 ? void 0 : realtimePosts.docs.map(function (post) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Post__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        key_id: post.id,\n        name: post.data().username,\n        message: post.data().content,\n        uid: post.data().uid,\n        timestamp: post.data().timestamp,\n        likes: post.data().likes,\n        postImage: post.data().postImage,\n        profile_picture: post.data().profile_picture || null,\n        friends: userFriends\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 5\n  }, this);\n  {\n    /* \r\n    <div>\r\n      {realtimePosts\r\n        ? \r\n        realtimePosts?.docs.map((post) => (\r\n            <Post\r\n              key={post.id}\r\n              name={post.data().username}\r\n              message={post.data().content}\r\n             \r\n              timestamp={post.data().timestamp}\r\n              \r\n              postImage={post.data().postImage}\r\n            />\r\n          ))\r\n        : posts.map((post) => (\r\n            <Post\r\n              key={post.id}\r\n              name={post.username}\r\n              message={post.content}\r\n             \r\n              timestamp={post.timestamp}\r\n              postImage={post.postImage}\r\n            />\r\n          ))}\r\n    </div>\r\n        */\n  }\n}\n\n_s(Posts, \"dNpzt2MftxbYL/y929mGUurVsRU=\", false, function () {\n  return [react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__.useCollection];\n});\n\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\n\nvar _c;\n\n$RefreshReg$(_c, \"Posts\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WixJQUFMLEdBQVltQixlQUFaLElBQStCLElBUmxEO0FBU0UsZUFBTyxFQUFJN0I7QUFUYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRnVCO0FBQUEsS0FBeEIsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRjtBQW9CQTtBQUNFO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNHO0FBQ0Y7O0dBOUZRTDtVQVFpQ1A7OztLQVJqQ087QUFnR1QsK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0cy5qcz83NWRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XHJcblxyXG5pbXBvcnQgUG9zdCBmcm9tIFwiLi9Qb3N0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlQ29sbGVjdGlvbiB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHtcclxuICBjb2xsZWN0aW9uLFxyXG4gIHF1ZXJ5LFxyXG4gIG9yZGVyQnksXHJcbiAgZ2V0RG9jLFxyXG4gIGdldERvY3MsXHJcbiAgZG9jLFxyXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuZnVuY3Rpb24gUG9zdHMoKSB7XHJcbiAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXI7XHJcblxyXG5cclxuICBjb25zdCBbcHJvZmlsZVBpY3R1cmUsIHNldFByb2ZpbGVQaWN0dXJlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3VzZXJGcmllbmRzLCBzZXRVc2VyRnJpZW5kc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbZGVib3VuY2UsIHNldERlYm91bmNlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIC8vIEdldHMgdGhlIHBvc3RzIGZyb20gdGhlIGRhdGFiYXNlIGFuZCByZW5kZXJzIHRoZW0gaW4gcmVhbCB0aW1lXHJcbiAgY29uc3QgW3JlYWx0aW1lUG9zdHMsIGxvYWRpbmcsIGVycm9yXSA9IHVzZUNvbGxlY3Rpb24oXHJcbiAgICBxdWVyeShjb2xsZWN0aW9uKGRiLCBcIlBvc3RzXCIpLCBvcmRlckJ5KFwidGltZXN0YW1wXCIsIFwiZGVzY1wiKSlcclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3Qgc2ZSZWYgPSBkb2MoZGIsICdGcmllbmRzJywgdXNlci51aWQpO1xyXG4gICAgY29uc3QgY29sbGVjdGlvbnMgPSBhd2FpdCBnZXREb2Moc2ZSZWYpO1xyXG4gICAgICBjb25zdCBkYXRhID0gY29sbGVjdGlvbnMuZGF0YSgpO1xyXG4gICAgICBsZXQgdGVtcEFycmF5ID0gW11cclxuICAgICAgaWYgKGRhdGEgIT0gbnVsbCkge1xyXG4gICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgLy8gdGVtcEFycmF5LnB1c2goIHtcclxuICAgICAgICAgIC8vICAgW2tleV06IGRhdGFba2V5XVxyXG4gICAgICAgICAgLy8gfSlcclxuICAgICAgICAgXHJcbiAgICAgICAgICB0ZW1wQXJyYXkucHVzaChrZXkpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIGlmICh0ZW1wQXJyYXkubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgIHNldFVzZXJGcmllbmRzKHRlbXBBcnJheSlcclxuICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBzZXREZWJvdW5jZSh0cnVlKVxyXG4gICAgIH0gZWxzZSB7XHJcbiAgICAgICBzZXREZWJvdW5jZSh0cnVlKVxyXG4gICAgIH1cclxuICAgICBcclxuICB9LCBbXSlcclxuIFxyXG4gIC8vb3JkZXJCeShcIm5hbWVcIiwgXCJkZXNjXCIpXHJcbiAgaWYgKGRlYm91bmNlID09IGZhbHNlKSB7cmV0dXJuIGZhbHNlfVxyXG4gIHJldHVybiAoXHJcbiAgXHJcbiAgICA8ZGl2PlxyXG4gICAgIHtjb25zb2xlLmxvZyh1c2VyRnJpZW5kcyl9XHJcbiAgICAgIHtyZWFsdGltZVBvc3RzPy5kb2NzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxQb3N0XHJcbiAgICAgICAgICBrZXlfaWQ9e3Bvc3QuaWR9XHJcbiAgICAgICAgICBuYW1lPXtwb3N0LmRhdGEoKS51c2VybmFtZX1cclxuICAgICAgICAgIG1lc3NhZ2U9e3Bvc3QuZGF0YSgpLmNvbnRlbnR9XHJcbiAgICAgICAgICB1aWQ9e3Bvc3QuZGF0YSgpLnVpZH1cclxuICAgICAgICAgIHRpbWVzdGFtcD17cG9zdC5kYXRhKCkudGltZXN0YW1wfVxyXG4gICAgICAgICAgbGlrZXM9e3Bvc3QuZGF0YSgpLmxpa2VzfVxyXG4gICAgICAgICAgcG9zdEltYWdlPXtwb3N0LmRhdGEoKS5wb3N0SW1hZ2V9XHJcbiAgICAgICAgICBwcm9maWxlX3BpY3R1cmU9e3Bvc3QuZGF0YSgpLnByb2ZpbGVfcGljdHVyZSB8fCBudWxsfVxyXG4gICAgICAgICAgZnJpZW5kcyA9IHt1c2VyRnJpZW5kc31cclxuICAgICAgICAvPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbiAge1xyXG4gICAgLyogXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7cmVhbHRpbWVQb3N0c1xyXG4gICAgICAgID8gXHJcbiAgICAgICAgcmVhbHRpbWVQb3N0cz8uZG9jcy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgPFBvc3RcclxuICAgICAgICAgICAgICBrZXk9e3Bvc3QuaWR9XHJcbiAgICAgICAgICAgICAgbmFtZT17cG9zdC5kYXRhKCkudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgbWVzc2FnZT17cG9zdC5kYXRhKCkuY29udGVudH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHRpbWVzdGFtcD17cG9zdC5kYXRhKCkudGltZXN0YW1wfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHBvc3RJbWFnZT17cG9zdC5kYXRhKCkucG9zdEltYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICA6IHBvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICA8UG9zdFxyXG4gICAgICAgICAgICAgIGtleT17cG9zdC5pZH1cclxuICAgICAgICAgICAgICBuYW1lPXtwb3N0LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U9e3Bvc3QuY29udGVudH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHRpbWVzdGFtcD17cG9zdC50aW1lc3RhbXB9XHJcbiAgICAgICAgICAgICAgcG9zdEltYWdlPXtwb3N0LnBvc3RJbWFnZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgKi9cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RzO1xyXG4iXSwibmFtZXMiOlsiYXV0aCIsImRiIiwiUG9zdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJxdWVyeSIsIm9yZGVyQnkiLCJnZXREb2MiLCJnZXREb2NzIiwiZG9jIiwiUG9zdHMiLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJwcm9maWxlUGljdHVyZSIsInNldFByb2ZpbGVQaWN0dXJlIiwidXNlckZyaWVuZHMiLCJzZXRVc2VyRnJpZW5kcyIsImRlYm91bmNlIiwic2V0RGVib3VuY2UiLCJyZWFsdGltZVBvc3RzIiwibG9hZGluZyIsImVycm9yIiwic2ZSZWYiLCJ1aWQiLCJjb2xsZWN0aW9ucyIsImRhdGEiLCJ0ZW1wQXJyYXkiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInB1c2giLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZG9jcyIsIm1hcCIsInBvc3QiLCJpZCIsInVzZXJuYW1lIiwiY29udGVudCIsInRpbWVzdGFtcCIsImxpa2VzIiwicG9zdEltYWdlIiwicHJvZmlsZV9waWN0dXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Posts.js\n");

/***/ })

});