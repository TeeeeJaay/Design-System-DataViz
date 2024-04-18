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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LineChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"(app-pages-browser)/./node_modules/d3/src/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst colorScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleOrdinal(d3__WEBPACK_IMPORTED_MODULE_1__.schemeSet2);\nfunction LineChart(param) {\n    let { data, withHover, withGridlines, withCurveLine } = param;\n    _s();\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [containerWidth, setContainerWidth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(800);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const updateWidth = ()=>{\n            if (containerRef.current) {\n                setContainerWidth(containerRef.current.getBoundingClientRect().width);\n            }\n        };\n        updateWidth();\n        window.addEventListener(\"resize\", updateWidth);\n        return ()=>window.removeEventListener(\"resize\", updateWidth);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!svgRef.current) {\n            svgRef.current = d3__WEBPACK_IMPORTED_MODULE_1__.select(containerRef.current).append(\"svg\").node();\n        }\n        const svg = d3__WEBPACK_IMPORTED_MODULE_1__.select(svgRef.current);\n        svg.selectAll(\"*\").remove();\n        const margin = {\n            top: 20,\n            right: 20,\n            bottom: 30,\n            left: 40\n        };\n        const width = containerWidth - margin.left - margin.right;\n        const height = 400 - margin.top - margin.bottom;\n        svg.attr(\"width\", width + margin.left + margin.right).attr(\"height\", height + margin.top + margin.bottom);\n        const g = svg.append(\"g\").attr(\"transform\", \"translate(\".concat(margin.left, \",\").concat(margin.top, \")\"));\n        const x = d3__WEBPACK_IMPORTED_MODULE_1__.scalePoint().range([\n            0,\n            width\n        ]).domain(data.map((d)=>d.name));\n        const y = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear().range([\n            height,\n            0\n        ]).domain([\n            0,\n            d3__WEBPACK_IMPORTED_MODULE_1__.max(data, (d)=>d.value * 1.2)\n        ]);\n        if (withGridlines) {\n            const yAxisTicks = y.ticks().slice(1);\n            g.selectAll(\".grid-line\").data(yAxisTicks, (d)=>d).enter().append(\"line\").attr(\"class\", \"grid-line\").attr(\"x1\", 0).attr(\"x2\", width).attr(\"y1\", (d)=>y(d)).attr(\"y2\", (d)=>y(d)).attr(\"stroke\", \"#ccc\");\n        }\n        const line = d3__WEBPACK_IMPORTED_MODULE_1__.line().x((d)=>x(d.name)).y((d)=>y(d.value));\n        if (withCurveLine) {\n            line.curve(d3__WEBPACK_IMPORTED_MODULE_1__.curveMonotoneX); // This makes the line smoother\n        }\n        g.append(\"path\").datum(data).attr(\"fill\", \"none\").attr(\"stroke\", colorScale(\"1\")).attr(\"stroke-width\", 2).attr(\"d\", line);\n        g.append(\"g\").attr(\"transform\", \"translate(0,\".concat(height, \")\")).call(d3__WEBPACK_IMPORTED_MODULE_1__.axisBottom(x));\n        g.append(\"g\").call(d3__WEBPACK_IMPORTED_MODULE_1__.axisLeft(y));\n    }, [\n        data,\n        withGridlines,\n        withCurveLine,\n        containerWidth\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        style: {\n            width: \"100%\",\n            height: \"100%\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/tinamariejensen/Documents/code/Design-System-DataViz/src/app/line-chart/LineChart.tsx\",\n        lineNumber: 103,\n        columnNumber: 10\n    }, this);\n}\n_s(LineChart, \"bWon5xtI9gwS1pc5tr8fNmn4obI=\");\n_c = LineChart;\nvar _c;\n$RefreshReg$(_c, \"LineChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGluZS1jaGFydC9MaW5lQ2hhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFDa0M7QUFVM0QsTUFBTUssYUFBYUwsNENBQWUsQ0FBQ0EsMENBQWE7QUFFakMsU0FBU1EsVUFBVSxLQUtqQjtRQUxpQixFQUNoQ0MsSUFBSSxFQUNKQyxTQUFTLEVBQ1RDLGFBQWEsRUFDYkMsYUFBYSxFQUNFLEdBTGlCOztJQU1oQyxNQUFNQyxlQUFlVCw2Q0FBTUEsQ0FBaUI7SUFDNUMsTUFBTVUsU0FBU1YsNkNBQU1BLENBQXVCO0lBQzVDLE1BQU0sQ0FBQ1csZ0JBQWdCQyxrQkFBa0IsR0FBR2IsK0NBQVFBLENBQVM7SUFFN0RELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWUsY0FBYztZQUNsQixJQUFJSixhQUFhSyxPQUFPLEVBQUU7Z0JBQ3hCRixrQkFBa0JILGFBQWFLLE9BQU8sQ0FBQ0MscUJBQXFCLEdBQUdDLEtBQUs7WUFDdEU7UUFDRjtRQUVBSDtRQUNBSSxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVTDtRQUNsQyxPQUFPLElBQU1JLE9BQU9FLG1CQUFtQixDQUFDLFVBQVVOO0lBQ3BELEdBQUcsRUFBRTtJQUVMZixnREFBU0EsQ0FBQztRQUNSLElBQUksQ0FBQ1ksT0FBT0ksT0FBTyxFQUFFO1lBQ25CSixPQUFPSSxPQUFPLEdBQUdsQixzQ0FBUyxDQUFDYSxhQUFhSyxPQUFPLEVBQUVPLE1BQU0sQ0FBQyxPQUFPQyxJQUFJO1FBQ3JFO1FBRUEsTUFBTUMsTUFBTTNCLHNDQUFTLENBQUNjLE9BQU9JLE9BQU87UUFDcENTLElBQUlDLFNBQVMsQ0FBQyxLQUFLQyxNQUFNO1FBRXpCLE1BQU1DLFNBQVM7WUFBRUMsS0FBSztZQUFJQyxPQUFPO1lBQUlDLFFBQVE7WUFBSUMsTUFBTTtRQUFHO1FBQzFELE1BQU1kLFFBQVFMLGlCQUFpQmUsT0FBT0ksSUFBSSxHQUFHSixPQUFPRSxLQUFLO1FBQ3pELE1BQU1HLFNBQVMsTUFBTUwsT0FBT0MsR0FBRyxHQUFHRCxPQUFPRyxNQUFNO1FBRS9DTixJQUNHUyxJQUFJLENBQUMsU0FBU2hCLFFBQVFVLE9BQU9JLElBQUksR0FBR0osT0FBT0UsS0FBSyxFQUNoREksSUFBSSxDQUFDLFVBQVVELFNBQVNMLE9BQU9DLEdBQUcsR0FBR0QsT0FBT0csTUFBTTtRQUVyRCxNQUFNSSxJQUFJVixJQUNQRixNQUFNLENBQUMsS0FDUFcsSUFBSSxDQUFDLGFBQWEsYUFBNEJOLE9BQWZBLE9BQU9JLElBQUksRUFBQyxLQUFjLE9BQVhKLE9BQU9DLEdBQUcsRUFBQztRQUU1RCxNQUFNTyxJQUFJdEMsMENBQ0csR0FDVndDLEtBQUssQ0FBQztZQUFDO1lBQUdwQjtTQUFNLEVBQ2hCcUIsTUFBTSxDQUFDaEMsS0FBS2lDLEdBQUcsQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxJQUFJO1FBRWhDLE1BQU1DLElBQUk3QywyQ0FDSSxHQUNYd0MsS0FBSyxDQUFDO1lBQUNMO1lBQVE7U0FBRSxFQUNqQk0sTUFBTSxDQUFDO1lBQUM7WUFBR3pDLG1DQUFNLENBQUNTLE1BQU0sQ0FBQ2tDLElBQU1BLEVBQUVLLEtBQUssR0FBRztTQUFLO1FBRWpELElBQUlyQyxlQUFlO1lBQ2pCLE1BQU1zQyxhQUFhSixFQUFFSyxLQUFLLEdBQUdDLEtBQUssQ0FBQztZQUNuQ2QsRUFBRVQsU0FBUyxDQUFDLGNBQ1RuQixJQUFJLENBQUN3QyxZQUFZLENBQUNOLElBQU1BLEdBQ3hCUyxLQUFLLEdBQ0wzQixNQUFNLENBQUMsUUFDUFcsSUFBSSxDQUFDLFNBQVMsYUFDZEEsSUFBSSxDQUFDLE1BQU0sR0FDWEEsSUFBSSxDQUFDLE1BQU1oQixPQUNYZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQ08sSUFBTUUsRUFBRUYsSUFDcEJQLElBQUksQ0FBQyxNQUFNLENBQUNPLElBQU1FLEVBQUVGLElBQ3BCUCxJQUFJLENBQUMsVUFBVTtRQUNwQjtRQUVBLE1BQU1pQixPQUFPckQsb0NBQ04sR0FDSnNDLENBQUMsQ0FBQyxDQUFDSyxJQUFNTCxFQUFFSyxFQUFFQyxJQUFJLEdBQ2pCQyxDQUFDLENBQUMsQ0FBQ0YsSUFBTUUsRUFBRUYsRUFBRUssS0FBSztRQUVyQixJQUFJcEMsZUFBZTtZQUNqQnlDLEtBQUtDLEtBQUssQ0FBQ3RELDhDQUFpQixHQUFHLCtCQUErQjtRQUNoRTtRQUVBcUMsRUFBRVosTUFBTSxDQUFDLFFBQ04rQixLQUFLLENBQUMvQyxNQUNOMkIsSUFBSSxDQUFDLFFBQVEsUUFDYkEsSUFBSSxDQUFDLFVBQVUvQixXQUFXLE1BQzFCK0IsSUFBSSxDQUFDLGdCQUFnQixHQUNyQkEsSUFBSSxDQUFDLEtBQUtpQjtRQUViaEIsRUFBRVosTUFBTSxDQUFDLEtBQ05XLElBQUksQ0FBQyxhQUFhLGVBQXNCLE9BQVBELFFBQU8sTUFDeENzQixJQUFJLENBQUN6RCwwQ0FBYSxDQUFDc0M7UUFFdEJELEVBQUVaLE1BQU0sQ0FBQyxLQUFLZ0MsSUFBSSxDQUFDekQsd0NBQVcsQ0FBQzZDO0lBQ2pDLEdBQUc7UUFBQ3BDO1FBQU1FO1FBQWVDO1FBQWVHO0tBQWU7SUFFdkQscUJBQU8sOERBQUM2QztRQUFJQyxLQUFLaEQ7UUFBY2lELE9BQU87WUFBRTFDLE9BQU87WUFBUWUsUUFBUTtRQUFPOzs7Ozs7QUFDeEU7R0ExRndCM0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9saW5lLWNoYXJ0L0xpbmVDaGFydC50c3g/MWY1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBMaW5lQ2hhcnRQcm9wcyA9IHtcbiAgZGF0YTogeyBuYW1lOiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfVtdO1xuICB3aXRoSG92ZXI/OiBib29sZWFuO1xuICB3aXRoR3JpZGxpbmVzPzogYm9vbGVhbjtcbiAgd2l0aEN1cnZlTGluZT86IGJvb2xlYW47XG4gIHdpdGhEb3RzPzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lU2V0Mik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpbmVDaGFydCh7XG4gIGRhdGEsXG4gIHdpdGhIb3ZlcixcbiAgd2l0aEdyaWRsaW5lcyxcbiAgd2l0aEN1cnZlTGluZSxcbn06IExpbmVDaGFydFByb3BzKSB7XG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHN2Z1JlZiA9IHVzZVJlZjxTVkdTVkdFbGVtZW50IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtjb250YWluZXJXaWR0aCwgc2V0Q29udGFpbmVyV2lkdGhdID0gdXNlU3RhdGU8bnVtYmVyPig4MDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlV2lkdGggPSAoKSA9PiB7XG4gICAgICBpZiAoY29udGFpbmVyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgc2V0Q29udGFpbmVyV2lkdGgoY29udGFpbmVyUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB1cGRhdGVXaWR0aCgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZVdpZHRoKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlV2lkdGgpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXN2Z1JlZi5jdXJyZW50KSB7XG4gICAgICBzdmdSZWYuY3VycmVudCA9IGQzLnNlbGVjdChjb250YWluZXJSZWYuY3VycmVudCkuYXBwZW5kKFwic3ZnXCIpLm5vZGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3Qoc3ZnUmVmLmN1cnJlbnQpO1xuICAgIHN2Zy5zZWxlY3RBbGwoXCIqXCIpLnJlbW92ZSgpO1xuXG4gICAgY29uc3QgbWFyZ2luID0geyB0b3A6IDIwLCByaWdodDogMjAsIGJvdHRvbTogMzAsIGxlZnQ6IDQwIH07XG4gICAgY29uc3Qgd2lkdGggPSBjb250YWluZXJXaWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGNvbnN0IGhlaWdodCA9IDQwMCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgc3ZnXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSk7XG5cbiAgICBjb25zdCBnID0gc3ZnXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApO1xuXG4gICAgY29uc3QgeCA9IGQzXG4gICAgICAuc2NhbGVQb2ludCgpXG4gICAgICAucmFuZ2UoWzAsIHdpZHRoXSlcbiAgICAgIC5kb21haW4oZGF0YS5tYXAoKGQpID0+IGQubmFtZSkpO1xuXG4gICAgY29uc3QgeSA9IGQzXG4gICAgICAuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFtoZWlnaHQsIDBdKVxuICAgICAgLmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIChkKSA9PiBkLnZhbHVlICogMS4yKV0pO1xuXG4gICAgaWYgKHdpdGhHcmlkbGluZXMpIHtcbiAgICAgIGNvbnN0IHlBeGlzVGlja3MgPSB5LnRpY2tzKCkuc2xpY2UoMSk7XG4gICAgICBnLnNlbGVjdEFsbChcIi5ncmlkLWxpbmVcIilcbiAgICAgICAgLmRhdGEoeUF4aXNUaWNrcywgKGQpID0+IGQgYXMgbnVtYmVyKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZ3JpZC1saW5lXCIpXG4gICAgICAgIC5hdHRyKFwieDFcIiwgMClcbiAgICAgICAgLmF0dHIoXCJ4MlwiLCB3aWR0aClcbiAgICAgICAgLmF0dHIoXCJ5MVwiLCAoZCkgPT4geShkKSlcbiAgICAgICAgLmF0dHIoXCJ5MlwiLCAoZCkgPT4geShkKSlcbiAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCIjY2NjXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGxpbmUgPSBkM1xuICAgICAgLmxpbmU8eyBuYW1lOiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfT4oKVxuICAgICAgLngoKGQpID0+IHgoZC5uYW1lKSlcbiAgICAgIC55KChkKSA9PiB5KGQudmFsdWUpKTtcblxuICAgIGlmICh3aXRoQ3VydmVMaW5lKSB7XG4gICAgICBsaW5lLmN1cnZlKGQzLmN1cnZlTW9ub3RvbmVYKTsgLy8gVGhpcyBtYWtlcyB0aGUgbGluZSBzbW9vdGhlclxuICAgIH1cblxuICAgIGcuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmRhdHVtKGRhdGEpXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBjb2xvclNjYWxlKFwiMVwiKSlcbiAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpXG4gICAgICAuYXR0cihcImRcIiwgbGluZSk7XG5cbiAgICBnLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwke2hlaWdodH0pYClcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpO1xuXG4gICAgZy5hcHBlbmQoXCJnXCIpLmNhbGwoZDMuYXhpc0xlZnQoeSkpO1xuICB9LCBbZGF0YSwgd2l0aEdyaWRsaW5lcywgd2l0aEN1cnZlTGluZSwgY29udGFpbmVyV2lkdGhdKTtcblxuICByZXR1cm4gPGRpdiByZWY9e2NvbnRhaW5lclJlZn0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IC8+O1xufVxuIl0sIm5hbWVzIjpbImQzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImNvbG9yU2NhbGUiLCJzY2FsZU9yZGluYWwiLCJzY2hlbWVTZXQyIiwiTGluZUNoYXJ0IiwiZGF0YSIsIndpdGhIb3ZlciIsIndpdGhHcmlkbGluZXMiLCJ3aXRoQ3VydmVMaW5lIiwiY29udGFpbmVyUmVmIiwic3ZnUmVmIiwiY29udGFpbmVyV2lkdGgiLCJzZXRDb250YWluZXJXaWR0aCIsInVwZGF0ZVdpZHRoIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZWxlY3QiLCJhcHBlbmQiLCJub2RlIiwic3ZnIiwic2VsZWN0QWxsIiwicmVtb3ZlIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiaGVpZ2h0IiwiYXR0ciIsImciLCJ4Iiwic2NhbGVQb2ludCIsInJhbmdlIiwiZG9tYWluIiwibWFwIiwiZCIsIm5hbWUiLCJ5Iiwic2NhbGVMaW5lYXIiLCJtYXgiLCJ2YWx1ZSIsInlBeGlzVGlja3MiLCJ0aWNrcyIsInNsaWNlIiwiZW50ZXIiLCJsaW5lIiwiY3VydmUiLCJjdXJ2ZU1vbm90b25lWCIsImRhdHVtIiwiY2FsbCIsImF4aXNCb3R0b20iLCJheGlzTGVmdCIsImRpdiIsInJlZiIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/line-chart/LineChart.tsx\n"));

/***/ })

});