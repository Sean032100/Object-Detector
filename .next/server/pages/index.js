"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n// import styles from \".../styles/Home.module.css\";\n// import Image from \"next/image\";\n\nconst getStaticProps = async ()=>{\n    const res = await fetch(\"http://localhost:5000/shows\");\n    const data = await res.json();\n    return {\n        props: {\n            image_blob: data\n        }\n    };\n};\nconst getdata = ({ image_blob  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: image_blob.map((datas)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: datas.datetime\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\object-detector\\\\Object-Detector\\\\pages\\\\index.js\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: `data:image/png;base64, ${datas.image}`,\n                        alt: \"\",\n                        width: \"200\",\n                        height: \"200\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\object-detector\\\\Object-Detector\\\\pages\\\\index.js\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\object-detector\\\\Object-Detector\\\\pages\\\\index.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\object-detector\\\\Object-Detector\\\\pages\\\\index.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\nconst config = {\n    api: {\n        bodyParser: {\n            sizeLimit: \"4mb\"\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getdata);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLG1EQUFtRDtBQUNuRCxrQ0FBa0M7QUFFbEM7QUFBTyxNQUFNQSxpQkFBaUIsVUFBWTtJQUN4QyxNQUFNQyxNQUFNLE1BQU1DLE1BQU87SUFDekIsTUFBTUMsT0FBTyxNQUFNRixJQUFJRyxJQUFJO0lBRTNCLE9BQU87UUFDTEMsT0FBTztZQUFFQyxZQUFhSDtRQUFLO0lBQzdCO0FBQ0YsRUFBQztBQUVELE1BQU1JLFVBQVUsQ0FBQyxFQUFFRCxXQUFVLEVBQUUsR0FBSztJQUNsQyxxQkFDRSw4REFBQ0U7a0JBQ0VGLFdBQVdHLEdBQUcsQ0FBRUMsQ0FBQUEsc0JBQ2YsOERBQUNDOztrQ0FDQyw4REFBQ0M7a0NBQUtGLE1BQU1HLFFBQVE7Ozs7OztrQ0FDcEIsOERBQUNDO3dCQUFJQyxLQUFNLENBQUMsdUJBQXVCLEVBQUVMLE1BQU1NLEtBQUssQ0FBQyxDQUFDO3dCQUFFQyxLQUFJO3dCQUFHQyxPQUFNO3dCQUFNQyxRQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt4RjtBQUVPLE1BQU1DLFNBQVM7SUFDcEJDLEtBQUs7UUFDSEMsWUFBWTtZQUNWQyxXQUFXO1FBQ2I7SUFDRjtBQUNGLEVBQUM7QUFFRCxpRUFBZWhCLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3Rpb24vLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcbi8vIGltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoICgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL3Nob3dzJyk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBpbWFnZV9ibG9iIDogZGF0YSB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBnZXRkYXRhID0gKHsgaW1hZ2VfYmxvYiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtpbWFnZV9ibG9iLm1hcCggZGF0YXMgPT4gKFxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxoMj57IGRhdGFzLmRhdGV0aW1lIH08L2gyPlxyXG4gICAgICAgICAgPGltZyBzcmM9eyBgZGF0YTppbWFnZS9wbmc7YmFzZTY0LCAke2RhdGFzLmltYWdlfWB9IGFsdD1cIlwiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCI+PC9pbWc+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgYXBpOiB7XHJcbiAgICBib2R5UGFyc2VyOiB7XHJcbiAgICAgIHNpemVMaW1pdDogJzRtYicsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldGRhdGE7Il0sIm5hbWVzIjpbImdldFN0YXRpY1Byb3BzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInByb3BzIiwiaW1hZ2VfYmxvYiIsImdldGRhdGEiLCJkaXYiLCJtYXAiLCJkYXRhcyIsInVsIiwiaDIiLCJkYXRldGltZSIsImltZyIsInNyYyIsImltYWdlIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIiwic2l6ZUxpbWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();