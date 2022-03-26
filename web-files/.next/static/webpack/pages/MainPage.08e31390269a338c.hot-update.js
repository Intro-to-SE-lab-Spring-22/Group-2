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

/***/ "./pages/MainPage.js":
/*!***************************!*\
  !*** ./pages/MainPage.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase.js */ \"./firebase.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Sidebar */ \"./components/Sidebar.js\");\n/* harmony import */ var _components_Feed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Feed */ \"./components/Feed.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MainPage(param) {\n    var posts = param.posts;\n    _s();\n    var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.getAuth)();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false), loaded = ref[0], setLoaded = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function() {\n        var unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.onAuthStateChanged)(auth, function(user) {\n            if (!user) {\n                setLoaded(false);\n                router.push(\"/\");\n            } else {\n                setLoaded(true);\n            }\n        });\n        // Cleanup subscription on unmount\n        return function() {\n            return unsubscribe();\n        };\n    }, []);\n    if (!loaded) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\pages\\\\MainPage.js\",\n            lineNumber: 35,\n            columnNumber: 23\n        }, this));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"The Lounge\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\pages\\\\MainPage.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\pages\\\\MainPage.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\pages\\\\MainPage.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-wrap relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\pages\\\\MainPage.js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Feed__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        posts: posts\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\pages\\\\MainPage.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\pages\\\\MainPage.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\pages\\\\MainPage.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this));\n}\n_s(MainPage, \"cBnK2EO2rufoGdSWPrbUt0T4qxg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = MainPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainPage);\nvar _c;\n$RefreshReg$(_c, \"MainPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9NYWluUGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3VCO0FBRWtCO0FBQ0U7QUFDTjtBQUNUO0FBQ1c7QUFDMkI7QUFDaEI7QUFFK0I7O1NBRXhFYyxRQUFRLENBQUMsS0FBTyxFQUFFLENBQUM7UUFBVEMsS0FBSyxHQUFOLEtBQU8sQ0FBTkEsS0FBSzs7SUFDdEIsR0FBSyxDQUFDQyxJQUFJLEdBQUdYLHNEQUFPO0lBQ3BCLEdBQUssQ0FBQ1ksTUFBTSxHQUFHYixzREFBUztJQUN4QixHQUFLLENBQXVCSyxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFuQ1MsTUFBTSxHQUFlVCxHQUFlLEtBQTVCVSxTQUFTLEdBQUlWLEdBQWU7SUFDM0NDLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDZixHQUFLLENBQUNVLFdBQVcsR0FBR2IsaUVBQWtCLENBQUNTLElBQUksRUFBRUssUUFBUSxDQUFSQSxJQUFJLEVBQUcsQ0FBQztZQUNuRCxFQUFFLEdBQUdBLElBQUksRUFBRSxDQUFDO2dCQUNWRixTQUFTLENBQUMsS0FBSztnQkFDZkYsTUFBTSxDQUFDSyxJQUFJLENBQUMsQ0FBRztZQUNqQixDQUFDLE1BQU0sQ0FBQztnQkFDTkgsU0FBUyxDQUFDLElBQUk7WUFDaEIsQ0FBQztRQUVILENBQUM7UUFFRCxFQUFrQztRQUNsQyxNQUFNLENBQUMsUUFBUTtZQUFGQyxNQUFNLENBQU5BLFdBQVc7O0lBQzFCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFJTCxFQUFFLEdBQUVGLE1BQU0sRUFBQyxDQUFDO1FBQUMsTUFBTSw2RUFBRUssQ0FBRzs7Ozs7SUFBUSxDQUFDO0lBQ2pDLE1BQU0sNkVBQ0hBLENBQUc7O3dGQUNEcEIsa0RBQUk7c0dBQ0ZxQixDQUFLOzhCQUFDLENBQVU7Ozs7Ozs7Ozs7O3dGQUdsQnhCLDBEQUFNOzs7Ozt3RkFDTnlCLENBQUk7Z0JBQUNDLFNBQVMsRUFBQyxDQUF5Qjs7Z0dBRXBDekIsMkRBQU87Ozs7O2dHQUNQQyx3REFBSTt3QkFBQ2EsS0FBSyxFQUFJQSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNOUIsQ0FBQztHQXRDUUQsUUFBUTs7UUFFQVYsa0RBQVM7OztLQUZqQlUsUUFBUTs7QUF3Q2pCLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL01haW5QYWdlLmpzPzI3ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCAnLi4vZmlyZWJhc2UuanMnXHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJyBcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlYmFyJ1xyXG5pbXBvcnQgRmVlZCBmcm9tIFwiLi4vY29tcG9uZW50cy9GZWVkXCJcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtnZXRBdXRoLCBzaWduT3V0LCBvbkF1dGhTdGF0ZUNoYW5nZWR9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcclxuaW1wb3J0IHtjb2xsZWN0aW9uLCBvblNuYXBzaG90LCBnZXREb2NzLHF1ZXJ5LCBvcmRlckJ5fSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcblxyXG5mdW5jdGlvbiBNYWluUGFnZSh7cG9zdHN9KSB7XHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgdXNlcj0+IHtcclxuICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgc2V0TG9hZGVkKGZhbHNlKVxyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldExvYWRlZCh0cnVlKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2xlYW51cCBzdWJzY3JpcHRpb24gb24gdW5tb3VudFxyXG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XHJcbiAgfSwgW10pO1xyXG4gIFxyXG5cclxuIFxyXG4gIGlmKCFsb2FkZWQpeyByZXR1cm4gPGRpdj48L2Rpdj4gfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PiBcclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlRoZSBMb3VuZ2U8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8SGVhZGVyLz5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPSdmbGV4IGZsZXgtd3JhcCByZWxhdGl2ZSc+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgICAgIDxGZWVkIHBvc3RzID0ge3Bvc3RzfS8+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L21haW4+ICBcclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIC8vIEdldCBVc2VyXHJcbiAgXHJcblxyXG4gIFxyXG4gIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSAgYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBcIlBvc3RzXCIpKTtcclxuICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgLy8gZG9jLmRhdGEoKSBpcyBuZXZlciB1bmRlZmluZWQgZm9yIHF1ZXJ5IGRvYyBzbmFwc2hvdHNcclxuICAgIGNvbnNvbGUubG9nKGRvYy5pZCwgXCIgPT4gXCIsIGRvYy5kYXRhKCkpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBkb2NzID0gcXVlcnlTbmFwc2hvdC5tYXAoKHBvc3QpID0+ICh7XHJcbiAgICBpZDogcG9zdC5pZCxcclxuICAgIC4uLnBvc3QuZGF0YSgpLFxyXG4gICAgdGltZXN0YW1wOiBudWxsLFxyXG4gIH0pKTtcclxuICB7Lypjb25zdCBwb3N0cyA9ICBxdWVyeShjb2xsZWN0aW9uKGRiLCBcIlBvc3RzXCIpLCBvcmRlckJ5KFwidGltZXN0YW1wXCIsIFwiZGVzY1wiKSlcclxuXHJcbiAgb25TbmFwc2hvdChwb3N0cywgKHNuYXBzaG90KSA9PiB7XHJcbiAgICBzbmFwc2hvdC5kb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkb2MuZGF0YSgpKVxyXG4gICAgfSlcclxuICB9KVxyXG4gIGNvbnN0IGRvY3MgPSBwb3N0cy5kb2NzLm1hcCgocG9zdCkgPT4gKHtcclxuICAgIGlkOiBwb3N0LmlkLFxyXG4gICAgLi4ucG9zdC5kYXRhKCksXHJcbiAgICB0aW1lc3RhbXA6IG51bGwsXHJcbiAgfSkpO1xyXG4qL31cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtwb3N0czogZG9jcyB9LFxyXG4gIH07XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJTaWRlYmFyIiwiRmVlZCIsIkhlYWQiLCJ1c2VSb3V0ZXIiLCJnZXRBdXRoIiwic2lnbk91dCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJvblNuYXBzaG90IiwicXVlcnkiLCJvcmRlckJ5IiwiTWFpblBhZ2UiLCJwb3N0cyIsImF1dGgiLCJyb3V0ZXIiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJ1bnN1YnNjcmliZSIsInVzZXIiLCJwdXNoIiwiZGl2IiwidGl0bGUiLCJtYWluIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/MainPage.js\n");

/***/ })

});