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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LineChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"(app-pages-browser)/./node_modules/d3/src/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst colorScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleOrdinal(d3__WEBPACK_IMPORTED_MODULE_1__.schemeSet2);\nfunction LineChart(param) {\n    let { data, withHover, withGridlines, withCurveLine, withDots } = param;\n    _s();\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const tooltipRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [containerWidth, setContainerWidth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(800);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const updateWidth = ()=>{\n            if (containerRef.current) {\n                setContainerWidth(containerRef.current.getBoundingClientRect().width);\n            }\n        };\n        updateWidth();\n        window.addEventListener(\"resize\", updateWidth);\n        return ()=>window.removeEventListener(\"resize\", updateWidth);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!svgRef.current) {\n            svgRef.current = d3__WEBPACK_IMPORTED_MODULE_1__.select(containerRef.current).append(\"svg\").node();\n        }\n        if (!tooltipRef.current) {\n            tooltipRef.current = d3__WEBPACK_IMPORTED_MODULE_1__.select(containerRef.current).append(\"div\").classed(\"absolute hidden p-3 bg-white bg-opacity-80 border rounded pointer-events-none text-sm\", true).node();\n        }\n        const svg = d3__WEBPACK_IMPORTED_MODULE_1__.select(svgRef.current);\n        const tooltip = d3__WEBPACK_IMPORTED_MODULE_1__.select(tooltipRef.current);\n        svg.selectAll(\"*\").remove();\n        const margin = {\n            top: 20,\n            right: 20,\n            bottom: 30,\n            left: 40\n        };\n        const width = containerWidth - margin.left - margin.right;\n        const height = 400 - margin.top - margin.bottom;\n        svg.attr(\"width\", width + margin.left + margin.right).attr(\"height\", height + margin.top + margin.bottom);\n        const g = svg.append(\"g\").attr(\"transform\", \"translate(\".concat(margin.left, \",\").concat(margin.top, \")\"));\n        const x = d3__WEBPACK_IMPORTED_MODULE_1__.scalePoint().range([\n            0,\n            width\n        ]).domain(data.map((d)=>d.name));\n        const y = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear().range([\n            height,\n            0\n        ]).domain([\n            0,\n            d3__WEBPACK_IMPORTED_MODULE_1__.max(data, (d)=>d.value * 1.2)\n        ]);\n        if (withGridlines) {\n            const yAxisTicks = y.ticks().slice(1);\n            g.selectAll(\".grid-line\").data(yAxisTicks, (d)=>d).enter().append(\"line\").attr(\"class\", \"grid-line\").attr(\"x1\", 0).attr(\"x2\", width).attr(\"y1\", (d)=>y(d)).attr(\"y2\", (d)=>y(d)).attr(\"stroke\", \"#ccc\");\n        }\n        const line = d3__WEBPACK_IMPORTED_MODULE_1__.line().x((d)=>x(d.name)).y((d)=>y(d.value));\n        if (withCurveLine) {\n            line.curve(d3__WEBPACK_IMPORTED_MODULE_1__.curveMonotoneX); // This makes the line smoother\n        }\n        g.append(\"path\").datum(data).attr(\"fill\", \"none\").attr(\"stroke\", colorScale(\"1\")).attr(\"stroke-width\", 2).attr(\"d\", line);\n        g.append(\"g\").attr(\"transform\", \"translate(0,\".concat(height, \")\")).call(d3__WEBPACK_IMPORTED_MODULE_1__.axisBottom(x));\n        g.append(\"path\").datum(data).attr(\"fill\", \"none\").attr(\"stroke\", colorScale(\"1\")).attr(\"stroke-width\", 3).attr(\"d\", line);\n        // Tilføjer cirkler på hvert datapunkt\n        if (withDots) {\n            g.selectAll(\".dot\").data(data).enter().append(\"circle\").attr(\"class\", \"dot\").attr(\"cx\", (d)=>x(d.name)).attr(\"cy\", (d)=>y(d.value)).attr(\"r\", 5).attr(\"fill\", colorScale(\"1\")).on(\"mouseover\", function(event, d) {\n                tooltip.html(\"<strong>\".concat(d.name, \"</strong>: \").concat(d.value)).classed(\"hidden\", false).style(\"top\", \"\".concat(event.pageY - 10, \"px\")).style(\"left\", \"\".concat(event.pageX + 10, \"px\"));\n            }).on(\"mousemove\", function(event) {\n                tooltip.style(\"top\", \"\".concat(event.pageY - 10, \"px\")).style(\"left\", \"\".concat(event.pageX + 10, \"px\"));\n            }).on(\"mouseout\", function() {\n                tooltip.classed(\"hidden\", true);\n            });\n        }\n        g.append(\"g\").call(d3__WEBPACK_IMPORTED_MODULE_1__.axisLeft(y));\n    }, [\n        data,\n        withGridlines,\n        withCurveLine,\n        containerWidth,\n        withDots,\n        withHover\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        style: {\n            width: \"100%\",\n            height: \"100%\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/tinamariejensen/Documents/code/Design-System-DataViz/src/app/line-chart/LineChart.tsx\",\n        lineNumber: 151,\n        columnNumber: 10\n    }, this);\n}\n_s(LineChart, \"lX1xu9hjUyX1kiRHNnPYsz6apCs=\");\n_c = LineChart;\nvar _c;\n$RefreshReg$(_c, \"LineChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGluZS1jaGFydC9MaW5lQ2hhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFDa0M7QUFVM0QsTUFBTUssYUFBYUwsNENBQWUsQ0FBQ0EsMENBQWE7QUFFakMsU0FBU1EsVUFBVSxLQU1qQjtRQU5pQixFQUNoQ0MsSUFBSSxFQUNKQyxTQUFTLEVBQ1RDLGFBQWEsRUFDYkMsYUFBYSxFQUNiQyxRQUFRLEVBQ08sR0FOaUI7O0lBT2hDLE1BQU1DLGVBQWVWLDZDQUFNQSxDQUFpQjtJQUM1QyxNQUFNVyxTQUFTWCw2Q0FBTUEsQ0FBdUI7SUFDNUMsTUFBTVksYUFBYVosNkNBQU1BLENBQXdCO0lBQ2pELE1BQU0sQ0FBQ2EsZ0JBQWdCQyxrQkFBa0IsR0FBR2YsK0NBQVFBLENBQVM7SUFFN0RELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWlCLGNBQWM7WUFDbEIsSUFBSUwsYUFBYU0sT0FBTyxFQUFFO2dCQUN4QkYsa0JBQWtCSixhQUFhTSxPQUFPLENBQUNDLHFCQUFxQixHQUFHQyxLQUFLO1lBQ3RFO1FBQ0Y7UUFFQUg7UUFDQUksT0FBT0MsZ0JBQWdCLENBQUMsVUFBVUw7UUFDbEMsT0FBTyxJQUFNSSxPQUFPRSxtQkFBbUIsQ0FBQyxVQUFVTjtJQUNwRCxHQUFHLEVBQUU7SUFFTGpCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxDQUFDYSxPQUFPSyxPQUFPLEVBQUU7WUFDbkJMLE9BQU9LLE9BQU8sR0FBR3BCLHNDQUFTLENBQUNjLGFBQWFNLE9BQU8sRUFBRU8sTUFBTSxDQUFDLE9BQU9DLElBQUk7UUFDckU7UUFDQSxJQUFJLENBQUNaLFdBQVdJLE9BQU8sRUFBRTtZQUN2QkosV0FBV0ksT0FBTyxHQUFHcEIsc0NBQ1osQ0FBQ2MsYUFBYU0sT0FBTyxFQUMzQk8sTUFBTSxDQUFDLE9BQ1BFLE9BQU8sQ0FDTix5RkFDQSxNQUVERCxJQUFJO1FBQ1Q7UUFFQSxNQUFNRSxNQUFNOUIsc0NBQVMsQ0FB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RUFBRUMsSUFBSSxHQUMxQlIsSUFBSSxDQUFDLE1BQU0sQ0FBQ08sSUFBTUUsRUFBRUYsRUFBRUssS0FBSyxHQUMzQlosSUFBSSxDQUFDLEtBQUssR0FDVkEsSUFBSSxDQUFDLFFBQVFuQyxXQUFXLE1BQ3hCMEQsRUFBRSxDQUFDLGFBQWEsU0FBVUMsS0FBSyxFQUFFakIsQ0FBQztnQkFDakNoQixRQUNHa0MsSUFBSSxDQUFDLFdBQStCbEIsT0FBcEJBLEVBQUVDLElBQUksRUFBQyxlQUFxQixPQUFSRCxFQUFFSyxLQUFLLEdBQzNDdkIsT0FBTyxDQUFDLFVBQVUsT0FDbEJxQyxLQUFLLENBQUMsT0FBTyxHQUFvQixPQUFqQkYsTUFBTUcsS0FBSyxHQUFHLElBQUcsT0FDakNELEtBQUssQ0FBQyxRQUFRLEdBQW9CLE9BQWpCRixNQUFNSSxLQUFLLEdBQUcsSUFBRztZQUN2QyxHQUNDTCxFQUFFLENBQUMsYUFBYSxTQUFVQyxLQUFLO2dCQUM5QmpDLFFBQ0dtQyxLQUFLLENBQUMsT0FBTyxHQUFvQixPQUFqQkYsTUFBTUcsS0FBSyxHQUFHLElBQUcsT0FDakNELEtBQUssQ0FBQyxRQUFRLEdBQW9CLE9BQWpCRixNQUFNSSxLQUFLLEdBQUcsSUFBRztZQUN2QyxHQUNDTCxFQUFFLENBQUMsWUFBWTtnQkFDZGhDLFFBQVFGLE9BQU8sQ0FBQyxVQUFVO1lBQzVCO1FBQ0o7UUFFQVksRUFBRWQsTUFBTSxDQUFDLEtBQUtrQyxJQUFJLENBQUM3RCx3Q0FBVyxDQUFDaUQ7SUFDakMsR0FBRztRQUFDeEM7UUFBTUU7UUFBZUM7UUFBZUs7UUFBZ0JKO1FBQVVIO0tBQVU7SUFFNUUscUJBQU8sOERBQUM0RDtRQUFJQyxLQUFLekQ7UUFBY29ELE9BQU87WUFBRTVDLE9BQU87WUFBUWlCLFFBQVE7UUFBTzs7Ozs7O0FBQ3hFO0dBMUl3Qi9CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbGluZS1jaGFydC9MaW5lQ2hhcnQudHN4PzFmNTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgTGluZUNoYXJ0UHJvcHMgPSB7XG4gIGRhdGE6IHsgbmFtZTogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH1bXTtcbiAgd2l0aEhvdmVyPzogYm9vbGVhbjtcbiAgd2l0aEdyaWRsaW5lcz86IGJvb2xlYW47XG4gIHdpdGhDdXJ2ZUxpbmU/OiBib29sZWFuO1xuICB3aXRoRG90cz86IGJvb2xlYW47XG59O1xuXG5jb25zdCBjb2xvclNjYWxlID0gZDMuc2NhbGVPcmRpbmFsKGQzLnNjaGVtZVNldDIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5lQ2hhcnQoe1xuICBkYXRhLFxuICB3aXRoSG92ZXIsXG4gIHdpdGhHcmlkbGluZXMsXG4gIHdpdGhDdXJ2ZUxpbmUsXG4gIHdpdGhEb3RzLFxufTogTGluZUNoYXJ0UHJvcHMpIHtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3Qgc3ZnUmVmID0gdXNlUmVmPFNWR1NWR0VsZW1lbnQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgdG9vbHRpcFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbY29udGFpbmVyV2lkdGgsIHNldENvbnRhaW5lcldpZHRoXSA9IHVzZVN0YXRlPG51bWJlcj4oODAwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZVdpZHRoID0gKCkgPT4ge1xuICAgICAgaWYgKGNvbnRhaW5lclJlZi5jdXJyZW50KSB7XG4gICAgICAgIHNldENvbnRhaW5lcldpZHRoKGNvbnRhaW5lclJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdXBkYXRlV2lkdGgoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVXaWR0aCk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZVdpZHRoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzdmdSZWYuY3VycmVudCkge1xuICAgICAgc3ZnUmVmLmN1cnJlbnQgPSBkMy5zZWxlY3QoY29udGFpbmVyUmVmLmN1cnJlbnQpLmFwcGVuZChcInN2Z1wiKS5ub2RlKCk7XG4gICAgfVxuICAgIGlmICghdG9vbHRpcFJlZi5jdXJyZW50KSB7XG4gICAgICB0b29sdGlwUmVmLmN1cnJlbnQgPSBkM1xuICAgICAgICAuc2VsZWN0KGNvbnRhaW5lclJlZi5jdXJyZW50KVxuICAgICAgICAuYXBwZW5kKFwiZGl2XCIpXG4gICAgICAgIC5jbGFzc2VkKFxuICAgICAgICAgIFwiYWJzb2x1dGUgaGlkZGVuIHAtMyBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIGJvcmRlciByb3VuZGVkIHBvaW50ZXItZXZlbnRzLW5vbmUgdGV4dC1zbVwiLFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKVxuICAgICAgICAubm9kZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChzdmdSZWYuY3VycmVudCk7XG4gICAgY29uc3QgdG9vbHRpcCA9IGQzLnNlbGVjdCh0b29sdGlwUmVmLmN1cnJlbnQpO1xuICAgIHN2Zy5zZWxlY3RBbGwoXCIqXCIpLnJlbW92ZSgpO1xuXG4gICAgY29uc3QgbWFyZ2luID0geyB0b3A6IDIwLCByaWdodDogMjAsIGJvdHRvbTogMzAsIGxlZnQ6IDQwIH07XG4gICAgY29uc3Qgd2lkdGggPSBjb250YWluZXJXaWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGNvbnN0IGhlaWdodCA9IDQwMCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgc3ZnXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSk7XG5cbiAgICBjb25zdCBnID0gc3ZnXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApO1xuXG4gICAgY29uc3QgeCA9IGQzXG4gICAgICAuc2NhbGVQb2ludCgpXG4gICAgICAucmFuZ2UoWzAsIHdpZHRoXSlcbiAgICAgIC5kb21haW4oZGF0YS5tYXAoKGQpID0+IGQubmFtZSkpO1xuXG4gICAgY29uc3QgeSA9IGQzXG4gICAgICAuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFtoZWlnaHQsIDBdKVxuICAgICAgLmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIChkKSA9PiBkLnZhbHVlICogMS4yKV0pO1xuXG4gICAgaWYgKHdpdGhHcmlkbGluZXMpIHtcbiAgICAgIGNvbnN0IHlBeGlzVGlja3MgPSB5LnRpY2tzKCkuc2xpY2UoMSk7XG4gICAgICBnLnNlbGVjdEFsbChcIi5ncmlkLWxpbmVcIilcbiAgICAgICAgLmRhdGEoeUF4aXNUaWNrcywgKGQpID0+IGQgYXMgbnVtYmVyKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZ3JpZC1saW5lXCIpXG4gICAgICAgIC5hdHRyKFwieDFcIiwgMClcbiAgICAgICAgLmF0dHIoXCJ4MlwiLCB3aWR0aClcbiAgICAgICAgLmF0dHIoXCJ5MVwiLCAoZCkgPT4geShkKSlcbiAgICAgICAgLmF0dHIoXCJ5MlwiLCAoZCkgPT4geShkKSlcbiAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCIjY2NjXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGxpbmUgPSBkM1xuICAgICAgLmxpbmU8eyBuYW1lOiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfT4oKVxuICAgICAgLngoKGQpID0+IHgoZC5uYW1lKSlcbiAgICAgIC55KChkKSA9PiB5KGQudmFsdWUpKTtcblxuICAgIGlmICh3aXRoQ3VydmVMaW5lKSB7XG4gICAgICBsaW5lLmN1cnZlKGQzLmN1cnZlTW9ub3RvbmVYKTsgLy8gVGhpcyBtYWtlcyB0aGUgbGluZSBzbW9vdGhlclxuICAgIH1cblxuICAgIGcuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmRhdHVtKGRhdGEpXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBjb2xvclNjYWxlKFwiMVwiKSlcbiAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpXG4gICAgICAuYXR0cihcImRcIiwgbGluZSk7XG5cbiAgICBnLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwke2hlaWdodH0pYClcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpO1xuXG4gICAgZy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuZGF0dW0oZGF0YSlcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIGNvbG9yU2NhbGUoXCIxXCIpKVxuICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMylcbiAgICAgIC5hdHRyKFwiZFwiLCBsaW5lKTtcblxuICAgIC8vIFRpbGbDuGplciBjaXJrbGVyIHDDpSBodmVydCBkYXRhcHVua3RcbiAgICBpZiAod2l0aERvdHMpIHtcbiAgICAgIGcuc2VsZWN0QWxsKFwiLmRvdFwiKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJkb3RcIilcbiAgICAgICAgLmF0dHIoXCJjeFwiLCAoZCkgPT4geChkLm5hbWUpKVxuICAgICAgICAuYXR0cihcImN5XCIsIChkKSA9PiB5KGQudmFsdWUpKVxuICAgICAgICAuYXR0cihcInJcIiwgNSlcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGNvbG9yU2NhbGUoXCIxXCIpKVxuICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKGV2ZW50LCBkKSB7XG4gICAgICAgICAgdG9vbHRpcFxuICAgICAgICAgICAgLmh0bWwoYDxzdHJvbmc+JHtkLm5hbWV9PC9zdHJvbmc+OiAke2QudmFsdWV9YClcbiAgICAgICAgICAgIC5jbGFzc2VkKFwiaGlkZGVuXCIsIGZhbHNlKVxuICAgICAgICAgICAgLnN0eWxlKFwidG9wXCIsIGAke2V2ZW50LnBhZ2VZIC0gMTB9cHhgKVxuICAgICAgICAgICAgLnN0eWxlKFwibGVmdFwiLCBgJHtldmVudC5wYWdlWCArIDEwfXB4YCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICB0b29sdGlwXG4gICAgICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgYCR7ZXZlbnQucGFnZVkgLSAxMH1weGApXG4gICAgICAgICAgICAuc3R5bGUoXCJsZWZ0XCIsIGAke2V2ZW50LnBhZ2VYICsgMTB9cHhgKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRvb2x0aXAuY2xhc3NlZChcImhpZGRlblwiLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZy5hcHBlbmQoXCJnXCIpLmNhbGwoZDMuYXhpc0xlZnQoeSkpO1xuICB9LCBbZGF0YSwgd2l0aEdyaWRsaW5lcywgd2l0aEN1cnZlTGluZSwgY29udGFpbmVyV2lkdGgsIHdpdGhEb3RzLCB3aXRoSG92ZXJdKTtcblxuICByZXR1cm4gPGRpdiByZWY9e2NvbnRhaW5lclJlZn0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IC8+O1xufVxuIl0sIm5hbWVzIjpbImQzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImNvbG9yU2NhbGUiLCJzY2FsZU9yZGluYWwiLCJzY2hlbWVTZXQyIiwiTGluZUNoYXJ0IiwiZGF0YSIsIndpdGhIb3ZlciIsIndpdGhHcmlkbGluZXMiLCJ3aXRoQ3VydmVMaW5lIiwid2l0aERvdHMiLCJjb250YWluZXJSZWYiLCJzdmdSZWYiLCJ0b29sdGlwUmVmIiwiY29udGFpbmVyV2lkdGgiLCJzZXRDb250YWluZXJXaWR0aCIsInVwZGF0ZVdpZHRoIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZWxlY3QiLCJhcHBlbmQiLCJub2RlIiwiY2xhc3NlZCIsInN2ZyIsInRvb2x0aXAiLCJzZWxlY3RBbGwiLCJyZW1vdmUiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJoZWlnaHQiLCJhdHRyIiwiZyIsIngiLCJzY2FsZVBvaW50IiwicmFuZ2UiLCJkb21haW4iLCJtYXAiLCJkIiwibmFtZSIsInkiLCJzY2FsZUxpbmVhciIsIm1heCIsInZhbHVlIiwieUF4aXNUaWNrcyIsInRpY2tzIiwic2xpY2UiLCJlbnRlciIsImxpbmUiLCJjdXJ2ZSIsImN1cnZlTW9ub3RvbmVYIiwiZGF0dW0iLCJjYWxsIiwiYXhpc0JvdHRvbSIsIm9uIiwiZXZlbnQiLCJodG1sIiwic3R5bGUiLCJwYWdlWSIsInBhZ2VYIiwiYXhpc0xlZnQiLCJkaXYiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/line-chart/LineChart.tsx\n"));

/***/ })

});