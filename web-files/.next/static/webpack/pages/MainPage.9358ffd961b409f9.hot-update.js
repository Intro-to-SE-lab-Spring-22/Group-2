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

/***/ "./components/InputBox.js":
/*!********************************!*\
  !*** ./components/InputBox.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction InputBox() {\n    _s();\n    var auth1 = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)();\n    var db1 = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)();\n    var storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.getStorage)();\n    var user1 = auth1.currentUser;\n    var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    var filepickerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), imageToPost = ref2[0], setImageToPost = ref2[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(user1 && user1.displayName), username = ref1[0], setUsername = ref1[1];\n    var setPageUsername = function() {\n        var _ref = _asyncToGenerator(C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var docRef, docSnap;\n            return C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db1, \"Users\", user1.uid);\n                        _ctx.next = 3;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)(docRef);\n                    case 3:\n                        docSnap = _ctx.sent;\n                        setUsername(docSnap.data().username);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function setPageUsername() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    setPageUsername();\n    var sendPost = function(e) {\n        e.preventDefault();\n        if (!inputRef.current.value) {\n            console.log(\"something went wrong\");\n            return;\n        }\n        ;\n        var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)();\n        var user = auth.currentUser;\n        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(db1, 'Posts'), {\n            content: inputRef.current.value,\n            uid: user.uid,\n            username: user.displayName,\n            timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.serverTimestamp)()\n        }).then(function(doc1) {\n            if (imageToPost) {\n                var storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.ref)(storage, \"Posts/\".concat(doc1.id));\n                var uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.uploadString)(storageRef, imageToPost, 'data_url');\n                removeImage();\n                uploadTask.on('state_changed', null, function(error) {\n                    return console.error(error);\n                }, function() {\n                    //When the upload completes\n                    (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.getDownloadURL)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.ref)(uploadTask.snapshot.ref)).then(function(url) {\n                        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)(doc1(db1, \"Posts\", doc1.id), {\n                            postImage: url\n                        }, {\n                            merge: true\n                        });\n                    });\n                });\n            }\n            inputRef.current.value = \"\";\n        });\n        /*Upload Image to File\r\n        \r\n        .then( doc =>{\r\n            if(imageToPost){\r\n                const uploadTask = ref(storage, `Posts/${doc.id}`);\r\n                uploadString(uploadTask, imageToPost, 'data_url');\r\n\r\n                removeImage();\r\n\r\n                uploadTask.on('state_changed', null, (error) => console.error(error), () => {\r\n                    //When the upload completes\r\n                    getDownloadURL(ref(storage, `Posts/${doc.id}`)).then(url => {\r\n                        getDoc(collection(db,'Posts'), doc.id).set({\r\n                            postImage: url\r\n                        }, {merge: true})\r\n                    })\r\n                })\r\n            }\r\n            inputRef.current.value = \"\";\r\n        });*/ inputRef.current.value = \"\";\n    };\n    var addImageToPost = function(e) {\n        var reader = new FileReader();\n        if (e.target.files[0]) {\n            reader.readAsDataURL(e.target.files[0]);\n        }\n        reader.onload = function(readerEvent) {\n            setImageToPost(readerEvent.target.result);\n        };\n    };\n    var removeImage = function() {\n        setImageToPost(null);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"bg-white p-2 rounded-2xl shadow-md text-grey-500 font-medium mt-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex space-x-4 p-4 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.PlusCircleIcon, {\n                        className: \"h-6 text-blue-600 rounded-full\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                        lineNumber: 110,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                        className: \"flex flex-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"What's on your mind \".concat(username, \"?\"),\n                                ref: inputRef,\n                                className: \"rounded-full h-12 bg-blue-100 flex-grow px-5 focus:outline-none\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                                lineNumber: 112,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                hidden: true,\n                                onClick: sendPost,\n                                children: \"Post\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                                lineNumber: 116,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                        lineNumber: 111,\n                        columnNumber: 17\n                    }, this),\n                    imageToPost && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        onClick: removeImage,\n                        className: \"flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                className: \"h-10\",\n                                src: imageToPost\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                                lineNumber: 123,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"text-xs text-red-500 text-center\",\n                                children: \"Remove\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                                lineNumber: 124,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                        lineNumber: 120,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex justify-evenly p-3 border-t\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    onClick: function() {\n                        return filepickerRef.current.click();\n                    },\n                    className: \"inputIcon\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.CameraIcon, {\n                            className: \"h-7 text-blue-400\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                            lineNumber: 130,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"text-xs sm:text-sm xl:test-base\",\n                            children: \"Attach Photo to Post\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                            lineNumber: 131,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            ref: filepickerRef,\n                            onChange: addImageToPost,\n                            type: \"file\",\n                            hidden: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                            lineNumber: 132,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                    lineNumber: 129,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                lineNumber: 128,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n        lineNumber: 107,\n        columnNumber: 9\n    }, this));\n}\n_s(InputBox, \"d1U6ZFjexBtWh1sFcUoiXGbjBr8=\");\n_c = InputBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputBox);\nvar _c;\n$RefreshReg$(_c, \"InputBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Tzs7Ozs7Ozs7Ozs7OztvQkFHdkMvQyxXQUFXO3dCQUNIK0MsT0FBTyxFQUFFeEIsV0FBVzt3QkFBRWlCLFNBQVMsRUFBQyxDQUV0Qjs7O2dDQUNOQSxTQUFTLEVBQUMsQ0FBTTtnQ0FBQ1MsR0FBRyxFQUFFakQsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS2pEdUMsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQWtDOztvQkFDeENPLE9BQU8sRUFBRSxRQUFRO3dCQUFGaEQsTUFBTSxDQUFOQSxhQUFhLENBQUNjOztvQkFBaUIyQixTQUFTLEVBQUMsQ0FBVzs7OzRCQUM1REEsU0FBUyxFQUFDLENBQW1COzs7Ozs7OENBQ3hDVSxDQUFDOzRCQUFDVjs7Ozs7Ozs4Q0FDRkUsQ0FBSzs7NEJBQXFCVSxRQUFRLEVBQUV0Qjs0QkFBZ0JhOzRCQUFZRyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt2RixDQUFDO0dBMUhRckQsUUFBUTtLQUFSQSxRQUFRO0FBNEhqQixNQUFNLFNBQVNBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dEJveC5qcz8zYWY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsdXNDaXJjbGVJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5pbXBvcnQge0NhbWVyYUljb24sIFVzZXJBZGRJY29ufSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJztcclxuaW1wb3J0IHtkb2MsICBjb2xsZWN0aW9uLCBzZXREb2MsIGFkZERvYywgZ2V0RG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtnZXRBdXRofSBmcm9tICdmaXJlYmFzZS9hdXRoJztcclxuaW1wb3J0IHtkYn0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlLCBzZXJ2ZXJUaW1lc3RhbXB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuXHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuaW1wb3J0IFwiLi4vZmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgZ2V0U3RvcmFnZSwgcmVmLCBnZXREb3dubG9hZFVSTCwgdXBsb2FkQnl0ZXNSZXN1bWFibGUsIHVwbG9hZFN0cmluZywgVXBsb2FkVGFza30gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5cclxuZnVuY3Rpb24gSW5wdXRCb3goKSB7XHJcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gICAgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoKTtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKCk7XHJcbiAgICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcclxuICAgIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgZmlsZXBpY2tlclJlZiA9IHVzZVJlZihudWxsKTsgXHJcbiAgICBjb25zdCBbaW1hZ2VUb1Bvc3QsIHNldEltYWdlVG9Qb3N0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUodXNlciAmJiAodXNlci5kaXNwbGF5TmFtZSkpO1xyXG4gICAgICAgIFxyXG4gICAgY29uc3Qgc2V0UGFnZVVzZXJuYW1lID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRvY1JlZiA9IGRvYyhkYiwgXCJVc2Vyc1wiLCB1c2VyLnVpZCk7XHJcbiAgICAgICAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGdldERvYyhkb2NSZWYpO1xyXG4gICAgICAgIHNldFVzZXJuYW1lKGRvY1NuYXAuZGF0YSgpLnVzZXJuYW1lKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRQYWdlVXNlcm5hbWUoKVxyXG5cclxuICAgIGNvbnN0IHNlbmRQb3N0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlucHV0UmVmLmN1cnJlbnQudmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhdXRoLmN1cnJlbnRVc2VyO1xyXG4gICAgICAgIGFkZERvYyhjb2xsZWN0aW9uKGRiLCAnUG9zdHMnKSwge1xyXG4gICAgICAgICAgICBjb250ZW50OiBpbnB1dFJlZi5jdXJyZW50LnZhbHVlLFxyXG4gICAgICAgICAgICB1aWQ6IHVzZXIudWlkLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlci5kaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgdGltZXN0YW1wOiBzZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSkudGhlbiggZG9jID0+e1xyXG4gICAgICAgICAgICBpZihpbWFnZVRvUG9zdCl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdG9yYWdlUmVmID0gcmVmKHN0b3JhZ2UsIGBQb3N0cy8ke2RvYy5pZH1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwbG9hZFRhc2sgPSB1cGxvYWRTdHJpbmcoc3RvcmFnZVJlZiwgaW1hZ2VUb1Bvc3QsICdkYXRhX3VybCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlbW92ZUltYWdlKCk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdXBsb2FkVGFzay5vbignc3RhdGVfY2hhbmdlZCcsIG51bGwsIChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1doZW4gdGhlIHVwbG9hZCBjb21wbGV0ZXNcclxuICAgICAgICAgICAgICAgICAgICBnZXREb3dubG9hZFVSTChyZWYodXBsb2FkVGFzay5zbmFwc2hvdC5yZWYpKS50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RG9jKGRvYyhkYiwgXCJQb3N0c1wiLCBkb2MuaWQpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0SW1hZ2U6IHVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7bWVyZ2U6IHRydWV9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0UmVmLmN1cnJlbnQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qVXBsb2FkIEltYWdlIHRvIEZpbGVcclxuICAgICAgICBcclxuICAgICAgICAudGhlbiggZG9jID0+e1xyXG4gICAgICAgICAgICBpZihpbWFnZVRvUG9zdCl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGxvYWRUYXNrID0gcmVmKHN0b3JhZ2UsIGBQb3N0cy8ke2RvYy5pZH1gKTtcclxuICAgICAgICAgICAgICAgIHVwbG9hZFN0cmluZyh1cGxvYWRUYXNrLCBpbWFnZVRvUG9zdCwgJ2RhdGFfdXJsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlSW1hZ2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB1cGxvYWRUYXNrLm9uKCdzdGF0ZV9jaGFuZ2VkJywgbnVsbCwgKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vV2hlbiB0aGUgdXBsb2FkIGNvbXBsZXRlc1xyXG4gICAgICAgICAgICAgICAgICAgIGdldERvd25sb2FkVVJMKHJlZihzdG9yYWdlLCBgUG9zdHMvJHtkb2MuaWR9YCkpLnRoZW4odXJsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RG9jKGNvbGxlY3Rpb24oZGIsJ1Bvc3RzJyksIGRvYy5pZCkuc2V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RJbWFnZTogdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHttZXJnZTogdHJ1ZX0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXRSZWYuY3VycmVudC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfSk7Ki9cclxuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LnZhbHVlPVwiXCI7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFkZEltYWdlVG9Qb3N0ID0gKGUpPT57XHJcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICBpZiAoZS50YXJnZXQuZmlsZXNbMF0pIHtcclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChyZWFkZXJFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJbWFnZVRvUG9zdChyZWFkZXJFdmVudC50YXJnZXQucmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlbW92ZUltYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEltYWdlVG9Qb3N0KG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtMiByb3VuZGVkLTJ4bCBzaGFkb3ctbWQgdGV4dC1ncmV5LTUwMCBmb250LW1lZGl1bVxyXG4gICAgICAgIG10LTZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNCBwLTQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8UGx1c0NpcmNsZUljb24gY2xhc3NOYW1lPVwiaC02IHRleHQtYmx1ZS02MDAgcm91bmRlZC1mdWxsXCIvPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj17YFdoYXQncyBvbiB5b3VyIG1pbmQgJHt1c2VybmFtZX0/YH1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBoLTEyIGJnLWJsdWUtMTAwIGZsZXgtZ3JvdyBweC01IFxyXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzOm91dGxpbmUtbm9uZVwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaGlkZGVuIG9uQ2xpY2s9e3NlbmRQb3N0fT5Qb3N0PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAge2ltYWdlVG9Qb3N0ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3JlbW92ZUltYWdlfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGZpbHRlciBcclxuICAgICAgICAgICAgICAgICAgICBob3ZlcjpicmlnaHRuZXNzLTExMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTEwXCIgc3JjPXtpbWFnZVRvUG9zdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcmVkLTUwMCB0ZXh0LWNlbnRlclwiPlJlbW92ZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1ldmVubHkgcC0zIGJvcmRlci10XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGZpbGVwaWNrZXJSZWYuY3VycmVudC5jbGljaygpfSBjbGFzc05hbWU9XCJpbnB1dEljb25cIj5cclxuICAgICAgICAgICAgICAgIDxDYW1lcmFJY29uIGNsYXNzTmFtZT1cImgtNyB0ZXh0LWJsdWUtNDAwXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgc206dGV4dC1zbSB4bDp0ZXN0LWJhc2VcIj5BdHRhY2ggUGhvdG8gdG8gUG9zdDwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9e2ZpbGVwaWNrZXJSZWZ9IG9uQ2hhbmdlPXthZGRJbWFnZVRvUG9zdH0gdHlwZT1cImZpbGVcIiBoaWRkZW4+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRCb3giXSwibmFtZXMiOlsiUGx1c0NpcmNsZUljb24iLCJDYW1lcmFJY29uIiwiVXNlckFkZEljb24iLCJkb2MiLCJjb2xsZWN0aW9uIiwic2V0RG9jIiwiYWRkRG9jIiwiZ2V0RG9jIiwiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImdldEF1dGgiLCJkYiIsImdldEZpcmVzdG9yZSIsInNlcnZlclRpbWVzdGFtcCIsImdldFN0b3JhZ2UiLCJyZWYiLCJnZXREb3dubG9hZFVSTCIsInVwbG9hZEJ5dGVzUmVzdW1hYmxlIiwidXBsb2FkU3RyaW5nIiwiVXBsb2FkVGFzayIsImZpcmViYXNlIiwiSW5wdXRCb3giLCJhdXRoIiwic3RvcmFnZSIsInVzZXIiLCJjdXJyZW50VXNlciIsImlucHV0UmVmIiwiZmlsZXBpY2tlclJlZiIsImltYWdlVG9Qb3N0Iiwic2V0SW1hZ2VUb1Bvc3QiLCJkaXNwbGF5TmFtZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJzZXRQYWdlVXNlcm5hbWUiLCJkb2NSZWYiLCJkb2NTbmFwIiwidWlkIiwiZGF0YSIsInNlbmRQb3N0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImNvbnRlbnQiLCJ0aW1lc3RhbXAiLCJ0aGVuIiwic3RvcmFnZVJlZiIsImlkIiwidXBsb2FkVGFzayIsInJlbW92ZUltYWdlIiwib24iLCJlcnJvciIsInNuYXBzaG90IiwidXJsIiwicG9zdEltYWdlIiwibWVyZ2UiLCJhZGRJbWFnZVRvUG9zdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJ0YXJnZXQiLCJmaWxlcyIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJyZWFkZXJFdmVudCIsInJlc3VsdCIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsImhpZGRlbiIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJwIiwiY2xpY2siLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/InputBox.js\n");

/***/ })

});