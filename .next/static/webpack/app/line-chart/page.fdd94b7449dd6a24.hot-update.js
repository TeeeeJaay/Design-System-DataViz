"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/line-chart/page",{

/***/ "(app-pages-browser)/./src/app/line-chart/LineChart.tsx":
/*!******************************************!*\
  !*** ./src/app/line-chart/LineChart.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LineChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"(app-pages-browser)/./node_modules/d3/src/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst colorScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleOrdinal(d3__WEBPACK_IMPORTED_MODULE_1__.schemeSet2);\nconst MARGIN = {\n    top: 30,\n    right: 30,\n    bottom: 50,\n    left: 50\n};\nfunction LineChart(param) {\n    let { data, withGridlines, withDecimalTicks } = param;\n    _s();\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [containerWidth, setContainerWidth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [containerHeight, setContainerHeight] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const resizeObserver = new ResizeObserver((entries)=>{\n            for (let entry of entries){\n                setContainerWidth(entry.contentRect.width);\n                setContainerHeight(entry.contentRect.height);\n            }\n        });\n        if (containerRef.current) {\n            resizeObserver.observe(containerRef.current);\n        }\n        return ()=>{\n            if (containerRef.current) {\n                resizeObserver.unobserve(containerRef.current);\n            }\n        };\n    }, [\n        containerRef\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (containerWidth && containerHeight) {\n            drawChart();\n        }\n    }, [\n        data,\n        containerWidth,\n        containerHeight,\n        withGridlines,\n        withDecimalTicks\n    ]);\n    const drawChart = ()=>{\n        d3__WEBPACK_IMPORTED_MODULE_1__.select(containerRef.current).select(\"svg\").remove();\n        const svg = d3__WEBPACK_IMPORTED_MODULE_1__.select(containerRef.current).append(\"svg\").attr(\"width\", containerWidth).attr(\"height\", containerHeight);\n        const boundsWidth = containerWidth - MARGIN.left - MARGIN.right;\n        const boundsHeight = containerHeight - MARGIN.top - MARGIN.bottom;\n        const chart = svg.append(\"g\").attr(\"transform\", \"translate(\".concat(MARGIN.left, \",\").concat(MARGIN.top, \")\"));\n        const maxVal = d3__WEBPACK_IMPORTED_MODULE_1__.max(data, (d)=>d.value * 1.1) || 0;\n        const yScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear().domain([\n            0,\n            maxVal\n        ]).range([\n            boundsHeight,\n            0\n        ]);\n        let tickValues;\n        if (withDecimalTicks) {\n            tickValues = d3__WEBPACK_IMPORTED_MODULE_1__.range(0, Math.floor(maxVal) + 1, 0.1); // Finere trin for decimal ticks\n        } else {\n            tickValues = d3__WEBPACK_IMPORTED_MODULE_1__.range(0, Math.floor(maxVal) + 1, 1); // Kun hele tal\n        }\n        const yAxis = chart.append(\"g\").call(d3__WEBPACK_IMPORTED_MODULE_1__.axisLeft(yScale).tickValues(tickValues));\n        if (withGridlines) {\n            yAxis.call((g)=>g.selectAll(\".tick line\").clone().attr(\"x2\", boundsWidth).attr(\"stroke-opacity\", 0.1));\n        }\n        const xScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleBand().domain(data.map((d)=>d.name)).range([\n            0,\n            boundsWidth\n        ]).padding(0.1);\n        chart.append(\"g\").attr(\"transform\", \"translate(0,\".concat(boundsHeight, \")\")).call(d3__WEBPACK_IMPORTED_MODULE_1__.axisBottom(xScale));\n        const line = d3__WEBPACK_IMPORTED_MODULE_1__.line().x((d)=>xScale(d.name) + xScale.bandwidth() / 2).y((d)=>yScale(d.value));\n        chart.append(\"path\").datum(data).attr(\"fill\", \"none\").attr(\"stroke\", colorScale(\"0\")).attr(\"stroke-width\", 3).attr(\"d\", line);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        style: {\n            width: \"100%\",\n            height: \"100%\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/tinamariejensen/Documents/code/Design-System-DataViz/src/app/line-chart/LineChart.tsx\",\n        lineNumber: 117,\n        columnNumber: 10\n    }, this);\n}\n_s(LineChart, \"x6dpvV4sUx7VXSu3TcjdiC+U5Kw=\");\n_c = LineChart;\nvar _c;\n$RefreshReg$(_c, \"LineChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGluZS1jaGFydC9MaW5lQ2hhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDeUI7QUFDb0M7QUFDbkM7QUFRMUIsTUFBTUssYUFBYUwsNENBQWUsQ0FBQ0EsMENBQWE7QUFDaEQsTUFBTVEsU0FBUztJQUFFQyxLQUFLO0lBQUlDLE9BQU87SUFBSUMsUUFBUTtJQUFJQyxNQUFNO0FBQUc7QUFFM0MsU0FBU0MsVUFBVSxLQUlqQjtRQUppQixFQUNoQ0MsSUFBSSxFQUNKQyxhQUFhLEVBQ2JDLGdCQUFnQixFQUNELEdBSmlCOztJQUtoQyxNQUFNQyxlQUFlZCw2Q0FBTUEsQ0FBaUI7SUFDNUMsTUFBTSxDQUFDZSxnQkFBZ0JDLGtCQUFrQixHQUFHakIsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDa0IsaUJBQWlCQyxtQkFBbUIsR0FBR25CLCtDQUFRQSxDQUFDO0lBRXZERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1xQixpQkFBaUIsSUFBSUMsZUFBZSxDQUFDQztZQUN6QyxLQUFLLElBQUlDLFNBQVNELFFBQVM7Z0JBQ3pCTCxrQkFBa0JNLE1BQU1DLFdBQVcsQ0FBQ0MsS0FBSztnQkFDekNOLG1CQUFtQkksTUFBTUMsV0FBVyxDQUFDRSxNQUFNO1lBQzdDO1FBQ0Y7UUFFQSxJQUFJWCxhQUFhWSxPQUFPLEVBQUU7WUFDeEJQLGVBQWVRLE9BQU8sQ0FBQ2IsYUFBYVksT0FBTztRQUM3QztRQUVBLE9BQU87WUFDTCxJQUFJWixhQUFhWSxPQUFPLEVBQUU7Z0JBQ3hCUCxlQUFlUyxTQUFTLENBQUNkLGFBQWFZLE9BQU87WUFDL0M7UUFDRjtJQUNGLEdBQUc7UUFBQ1o7S0FBYTtJQUVqQmhCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSWlCLGtCQUFrQkUsaUJBQWlCO1lBQ3JDWTtRQUNGO0lBQ0YsR0FBRztRQUFDbEI7UUFBTUk7UUFBZ0JFO1FBQWlCTDtRQUFlQztLQUFpQjtJQUUzRSxNQUFNZ0IsWUFBWTtRQUNoQmhDLHNDQUFTLENBQUNpQixhQUFhWSxPQUFPLEVBQUVJLE1BQU0sQ0FBQyxPQUFPQyxNQUFNO1FBRXBELE1BQU1DLE1BQU1uQyxzQ0FDSCxDQUFDaUIsYUFBYVksT0FBTyxFQUMzQk8sTUFBTSxDQUFDLE9BQ1BDLElBQUksQ0FBQyxTQUFTbkIsZ0JBQ2RtQixJQUFJLENBQUMsVUFBVWpCO1FBRWxCLE1BQU1rQixjQUFjcEIsaUJBQWlCVixPQUFPSSxJQUFJLEdBQUdKLE9BQU9FLEtBQUs7UUFDL0QsTUFBTTZCLGVBQWVuQixrQkFBa0JaLE9BQU9DLEdBQUcsR0FBR0QsT0FBT0csTUFBTTtRQUVqRSxNQUFNNkIsUUFBUUwsSUFDWEMsTUFBTSxDQUFDLEtBQ1BDLElBQUksQ0FBQyxhQUFhLGFBQTRCN0IsT0FBZkEsT0FBT0ksSUFBSSxFQUFDLEtBQWMsT0FBWEosT0FBT0MsR0FBRyxFQUFDO1FBRTVELE1BQU1nQyxTQUFTekMsbUNBQU0sQ0FBQ2MsTUFBTSxDQUFDNkIsSUFBTUEsRUFBRUMsS0FBSyxHQUFHLFFBQVE7UUFDckQsTUFBTUMsU0FBUzdDLDJDQUNELEdBQ1grQyxNQUFNLENBQUM7WUFBQztZQUFHTjtTQUFPLEVBQ2xCTyxLQUFLLENBQUM7WUFBQ1Q7WUFBYztTQUFFO1FBRTFCLElBQUlVO1FBQ0osSUFBSWpDLGtCQUFrQjtZQUNwQmlDLGFBQWFqRCxxQ0FBUSxDQUFDLEdBQUdrRCxLQUFLQyxLQUFLLENBQUNWLFVBQVUsR0FBRyxNQUFNLGdDQUFnQztRQUN6RixPQUFPO1lBQ0xRLGFBQWFqRCxxQ0FBUSxDQUFDLEdBQUdrRCxLQUFLQyxLQUFLLENBQUNWLFVBQVUsR0FBRyxJQUFJLGVBQWU7UUFDdEU7UUFFQSxNQUFNVyxRQUFRWixNQUNYSixNQUFNLENBQUMsS0FDUGlCLElBQUksQ0FBQ3JELHdDQUFXLENBQUM2QyxRQUFRSSxVQUFVLENBQUNBO1FBRXZDLElBQUlsQyxlQUFlO1lBQ2pCcUMsTUFBTUMsSUFBSSxDQUFDLENBQUNFLElBQ1ZBLEVBQ0dDLFNBQVMsQ0FBQyxjQUNWQyxLQUFLLEdBQ0xwQixJQUFJLENBQUMsTUFBTUMsYUFDWEQsSUFBSSxDQUFDLGtCQUFrQjtRQUU5QjtRQUVBLE1BQU1xQixTQUFTMUQseUNBQ0gsR0FDVCtDLE1BQU0sQ0FBQ2pDLEtBQUs4QyxHQUFHLENBQUMsQ0FBQ2pCLElBQU1BLEVBQUVrQixJQUFJLEdBQzdCYixLQUFLLENBQUM7WUFBQztZQUFHVjtTQUFZLEVBQ3RCd0IsT0FBTyxDQUFDO1FBRVh0QixNQUNHSixNQUFNLENBQUMsS0FDUEMsSUFBSSxDQUFDLGFBQWEsZUFBNEIsT0FBYkUsY0FBYSxNQUM5Q2MsSUFBSSxDQUFDckQsMENBQWEsQ0FBQzBEO1FBRXRCLE1BQU1NLE9BQU9oRSxvQ0FDTixHQUNKaUUsQ0FBQyxDQUFDLENBQUN0QixJQUFNZSxPQUFPZixFQUFFa0IsSUFBSSxJQUFLSCxPQUFPUSxTQUFTLEtBQUssR0FDaERDLENBQUMsQ0FBQyxDQUFDeEIsSUFBTUUsT0FBT0YsRUFBRUMsS0FBSztRQUUxQkosTUFDR0osTUFBTSxDQUFDLFFBQ1BnQyxLQUFLLENBQUN0RCxNQUNOdUIsSUFBSSxDQUFDLFFBQVEsUUFDYkEsSUFBSSxDQUFDLFVBQVVoQyxXQUFXLE1BQzFCZ0MsSUFBSSxDQUFDLGdCQUFnQixHQUNyQkEsSUFBSSxDQUFDLEtBQUsyQjtJQUNmO0lBRUEscUJBQU8sOERBQUNLO1FBQUlDLEtBQUtyRDtRQUFjc0QsT0FBTztZQUFFNUMsT0FBTztZQUFRQyxRQUFRO1FBQU87Ozs7OztBQUN4RTtHQXZHd0JmO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbGluZS1jaGFydC9MaW5lQ2hhcnQudHN4PzFmNTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbXlkYXRhdHlwZSB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCB7IHVzZU1lbW8sIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIExpbmVDaGFydFByb3BzID0ge1xuICB3aXRoR3JpZGxpbmVzPzogYm9vbGVhbjtcbiAgd2l0aERlY2ltYWxUaWNrcz86IGJvb2xlYW47XG4gIGRhdGE6IHsgbmFtZTogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH1bXTtcbn07XG5cbmNvbnN0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lU2V0Mik7XG5jb25zdCBNQVJHSU4gPSB7IHRvcDogMzAsIHJpZ2h0OiAzMCwgYm90dG9tOiA1MCwgbGVmdDogNTAgfTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGluZUNoYXJ0KHtcbiAgZGF0YSxcbiAgd2l0aEdyaWRsaW5lcyxcbiAgd2l0aERlY2ltYWxUaWNrcyxcbn06IExpbmVDaGFydFByb3BzKSB7XG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFtjb250YWluZXJXaWR0aCwgc2V0Q29udGFpbmVyV2lkdGhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtjb250YWluZXJIZWlnaHQsIHNldENvbnRhaW5lckhlaWdodF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICBmb3IgKGxldCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgIHNldENvbnRhaW5lcldpZHRoKGVudHJ5LmNvbnRlbnRSZWN0LndpZHRoKTtcbiAgICAgICAgc2V0Q29udGFpbmVySGVpZ2h0KGVudHJ5LmNvbnRlbnRSZWN0LmhlaWdodCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY29udGFpbmVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoY29udGFpbmVyUmVmLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoY29udGFpbmVyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgcmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKGNvbnRhaW5lclJlZi5jdXJyZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbY29udGFpbmVyUmVmXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29udGFpbmVyV2lkdGggJiYgY29udGFpbmVySGVpZ2h0KSB7XG4gICAgICBkcmF3Q2hhcnQoKTtcbiAgICB9XG4gIH0sIFtkYXRhLCBjb250YWluZXJXaWR0aCwgY29udGFpbmVySGVpZ2h0LCB3aXRoR3JpZGxpbmVzLCB3aXRoRGVjaW1hbFRpY2tzXSk7XG5cbiAgY29uc3QgZHJhd0NoYXJ0ID0gKCkgPT4ge1xuICAgIGQzLnNlbGVjdChjb250YWluZXJSZWYuY3VycmVudCkuc2VsZWN0KFwic3ZnXCIpLnJlbW92ZSgpO1xuXG4gICAgY29uc3Qgc3ZnID0gZDNcbiAgICAgIC5zZWxlY3QoY29udGFpbmVyUmVmLmN1cnJlbnQpXG4gICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIGNvbnRhaW5lcldpZHRoKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgY29udGFpbmVySGVpZ2h0KTtcblxuICAgIGNvbnN0IGJvdW5kc1dpZHRoID0gY29udGFpbmVyV2lkdGggLSBNQVJHSU4ubGVmdCAtIE1BUkdJTi5yaWdodDtcbiAgICBjb25zdCBib3VuZHNIZWlnaHQgPSBjb250YWluZXJIZWlnaHQgLSBNQVJHSU4udG9wIC0gTUFSR0lOLmJvdHRvbTtcblxuICAgIGNvbnN0IGNoYXJ0ID0gc3ZnXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke01BUkdJTi5sZWZ0fSwke01BUkdJTi50b3B9KWApO1xuXG4gICAgY29uc3QgbWF4VmFsID0gZDMubWF4KGRhdGEsIChkKSA9PiBkLnZhbHVlICogMS4xKSB8fCAwO1xuICAgIGNvbnN0IHlTY2FsZSA9IGQzXG4gICAgICAuc2NhbGVMaW5lYXIoKVxuICAgICAgLmRvbWFpbihbMCwgbWF4VmFsXSlcbiAgICAgIC5yYW5nZShbYm91bmRzSGVpZ2h0LCAwXSk7XG5cbiAgICBsZXQgdGlja1ZhbHVlcztcbiAgICBpZiAod2l0aERlY2ltYWxUaWNrcykge1xuICAgICAgdGlja1ZhbHVlcyA9IGQzLnJhbmdlKDAsIE1hdGguZmxvb3IobWF4VmFsKSArIDEsIDAuMSk7IC8vIEZpbmVyZSB0cmluIGZvciBkZWNpbWFsIHRpY2tzXG4gICAgfSBlbHNlIHtcbiAgICAgIHRpY2tWYWx1ZXMgPSBkMy5yYW5nZSgwLCBNYXRoLmZsb29yKG1heFZhbCkgKyAxLCAxKTsgLy8gS3VuIGhlbGUgdGFsXG4gICAgfVxuXG4gICAgY29uc3QgeUF4aXMgPSBjaGFydFxuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHlTY2FsZSkudGlja1ZhbHVlcyh0aWNrVmFsdWVzKSk7XG5cbiAgICBpZiAod2l0aEdyaWRsaW5lcykge1xuICAgICAgeUF4aXMuY2FsbCgoZykgPT5cbiAgICAgICAgZ1xuICAgICAgICAgIC5zZWxlY3RBbGwoXCIudGljayBsaW5lXCIpXG4gICAgICAgICAgLmNsb25lKClcbiAgICAgICAgICAuYXR0cihcIngyXCIsIGJvdW5kc1dpZHRoKVxuICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLW9wYWNpdHlcIiwgMC4xKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCB4U2NhbGUgPSBkM1xuICAgICAgLnNjYWxlQmFuZCgpXG4gICAgICAuZG9tYWluKGRhdGEubWFwKChkKSA9PiBkLm5hbWUpKVxuICAgICAgLnJhbmdlKFswLCBib3VuZHNXaWR0aF0pXG4gICAgICAucGFkZGluZygwLjEpO1xuXG4gICAgY2hhcnRcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsJHtib3VuZHNIZWlnaHR9KWApXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHhTY2FsZSkpO1xuXG4gICAgY29uc3QgbGluZSA9IGQzXG4gICAgICAubGluZTxteWRhdGF0eXBlPigpXG4gICAgICAueCgoZCkgPT4geFNjYWxlKGQubmFtZSkhICsgeFNjYWxlLmJhbmR3aWR0aCgpIC8gMilcbiAgICAgIC55KChkKSA9PiB5U2NhbGUoZC52YWx1ZSkpO1xuXG4gICAgY2hhcnRcbiAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuZGF0dW0oZGF0YSlcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIGNvbG9yU2NhbGUoXCIwXCIpKVxuICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMylcbiAgICAgIC5hdHRyKFwiZFwiLCBsaW5lKTtcbiAgfTtcblxuICByZXR1cm4gPGRpdiByZWY9e2NvbnRhaW5lclJlZn0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IC8+O1xufVxuIl0sIm5hbWVzIjpbImQzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJSZWFjdCIsImNvbG9yU2NhbGUiLCJzY2FsZU9yZGluYWwiLCJzY2hlbWVTZXQyIiwiTUFSR0lOIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiTGluZUNoYXJ0IiwiZGF0YSIsIndpdGhHcmlkbGluZXMiLCJ3aXRoRGVjaW1hbFRpY2tzIiwiY29udGFpbmVyUmVmIiwiY29udGFpbmVyV2lkdGgiLCJzZXRDb250YWluZXJXaWR0aCIsImNvbnRhaW5lckhlaWdodCIsInNldENvbnRhaW5lckhlaWdodCIsInJlc2l6ZU9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjb250ZW50UmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiY3VycmVudCIsIm9ic2VydmUiLCJ1bm9ic2VydmUiLCJkcmF3Q2hhcnQiLCJzZWxlY3QiLCJyZW1vdmUiLCJzdmciLCJhcHBlbmQiLCJhdHRyIiwiYm91bmRzV2lkdGgiLCJib3VuZHNIZWlnaHQiLCJjaGFydCIsIm1heFZhbCIsIm1heCIsImQiLCJ2YWx1ZSIsInlTY2FsZSIsInNjYWxlTGluZWFyIiwiZG9tYWluIiwicmFuZ2UiLCJ0aWNrVmFsdWVzIiwiTWF0aCIsImZsb29yIiwieUF4aXMiLCJjYWxsIiwiYXhpc0xlZnQiLCJnIiwic2VsZWN0QWxsIiwiY2xvbmUiLCJ4U2NhbGUiLCJzY2FsZUJhbmQiLCJtYXAiLCJuYW1lIiwicGFkZGluZyIsImF4aXNCb3R0b20iLCJsaW5lIiwieCIsImJhbmR3aWR0aCIsInkiLCJkYXR1bSIsImRpdiIsInJlZiIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/line-chart/LineChart.tsx\n"));

/***/ })

});