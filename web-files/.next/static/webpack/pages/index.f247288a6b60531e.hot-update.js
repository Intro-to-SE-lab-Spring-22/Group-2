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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n/*\r\nimport '../firebase.js'\r\nimport Head from 'next/head'\r\nimport Header from '../components/Header'\r\nimport Image from 'next/image'\r\nimport Login from '../components/Login'\r\nimport SignUp from '../components/SignUp'\r\nimport Post from '../components/Post.js'\r\nimport Sidebar from '../components/Sidebar.js'\r\nimport Feed from '../components/Feed.js'\r\nimport '../auth.js'\r\nimport {getAuth} from 'firebase/auth';\r\nimport {db} from '../firebase';\r\nimport \"firebase/firestore\";\r\nimport { getFirestore } from \"firebase/firestore\";\r\nimport \"firebase/storage\";\r\nimport \"../firebase\";\r\nimport { getStorage, ref, getDownloadURL, uploadString, UploadTask} from \"firebase/storage\";\r\n\r\nexport default function Home() {\r\n  const auth = getAuth();\r\n  const db = getFirestore();\r\n  const storage = getStorage();\r\n  const user = auth.currentUser;\r\n\r\n\r\n  return (\r\n\r\n    <div className='h-screen bg-gray-100 overflow-hidden'>\r\n      <Head>\r\n        <title>Striker</title>\r\n      </Head>\r\n      \r\n      <Header />\r\n\r\n      <main className='flex'>\r\n      <button type=\"button\" id=\"logout\">logout!</button>\r\n        <Sidebar />\r\n        <Feed />\r\n        \r\n        \r\n        {// Feed //}\r\n        {//Widgets//}\r\n      </main>\r\n      <Login />\r\n      <SignUp />\r\n    </div>\r\n  )\r\n}\r\n\r\n*/ \n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n// Message Component\nfunction Message(props) {\n    if (props.isLoggedIn) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Welcome User\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Sam\\\\Documents\\\\GitHub\\\\Group-2\\\\web-files\\\\pages\\\\index.js\",\n        lineNumber: 60,\n        columnNumber: 16\n    }, this));\n    else return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Please Login\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Sam\\\\Documents\\\\GitHub\\\\Group-2\\\\web-files\\\\pages\\\\index.js\",\n        lineNumber: 62,\n        columnNumber: 16\n    }, this));\n}\n_c = Message;\n// Login Component\nfunction Login(props) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: props.clickFunc,\n        children: \"Login\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Sam\\\\Documents\\\\GitHub\\\\Group-2\\\\web-files\\\\pages\\\\index.js\",\n        lineNumber: 69,\n        columnNumber: 12\n    }, this));\n}\n_c1 = Login;\n// Logout Component\nfunction Logout(props) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: props.clickFunc,\n        children: \"Logout\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Sam\\\\Documents\\\\GitHub\\\\Group-2\\\\web-files\\\\pages\\\\index.js\",\n        lineNumber: 79,\n        columnNumber: 12\n    }, this));\n}\n_c2 = Logout;\nvar Homepage = // Parent Homepage Component\n/*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(Homepage, _Component);\n    var _super = _createSuper(Homepage);\n    function Homepage(props) {\n        _classCallCheck(this, Homepage);\n        var _this;\n        _this = _super.call(this, props);\n        _this.state = {\n            isLoggedIn: false\n        };\n        _this.ifLoginClicked = _this.ifLoginClicked.bind(_assertThisInitialized(_this));\n        _this.ifLogoutClicked = _this.ifLogoutClicked.bind(_assertThisInitialized(_this));\n        return _this;\n    }\n    _createClass(Homepage, [\n        {\n            key: \"ifLoginClicked\",\n            value: function ifLoginClicked() {\n                this.setState({\n                    isLoggedIn: true\n                });\n            }\n        },\n        {\n            key: \"ifLogoutClicked\",\n            value: function ifLogoutClicked() {\n                this.setState({\n                    isLoggedIn: false\n                });\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Message, {\n                            isLoggedIn: this.state.isLoggedIn\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sam\\\\Documents\\\\GitHub\\\\Group-2\\\\web-files\\\\pages\\\\index.js\",\n                            lineNumber: 114,\n                            columnNumber: 17\n                        }, this),\n                        this.state.isLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logout, {\n                            clickFunc: this.ifLogoutClicked\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sam\\\\Documents\\\\GitHub\\\\Group-2\\\\web-files\\\\pages\\\\index.js\",\n                            lineNumber: 118,\n                            columnNumber: 21\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Login, {\n                            clickFunc: this.ifLoginClicked\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sam\\\\Documents\\\\GitHub\\\\Group-2\\\\web-files\\\\pages\\\\index.js\",\n                            lineNumber: 120,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Sam\\\\Documents\\\\GitHub\\\\Group-2\\\\web-files\\\\pages\\\\index.js\",\n                    lineNumber: 112,\n                    columnNumber: 13\n                }, this));\n            }\n        }\n    ]);\n    return Homepage;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\nreact_dom__WEBPACK_IMPORTED_MODULE_2___default().render(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Homepage, {}, void 0, false, {\n    fileName: \"C:\\\\Users\\\\Sam\\\\Documents\\\\GitHub\\\\Group-2\\\\web-files\\\\pages\\\\index.js\",\n    lineNumber: 131,\n    columnNumber: 5\n}, undefined), document.getElementById('root'));\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Message\");\n$RefreshReg$(_c1, \"Login\");\n$RefreshReg$(_c2, \"Logout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLEVBa0RFO0FBR0YsTUFBTSxDQUFDQyxRQUFRLE1BQU0sQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsRUFBb0I7U0FDWEMsT0FBTyxDQUFDQyxLQUFLO0lBRWxCLEVBQUUsRUFBRUEsS0FBSyxDQUFDQyxVQUFVLEVBQ2hCO2tCQUFXLENBQVk7Ozs7OztTQUV2QixNQUFNLHVCQUFFQyxDQUFFO2tCQUFDLENBQVk7Ozs7OztBQUMvQixDQUFDO0tBTlFILE9BQU87QUFRaEIsRUFBa0I7O0lBR2YsTUFBTSx1QkFDR0s7O2tCQUFtQyxDQUVwQzs7Ozs7O0FBRVgsQ0FBQztNQVBRRCxLQUFLO0FBU2QsRUFBbUI7U0FDVkksTUFBTSxDQUFDUCxLQUFLLEVBQ3JCLENBQUM7SUFDRyxNQUFNO1FBQ1NLLE9BQU8sRUFBSUw7a0JBQWlCLENBRXBDOzs7Ozs7QUFFWCxDQUFDO01BUFFPLE1BQU07SUFVVEMsUUFBUSxHQURkLEVBQTRCO2NBQzVCLFFBQVE7Ozs7YUFBRkEsUUFBUSxDQUVFUixLQUFLOzs7O2NBSVJTLEtBQUssR0FBRyxDQUFDUjtZQUFBQSxVQUFVLEVBQUcsS0FBSztRQUFBLENBQUM7Y0FFNUJTO2NBQ0FFLGVBQWUsU0FBUUEsZUFBZSxDQUFDRCxJQUFJOzs7OztZQUdwREQsR0FBYyxFQUFkQSxDQUFjO21CQUFkQTtnQkFFSSxJQUFJLENBQUNHLFFBQVEsQ0FBQyxDQUFDWjtvQkFBQUE7Z0JBQWlCLENBQUM7WUFDckMsQ0FBQzs7O1lBRURXLEdBQWUsRUFBZkEsQ0FBZTttQkFBZkE7Z0JBRUksSUFBSSxDQUFDQyxJQUFBQSw2REFBVVo7b0JBQUFBLFVBQVUsRUFBRztnQkFBSyxDQUFDO1lBQ3RDLENBQUM7OztZQUVEYSxHQUFNLEVBQU5BLENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1CTixDQUFDOzs7O0VBekNrQmpCLEtBQUssQ0FBQ21CLFNBQVM7QUE0Q3RDbEIsUUFBUSxDQUFDZ0IsTUFBTSx1QkFDVk4sUUFBUTs7OztVQUNUUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbmltcG9ydCAnLi4vZmlyZWJhc2UuanMnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luJ1xyXG5pbXBvcnQgU2lnblVwIGZyb20gJy4uL2NvbXBvbmVudHMvU2lnblVwJ1xyXG5pbXBvcnQgUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3QuanMnXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhci5qcydcclxuaW1wb3J0IEZlZWQgZnJvbSAnLi4vY29tcG9uZW50cy9GZWVkLmpzJ1xyXG5pbXBvcnQgJy4uL2F1dGguanMnXHJcbmltcG9ydCB7Z2V0QXV0aH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XHJcbmltcG9ydCB7ZGJ9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuaW1wb3J0IFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBnZXRTdG9yYWdlLCByZWYsIGdldERvd25sb2FkVVJMLCB1cGxvYWRTdHJpbmcsIFVwbG9hZFRhc2t9IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoKTtcclxuICBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZSgpO1xyXG4gIGNvbnN0IHVzZXIgPSBhdXRoLmN1cnJlbnRVc2VyO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naC1zY3JlZW4gYmctZ3JheS0xMDAgb3ZlcmZsb3ctaGlkZGVuJz5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlN0cmlrZXI8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIFxyXG4gICAgICA8SGVhZGVyIC8+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9J2ZsZXgnPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImxvZ291dFwiPmxvZ291dCE8L2J1dHRvbj5cclxuICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgIDxGZWVkIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgey8vIEZlZWQgLy99XHJcbiAgICAgICAgey8vV2lkZ2V0cy8vfVxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxMb2dpbiAvPlxyXG4gICAgICA8U2lnblVwIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbiovXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuIFxyXG4vLyBNZXNzYWdlIENvbXBvbmVudFxyXG5mdW5jdGlvbiBNZXNzYWdlKHByb3BzKVxyXG57XHJcbiAgICBpZiAocHJvcHMuaXNMb2dnZWRJbilcclxuICAgICAgICByZXR1cm4gPGgxPldlbGNvbWUgVXNlcjwvaDE+O1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiA8aDE+UGxlYXNlIExvZ2luPC9oMT47XHJcbn1cclxuIFxyXG4vLyBMb2dpbiBDb21wb25lbnRcclxuZnVuY3Rpb24gTG9naW4ocHJvcHMpXHJcbntcclxuICAgcmV0dXJuKFxyXG4gICAgICAgICAgIDxidXR0b24gb25DbGljayA9IHtwcm9wcy5jbGlja0Z1bmN9PlxyXG4gICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgKTtcclxufVxyXG4gXHJcbi8vIExvZ291dCBDb21wb25lbnRcclxuZnVuY3Rpb24gTG9nb3V0KHByb3BzKVxyXG57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge3Byb3BzLmNsaWNrRnVuY30+XHJcbiAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgKTtcclxufVxyXG4gXHJcbi8vIFBhcmVudCBIb21lcGFnZSBDb21wb25lbnRcclxuY2xhc3MgSG9tZXBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuIFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7aXNMb2dnZWRJbiA6IGZhbHNlfTtcclxuIFxyXG4gICAgICAgIHRoaXMuaWZMb2dpbkNsaWNrZWQgPSB0aGlzLmlmTG9naW5DbGlja2VkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5pZkxvZ291dENsaWNrZWQgPSB0aGlzLmlmTG9nb3V0Q2xpY2tlZC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gXHJcbiAgICBpZkxvZ2luQ2xpY2tlZCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2dnZWRJbiA6IHRydWV9KTtcclxuICAgIH1cclxuIFxyXG4gICAgaWZMb2dvdXRDbGlja2VkKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0xvZ2dlZEluIDogZmFsc2V9KTtcclxuICAgIH1cclxuIFxyXG4gICAgcmVuZGVyKCl7XHJcbiBcclxuICAgICAgICByZXR1cm4oXHJcbiBcclxuICAgICAgICAgICAgPGRpdj5cclxuIFxyXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2UgaXNMb2dnZWRJbiA9IHt0aGlzLnN0YXRlLmlzTG9nZ2VkSW59Lz5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5pc0xvZ2dlZEluKT8oXHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ291dCBjbGlja0Z1bmMgPSB7dGhpcy5pZkxvZ291dENsaWNrZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8TG9naW4gY2xpY2tGdW5jID0ge3RoaXMuaWZMb2dpbkNsaWNrZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiBcclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPEhvbWVwYWdlIC8+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxyXG4pOyJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiTWVzc2FnZSIsInByb3BzIiwiaXNMb2dnZWRJbiIsImgxIiwiTG9naW4iLCJidXR0b24iLCJvbkNsaWNrIiwiY2xpY2tGdW5jIiwiTG9nb3V0IiwiSG9tZXBhZ2UiLCJzdGF0ZSIsImlmTG9naW5DbGlja2VkIiwiYmluZCIsImlmTG9nb3V0Q2xpY2tlZCIsInNldFN0YXRlIiwicmVuZGVyIiwiZGl2IiwiQ29tcG9uZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});