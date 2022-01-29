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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typed.js */ \"./node_modules/typed.js/lib/typed.js\");\n/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function() {\n    var _this1 = _this;\n    _s();\n    // Create reference to store the DOM element containing the animation\n    var el = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), listedText1 = ref2[0], setListedText = ref2[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), counter1 = ref1[0], setCounter = ref1[1];\n    // Create reference to store the Typed instance itself\n    var typed = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var typedStrings = [\n        'to build things on the web',\n        'to write about things',\n        'to create music, or at least I hope it\\'s music', \n    ];\n    var onStringTyped = function(pos) {\n        // TODO: Only set for the first numbers, setCounter is not working too hot\n        console.log(\"typing string #\".concat(pos, \" counter=\").concat(counter1, \":\"), typedStrings[pos]);\n        setCounter(function(counter) {\n            return counter + 1;\n        });\n        if (counter1 < typedStrings.length) {\n            setListedText(function(listedText) {\n                return _toConsumableArray(listedText).concat([\n                    typedStrings[pos]\n                ]);\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var options = {\n            strings: typedStrings,\n            typeSpeed: 50,\n            backSpeed: 25,\n            smartBackspace: true,\n            loop: true,\n            onStringTyped: onStringTyped\n        };\n        // elRef refers to the <span> rendered below\n        // @ts-ignore: typed.current is mutable\n        typed.current = new (typed_js__WEBPACK_IMPORTED_MODULE_1___default())(el.current, options);\n        return function() {\n            var // Make sure to destroy Typed instance during cleanup\n            // to prevent memory leaks\n            ref;\n            typed === null || typed === void 0 ? void 0 : (ref = typed.current) === null || ref === void 0 ? void 0 : ref.destroy();\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Eden Chan | Personal Website\"\n                    }, void 0, false, {\n                        fileName: \"/Users/echan/repo/eden-chan/pages/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/Users/echan/repo/eden-chan/pages/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/echan/repo/eden-chan/pages/index.tsx\",\n                lineNumber: 56,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-blue-100 w-screen h-screen flex flex-col mx-auto align-middle\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: \"bg-red-100\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            \"aria-labelledby\": \"primary-navigation\",\n                            className: \"flex flex-row justify-center \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                id: \"primary-navigation\",\n                                children: \"Primary navigation\"\n                            }, void 0, false, {\n                                fileName: \"/Users/echan/repo/eden-chan/pages/index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/echan/repo/eden-chan/pages/index.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 9\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/echan/repo/eden-chan/pages/index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"bg-red-400\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"flex flex-col justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        src: \"/profile.png\",\n                                        alt: \"Picture of me\",\n                                        width: \"176\",\n                                        height: \"176\",\n                                        className: \"rounded-full mx-auto\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/echan/repo/eden-chan/pages/index.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/echan/repo/eden-chan/pages/index.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-3xl font-bold \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"animate-wave inline-block\",\n                                            children: \"👋🏼\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/echan/repo/eden-chan/pages/index.tsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 13\n                                        }, _this),\n                                        \"Hi, I'm Eden\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/echan/repo/eden-chan/pages/index.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: [\n                                        \"I like \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            style: {\n                                                whiteSpace: 'pre'\n                                            },\n                                            ref: el\n                                        }, void 0, false, {\n                                            fileName: \"/Users/echan/repo/eden-chan/pages/index.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 22\n                                        }, _this),\n                                        \"  \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/echan/repo/eden-chan/pages/index.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: listedText1.map(function(text) {\n                                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: text\n                                        }, void 0, false, {\n                                            fileName: \"/Users/echan/repo/eden-chan/pages/index.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 39\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/echan/repo/eden-chan/pages/index.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/echan/repo/eden-chan/pages/index.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 9\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/echan/repo/eden-chan/pages/index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"bg-red-800\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            \"aria-labelledby\": \"footer-navigation\",\n                            className: \"flex flex-row justify-center \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                id: \"footer-navigation\",\n                                children: \"Footer navigation\"\n                            }, void 0, false, {\n                                fileName: \"/Users/echan/repo/eden-chan/pages/index.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/echan/repo/eden-chan/pages/index.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 9\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/echan/repo/eden-chan/pages/index.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/echan/repo/eden-chan/pages/index.tsx\",\n                lineNumber: 60,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Home, \"fOy/vNEFpzvuRUSo0e4YhHvlDkw=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE2RlYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR5cGVkIGZyb20gJ3R5cGVkLmpzJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcblxuICAvLyBDcmVhdGUgcmVmZXJlbmNlIHRvIHN0b3JlIHRoZSBET00gZWxlbWVudCBjb250YWluaW5nIHRoZSBhbmltYXRpb25cbiAgY29uc3QgZWwgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBbbGlzdGVkVGV4dCwgc2V0TGlzdGVkVGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbY291bnRlciwgc2V0Q291bnRlcl0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG4gIC8vIENyZWF0ZSByZWZlcmVuY2UgdG8gc3RvcmUgdGhlIFR5cGVkIGluc3RhbmNlIGl0c2VsZlxuICBjb25zdCB0eXBlZCA9IHVzZVJlZjxUeXBlZD4obnVsbCk7XG4gIGNvbnN0IHR5cGVkU3RyaW5ncyA9IFtcbiAgICAndG8gYnVpbGQgdGhpbmdzIG9uIHRoZSB3ZWInLFxuICAgICd0byB3cml0ZSBhYm91dCB0aGluZ3MnLFxuICAgICd0byBjcmVhdGUgbXVzaWMsIG9yIGF0IGxlYXN0IEkgaG9wZSBpdFxcJ3MgbXVzaWMnLFxuICBdXG5cbiAgY29uc3Qgb25TdHJpbmdUeXBlZCA9IChwb3M6IG51bWJlcikgPT4ge1xuXG5cbiAgICAvLyBUT0RPOiBPbmx5IHNldCBmb3IgdGhlIGZpcnN0IG51bWJlcnMsIHNldENvdW50ZXIgaXMgbm90IHdvcmtpbmcgdG9vIGhvdFxuICAgIGNvbnNvbGUubG9nKGB0eXBpbmcgc3RyaW5nICMke3Bvc30gY291bnRlcj0ke2NvdW50ZXJ9OmAsIHR5cGVkU3RyaW5nc1twb3NdKVxuICAgIHNldENvdW50ZXIoY291bnRlciA9PiBjb3VudGVyICsgMSlcbiAgICBpZiAoY291bnRlciA8IHR5cGVkU3RyaW5ncy5sZW5ndGgpIHtcbiAgICAgIHNldExpc3RlZFRleHQobGlzdGVkVGV4dCA9PiBbLi4ubGlzdGVkVGV4dCwgdHlwZWRTdHJpbmdzW3Bvc11dKVxuICAgIH1cblxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgc3RyaW5nczogdHlwZWRTdHJpbmdzLFxuICAgICAgdHlwZVNwZWVkOiA1MCxcbiAgICAgIGJhY2tTcGVlZDogMjUsXG4gICAgICBzbWFydEJhY2tzcGFjZTogdHJ1ZSwgLy8gdGhpcyBpcyBhIGRlZmF1bHRcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgICBvblN0cmluZ1R5cGVkOiBvblN0cmluZ1R5cGVkXG4gICAgfTtcblxuICAgIC8vIGVsUmVmIHJlZmVycyB0byB0aGUgPHNwYW4+IHJlbmRlcmVkIGJlbG93XG4gICAgLy8gQHRzLWlnbm9yZTogdHlwZWQuY3VycmVudCBpcyBtdXRhYmxlXG4gICAgdHlwZWQuY3VycmVudCA9IG5ldyBUeXBlZChlbC5jdXJyZW50LCBvcHRpb25zKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyBNYWtlIHN1cmUgdG8gZGVzdHJveSBUeXBlZCBpbnN0YW5jZSBkdXJpbmcgY2xlYW51cFxuICAgICAgLy8gdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICAgIHR5cGVkPy5jdXJyZW50Py5kZXN0cm95KCk7XG4gICAgfVxuICB9LCBbXSlcblxuXG4gIHJldHVybiA8PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkVkZW4gQ2hhbiB8IFBlcnNvbmFsIFdlYnNpdGU8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTEwMCB3LXNjcmVlbiBoLXNjcmVlbiBmbGV4IGZsZXgtY29sIG14LWF1dG8gYWxpZ24tbWlkZGxlXCI+XG5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctcmVkLTEwMFwiPlxuICAgICAgICA8bmF2IGFyaWEtbGFiZWxsZWRieT1cInByaW1hcnktbmF2aWdhdGlvblwiIGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciAnPlxuICAgICAgICAgIDxoMiBpZD1cInByaW1hcnktbmF2aWdhdGlvblwiPlByaW1hcnkgbmF2aWdhdGlvbjwvaDI+XG4gICAgICAgICAgey8qIDwhLS0gbmF2aWdhdGlvbiBpdGVtcyAtLT4gKi99XG5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIHsvKiA8IS0tIHBhZ2UgY29udGVudCAtLT4gKi99XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJiZy1yZWQtNDAwXCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9wcm9maWxlLnBuZycgYWx0PVwiUGljdHVyZSBvZiBtZVwiIHdpZHRoPVwiMTc2XCIgaGVpZ2h0PVwiMTc2XCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIG14LWF1dG9cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFuaW1hdGUtd2F2ZSBpbmxpbmUtYmxvY2tcIj7wn5GL8J+PvDwvc3Bhbj5IaSwgSSdtIEVkZW48L2gxPlxuICAgICAgICAgIDxoMj5JIGxpa2UgPHNwYW4gc3R5bGU9e3sgd2hpdGVTcGFjZTogJ3ByZScgfX0gcmVmPXtlbH0gLz4gIDwvaDI+XG5cbiAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICB7bGlzdGVkVGV4dC5tYXAoKHRleHQpID0+IDxkaXYgPnt0ZXh0fTwvZGl2Pil9XG5cbiAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctcmVkLTgwMFwiPlxuICAgICAgICA8bmF2IGFyaWEtbGFiZWxsZWRieT1cImZvb3Rlci1uYXZpZ2F0aW9uXCIgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyICc+XG4gICAgICAgICAgPGgyIGlkPVwiZm9vdGVyLW5hdmlnYXRpb25cIj5Gb290ZXIgbmF2aWdhdGlvbjwvaDI+XG4gICAgICAgICAgey8qIDwhLS0gbmF2aWdhdGlvbiBpdGVtcyAtLT4gKi99XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIDwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsiVHlwZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkltYWdlIiwiSGVhZCIsIkhvbWUiLCJlbCIsImxpc3RlZFRleHQiLCJzZXRMaXN0ZWRUZXh0IiwiY291bnRlciIsInNldENvdW50ZXIiLCJ0eXBlZCIsInR5cGVkU3RyaW5ncyIsIm9uU3RyaW5nVHlwZWQiLCJwb3MiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwib3B0aW9ucyIsInN0cmluZ3MiLCJ0eXBlU3BlZWQiLCJiYWNrU3BlZWQiLCJzbWFydEJhY2tzcGFjZSIsImxvb3AiLCJjdXJyZW50IiwiZGVzdHJveSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwibmF2IiwiYXJpYS1sYWJlbGxlZGJ5IiwiaDIiLCJpZCIsIm1haW4iLCJzZWN0aW9uIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMSIsInNwYW4iLCJzdHlsZSIsIndoaXRlU3BhY2UiLCJyZWYiLCJtYXAiLCJ0ZXh0IiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});