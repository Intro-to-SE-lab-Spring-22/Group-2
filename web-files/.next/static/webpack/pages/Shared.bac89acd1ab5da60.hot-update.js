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

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _HeaderIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderIcon */ \"./components/HeaderIcon.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\Header.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Header() {\n  _s();\n\n  // Variables and states for the header \n  var user = _firebase__WEBPACK_IMPORTED_MODULE_5__.auth.currentUser;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)(); // Header button functions \n\n  var handleLogOut = function handleLogOut(e) {\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_8__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_5__.auth);\n  };\n\n  var GoToAccount = function GoToAccount() {\n    router.push(\"/SettingsPage\");\n  };\n\n  var GoToFeed = function GoToFeed() {\n    router.push(\"/MainPage\");\n  };\n\n  var GoToShared = function GoToShared() {\n    router.push(\"/Shared\");\n  };\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default().useState(user && user.displayName),\n      _React$useState2 = (0,C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      username = _React$useState2[0],\n      setUsername = _React$useState2[1]; // Sets the username on the page \n\n\n  var setPageUsername = /*#__PURE__*/function () {\n    var _ref = (0,C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n      var docRef, docSnap;\n      return C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"Users\", user.uid);\n              _context.next = 3;\n              return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.getDoc)(docRef);\n\n            case 3:\n              docSnap = _context.sent;\n              setUsername(docSnap.data().username);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function setPageUsername() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  setPageUsername();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n    role: \"header\",\n    className: \"sticky top-0 z-50 bg-white flex items-center\\r p-2 lg:px-5 shadow-md\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n      className: \"flex items-center\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n        className: \"flex ml-2 items-center rounded-full bg-blue-100 p-2\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.SearchIcon, {\n          className: \"h-6 text-blue-600\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"input\", {\n          className: \"hidden md:inline-flex ml-2 items-center bg-transparent outline-none\\r placeholder-blue-500 flex-shrink\",\n          type: \"text\",\n          placeholder: \"Search The Lounge\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n      className: \"flex justify-center flex-grow\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n        className: \"flex space-x-6 md:space-x-2\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"button\", {\n          type: \"button\",\n          onClick: GoToFeed,\n          children: window.location.pathname == \"/MainPage\" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_HeaderIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            active: true,\n            Icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.HomeIcon\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 15\n          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_HeaderIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            Icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.HomeIcon\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_HeaderIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.FlagIcon\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"button\", {\n          type: \"button\",\n          onClick: GoToShared,\n          children: window.location.pathname == \"/Shared\" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_HeaderIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            Icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.UserGroupIcon\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 19\n          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_HeaderIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            Icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.UserGroupIcon\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n      className: \" flex items-center sm:space-x-2 justify-end\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"p\", {\n        className: \"flex whitespace-nowrap font-semibold pr-3\",\n        children: [username, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.ViewGridIcon, {\n        className: \"icon\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"button\", {\n        \"data-testid\": \"settings-button\",\n        type: \"button\",\n        onClick: GoToAccount,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.CogIcon, {\n          className: \"icon\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 10\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.BellIcon, {\n        className: \"icon\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"button\", {\n        type: \"button\",\n        onClick: handleLogOut,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.LogoutIcon, {\n          className: \"icon\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Header, \"27m6CQmsmcL/fWw3NP0BbyaaXZo=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter];\n});\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFBQTtBQUFBLGNBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdFRDs7R0FyR1FKO1VBSVFQOzs7S0FKUk87QUF1R1QsK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NGRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJlbGxJY29uLFxyXG4gIENoYXRJY29uLFxyXG4gIExvZ291dEljb24sXHJcbiAgSG9tZUljb24sXHJcbiAgVXNlckdyb3VwSWNvbixcclxuICBWaWV3R3JpZEljb24sXHJcbiAgQ29nSWNvbixcclxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBGbGFnSWNvbixcclxuICBQbGF5SWNvbixcclxuICBTZWFyY2hJY29uLFxyXG4gIFNob3BwaW5nQ2FydEljb24sXHJcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5pbXBvcnQgSGVhZGVySWNvbiBmcm9tIFwiLi9IZWFkZXJJY29uXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtcclxuICBkZWxldGVVc2VyLFxyXG4gIGdldEF1dGgsXHJcbiAgb25BdXRoU3RhdGVDaGFuZ2VkLFxyXG4gIHNpZ25PdXQsXHJcbn0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgZG9jLCBnZXREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgLy8gVmFyaWFibGVzIGFuZCBzdGF0ZXMgZm9yIHRoZSBoZWFkZXIgXHJcblxyXG4gIGNvbnN0IHVzZXIgPSBhdXRoLmN1cnJlbnRVc2VyO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyBIZWFkZXIgYnV0dG9uIGZ1bmN0aW9ucyBcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nT3V0ID0gKGUpID0+IHtcclxuICAgIHNpZ25PdXQoYXV0aCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgR29Ub0FjY291bnQgPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChcIi9TZXR0aW5nc1BhZ2VcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgR29Ub0ZlZWQgPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChcIi9NYWluUGFnZVwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBHb1RvU2hhcmVkID0gKCkgPT4ge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9TaGFyZWRcIik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IFJlYWN0LnVzZVN0YXRlKHVzZXIgJiYgdXNlci5kaXNwbGF5TmFtZSk7XHJcblxyXG4gIC8vIFNldHMgdGhlIHVzZXJuYW1lIG9uIHRoZSBwYWdlIFxyXG4gIFxyXG4gIGNvbnN0IHNldFBhZ2VVc2VybmFtZSA9IGFzeW5jICgpID0+IHtcclxuICAgXHJcbiAgICBjb25zdCBkb2NSZWYgPSBkb2MoZGIsIFwiVXNlcnNcIiwgdXNlci51aWQpO1xyXG4gICAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGdldERvYyhkb2NSZWYpO1xyXG4gICAgc2V0VXNlcm5hbWUoZG9jU25hcC5kYXRhKCkudXNlcm5hbWUpO1xyXG4gIH07XHJcblxyXG4gIHNldFBhZ2VVc2VybmFtZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICByb2xlID0gJ2hlYWRlcidcclxuICAgICAgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIHotNTAgYmctd2hpdGUgZmxleCBpdGVtcy1jZW50ZXJcclxuICAgICAgICBwLTIgbGc6cHgtNSBzaGFkb3ctbWRcIlxyXG4gICAgPlxyXG4gICAgICB7LyogTGVmdCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtbC0yIGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgYmctYmx1ZS0xMDAgcC0yXCI+XHJcbiAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9XCJoLTYgdGV4dC1ibHVlLTYwMFwiIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmlubGluZS1mbGV4IG1sLTIgaXRlbXMtY2VudGVyIGJnLXRyYW5zcGFyZW50IG91dGxpbmUtbm9uZVxyXG4gICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlci1ibHVlLTUwMCBmbGV4LXNocmlua1wiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggVGhlIExvdW5nZVwiXHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogQ2VudGVyICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZmxleC1ncm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNiBtZDpzcGFjZS14LTJcIj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e0dvVG9GZWVkfT5cclxuICAgICAgICAgICAge3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9NYWluUGFnZVwiID8gKFxyXG4gICAgICAgICAgICAgIDxIZWFkZXJJY29uIGFjdGl2ZSBJY29uPXtIb21lSWNvbn0gLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8SGVhZGVySWNvbiBJY29uPXtIb21lSWNvbn0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPEhlYWRlckljb24gSWNvbj17RmxhZ0ljb259IC8+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17R29Ub1NoYXJlZH0+XHJcbiAgICAgICAgICAgICAge3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9TaGFyZWRcIiA/IChcclxuICAgICAgICAgICAgICAgICAgPEhlYWRlckljb24gSWNvbj17VXNlckdyb3VwSWNvbn0gLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxIZWFkZXJJY29uIEljb249e1VzZXJHcm91cEljb259IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogUmlnaHQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggaXRlbXMtY2VudGVyIHNtOnNwYWNlLXgtMiBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgIHsvKipQcm9maWxlIFBpYyBcclxuICAgICAgICAgICAgICAgIDxJbWFnZSAvL29uQ2xpY2s9IHt9IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGN1cm9zci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgIHNjcj17dXNlci5pbWFnZX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICAgICAgICAgICAgbGF5b3V0PVwiZml4ZWRcIlxyXG4gICAgICAgICAgICAgICAgLz4qL31cclxuICAgICAgICB7Lyoqe3VzZXIuZW1haWx9PC9wPiAqL31cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IHdoaXRlc3BhY2Utbm93cmFwIGZvbnQtc2VtaWJvbGQgcHItM1wiPnt1c2VybmFtZX0gPC9wPlxyXG4gICAgICAgIDxWaWV3R3JpZEljb24gY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBkYXRhLXRlc3RpZD0nc2V0dGluZ3MtYnV0dG9uJyB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17R29Ub0FjY291bnR9PlxyXG4gICAgICAgICA8Q29nSWNvbiAgY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPEJlbGxJY29uIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUxvZ091dH0+XHJcbiAgICAgICAgICA8TG9nb3V0SWNvbiBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJCZWxsSWNvbiIsIkNoYXRJY29uIiwiTG9nb3V0SWNvbiIsIkhvbWVJY29uIiwiVXNlckdyb3VwSWNvbiIsIlZpZXdHcmlkSWNvbiIsIkNvZ0ljb24iLCJGbGFnSWNvbiIsIlBsYXlJY29uIiwiU2VhcmNoSWNvbiIsIlNob3BwaW5nQ2FydEljb24iLCJIZWFkZXJJY29uIiwiSW1hZ2UiLCJhdXRoIiwiZGIiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiZGVsZXRlVXNlciIsImdldEF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJzaWduT3V0IiwiZG9jIiwiZ2V0RG9jIiwiSGVhZGVyIiwidXNlciIsImN1cnJlbnRVc2VyIiwicm91dGVyIiwiaGFuZGxlTG9nT3V0IiwiZSIsIkdvVG9BY2NvdW50IiwicHVzaCIsIkdvVG9GZWVkIiwiR29Ub1NoYXJlZCIsImRpc3BsYXlOYW1lIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInNldFBhZ2VVc2VybmFtZSIsImRvY1JlZiIsInVpZCIsImRvY1NuYXAiLCJkYXRhIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});