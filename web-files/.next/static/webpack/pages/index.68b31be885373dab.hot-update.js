"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/InputBox.js":
/*!********************************!*\
  !*** ./components/InputBox.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction InputBox() {\n    _s();\n    var auth1 = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();\n    var db1 = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();\n    var storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.getStorage)();\n    var user1 = auth1.currentUser;\n    var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var filepickerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), imageToPost = ref1[0], setImageToPost = ref1[1];\n    var sendPost = function(e) {\n        e.preventDefault();\n        if (!inputRef.current.value) {\n            console.log(\"something went wrong\");\n            return;\n        }\n        ;\n        var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();\n        var user = auth.currentUser;\n        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db1, 'Posts'), {\n            content: inputRef.current.value,\n            uid: user.uid,\n            username: user.displayName\n        });\n        /*Upload Image to File\r\n        \r\n        .then( doc =>{\r\n            if(imageToPost){\r\n                const uploadTask = ref(storage, `Posts/${doc.id}`);\r\n                uploadString(uploadTask, imageToPost, 'data_url');\r\n\r\n                removeImage();\r\n\r\n                uploadTask.on('state_changed', null, (error) => console.error(error), () => {\r\n                    //When the upload completes\r\n                    getDownloadURL(ref(storage, `Posts/${doc.id}`)).then(url => {\r\n                        getDoc(collection(db,'Posts'), doc.id).set({\r\n                            postImage: url\r\n                        }, {merge: true})\r\n                    })\r\n                })\r\n            }\r\n            inputRef.current.value = \"\";\r\n        });*/ inputRef.current.value = \"\";\n    };\n    var addImageToPost = function(e) {\n        var reader = new FileReader();\n        if (e.target.files[0]) {\n            reader.readAsDataURL(e.target.files[0]);\n        }\n        reader.onload = function(readerEvent) {\n            setImageToPost(readerEvent.target.result);\n        };\n    };\n    var removeImage = function() {\n        setImageToPost(null);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white p-2 rounded-2xl shadow-md text-grey-500 font-medium mt-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-4 p-4 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.PlusCircleIcon, {\n                        className: \"h-6 text-blue-600 rounded-full\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"flex flex-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Make a Post\",\n                                ref: inputRef,\n                                className: \"rounded-full h-12 bg-blue-100 flex-grow px-5 focus:outline-none\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                hidden: true,\n                                onClick: sendPost,\n                                children: \"Post\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                                lineNumber: 84,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, this),\n                    imageToPost && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: removeImage,\n                        className: \"flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"h-10\",\n                                src: imageToPost\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                                lineNumber: 91,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs text-red-500 text-center\",\n                                children: \"Remove\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                                lineNumber: 92,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                        lineNumber: 88,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-evenly p-3 border-t\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: function() {\n                        return filepickerRef.current.click();\n                    },\n                    className: \"inputIcon\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__.CameraIcon, {\n                            className: \"h-7 text-blue-400\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                            lineNumber: 98,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xs sm:text-sm xl:test-base\",\n                            children: \"Attach Photo to Post\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                            lineNumber: 99,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ref: filepickerRef,\n                            onChange: addImageToPost,\n                            type: \"file\",\n                            hidden: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                            lineNumber: 100,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                    lineNumber: 97,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                lineNumber: 96,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n        lineNumber: 75,\n        columnNumber: 9\n    }, this));\n}\n_s(InputBox, \"QThnvEf3mnFF2K6m1gsk0fXASjI=\");\n_c = InputBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputBox);\nvar _c;\n$RefreshReg$(_c, \"InputBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7NEJBQUNWOzs7Ozs7OzhDQUNGRSxDQUFLOzs0QkFBcUJVLFFBQVEsRUFBRXZCOzRCQUFnQmM7NEJBQVlHLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3ZGLENBQUM7R0EzRlFyQyxRQUFRO0tBQVJBLFFBQVE7QUE2RmpCLE1BQU0sU0FBU0EsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0lucHV0Qm94LmpzPzNhZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGx1c0NpcmNsZUljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcbmltcG9ydCB7Q2FtZXJhSWNvbiwgVXNlckFkZEljb259IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnO1xyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBhZGREb2MsIGdldERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHt1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtnZXRBdXRofSBmcm9tICdmaXJlYmFzZS9hdXRoJztcclxuaW1wb3J0IHtkYn0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbmltcG9ydCBcIi4uL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IGdldFN0b3JhZ2UsIHJlZiwgZ2V0RG93bmxvYWRVUkwsIHVwbG9hZFN0cmluZywgVXBsb2FkVGFza30gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBJbnB1dEJveCgpIHtcclxuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgICBjb25zdCBkYiA9IGdldEZpcmVzdG9yZSgpO1xyXG4gICAgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhdXRoLmN1cnJlbnRVc2VyO1xyXG4gICAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBmaWxlcGlja2VyUmVmID0gdXNlUmVmKG51bGwpOyBcclxuICAgIGNvbnN0IFtpbWFnZVRvUG9zdCwgc2V0SW1hZ2VUb1Bvc3RdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3Qgc2VuZFBvc3QgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaW5wdXRSZWYuY3VycmVudC52YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXI7XHJcbiAgICAgICAgYWRkRG9jKGNvbGxlY3Rpb24oZGIsICdQb3N0cycpLCB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGlucHV0UmVmLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgICAgIHVpZDogdXNlci51aWQsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLmRpc3BsYXlOYW1lXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvKlVwbG9hZCBJbWFnZSB0byBGaWxlXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnRoZW4oIGRvYyA9PntcclxuICAgICAgICAgICAgaWYoaW1hZ2VUb1Bvc3Qpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBsb2FkVGFzayA9IHJlZihzdG9yYWdlLCBgUG9zdHMvJHtkb2MuaWR9YCk7XHJcbiAgICAgICAgICAgICAgICB1cGxvYWRTdHJpbmcodXBsb2FkVGFzaywgaW1hZ2VUb1Bvc3QsICdkYXRhX3VybCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlbW92ZUltYWdlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdXBsb2FkVGFzay5vbignc3RhdGVfY2hhbmdlZCcsIG51bGwsIChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1doZW4gdGhlIHVwbG9hZCBjb21wbGV0ZXNcclxuICAgICAgICAgICAgICAgICAgICBnZXREb3dubG9hZFVSTChyZWYoc3RvcmFnZSwgYFBvc3RzLyR7ZG9jLmlkfWApKS50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldERvYyhjb2xsZWN0aW9uKGRiLCdQb3N0cycpLCBkb2MuaWQpLnNldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0SW1hZ2U6IHVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7bWVyZ2U6IHRydWV9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0UmVmLmN1cnJlbnQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH0pOyovXHJcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC52YWx1ZT1cIlwiO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhZGRJbWFnZVRvUG9zdCA9IChlKT0+e1xyXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmZpbGVzWzBdKSB7XHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAocmVhZGVyRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgc2V0SW1hZ2VUb1Bvc3QocmVhZGVyRXZlbnQudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVJbWFnZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRJbWFnZVRvUG9zdChudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTIgcm91bmRlZC0yeGwgc2hhZG93LW1kIHRleHQtZ3JleS01MDAgZm9udC1tZWRpdW1cclxuICAgICAgICBtdC02XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTQgcC00IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPFBsdXNDaXJjbGVJY29uIGNsYXNzTmFtZT1cImgtNiB0ZXh0LWJsdWUtNjAwIHJvdW5kZWQtZnVsbFwiLz5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNYWtlIGEgUG9zdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGgtMTIgYmctYmx1ZS0xMDAgZmxleC1ncm93IHB4LTUgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBoaWRkZW4gb25DbGljaz17c2VuZFBvc3R9PlBvc3Q8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VUb1Bvc3QgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17cmVtb3ZlSW1hZ2V9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZmlsdGVyIFxyXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyOmJyaWdodG5lc3MtMTEwIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImgtMTBcIiBzcmM9e2ltYWdlVG9Qb3N0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwIHRleHQtY2VudGVyXCI+UmVtb3ZlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWV2ZW5seSBwLTMgYm9yZGVyLXRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gZmlsZXBpY2tlclJlZi5jdXJyZW50LmNsaWNrKCl9IGNsYXNzTmFtZT1cImlucHV0SWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPENhbWVyYUljb24gY2xhc3NOYW1lPVwiaC03IHRleHQtYmx1ZS00MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBzbTp0ZXh0LXNtIHhsOnRlc3QtYmFzZVwiPkF0dGFjaCBQaG90byB0byBQb3N0PC9wPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHJlZj17ZmlsZXBpY2tlclJlZn0gb25DaGFuZ2U9e2FkZEltYWdlVG9Qb3N0fSB0eXBlPVwiZmlsZVwiIGhpZGRlbj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dEJveCJdLCJuYW1lcyI6WyJQbHVzQ2lyY2xlSWNvbiIsIkNhbWVyYUljb24iLCJVc2VyQWRkSWNvbiIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJnZXREb2MiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImdldEF1dGgiLCJkYiIsImdldEZpcmVzdG9yZSIsImdldFN0b3JhZ2UiLCJyZWYiLCJnZXREb3dubG9hZFVSTCIsInVwbG9hZFN0cmluZyIsIlVwbG9hZFRhc2siLCJJbnB1dEJveCIsImF1dGgiLCJzdG9yYWdlIiwidXNlciIsImN1cnJlbnRVc2VyIiwiaW5wdXRSZWYiLCJmaWxlcGlja2VyUmVmIiwiaW1hZ2VUb1Bvc3QiLCJzZXRJbWFnZVRvUG9zdCIsInNlbmRQb3N0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImNvbnRlbnQiLCJ1aWQiLCJ1c2VybmFtZSIsImRpc3BsYXlOYW1lIiwiYWRkSW1hZ2VUb1Bvc3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwicmVhZGVyRXZlbnQiLCJyZXN1bHQiLCJyZW1vdmVJbWFnZSIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsImhpZGRlbiIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJwIiwiY2xpY2siLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/InputBox.js\n");

/***/ })

});