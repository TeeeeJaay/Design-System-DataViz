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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LineChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"(app-pages-browser)/./node_modules/d3/src/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst colorScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleOrdinal(d3__WEBPACK_IMPORTED_MODULE_1__.schemeSet2);\nfunction LineChart(param) {\n    let { data, withHover, withGridlines, ranked } = param;\n    _s();\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [containerWidth, setContainerWidth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(800);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const updateWidth = ()=>{\n            if (containerRef.current) {\n                setContainerWidth(containerRef.current.getBoundingClientRect().width);\n            }\n        };\n        updateWidth();\n        window.addEventListener(\"resize\", updateWidth);\n        return ()=>window.removeEventListener(\"resize\", updateWidth);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!svgRef.current) {\n            svgRef.current = d3__WEBPACK_IMPORTED_MODULE_1__.select(containerRef.current).append(\"svg\").node();\n        }\n        const svg = d3__WEBPACK_IMPORTED_MODULE_1__.select(svgRef.current);\n        svg.selectAll(\"*\").remove();\n        const margin = {\n            top: 20,\n            right: 20,\n            bottom: 30,\n            left: 40\n        };\n        const width = containerWidth - margin.left - margin.right;\n        const height = 400 - margin.top - margin.bottom;\n        svg.attr(\"width\", width + margin.left + margin.right).attr(\"height\", height + margin.top + margin.bottom);\n        const g = svg.append(\"g\").attr(\"transform\", \"translate(\".concat(margin.left, \",\").concat(margin.top, \")\"));\n        const x = d3__WEBPACK_IMPORTED_MODULE_1__.scalePoint().range([\n            0,\n            width\n        ]).domain(data.map((d)=>d.name));\n        const y = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear().range([\n            height,\n            0\n        ]).domain([\n            0,\n            d3__WEBPACK_IMPORTED_MODULE_1__.max(data, (d)=>d.value * 1.2)\n        ]);\n        if (withGridlines) {\n            const yAxisTicks = y.ticks().slice(1);\n            g.selectAll(\".grid-line\").data(yAxisTicks, (d)=>d).enter().append(\"line\").attr(\"class\", \"grid-line\").attr(\"x1\", 0).attr(\"x2\", width).attr(\"y1\", (d)=>y(d)).attr(\"y2\", (d)=>y(d)).attr(\"stroke\", \"#ccc\");\n        }\n        const line = d3__WEBPACK_IMPORTED_MODULE_1__.line().x((d)=>x(d.name)).y((d)=>y(d.value));\n        g.append(\"path\").datum(data).attr(\"fill\", \"none\").attr(\"stroke\", colorScale(\"1\")).attr(\"stroke-width\", 2).attr(\"d\", line);\n        g.append(\"g\").attr(\"transform\", \"translate(0,\".concat(height, \")\")).call(d3__WEBPACK_IMPORTED_MODULE_1__.axisBottom(x));\n        g.append(\"g\").call(d3__WEBPACK_IMPORTED_MODULE_1__.axisLeft(y));\n    }, [\n        data,\n        withGridlines,\n        containerWidth\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        style: {\n            width: \"100%\",\n            height: \"100%\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/tinamariejensen/Documents/code/Design-System-DataViz/src/app/line-chart/LineChart.tsx\",\n        lineNumber: 98,\n        columnNumber: 10\n    }, this);\n}\n_s(LineChart, \"bWon5xtI9gwS1pc5tr8fNmn4obI=\");\n_c = LineChart;\nvar _c;\n$RefreshReg$(_c, \"LineChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGluZS1jaGFydC9MaW5lQ2hhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFDa0M7QUFTM0QsTUFBTUssYUFBYUwsNENBQWUsQ0FBQ0EsMENBQWE7QUFFakMsU0FBU1EsVUFBVSxLQUtqQjtRQUxpQixFQUNoQ0MsSUFBSSxFQUNKQyxTQUFTLEVBQ1RDLGFBQWEsRUFDYkMsTUFBTSxFQUNTLEdBTGlCOztJQU1oQyxNQUFNQyxlQUFlVCw2Q0FBTUEsQ0FBaUI7SUFDNUMsTUFBTVUsU0FBU1YsNkNBQU1BLENBQXVCO0lBQzVDLE1BQU0sQ0FBQ1csZ0JBQWdCQyxrQkFBa0IsR0FBR2IsK0NBQVFBLENBQVM7SUFFN0RELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWUsY0FBYztZQUNsQixJQUFJSixhQUFhSyxPQUFPLEVBQUU7Z0JBQ3hCRixrQkFBa0JILGFBQWFLLE9BQU8sQ0FBQ0MscUJBQXFCLEdBQUdDLEtBQUs7WUFDdEU7UUFDRjtRQUVBSDtRQUNBSSxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVTDtRQUNsQyxPQUFPLElBQU1JLE9BQU9FLG1CQUFtQixDQUFDLFVBQVVOO0lBQ3BELEdBQUcsRUFBRTtJQUVMZixnREFBU0EsQ0FBQztRQUNSLElBQUksQ0FBQ1ksT0FBT0ksT0FBTyxFQUFFO1lBQ25CSixPQUFPSSxPQUFPLEdBQUdsQixzQ0FBUyxDQUFDYSxhQUFhSyxPQUFPLEVBQUVPLE1BQU0sQ0FBQyxPQUFPQyxJQUFJO1FBQ3JFO1FBRUEsTUFBTUMsTUFBTTNCLHNDQUFTLENBQUNjLE9BQU9JLE9BQU87UUFDcENTLElBQUlDLFNBQVMsQ0FBQyxLQUFLQyxNQUFNO1FBRXpCLE1BQU1DLFNBQVM7WUFBRUMsS0FBSztZQUFJQyxPQUFPO1lBQUlDLFFBQVE7WUFBSUMsTUFBTTtRQUFHO1FBQzFELE1BQU1kLFFBQVFMLGlCQUFpQmUsT0FBT0ksSUFBSSxHQUFHSixPQUFPRSxLQUFLO1FBQ3pELE1BQU1HLFNBQVMsTUFBTUwsT0FBT0MsR0FBRyxHQUFHRCxPQUFPRyxNQUFNO1FBRS9DTixJQUNHUyxJQUFJLENBQUMsU0FBU2hCLFFBQVFVLE9BQU9JLElBQUksR0FBR0osT0FBT0UsS0FBSyxFQUNoREksSUFBSSxDQUFDLFVBQVVELFNBQVNMLE9BQU9DLEdBQUcsR0FBR0QsT0FBT0csTUFBTTtRQUVyRCxNQUFNSSxJQUFJVixJQUNQRixNQUFNLENBQUMsS0FDUFcsSUFBSSxDQUFDLGFBQWEsYUFBNEJOLE9BQWZBLE9BQU9JLElBQUksRUFBQyxLQUFjLE9BQVhKLE9BQU9DLEdBQUcsRUFBQztRQUU1RCxNQUFNTyxJQUFJdEMsMENBQ0csR0FDVndDLEtBQUssQ0FBQztZQUFDO1lBQUdwQjtTQUFNLEVBQ2hCcUIsTUFBTSxDQUFDaEMsS0FBS2lDLEdBQUcsQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxJQUFJO1FBRWhDLE1BQU1DLElBQUk3QywyQ0FDSSxHQUNYd0MsS0FBSyxDQUFDO1lBQUNMO1lBQVE7U0FBRSxFQUNqQk0sTUFBTSxDQUFDO1lBQUM7WUFBR3pDLG1DQUFNLENBQUNTLE1BQU0sQ0FBQ2tDLElBQU1BLEVBQUVLLEtBQUssR0FBRztTQUFLO1FBRWpELElBQUlyQyxlQUFlO1lBQ2pCLE1BQU1zQyxhQUFhSixFQUFFSyxLQUFLLEdBQUdDLEtBQUssQ0FBQztZQUNuQ2QsRUFBRVQsU0FBUyxDQUFDLGNBQ1RuQixJQUFJLENBQUN3QyxZQUFZLENBQUNOLElBQU1BLEdBQ3hCUyxLQUFLLEdBQ0wzQixNQUFNLENBQUMsUUFDUFcsSUFBSSxDQUFDLFNBQVMsYUFDZEEsSUFBSSxDQUFDLE1BQU0sR0FDWEEsSUFBSSxDQUFDLE1BQU1oQixPQUNYZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQ08sSUFBTUUsRUFBRUYsSUFDcEJQLElBQUksQ0FBQyxNQUFNLENBQUNPLElBQU1FLEVBQUVGLElBQ3BCUCxJQUFJLENBQUMsVUFBVTtRQUNwQjtRQUVBLE1BQU1pQixPQUFPckQsb0NBQ04sR0FDSnNDLENBQUMsQ0FBQyxDQUFDSyxJQUFNTCxFQUFFSyxFQUFFQyxJQUFJLEdBQ2pCQyxDQUFDLENBQUMsQ0FBQ0YsSUFBTUUsRUFBRUYsRUFBRUssS0FBSztRQUVyQlgsRUFBRVosTUFBTSxDQUFDLFFBQ042QixLQUFLLENBQUM3QyxNQUNOMkIsSUFBSSxDQUFDLFFBQVEsUUFDYkEsSUFBSSxDQUFDLFVBQVUvQixXQUFXLE1BQzFCK0IsSUFBSSxDQUFDLGdCQUFnQixHQUNyQkEsSUFBSSxDQUFDLEtBQUtpQjtRQUViaEIsRUFBRVosTUFBTSxDQUFDLEtBQ05XLElBQUksQ0FBQyxhQUFhLGVBQXNCLE9BQVBELFFBQU8sTUFDeENvQixJQUFJLENBQUN2RCwwQ0FBYSxDQUFDc0M7UUFFdEJELEVBQUVaLE1BQU0sQ0FBQyxLQUFLOEIsSUFBSSxDQUFDdkQsd0NBQVcsQ0FBQzZDO0lBQ2pDLEdBQUc7UUFBQ3BDO1FBQU1FO1FBQWVJO0tBQWU7SUFFeEMscUJBQU8sOERBQUMyQztRQUFJQyxLQUFLOUM7UUFBYytDLE9BQU87WUFBRXhDLE9BQU87WUFBUWUsUUFBUTtRQUFPOzs7Ozs7QUFDeEU7R0F0RndCM0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9saW5lLWNoYXJ0L0xpbmVDaGFydC50c3g/MWY1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBMaW5lQ2hhcnRQcm9wcyA9IHtcbiAgZGF0YTogeyBuYW1lOiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfVtdO1xuICB3aXRoSG92ZXI/OiBib29sZWFuO1xuICB3aXRoR3JpZGxpbmVzPzogYm9vbGVhbjtcbiAgcmFua2VkPzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lU2V0Mik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpbmVDaGFydCh7XG4gIGRhdGEsXG4gIHdpdGhIb3ZlcixcbiAgd2l0aEdyaWRsaW5lcyxcbiAgcmFua2VkLFxufTogTGluZUNoYXJ0UHJvcHMpIHtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3Qgc3ZnUmVmID0gdXNlUmVmPFNWR1NWR0VsZW1lbnQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2NvbnRhaW5lcldpZHRoLCBzZXRDb250YWluZXJXaWR0aF0gPSB1c2VTdGF0ZTxudW1iZXI+KDgwMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVXaWR0aCA9ICgpID0+IHtcbiAgICAgIGlmIChjb250YWluZXJSZWYuY3VycmVudCkge1xuICAgICAgICBzZXRDb250YWluZXJXaWR0aChjb250YWluZXJSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHVwZGF0ZVdpZHRoKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlV2lkdGgpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVXaWR0aCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc3ZnUmVmLmN1cnJlbnQpIHtcbiAgICAgIHN2Z1JlZi5jdXJyZW50ID0gZDMuc2VsZWN0KGNvbnRhaW5lclJlZi5jdXJyZW50KS5hcHBlbmQoXCJzdmdcIikubm9kZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChzdmdSZWYuY3VycmVudCk7XG4gICAgc3ZnLnNlbGVjdEFsbChcIipcIikucmVtb3ZlKCk7XG5cbiAgICBjb25zdCBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiAyMCwgYm90dG9tOiAzMCwgbGVmdDogNDAgfTtcbiAgICBjb25zdCB3aWR0aCA9IGNvbnRhaW5lcldpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgY29uc3QgaGVpZ2h0ID0gNDAwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICBzdmdcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKTtcblxuICAgIGNvbnN0IGcgPSBzdmdcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCR7bWFyZ2luLnRvcH0pYCk7XG5cbiAgICBjb25zdCB4ID0gZDNcbiAgICAgIC5zY2FsZVBvaW50KClcbiAgICAgIC5yYW5nZShbMCwgd2lkdGhdKVxuICAgICAgLmRvbWFpbihkYXRhLm1hcCgoZCkgPT4gZC5uYW1lKSk7XG5cbiAgICBjb25zdCB5ID0gZDNcbiAgICAgIC5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoW2hlaWdodCwgMF0pXG4gICAgICAuZG9tYWluKFswLCBkMy5tYXgoZGF0YSwgKGQpID0+IGQudmFsdWUgKiAxLjIpXSk7XG5cbiAgICBpZiAod2l0aEdyaWRsaW5lcykge1xuICAgICAgY29uc3QgeUF4aXNUaWNrcyA9IHkudGlja3MoKS5zbGljZSgxKTtcbiAgICAgIGcuc2VsZWN0QWxsKFwiLmdyaWQtbGluZVwiKVxuICAgICAgICAuZGF0YSh5QXhpc1RpY2tzLCAoZCkgPT4gZCBhcyBudW1iZXIpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJncmlkLWxpbmVcIilcbiAgICAgICAgLmF0dHIoXCJ4MVwiLCAwKVxuICAgICAgICAuYXR0cihcIngyXCIsIHdpZHRoKVxuICAgICAgICAuYXR0cihcInkxXCIsIChkKSA9PiB5KGQpKVxuICAgICAgICAuYXR0cihcInkyXCIsIChkKSA9PiB5KGQpKVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiNjY2NcIik7XG4gICAgfVxuXG4gICAgY29uc3QgbGluZSA9IGQzXG4gICAgICAubGluZTx7IG5hbWU6IHN0cmluZzsgdmFsdWU6IG51bWJlciB9PigpXG4gICAgICAueCgoZCkgPT4geChkLm5hbWUpKVxuICAgICAgLnkoKGQpID0+IHkoZC52YWx1ZSkpO1xuXG4gICAgZy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuZGF0dW0oZGF0YSlcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIGNvbG9yU2NhbGUoXCIxXCIpKVxuICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMilcbiAgICAgIC5hdHRyKFwiZFwiLCBsaW5lKTtcblxuICAgIGcuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCR7aGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSk7XG5cbiAgICBnLmFwcGVuZChcImdcIikuY2FsbChkMy5heGlzTGVmdCh5KSk7XG4gIH0sIFtkYXRhLCB3aXRoR3JpZGxpbmVzLCBjb250YWluZXJXaWR0aF0pO1xuXG4gIHJldHVybiA8ZGl2IHJlZj17Y29udGFpbmVyUmVmfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLz47XG59XG4iXSwibmFtZXMiOlsiZDMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiY29sb3JTY2FsZSIsInNjYWxlT3JkaW5hbCIsInNjaGVtZVNldDIiLCJMaW5lQ2hhcnQiLCJkYXRhIiwid2l0aEhvdmVyIiwid2l0aEdyaWRsaW5lcyIsInJhbmtlZCIsImNvbnRhaW5lclJlZiIsInN2Z1JlZiIsImNvbnRhaW5lcldpZHRoIiwic2V0Q29udGFpbmVyV2lkdGgiLCJ1cGRhdGVXaWR0aCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2VsZWN0IiwiYXBwZW5kIiwibm9kZSIsInN2ZyIsInNlbGVjdEFsbCIsInJlbW92ZSIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImhlaWdodCIsImF0dHIiLCJnIiwieCIsInNjYWxlUG9pbnQiLCJyYW5nZSIsImRvbWFpbiIsIm1hcCIsImQiLCJuYW1lIiwieSIsInNjYWxlTGluZWFyIiwibWF4IiwidmFsdWUiLCJ5QXhpc1RpY2tzIiwidGlja3MiLCJzbGljZSIsImVudGVyIiwibGluZSIsImRhdHVtIiwiY2FsbCIsImF4aXNCb3R0b20iLCJheGlzTGVmdCIsImRpdiIsInJlZiIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/line-chart/LineChart.tsx\n"));

/***/ })

});