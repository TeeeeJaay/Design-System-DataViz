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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LineChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"(app-pages-browser)/./node_modules/d3/src/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n// Definer farver for hver datasæt\nconst colorScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleOrdinal().domain([\n    \"MCU\",\n    \"DCU\"\n]).range(d3__WEBPACK_IMPORTED_MODULE_1__.schemeSet2);\nfunction LineChart(param) {\n    let { data, withHover, withGridlines, withCurveLine, withDots } = param;\n    _s();\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const tooltipRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [containerWidth, setContainerWidth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(800);\n    const [visibility, setVisibility] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        MCU: true,\n        DCU: true\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const updateWidth = ()=>{\n            if (containerRef.current) {\n                setContainerWidth(containerRef.current.getBoundingClientRect().width);\n            }\n        };\n        updateWidth();\n        window.addEventListener(\"resize\", updateWidth);\n        return ()=>window.removeEventListener(\"resize\", updateWidth);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!svgRef.current) {\n            svgRef.current = d3__WEBPACK_IMPORTED_MODULE_1__.select(containerRef.current).append(\"svg\").node();\n        }\n        if (!tooltipRef.current) {\n            tooltipRef.current = d3__WEBPACK_IMPORTED_MODULE_1__.select(containerRef.current).append(\"div\").classed(\"absolute hidden p-3 bg-white bg-opacity-80 border rounded pointer-events-none text-sm\", true).node();\n        }\n        const svg = d3__WEBPACK_IMPORTED_MODULE_1__.select(svgRef.current);\n        const tooltip = d3__WEBPACK_IMPORTED_MODULE_1__.select(tooltipRef.current);\n        svg.selectAll(\"*\").remove();\n        const margin = {\n            top: 20,\n            right: 40,\n            bottom: 60,\n            left: 40\n        };\n        const width = containerWidth - margin.left - margin.right;\n        const height = 500 - margin.top - margin.bottom;\n        svg.attr(\"width\", width + margin.left + margin.right).attr(\"height\", height + margin.top + margin.bottom);\n        // Filter data based on visibility\n        const filteredData = {\n            MCU: visibility.MCU ? data.MCU : [],\n            DCU: visibility.DCU ? data.DCU : []\n        };\n        const allVisibleData = [\n            ...filteredData.MCU,\n            ...filteredData.DCU\n        ];\n        const x = d3__WEBPACK_IMPORTED_MODULE_1__.scalePoint().range([\n            0,\n            width\n        ]).domain(allVisibleData.map((d)=>d.name).filter((value, index, self)=>self.indexOf(value) === index));\n        const y = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear().range([\n            height,\n            0\n        ]).domain([\n            0,\n            d3__WEBPACK_IMPORTED_MODULE_1__.max(allVisibleData, (d)=>d.value) || 0\n        ]);\n        const xAxis = d3__WEBPACK_IMPORTED_MODULE_1__.axisBottom(x);\n        const yAxis = d3__WEBPACK_IMPORTED_MODULE_1__.axisLeft(y).ticks(d3__WEBPACK_IMPORTED_MODULE_1__.max(allVisibleData, (d)=>d.value));\n        g.append(\"g\").attr(\"transform\", \"translate(0,\".concat(height, \")\")).call(xAxis);\n        g.append(\"g\").call(yAxis);\n        y.domain([\n            0,\n            d3__WEBPACK_IMPORTED_MODULE_1__.max(allVisibleData, (d)=>d.value) || 0\n        ]);\n        // Update axes with transitions\n        updateYAxis(y);\n        const g = svg.append(\"g\").attr(\"transform\", \"translate(\".concat(margin.left, \",\").concat(margin.top, \")\"));\n        const generateLine = (dataset, color, label)=>{\n            const lineGenerator = d3__WEBPACK_IMPORTED_MODULE_1__.line().x((d)=>x(d.name)).y((d)=>y(d.value));\n            if (withCurveLine) {\n                lineGenerator.curve(d3__WEBPACK_IMPORTED_MODULE_1__.curveMonotoneX);\n            }\n            // Select the existing path or append a new one\n            const path = g.selectAll(\"path.line-\".concat(label)).data(visibility[label] ? [\n                dataset\n            ] : []);\n            path.enter().append(\"path\").attr(\"class\", \"line-\".concat(label)).attr(\"fill\", \"none\").attr(\"stroke\", colorScale(label)).attr(\"stroke-width\", 2).merge(path).transition().duration(750).attr(\"d\", lineGenerator);\n            path.exit().transition().duration(750).attr(\"stroke-opacity\", 0).remove();\n            if (withDots) {\n                const dots = g.selectAll(\"circle.dot-\".concat(label)).data(visibility[label] ? dataset : [], (d)=>d.name);\n                dots.enter().append(\"circle\").attr(\"class\", \"dot dot-\".concat(label)).attr(\"r\", 5).attr(\"fill\", colorScale(label)).merge(dots).transition().duration(750).attr(\"cx\", (d)=>x(d.name)).attr(\"cy\", (d)=>y(d.value));\n                dots.exit().transition().duration(750).attr(\"r\", 0).remove();\n            }\n        };\n        // Redraw lines and dots for visible datasets\n        Object.keys(filteredData).forEach((key)=>{\n            generateLine(filteredData[key], colorScale(key), key);\n        });\n        if (withGridlines) {\n            g.selectAll(\".grid-line\").data(y.ticks()).enter().append(\"line\").classed(\"grid-line\", true).attr(\"x1\", 0).attr(\"x2\", width).attr(\"y1\", y).attr(\"y2\", y).attr(\"stroke\", \"#ccc\");\n        }\n        // Generate lines for each dataset\n        generateLine(data.MCU, \"MCU\", \"MCU\");\n        generateLine(data.DCU, \"DCU\", \"DCU\");\n        const updateYAxis = (y)=>{\n            const yAxis = d3__WEBPACK_IMPORTED_MODULE_1__.axisLeft(y).ticks(d3__WEBPACK_IMPORTED_MODULE_1__.max(allVisibleData, (d)=>d.value));\n            const yAxisG = g.select(\".y-axis\");\n            if (yAxisG.empty()) {\n                g.append(\"g\").attr(\"class\", \"y-axis\").call(yAxis);\n            } else {\n                yAxisG.transition().duration(750).call(yAxis);\n            }\n        };\n        // Add a legend below the chart\n        const legend = svg.append(\"g\").attr(\"class\", \"legend\").attr(\"transform\", \"translate(\".concat(margin.left, \", \").concat(height + margin.top + 30, \")\")); // Positioning the legend below the chart\n        legend.selectAll(null).data([\n            \"MCU\",\n            \"DCU\"\n        ]).enter().append(\"rect\").attr(\"x\", (d, i)=>i * 100) // Horizontal spacing\n        .attr(\"width\", 18).attr(\"height\", 18).style(\"fill\", (d)=>colorScale(d)).on(\"click\", (event, d)=>{\n            // Add click handler to toggle visibility\n            setVisibility((prev)=>({\n                    ...prev,\n                    [d]: !prev[d]\n                }));\n        }).on(\"mouseenter\", function(event, d) {\n            d3__WEBPACK_IMPORTED_MODULE_1__.select(this).classed(\"stroke-2 stroke-gray-400\", true);\n        }).on(\"mouseleave\", function(event, d) {\n            d3__WEBPACK_IMPORTED_MODULE_1__.select(this).classed(\"stroke-2 stroke-gray-400\", false);\n        });\n        legend.selectAll(null).data([\n            \"MCU\",\n            \"DCU\"\n        ]).enter().append(\"text\").attr(\"x\", (d, i)=>i * 100 + 24).attr(\"y\", 9) // Vertically align text\n        .attr(\"dy\", \".35em\").text((d)=>d).on(\"click\", (event, d)=>{\n            // Add same click handler to text\n            setVisibility((prev)=>({\n                    ...prev,\n                    [d]: !prev[d]\n                }));\n        });\n    }, [\n        data,\n        withGridlines,\n        withCurveLine,\n        containerWidth,\n        withDots,\n        withHover,\n        visibility\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        style: {\n            width: \"100%\",\n            height: \"100%\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/tinamariejensen/Documents/code/Design-System-DataViz/src/app/line-chart/LineChart.tsx\",\n        lineNumber: 266,\n        columnNumber: 10\n    }, this);\n}\n_s(LineChart, \"WgWNomumWpVFU23mMuGmaFQDLFs=\");\n_c = LineChart;\nvar _c;\n$RefreshReg$(_c, \"LineChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGluZS1jaGFydC9MaW5lQ2hhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFDa0M7QUFrQjNELGtDQUFrQztBQUNsQyxNQUFNSyxhQUFhTCw0Q0FDSixHQUNaTyxNQUFNLENBQUM7SUFBQztJQUFPO0NBQU0sRUFDckJDLEtBQUssQ0FBQ1IsMENBQWE7QUFFUCxTQUFTVSxVQUFVLEtBTWpCO1FBTmlCLEVBQ2hDQyxJQUFJLEVBQ0pDLFNBQVMsRUFDVEMsYUFBYSxFQUNiQyxhQUFhLEVBQ2JDLFFBQVEsRUFDTyxHQU5pQjs7SUFPaEMsTUFBTUMsZUFBZVosNkNBQU1BLENBQWlCO0lBQzVDLE1BQU1hLFNBQVNiLDZDQUFNQSxDQUF1QjtJQUM1QyxNQUFNYyxhQUFhZCw2Q0FBTUEsQ0FBd0I7SUFDakQsTUFBTSxDQUFDZSxnQkFBZ0JDLGtCQUFrQixHQUFHakIsK0NBQVFBLENBQVM7SUFDN0QsTUFBTSxDQUFDa0IsWUFBWUMsY0FBYyxHQUFHbkIsK0NBQVFBLENBQWE7UUFDdkRvQixLQUFLO1FBQ0xDLEtBQUs7SUFDUDtJQUVBdEIsZ0RBQVNBLENBQUM7UUFDUixNQUFNdUIsY0FBYztZQUNsQixJQUFJVCxhQUFhVSxPQUFPLEVBQUU7Z0JBQ3hCTixrQkFBa0JKLGFBQWFVLE9BQU8sQ0FBQ0MscUJBQXFCLEdBQUdDLEtBQUs7WUFDdEU7UUFDRjtRQUVBSDtRQUNBSSxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVTDtRQUNsQyxPQUFPLElBQU1JLE9BQU9FLG1CQUFtQixDQUFDLFVBQVVOO0lBQ3BELEdBQUcsRUFBRTtJQUVMdkIsZ0RBQVNBLENBQUM7UUFDUixJQUFJLENBQUNlLE9BQU9TLE9BQU8sRUFBRTtZQUNuQlQsT0FBT1MsT0FBTyxHQUFHMUIsc0NBQVMsQ0FBQ2dCLGFBQWFVLE9BQU8sRUFBRU8sTUFBTSxDQUFDLE9BQU9DLElBQUk7UUFDckU7UUFDQSxJQUFJLENBQUNoQixXQUFXUSxPQUFP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QUFDNUMsRUFBdUIsRUFBRSxDQUFDNEMsSUFBSSxDQUFDNUMsRUFBdUI7Z0JBQ3pEO1FBQ0Y7SUFDSixHQUFHO1FBQ0R6QztRQUNBRTtRQUNBQztRQUNBSztRQUNBSjtRQUNBSDtRQUNBUztLQUNEO0lBRUQscUJBQU8sOERBQUM2RTtRQUFJQyxLQUFLbkY7UUFBYzZFLE9BQU87WUFBRWpFLE9BQU87WUFBUWlCLFFBQVE7UUFBTzs7Ozs7O0FBQ3hFO0dBalB3Qm5DO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbGluZS1jaGFydC9MaW5lQ2hhcnQudHN4PzFmNTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgTGluZUNoYXJ0UHJvcHMgPSB7XG4gIGRhdGE6IHtcbiAgICBNQ1U6IHsgbmFtZTogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH1bXTtcbiAgICBEQ1U6IHsgbmFtZTogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH1bXTtcbiAgfTtcbiAgd2l0aEhvdmVyPzogYm9vbGVhbjtcbiAgd2l0aEdyaWRsaW5lcz86IGJvb2xlYW47XG4gIHdpdGhDdXJ2ZUxpbmU/OiBib29sZWFuO1xuICB3aXRoRG90cz86IGJvb2xlYW47XG59O1xuXG50eXBlIFZpc2liaWxpdHkgPSB7XG4gIE1DVTogYm9vbGVhbjtcbiAgRENVOiBib29sZWFuO1xufTtcblxuLy8gRGVmaW5lciBmYXJ2ZXIgZm9yIGh2ZXIgZGF0YXPDpnRcbmNvbnN0IGNvbG9yU2NhbGUgPSBkM1xuICAuc2NhbGVPcmRpbmFsPHN0cmluZz4oKVxuICAuZG9tYWluKFtcIk1DVVwiLCBcIkRDVVwiXSlcbiAgLnJhbmdlKGQzLnNjaGVtZVNldDIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5lQ2hhcnQoe1xuICBkYXRhLFxuICB3aXRoSG92ZXIsXG4gIHdpdGhHcmlkbGluZXMsXG4gIHdpdGhDdXJ2ZUxpbmUsXG4gIHdpdGhEb3RzLFxufTogTGluZUNoYXJ0UHJvcHMpIHtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3Qgc3ZnUmVmID0gdXNlUmVmPFNWR1NWR0VsZW1lbnQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgdG9vbHRpcFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbY29udGFpbmVyV2lkdGgsIHNldENvbnRhaW5lcldpZHRoXSA9IHVzZVN0YXRlPG51bWJlcj4oODAwKTtcbiAgY29uc3QgW3Zpc2liaWxpdHksIHNldFZpc2liaWxpdHldID0gdXNlU3RhdGU8VmlzaWJpbGl0eT4oe1xuICAgIE1DVTogdHJ1ZSxcbiAgICBEQ1U6IHRydWUsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlV2lkdGggPSAoKSA9PiB7XG4gICAgICBpZiAoY29udGFpbmVyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgc2V0Q29udGFpbmVyV2lkdGgoY29udGFpbmVyUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB1cGRhdGVXaWR0aCgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZVdpZHRoKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlV2lkdGgpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXN2Z1JlZi5jdXJyZW50KSB7XG4gICAgICBzdmdSZWYuY3VycmVudCA9IGQzLnNlbGVjdChjb250YWluZXJSZWYuY3VycmVudCkuYXBwZW5kKFwic3ZnXCIpLm5vZGUoKTtcbiAgICB9XG4gICAgaWYgKCF0b29sdGlwUmVmLmN1cnJlbnQpIHtcbiAgICAgIHRvb2x0aXBSZWYuY3VycmVudCA9IGQzXG4gICAgICAgIC5zZWxlY3QoY29udGFpbmVyUmVmLmN1cnJlbnQpXG4gICAgICAgIC5hcHBlbmQoXCJkaXZcIilcbiAgICAgICAgLmNsYXNzZWQoXG4gICAgICAgICAgXCJhYnNvbHV0ZSBoaWRkZW4gcC0zIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgYm9yZGVyIHJvdW5kZWQgcG9pbnRlci1ldmVudHMtbm9uZSB0ZXh0LXNtXCIsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApXG4gICAgICAgIC5ub2RlKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KHN2Z1JlZi5jdXJyZW50KTtcbiAgICBjb25zdCB0b29sdGlwID0gZDMuc2VsZWN0KHRvb2x0aXBSZWYuY3VycmVudCk7XG4gICAgc3ZnLnNlbGVjdEFsbChcIipcIikucmVtb3ZlKCk7XG5cbiAgICBjb25zdCBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiA0MCwgYm90dG9tOiA2MCwgbGVmdDogNDAgfTtcbiAgICBjb25zdCB3aWR0aCA9IGNvbnRhaW5lcldpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgY29uc3QgaGVpZ2h0ID0gNTAwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICBzdmdcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKTtcblxuICAgIC8vIEZpbHRlciBkYXRhIGJhc2VkIG9uIHZpc2liaWxpdHlcbiAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSB7XG4gICAgICBNQ1U6IHZpc2liaWxpdHkuTUNVID8gZGF0YS5NQ1UgOiBbXSxcbiAgICAgIERDVTogdmlzaWJpbGl0eS5EQ1UgPyBkYXRhLkRDVSA6IFtdLFxuICAgIH07XG5cbiAgICBjb25zdCBhbGxWaXNpYmxlRGF0YSA9IFsuLi5maWx0ZXJlZERhdGEuTUNVLCAuLi5maWx0ZXJlZERhdGEuRENVXTtcbiAgICBjb25zdCB4ID0gZDNcbiAgICAgIC5zY2FsZVBvaW50KClcbiAgICAgIC5yYW5nZShbMCwgd2lkdGhdKVxuICAgICAgLmRvbWFpbihcbiAgICAgICAgYWxsVmlzaWJsZURhdGFcbiAgICAgICAgICAubWFwKChkKSA9PiBkLm5hbWUpXG4gICAgICAgICAgLmZpbHRlcigodmFsdWUsIGluZGV4LCBzZWxmKSA9PiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleClcbiAgICAgICk7XG5cbiAgICBjb25zdCB5ID0gZDNcbiAgICAgIC5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoW2hlaWdodCwgMF0pXG4gICAgICAuZG9tYWluKFswLCBkMy5tYXgoYWxsVmlzaWJsZURhdGEsIChkKSA9PiBkLnZhbHVlKSB8fCAwXSk7XG5cbiAgICBjb25zdCB4QXhpcyA9IGQzLmF4aXNCb3R0b20oeCk7XG4gICAgY29uc3QgeUF4aXMgPSBkMy5heGlzTGVmdCh5KS50aWNrcyhkMy5tYXgoYWxsVmlzaWJsZURhdGEsIChkKSA9PiBkLnZhbHVlKSk7XG5cbiAgICBnLmFwcGVuZChcImdcIikuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsJHtoZWlnaHR9KWApLmNhbGwoeEF4aXMpO1xuICAgIGcuYXBwZW5kKFwiZ1wiKS5jYWxsKHlBeGlzKTtcblxuICAgIHkuZG9tYWluKFswLCBkMy5tYXgoYWxsVmlzaWJsZURhdGEsIChkKSA9PiBkLnZhbHVlKSB8fCAwXSk7XG5cbiAgICAvLyBVcGRhdGUgYXhlcyB3aXRoIHRyYW5zaXRpb25zXG4gICAgdXBkYXRlWUF4aXMoeSk7XG4gICAgY29uc3QgZyA9IHN2Z1xuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHttYXJnaW4udG9wfSlgKTtcblxuICAgIGNvbnN0IGdlbmVyYXRlTGluZSA9IChcbiAgICAgIGRhdGFzZXQ6IHsgbmFtZTogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH1bXSxcbiAgICAgIGNvbG9yOiBzdHJpbmcsXG4gICAgICBsYWJlbDoga2V5b2YgVmlzaWJpbGl0eVxuICAgICkgPT4ge1xuICAgICAgY29uc3QgbGluZUdlbmVyYXRvciA9IGQzXG4gICAgICAgIC5saW5lPHsgbmFtZTogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH0+KClcbiAgICAgICAgLngoKGQpID0+IHgoZC5uYW1lKSBhcyBudW1iZXIpXG4gICAgICAgIC55KChkKSA9PiB5KGQudmFsdWUpKTtcblxuICAgICAgaWYgKHdpdGhDdXJ2ZUxpbmUpIHtcbiAgICAgICAgbGluZUdlbmVyYXRvci5jdXJ2ZShkMy5jdXJ2ZU1vbm90b25lWCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlbGVjdCB0aGUgZXhpc3RpbmcgcGF0aCBvciBhcHBlbmQgYSBuZXcgb25lXG4gICAgICBjb25zdCBwYXRoID0gZ1xuICAgICAgICAuc2VsZWN0QWxsKGBwYXRoLmxpbmUtJHtsYWJlbH1gKVxuICAgICAgICAuZGF0YSh2aXNpYmlsaXR5W2xhYmVsXSA/IFtkYXRhc2V0XSA6IFtdKTtcblxuICAgICAgcGF0aFxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGBsaW5lLSR7bGFiZWx9YClcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBjb2xvclNjYWxlKGxhYmVsKSlcbiAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMilcbiAgICAgICAgLm1lcmdlKHBhdGgpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLmF0dHIoXCJkXCIsIGxpbmVHZW5lcmF0b3IpO1xuXG4gICAgICBwYXRoLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oNzUwKS5hdHRyKFwic3Ryb2tlLW9wYWNpdHlcIiwgMCkucmVtb3ZlKCk7XG5cbiAgICAgIGlmICh3aXRoRG90cykge1xuICAgICAgICBjb25zdCBkb3RzID0gZ1xuICAgICAgICAgIC5zZWxlY3RBbGwoYGNpcmNsZS5kb3QtJHtsYWJlbH1gKVxuICAgICAgICAgIC5kYXRhKHZpc2liaWxpdHlbbGFiZWxdID8gZGF0YXNldCA6IFtdLCAoZCkgPT4gZC5uYW1lKTtcblxuICAgICAgICBkb3RzXG4gICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBgZG90IGRvdC0ke2xhYmVsfWApXG4gICAgICAgICAgLmF0dHIoXCJyXCIsIDUpXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGNvbG9yU2NhbGUobGFiZWwpKVxuICAgICAgICAgIC5tZXJnZShkb3RzKVxuICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oNzUwKVxuICAgICAgICAgIC5hdHRyKFwiY3hcIiwgKGQpID0+IHgoZC5uYW1lKSBhcyBudW1iZXIpXG4gICAgICAgICAgLmF0dHIoXCJjeVwiLCAoZCkgPT4geShkLnZhbHVlKSk7XG5cbiAgICAgICAgZG90cy5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDc1MCkuYXR0cihcInJcIiwgMCkucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFJlZHJhdyBsaW5lcyBhbmQgZG90cyBmb3IgdmlzaWJsZSBkYXRhc2V0c1xuICAgIE9iamVjdC5rZXlzKGZpbHRlcmVkRGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBnZW5lcmF0ZUxpbmUoXG4gICAgICAgIGZpbHRlcmVkRGF0YVtrZXkgYXMga2V5b2YgdHlwZW9mIGZpbHRlcmVkRGF0YV0sXG4gICAgICAgIGNvbG9yU2NhbGUoa2V5KSxcbiAgICAgICAga2V5IGFzIGtleW9mIFZpc2liaWxpdHlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICBpZiAod2l0aEdyaWRsaW5lcykge1xuICAgICAgZy5zZWxlY3RBbGwoXCIuZ3JpZC1saW5lXCIpXG4gICAgICAgIC5kYXRhKHkudGlja3MoKSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcImxpbmVcIilcbiAgICAgICAgLmNsYXNzZWQoXCJncmlkLWxpbmVcIiwgdHJ1ZSlcbiAgICAgICAgLmF0dHIoXCJ4MVwiLCAwKVxuICAgICAgICAuYXR0cihcIngyXCIsIHdpZHRoKVxuICAgICAgICAuYXR0cihcInkxXCIsIHkpXG4gICAgICAgIC5hdHRyKFwieTJcIiwgeSlcbiAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCIjY2NjXCIpO1xuICAgIH1cblxuICAgIC8vIEdlbmVyYXRlIGxpbmVzIGZvciBlYWNoIGRhdGFzZXRcbiAgICBnZW5lcmF0ZUxpbmUoZGF0YS5NQ1UsIFwiTUNVXCIsIFwiTUNVXCIpO1xuICAgIGdlbmVyYXRlTGluZShkYXRhLkRDVSwgXCJEQ1VcIiwgXCJEQ1VcIik7XG5cbiAgICBjb25zdCB1cGRhdGVZQXhpcyA9ICh5OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlciwgbmV2ZXI+KSA9PiB7XG4gICAgICBjb25zdCB5QXhpcyA9IGQzXG4gICAgICAgIC5heGlzTGVmdCh5KVxuICAgICAgICAudGlja3MoZDMubWF4KGFsbFZpc2libGVEYXRhLCAoZCkgPT4gZC52YWx1ZSkgYXMgbnVtYmVyKTtcbiAgICAgIGNvbnN0IHlBeGlzRyA9IGcuc2VsZWN0KFwiLnktYXhpc1wiKTtcbiAgICAgIGlmICh5QXhpc0cuZW1wdHkoKSkge1xuICAgICAgICBnLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwieS1heGlzXCIpLmNhbGwoeUF4aXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeUF4aXNHLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApLmNhbGwoeUF4aXMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBBZGQgYSBsZWdlbmQgYmVsb3cgdGhlIGNoYXJ0XG4gICAgY29uc3QgbGVnZW5kID0gc3ZnXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxlZ2VuZFwiKVxuICAgICAgLmF0dHIoXG4gICAgICAgIFwidHJhbnNmb3JtXCIsXG4gICAgICAgIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sICR7aGVpZ2h0ICsgbWFyZ2luLnRvcCArIDMwfSlgXG4gICAgICApOyAvLyBQb3NpdGlvbmluZyB0aGUgbGVnZW5kIGJlbG93IHRoZSBjaGFydFxuXG4gICAgbGVnZW5kXG4gICAgICAuc2VsZWN0QWxsKG51bGwpXG4gICAgICAuZGF0YShbXCJNQ1VcIiwgXCJEQ1VcIl0pXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgIC5hdHRyKFwieFwiLCAoZCwgaSkgPT4gaSAqIDEwMCkgLy8gSG9yaXpvbnRhbCBzcGFjaW5nXG4gICAgICAuYXR0cihcIndpZHRoXCIsIDE4KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgMTgpXG4gICAgICAuc3R5bGUoXCJmaWxsXCIsIChkKSA9PiBjb2xvclNjYWxlKGQpKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgKGV2ZW50LCBkKSA9PiB7XG4gICAgICAgIC8vIEFkZCBjbGljayBoYW5kbGVyIHRvIHRvZ2dsZSB2aXNpYmlsaXR5XG4gICAgICAgIHNldFZpc2liaWxpdHkoKHByZXYpID0+ICh7XG4gICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICBbZCBhcyBrZXlvZiB0eXBlb2YgcHJldl06ICFwcmV2W2QgYXMga2V5b2YgdHlwZW9mIHByZXZdLFxuICAgICAgICB9KSk7XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoZXZlbnQsIGQpIHtcbiAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmNsYXNzZWQoXCJzdHJva2UtMiBzdHJva2UtZ3JheS00MDBcIiwgdHJ1ZSk7XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoZXZlbnQsIGQpIHtcbiAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmNsYXNzZWQoYHN0cm9rZS0yIHN0cm9rZS1ncmF5LTQwMGAsIGZhbHNlKTtcbiAgICAgIH0pO1xuXG4gICAgbGVnZW5kXG4gICAgICAuc2VsZWN0QWxsKG51bGwpXG4gICAgICAuZGF0YShbXCJNQ1VcIiwgXCJEQ1VcIl0pXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwieFwiLCAoZCwgaSkgPT4gaSAqIDEwMCArIDI0KVxuICAgICAgLmF0dHIoXCJ5XCIsIDkpIC8vIFZlcnRpY2FsbHkgYWxpZ24gdGV4dFxuICAgICAgLmF0dHIoXCJkeVwiLCBcIi4zNWVtXCIpXG4gICAgICAudGV4dCgoZCkgPT4gZClcbiAgICAgIC5vbihcImNsaWNrXCIsIChldmVudCwgZCkgPT4ge1xuICAgICAgICAvLyBBZGQgc2FtZSBjbGljayBoYW5kbGVyIHRvIHRleHRcbiAgICAgICAgc2V0VmlzaWJpbGl0eSgocHJldikgPT4gKHtcbiAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgIFtkIGFzIGtleW9mIHR5cGVvZiBwcmV2XTogIXByZXZbZCBhcyBrZXlvZiB0eXBlb2YgcHJldl0sXG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICB9LCBbXG4gICAgZGF0YSxcbiAgICB3aXRoR3JpZGxpbmVzLFxuICAgIHdpdGhDdXJ2ZUxpbmUsXG4gICAgY29udGFpbmVyV2lkdGgsXG4gICAgd2l0aERvdHMsXG4gICAgd2l0aEhvdmVyLFxuICAgIHZpc2liaWxpdHksXG4gIF0pO1xuXG4gIHJldHVybiA8ZGl2IHJlZj17Y29udGFpbmVyUmVmfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLz47XG59XG4iXSwibmFtZXMiOlsiZDMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiY29sb3JTY2FsZSIsInNjYWxlT3JkaW5hbCIsImRvbWFpbiIsInJhbmdlIiwic2NoZW1lU2V0MiIsIkxpbmVDaGFydCIsImRhdGEiLCJ3aXRoSG92ZXIiLCJ3aXRoR3JpZGxpbmVzIiwid2l0aEN1cnZlTGluZSIsIndpdGhEb3RzIiwiY29udGFpbmVyUmVmIiwic3ZnUmVmIiwidG9vbHRpcFJlZiIsImNvbnRhaW5lcldpZHRoIiwic2V0Q29udGFpbmVyV2lkdGgiLCJ2aXNpYmlsaXR5Iiwic2V0VmlzaWJpbGl0eSIsIk1DVSIsIkRDVSIsInVwZGF0ZVdpZHRoIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZWxlY3QiLCJhcHBlbmQiLCJub2RlIiwiY2xhc3NlZCIsInN2ZyIsInRvb2x0aXAiLCJzZWxlY3RBbGwiLCJyZW1vdmUiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJoZWlnaHQiLCJhdHRyIiwiZmlsdGVyZWREYXRhIiwiYWxsVmlzaWJsZURhdGEiLCJ4Iiwic2NhbGVQb2ludCIsIm1hcCIsImQiLCJuYW1lIiwiZmlsdGVyIiwidmFsdWUiLCJpbmRleCIsInNlbGYiLCJpbmRleE9mIiwieSIsInNjYWxlTGluZWFyIiwibWF4IiwieEF4aXMiLCJheGlzQm90dG9tIiwieUF4aXMiLCJheGlzTGVmdCIsInRpY2tzIiwiZyIsImNhbGwiLCJ1cGRhdGVZQXhpcyIsImdlbmVyYXRlTGluZSIsImRhdGFzZXQiLCJjb2xvciIsImxhYmVsIiwibGluZUdlbmVyYXRvciIsImxpbmUiLCJjdXJ2ZSIsImN1cnZlTW9ub3RvbmVYIiwicGF0aCIsImVudGVyIiwibWVyZ2UiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0IiwiZG90cyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwieUF4aXNHIiwiZW1wdHkiLCJsZWdlbmQiLCJpIiwic3R5bGUiLCJvbiIsImV2ZW50IiwicHJldiIsInRleHQiLCJkaXYiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/line-chart/LineChart.tsx\n"));

/***/ })

});