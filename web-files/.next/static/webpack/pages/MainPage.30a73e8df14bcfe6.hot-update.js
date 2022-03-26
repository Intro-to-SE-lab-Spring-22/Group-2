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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\n/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Send */ \"./node_modules/@material-ui/icons/Send.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction InputBox() {\n    _s();\n    var auth1 = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)();\n    var db1 = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)();\n    var storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.getStorage)();\n    var user1 = auth1.currentUser;\n    var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    var filepickerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), imageToPost = ref2[0], setImageToPost = ref2[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(user1 && user1.displayName), username = ref1[0], setUsername = ref1[1];\n    var setPageUsername = function() {\n        var _ref = _asyncToGenerator(C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var docRef, docSnap;\n            return C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db1, \"Users\", user1.uid);\n                        _ctx.next = 3;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)(docRef);\n                    case 3:\n                        docSnap = _ctx.sent;\n                        setUsername(docSnap.data().username);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function setPageUsername() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    setPageUsername();\n    var sendPost = function(e) {\n        e.preventDefault();\n        if (!inputRef.current.value) {\n            console.log(\"something went wrong\");\n            return;\n        }\n        ;\n        var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)();\n        var user = auth.currentUser;\n        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(db1, 'Posts'), {\n            content: inputRef.current.value,\n            uid: user.uid,\n            username: user.displayName,\n            timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.serverTimestamp)()\n        }).then(function(doc2) {\n            if (imageToPost) {\n                var storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.ref)(storage, \"Posts/\".concat(doc2.id));\n                var uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.uploadString)(storageRef, imageToPost, 'data_url');\n                removeImage();\n                uploadTask.then(function(snapshot) {\n                    (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.getDownloadURL)(snapshot.ref).then(function(url) {\n                        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db1, \"Posts\", doc2.id), {\n                            postImage: url\n                        }, {\n                            merge: true\n                        });\n                    });\n                });\n            /*\r\n                const uploadTask = uploadBytesResumable (storageRef, imageToPost, 'data_url');\r\n\r\n                removeImage();\r\n               \r\n                uploadTask.on('state_changed', null, (error) => console.error(error), () => {\r\n                    //When the upload completes\r\n                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {\r\n                        setDoc(doc(db, \"Posts\", doc2.id), {\r\n                            postImage: url\r\n                        }, {merge: true})\r\n                    })\r\n                })\r\n\r\n                */ }\n            inputRef.current.value = \"\";\n        });\n        /*Upload Image to File\r\n        \r\n        .then( doc =>{\r\n            if(imageToPost){\r\n                const uploadTask = ref(storage, `Posts/${doc.id}`);\r\n                uploadString(uploadTask, imageToPost, 'data_url');\r\n\r\n                removeImage();\r\n\r\n                uploadTask.on('state_changed', null, (error) => console.error(error), () => {\r\n                    //When the upload completes\r\n                    getDownloadURL(ref(storage, `Posts/${doc.id}`)).then(url => {\r\n                        getDoc(collection(db,'Posts'), doc.id).set({\r\n                            postImage: url\r\n                        }, {merge: true})\r\n                    })\r\n                })\r\n            }\r\n            inputRef.current.value = \"\";\r\n        });*/ inputRef.current.value = \"\";\n    };\n    var addImageToPost = function(e) {\n        var reader = new FileReader();\n        if (e.target.files[0]) {\n            reader.readAsDataURL(e.target.files[0]);\n        }\n        reader.onload = function(readerEvent) {\n            setImageToPost(readerEvent.target.result);\n        };\n    };\n    var removeImage = function() {\n        setImageToPost(null);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"bg-white p-2 rounded-2xl shadow-md text-grey-500 font-medium mt-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex space-x-4 p-4 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                        className: \"flex flex-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                                type: \"text\",\n                                placeholder: \"What's on your mind \".concat(username, \"?\"),\n                                ref: inputRef,\n                                className: \"overflow-hidden rounded-full h-12 bg-blue-100 flex-grow px-5 focus:outline-none\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                                lineNumber: 129,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                className: \"pl-3\",\n                                type: \"submit\",\n                                onClick: sendPost,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    className: \"h-6 text-blue-600 rounded-full\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                                    lineNumber: 135,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                                lineNumber: 134,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                        lineNumber: 128,\n                        columnNumber: 17\n                    }, this),\n                    imageToPost && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        onClick: removeImage,\n                        className: \"flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                className: \"h-10\",\n                                src: imageToPost\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                                lineNumber: 145,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"text-xs text-red-500 text-center\",\n                                children: \"Remove\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                                lineNumber: 146,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                        lineNumber: 142,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                lineNumber: 126,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex justify-evenly p-3 border-t\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    onClick: function() {\n                        return filepickerRef.current.click();\n                    },\n                    className: \"inputIcon\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.CameraIcon, {\n                            className: \"h-7 text-blue-400\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                            lineNumber: 153,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"text-xs sm:text-sm xl:test-base\",\n                            children: \"Attach Photo to Post\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                            lineNumber: 154,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            ref: filepickerRef,\n                            onChange: addImageToPost,\n                            type: \"file\",\n                            hidden: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                            lineNumber: 155,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                    lineNumber: 152,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n                lineNumber: 151,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n        lineNumber: 124,\n        columnNumber: 9\n    }, this));\n}\n_s(InputBox, \"d1U6ZFjexBtWh1sFcUoiXGbjBr8=\");\n_c = InputBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputBox);\nvar _c;\n$RefreshReg$(_c, \"InputBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FFdEI7OztnQ0FDTkEsU0FBUyxFQUFDLENBQU07Z0NBQUNRLEdBQUcsRUFBRS9DOzs7Ozs7a0RBQzFCZ0Q7Z0NBQUVULFNBQVMsRUFBQyxDQUFrQzswQ0FBQyxDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUs3REEsU0FBUyxFQUFDLENBQWtDOztvQkFDeENNLE9BQU8sRUFBRSxRQUFRO3dCQUFGOUMsTUFBTSxDQUFOQTs7b0JBQStCd0MsU0FBUyxFQUFDLENBQVc7OzhDQUN2RXBFOzRCQUFXb0UsU0FBUyxFQUFDLENBQW1COzs7Ozs7OENBQ3hDUyxDQUFDOzRCQUFDVCxTQUFTLEVBQUMsQ0FBaUM7c0NBQUMsQ0FBb0I7Ozs7Ozs4Q0FDbEVXLENBQUs7NEJBQUNoRSxHQUFHLEVBQUVhOzRCQUFlb0QsUUFBUSxFQUFFdEI7NEJBQWdCYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JFLENBQUM7R0EvSVFqRCxRQUFRO0tBQVJBLFFBQVE7QUFpSmpCLE1BQU0sU0FBU0EsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0lucHV0Qm94LmpzPzNhZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGx1c0NpcmNsZUljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcbmltcG9ydCB7Q2FtZXJhSWNvbiwgVXNlckFkZEljb259IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnO1xyXG5pbXBvcnQge2RvYywgIGNvbGxlY3Rpb24sIHNldERvYywgYWRkRG9jLCBnZXREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2dldEF1dGh9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xyXG5pbXBvcnQge2RifSBmcm9tICcuLi9maXJlYmFzZSc7XHJcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUsIHNlcnZlclRpbWVzdGFtcH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5cclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBnZXRTdG9yYWdlLCByZWYsIGdldERvd25sb2FkVVJMLCB1cGxvYWRCeXRlc1Jlc3VtYWJsZSwgdXBsb2FkU3RyaW5nLCBVcGxvYWRUYXNrfSBmcm9tIFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCBTZW5kSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VuZCc7XHJcblxyXG5cclxuZnVuY3Rpb24gSW5wdXRCb3goKSB7XHJcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gICAgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoKTtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKCk7XHJcbiAgICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcclxuICAgIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgZmlsZXBpY2tlclJlZiA9IHVzZVJlZihudWxsKTsgXHJcbiAgICBjb25zdCBbaW1hZ2VUb1Bvc3QsIHNldEltYWdlVG9Qb3N0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUodXNlciAmJiAodXNlci5kaXNwbGF5TmFtZSkpO1xyXG4gICAgICAgIFxyXG4gICAgY29uc3Qgc2V0UGFnZVVzZXJuYW1lID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRvY1JlZiA9IGRvYyhkYiwgXCJVc2Vyc1wiLCB1c2VyLnVpZCk7XHJcbiAgICAgICAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGdldERvYyhkb2NSZWYpO1xyXG4gICAgICAgIHNldFVzZXJuYW1lKGRvY1NuYXAuZGF0YSgpLnVzZXJuYW1lKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRQYWdlVXNlcm5hbWUoKVxyXG5cclxuICAgIGNvbnN0IHNlbmRQb3N0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlucHV0UmVmLmN1cnJlbnQudmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhdXRoLmN1cnJlbnRVc2VyO1xyXG4gICAgICAgIGFkZERvYyhjb2xsZWN0aW9uKGRiLCAnUG9zdHMnKSwge1xyXG4gICAgICAgICAgICBjb250ZW50OiBpbnB1dFJlZi5jdXJyZW50LnZhbHVlLFxyXG4gICAgICAgICAgICB1aWQ6IHVzZXIudWlkLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlci5kaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgdGltZXN0YW1wOiBzZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSkudGhlbiggZG9jMiA9PntcclxuICAgICAgICAgICAgaWYoaW1hZ2VUb1Bvc3Qpe1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcmFnZVJlZiA9IHJlZihzdG9yYWdlLCBgUG9zdHMvJHtkb2MyLmlkfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBsb2FkVGFzayA9IHVwbG9hZFN0cmluZyhzdG9yYWdlUmVmLCBpbWFnZVRvUG9zdCwgJ2RhdGFfdXJsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB1cGxvYWRUYXNrLnRoZW4oKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0RG93bmxvYWRVUkwoc25hcHNob3QucmVmKS50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RG9jKGRvYyhkYiwgXCJQb3N0c1wiLCBkb2MyLmlkKSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdEltYWdlOiB1cmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge21lcmdlOiB0cnVlfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGxvYWRUYXNrID0gdXBsb2FkQnl0ZXNSZXN1bWFibGUgKHN0b3JhZ2VSZWYsIGltYWdlVG9Qb3N0LCAnZGF0YV91cmwnKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZW1vdmVJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHVwbG9hZFRhc2sub24oJ3N0YXRlX2NoYW5nZWQnLCBudWxsLCAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9XaGVuIHRoZSB1cGxvYWQgY29tcGxldGVzXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0RG93bmxvYWRVUkwodXBsb2FkVGFzay5zbmFwc2hvdC5yZWYpLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREb2MoZG9jKGRiLCBcIlBvc3RzXCIsIGRvYzIuaWQpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0SW1hZ2U6IHVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7bWVyZ2U6IHRydWV9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXRSZWYuY3VycmVudC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLypVcGxvYWQgSW1hZ2UgdG8gRmlsZVxyXG4gICAgICAgIFxyXG4gICAgICAgIC50aGVuKCBkb2MgPT57XHJcbiAgICAgICAgICAgIGlmKGltYWdlVG9Qb3N0KXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwbG9hZFRhc2sgPSByZWYoc3RvcmFnZSwgYFBvc3RzLyR7ZG9jLmlkfWApO1xyXG4gICAgICAgICAgICAgICAgdXBsb2FkU3RyaW5nKHVwbG9hZFRhc2ssIGltYWdlVG9Qb3N0LCAnZGF0YV91cmwnKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZW1vdmVJbWFnZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHVwbG9hZFRhc2sub24oJ3N0YXRlX2NoYW5nZWQnLCBudWxsLCAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9XaGVuIHRoZSB1cGxvYWQgY29tcGxldGVzXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0RG93bmxvYWRVUkwocmVmKHN0b3JhZ2UsIGBQb3N0cy8ke2RvYy5pZH1gKSkudGhlbih1cmwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXREb2MoY29sbGVjdGlvbihkYiwnUG9zdHMnKSwgZG9jLmlkKS5zZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdEltYWdlOiB1cmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge21lcmdlOiB0cnVlfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dFJlZi5jdXJyZW50LnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9KTsqL1xyXG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQudmFsdWU9XCJcIjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWRkSW1hZ2VUb1Bvc3QgPSAoZSk9PntcclxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5maWxlc1swXSkge1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZWFkZXIub25sb2FkID0gKHJlYWRlckV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHNldEltYWdlVG9Qb3N0KHJlYWRlckV2ZW50LnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlSW1hZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SW1hZ2VUb1Bvc3QobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC0yIHJvdW5kZWQtMnhsIHNoYWRvdy1tZCB0ZXh0LWdyZXktNTAwIGZvbnQtbWVkaXVtXHJcbiAgICAgICAgbXQtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00IHAtNCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICB7LyogIDxQbHVzQ2lyY2xlSWNvbiBjbGFzc05hbWU9XCJoLTYgdGV4dC1ibHVlLTYwMCByb3VuZGVkLWZ1bGxcIi8+ICovfVxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj17YFdoYXQncyBvbiB5b3VyIG1pbmQgJHt1c2VybmFtZX0/YH1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWZ1bGwgaC0xMiBiZy1ibHVlLTEwMCBmbGV4LWdyb3cgcHgtNSBcclxuICAgICAgICAgICAgICAgICAgICBmb2N1czpvdXRsaW5lLW5vbmVcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lID0gXCJwbC0zXCIgdHlwZT1cInN1Ym1pdFwiICBvbkNsaWNrPXtzZW5kUG9zdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZW5kSWNvbiBjbGFzc05hbWU9XCJoLTYgdGV4dC1ibHVlLTYwMCByb3VuZGVkLWZ1bGxcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VUb1Bvc3QgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17cmVtb3ZlSW1hZ2V9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZmlsdGVyIFxyXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyOmJyaWdodG5lc3MtMTEwIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImgtMTBcIiBzcmM9e2ltYWdlVG9Qb3N0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwIHRleHQtY2VudGVyXCI+UmVtb3ZlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZXZlbmx5IHAtMyBib3JkZXItdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBmaWxlcGlja2VyUmVmLmN1cnJlbnQuY2xpY2soKX0gY2xhc3NOYW1lPVwiaW5wdXRJY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FtZXJhSWNvbiBjbGFzc05hbWU9XCJoLTcgdGV4dC1ibHVlLTQwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNtOnRleHQtc20geGw6dGVzdC1iYXNlXCI+QXR0YWNoIFBob3RvIHRvIFBvc3Q8L3A+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPXtmaWxlcGlja2VyUmVmfSBvbkNoYW5nZT17YWRkSW1hZ2VUb1Bvc3R9IHR5cGU9XCJmaWxlXCIgaGlkZGVuPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0Qm94Il0sIm5hbWVzIjpbIlBsdXNDaXJjbGVJY29uIiwiQ2FtZXJhSWNvbiIsIlVzZXJBZGRJY29uIiwiZG9jIiwiY29sbGVjdGlvbiIsInNldERvYyIsImFkZERvYyIsImdldERvYyIsIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJnZXRBdXRoIiwiZGIiLCJnZXRGaXJlc3RvcmUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJnZXRTdG9yYWdlIiwicmVmIiwiZ2V0RG93bmxvYWRVUkwiLCJ1cGxvYWRCeXRlc1Jlc3VtYWJsZSIsInVwbG9hZFN0cmluZyIsIlVwbG9hZFRhc2siLCJmaXJlYmFzZSIsIlNlbmRJY29uIiwiSW5wdXRCb3giLCJhdXRoIiwic3RvcmFnZSIsInVzZXIiLCJjdXJyZW50VXNlciIsImlucHV0UmVmIiwiZmlsZXBpY2tlclJlZiIsImltYWdlVG9Qb3N0Iiwic2V0SW1hZ2VUb1Bvc3QiLCJkaXNwbGF5TmFtZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJzZXRQYWdlVXNlcm5hbWUiLCJkb2NSZWYiLCJkb2NTbmFwIiwidWlkIiwiZGF0YSIsInNlbmRQb3N0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImNvbnRlbnQiLCJ0aW1lc3RhbXAiLCJ0aGVuIiwiZG9jMiIsInN0b3JhZ2VSZWYiLCJpZCIsInVwbG9hZFRhc2siLCJyZW1vdmVJbWFnZSIsInNuYXBzaG90IiwidXJsIiwicG9zdEltYWdlIiwibWVyZ2UiLCJhZGRJbWFnZVRvUG9zdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJ0YXJnZXQiLCJmaWxlcyIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJyZWFkZXJFdmVudCIsInJlc3VsdCIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJ0ZXh0YXJlYSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJwIiwiY2xpY2siLCJpbnB1dCIsIm9uQ2hhbmdlIiwiaGlkZGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/InputBox.js\n");

/***/ })

});