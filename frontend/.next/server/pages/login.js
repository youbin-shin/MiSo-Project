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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./components/common/Button/Button.styled.ts":
/*!***************************************************!*\
  !*** ./components/common/Button/Button.styled.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst colorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__.css`\n  ${({ color , outline , isTransparent  })=>{\n    if (outline) return styled_components__WEBPACK_IMPORTED_MODULE_0__.css`\n        border: 1px solid ${({ theme  })=>theme.colors[color ?? \"gray30\"]};\n        background: ${isTransparent ? \"transparent\" : \"white\"};\n        color: ${({ theme  })=>color ?? theme.colors.gray05};\n        &:not(:disabled):hover {\n          background: ${({ theme  })=>color ?? theme.colors.gray10};\n          color: white;\n          /* filter: brightness(${color ? \"200%\" : \"100%\"}); */\n        }\n        &:not(:disabled):active {\n          background: ${({ theme  })=>color ?? theme.colors.gray10};\n          /* filter: brightness(${color ? \"200%\" : \"100%\"}); */\n        }\n        &:disabled {\n          color: ${({ theme  })=>color ?? theme.colors.gray05};\n          border: 1px solid ${({ theme  })=>color ?? theme.colors.gray30};\n          opacity: 0.5;\n        }\n      `;\n    return styled_components__WEBPACK_IMPORTED_MODULE_0__.css`\n      border: none;\n      background: ${({ theme  })=>color ?? theme.colors.black};\n      color: white;\n      &:not(:disabled):hover {\n        background: ${({ theme  })=>color ?? theme.colors.black};\n        filter: brightness(${color ? \"90%\" : \"100%\"});\n      }\n      &:not(:disabled):active {\n        background: ${({ theme  })=>color ?? theme.colors.black};\n        filter: brightness(${color ? \"80%\" : \"100%\"});\n      }\n      &:disabled {\n        background-color: ${({ theme  })=>theme.colors.black};\n      }\n    `;\n}}\n`;\nconst fullWidthStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.css`\n  ${({ fullWidth  })=>fullWidth && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`\n      width: 100%;\n      justify-content: center;\n    `}\n`;\nconst Button = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`\n  ${({ theme  })=>theme.flexRowSet()};\n  gap: 0.4rem;\n  width: max-content;\n  padding: 1rem;\n  border-radius: 30px;\n  ${({ theme  })=>theme.textSet(\"subTitle\")};\n  font-weight: 600;\n  outline: none;\n  word-break: break-all;\n  -webkit-tap-highlight-color: transparent;\n  &:disabled {\n    cursor: not-allowed !important;\n  }\n\n  ${fullWidthStyle}\n  ${colorStyles}\n\n  & > span {\n    & + p {\n      ${({ theme  })=>theme.marginSet(\"left\", \"2px\")};\n    }\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9CdXR0b24vQnV0dG9uLnN0eWxlZC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0Q7QUFnQmhELE1BQU1FLGNBQWNELGtEQUFnQixDQUFDO0VBQ25DLEVBQUUsQ0FBQyxFQUFFRSxNQUFLLEVBQUVDLFFBQU8sRUFBRUMsY0FBYSxFQUFFLEdBQUs7SUFDdkMsSUFBSUQsU0FDRixPQUFPSCxrREFBRyxDQUFDOzBCQUNTLEVBQUUsQ0FBQyxFQUFFSyxNQUFLLEVBQUUsR0FBS0EsTUFBTUMsTUFBTSxDQUFFSixTQUFTLFNBQXFCLENBQUM7b0JBQ3BFLEVBQUVFLGdCQUFnQixnQkFBZ0IsT0FBTyxDQUFDO2VBQy9DLEVBQUUsQ0FBQyxFQUFFQyxNQUFLLEVBQUUsR0FBS0gsU0FBU0csTUFBTUMsTUFBTSxDQUFDQyxNQUFNLENBQUM7O3NCQUV2QyxFQUFFLENBQUMsRUFBRUYsTUFBSyxFQUFFLEdBQUtILFNBQVNHLE1BQU1DLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDOztnQ0FFcEMsRUFBRU4sUUFBUSxTQUFTLE1BQU0sQ0FBQzs7O3NCQUdwQyxFQUFFLENBQUMsRUFBRUcsTUFBSyxFQUFFLEdBQUtILFNBQVNHLE1BQU1DLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDO2dDQUNwQyxFQUFFTixRQUFRLFNBQVMsTUFBTSxDQUFDOzs7aUJBR3pDLEVBQUUsQ0FBQyxFQUFFRyxNQUFLLEVBQUUsR0FBS0gsU0FBU0csTUFBTUMsTUFBTSxDQUFDQyxNQUFNLENBQUM7NEJBQ25DLEVBQUUsQ0FBQyxFQUFFRixNQUFLLEVBQUUsR0FBS0gsU0FBU0csTUFBTUMsTUFBTSxDQUFDRyxNQUFNLENBQUM7OztNQUdwRSxDQUFDO0lBRUgsT0FBT1Qsa0RBQUcsQ0FBQzs7a0JBRUcsRUFBRSxDQUFDLEVBQUVLLE1BQUssRUFBRSxHQUFLSCxTQUFTRyxNQUFNQyxNQUFNLENBQUNJLEtBQUssQ0FBQzs7O29CQUczQyxFQUFFLENBQUMsRUFBRUwsTUFBSyxFQUFFLEdBQUtILFNBQVNHLE1BQU1DLE1BQU0sQ0FBQ0ksS0FBSyxDQUFDOzJCQUN0QyxFQUFFUixRQUFRLFFBQVEsTUFBTSxDQUFDOzs7b0JBR2hDLEVBQUUsQ0FBQyxFQUFFRyxNQUFLLEVBQUUsR0FBS0gsU0FBU0csTUFBTUMsTUFBTSxDQUFDSSxLQUFLLENBQUM7MkJBQ3RDLEVBQUVSLFFBQVEsUUFBUSxNQUFNLENBQUM7OzswQkFHMUIsRUFBRSxDQUFDLEVBQUVHLE1BQUssRUFBRSxHQUFLQSxNQUFNQyxNQUFNLENBQUNJLEtBQUssQ0FBQzs7SUFFMUQsQ0FBQztBQUNILEVBQUU7QUFDSixDQUFDO0FBRUQsTUFBTUMsaUJBQWlCWCxrREFBZ0IsQ0FBQztFQUN0QyxFQUFFLENBQUMsRUFBRVksVUFBUyxFQUFFLEdBQ2RBLGFBQ0FaLGtEQUFHLENBQUM7OztJQUdKLENBQUMsQ0FBQztBQUNOLENBQUM7QUFFTSxNQUFNYSxTQUFTZCxpRUFBYSxDQUFjO0VBQy9DLEVBQUUsQ0FBQyxFQUFFTSxNQUFLLEVBQUUsR0FBS0EsTUFBTVUsVUFBVSxHQUFHOzs7OztFQUtwQyxFQUFFLENBQUMsRUFBRVYsTUFBSyxFQUFFLEdBQUtBLE1BQU1XLE9BQU8sQ0FBQyxZQUFZOzs7Ozs7Ozs7RUFTM0MsRUFBRUwsZUFBZTtFQUNqQixFQUFFVixZQUFZOzs7O01BSVYsRUFBRSxDQUFDLEVBQUVJLE1BQUssRUFBRSxHQUFLQSxNQUFNWSxTQUFTLENBQUMsUUFBUSxPQUFPOzs7QUFHdEQsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0dGVyLy4vY29tcG9uZW50cy9jb21tb24vQnV0dG9uL0J1dHRvbi5zdHlsZWQudHM/NGY0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IFRDb2xvcnMgfSBmcm9tICdAL3R5cGVzL3RoZW1lL3BhbGV0dGUnO1xuXG5leHBvcnQgdHlwZSBCdXR0b25Qcm9wcyA9IHtcbiAgLyoqIOuyhO2KvCDsg4nsg4EgKi9cbiAgY29sb3I/OiBzdHJpbmc7XG4gIC8qKiDsoITssrQg64SI67mEIO2ZnOyEse2ZlCDsl6zrtoAgKi9cbiAgZnVsbFdpZHRoPzogYm9vbGVhbjtcbiAgLyoqIOu5hO2ZnOyEse2ZlCDsl6zrtoAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAvKiog7JWE7JuD65287J24IOyXrOu2gCAqL1xuICBvdXRsaW5lPzogYm9vbGVhbjtcbiAgLyoqIOuwsOqyveyDiSDsoIHsmqkg7Jes67aAICovXG4gIGlzVHJhbnNwYXJlbnQ/OiBib29sZWFuO1xufTtcblxuY29uc3QgY29sb3JTdHlsZXMgPSBjc3M8QnV0dG9uUHJvcHM+YFxuICAkeyh7IGNvbG9yLCBvdXRsaW5lLCBpc1RyYW5zcGFyZW50IH0pID0+IHtcbiAgICBpZiAob3V0bGluZSlcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzWyhjb2xvciA/PyAnZ3JheTMwJykgYXMgVENvbG9yc119O1xuICAgICAgICBiYWNrZ3JvdW5kOiAke2lzVHJhbnNwYXJlbnQgPyAndHJhbnNwYXJlbnQnIDogJ3doaXRlJ307XG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IGNvbG9yID8/IHRoZW1lLmNvbG9ycy5ncmF5MDV9O1xuICAgICAgICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IGNvbG9yID8/IHRoZW1lLmNvbG9ycy5ncmF5MTB9O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAvKiBmaWx0ZXI6IGJyaWdodG5lc3MoJHtjb2xvciA/ICcyMDAlJyA6ICcxMDAlJ30pOyAqL1xuICAgICAgICB9XG4gICAgICAgICY6bm90KDpkaXNhYmxlZCk6YWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IGNvbG9yID8/IHRoZW1lLmNvbG9ycy5ncmF5MTB9O1xuICAgICAgICAgIC8qIGZpbHRlcjogYnJpZ2h0bmVzcygke2NvbG9yID8gJzIwMCUnIDogJzEwMCUnfSk7ICovXG4gICAgICAgIH1cbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gY29sb3IgPz8gdGhlbWUuY29sb3JzLmdyYXkwNX07XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiBjb2xvciA/PyB0aGVtZS5jb2xvcnMuZ3JheTMwfTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIH1cbiAgICAgIGA7XG5cbiAgICByZXR1cm4gY3NzYFxuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiBjb2xvciA/PyB0aGVtZS5jb2xvcnMuYmxhY2t9O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gY29sb3IgPz8gdGhlbWUuY29sb3JzLmJsYWNrfTtcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKCR7Y29sb3IgPyAnOTAlJyA6ICcxMDAlJ30pO1xuICAgICAgfVxuICAgICAgJjpub3QoOmRpc2FibGVkKTphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IGNvbG9yID8/IHRoZW1lLmNvbG9ycy5ibGFja307XG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygke2NvbG9yID8gJzgwJScgOiAnMTAwJSd9KTtcbiAgICAgIH1cbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ibGFja307XG4gICAgICB9XG4gICAgYDtcbiAgfX1cbmA7XG5cbmNvbnN0IGZ1bGxXaWR0aFN0eWxlID0gY3NzPEJ1dHRvblByb3BzPmBcbiAgJHsoeyBmdWxsV2lkdGggfSkgPT5cbiAgICBmdWxsV2lkdGggJiZcbiAgICBjc3NgXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGB9XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbjxCdXR0b25Qcm9wcz5gXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZmxleFJvd1NldCgpfTtcbiAgZ2FwOiAwLjRyZW07XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0U2V0KCdzdWJUaXRsZScpfTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAmOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG4gIH1cblxuICAke2Z1bGxXaWR0aFN0eWxlfVxuICAke2NvbG9yU3R5bGVzfVxuXG4gICYgPiBzcGFuIHtcbiAgICAmICsgcCB7XG4gICAgICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1hcmdpblNldCgnbGVmdCcsICcycHgnKX07XG4gICAgfVxuICB9XG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsImNzcyIsImNvbG9yU3R5bGVzIiwiY29sb3IiLCJvdXRsaW5lIiwiaXNUcmFuc3BhcmVudCIsInRoZW1lIiwiY29sb3JzIiwiZ3JheTA1IiwiZ3JheTEwIiwiZ3JheTMwIiwiYmxhY2siLCJmdWxsV2lkdGhTdHlsZSIsImZ1bGxXaWR0aCIsIkJ1dHRvbiIsImJ1dHRvbiIsImZsZXhSb3dTZXQiLCJ0ZXh0U2V0IiwibWFyZ2luU2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/common/Button/Button.styled.ts\n");

/***/ }),

/***/ "./components/common/Button/Button.tsx":
/*!*********************************************!*\
  !*** ./components/common/Button/Button.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.styled */ \"./components/common/Button/Button.styled.ts\");\n\n\n\nconst Button = ({ children , handleClick , ...rest })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_styled__WEBPACK_IMPORTED_MODULE_2__.Button, {\n        onClick: handleClick,\n        ...rest,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/sol/Desktop/private/voice-letter/frontend/components/common/Button/Button.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9CdXR0b24vQnV0dG9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUF5QztBQUVKO0FBU3JDLE1BQU1FLFNBQVMsQ0FBQyxFQUFFQyxTQUFRLEVBQUVDLFlBQVcsRUFBRSxHQUFHQyxNQUFtQixHQUFLO0lBQ2xFLHFCQUNFLDhEQUFDSixrREFBUTtRQUFDSyxTQUFTRjtRQUFjLEdBQUdDLElBQUk7a0JBQ3JDRjs7Ozs7O0FBR1A7QUFFQSxpRUFBZUQsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xldHRlci8uL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbi9CdXR0b24udHN4PzM3OWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICogYXMgUyBmcm9tICcuL0J1dHRvbi5zdHlsZWQnO1xuXG5pbnRlcmZhY2UgQnV0dG9uUHJvcHMgZXh0ZW5kcyBTLkJ1dHRvblByb3BzIHtcbiAgLyoqIOuyhO2KvCDthY3siqTtirggKi9cbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgLyoqIO2BtOumrSDsi5wg7Zi47Lac65CY64qUIOy9nOuwsSAqL1xuICBoYW5kbGVDbGljaz86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyO1xufVxuXG5jb25zdCBCdXR0b24gPSAoeyBjaGlsZHJlbiwgaGFuZGxlQ2xpY2ssIC4uLnJlc3QgfTogQnV0dG9uUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Uy5CdXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9IHsuLi5yZXN0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1MuQnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUyIsIkJ1dHRvbiIsImNoaWxkcmVuIiwiaGFuZGxlQ2xpY2siLCJyZXN0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/common/Button/Button.tsx\n");

/***/ }),

/***/ "./components/common/Button/index.tsx":
/*!********************************************!*\
  !*** ./components/common/Button/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ \"./components/common/Button/Button.tsx\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9CdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW1DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0dGVyLy4vY29tcG9uZW50cy9jb21tb24vQnV0dG9uL2luZGV4LnRzeD8zNTM4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0J1dHRvbic7XG4iXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/common/Button/index.tsx\n");

/***/ }),

/***/ "./pages/login/index.tsx":
/*!*******************************!*\
  !*** ./pages/login/index.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/common/Button */ \"./components/common/Button/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Login = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleKaKaoLogin = ()=>{\n        window.Kakao.Auth.login({\n            success (authObj) {\n                console.log(authObj);\n                window.localStorage.setItem(\"token\", authObj.access_token);\n                router.push(\"/\");\n            },\n            fail (err) {\n                console.log(err);\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            outline: true,\n            color: \"black\",\n            fullWidth: true,\n            handleClick: handleKaKaoLogin,\n            children: \"카카오로 3초만에 로그인하기\"\n        }, void 0, false, {\n            fileName: \"/Users/sol/Desktop/private/voice-letter/frontend/pages/login/index.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/sol/Desktop/private/voice-letter/frontend/pages/login/index.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFvRDtBQUMxQjtBQUNjO0FBRXhDLE1BQU1HLFFBQVEsSUFBTTtJQUNsQixNQUFNQyxTQUFTRixzREFBU0E7SUFFeEIsTUFBTUcsbUJBQW1CLElBQU07UUFDN0JDLE9BQU9DLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7WUFDdEJDLFNBQVFDLE9BQVksRUFBRTtnQkFDcEJDLFFBQVFDLEdBQUcsQ0FBQ0Y7Z0JBQ1pMLE9BQU9RLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFNBQVNKLFFBQVFLLFlBQVk7Z0JBQ3pEWixPQUFPYSxJQUFJLENBQUM7WUFDZDtZQUNBQyxNQUFLQyxHQUFRLEVBQUU7Z0JBQ2JQLFFBQVFDLEdBQUcsQ0FBQ007WUFDZDtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUNwQixpRUFBTUE7WUFBQ3FCLE9BQU87WUFBQ0MsT0FBTTtZQUFRQyxTQUFTO1lBQUNDLGFBQWFuQjtzQkFBa0I7Ozs7Ozs7Ozs7O0FBSzdFO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXR0ZXIvLi9wYWdlcy9sb2dpbi9pbmRleC50c3g/YzAxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlS2FLYW9Mb2dpbiA9ICgpID0+IHtcbiAgICB3aW5kb3cuS2FrYW8uQXV0aC5sb2dpbih7XG4gICAgICBzdWNjZXNzKGF1dGhPYmo6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhhdXRoT2JqKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGF1dGhPYmouYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICAgIH0sXG4gICAgICBmYWlsKGVycjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCdXR0b24gb3V0bGluZSBjb2xvcj1cImJsYWNrXCIgZnVsbFdpZHRoIGhhbmRsZUNsaWNrPXtoYW5kbGVLYUthb0xvZ2lufT5cbiAgICAgICAg7Lm07Lm07Jik66GcIDPstIjrp4zsl5Ag66Gc6re47J247ZWY6riwXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIlJlYWN0IiwidXNlUm91dGVyIiwiTG9naW4iLCJyb3V0ZXIiLCJoYW5kbGVLYUthb0xvZ2luIiwid2luZG93IiwiS2FrYW8iLCJBdXRoIiwibG9naW4iLCJzdWNjZXNzIiwiYXV0aE9iaiIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiYWNjZXNzX3Rva2VuIiwicHVzaCIsImZhaWwiLCJlcnIiLCJkaXYiLCJvdXRsaW5lIiwiY29sb3IiLCJmdWxsV2lkdGgiLCJoYW5kbGVDbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login/index.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login/index.tsx"));
module.exports = __webpack_exports__;

})();