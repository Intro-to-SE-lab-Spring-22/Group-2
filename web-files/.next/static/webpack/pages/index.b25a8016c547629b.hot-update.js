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

/***/ "./auth.js":
/*!*****************!*\
  !*** ./auth.js ***!
  \*****************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Post */ \"./components/Post.js\");\n\n\n\n\n\n\nvar status = false;\n//ensures that we are working on the browser\nif (true) {\n    //gets data\n    /*collection(db, 'Posts').getDoc.then(snapshot => {\r\n        console.log(snapshot.docs);\r\n    })\r\n    */ //listen for auth status changes\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_1__.auth, function(user) {\n        if (user) {\n            status = true;\n            console.log('user logged in: ', user);\n        } else {\n            status = false;\n            console.log('user logged out');\n        }\n    });\n//signup\n/*  const signupForm = document.querySelector('#signup-form');\r\n    signupForm.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n\r\n        //get user info\r\n        const email = signupForm['signup-email'].value;\r\n        const password = signupForm['signup-password'].value;\r\n\r\n        //signup user with email/password\r\n        console.log(email, password);\r\n        createUserWithEmailAndPassword(auth, email, password).then(cred => {\r\n            signupForm.reset();\r\n        }).catch((error) => {\r\n                const errorCode = error.code;\r\n                const errorMessage = error.message;\r\n                if (errorCode == 'auth/weak-password') {\r\n                    alert('The password is too weak.');\r\n                } else if(errorCode =='auth/email-already-in-use') {\r\n                    alert('email is already in use');\r\n                } else {\r\n                    alert(errorCode);\r\n                }\r\n            })\r\n    })\r\n\r\n    */ //logout\n/*const logout = document.querySelector('#logout');\r\n    logout.addEventListener('click', (e)=>{\r\n        e.preventDefault();\r\n        signOut(auth);\r\n    })*/ //login - moved to login.js\n/*\r\n    const loginForm = document.querySelector('#login-form');\r\n    loginForm.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n\r\n        //get user info\r\n        const email = loginForm['login-email'].value;\r\n        const password = loginForm['login-password'].value;\r\n\r\n        signInWithEmailAndPassword(auth, email, password).then(cred => {\r\n            //call next function to display timeline for user\r\n            loginForm.reset();\r\n        })\r\n    })\r\n\r\n    */ }\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0Q7QUFDQztBQUNoQjtBQUM2RjtBQUN4RTtBQUNmO0FBRXpDLEdBQUcsQ0FBQ2UsTUFBTSxHQUFHLEtBQUs7QUFDbEIsRUFBNEM7QUFHNUMsRUFBRSxFQUFFLElBQTZCLEVBQUUsQ0FBQztJQUVoQyxFQUFXO0lBQ1gsRUFHRTtJQUdGTixrQkFBa0IsQ0FBQ0osSUFBSSxFQUFFVzs7WUFFakJELE1BQU0sR0FBRyxJQUFJO3FFQUNMRyxDQUFHLDJDQUFtQixpQkFBRUY7UUFDcEMsQ0FBQyxNQUFLLENBQUM7WUFDSEQsTUFBTSxHQUFHLEtBQUs7WUFDZEUsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBaUI7UUFDakMsQ0FBQztJQUVMLENBQUM7QUFFRCxFQUFRO0FBQ1YsRUF5Qkk7QUFFRixFQUlJO0FBSUosRUFlRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hdXRoLmpzP2Y1NWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluaywgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7YXV0aCwgZGJ9IGZyb20gXCIuL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCwgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkLCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCwgc2lnbk91dCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGdldERvY3MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBzZXR1cFBvc3RzIGZyb20nLi9jb21wb25lbnRzL1Bvc3QnO1xyXG5cclxubGV0IHN0YXR1cyA9IGZhbHNlO1xyXG4vL2Vuc3VyZXMgdGhhdCB3ZSBhcmUgd29ya2luZyBvbiB0aGUgYnJvd3NlclxyXG5cclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBcclxuICAgIC8vZ2V0cyBkYXRhXHJcbiAgICAvKmNvbGxlY3Rpb24oZGIsICdQb3N0cycpLmdldERvYy50aGVuKHNuYXBzaG90ID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhzbmFwc2hvdC5kb2NzKTtcclxuICAgIH0pXHJcbiAgICAqL1xyXG4gICAgLy9saXN0ZW4gZm9yIGF1dGggc3RhdHVzIGNoYW5nZXNcclxuICAgIFxyXG4gICAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIHVzZXI9PiB7XHJcbiAgICAgICAgaWYodXNlcil7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1c2VyIGxvZ2dlZCBpbjogJywgdXNlcik7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBzdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzZXIgbG9nZ2VkIG91dCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pXHJcblxyXG4gICAgLy9zaWdudXBcclxuICAvKiAgY29uc3Qgc2lnbnVwRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWdudXAtZm9ybScpO1xyXG4gICAgc2lnbnVwRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy9nZXQgdXNlciBpbmZvXHJcbiAgICAgICAgY29uc3QgZW1haWwgPSBzaWdudXBGb3JtWydzaWdudXAtZW1haWwnXS52YWx1ZTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZCA9IHNpZ251cEZvcm1bJ3NpZ251cC1wYXNzd29yZCddLnZhbHVlO1xyXG5cclxuICAgICAgICAvL3NpZ251cCB1c2VyIHdpdGggZW1haWwvcGFzc3dvcmRcclxuICAgICAgICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgICAgIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpLnRoZW4oY3JlZCA9PiB7XHJcbiAgICAgICAgICAgIHNpZ251cEZvcm0ucmVzZXQoKTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yQ29kZSA9PSAnYXV0aC93ZWFrLXBhc3N3b3JkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdUaGUgcGFzc3dvcmQgaXMgdG9vIHdlYWsuJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZXJyb3JDb2RlID09J2F1dGgvZW1haWwtYWxyZWFkeS1pbi11c2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ2VtYWlsIGlzIGFscmVhZHkgaW4gdXNlJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yQ29kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgICovXHJcbiAgICAvL2xvZ291dFxyXG4gICAgLypjb25zdCBsb2dvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nb3V0Jyk7XHJcbiAgICBsb2dvdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2lnbk91dChhdXRoKTtcclxuICAgIH0pKi9cclxuXHJcbiAgICAvL2xvZ2luIC0gbW92ZWQgdG8gbG9naW4uanNcclxuXHJcbiAgICAvKlxyXG4gICAgY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luLWZvcm0nKTtcclxuICAgIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy9nZXQgdXNlciBpbmZvXHJcbiAgICAgICAgY29uc3QgZW1haWwgPSBsb2dpbkZvcm1bJ2xvZ2luLWVtYWlsJ10udmFsdWU7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBsb2dpbkZvcm1bJ2xvZ2luLXBhc3N3b3JkJ10udmFsdWU7XHJcblxyXG4gICAgICAgIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZCkudGhlbihjcmVkID0+IHtcclxuICAgICAgICAgICAgLy9jYWxsIG5leHQgZnVuY3Rpb24gdG8gZGlzcGxheSB0aW1lbGluZSBmb3IgdXNlclxyXG4gICAgICAgICAgICBsb2dpbkZvcm0ucmVzZXQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICAqL1xyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJ1c2VIaXN0b3J5IiwiYXV0aCIsImRiIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZ2V0QXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbk91dCIsImNvbGxlY3Rpb24iLCJnZXREb2NzIiwic2V0dXBQb3N0cyIsInN0YXR1cyIsInVzZXIiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./auth.js\n");

/***/ })

});