/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var common_ipc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/ipc */ \"../common/ipc.js\");\n/* harmony import */ var common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/constants */ \"../common/constants.js\");\n/* harmony import */ var common_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/dom */ \"../common/dom.js\");\n/* harmony import */ var common_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/logger */ \"../common/logger.js\");\n\n\n\n\ncommon_logger__WEBPACK_IMPORTED_MODULE_3__.default.log(\"Backend\", \"Initializing modules\");\nconst ipcMain = new common_ipc__WEBPACK_IMPORTED_MODULE_0__.default(\"backend\");\ncommon_logger__WEBPACK_IMPORTED_MODULE_3__.default.log(\"Backend\", \"Registering events\");\nipcMain.on(common_constants__WEBPACK_IMPORTED_MODULE_1__.IPCEvents.INJECT_CSS, (_, data) => {\n  common_dom__WEBPACK_IMPORTED_MODULE_2__.default.injectCSS(data.id, data.css);\n});\nipcMain.on(common_constants__WEBPACK_IMPORTED_MODULE_1__.IPCEvents.INJECT_THEME, (_, data) => {\n  common_dom__WEBPACK_IMPORTED_MODULE_2__.default.injectTheme(data.id, data.css);\n});\nipcMain.on(common_constants__WEBPACK_IMPORTED_MODULE_1__.IPCEvents.MAKE_REQUESTS, (event, data) => {\n  fetch(data.url).catch(console.error.bind(null, \"REQUEST FAILED:\")).then(res => res.text()).then(text => {\n    ipcMain.reply(event, text);\n  });\n});\n\nconst SCRIPT_URL = (() => {\n  switch (\"development\") {\n    case \"production\":\n      return \"https://strencher.github.io/BdBrowser/dist/frontend.js\";\n\n    case \"development\":\n      return \"http://127.0.0.1:5500/frontend.js\";\n\n    default:\n      throw new Error(\"Unknown Environment\");\n  }\n})();\n\ncommon_logger__WEBPACK_IMPORTED_MODULE_3__.default.log(\"Backend\", \"Loading frontend script from\", SCRIPT_URL);\ncommon_dom__WEBPACK_IMPORTED_MODULE_2__.default.injectJS(\"BetterDiscordBrowser-frontend\", SCRIPT_URL, false);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/ZmE2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSVBDIGZyb20gXCJjb21tb24vaXBjXCI7XG5pbXBvcnQgeyBJUENFdmVudHMgfSBmcm9tIFwiY29tbW9uL2NvbnN0YW50c1wiO1xuaW1wb3J0IERPTSBmcm9tIFwiY29tbW9uL2RvbVwiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiY29tbW9uL2xvZ2dlclwiO1xuTG9nZ2VyLmxvZyhcIkJhY2tlbmRcIiwgXCJJbml0aWFsaXppbmcgbW9kdWxlc1wiKTtcbmNvbnN0IGlwY01haW4gPSBuZXcgSVBDKFwiYmFja2VuZFwiKTtcbkxvZ2dlci5sb2coXCJCYWNrZW5kXCIsIFwiUmVnaXN0ZXJpbmcgZXZlbnRzXCIpO1xuaXBjTWFpbi5vbihJUENFdmVudHMuSU5KRUNUX0NTUywgKF8sIGRhdGEpID0+IHtcbiAgRE9NLmluamVjdENTUyhkYXRhLmlkLCBkYXRhLmNzcyk7XG59KTtcbmlwY01haW4ub24oSVBDRXZlbnRzLklOSkVDVF9USEVNRSwgKF8sIGRhdGEpID0+IHtcbiAgRE9NLmluamVjdFRoZW1lKGRhdGEuaWQsIGRhdGEuY3NzKTtcbn0pO1xuaXBjTWFpbi5vbihJUENFdmVudHMuTUFLRV9SRVFVRVNUUywgKGV2ZW50LCBkYXRhKSA9PiB7XG4gIGZldGNoKGRhdGEudXJsKS5jYXRjaChjb25zb2xlLmVycm9yLmJpbmQobnVsbCwgXCJSRVFVRVNUIEZBSUxFRDpcIikpLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpLnRoZW4odGV4dCA9PiB7XG4gICAgaXBjTWFpbi5yZXBseShldmVudCwgdGV4dCk7XG4gIH0pO1xufSk7XG5cbmNvbnN0IFNDUklQVF9VUkwgPSAoKCkgPT4ge1xuICBzd2l0Y2ggKEVOVikge1xuICAgIGNhc2UgXCJwcm9kdWN0aW9uXCI6XG4gICAgICByZXR1cm4gXCJodHRwczovL3N0cmVuY2hlci5naXRodWIuaW8vQmRCcm93c2VyL2Rpc3QvZnJvbnRlbmQuanNcIjtcblxuICAgIGNhc2UgXCJkZXZlbG9wbWVudFwiOlxuICAgICAgcmV0dXJuIFwiaHR0cDovLzEyNy4wLjAuMTo1NTAwL2Zyb250ZW5kLmpzXCI7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBFbnZpcm9ubWVudFwiKTtcbiAgfVxufSkoKTtcblxuTG9nZ2VyLmxvZyhcIkJhY2tlbmRcIiwgXCJMb2FkaW5nIGZyb250ZW5kIHNjcmlwdCBmcm9tXCIsIFNDUklQVF9VUkwpO1xuRE9NLmluamVjdEpTKFwiQmV0dGVyRGlzY29yZEJyb3dzZXItZnJvbnRlbmRcIiwgU0NSSVBUX1VSTCwgZmFsc2UpOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "../common/constants.js":
/*!******************************!*\
  !*** ../common/constants.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"IPCEvents\": () => (/* binding */ IPCEvents)\n/* harmony export */ });\nconst IPCEvents = {\n  INJECT_CSS: \"bdbrowser-inject-css\",\n  MAKE_REQUESTS: \"bdbrowser-make-requests\",\n  INJECT_THEME: \"bdbrowser-inject-theme\"\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vY29tbW9uL2NvbnN0YW50cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9jb21tb24vY29uc3RhbnRzLmpzPzcxMDUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IElQQ0V2ZW50cyA9IHtcbiAgSU5KRUNUX0NTUzogXCJiZGJyb3dzZXItaW5qZWN0LWNzc1wiLFxuICBNQUtFX1JFUVVFU1RTOiBcImJkYnJvd3Nlci1tYWtlLXJlcXVlc3RzXCIsXG4gIElOSkVDVF9USEVNRTogXCJiZGJyb3dzZXItaW5qZWN0LXRoZW1lXCJcbn07Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../common/constants.js\n");

/***/ }),

/***/ "../common/dom.js":
/*!************************!*\
  !*** ../common/dom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DOM)\n/* harmony export */ });\nclass DOM {\n  /**@returns {HTMLElement} */\n  static createElement(type, options = {}, ...children) {\n    const node = document.createElement(type);\n    Object.assign(node, options);\n\n    for (const child of children) {\n      node.append(child);\n    }\n\n    return node;\n  }\n\n  static injectTheme(id, css) {\n    const [bdThemes] = document.getElementsByTagName(\"bd-themes\");\n    const style = this.createElement(\"style\", {\n      id: id,\n      type: \"text/css\",\n      innerHTML: css\n    });\n    style.setAttribute(\"data-bd-native\", \"\");\n    bdThemes.append(style);\n  }\n\n  static injectCSS(id, css) {\n    const style = this.createElement(\"style\", {\n      id: id,\n      type: \"text/css\",\n      innerHTML: css\n    });\n    this.headAppend(style);\n  }\n\n  static removeCSS(id) {\n    const style = document.querySelector(\"style#\" + id);\n\n    if (style) {\n      style.remove();\n    }\n  }\n\n  static injectJS(id, src, silent = true) {\n    const script = this.createElement(\"script\", {\n      id: id,\n      type: \"text/javascript\",\n      src: src\n    });\n    this.headAppend(script);\n    if (silent) script.addEventListener(\"load\", () => {\n      script.remove();\n    }, {\n      once: true\n    });\n  }\n\n}\nDOM.headAppend = document.head.append.bind(document.head);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vY29tbW9uL2RvbS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9jb21tb24vZG9tLmpzPzBmNGIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NIHtcbiAgLyoqQHJldHVybnMge0hUTUxFbGVtZW50fSAqL1xuICBzdGF0aWMgY3JlYXRlRWxlbWVudCh0eXBlLCBvcHRpb25zID0ge30sIC4uLmNoaWxkcmVuKSB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgT2JqZWN0LmFzc2lnbihub2RlLCBvcHRpb25zKTtcblxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIG5vZGUuYXBwZW5kKGNoaWxkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBpbmplY3RUaGVtZShpZCwgY3NzKSB7XG4gICAgY29uc3QgW2JkVGhlbWVzXSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYmQtdGhlbWVzXCIpO1xuICAgIGNvbnN0IHN0eWxlID0gdGhpcy5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwge1xuICAgICAgaWQ6IGlkLFxuICAgICAgdHlwZTogXCJ0ZXh0L2Nzc1wiLFxuICAgICAgaW5uZXJIVE1MOiBjc3NcbiAgICB9KTtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJkLW5hdGl2ZVwiLCBcIlwiKTtcbiAgICBiZFRoZW1lcy5hcHBlbmQoc3R5bGUpO1xuICB9XG5cbiAgc3RhdGljIGluamVjdENTUyhpZCwgY3NzKSB7XG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICBpZDogaWQsXG4gICAgICB0eXBlOiBcInRleHQvY3NzXCIsXG4gICAgICBpbm5lckhUTUw6IGNzc1xuICAgIH0pO1xuICAgIHRoaXMuaGVhZEFwcGVuZChzdHlsZSk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlQ1NTKGlkKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3R5bGUjXCIgKyBpZCk7XG5cbiAgICBpZiAoc3R5bGUpIHtcbiAgICAgIHN0eWxlLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBpbmplY3RKUyhpZCwgc3JjLCBzaWxlbnQgPSB0cnVlKSB7XG4gICAgY29uc3Qgc2NyaXB0ID0gdGhpcy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIHR5cGU6IFwidGV4dC9qYXZhc2NyaXB0XCIsXG4gICAgICBzcmM6IHNyY1xuICAgIH0pO1xuICAgIHRoaXMuaGVhZEFwcGVuZChzY3JpcHQpO1xuICAgIGlmIChzaWxlbnQpIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgICBzY3JpcHQucmVtb3ZlKCk7XG4gICAgfSwge1xuICAgICAgb25jZTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbn1cbkRPTS5oZWFkQXBwZW5kID0gZG9jdW1lbnQuaGVhZC5hcHBlbmQuYmluZChkb2N1bWVudC5oZWFkKTsiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../common/dom.js\n");

/***/ }),

/***/ "../common/ipc.js":
/*!************************!*\
  !*** ../common/ipc.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IPC)\n/* harmony export */ });\nclass IPC {\n  constructor(context) {\n    if (!context) throw new Error(\"Context is required\");\n    this.context = context;\n  }\n\n  createHash() {\n    return Math.random().toString(36).substr(2, 10);\n  }\n\n  reply(message, data) {\n    this.send(message.event + \"-reply\", data, void 0, message.hash);\n  }\n\n  on(event, listener, once = false) {\n    const wrappedListener = message => {\n      if (message.data.event !== event || message.data.context === this.context) return;\n      const returnValue = listener(message.data, message.data.data);\n\n      if (returnValue == true && once) {\n        window.removeEventListener(\"message\", wrappedListener);\n      }\n    };\n\n    window.addEventListener(\"message\", wrappedListener);\n  }\n\n  send(event, data, callback = null, hash) {\n    if (!hash) hash = this.createHash();\n\n    if (callback) {\n      this.on(event + \"-reply\", message => {\n        if (message.hash === hash) {\n          callback(message.data);\n          return true;\n        }\n\n        return false;\n      }, true);\n    }\n\n    window.postMessage({\n      source: \"betterdiscord-browser-\" + this.context,\n      event: event,\n      context: this.context,\n      hash: hash,\n      data\n    });\n  }\n\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vY29tbW9uL2lwYy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9jb21tb24vaXBjLmpzPzQ5M2UiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSVBDIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiQ29udGV4dCBpcyByZXF1aXJlZFwiKTtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB9XG5cbiAgY3JlYXRlSGFzaCgpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDEwKTtcbiAgfVxuXG4gIHJlcGx5KG1lc3NhZ2UsIGRhdGEpIHtcbiAgICB0aGlzLnNlbmQobWVzc2FnZS5ldmVudCArIFwiLXJlcGx5XCIsIGRhdGEsIHZvaWQgMCwgbWVzc2FnZS5oYXNoKTtcbiAgfVxuXG4gIG9uKGV2ZW50LCBsaXN0ZW5lciwgb25jZSA9IGZhbHNlKSB7XG4gICAgY29uc3Qgd3JhcHBlZExpc3RlbmVyID0gbWVzc2FnZSA9PiB7XG4gICAgICBpZiAobWVzc2FnZS5kYXRhLmV2ZW50ICE9PSBldmVudCB8fCBtZXNzYWdlLmRhdGEuY29udGV4dCA9PT0gdGhpcy5jb250ZXh0KSByZXR1cm47XG4gICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IGxpc3RlbmVyKG1lc3NhZ2UuZGF0YSwgbWVzc2FnZS5kYXRhLmRhdGEpO1xuXG4gICAgICBpZiAocmV0dXJuVmFsdWUgPT0gdHJ1ZSAmJiBvbmNlKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB3cmFwcGVkTGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgd3JhcHBlZExpc3RlbmVyKTtcbiAgfVxuXG4gIHNlbmQoZXZlbnQsIGRhdGEsIGNhbGxiYWNrID0gbnVsbCwgaGFzaCkge1xuICAgIGlmICghaGFzaCkgaGFzaCA9IHRoaXMuY3JlYXRlSGFzaCgpO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9uKGV2ZW50ICsgXCItcmVwbHlcIiwgbWVzc2FnZSA9PiB7XG4gICAgICAgIGlmIChtZXNzYWdlLmhhc2ggPT09IGhhc2gpIHtcbiAgICAgICAgICBjYWxsYmFjayhtZXNzYWdlLmRhdGEpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgd2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgIHNvdXJjZTogXCJiZXR0ZXJkaXNjb3JkLWJyb3dzZXItXCIgKyB0aGlzLmNvbnRleHQsXG4gICAgICBldmVudDogZXZlbnQsXG4gICAgICBjb250ZXh0OiB0aGlzLmNvbnRleHQsXG4gICAgICBoYXNoOiBoYXNoLFxuICAgICAgZGF0YVxuICAgIH0pO1xuICB9XG5cbn1cbjsiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../common/ipc.js\n");

/***/ }),

/***/ "../common/logger.js":
/*!***************************!*\
  !*** ../common/logger.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Logger)\n/* harmony export */ });\nclass Logger {\n  static _parseType(type) {\n    switch (type) {\n      case \"info\":\n      case \"warn\":\n      case \"error\":\n        return type;\n\n      default:\n        return \"log\";\n    }\n  }\n\n  static _log(type, module, ...nessage) {\n    type = this._parseType(type);\n    console[type](`%c[BetterDiscord]%c %c[${module}]%c`, \"color: #3E82E5; font-weight: 700;\", \"\", \"color: #396CB8\", \"\", ...nessage);\n  }\n\n  static log(module, ...message) {\n    this._log(\"log\", module, ...message);\n  }\n\n  static info(module, ...message) {\n    this._log(\"info\", module, ...message);\n  }\n\n  static warn(module, ...message) {\n    this._log(\"warn\", module, ...message);\n  }\n\n  static error(module, ...message) {\n    this._log(\"error\", module, ...message);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vY29tbW9uL2xvZ2dlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9jb21tb24vbG9nZ2VyLmpzPzJmYTkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcbiAgc3RhdGljIF9wYXJzZVR5cGUodHlwZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcImluZm9cIjpcbiAgICAgIGNhc2UgXCJ3YXJuXCI6XG4gICAgICBjYXNlIFwiZXJyb3JcIjpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcImxvZ1wiO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBfbG9nKHR5cGUsIG1vZHVsZSwgLi4ubmVzc2FnZSkge1xuICAgIHR5cGUgPSB0aGlzLl9wYXJzZVR5cGUodHlwZSk7XG4gICAgY29uc29sZVt0eXBlXShgJWNbQmV0dGVyRGlzY29yZF0lYyAlY1ske21vZHVsZX1dJWNgLCBcImNvbG9yOiAjM0U4MkU1OyBmb250LXdlaWdodDogNzAwO1wiLCBcIlwiLCBcImNvbG9yOiAjMzk2Q0I4XCIsIFwiXCIsIC4uLm5lc3NhZ2UpO1xuICB9XG5cbiAgc3RhdGljIGxvZyhtb2R1bGUsIC4uLm1lc3NhZ2UpIHtcbiAgICB0aGlzLl9sb2coXCJsb2dcIiwgbW9kdWxlLCAuLi5tZXNzYWdlKTtcbiAgfVxuXG4gIHN0YXRpYyBpbmZvKG1vZHVsZSwgLi4ubWVzc2FnZSkge1xuICAgIHRoaXMuX2xvZyhcImluZm9cIiwgbW9kdWxlLCAuLi5tZXNzYWdlKTtcbiAgfVxuXG4gIHN0YXRpYyB3YXJuKG1vZHVsZSwgLi4ubWVzc2FnZSkge1xuICAgIHRoaXMuX2xvZyhcIndhcm5cIiwgbW9kdWxlLCAuLi5tZXNzYWdlKTtcbiAgfVxuXG4gIHN0YXRpYyBlcnJvcihtb2R1bGUsIC4uLm1lc3NhZ2UpIHtcbiAgICB0aGlzLl9sb2coXCJlcnJvclwiLCBtb2R1bGUsIC4uLm1lc3NhZ2UpO1xuICB9XG5cbn0iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../common/logger.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;