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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction InputBox() {\n    _s();\n    var auth1 = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();\n    var db1 = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();\n    var storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.getStorage)();\n    var user1 = auth1.currentUser;\n    var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var filepickerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), imageToPost = ref1[0], setImageToPost = ref1[1];\n    var sendPost = function(e) {\n        e.preventDefault();\n        if (!inputRef.current.value) {\n            console.log(\"something went wrong\");\n            return;\n        }\n        ;\n        var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();\n        var user = auth.currentUser;\n        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db1, 'Posts'), {\n            content: inputRef.current.value,\n            uid: user.uid,\n            username: user.displayName\n        });\n        /*Upload Image to File\r\n        \r\n        .then( doc =>{\r\n            if(imageToPost){\r\n                const uploadTask = ref(storage, `Posts/${doc.id}`);\r\n                uploadString(uploadTask, imageToPost, 'data_url');\r\n\r\n                removeImage();\r\n\r\n                uploadTask.on('state_changed', null, (error) => console.error(error), () => {\r\n                    //When the upload completes\r\n                    getDownloadURL(ref(storage, `Posts/${doc.id}`)).then(url => {\r\n                        getDoc(collection(db,'Posts'), doc.id).set({\r\n                            postImage: url\r\n                        }, {merge: true})\r\n                    })\r\n                })\r\n            }\r\n            inputRef.current.value = \"\";\r\n        });*/ inputRef.current.value = \"\";\n    };\n    var addImageToPost = function(e) {\n        var reader = new FileReader();\n        if (e.target.files[0]) {\n            reader.readAsDataURL(e.target.files[0]);\n        }\n        reader.onload = function(readerEvent) {\n            setImageToPost(readerEvent.target.result);\n        };\n    };\n    var removeImage = function() {\n        setImageToPost(null);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white p-2 rounded-2xl shadow-md text-grey-500 font-medium mt-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-4 p-4 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.PlusCircleIcon, {\n                        className: \"h-6 text-blue-600 rounded-full\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"flex flex-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Test\",\n                                ref: inputRef,\n                                className: \"rounded-full h-12 bg-blue-100 flex-grow px-5 focus:outline-none\",\n                                children: \" \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                                lineNumber: 82,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                hidden: true,\n                                onClick: sendPost,\n                                children: \"Post\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                                lineNumber: 86,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, this),\n                    imageToPost && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: removeImage,\n                        className: \"flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"h-10\",\n                                src: imageToPost\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                                lineNumber: 93,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs text-red-500 text-center\",\n                                children: \"Remove\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                                lineNumber: 94,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                        lineNumber: 90,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-evenly p-3 border-t\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: function() {\n                        return filepickerRef.current.click();\n                    },\n                    className: \"inputIcon\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__.CameraIcon, {\n                            className: \"h-7 text-blue-400\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                            lineNumber: 100,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xs sm:text-sm xl:test-base\",\n                            children: \"Attach Photo to Post\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                            lineNumber: 101,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ref: filepickerRef,\n                            onChange: addImageToPost,\n                            type: \"file\",\n                            hidden: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                            lineNumber: 102,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                    lineNumber: 99,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n        lineNumber: 77,\n        columnNumber: 9\n    }, this));\n}\n_s(InputBox, \"QThnvEf3mnFF2K6m1gsk0fXASjI=\");\n_c = InputBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputBox);\nvar _c;\n$RefreshReg$(_c, \"InputBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs4Q0FDRkUsQ0FBSzs7NEJBQXFCVSxRQUFRLEVBQUV2Qjs0QkFBZ0JjOzRCQUFZRyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt2RixDQUFDO0dBN0ZRckMsUUFBUTtLQUFSQSxRQUFRO0FBK0ZqQixNQUFNLFNBQVNBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dEJveC5qcz8zYWY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsdXNDaXJjbGVJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5pbXBvcnQge0NhbWVyYUljb24sIFVzZXJBZGRJY29ufSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJztcclxuaW1wb3J0IHsgY29sbGVjdGlvbiwgZG9jLCBhZGREb2MsIGdldERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2dldEF1dGh9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xyXG5pbXBvcnQge2RifSBmcm9tICcuLi9maXJlYmFzZSc7XHJcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUsIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbmltcG9ydCBcIi4uL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IGdldFN0b3JhZ2UsIHJlZiwgZ2V0RG93bmxvYWRVUkwsIHVwbG9hZFN0cmluZywgVXBsb2FkVGFza30gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBJbnB1dEJveCgpIHtcclxuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgICBjb25zdCBkYiA9IGdldEZpcmVzdG9yZSgpO1xyXG4gICAgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhdXRoLmN1cnJlbnRVc2VyO1xyXG4gICAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBmaWxlcGlja2VyUmVmID0gdXNlUmVmKG51bGwpOyBcclxuICAgIGNvbnN0IFtpbWFnZVRvUG9zdCwgc2V0SW1hZ2VUb1Bvc3RdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG5cclxuICAgIGNvbnN0IHNlbmRQb3N0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlucHV0UmVmLmN1cnJlbnQudmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhdXRoLmN1cnJlbnRVc2VyO1xyXG5cclxuICAgICAgICBhZGREb2MoY29sbGVjdGlvbihkYiwgJ1Bvc3RzJyksIHtcclxuICAgICAgICAgICAgY29udGVudDogaW5wdXRSZWYuY3VycmVudC52YWx1ZSxcclxuICAgICAgICAgICAgdWlkOiB1c2VyLnVpZCxcclxuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXIuZGlzcGxheU5hbWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8qVXBsb2FkIEltYWdlIHRvIEZpbGVcclxuICAgICAgICBcclxuICAgICAgICAudGhlbiggZG9jID0+e1xyXG4gICAgICAgICAgICBpZihpbWFnZVRvUG9zdCl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGxvYWRUYXNrID0gcmVmKHN0b3JhZ2UsIGBQb3N0cy8ke2RvYy5pZH1gKTtcclxuICAgICAgICAgICAgICAgIHVwbG9hZFN0cmluZyh1cGxvYWRUYXNrLCBpbWFnZVRvUG9zdCwgJ2RhdGFfdXJsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlSW1hZ2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB1cGxvYWRUYXNrLm9uKCdzdGF0ZV9jaGFuZ2VkJywgbnVsbCwgKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vV2hlbiB0aGUgdXBsb2FkIGNvbXBsZXRlc1xyXG4gICAgICAgICAgICAgICAgICAgIGdldERvd25sb2FkVVJMKHJlZihzdG9yYWdlLCBgUG9zdHMvJHtkb2MuaWR9YCkpLnRoZW4odXJsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RG9jKGNvbGxlY3Rpb24oZGIsJ1Bvc3RzJyksIGRvYy5pZCkuc2V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RJbWFnZTogdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHttZXJnZTogdHJ1ZX0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXRSZWYuY3VycmVudC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfSk7Ki9cclxuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LnZhbHVlPVwiXCI7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFkZEltYWdlVG9Qb3N0ID0gKGUpPT57XHJcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICBpZiAoZS50YXJnZXQuZmlsZXNbMF0pIHtcclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChyZWFkZXJFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJbWFnZVRvUG9zdChyZWFkZXJFdmVudC50YXJnZXQucmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlbW92ZUltYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEltYWdlVG9Qb3N0KG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtMiByb3VuZGVkLTJ4bCBzaGFkb3ctbWQgdGV4dC1ncmV5LTUwMCBmb250LW1lZGl1bVxyXG4gICAgICAgIG10LTZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNCBwLTQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8UGx1c0NpcmNsZUljb24gY2xhc3NOYW1lPVwiaC02IHRleHQtYmx1ZS02MDAgcm91bmRlZC1mdWxsXCIvPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRlc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGgtMTIgYmctYmx1ZS0xMDAgZmxleC1ncm93IHB4LTUgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lXCI+IDwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaGlkZGVuIG9uQ2xpY2s9e3NlbmRQb3N0fT5Qb3N0PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAge2ltYWdlVG9Qb3N0ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3JlbW92ZUltYWdlfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGZpbHRlciBcclxuICAgICAgICAgICAgICAgICAgICBob3ZlcjpicmlnaHRuZXNzLTExMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTEwXCIgc3JjPXtpbWFnZVRvUG9zdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcmVkLTUwMCB0ZXh0LWNlbnRlclwiPlJlbW92ZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1ldmVubHkgcC0zIGJvcmRlci10XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGZpbGVwaWNrZXJSZWYuY3VycmVudC5jbGljaygpfSBjbGFzc05hbWU9XCJpbnB1dEljb25cIj5cclxuICAgICAgICAgICAgICAgIDxDYW1lcmFJY29uIGNsYXNzTmFtZT1cImgtNyB0ZXh0LWJsdWUtNDAwXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgc206dGV4dC1zbSB4bDp0ZXN0LWJhc2VcIj5BdHRhY2ggUGhvdG8gdG8gUG9zdDwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9e2ZpbGVwaWNrZXJSZWZ9IG9uQ2hhbmdlPXthZGRJbWFnZVRvUG9zdH0gdHlwZT1cImZpbGVcIiBoaWRkZW4+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRCb3giXSwibmFtZXMiOlsiUGx1c0NpcmNsZUljb24iLCJDYW1lcmFJY29uIiwiVXNlckFkZEljb24iLCJjb2xsZWN0aW9uIiwiZG9jIiwiYWRkRG9jIiwiZ2V0RG9jIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJnZXRBdXRoIiwiZGIiLCJnZXRGaXJlc3RvcmUiLCJnZXRTdG9yYWdlIiwicmVmIiwiZ2V0RG93bmxvYWRVUkwiLCJ1cGxvYWRTdHJpbmciLCJVcGxvYWRUYXNrIiwiSW5wdXRCb3giLCJhdXRoIiwic3RvcmFnZSIsInVzZXIiLCJjdXJyZW50VXNlciIsImlucHV0UmVmIiwiZmlsZXBpY2tlclJlZiIsImltYWdlVG9Qb3N0Iiwic2V0SW1hZ2VUb1Bvc3QiLCJzZW5kUG9zdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJjb250ZW50IiwidWlkIiwidXNlcm5hbWUiLCJkaXNwbGF5TmFtZSIsImFkZEltYWdlVG9Qb3N0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInRhcmdldCIsImZpbGVzIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlYWRlckV2ZW50IiwicmVzdWx0IiwicmVtb3ZlSW1hZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJoaWRkZW4iLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwicCIsImNsaWNrIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/InputBox.js\n");

/***/ })

});