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

/***/ "./components/InputBox.js":
/*!********************************!*\
  !*** ./components/InputBox.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\n/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Send */ \"./node_modules/@material-ui/icons/Send.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\InputBox.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction InputBox() {\n  _s();\n\n  // Creates the variables and states for the input box \n  var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)();\n  var db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)();\n  var storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.getStorage)();\n  var user = auth.currentUser;\n  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n  var filepickerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      imageToPost = _useState[0],\n      setImageToPost = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(user && user.displayName),\n      username = _useState2[0],\n      setUsername = _useState2[1];\n\n  var setPageUsername = /*#__PURE__*/function () {\n    var _ref = (0,C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var docRef, docSnap;\n      return C_Users_kruna_OneDrive_Desktop_Group2WebFiles_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db, \"Users\", user.uid);\n              _context.next = 3;\n              return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)(docRef);\n\n            case 3:\n              docSnap = _context.sent;\n              setUsername(docSnap.data().username);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function setPageUsername() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  setPageUsername();\n\n  var sendPost = function sendPost(e) {\n    e.preventDefault();\n\n    if (!inputRef.current.value) {\n      console.log(\"something went wrong\");\n      return;\n    }\n\n    ;\n    var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)();\n    var user = auth.currentUser;\n    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(db, 'Posts'), {\n      content: inputRef.current.value,\n      uid: user.uid,\n      username: user.displayName,\n      timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.serverTimestamp)(),\n      likes: 0\n    }).then(function (doc2) {\n      var storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.ref)(storage, \"Posts/\".concat(doc2.id));\n      (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db, \"Posts\", doc2.id), {\n        doc_id: doc2.id\n      }, {\n        merge: true\n      });\n\n      if (imageToPost) {\n        var _storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.ref)(storage, \"Posts/\".concat(doc2.id));\n\n        var uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.uploadString)(_storageRef, imageToPost, 'data_url');\n        removeImage();\n        uploadTask.then(function (snapshot) {\n          (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.getDownloadURL)(snapshot.ref).then(function (url) {\n            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db, \"Posts\", doc2.id), {\n              postImage: url\n            }, {\n              merge: true\n            });\n          });\n        });\n        /*\r\n         const uploadTask = uploadBytesResumable (storageRef, imageToPost, 'data_url');\r\n           removeImage();\r\n        \r\n         uploadTask.on('state_changed', null, (error) => console.error(error), () => {\r\n             //When the upload completes\r\n             getDownloadURL(uploadTask.snapshot.ref).then((url) => {\r\n                 setDoc(doc(db, \"Posts\", doc2.id), {\r\n                     postImage: url\r\n                 }, {merge: true})\r\n             })\r\n         })\r\n           */\n      }\n\n      inputRef.current.value = \"\";\n    });\n    /*Upload Image to File\r\n    \r\n    .then( doc =>{\r\n        if(imageToPost){\r\n            const uploadTask = ref(storage, `Posts/${doc.id}`);\r\n            uploadString(uploadTask, imageToPost, 'data_url');\r\n              removeImage();\r\n              uploadTask.on('state_changed', null, (error) => console.error(error), () => {\r\n                //When the upload completes\r\n                getDownloadURL(ref(storage, `Posts/${doc.id}`)).then(url => {\r\n                    getDoc(collection(db,'Posts'), doc.id).set({\r\n                        postImage: url\r\n                    }, {merge: true})\r\n                })\r\n            })\r\n        }\r\n        inputRef.current.value = \"\";\r\n    });*/\n\n    inputRef.current.value = \"\";\n  };\n\n  var addImageToPost = function addImageToPost(e) {\n    var reader = new FileReader();\n\n    if (e.target.files[0]) {\n      reader.readAsDataURL(e.target.files[0]);\n    }\n\n    reader.onload = function (readerEvent) {\n      setImageToPost(readerEvent.target.result);\n    };\n  };\n\n  var removeImage = function removeImage() {\n    setImageToPost(null);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n    className: \"bg-white p-2 rounded-2xl shadow-md text-grey-500 font-medium\\r mt-6\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: \"flex space-x-4 p-4 items-center\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"form\", {\n        className: \"flex flex-1\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"input\", {\n          type: \"text\",\n          placeholder: \"What's on your mind \".concat(username, \"?\"),\n          ref: inputRef,\n          className: \"rounded-full h-12 bg-blue-100 flex-grow px-5 \\r focus:outline-none\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 137,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"button\", {\n          className: \"pl-4\",\n          type: \"submit\",\n          onClick: sendPost,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            className: \"h-6 text-blue-400 rounded-full\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 143,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 142,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 13\n    }, this), imageToPost && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      onClick: removeImage,\n      className: \"py-2 flex items-center  flex-col filter \\r hover:brightness-110 transition duration-150 transform hover:scale-105\\r cursor-pointer\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"img\", {\n        className: \"h-10\",\n        src: imageToPost\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 156,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"p\", {\n        className: \"text-xs text-red-500 text-center\",\n        children: \"Remove\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 157,\n        columnNumber: 21\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 17\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: \"flex justify-evenly p-3 border-t\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        onClick: function onClick() {\n          return filepickerRef.current.click();\n        },\n        className: \"inputIcon\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_10__.CameraIcon, {\n          className: \"pr-1 h-7 text-blue-400\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 162,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"p\", {\n          className: \"text-xs sm:text-sm xl:test-base\",\n          children: \"Attach Photo to Post\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 163,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"input\", {\n          ref: filepickerRef,\n          onChange: addImageToPost,\n          type: \"file\",\n          hidden: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 164,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 161,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 132,\n    columnNumber: 9\n  }, this);\n}\n\n_s(InputBox, \"pEmHtlnvOak+d9N0cVyUSdFJaLA=\");\n\n_c = InputBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputBox);\n\nvar _c;\n\n$RefreshReg$(_c, \"InputBox\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SEosZUFJSTtBQUFHLGlCQUFTLEVBQUMsa0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQlIsZUE0Qkk7QUFBSyxlQUFTLEVBQUMsa0NBQWY7QUFBQSw2QkFDSTtBQUFLLGVBQU8sRUFBRTtBQUFBLGlCQUFNRCxhQUFhLENBQUNjLE9BQWQsQ0FBc0IyQixLQUF0QixFQUFOO0FBQUEsU0FBZDtBQUFtRCxpQkFBUyxFQUFDLFdBQTdEO0FBQUEsZ0NBQ0EsOERBQUMsK0RBQUQ7QUFBWSxtQkFBUyxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsZUFFQTtBQUFHLG1CQUFTLEVBQUMsaUNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkEsZUFHQTtBQUFPLGFBQUcsRUFBRXpDLGFBQVo7QUFBMkIsa0JBQVEsRUFBRWdDLGNBQXJDO0FBQXFELGNBQUksRUFBQyxNQUExRDtBQUFpRSxnQkFBTTtBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFzQ0g7O0dBeEpRdEM7O0tBQUFBO0FBMEpULCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSW5wdXRCb3guanM/M2FmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbHVzQ2lyY2xlSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0IHtDYW1lcmFJY29uLCBVc2VyQWRkSWNvbn0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCc7XHJcbmltcG9ydCB7ZG9jLCAgY29sbGVjdGlvbiwgc2V0RG9jLCBhZGREb2MsIGdldERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Z2V0QXV0aH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XHJcbmltcG9ydCB7ZGJ9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuaW1wb3J0IFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSwgc2VydmVyVGltZXN0YW1wfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcblxyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbmltcG9ydCBcIi4uL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IGdldFN0b3JhZ2UsIHJlZiwgZ2V0RG93bmxvYWRVUkwsIHVwbG9hZEJ5dGVzUmVzdW1hYmxlLCB1cGxvYWRTdHJpbmcsIFVwbG9hZFRhc2t9IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IFNlbmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZW5kJztcclxuXHJcblxyXG5mdW5jdGlvbiBJbnB1dEJveCgpIHtcclxuXHJcbiAgICAvLyBDcmVhdGVzIHRoZSB2YXJpYWJsZXMgYW5kIHN0YXRlcyBmb3IgdGhlIGlucHV0IGJveCBcclxuICAgIFxyXG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuICAgIGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKCk7XHJcbiAgICBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZSgpO1xyXG4gICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXI7XHJcbiAgICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IGZpbGVwaWNrZXJSZWYgPSB1c2VSZWYobnVsbCk7IFxyXG4gICAgY29uc3QgW2ltYWdlVG9Qb3N0LCBzZXRJbWFnZVRvUG9zdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKHVzZXIgJiYgKHVzZXIuZGlzcGxheU5hbWUpKTtcclxuICAgICAgICBcclxuICAgIGNvbnN0IHNldFBhZ2VVc2VybmFtZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBkb2NSZWYgPSBkb2MoZGIsIFwiVXNlcnNcIiwgdXNlci51aWQpO1xyXG4gICAgICAgIGNvbnN0IGRvY1NuYXAgPSBhd2FpdCBnZXREb2MoZG9jUmVmKTtcclxuICAgICAgICBzZXRVc2VybmFtZShkb2NTbmFwLmRhdGEoKS51c2VybmFtZSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0UGFnZVVzZXJuYW1lKClcclxuXHJcbiAgICBjb25zdCBzZW5kUG9zdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpbnB1dFJlZi5jdXJyZW50LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcclxuICAgICAgICBhZGREb2MoY29sbGVjdGlvbihkYiwgJ1Bvc3RzJyksIHtcclxuICAgICAgICAgICAgY29udGVudDogaW5wdXRSZWYuY3VycmVudC52YWx1ZSxcclxuICAgICAgICAgICAgdWlkOiB1c2VyLnVpZCxcclxuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXIuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgIHRpbWVzdGFtcDogc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgICAgIGxpa2VzOiAwLFxyXG4gICAgICAgIH0pLnRoZW4oIGRvYzIgPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSByZWYoc3RvcmFnZSwgYFBvc3RzLyR7ZG9jMi5pZH1gKTtcclxuICAgICAgICAgICAgc2V0RG9jKGRvYyhkYiwgXCJQb3N0c1wiLCBkb2MyLmlkKSwge1xyXG4gICAgICAgICAgICAgICAgZG9jX2lkOiBkb2MyLmlkXHJcbiAgICAgICAgICAgIH0sIHttZXJnZTogdHJ1ZX0pXHJcblxyXG4gICAgICAgICAgICBpZihpbWFnZVRvUG9zdCl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdG9yYWdlUmVmID0gcmVmKHN0b3JhZ2UsIGBQb3N0cy8ke2RvYzIuaWR9YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGxvYWRUYXNrID0gdXBsb2FkU3RyaW5nKHN0b3JhZ2VSZWYsIGltYWdlVG9Qb3N0LCAnZGF0YV91cmwnKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZW1vdmVJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHVwbG9hZFRhc2sudGhlbigoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBnZXREb3dubG9hZFVSTChzbmFwc2hvdC5yZWYpLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREb2MoZG9jKGRiLCBcIlBvc3RzXCIsIGRvYzIuaWQpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0SW1hZ2U6IHVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7bWVyZ2U6IHRydWV9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwbG9hZFRhc2sgPSB1cGxvYWRCeXRlc1Jlc3VtYWJsZSAoc3RvcmFnZVJlZiwgaW1hZ2VUb1Bvc3QsICdkYXRhX3VybCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlbW92ZUltYWdlKCk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdXBsb2FkVGFzay5vbignc3RhdGVfY2hhbmdlZCcsIG51bGwsIChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1doZW4gdGhlIHVwbG9hZCBjb21wbGV0ZXNcclxuICAgICAgICAgICAgICAgICAgICBnZXREb3dubG9hZFVSTCh1cGxvYWRUYXNrLnNuYXBzaG90LnJlZikudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERvYyhkb2MoZGIsIFwiUG9zdHNcIiwgZG9jMi5pZCksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RJbWFnZTogdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHttZXJnZTogdHJ1ZX0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dFJlZi5jdXJyZW50LnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvKlVwbG9hZCBJbWFnZSB0byBGaWxlXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnRoZW4oIGRvYyA9PntcclxuICAgICAgICAgICAgaWYoaW1hZ2VUb1Bvc3Qpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBsb2FkVGFzayA9IHJlZihzdG9yYWdlLCBgUG9zdHMvJHtkb2MuaWR9YCk7XHJcbiAgICAgICAgICAgICAgICB1cGxvYWRTdHJpbmcodXBsb2FkVGFzaywgaW1hZ2VUb1Bvc3QsICdkYXRhX3VybCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlbW92ZUltYWdlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdXBsb2FkVGFzay5vbignc3RhdGVfY2hhbmdlZCcsIG51bGwsIChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1doZW4gdGhlIHVwbG9hZCBjb21wbGV0ZXNcclxuICAgICAgICAgICAgICAgICAgICBnZXREb3dubG9hZFVSTChyZWYoc3RvcmFnZSwgYFBvc3RzLyR7ZG9jLmlkfWApKS50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldERvYyhjb2xsZWN0aW9uKGRiLCdQb3N0cycpLCBkb2MuaWQpLnNldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0SW1hZ2U6IHVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7bWVyZ2U6IHRydWV9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0UmVmLmN1cnJlbnQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH0pOyovXHJcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC52YWx1ZT1cIlwiO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhZGRJbWFnZVRvUG9zdCA9IChlKT0+e1xyXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmZpbGVzWzBdKSB7XHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAocmVhZGVyRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgc2V0SW1hZ2VUb1Bvc3QocmVhZGVyRXZlbnQudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVJbWFnZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRJbWFnZVRvUG9zdChudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTIgcm91bmRlZC0yeGwgc2hhZG93LW1kIHRleHQtZ3JleS01MDAgZm9udC1tZWRpdW1cclxuICAgICAgICBtdC02XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTQgcC00IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIHsvKiAgPFBsdXNDaXJjbGVJY29uIGNsYXNzTmFtZT1cImgtNiB0ZXh0LWJsdWUtNjAwIHJvdW5kZWQtZnVsbFwiLz4gKi99XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPXtgV2hhdCdzIG9uIHlvdXIgbWluZCAke3VzZXJuYW1lfT9gfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGgtMTIgYmctYmx1ZS0xMDAgZmxleC1ncm93IHB4LTUgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZSA9IFwicGwtNFwiIHR5cGU9XCJzdWJtaXRcIiAgb25DbGljaz17c2VuZFBvc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VuZEljb24gY2xhc3NOYW1lPVwiaC02IHRleHQtYmx1ZS00MDAgcm91bmRlZC1mdWxsXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2ltYWdlVG9Qb3N0ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17cmVtb3ZlSW1hZ2V9IGNsYXNzTmFtZT1cInB5LTIgZmxleCBpdGVtcy1jZW50ZXIgIGZsZXgtY29sIGZpbHRlciBcclxuICAgICAgICAgICAgICAgIGhvdmVyOmJyaWdodG5lc3MtMTEwIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcclxuICAgICAgICAgICAgICAgIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTEwXCIgc3JjPXtpbWFnZVRvUG9zdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwIHRleHQtY2VudGVyXCI+UmVtb3ZlPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWV2ZW5seSBwLTMgYm9yZGVyLXRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gZmlsZXBpY2tlclJlZi5jdXJyZW50LmNsaWNrKCl9IGNsYXNzTmFtZT1cImlucHV0SWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPENhbWVyYUljb24gY2xhc3NOYW1lPVwicHItMSBoLTcgdGV4dC1ibHVlLTQwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNtOnRleHQtc20geGw6dGVzdC1iYXNlXCI+QXR0YWNoIFBob3RvIHRvIFBvc3Q8L3A+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPXtmaWxlcGlja2VyUmVmfSBvbkNoYW5nZT17YWRkSW1hZ2VUb1Bvc3R9IHR5cGU9XCJmaWxlXCIgaGlkZGVuPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0Qm94Il0sIm5hbWVzIjpbIlBsdXNDaXJjbGVJY29uIiwiQ2FtZXJhSWNvbiIsIlVzZXJBZGRJY29uIiwiZG9jIiwiY29sbGVjdGlvbiIsInNldERvYyIsImFkZERvYyIsImdldERvYyIsIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJnZXRBdXRoIiwiZGIiLCJnZXRGaXJlc3RvcmUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJnZXRTdG9yYWdlIiwicmVmIiwiZ2V0RG93bmxvYWRVUkwiLCJ1cGxvYWRCeXRlc1Jlc3VtYWJsZSIsInVwbG9hZFN0cmluZyIsIlVwbG9hZFRhc2siLCJmaXJlYmFzZSIsIlNlbmRJY29uIiwiSW5wdXRCb3giLCJhdXRoIiwic3RvcmFnZSIsInVzZXIiLCJjdXJyZW50VXNlciIsImlucHV0UmVmIiwiZmlsZXBpY2tlclJlZiIsImltYWdlVG9Qb3N0Iiwic2V0SW1hZ2VUb1Bvc3QiLCJkaXNwbGF5TmFtZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJzZXRQYWdlVXNlcm5hbWUiLCJkb2NSZWYiLCJ1aWQiLCJkb2NTbmFwIiwiZGF0YSIsInNlbmRQb3N0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImNvbnRlbnQiLCJ0aW1lc3RhbXAiLCJsaWtlcyIsInRoZW4iLCJkb2MyIiwic3RvcmFnZVJlZiIsImlkIiwiZG9jX2lkIiwibWVyZ2UiLCJ1cGxvYWRUYXNrIiwicmVtb3ZlSW1hZ2UiLCJzbmFwc2hvdCIsInVybCIsInBvc3RJbWFnZSIsImFkZEltYWdlVG9Qb3N0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInRhcmdldCIsImZpbGVzIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlYWRlckV2ZW50IiwicmVzdWx0IiwiY2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/InputBox.js\n");

/***/ })

});