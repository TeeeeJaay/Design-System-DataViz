"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pie-chart/page",{

/***/ "(app-pages-browser)/./src/app/pie-chart/PieChart.tsx":
/*!****************************************!*\
  !*** ./src/app/pie-chart/PieChart.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PieChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ \"(app-pages-browser)/./node_modules/d3/src/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst MARGIN = 30;\nfunction PieChart(param) {\n    let { width, height, data, percentageLabel, withLabels, withLegend, withHover } = param;\n    _s();\n    const radius = Math.min(width, height) / 2 - MARGIN;\n    const innerRadius = radius / 4;\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const legendRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [labels, setLabels] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const colorScale = d3__WEBPACK_IMPORTED_MODULE_2__.scaleOrdinal(d3__WEBPACK_IMPORTED_MODULE_2__.schemeSet2);\n    const updateLabelVisibility = (id, visible)=>{\n        setLabels((currentLabels)=>currentLabels.map((label)=>({\n                    ...label,\n                    visible: label.id === id ? visible : label.visible\n                })));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!ref.current || !data) return; // Sikrer at ref og data er tilgængelige\n        console.log(\"effecten er startet\");\n        const svg = d3__WEBPACK_IMPORTED_MODULE_2__.select(ref.current).attr(\"width\", width).attr(\"height\", height).classed(\"pie-chart\", true);\n        const g = svg.append(\"g\").attr(\"transform\", \"translate(\".concat(width / 2, \", \").concat(height / 2, \")\"));\n        const pieGenerator = d3__WEBPACK_IMPORTED_MODULE_2__.pie().sort(null).value((d)=>d.value);\n        const pieData = pieGenerator(data);\n        const arcPathGenerator = d3__WEBPACK_IMPORTED_MODULE_2__.arc().innerRadius(innerRadius).outerRadius(radius);\n        const paths = g.selectAll(\"path\").data(pieData);\n        paths.enter().append(\"path\").attr(\"d\", arcPathGenerator).attr(\"fill\", (d, i)=>colorScale(i.toString())).on(\"mouseenter\", function(event, d) {\n            if (withHover) {\n                d3__WEBPACK_IMPORTED_MODULE_2__.select(this).classed(\"scale-[1.02]\", true);\n                d3__WEBPACK_IMPORTED_MODULE_2__.selectAll(\"path\").filter((p)=>p !== d).classed(\"opacity-50\", true);\n                updateLabelVisibility(d.index, true);\n            }\n        }).on(\"mouseleave\", function(event, d) {\n            if (withHover) {\n                d3__WEBPACK_IMPORTED_MODULE_2__.selectAll(\"path\").classed(\"opacity-50\", false);\n                d3__WEBPACK_IMPORTED_MODULE_2__.select(this).classed(\"scale-[1.02]\", false);\n                updateLabelVisibility(d.index, false);\n            }\n            if (withLabels) {\n                d3__WEBPACK_IMPORTED_MODULE_2__.selectAll(\"path\").classed(\"opacity-50\", false);\n                d3__WEBPACK_IMPORTED_MODULE_2__.select(this).classed(\"scale-[1.02]\", false);\n                updateLabelVisibility(d.index, true);\n            }\n        });\n        paths.exit().remove();\n        const arcLabelGenerator = d3__WEBPACK_IMPORTED_MODULE_2__.arc().innerRadius(innerRadius).outerRadius(radius).padAngle(0.01).padRadius(innerRadius);\n        const initialLabels = pieData.map((d, index)=>{\n            const [x, y] = arcLabelGenerator.centroid(d);\n            return {\n                id: index,\n                position: {\n                    x: x + width / 2,\n                    y: y + height / 2\n                },\n                name: d.data.name,\n                value: percentageLabel ? \"\".concat((d.data.value * 100).toFixed(1), \"%\") : \"\".concat(d.data.value, \" film\"),\n                visible: withLabels\n            };\n        });\n        setLabels(initialLabels);\n        if (withLegend) {\n            // Create legend\n            const legendContainer = d3__WEBPACK_IMPORTED_MODULE_2__.select(legendRef.current);\n            legendContainer.selectAll(\"*\").remove(); // Clear previous legend items\n            const legendItems = legendContainer.selectAll(\".legend-item\").data(data).enter().append(\"div\").attr(\"class\", \"legend-item flex items-center mb-2\");\n            legendItems.append(\"div\").attr(\"class\", \"legend-color-block\").style(\"background-color\", (d, i)=>colorScale(i.toString())).style(\"width\", \"20px\").style(\"height\", \"20px\").style(\"margin-right\", \"10px\");\n            legendItems.append(\"div\").text((d)=>d.name);\n        } else {\n            d3__WEBPACK_IMPORTED_MODULE_2__.selectAll(\".legend-item\").remove();\n        }\n    }, [\n        data,\n        width,\n        height,\n        withLegend,\n        withLabels,\n        withHover,\n        percentageLabel,\n        react__WEBPACK_IMPORTED_MODULE_1__.useEffect\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: width,\n            height: height\n        },\n        className: \"relative flex justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                ref: ref,\n                className: \"absolute top-0 left-0\"\n            }, void 0, false, {\n                fileName: \"/Users/tinamariejensen/Documents/code/Design-System-DataViz/src/app/pie-chart/PieChart.tsx\",\n                lineNumber: 169,\n                columnNumber: 7\n            }, this),\n            labels.filter((label)=>label.visible).map((label, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center text-zinc-800\",\n                    style: {\n                        position: \"absolute\",\n                        left: \"\".concat(label.position.x, \"px\"),\n                        top: \"\".concat(label.position.y, \"px\"),\n                        transform: \"translate(-50%, -50%)\",\n                        pointerEvents: \"none\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" font-semibold text-lg\",\n                            children: label.name\n                        }, void 0, false, {\n                            fileName: \"/Users/tinamariejensen/Documents/code/Design-System-DataViz/src/app/pie-chart/PieChart.tsx\",\n                            lineNumber: 184,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: label.value\n                        }, void 0, false, {\n                            fileName: \"/Users/tinamariejensen/Documents/code/Design-System-DataViz/src/app/pie-chart/PieChart.tsx\",\n                            lineNumber: 185,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/tinamariejensen/Documents/code/Design-System-DataViz/src/app/pie-chart/PieChart.tsx\",\n                    lineNumber: 173,\n                    columnNumber: 11\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: legendRef,\n                className: \"absolute bottom-[-20px] flex gap-2\"\n            }, void 0, false, {\n                fileName: \"/Users/tinamariejensen/Documents/code/Design-System-DataViz/src/app/pie-chart/PieChart.tsx\",\n                lineNumber: 188,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tinamariejensen/Documents/code/Design-System-DataViz/src/app/pie-chart/PieChart.tsx\",\n        lineNumber: 165,\n        columnNumber: 5\n    }, this);\n}\n_s(PieChart, \"dHZv2VtHMJEjcPuj89lxH+QTePs=\");\n_c = PieChart;\nvar _c;\n$RefreshReg$(_c, \"PieChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGllLWNoYXJ0L1BpZUNoYXJ0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJEO0FBQ2xDO0FBa0J6QixNQUFNSyxTQUFTO0FBRUEsU0FBU0MsU0FBUyxLQVFmO1FBUmUsRUFDL0JDLEtBQUssRUFDTEMsTUFBTSxFQUNOQyxJQUFJLEVBQ0pDLGVBQWUsRUFDZkMsVUFBVSxFQUNWQyxVQUFVLEVBQ1ZDLFNBQVMsRUFDTyxHQVJlOztJQVMvQixNQUFNQyxTQUFTQyxLQUFLQyxHQUFHLENBQUNULE9BQU9DLFVBQVUsSUFBSUg7SUFDN0MsTUFBTVksY0FBY0gsU0FBUztJQUM3QixNQUFNSSxNQUFNZiw2Q0FBTUEsQ0FBZ0I7SUFDbEMsTUFBTWdCLFlBQVloQiw2Q0FBTUEsQ0FBaUI7SUFFekMsTUFBTSxDQUFDaUIsUUFBUUMsVUFBVSxHQUFHbkIsK0NBQVFBLENBQTJCLEVBQUU7SUFFakUsTUFBTW9CLGFBQWFsQiw0Q0FBZSxDQUFDQSwwQ0FBYTtJQUVoRCxNQUFNcUIsd0JBQXdCLENBQUNDLElBQVlDO1FBQ3pDTixVQUFVLENBQUNPLGdCQUNUQSxjQUFjQyxHQUFHLENBQUMsQ0FBQ0MsUUFBVztvQkFDNUIsR0FBR0EsS0FBSztvQkFDUkgsU0FBU0csTUFBTUosRUFBRSxLQUFLQSxLQUFLQyxVQUFVRyxNQUFNSCxPQUFPO2dCQUNwRDtJQUVKO0lBRUExQixnREFBU0EsQ0FBQztRQUNSLElBQUksQ0FBQ2lCLElBQUlhLE9BQU8sSUFBSSxDQUFDdEIsTUFBTSxRQUFRLHdDQUF3QztRQUMzRXVCLFFBQVFDLEdBQUcsQ0FBQztRQUVaLE1BQU1DLE1BQU05QixzQ0FDSCxDQUFDYyxJQUFJYSxPQUFPLEVBQ2xCSyxJQUFJLENBQUMsU0FBUzdCLE9BQ2Q2QixJQUFJLENBQUMsVUFBVTVCLFFBQ2Y2QixPQUFPLENBQUMsYUFBYTtRQUV4QixNQUFNQyxJQUFJSixJQUNQSyxNQUFNLENBQUMsS0FDUEgsSUFBSSxDQUFD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L2FwcC9waWUtY2hhcnQvUGllQ2hhcnQudHN4PzJkNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgeyBteWRhdGF0eXBlIH0gZnJvbSBcIkAvdHlwZXNcIjtcblxudHlwZSBEYXRhSXRlbSA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICB2YWx1ZTogbnVtYmVyO1xufTtcblxudHlwZSBEb251dENoYXJ0UHJvcHMgPSB7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBwZXJjZW50YWdlTGFiZWw/OiBib29sZWFuO1xuICB3aXRoTGFiZWxzPzogYm9vbGVhbjtcbiAgd2l0aExlZ2VuZD86IGJvb2xlYW47XG4gIHdpdGhIb3Zlcj86IGJvb2xlYW47XG4gIGRhdGE6IERhdGFJdGVtW107XG59O1xuXG5jb25zdCBNQVJHSU4gPSAzMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGllQ2hhcnQoe1xuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBkYXRhLFxuICBwZXJjZW50YWdlTGFiZWwsXG4gIHdpdGhMYWJlbHMsXG4gIHdpdGhMZWdlbmQsXG4gIHdpdGhIb3Zlcixcbn06IERvbnV0Q2hhcnRQcm9wcykge1xuICBjb25zdCByYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDIgLSBNQVJHSU47XG4gIGNvbnN0IGlubmVyUmFkaXVzID0gcmFkaXVzIC8gNDtcbiAgY29uc3QgcmVmID0gdXNlUmVmPFNWR1NWR0VsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBsZWdlbmRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IFtsYWJlbHMsIHNldExhYmVsc10gPSB1c2VTdGF0ZTx7IFtrZXk6IHN0cmluZ106IGFueSB9W10+KFtdKTtcblxuICBjb25zdCBjb2xvclNjYWxlID0gZDMuc2NhbGVPcmRpbmFsKGQzLnNjaGVtZVNldDIpO1xuXG4gIGNvbnN0IHVwZGF0ZUxhYmVsVmlzaWJpbGl0eSA9IChpZDogbnVtYmVyLCB2aXNpYmxlOiBib29sZWFuKSA9PiB7XG4gICAgc2V0TGFiZWxzKChjdXJyZW50TGFiZWxzKSA9PlxuICAgICAgY3VycmVudExhYmVscy5tYXAoKGxhYmVsKSA9PiAoe1xuICAgICAgICAuLi5sYWJlbCxcbiAgICAgICAgdmlzaWJsZTogbGFiZWwuaWQgPT09IGlkID8gdmlzaWJsZSA6IGxhYmVsLnZpc2libGUsXG4gICAgICB9KSlcbiAgICApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFyZWYuY3VycmVudCB8fCAhZGF0YSkgcmV0dXJuOyAvLyBTaWtyZXIgYXQgcmVmIG9nIGRhdGEgZXIgdGlsZ8OmbmdlbGlnZVxuICAgIGNvbnNvbGUubG9nKFwiZWZmZWN0ZW4gZXIgc3RhcnRldFwiKTtcblxuICAgIGNvbnN0IHN2ZyA9IGQzXG4gICAgICAuc2VsZWN0KHJlZi5jdXJyZW50KVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodClcbiAgICAgIC5jbGFzc2VkKFwicGllLWNoYXJ0XCIsIHRydWUpO1xuXG4gICAgY29uc3QgZyA9IHN2Z1xuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHt3aWR0aCAvIDJ9LCAke2hlaWdodCAvIDJ9KWApO1xuXG4gICAgY29uc3QgcGllR2VuZXJhdG9yID0gZDNcbiAgICAgIC5waWU8RGF0YUl0ZW0+KClcbiAgICAgIC5zb3J0KG51bGwpXG4gICAgICAudmFsdWUoKGQpID0+IGQudmFsdWUpO1xuXG4gICAgY29uc3QgcGllRGF0YSA9IHBpZUdlbmVyYXRvcihkYXRhKTtcblxuICAgIGNvbnN0IGFyY1BhdGhHZW5lcmF0b3IgPSBkM1xuICAgICAgLmFyYzxkMy5QaWVBcmNEYXR1bTxEYXRhSXRlbT4+KClcbiAgICAgIC5pbm5lclJhZGl1cyhpbm5lclJhZGl1cylcbiAgICAgIC5vdXRlclJhZGl1cyhyYWRpdXMpO1xuXG4gICAgY29uc3QgcGF0aHMgPSBnLnNlbGVjdEFsbChcInBhdGhcIikuZGF0YShwaWVEYXRhKTtcblxuICAgIHBhdGhzXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgIC5hdHRyKFwiZFwiLCBhcmNQYXRoR2VuZXJhdG9yKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIChkLCBpKSA9PiBjb2xvclNjYWxlKGkudG9TdHJpbmcoKSkpXG5cbiAgICAgIC5vbihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24gKGV2ZW50LCBkKSB7XG4gICAgICAgIGlmICh3aXRoSG92ZXIpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykuY2xhc3NlZChcInNjYWxlLVsxLjAyXVwiLCB0cnVlKTtcbiAgICAgICAgICBkMy5zZWxlY3RBbGwoXCJwYXRoXCIpXG4gICAgICAgICAgICAuZmlsdGVyKChwKSA9PiBwICE9PSBkKVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJvcGFjaXR5LTUwXCIsIHRydWUpO1xuICAgICAgICAgIHVwZGF0ZUxhYmVsVmlzaWJpbGl0eShkLmluZGV4LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gKGV2ZW50LCBkKSB7XG4gICAgICAgIGlmICh3aXRoSG92ZXIpIHtcbiAgICAgICAgICBkMy5zZWxlY3RBbGwoXCJwYXRoXCIpLmNsYXNzZWQoXCJvcGFjaXR5LTUwXCIsIGZhbHNlKTtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykuY2xhc3NlZChcInNjYWxlLVsxLjAyXVwiLCBmYWxzZSk7XG4gICAgICAgICAgdXBkYXRlTGFiZWxWaXNpYmlsaXR5KGQuaW5kZXgsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2l0aExhYmVscykge1xuICAgICAgICAgIGQzLnNlbGVjdEFsbChcInBhdGhcIikuY2xhc3NlZChcIm9wYWNpdHktNTBcIiwgZmFsc2UpO1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKFwic2NhbGUtWzEuMDJdXCIsIGZhbHNlKTtcbiAgICAgICAgICB1cGRhdGVMYWJlbFZpc2liaWxpdHkoZC5pbmRleCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgcGF0aHMuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgY29uc3QgYXJjTGFiZWxHZW5lcmF0b3IgPSBkM1xuICAgICAgLmFyYzxkMy5QaWVBcmNEYXR1bTxEYXRhSXRlbT4+KClcbiAgICAgIC5pbm5lclJhZGl1cyhpbm5lclJhZGl1cylcbiAgICAgIC5vdXRlclJhZGl1cyhyYWRpdXMpXG4gICAgICAucGFkQW5nbGUoMC4wMSlcbiAgICAgIC5wYWRSYWRpdXMoaW5uZXJSYWRpdXMpO1xuXG4gICAgY29uc3QgaW5pdGlhbExhYmVscyA9IHBpZURhdGEubWFwKChkLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgW3gsIHldID0gYXJjTGFiZWxHZW5lcmF0b3IuY2VudHJvaWQoZCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogaW5kZXgsXG4gICAgICAgIHBvc2l0aW9uOiB7IHg6IHggKyB3aWR0aCAvIDIsIHk6IHkgKyBoZWlnaHQgLyAyIH0sXG4gICAgICAgIG5hbWU6IGQuZGF0YS5uYW1lLFxuICAgICAgICB2YWx1ZTogcGVyY2VudGFnZUxhYmVsXG4gICAgICAgICAgPyBgJHsoZC5kYXRhLnZhbHVlICogMTAwKS50b0ZpeGVkKDEpfSVgXG4gICAgICAgICAgOiBgJHtkLmRhdGEudmFsdWV9IGZpbG1gLFxuICAgICAgICB2aXNpYmxlOiB3aXRoTGFiZWxzLCAvLyBDb250cm9sIHZpc2liaWxpdHkgZGlyZWN0bHkgYmFzZWQgb24gd2l0aExhYmVsc1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHNldExhYmVscyhpbml0aWFsTGFiZWxzKTtcblxuICAgIGlmICh3aXRoTGVnZW5kKSB7XG4gICAgICAvLyBDcmVhdGUgbGVnZW5kXG4gICAgICBjb25zdCBsZWdlbmRDb250YWluZXIgPSBkMy5zZWxlY3QobGVnZW5kUmVmLmN1cnJlbnQpO1xuICAgICAgbGVnZW5kQ29udGFpbmVyLnNlbGVjdEFsbChcIipcIikucmVtb3ZlKCk7IC8vIENsZWFyIHByZXZpb3VzIGxlZ2VuZCBpdGVtc1xuXG4gICAgICBjb25zdCBsZWdlbmRJdGVtcyA9IGxlZ2VuZENvbnRhaW5lclxuICAgICAgICAuc2VsZWN0QWxsKFwiLmxlZ2VuZC1pdGVtXCIpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJkaXZcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxlZ2VuZC1pdGVtIGZsZXggaXRlbXMtY2VudGVyIG1iLTJcIik7XG5cbiAgICAgIGxlZ2VuZEl0ZW1zXG4gICAgICAgIC5hcHBlbmQoXCJkaXZcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxlZ2VuZC1jb2xvci1ibG9ja1wiKVxuICAgICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIChkLCBpKSA9PiBjb2xvclNjYWxlKGkudG9TdHJpbmcoKSkpXG4gICAgICAgIC5zdHlsZShcIndpZHRoXCIsIFwiMjBweFwiKVxuICAgICAgICAuc3R5bGUoXCJoZWlnaHRcIiwgXCIyMHB4XCIpXG4gICAgICAgIC5zdHlsZShcIm1hcmdpbi1yaWdodFwiLCBcIjEwcHhcIik7XG5cbiAgICAgIGxlZ2VuZEl0ZW1zLmFwcGVuZChcImRpdlwiKS50ZXh0KChkKSA9PiBkLm5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkMy5zZWxlY3RBbGwoXCIubGVnZW5kLWl0ZW1cIikucmVtb3ZlKCk7XG4gICAgfVxuICB9LCBbXG4gICAgZGF0YSxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgd2l0aExlZ2VuZCxcbiAgICB3aXRoTGFiZWxzLFxuICAgIHdpdGhIb3ZlcixcbiAgICBwZXJjZW50YWdlTGFiZWwsXG4gICAgdXNlRWZmZWN0LFxuICBdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfX1cbiAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXJcIlxuICAgID5cbiAgICAgIDxzdmcgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMFwiPjwvc3ZnPlxuICAgICAge2xhYmVsc1xuICAgICAgICAuZmlsdGVyKChsYWJlbCkgPT4gbGFiZWwudmlzaWJsZSlcbiAgICAgICAgLm1hcCgobGFiZWwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtemluYy04MDBcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgbGVmdDogYCR7bGFiZWwucG9zaXRpb24ueH1weGAsXG4gICAgICAgICAgICAgIHRvcDogYCR7bGFiZWwucG9zaXRpb24ueX1weGAsXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgtNTAlLCAtNTAlKWAsXG4gICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLCAvLyBEaXNhYmxlIHBvaW50ZXIgZXZlbnRzIGZvciBsYWJlbHNcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZm9udC1zZW1pYm9sZCB0ZXh0LWxnXCI+e2xhYmVsLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PntsYWJlbC52YWx1ZX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8ZGl2IHJlZj17bGVnZW5kUmVmfSBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tWy0yMHB4XSBmbGV4IGdhcC0yXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImQzIiwiTUFSR0lOIiwiUGllQ2hhcnQiLCJ3aWR0aCIsImhlaWdodCIsImRhdGEiLCJwZXJjZW50YWdlTGFiZWwiLCJ3aXRoTGFiZWxzIiwid2l0aExlZ2VuZCIsIndpdGhIb3ZlciIsInJhZGl1cyIsIk1hdGgiLCJtaW4iLCJpbm5lclJhZGl1cyIsInJlZiIsImxlZ2VuZFJlZiIsImxhYmVscyIsInNldExhYmVscyIsImNvbG9yU2NhbGUiLCJzY2FsZU9yZGluYWwiLCJzY2hlbWVTZXQyIiwidXBkYXRlTGFiZWxWaXNpYmlsaXR5IiwiaWQiLCJ2aXNpYmxlIiwiY3VycmVudExhYmVscyIsIm1hcCIsImxhYmVsIiwiY3VycmVudCIsImNvbnNvbGUiLCJsb2ciLCJzdmciLCJzZWxlY3QiLCJhdHRyIiwiY2xhc3NlZCIsImciLCJhcHBlbmQiLCJwaWVHZW5lcmF0b3IiLCJwaWUiLCJzb3J0IiwidmFsdWUiLCJkIiwicGllRGF0YSIsImFyY1BhdGhHZW5lcmF0b3IiLCJhcmMiLCJvdXRlclJhZGl1cyIsInBhdGhzIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJpIiwidG9TdHJpbmciLCJvbiIsImV2ZW50IiwiZmlsdGVyIiwicCIsImluZGV4IiwiZXhpdCIsInJlbW92ZSIsImFyY0xhYmVsR2VuZXJhdG9yIiwicGFkQW5nbGUiLCJwYWRSYWRpdXMiLCJpbml0aWFsTGFiZWxzIiwieCIsInkiLCJjZW50cm9pZCIsInBvc2l0aW9uIiwibmFtZSIsInRvRml4ZWQiLCJsZWdlbmRDb250YWluZXIiLCJsZWdlbmRJdGVtcyIsInN0eWxlIiwidGV4dCIsImRpdiIsImNsYXNzTmFtZSIsImxlZnQiLCJ0b3AiLCJ0cmFuc2Zvcm0iLCJwb2ludGVyRXZlbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pie-chart/PieChart.tsx\n"));

/***/ })

});