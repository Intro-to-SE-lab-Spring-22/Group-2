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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _InputBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputBox */ \"./components/InputBox.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Request */ \"./components/Request.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Requests(param) {\n    var posts = param.posts;\n    _s();\n    var user = _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.currentUser;\n    var target = false;\n    //let code = ``;\n    var setTarget = function(data) {\n        target = data;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(_asyncToGenerator(C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var requests;\n        return C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    requests = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"FriendRequests\", user.uid)).then(function(document) {\n                        console.log('1');\n                        setTarget(document.data());\n                        console.log(target);\n                    /*\r\n        Object.keys(targets).forEach((usertags) => {\r\n            /*\r\n            code += `<Request key_id={${usertags}} />`\r\n            console.log(usertags);\r\n            console.log(code);\r\n            */ /*\r\n           console.log(usertags);\r\n           return(\r\n            <Request key_id={usertags} />\r\n           )\r\n        })*/ //const targets = getDoc(collection(db, \"Users\"), document.data().id).then(docu => {\n                    //    console.log(docu.data())\n                    //})\n                    });\n                case 1:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })));\n    Object.keys(target).forEach(function(usertags) {\n        /*\r\n        code += `<Request key_id={${usertags}} />`\r\n        console.log(usertags);\r\n        console.log(code);\r\n        */ console.log(\"nothing\");\n        console.log(usertags);\n    });\n    //cons\n    /*\r\n    requests?.docs.map((post) => {\r\n        const targets = useCollection(query(collection(db, \"Users\"), where(documentId(), \"==\", post.id)));\r\n    });\r\n    */ /*\r\n    const requests = getDoc(doc(db, \"FriendRequests\", user.uid)).then(document => {\r\n        console.log(document.data());\r\n        let targets = document.data();\r\n        const users = useCollection(query(collection(db, \"Users\"), where(FieldPath.documentId(), 'in', targets)))\r\n    })\r\n    /*\r\n    /*\r\n    let accounts = requests.data();\r\n    accounts.forEach(username => {\r\n        console.log(element);\r\n    });\r\n\r\n    */ return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Sam\\\\Documents\\\\GitHub\\\\Group-2\\\\web-files\\\\components\\\\Requests.js\",\n        lineNumber: 75,\n        columnNumber: 9\n    }, this));\n}\n_s(Requests, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Requests;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Requests);\nvar _c;\n$RefreshReg$(_c, \"Requests\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcXVlc3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0s7QUFDd0I7QUFDZ0Q7QUFDL0U7QUFDOEI7QUFDcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FHaENpQixRQUFRLENBQUMsS0FBUyxFQUFFLENBQUM7UUFBVkMsS0FBSyxHQUFQLEtBQVMsQ0FBUEEsS0FBSzs7SUFDckIsR0FBSyxDQUFDQyxJQUFJLEdBQUdsQix1REFBZ0I7SUFDN0IsR0FBRyxDQUFDb0IsTUFBTSxHQUFHLEtBQUs7SUFDbEIsRUFBZ0I7SUFDaEIsR0FBSyxDQUFDQyxTQUFTLEdBQUcsUUFBUSxDQUFQQyxJQUFJLEVBQUssQ0FBQztRQUN6QkYsTUFBTSxHQUFHRSxJQUFJO0lBQ2pCLENBQUM7SUFDRFAsZ0RBQVMsNktBQUMsUUFBUSxXQUFJLENBQUM7WUFDakJRLFFBQVE7Ozs7b0JBQVJBLFFBQVEsR0FBR2pCLDBEQUFNLENBQUNDLHVEQUFHLENBQUNOLHlDQUFFLEVBQUUsQ0FBZ0IsaUJBQUVpQixJQUFJLENBQUNNLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxRQUFRLENBQVJBLFFBQVEsRUFBSSxDQUFDO3dCQUMzRUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBRzt3QkFDZlAsU0FBUyxDQUFDSyxRQUFRLENBQUNKLElBQUk7d0JBQ3ZCSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsTUFBTTtvQkFDbEIsRUFNTTtvQkFPTixFQUE4Qjs7b0JBRWxDLENBQUM7Ozs7OztJQUNMLENBQUM7SUFFR1MsTUFBTSxDQUFDQztRQUNILEVBSUU7UUFFSEgsT0FBTyxDQUFDQyxHQUFHLENBQUNJLFFBQVE7SUFFdkIsQ0FBQztJQUNELEVBQU07SUFHTixFQUlFOzs7OztBQXVCTixDQUFDO0dBdEVRaEIsUUFBUTtLQUFSQTtBQXdFVCxNQUFNLFNBQVNBLFFBQVEsQ0FlckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0cy5qcz9hMWM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dEJveCBmcm9tIFwiLi9JbnB1dEJveFwiXHJcbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IHVzZUNvbGxlY3Rpb24gfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7Y29sbGVjdGlvbiwgcXVlcnksIHdoZXJlLCBnZXREb2MsIGRvYywgRmllbGRQYXRoLCBkb2N1bWVudElkLCBnZXREb2NzLCBkb2NzfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBSZXF1ZXN0IGZyb20gXCIuL1JlcXVlc3RcIjtcclxuaW1wb3J0IHsgRG9jdW1lbnREb3dubG9hZEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFJlcXVlc3RzKHsgcG9zdHMgfSkge1xyXG4gICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXI7XHJcbiAgICB2YXIgdGFyZ2V0ID0gZmFsc2U7XHJcbiAgICAvL2xldCBjb2RlID0gYGA7XHJcbiAgICBjb25zdCBzZXRUYXJnZXQgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIHRhcmdldCA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdHMgPSBnZXREb2MoZG9jKGRiLCBcIkZyaWVuZFJlcXVlc3RzXCIsIHVzZXIudWlkKSkudGhlbihkb2N1bWVudCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJzEnKTtcclxuICAgICAgICBzZXRUYXJnZXQoZG9jdW1lbnQuZGF0YSgpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgT2JqZWN0LmtleXModGFyZ2V0cykuZm9yRWFjaCgodXNlcnRhZ3MpID0+IHtcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgY29kZSArPSBgPFJlcXVlc3Qga2V5X2lkPXske3VzZXJ0YWdzfX0gLz5gXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJ0YWdzKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY29kZSk7XHJcbiAgICAgICAgICAgICovLypcclxuICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VydGFncyk7XHJcbiAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8UmVxdWVzdCBrZXlfaWQ9e3VzZXJ0YWdzfSAvPlxyXG4gICAgICAgICAgIClcclxuICAgICAgICB9KSovXHJcbiAgICAgICAgLy9jb25zdCB0YXJnZXRzID0gZ2V0RG9jKGNvbGxlY3Rpb24oZGIsIFwiVXNlcnNcIiksIGRvY3VtZW50LmRhdGEoKS5pZCkudGhlbihkb2N1ID0+IHtcclxuICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhkb2N1LmRhdGEoKSlcclxuICAgICAgICAvL30pXHJcbiAgICB9KVxyXG59KVxyXG4gICBcclxuICAgIE9iamVjdC5rZXlzKHRhcmdldCkuZm9yRWFjaCgodXNlcnRhZ3MpID0+IHtcclxuICAgICAgICAvKlxyXG4gICAgICAgIGNvZGUgKz0gYDxSZXF1ZXN0IGtleV9pZD17JHt1c2VydGFnc319IC8+YFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJ0YWdzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb2RlKTtcclxuICAgICAgICAqL1xyXG4gICAgICAgY29uc29sZS5sb2coXCJub3RoaW5nXCIpO1xyXG4gICAgICAgY29uc29sZS5sb2codXNlcnRhZ3MpO1xyXG4gICAgICAgXHJcbiAgICB9KVxyXG4gICAgLy9jb25zXHJcbiAgICBcclxuICAgIFxyXG4gICAgLypcclxuICAgIHJlcXVlc3RzPy5kb2NzLm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldHMgPSB1c2VDb2xsZWN0aW9uKHF1ZXJ5KGNvbGxlY3Rpb24oZGIsIFwiVXNlcnNcIiksIHdoZXJlKGRvY3VtZW50SWQoKSwgXCI9PVwiLCBwb3N0LmlkKSkpO1xyXG4gICAgfSk7XHJcbiAgICAqL1xyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgY29uc3QgcmVxdWVzdHMgPSBnZXREb2MoZG9jKGRiLCBcIkZyaWVuZFJlcXVlc3RzXCIsIHVzZXIudWlkKSkudGhlbihkb2N1bWVudCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuZGF0YSgpKTtcclxuICAgICAgICBsZXQgdGFyZ2V0cyA9IGRvY3VtZW50LmRhdGEoKTtcclxuICAgICAgICBjb25zdCB1c2VycyA9IHVzZUNvbGxlY3Rpb24ocXVlcnkoY29sbGVjdGlvbihkYiwgXCJVc2Vyc1wiKSwgd2hlcmUoRmllbGRQYXRoLmRvY3VtZW50SWQoKSwgJ2luJywgdGFyZ2V0cykpKVxyXG4gICAgfSlcclxuICAgIC8qXHJcbiAgICAvKlxyXG4gICAgbGV0IGFjY291bnRzID0gcmVxdWVzdHMuZGF0YSgpO1xyXG4gICAgYWNjb3VudHMuZm9yRWFjaCh1c2VybmFtZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAqL1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0c1xyXG5cclxuXHJcblxyXG4vKlxyXG48ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyAgcGItNDQgcHQtNiBtci00XHJcbiAgICAgICAgeGw6bXItNDAgb3ZlcmZsb3cteS1hdXRvIFwiPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBteC1hdXRvIG1heC13LW1kIG1kOm1heC13LWxnIGxnOm1heC13LTJ4bCBcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPkFjY2VwdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBteC1hdXRvIG1heC13LW1kIG1kOm1heC13LWxnIGxnOm1heC13LTJ4bCBcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPlJlamVjdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4qL1xyXG4iXSwibmFtZXMiOlsiSW5wdXRCb3giLCJhdXRoIiwiZGIiLCJ1c2VDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInF1ZXJ5Iiwid2hlcmUiLCJnZXREb2MiLCJkb2MiLCJGaWVsZFBhdGgiLCJkb2N1bWVudElkIiwiZ2V0RG9jcyIsImRvY3MiLCJSZXF1ZXN0IiwiRG9jdW1lbnREb3dubG9hZEljb24iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlcXVlc3RzIiwicG9zdHMiLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJ0YXJnZXQiLCJzZXRUYXJnZXQiLCJkYXRhIiwicmVxdWVzdHMiLCJ1aWQiLCJ0aGVuIiwiZG9jdW1lbnQiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJ1c2VydGFncyIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Requests.js\n");

/***/ })

});