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

/***/ "./components/FriendCard.js":
/*!**********************************!*\
  !*** ./components/FriendCard.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _InputBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InputBox */ \"./components/InputBox.js\");\n/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Posts */ \"./components/Posts.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var _mui_icons_material_Male__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Male */ \"./node_modules/@mui/icons-material/Male.js\");\n/* harmony import */ var _mui_icons_material_Female__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/Female */ \"./node_modules/@mui/icons-material/Female.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\FriendCard.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction FriendCard(_ref) {\n  _s();\n\n  var key_id = _ref.key_id;\n  var user = _firebase__WEBPACK_IMPORTED_MODULE_7__.auth.currentUser;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"),\n      profileImage = _useState[0],\n      setProfileImage = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      bio = _useState2[0],\n      setBio = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      username = _useState3[0],\n      setUsername = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      name = _useState4[0],\n      setName = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      age = _useState5[0],\n      setAge = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      gender = _useState6[0],\n      setGender = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      uid = _useState7[0],\n      setUid = _useState7[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/(0,C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n    var sfRef, collections, data;\n    return C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!user) {\n              _context.next = 13;\n              break;\n            }\n\n            sfRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_7__.db, 'Users'), key_id);\n            _context.next = 4;\n            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDoc)(sfRef);\n\n          case 4:\n            collections = _context.sent;\n            data = collections.data();\n            setBio(data.bio);\n            setUsername(data.username);\n            setName(data.first_name + \" \" + data.last_name);\n            setAge(data.age);\n            setGender(data.gender);\n            setUid(key_id);\n            setProfileImage(data.profile_picture);\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n\n  var removeFriend = function removeFriend() {\n    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_7__.db, \"Friends\", key_id), (0,C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, user.uid, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.deleteField)()));\n    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_7__.db, \"Friends\", user.uid), (0,C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, key_id, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.deleteField)()));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n    className: \"font-sans border bg-white rounded-xl shadow-xl  max-w-xs md:max-w-md lg:max-w-md \",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n      className: \"flex \",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n        role: \"account-form\",\n        className: \"flex flex-shrink max-w-auto pt-6 flex-col items-center p-2  px-4 btext-grey-500 \\r \",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n          className: \"relative w-32 h-32 \",\n          children: profileImage ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"img\", {\n            className: \"rounded-full object-contain \",\n            src: profileImage\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 17\n          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_11__.UserCircleIcon, {\n            className: \"text-blue-300 rounded-full object-contain h-32 w-32\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"p\", {\n          className: \" pt-3  font-semibold text-2xl text-center\",\n          children: name + \", \" + age\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"p\", {\n          className: \"pb-4 pt-1 font-medium text-lg  text-center text-slate-500\",\n          children: username\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"button\", {\n          type: \"button\",\n          onClick: removeFriend,\n          className: \" mb-4 w-40 h-10 text-sm font-semibold text-center  text-white rounded-full block shadow-xl\\r transition ease-in-out bg-blue-600 hover:bg-blue-500 duration-400\",\n          children: \"Remove Friend\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n        className: \"border-l-4 flex  justify-between flex-grow flex-col p-2 py-2 pt-8 w-auto\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"p\", {\n          className: \" font-medium text-lg \",\n          children: bio\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n          className: \"text-right\",\n          children: gender == \"Male\" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_icons_material_Male__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n            style: {\n              fontSize: 36\n            },\n            className: \"mx-2 text-blue-400 rounded-full\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 19\n          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_icons_material_Female__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n            style: {\n              fontSize: 36\n            },\n            className: \"mx-2 text-pink-400 rounded-full\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 19\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 7\n  }, this);\n}\n\n_s(FriendCard, \"eE7XytYUUa7Fq2EHPz9UoG77XHI=\");\n\n_c = FriendCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FriendCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"FriendCard\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBO0FBQUE7QUFBQSxjQS9CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpREg7O0dBdkZReEI7O0tBQUFBO0FBeUZULCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRnJpZW5kQ2FyZC5qcz83YmJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IElucHV0Qm94IGZyb20gXCIuL0lucHV0Qm94XCI7XHJcbmltcG9ydCBQb3N0cyBmcm9tIFwiLi9Qb3N0c1wiO1xyXG5pbXBvcnQge1xyXG4gIGNvbGxlY3Rpb24sXHJcbiAgcXVlcnksXHJcbiAgb3JkZXJCeSxcclxuICB3aGVyZSxcclxuICB1cGRhdGVEb2MsXHJcbiAgZG9jLFxyXG4gIGRlbGV0ZUZpZWxkLFxyXG4gIHNldERvYyxcclxuICBnZXREb2MsXHJcbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBkYiwgYXV0aCwgIHVzZXJ9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICBnZXRBdXRoLFxyXG4gXHJcbiAgb25BdXRoU3RhdGVDaGFuZ2VkLFxyXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gIHNpZ25PdXQsXHJcbiAgICBkZWxldGVVc2VyLCBcclxufSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VDb2xsZWN0aW9uIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlXCI7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VkaXRcIjtcclxuXHJcbmltcG9ydCB7IFBlbmNpbEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xyXG5cclxuaW1wb3J0IHsgVXNlckNpcmNsZUljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xyXG5pbXBvcnQgTWFsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NYWxlJztcclxuaW1wb3J0IEZlbWFsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9GZW1hbGUnO1xyXG5cclxuZnVuY3Rpb24gRnJpZW5kQ2FyZCh7a2V5X2lkfSl7XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXI7XHJcbiAgICBjb25zdCBbcHJvZmlsZUltYWdlLCBzZXRQcm9maWxlSW1hZ2VdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtiaW8sIHNldEJpb10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFthZ2UsIHNldEFnZV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2dlbmRlciwgc2V0R2VuZGVyXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbdWlkLCBzZXRVaWRdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYodXNlcil7XHJcbiAgICAgICAgICAgIGNvbnN0IHNmUmVmID0gZG9jKGNvbGxlY3Rpb24oZGIsJ1VzZXJzJyksIGtleV9pZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3Rpb25zID0gYXdhaXQgZ2V0RG9jKHNmUmVmKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjb2xsZWN0aW9ucy5kYXRhKCk7XHJcbiAgICAgICAgICAgIHNldEJpbyhkYXRhLmJpbyk7XHJcbiAgICAgICAgICAgIHNldFVzZXJuYW1lKGRhdGEudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICBzZXROYW1lKGRhdGEuZmlyc3RfbmFtZSArIFwiIFwiICsgZGF0YS5sYXN0X25hbWUpO1xyXG4gICAgICAgICAgICBzZXRBZ2UoZGF0YS5hZ2UpO1xyXG4gICAgICAgICAgICBzZXRHZW5kZXIoZGF0YS5nZW5kZXIpO1xyXG4gICAgICAgICAgICBzZXRVaWQoa2V5X2lkKTtcclxuICAgICAgICAgICAgc2V0UHJvZmlsZUltYWdlKGRhdGEucHJvZmlsZV9waWN0dXJlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgcmVtb3ZlRnJpZW5kID0gKCkgPT4ge1xyXG4gICAgICBcclxuICAgICAgICB1cGRhdGVEb2MoZG9jKGRiLCBcIkZyaWVuZHNcIiwga2V5X2lkKSwge1xyXG4gICAgICAgICAgICBbdXNlci51aWRdOmRlbGV0ZUZpZWxkKClcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB1cGRhdGVEb2MoZG9jKGRiLCBcIkZyaWVuZHNcIiwgdXNlci51aWQpLCB7XHJcbiAgICAgICAgICAgIFtrZXlfaWRdOmRlbGV0ZUZpZWxkKClcclxuICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zYW5zIGJvcmRlciBiZy13aGl0ZSByb3VuZGVkLXhsIHNoYWRvdy14bCAgbWF4LXcteHMgbWQ6bWF4LXctbWQgbGc6bWF4LXctbWQgXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHJvbGU9XCJhY2NvdW50LWZvcm1cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtc2hyaW5rIG1heC13LWF1dG8gcHQtNiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcC0yICBweC00IGJ0ZXh0LWdyZXktNTAwIFxyXG4gICAgICAgIFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy0zMiBoLTMyIFwiPlxyXG4gICAgICAgICAgICAgIHtwcm9maWxlSW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBvYmplY3QtY29udGFpbiBcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e3Byb2ZpbGVJbWFnZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxVc2VyQ2lyY2xlSWNvblxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTMwMCByb3VuZGVkLWZ1bGwgb2JqZWN0LWNvbnRhaW4gaC0zMiB3LTMyXCJcclxuICAgICAgICAgICAgICAgID48L1VzZXJDaXJjbGVJY29uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgcHQtMyAgZm9udC1zZW1pYm9sZCB0ZXh0LTJ4bCB0ZXh0LWNlbnRlclwiPntuYW1lICsgXCIsIFwiKyBhZ2V9PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYi00IHB0LTEgZm9udC1tZWRpdW0gdGV4dC1sZyAgdGV4dC1jZW50ZXIgdGV4dC1zbGF0ZS01MDBcIj57dXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7cmVtb3ZlRnJpZW5kfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIG1iLTQgdy00MCBoLTEwIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlciAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgYmxvY2sgc2hhZG93LXhsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGJnLWJsdWUtNjAwIGhvdmVyOmJnLWJsdWUtNTAwIGR1cmF0aW9uLTQwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUmVtb3ZlIEZyaWVuZFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0nYm9yZGVyLWwtNCBmbGV4ICBqdXN0aWZ5LWJldHdlZW4gZmxleC1ncm93IGZsZXgtY29sIHAtMiBweS0yIHB0LTggdy1hdXRvJz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIGZvbnQtbWVkaXVtIHRleHQtbGcgXCI+e2Jpb308L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0ndGV4dC1yaWdodCc+IFxyXG4gICAgICAgICAgICAgICAge2dlbmRlciA9PSBcIk1hbGVcIiA/IChcclxuICAgICAgICAgICAgICAgICAgPE1hbGVJY29uIHN0eWxlPXt7IGZvbnRTaXplOiAzNiB9fSBjbGFzc05hbWUgPSBcIm14LTIgdGV4dC1ibHVlLTQwMCByb3VuZGVkLWZ1bGxcIj48L01hbGVJY29uPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPEZlbWFsZUljb24gc3R5bGU9e3sgZm9udFNpemU6IDM2IH19IGNsYXNzTmFtZSA9IFwibXgtMiB0ZXh0LXBpbmstNDAwIHJvdW5kZWQtZnVsbFwiPjwvRmVtYWxlSWNvbj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcmllbmRDYXJkOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIklucHV0Qm94IiwiUG9zdHMiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJvcmRlckJ5Iiwid2hlcmUiLCJ1cGRhdGVEb2MiLCJkb2MiLCJkZWxldGVGaWVsZCIsInNldERvYyIsImdldERvYyIsImRiIiwiYXV0aCIsInVzZXIiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJnZXRBdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduT3V0IiwiZGVsZXRlVXNlciIsInVzZUNvbGxlY3Rpb24iLCJBY2NvdW50Q2lyY2xlSWNvbiIsIkVkaXRJY29uIiwiUGVuY2lsSWNvbiIsIlVzZXJDaXJjbGVJY29uIiwiTWFsZUljb24iLCJGZW1hbGVJY29uIiwiRnJpZW5kQ2FyZCIsImtleV9pZCIsImN1cnJlbnRVc2VyIiwicHJvZmlsZUltYWdlIiwic2V0UHJvZmlsZUltYWdlIiwiYmlvIiwic2V0QmlvIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsIm5hbWUiLCJzZXROYW1lIiwiYWdlIiwic2V0QWdlIiwiZ2VuZGVyIiwic2V0R2VuZGVyIiwidWlkIiwic2V0VWlkIiwic2ZSZWYiLCJjb2xsZWN0aW9ucyIsImRhdGEiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwicHJvZmlsZV9waWN0dXJlIiwicmVtb3ZlRnJpZW5kIiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FriendCard.js\n");

/***/ })

});