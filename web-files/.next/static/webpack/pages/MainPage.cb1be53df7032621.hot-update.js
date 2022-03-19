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

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _HeaderIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderIcon */ \"./components/HeaderIcon.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n\n\n\n\n\n\nfunction Header() {\n    var user = _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.currentUser;\n    var handleLogOut = function(e) {\n        console.log(\"Click\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex ml-2 items-center rounded-full bg-blue-100 p-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.SearchIcon, {\n                            className: \"h-6 text-blue-600\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Krunal Patel\\\\Desktop\\\\Group2Website\\\\web-files\\\\components\\\\Header.js\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-blue-500 flex-shrink\",\n                            type: \"text\",\n                            placeholder: \"Search The Lounge\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Krunal Patel\\\\Desktop\\\\Group2Website\\\\web-files\\\\components\\\\Header.js\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Krunal Patel\\\\Desktop\\\\Group2Website\\\\web-files\\\\components\\\\Header.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Krunal Patel\\\\Desktop\\\\Group2Website\\\\web-files\\\\components\\\\Header.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center flex-grow\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex space-x-6 md:space-x-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderIcon__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            active: true,\n                            Icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.HomeIcon\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Krunal Patel\\\\Desktop\\\\Group2Website\\\\web-files\\\\components\\\\Header.js\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderIcon__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.FlagIcon\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Krunal Patel\\\\Desktop\\\\Group2Website\\\\web-files\\\\components\\\\Header.js\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderIcon__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            Icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.UserGroupIcon\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Krunal Patel\\\\Desktop\\\\Group2Website\\\\web-files\\\\components\\\\Header.js\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Krunal Patel\\\\Desktop\\\\Group2Website\\\\web-files\\\\components\\\\Header.js\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Krunal Patel\\\\Desktop\\\\Group2Website\\\\web-files\\\\components\\\\Header.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center sm:space-x-2 justify-end\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"flex whitespace-nowrap font-semibold pr-3\",\n                        children: [\n                            user && user.email,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Krunal Patel\\\\Desktop\\\\Group2Website\\\\web-files\\\\components\\\\Header.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.ViewGridIcon, {\n                        className: \"icon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Krunal Patel\\\\Desktop\\\\Group2Website\\\\web-files\\\\components\\\\Header.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.ChatIcon, {\n                        className: \"icon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Krunal Patel\\\\Desktop\\\\Group2Website\\\\web-files\\\\components\\\\Header.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.BellIcon, {\n                        className: \"icon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Krunal Patel\\\\Desktop\\\\Group2Website\\\\web-files\\\\components\\\\Header.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: handleLogOut,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.ChevronDownIcon, {\n                            className: \"icon\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Krunal Patel\\\\Desktop\\\\Group2Website\\\\web-files\\\\components\\\\Header.js\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Krunal Patel\\\\Desktop\\\\Group2Website\\\\web-files\\\\components\\\\Header.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Krunal Patel\\\\Desktop\\\\Group2Website\\\\web-files\\\\components\\\\Header.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Krunal Patel\\\\Desktop\\\\Group2Website\\\\web-files\\\\components\\\\Header.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this));\n}\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTytCO0FBT0U7QUFDSTtBQUNQO0FBQ0U7U0FHdkJhLE1BQU0sR0FBRSxDQUFDO0lBQ2QsR0FBSyxDQUFDQyxJQUFJLEdBQUdGLHVEQUFnQjtJQUM3QixHQUFLLENBQUNJLFlBQVksR0FBRyxRQUFRLENBQVBDLENBQUMsRUFBSyxDQUFDO1FBQ3pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFPO0lBQ3ZCLENBQUM7SUFDRCxNQUFNLDZFQUNEQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUNPOzt3RkFFakJELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFtQjtzR0FDN0JELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFxRDs7b0dBQy9EYixnRUFBVTs0QkFBQ2EsU0FBUyxFQUFDLENBQW1COzs7Ozs7b0dBQ3hDQyxDQUFLOzRCQUFDRCxTQUFTLEVBQUUsQ0FDZ0I7NEJBQUNFLElBQUksRUFBQyxDQUFNOzRCQUFDQyxXQUFXLEVBQUMsQ0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUtyRkosQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQStCO3NHQUN6Q0QsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQTZCOztvR0FDdkNYLG1EQUFVOzRCQUFDZSxNQUFNOzRCQUFDQyxJQUFJLEVBQUV2Qiw0REFBUTs7Ozs7O29HQUNoQ08sbURBQVU7NEJBQUNnQixJQUFJLEVBQUVwQiw4REFBUTs7Ozs7O29HQUN6QkksbURBQVU7NEJBQUNnQixJQUFJLEVBQUV0QixpRUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBS3RDZ0IsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQTRDOztnR0FVdERNLENBQUM7d0JBQUNOLFNBQVMsRUFBQyxDQUEyQzs7NEJBQUVQLElBQUksSUFBS0EsSUFBSSxDQUFDYyxLQUFLOzRCQUFFLENBQUM7Ozs7Ozs7Z0dBQy9FdkIsZ0VBQVk7d0JBQUNnQixTQUFTLEVBQUMsQ0FBTTs7Ozs7O2dHQUM3QnBCLDREQUFRO3dCQUFDb0IsU0FBUyxFQUFDLENBQU07Ozs7OztnR0FDekJyQiw0REFBUTt3QkFBQ3FCLFNBQVMsRUFBQyxDQUFNOzs7Ozs7Z0dBQ3pCUSxDQUFNO3dCQUFDTixJQUFJLEVBQUMsQ0FBUTt3QkFBQ08sT0FBTyxFQUFHZCxZQUFZOzhHQUN2Q2QsbUVBQWU7NEJBQUNtQixTQUFTLEVBQUMsQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckQsQ0FBQztLQWxEUVIsTUFBTTtBQW9EZiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBCZWxsSWNvbixcclxuICAgIENoYXRJY29uLFxyXG4gICAgQ2hldnJvbkRvd25JY29uLFxyXG4gICAgSG9tZUljb24sXHJcbiAgICBVc2VyR3JvdXBJY29uLFxyXG4gICAgVmlld0dyaWRJY29uLFxyXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgRmxhZ0ljb24sXHJcbiAgICBQbGF5SWNvbixcclxuICAgIFNlYXJjaEljb24sXHJcbiAgICBTaG9wcGluZ0NhcnRJY29uLFxyXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0IEhlYWRlckljb24gZnJvbSBcIi4vSGVhZGVySWNvblwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7YXV0aH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpe1xyXG4gICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXI7XHJcbiAgICBjb25zdCBoYW5kbGVMb2dPdXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2xpY2tcIilcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCB6LTUwIGJnLXdoaXRlIGZsZXggaXRlbXMtY2VudGVyXHJcbiAgICAgICAgcC0yIGxnOnB4LTUgc2hhZG93LW1kXCI+IFxyXG4gICAgICAgICAgICB7LyogTGVmdCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1sLTIgaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1ibHVlLTEwMCBwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9XCJoLTYgdGV4dC1ibHVlLTYwMFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lID1cImhpZGRlbiBtZDppbmxpbmUtZmxleCBtbC0yIGl0ZW1zLWNlbnRlciBiZy10cmFuc3BhcmVudCBvdXRsaW5lLW5vbmVcclxuICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXItYmx1ZS01MDAgZmxleC1zaHJpbmtcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIFRoZSBMb3VuZ2VcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIENlbnRlciAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGZsZXgtZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNiBtZDpzcGFjZS14LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVySWNvbiBhY3RpdmUgSWNvbj17SG9tZUljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVySWNvbiBJY29uPXtGbGFnSWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXJJY29uIEljb249e1VzZXJHcm91cEljb259Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBSaWdodCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzbTpzcGFjZS14LTIganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgIHsvKipQcm9maWxlIFBpYyBcclxuICAgICAgICAgICAgICAgIDxJbWFnZSAvL29uQ2xpY2s9IHt9IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGN1cm9zci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgIHNjcj17dXNlci5pbWFnZX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICAgICAgICAgICAgbGF5b3V0PVwiZml4ZWRcIlxyXG4gICAgICAgICAgICAgICAgLz4qL31cclxuICAgICAgICAgICAgICAgIHsvKip7dXNlci5lbWFpbH08L3A+ICovICB9XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IHdoaXRlc3BhY2Utbm93cmFwIGZvbnQtc2VtaWJvbGQgcHItM1wiPnt1c2VyICYmICh1c2VyLmVtYWlsKX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgPFZpZXdHcmlkSWNvbiBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxDaGF0SWNvbiBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCZWxsSWNvbiBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2sgPXtoYW5kbGVMb2dPdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uRG93bkljb24gY2xhc3NOYW1lPVwiaWNvblwiLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdLCJuYW1lcyI6WyJCZWxsSWNvbiIsIkNoYXRJY29uIiwiQ2hldnJvbkRvd25JY29uIiwiSG9tZUljb24iLCJVc2VyR3JvdXBJY29uIiwiVmlld0dyaWRJY29uIiwiRmxhZ0ljb24iLCJQbGF5SWNvbiIsIlNlYXJjaEljb24iLCJTaG9wcGluZ0NhcnRJY29uIiwiSGVhZGVySWNvbiIsIkltYWdlIiwiYXV0aCIsIkhlYWRlciIsInVzZXIiLCJjdXJyZW50VXNlciIsImhhbmRsZUxvZ091dCIsImUiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhY3RpdmUiLCJJY29uIiwicCIsImVtYWlsIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});