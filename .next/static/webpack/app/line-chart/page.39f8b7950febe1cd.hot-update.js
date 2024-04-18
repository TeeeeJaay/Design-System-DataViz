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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LineChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"(app-pages-browser)/./node_modules/d3/src/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst colorScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleOrdinal(d3__WEBPACK_IMPORTED_MODULE_1__.schemeSet2);\nfunction LineChart(param) {\n    let { data, withHover, withGridlines, withCurveLine, withDots } = param;\n    _s();\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const tooltipRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [containerWidth, setContainerWidth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(800);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const updateWidth = ()=>{\n            if (containerRef.current) {\n                setContainerWidth(containerRef.current.getBoundingClientRect().width);\n            }\n        };\n        updateWidth();\n        window.addEventListener(\"resize\", updateWidth);\n        return ()=>window.removeEventListener(\"resize\", updateWidth);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!svgRef.current) {\n            svgRef.current = d3__WEBPACK_IMPORTED_MODULE_1__.select(containerRef.current).append(\"svg\").node();\n        }\n        if (!tooltipRef.current) {\n            tooltipRef.current = d3__WEBPACK_IMPORTED_MODULE_1__.select(containerRef.current).append(\"div\").classed(\"absolute hidden p-3 bg-white bg-opacity-80 border rounded pointer-events-none text-sm\", true).node();\n        }\n        const svg = d3__WEBPACK_IMPORTED_MODULE_1__.select(svgRef.current);\n        const tooltip = d3__WEBPACK_IMPORTED_MODULE_1__.select(tooltipRef.current);\n        svg.selectAll(\"*\").remove();\n        const margin = {\n            top: 20,\n            right: 20,\n            bottom: 30,\n            left: 40\n        };\n        const width = containerWidth - margin.left - margin.right;\n        const height = 400 - margin.top - margin.bottom;\n        svg.attr(\"width\", width + margin.left + margin.right).attr(\"height\", height + margin.top + margin.bottom);\n        const g = svg.append(\"g\").attr(\"transform\", \"translate(\".concat(margin.left, \",\").concat(margin.top, \")\"));\n        const x = d3__WEBPACK_IMPORTED_MODULE_1__.scalePoint().range([\n            0,\n            width\n        ]).domain(data.map((d)=>d.name));\n        const y = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear().range([\n            height,\n            0\n        ]).domain([\n            0,\n            d3__WEBPACK_IMPORTED_MODULE_1__.max(data, (d)=>d.value * 1.2)\n        ]);\n        if (withGridlines) {\n            const yAxisTicks = y.ticks().slice(1);\n            g.selectAll(\".grid-line\").data(yAxisTicks, (d)=>d).enter().append(\"line\").attr(\"class\", \"grid-line\").attr(\"x1\", 0).attr(\"x2\", width).attr(\"y1\", (d)=>y(d)).attr(\"y2\", (d)=>y(d)).attr(\"stroke\", \"#ccc\");\n        }\n        const line = d3__WEBPACK_IMPORTED_MODULE_1__.line().x((d)=>x(d.name)).y((d)=>y(d.value));\n        if (withCurveLine) {\n            line.curve(d3__WEBPACK_IMPORTED_MODULE_1__.curveMonotoneX); // This makes the line smoother\n        }\n        g.append(\"path\").datum(data).attr(\"fill\", \"none\").attr(\"stroke\", colorScale(\"1\")).attr(\"stroke-width\", 2).attr(\"d\", line);\n        g.append(\"g\").attr(\"transform\", \"translate(0,\".concat(height, \")\")).call(d3__WEBPACK_IMPORTED_MODULE_1__.axisBottom(x));\n        g.append(\"path\").datum(data).attr(\"fill\", \"none\").attr(\"stroke\", colorScale(\"1\")).attr(\"stroke-width\", 3).attr(\"d\", line);\n        // Tilføjer cirkler på hvert datapunkt\n        if (withDots) {\n            g.selectAll(\".dot\").data(data).enter().append(\"circle\").attr(\"class\", \"dot\").attr(\"cx\", (d)=>x(d.name)).attr(\"cy\", (d)=>y(d.value)).attr(\"r\", 5).attr(\"fill\", colorScale(\"1\")).on(\"mouseover\", function(event, d) {\n                d3__WEBPACK_IMPORTED_MODULE_1__.select(this).classed(\"stroke-2\", true);\n                tooltip.html(\"<strong>\".concat(d.name, \"</strong>: \").concat(d.value)).classed(\"hidden\", false).style(\"top\", \"\".concat(event.pageY - 10, \"px\")).style(\"left\", \"\".concat(event.pageX + 10, \"px\"));\n            })/*     .on(\"mousemove\", function (event) {\n          tooltip\n            .style(\"top\", `${event.pageY - 10}px`)\n            .style(\"left\", `${event.pageX + 10}px`);\n        }) */ .on(\"mouseout\", function() {\n                tooltip.classed(\"hidden\", true);\n            });\n        }\n        g.append(\"g\").call(d3__WEBPACK_IMPORTED_MODULE_1__.axisLeft(y));\n    }, [\n        data,\n        withGridlines,\n        withCurveLine,\n        containerWidth,\n        withDots,\n        withHover\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        style: {\n            width: \"100%\",\n            height: \"100%\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/tinamariejensen/Documents/code/Design-System-DataViz/src/app/line-chart/LineChart.tsx\",\n        lineNumber: 152,\n        columnNumber: 10\n    }, this);\n}\n_s(LineChart, \"lX1xu9hjUyX1kiRHNnPYsz6apCs=\");\n_c = LineChart;\nvar _c;\n$RefreshReg$(_c, \"LineChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGluZS1jaGFydC9MaW5lQ2hhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFDa0M7QUFVM0QsTUFBTUssYUFBYUwsNENBQWUsQ0FBQ0EsMENBQWE7QUFFakMsU0FBU1EsVUFBVSxLQU1qQjtRQU5pQixFQUNoQ0MsSUFBSSxFQUNKQyxTQUFTLEVBQ1RDLGFBQWEsRUFDYkMsYUFBYSxFQUNiQyxRQUFRLEVBQ08sR0FOaUI7O0lBT2hDLE1BQU1DLGVBQWVWLDZDQUFNQSxDQUFpQjtJQUM1QyxNQUFNVyxTQUFTWCw2Q0FBTUEsQ0FBdUI7SUFDNUMsTUFBTVksYUFBYVosNkNBQU1BLENBQXdCO0lBQ2pELE1BQU0sQ0FBQ2EsZ0JBQWdCQyxrQkFBa0IsR0FBR2YsK0NBQVFBLENBQVM7SUFFN0RELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWlCLGNBQWM7WUFDbEIsSUFBSUwsYUFBYU0sT0FBTyxFQUFFO2dCQUN4QkYsa0JBQWtCSixhQUFhTSxPQUFPLENBQUNDLHFCQUFxQixHQUFHQyxLQUFLO1lBQ3RFO1FBQ0Y7UUFFQUg7UUFDQUksT0FBT0MsZ0JBQWdCLENBQUMsVUFBVUw7UUFDbEMsT0FBTyxJQUFNSSxPQUFPRSxtQkFBbUIsQ0FBQyxVQUFVTjtJQUNwRCxHQUFHLEVBQUU7SUFFTGpCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxDQUFDYSxPQUFPSyxPQUFPLEVBQUU7WUFDbkJMLE9BQU9LLE9BQU8sR0FBR3BCLHNDQUFTLENBQUNjLGFBQWFNLE9BQU8sRUFBRU8sTUFBTSxDQUFDLE9BQU9DLElBQUk7UUFDckU7UUFDQSxJQUFJLENBQUNaLFdBQVdJLE9BQU8sRUFBRTtZQUN2QkosV0FBV0ksT0FBTyxHQUFHcEIsc0NBQ1osQ0FBQ2MsYUFBYU0sT0FBTyxFQUMzQk8sTUFBTSxDQUFDLE9BQ1BFLE9BQU8sQ0FDTix5RkFDQSxNQUVERCxJQUFJO1FBQ1Q7UUFFQSxNQUFNRSxNQUFNOUIsc0NBQVMsQ0FB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RUFBRUMsSUFBSSxHQUMxQlIsSUFBSSxDQUFDLE1BQU0sQ0FBQ08sSUFBTUUsRUFBRUYsRUFBRUssS0FBSyxHQUMzQlosSUFBSSxDQUFDLEtBQUssR0FDVkEsSUFBSSxDQUFDLFFBQVFuQyxXQUFXLE1BQ3hCMEQsRUFBRSxDQUFDLGFBQWEsU0FBVUMsS0FBSyxFQUFFakIsQ0FBQztnQkFDakMvQyxzQ0FBUyxDQUFDLElBQUksRUFBRTZCLE9BQU8sQ0FBQyxZQUFZO2dCQUNwQ0UsUUFDR2tDLElBQUksQ0FBQyxXQUErQmxCLE9BQXBCQSxFQUFFQyxJQUFJLEVBQUMsZUFBcUIsT0FBUkQsRUFBRUssS0FBSyxHQUMzQ3ZCLE9BQU8sQ0FBQyxVQUFVLE9BQ2xCcUMsS0FBSyxDQUFDLE9BQU8sR0FBb0IsT0FBakJGLE1BQU1HLEtBQUssR0FBRyxJQUFHLE9BQ2pDRCxLQUFLLENBQUMsUUFBUSxHQUFvQixPQUFqQkYsTUFBTUksS0FBSyxHQUFHLElBQUc7WUFDdkMsRUFDQTs7OztXQUlHLElBQ0ZMLEVBQUUsQ0FBQyxZQUFZO2dCQUNkaEMsUUFBUUYsT0FBTyxDQUFDLFVBQVU7WUFDNUI7UUFDSjtRQUVBWSxFQUFFZCxNQUFNLENBQUMsS0FBS2tDLElBQUksQ0FBQzdELHdDQUFXLENBQUNpRDtJQUNqQyxHQUFHO1FBQUN4QztRQUFNRTtRQUFlQztRQUFlSztRQUFnQko7UUFBVUg7S0FBVTtJQUU1RSxxQkFBTyw4REFBQzREO1FBQUlDLEtBQUt6RDtRQUFjb0QsT0FBTztZQUFFNUMsT0FBTztZQUFRaUIsUUFBUTtRQUFPOzs7Ozs7QUFDeEU7R0EzSXdCL0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9saW5lLWNoYXJ0L0xpbmVDaGFydC50c3g/MWY1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBMaW5lQ2hhcnRQcm9wcyA9IHtcbiAgZGF0YTogeyBuYW1lOiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfVtdO1xuICB3aXRoSG92ZXI/OiBib29sZWFuO1xuICB3aXRoR3JpZGxpbmVzPzogYm9vbGVhbjtcbiAgd2l0aEN1cnZlTGluZT86IGJvb2xlYW47XG4gIHdpdGhEb3RzPzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lU2V0Mik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpbmVDaGFydCh7XG4gIGRhdGEsXG4gIHdpdGhIb3ZlcixcbiAgd2l0aEdyaWRsaW5lcyxcbiAgd2l0aEN1cnZlTGluZSxcbiAgd2l0aERvdHMsXG59OiBMaW5lQ2hhcnRQcm9wcykge1xuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBzdmdSZWYgPSB1c2VSZWY8U1ZHU1ZHRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICBjb25zdCB0b29sdGlwUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtjb250YWluZXJXaWR0aCwgc2V0Q29udGFpbmVyV2lkdGhdID0gdXNlU3RhdGU8bnVtYmVyPig4MDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlV2lkdGggPSAoKSA9PiB7XG4gICAgICBpZiAoY29udGFpbmVyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgc2V0Q29udGFpbmVyV2lkdGgoY29udGFpbmVyUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB1cGRhdGVXaWR0aCgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZVdpZHRoKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlV2lkdGgpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXN2Z1JlZi5jdXJyZW50KSB7XG4gICAgICBzdmdSZWYuY3VycmVudCA9IGQzLnNlbGVjdChjb250YWluZXJSZWYuY3VycmVudCkuYXBwZW5kKFwic3ZnXCIpLm5vZGUoKTtcbiAgICB9XG4gICAgaWYgKCF0b29sdGlwUmVmLmN1cnJlbnQpIHtcbiAgICAgIHRvb2x0aXBSZWYuY3VycmVudCA9IGQzXG4gICAgICAgIC5zZWxlY3QoY29udGFpbmVyUmVmLmN1cnJlbnQpXG4gICAgICAgIC5hcHBlbmQoXCJkaXZcIilcbiAgICAgICAgLmNsYXNzZWQoXG4gICAgICAgICAgXCJhYnNvbHV0ZSBoaWRkZW4gcC0zIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgYm9yZGVyIHJvdW5kZWQgcG9pbnRlci1ldmVudHMtbm9uZSB0ZXh0LXNtXCIsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApXG4gICAgICAgIC5ub2RlKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KHN2Z1JlZi5jdXJyZW50KTtcbiAgICBjb25zdCB0b29sdGlwID0gZDMuc2VsZWN0KHRvb2x0aXBSZWYuY3VycmVudCk7XG4gICAgc3ZnLnNlbGVjdEFsbChcIipcIikucmVtb3ZlKCk7XG5cbiAgICBjb25zdCBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiAyMCwgYm90dG9tOiAzMCwgbGVmdDogNDAgfTtcbiAgICBjb25zdCB3aWR0aCA9IGNvbnRhaW5lcldpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgY29uc3QgaGVpZ2h0ID0gNDAwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICBzdmdcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKTtcblxuICAgIGNvbnN0IGcgPSBzdmdcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCR7bWFyZ2luLnRvcH0pYCk7XG5cbiAgICBjb25zdCB4ID0gZDNcbiAgICAgIC5zY2FsZVBvaW50KClcbiAgICAgIC5yYW5nZShbMCwgd2lkdGhdKVxuICAgICAgLmRvbWFpbihkYXRhLm1hcCgoZCkgPT4gZC5uYW1lKSk7XG5cbiAgICBjb25zdCB5ID0gZDNcbiAgICAgIC5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoW2hlaWdodCwgMF0pXG4gICAgICAuZG9tYWluKFswLCBkMy5tYXgoZGF0YSwgKGQpID0+IGQudmFsdWUgKiAxLjIpXSk7XG5cbiAgICBpZiAod2l0aEdyaWRsaW5lcykge1xuICAgICAgY29uc3QgeUF4aXNUaWNrcyA9IHkudGlja3MoKS5zbGljZSgxKTtcbiAgICAgIGcuc2VsZWN0QWxsKFwiLmdyaWQtbGluZVwiKVxuICAgICAgICAuZGF0YSh5QXhpc1RpY2tzLCAoZCkgPT4gZCBhcyBudW1iZXIpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJncmlkLWxpbmVcIilcbiAgICAgICAgLmF0dHIoXCJ4MVwiLCAwKVxuICAgICAgICAuYXR0cihcIngyXCIsIHdpZHRoKVxuICAgICAgICAuYXR0cihcInkxXCIsIChkKSA9PiB5KGQpKVxuICAgICAgICAuYXR0cihcInkyXCIsIChkKSA9PiB5KGQpKVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiNjY2NcIik7XG4gICAgfVxuXG4gICAgY29uc3QgbGluZSA9IGQzXG4gICAgICAubGluZTx7IG5hbWU6IHN0cmluZzsgdmFsdWU6IG51bWJlciB9PigpXG4gICAgICAueCgoZCkgPT4geChkLm5hbWUpKVxuICAgICAgLnkoKGQpID0+IHkoZC52YWx1ZSkpO1xuXG4gICAgaWYgKHdpdGhDdXJ2ZUxpbmUpIHtcbiAgICAgIGxpbmUuY3VydmUoZDMuY3VydmVNb25vdG9uZVgpOyAvLyBUaGlzIG1ha2VzIHRoZSBsaW5lIHNtb290aGVyXG4gICAgfVxuXG4gICAgZy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuZGF0dW0oZGF0YSlcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIGNvbG9yU2NhbGUoXCIxXCIpKVxuICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMilcbiAgICAgIC5hdHRyKFwiZFwiLCBsaW5lKTtcblxuICAgIGcuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCR7aGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSk7XG5cbiAgICBnLmFwcGVuZChcInBhdGhcIilcbiAgICAgIC5kYXR1bShkYXRhKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgLmF0dHIoXCJzdHJva2VcIiwgY29sb3JTY2FsZShcIjFcIikpXG4gICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAzKVxuICAgICAgLmF0dHIoXCJkXCIsIGxpbmUpO1xuXG4gICAgLy8gVGlsZsO4amVyIGNpcmtsZXIgcMOlIGh2ZXJ0IGRhdGFwdW5rdFxuICAgIGlmICh3aXRoRG90cykge1xuICAgICAgZy5zZWxlY3RBbGwoXCIuZG90XCIpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImRvdFwiKVxuICAgICAgICAuYXR0cihcImN4XCIsIChkKSA9PiB4KGQubmFtZSkpXG4gICAgICAgIC5hdHRyKFwiY3lcIiwgKGQpID0+IHkoZC52YWx1ZSkpXG4gICAgICAgIC5hdHRyKFwiclwiLCA1KVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgY29sb3JTY2FsZShcIjFcIikpXG4gICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZXZlbnQsIGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykuY2xhc3NlZChcInN0cm9rZS0yXCIsIHRydWUpO1xuICAgICAgICAgIHRvb2x0aXBcbiAgICAgICAgICAgIC5odG1sKGA8c3Ryb25nPiR7ZC5uYW1lfTwvc3Ryb25nPjogJHtkLnZhbHVlfWApXG4gICAgICAgICAgICAuY2xhc3NlZChcImhpZGRlblwiLCBmYWxzZSlcbiAgICAgICAgICAgIC5zdHlsZShcInRvcFwiLCBgJHtldmVudC5wYWdlWSAtIDEwfXB4YClcbiAgICAgICAgICAgIC5zdHlsZShcImxlZnRcIiwgYCR7ZXZlbnQucGFnZVggKyAxMH1weGApO1xuICAgICAgICB9KVxuICAgICAgICAvKiAgICAgLm9uKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHRvb2x0aXBcbiAgICAgICAgICAgIC5zdHlsZShcInRvcFwiLCBgJHtldmVudC5wYWdlWSAtIDEwfXB4YClcbiAgICAgICAgICAgIC5zdHlsZShcImxlZnRcIiwgYCR7ZXZlbnQucGFnZVggKyAxMH1weGApO1xuICAgICAgICB9KSAqL1xuICAgICAgICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdG9vbHRpcC5jbGFzc2VkKFwiaGlkZGVuXCIsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnLmFwcGVuZChcImdcIikuY2FsbChkMy5heGlzTGVmdCh5KSk7XG4gIH0sIFtkYXRhLCB3aXRoR3JpZGxpbmVzLCB3aXRoQ3VydmVMaW5lLCBjb250YWluZXJXaWR0aCwgd2l0aERvdHMsIHdpdGhIb3Zlcl0pO1xuXG4gIHJldHVybiA8ZGl2IHJlZj17Y29udGFpbmVyUmVmfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLz47XG59XG4iXSwibmFtZXMiOlsiZDMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiY29sb3JTY2FsZSIsInNjYWxlT3JkaW5hbCIsInNjaGVtZVNldDIiLCJMaW5lQ2hhcnQiLCJkYXRhIiwid2l0aEhvdmVyIiwid2l0aEdyaWRsaW5lcyIsIndpdGhDdXJ2ZUxpbmUiLCJ3aXRoRG90cyIsImNvbnRhaW5lclJlZiIsInN2Z1JlZiIsInRvb2x0aXBSZWYiLCJjb250YWluZXJXaWR0aCIsInNldENvbnRhaW5lcldpZHRoIiwidXBkYXRlV2lkdGgiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNlbGVjdCIsImFwcGVuZCIsIm5vZGUiLCJjbGFzc2VkIiwic3ZnIiwidG9vbHRpcCIsInNlbGVjdEFsbCIsInJlbW92ZSIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImhlaWdodCIsImF0dHIiLCJnIiwieCIsInNjYWxlUG9pbnQiLCJyYW5nZSIsImRvbWFpbiIsIm1hcCIsImQiLCJuYW1lIiwieSIsInNjYWxlTGluZWFyIiwibWF4IiwidmFsdWUiLCJ5QXhpc1RpY2tzIiwidGlja3MiLCJzbGljZSIsImVudGVyIiwibGluZSIsImN1cnZlIiwiY3VydmVNb25vdG9uZVgiLCJkYXR1bSIsImNhbGwiLCJheGlzQm90dG9tIiwib24iLCJldmVudCIsImh0bWwiLCJzdHlsZSIsInBhZ2VZIiwicGFnZVgiLCJheGlzTGVmdCIsImRpdiIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/line-chart/LineChart.tsx\n"));

/***/ })

});