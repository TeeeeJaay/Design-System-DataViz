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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LineChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"(app-pages-browser)/./node_modules/d3/src/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst colorScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleOrdinal(d3__WEBPACK_IMPORTED_MODULE_1__.schemeSet2);\nconst MARGIN = {\n    top: 30,\n    right: 30,\n    bottom: 50,\n    left: 50\n};\nfunction LineChart(param) {\n    let { data, withGridlines } = param;\n    _s();\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [containerWidth, setContainerWidth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [containerHeight, setContainerHeight] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    // This effect sets up a ResizeObserver to adjust chart size based on its container\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const resizeObserver = new ResizeObserver((entries)=>{\n            for (let entry of entries){\n                setContainerWidth(entry.contentRect.width);\n                setContainerHeight(entry.contentRect.height);\n            }\n        });\n        if (containerRef.current) {\n            resizeObserver.observe(containerRef.current);\n        }\n        return ()=>{\n            if (containerRef.current) {\n                resizeObserver.unobserve(containerRef.current);\n            }\n        };\n    }, [\n        containerRef\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (containerWidth && containerHeight) {\n            drawChart();\n        }\n    }, [\n        data,\n        containerWidth,\n        containerHeight\n    ]);\n    const drawChart = ()=>{\n        const svg = d3__WEBPACK_IMPORTED_MODULE_1__.select(containerRef.current).append(\"svg\").attr(\"width\", containerWidth).attr(\"height\", containerHeight);\n        const boundsWidth = containerWidth - MARGIN.left - MARGIN.right;\n        const boundsHeight = containerHeight - MARGIN.top - MARGIN.bottom;\n        const chart = svg.append(\"g\").attr(\"transform\", \"translate(\".concat(MARGIN.left, \",\").concat(MARGIN.top, \")\"));\n        // Y axis\n        const yScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear().domain([\n            0,\n            d3__WEBPACK_IMPORTED_MODULE_1__.max(data, (d)=>d.value * 1.1) || 0\n        ]).range([\n            boundsHeight,\n            0\n        ]);\n        chart.append(\"g\").call(d3__WEBPACK_IMPORTED_MODULE_1__.axisLeft(yScale));\n        // X axis\n        const xScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleBand().domain(data.map((d)=>d.name)).range([\n            0,\n            boundsWidth\n        ]).padding(0.1);\n        chart.append(\"g\").attr(\"transform\", \"translate(0,\".concat(boundsHeight, \")\")).call(d3__WEBPACK_IMPORTED_MODULE_1__.axisBottom(xScale));\n        // Line\n        const line = d3__WEBPACK_IMPORTED_MODULE_1__.line().x((d)=>xScale(d.name) + xScale.bandwidth() / 2).y((d)=>yScale(d.value));\n        chart.append(\"path\").datum(data).attr(\"fill\", \"none\").attr(\"stroke\", colorScale(\"0\")).attr(\"stroke-width\", 3).attr(\"d\", line);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        return ()=>{\n            d3__WEBPACK_IMPORTED_MODULE_1__.select(containerRef.current).select(\"svg\").remove();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        style: {\n            width: \"100%\",\n            height: \"100%\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/tinamariejensen/Documents/code/Design-System-DataViz/src/app/line-chart/LineChart.tsx\",\n        lineNumber: 100,\n        columnNumber: 10\n    }, this);\n}\n_s(LineChart, \"8ApEMOImyUKlwl/rp+F/G+M/VkE=\");\n_c = LineChart;\nvar _c;\n$RefreshReg$(_c, \"LineChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGluZS1jaGFydC9MaW5lQ2hhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDeUI7QUFFa0M7QUFPM0QsTUFBTUssYUFBYUwsNENBQWUsQ0FBQ0EsMENBQWE7QUFFaEQsTUFBTVEsU0FBUztJQUFFQyxLQUFLO0lBQUlDLE9BQU87SUFBSUMsUUFBUTtJQUFJQyxNQUFNO0FBQUc7QUFFM0MsU0FBU0MsVUFBVSxLQUF1QztRQUF2QyxFQUFFQyxJQUFJLEVBQUVDLGFBQWEsRUFBa0IsR0FBdkM7O0lBQ2hDLE1BQU1DLGVBQWVaLDZDQUFNQSxDQUFDO0lBQzVCLE1BQU0sQ0FBQ2EsZ0JBQWdCQyxrQkFBa0IsR0FBR2YsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDZ0IsaUJBQWlCQyxtQkFBbUIsR0FBR2pCLCtDQUFRQSxDQUFDO0lBRXZELG1GQUFtRjtJQUNuRkQsZ0RBQVNBLENBQUM7UUFDUixNQUFNbUIsaUJBQWlCLElBQUlDLGVBQWUsQ0FBQ0M7WUFDekMsS0FBSyxJQUFJQyxTQUFTRCxRQUFTO2dCQUN6Qkwsa0JBQWtCTSxNQUFNQyxXQUFXLENBQUNDLEtBQUs7Z0JBQ3pDTixtQkFBbUJJLE1BQU1DLFdBQVcsQ0FBQ0UsTUFBTTtZQUM3QztRQUNGO1FBRUEsSUFBSVgsYUFBYVksT0FBTyxFQUFFO1lBQ3hCUCxlQUFlUSxPQUFPLENBQUNiLGFBQWFZLE9BQU87UUFDN0M7UUFFQSxPQUFPO1lBQ0wsSUFBSVosYUFBYVksT0FBTyxFQUFFO2dCQUN4QlAsZUFBZVMsU0FBUyxDQUFDZCxhQUFhWSxPQUFPO1lBQy9DO1FBQ0Y7SUFDRixHQUFHO1FBQUNaO0tBQWE7SUFFakJkLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSWUsa0JBQWtCRSxpQkFBaUI7WUFDckNZO1FBQ0Y7SUFDRixHQUFHO1FBQUNqQjtRQUFNRztRQUFnQkU7S0FBZ0I7SUFFMUMsTUFBTVksWUFBWTtRQUNoQixNQUFNQyxNQUFNaEMsc0NBQ0gsQ0FBQ2dCLGFBQWFZLE9BQU8sRUFDM0JNLE1BQU0sQ0FBQyxPQUNQQyxJQUFJLENBQUMsU0FBU2xCLGdCQUNka0IsSUFBSSxDQUFDLFVBQVVoQjtRQUVsQixNQUFNaUIsY0FBY25CLGlCQUFpQlQsT0FBT0ksSUFBSSxHQUFHSixPQUFPRSxLQUFLO1FBQy9ELE1BQU0yQixlQUFlbEIsa0JBQWtCWCxPQUFPQyxHQUFHLEdBQUdELE9BQU9HLE1BQU07UUFFakUsTUFBTTJCLFFBQVFOLElBQ1hFLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUMsYUFBYSxhQUE0QjNCLE9BQWZBLE9BQU9JLElBQUksRUFBQyxLQUFjLE9BQVhKLE9BQU9DLEdBQUcsRUFBQztRQUU1RCxTQUFTO1FBQ1QsTUFBTThCLFNBQVN2QywyQ0FDRCxHQUNYeUMsTUFBTSxDQUFDO1lBQUM7WUFBR3pDLG1DQUFNLENBQUNjLE1BQU0sQ0FBQzZCLElBQU1BLEVBQUVDLEtBQUssR0FBRyxRQUFRO1NBQUUsRUFDbkRDLEtBQUssQ0FBQztZQUFDUjtZQUFjO1NBQUU7UUFDMUJDLE1BQU1KLE1BQU0sQ0FBQyxLQUFLWSxJQUFJLENBQUM5Qyx3Q0FBVyxDQUFDdUM7UUFFbkMsU0FBUztRQUNULE1BQU1TLFNBQVNoRCx5Q0FDSCxHQUNUeUMsTUFBTSxDQUFDM0IsS0FBS29DLEdBQUcsQ0FBQyxDQUFDUCxJQUFNQSxFQUFFUSxJQUFJLEdBQzdCTixLQUFLLENBQUM7WUFBQztZQUFHVDtTQUFZLEVBQ3RCZ0IsT0FBTyxDQUFDO1FBRVhkLE1BQ0dKLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUMsYUFBYSxlQUE0QixPQUFiRSxjQUFhLE1BQzlDUyxJQUFJLENBQUM5QywwQ0FBYSxDQUFDZ0Q7UUFFdEIsT0FBTztRQUNQLE1BQU1NLE9BQU90RCxvQ0FDTixHQUNKdUQsQ0FBQyxDQUFDLENBQUNaLElBQU1LLE9BQU9MLEVBQUVRLElBQUksSUFBS0gsT0FBT1EsU0FBUyxLQUFLLEdBQ2hEQyxDQUFDLENBQUMsQ0FBQ2QsSUFBTUosT0FBT0ksRUFBRUMsS0FBSztRQUUxQk4sTUFDR0osTUFBTSxDQUFDLFFBQ1B3QixLQUFLLENBQUM1QyxNQUNOcUIsSUFBSSxDQUFDLFFBQVEsUUFDYkEsSUFBSSxDQUFDLFVBQVU5QixXQUFXLE1BQzFCOEIsSUFBSSxDQUFDLGdCQUFnQixHQUNyQkEsSUFBSSxDQUFDLEtBQUttQjtJQUNmO0lBRUFwRCxnREFBU0EsQ0FBQztRQUNSLE9BQU87WUFDTEYsc0NBQVMsQ0FBQ2dCLGFBQWFZLE9BQU8sRUFBRUssTUFBTSxDQUFDLE9BQU8wQixNQUFNO1FBQ3REO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQU8sOERBQUNDO1FBQUlDLEtBQUs3QztRQUFjOEMsT0FBTztZQUFFcEMsT0FBTztZQUFRQyxRQUFRO1FBQU87Ozs7OztBQUN4RTtHQXRGd0JkO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbGluZS1jaGFydC9MaW5lQ2hhcnQudHN4PzFmNTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbXlkYXRhdHlwZSB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBMaW5lQ2hhcnRQcm9wcyA9IHtcbiAgd2l0aEdyaWRsaW5lcz86IGJvb2xlYW47XG4gIGRhdGE6IHsgbmFtZTogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH1bXTtcbn07XG5cbmNvbnN0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lU2V0Mik7XG5cbmNvbnN0IE1BUkdJTiA9IHsgdG9wOiAzMCwgcmlnaHQ6IDMwLCBib3R0b206IDUwLCBsZWZ0OiA1MCB9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5lQ2hhcnQoeyBkYXRhLCB3aXRoR3JpZGxpbmVzIH06IExpbmVDaGFydFByb3BzKSB7XG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW2NvbnRhaW5lcldpZHRoLCBzZXRDb250YWluZXJXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2NvbnRhaW5lckhlaWdodCwgc2V0Q29udGFpbmVySGVpZ2h0XSA9IHVzZVN0YXRlKDApO1xuXG4gIC8vIFRoaXMgZWZmZWN0IHNldHMgdXAgYSBSZXNpemVPYnNlcnZlciB0byBhZGp1c3QgY2hhcnQgc2l6ZSBiYXNlZCBvbiBpdHMgY29udGFpbmVyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgIGZvciAobGV0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgc2V0Q29udGFpbmVyV2lkdGgoZW50cnkuY29udGVudFJlY3Qud2lkdGgpO1xuICAgICAgICBzZXRDb250YWluZXJIZWlnaHQoZW50cnkuY29udGVudFJlY3QuaGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChjb250YWluZXJSZWYuY3VycmVudCkge1xuICAgICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShjb250YWluZXJSZWYuY3VycmVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChjb250YWluZXJSZWYuY3VycmVudCkge1xuICAgICAgICByZXNpemVPYnNlcnZlci51bm9ic2VydmUoY29udGFpbmVyUmVmLmN1cnJlbnQpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtjb250YWluZXJSZWZdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb250YWluZXJXaWR0aCAmJiBjb250YWluZXJIZWlnaHQpIHtcbiAgICAgIGRyYXdDaGFydCgpO1xuICAgIH1cbiAgfSwgW2RhdGEsIGNvbnRhaW5lcldpZHRoLCBjb250YWluZXJIZWlnaHRdKTtcblxuICBjb25zdCBkcmF3Q2hhcnQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3ZnID0gZDNcbiAgICAgIC5zZWxlY3QoY29udGFpbmVyUmVmLmN1cnJlbnQpXG4gICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIGNvbnRhaW5lcldpZHRoKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgY29udGFpbmVySGVpZ2h0KTtcblxuICAgIGNvbnN0IGJvdW5kc1dpZHRoID0gY29udGFpbmVyV2lkdGggLSBNQVJHSU4ubGVmdCAtIE1BUkdJTi5yaWdodDtcbiAgICBjb25zdCBib3VuZHNIZWlnaHQgPSBjb250YWluZXJIZWlnaHQgLSBNQVJHSU4udG9wIC0gTUFSR0lOLmJvdHRvbTtcblxuICAgIGNvbnN0IGNoYXJ0ID0gc3ZnXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke01BUkdJTi5sZWZ0fSwke01BUkdJTi50b3B9KWApO1xuXG4gICAgLy8gWSBheGlzXG4gICAgY29uc3QgeVNjYWxlID0gZDNcbiAgICAgIC5zY2FsZUxpbmVhcigpXG4gICAgICAuZG9tYWluKFswLCBkMy5tYXgoZGF0YSwgKGQpID0+IGQudmFsdWUgKiAxLjEpIHx8IDBdKVxuICAgICAgLnJhbmdlKFtib3VuZHNIZWlnaHQsIDBdKTtcbiAgICBjaGFydC5hcHBlbmQoXCJnXCIpLmNhbGwoZDMuYXhpc0xlZnQoeVNjYWxlKSk7XG5cbiAgICAvLyBYIGF4aXNcbiAgICBjb25zdCB4U2NhbGUgPSBkM1xuICAgICAgLnNjYWxlQmFuZCgpXG4gICAgICAuZG9tYWluKGRhdGEubWFwKChkKSA9PiBkLm5hbWUpKVxuICAgICAgLnJhbmdlKFswLCBib3VuZHNXaWR0aF0pXG4gICAgICAucGFkZGluZygwLjEpO1xuXG4gICAgY2hhcnRcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsJHtib3VuZHNIZWlnaHR9KWApXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHhTY2FsZSkpO1xuXG4gICAgLy8gTGluZVxuICAgIGNvbnN0IGxpbmUgPSBkM1xuICAgICAgLmxpbmU8bXlkYXRhdHlwZT4oKVxuICAgICAgLngoKGQpID0+IHhTY2FsZShkLm5hbWUpISArIHhTY2FsZS5iYW5kd2lkdGgoKSAvIDIpXG4gICAgICAueSgoZCkgPT4geVNjYWxlKGQudmFsdWUpKTtcblxuICAgIGNoYXJ0XG4gICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmRhdHVtKGRhdGEpXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBjb2xvclNjYWxlKFwiMFwiKSlcbiAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDMpXG4gICAgICAuYXR0cihcImRcIiwgbGluZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZDMuc2VsZWN0KGNvbnRhaW5lclJlZi5jdXJyZW50KS5zZWxlY3QoXCJzdmdcIikucmVtb3ZlKCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8ZGl2IHJlZj17Y29udGFpbmVyUmVmfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLz47XG59XG4iXSwibmFtZXMiOlsiZDMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiY29sb3JTY2FsZSIsInNjYWxlT3JkaW5hbCIsInNjaGVtZVNldDIiLCJNQVJHSU4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJMaW5lQ2hhcnQiLCJkYXRhIiwid2l0aEdyaWRsaW5lcyIsImNvbnRhaW5lclJlZiIsImNvbnRhaW5lcldpZHRoIiwic2V0Q29udGFpbmVyV2lkdGgiLCJjb250YWluZXJIZWlnaHQiLCJzZXRDb250YWluZXJIZWlnaHQiLCJyZXNpemVPYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY29udGVudFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImN1cnJlbnQiLCJvYnNlcnZlIiwidW5vYnNlcnZlIiwiZHJhd0NoYXJ0Iiwic3ZnIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsImJvdW5kc1dpZHRoIiwiYm91bmRzSGVpZ2h0IiwiY2hhcnQiLCJ5U2NhbGUiLCJzY2FsZUxpbmVhciIsImRvbWFpbiIsIm1heCIsImQiLCJ2YWx1ZSIsInJhbmdlIiwiY2FsbCIsImF4aXNMZWZ0IiwieFNjYWxlIiwic2NhbGVCYW5kIiwibWFwIiwibmFtZSIsInBhZGRpbmciLCJheGlzQm90dG9tIiwibGluZSIsIngiLCJiYW5kd2lkdGgiLCJ5IiwiZGF0dW0iLCJyZW1vdmUiLCJkaXYiLCJyZWYiLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/line-chart/LineChart.tsx\n"));

/***/ })

});