"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/FriendRequestsPage",{

/***/ "./components/Requests.js":
/*!********************************!*\
  !*** ./components/Requests.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _InputBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputBox */ \"./components/InputBox.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Request */ \"./components/Request.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\Requests.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Requests(_ref) {\n  _s();\n\n  var posts = _ref.posts;\n  // Handles the requests for friends\n  var user = _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.currentUser; // const [realtimeUsers, loading, error] =  useCollection(\n  //      query(collection(db, \"FriendRequests\"), where(id, \"==\", user.uid))\n  // );\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]),\n      Array = _useState[0],\n      setArray = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),\n      hasRequests = _useState2[0],\n      setHasRequests = _useState2[1];\n  /*\r\n    useEffect(async () => {\r\n        if (user) {\r\n        \r\n          console.log(\"use effect run again\")\r\n          const querySnapshot = await getDocs(collection(db, \"FriendRequests\"));\r\n          const tempArray = []\r\n          let tempQuerySnapshot;\r\n          querySnapshot.forEach((doc) => {\r\n            tempQuerySnapshot\r\n          });\r\n            tempArray.push( {\r\n            key_id: doc.id,\r\n          })\r\n          setSearchArray(tempArray)\r\n         \r\n        }\r\n      }, [])\r\n      */\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)( /*#__PURE__*/(0,C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var sfRef, collections, data, tempArray;\n    return C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!user) {\n              _context.next = 8;\n              break;\n            }\n\n            sfRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"FriendRequests\"), user.uid);\n            _context.next = 4;\n            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)(sfRef);\n\n          case 4:\n            collections = _context.sent;\n            data = collections.data();\n            tempArray = [];\n\n            if (data != null) {\n              Object.keys(data).forEach(function (usertags) {\n                tempArray.push({\n                  key_id: usertags\n                });\n              });\n\n              if (tempArray.length != 0) {\n                setHasRequests(true);\n              }\n\n              setArray(tempArray);\n            }\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n    className: \"flex-grow  pb-44 pt-6 mr-4\\r xl:mr-40 overflow-y-auto \",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: \"mx-auto max-w-md md:max-w-lg lg:max-w-xl \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: \"p-5  mt-5\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-between space-x-2\",\n        children: [hasRequests == false ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n          className: \"flex font-medium flex-grow text-3xl justify-center pb-12  mr-4 xl:mr-40 overflow-y-auto\",\n          children: \"You have no Friend Requests\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 15\n        }, this) :\n        /*#__PURE__*/\n        // <p className=\"flex flex-shrink font-medium text-3xl justify-center pb-12  mr-4 xl:mr-40 overflow-y-auto\">Friend Requests</p>\n        (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"p\", {\n          className: \"font-medium text-3xl justify-center \",\n          children: \"Friend Requests\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 15\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n          className: \" grid grid-cols-2 gap-14  mr-4 xl:mr-40 \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Requests, \"mtR0qA7/dy53p0TpbXciugerbWc=\");\n\n_c = Requests;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Requests);\n/**{ realtimeUsers?.docs.map((potentialFriend) => (\r\n                <Request\r\n                key_id={potentialFriend.data().id}\r\n                \r\n                />\r\n        ))\r\n            } */\n\nvar _c;\n\n$RefreshReg$(_c, \"Requests\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcXVlc3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU2tCLFFBQVQsT0FBNkI7QUFBQTs7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDM0I7QUFFQSxNQUFNQyxJQUFJLEdBQUduQix1REFBYixDQUgyQixDQUszQjtBQUNBO0FBQ0E7O0FBRUEsa0JBQTBCZSwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPTSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBc0NQLCtDQUFRLENBQUMsS0FBRCxDQUE5QztBQUFBLE1BQU9RLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7QUFDQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0VSLEVBQUFBLGdEQUFTLDBXQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNKRyxJQURJO0FBQUE7QUFBQTtBQUFBOztBQUVBTSxZQUFBQSxLQUZBLEdBRVFsQix1REFBRyxDQUFDSiw4REFBVSxDQUFDRix5Q0FBRCxFQUFLLGdCQUFMLENBQVgsRUFBbUNrQixJQUFJLENBQUNPLEdBQXhDLENBRlg7QUFBQTtBQUFBLG1CQUdvQnBCLDBEQUFNLENBQUNtQixLQUFELENBSDFCOztBQUFBO0FBR0FFLFlBQUFBLFdBSEE7QUFJQUMsWUFBQUEsSUFKQSxHQUlPRCxXQUFXLENBQUNDLElBQVosRUFKUDtBQUtBQyxZQUFBQSxTQUxBLEdBS1ksRUFMWjs7QUFPTixnQkFBSUQsSUFBSSxJQUFJLElBQVosRUFBa0I7QUFDaEJFLGNBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxJQUFaLEVBQWtCSSxPQUFsQixDQUEwQixVQUFDQyxRQUFELEVBQWM7QUFDdENKLGdCQUFBQSxTQUFTLENBQUNLLElBQVYsQ0FBZTtBQUNiQyxrQkFBQUEsTUFBTSxFQUFFRjtBQURLLGlCQUFmO0FBR0QsZUFKRDs7QUFLQSxrQkFBSUosU0FBUyxDQUFDTyxNQUFWLElBQW9CLENBQXhCLEVBQTJCO0FBQ3pCWixnQkFBQUEsY0FBYyxDQUFDLElBQUQsQ0FBZDtBQUNEOztBQUVERixjQUFBQSxRQUFRLENBQUNPLFNBQUQsQ0FBUjtBQUNEOztBQWxCSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBb0JOLEVBcEJNLENBQVQ7QUFzQkEsc0JBQ0U7QUFDRSxhQUFTLEVBQUMsd0RBRFo7QUFBQSw0QkFJRTtBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQU9JO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsc0RBQWY7QUFBQSxtQkFDR04sV0FBVyxJQUFJLEtBQWYsZ0JBQ0M7QUFBSyxtQkFBUyxFQUFDLHlGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUREO0FBQUE7QUFLQztBQUNBO0FBQUcsbUJBQVMsRUFBQyxzQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQSixlQVdFO0FBQUssbUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNEJEOztHQWxGUU47O0tBQUFBO0FBb0ZULCtEQUFlQSxRQUFmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0cy5qcz9hMWM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dEJveCBmcm9tIFwiLi9JbnB1dEJveFwiO1xyXG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyB1c2VDb2xsZWN0aW9uIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQge1xyXG4gIGNvbGxlY3Rpb24sXHJcbiAgcXVlcnksXHJcbiAgd2hlcmUsXHJcbiAgZ2V0RG9jLFxyXG4gIGRvYyxcclxuICBGaWVsZFBhdGgsXHJcbiAgZG9jdW1lbnRJZCxcclxuICBnZXREb2NzLFxyXG4gIGRvY3MsXHJcbiAgbGlzdENvbGxlY3Rpb25zLFxyXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IFJlcXVlc3QgZnJvbSBcIi4vUmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBEb2N1bWVudERvd25sb2FkSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFJlcXVlc3RzKHsgcG9zdHMgfSkge1xyXG4gIC8vIEhhbmRsZXMgdGhlIHJlcXVlc3RzIGZvciBmcmllbmRzXHJcblxyXG4gIGNvbnN0IHVzZXIgPSBhdXRoLmN1cnJlbnRVc2VyO1xyXG5cclxuICAvLyBjb25zdCBbcmVhbHRpbWVVc2VycywgbG9hZGluZywgZXJyb3JdID0gIHVzZUNvbGxlY3Rpb24oXHJcbiAgLy8gICAgICBxdWVyeShjb2xsZWN0aW9uKGRiLCBcIkZyaWVuZFJlcXVlc3RzXCIpLCB3aGVyZShpZCwgXCI9PVwiLCB1c2VyLnVpZCkpXHJcbiAgLy8gKTtcclxuXHJcbiAgY29uc3QgW0FycmF5LCBzZXRBcnJheV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2hhc1JlcXVlc3RzLCBzZXRIYXNSZXF1ZXN0c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLypcclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICBcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlIGVmZmVjdCBydW4gYWdhaW5cIilcclxuICAgICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsIFwiRnJpZW5kUmVxdWVzdHNcIikpO1xyXG4gICAgICAgICAgY29uc3QgdGVtcEFycmF5ID0gW11cclxuICAgICAgICAgIGxldCB0ZW1wUXVlcnlTbmFwc2hvdDtcclxuICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgIHRlbXBRdWVyeVNuYXBzaG90XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB0ZW1wQXJyYXkucHVzaCgge1xyXG4gICAgICAgICAgICBrZXlfaWQ6IGRvYy5pZCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBzZXRTZWFyY2hBcnJheSh0ZW1wQXJyYXkpXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfSwgW10pXHJcbiAgICAgICovXHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBjb25zdCBzZlJlZiA9IGRvYyhjb2xsZWN0aW9uKGRiLCBcIkZyaWVuZFJlcXVlc3RzXCIpLCB1c2VyLnVpZCk7XHJcbiAgICAgIGNvbnN0IGNvbGxlY3Rpb25zID0gYXdhaXQgZ2V0RG9jKHNmUmVmKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGNvbGxlY3Rpb25zLmRhdGEoKTtcclxuICAgICAgY29uc3QgdGVtcEFycmF5ID0gW107XHJcblxyXG4gICAgICBpZiAoZGF0YSAhPSBudWxsKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgodXNlcnRhZ3MpID0+IHtcclxuICAgICAgICAgIHRlbXBBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAga2V5X2lkOiB1c2VydGFncyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0ZW1wQXJyYXkubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgIHNldEhhc1JlcXVlc3RzKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0QXJyYXkodGVtcEFycmF5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwiZmxleC1ncm93ICBwYi00NCBwdC02IG1yLTRcclxuICAgICAgICB4bDptci00MCBvdmVyZmxvdy15LWF1dG8gXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LW1kIG1kOm1heC13LWxnIGxnOm1heC13LXhsIFwiPjwvZGl2PlxyXG5cclxuICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgIG10LTVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICB7aGFzUmVxdWVzdHMgPT0gZmFsc2UgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZvbnQtbWVkaXVtIGZsZXgtZ3JvdyB0ZXh0LTN4bCBqdXN0aWZ5LWNlbnRlciBwYi0xMiAgbXItNCB4bDptci00MCBvdmVyZmxvdy15LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIFlvdSBoYXZlIG5vIEZyaWVuZCBSZXF1ZXN0c1xyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIC8vIDxwIGNsYXNzTmFtZT1cImZsZXggZmxleC1zaHJpbmsgZm9udC1tZWRpdW0gdGV4dC0zeGwganVzdGlmeS1jZW50ZXIgcGItMTIgIG1yLTQgeGw6bXItNDAgb3ZlcmZsb3cteS1hdXRvXCI+RnJpZW5kIFJlcXVlc3RzPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtM3hsIGp1c3RpZnktY2VudGVyIFwiPlxyXG4gICAgICAgICAgICAgICAgRnJpZW5kIFJlcXVlc3RzXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBncmlkIGdyaWQtY29scy0yIGdhcC0xNCAgbXItNCB4bDptci00MCBcIj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0cztcclxuXHJcbi8qKnsgcmVhbHRpbWVVc2Vycz8uZG9jcy5tYXAoKHBvdGVudGlhbEZyaWVuZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFJlcXVlc3RcclxuICAgICAgICAgICAgICAgIGtleV9pZD17cG90ZW50aWFsRnJpZW5kLmRhdGEoKS5pZH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICApKVxyXG4gICAgICAgICAgICB9ICovXHJcbiJdLCJuYW1lcyI6WyJJbnB1dEJveCIsImF1dGgiLCJkYiIsInVzZUNvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJ3aGVyZSIsImdldERvYyIsImRvYyIsIkZpZWxkUGF0aCIsImRvY3VtZW50SWQiLCJnZXREb2NzIiwiZG9jcyIsImxpc3RDb2xsZWN0aW9ucyIsIlJlcXVlc3QiLCJEb2N1bWVudERvd25sb2FkSWNvbiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUmVxdWVzdHMiLCJwb3N0cyIsInVzZXIiLCJjdXJyZW50VXNlciIsIkFycmF5Iiwic2V0QXJyYXkiLCJoYXNSZXF1ZXN0cyIsInNldEhhc1JlcXVlc3RzIiwic2ZSZWYiLCJ1aWQiLCJjb2xsZWN0aW9ucyIsImRhdGEiLCJ0ZW1wQXJyYXkiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInVzZXJ0YWdzIiwicHVzaCIsImtleV9pZCIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Requests.js\n");

/***/ })

});