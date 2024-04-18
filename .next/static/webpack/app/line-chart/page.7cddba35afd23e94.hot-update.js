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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LineChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"(app-pages-browser)/./node_modules/d3/src/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst colorScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleOrdinal(d3__WEBPACK_IMPORTED_MODULE_1__.schemeSet2);\nconst MARGIN = {\n    top: 30,\n    right: 30,\n    bottom: 50,\n    left: 50\n};\nfunction LineChart(param) {\n    let { data } = param;\n    _s();\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [containerWidth, setContainerWidth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [containerHeight, setContainerHeight] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    // This effect sets up a ResizeObserver to adjust chart size based on its container\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const resizeObserver = new ResizeObserver((entries)=>{\n            for (let entry of entries){\n                setContainerWidth(entry.contentRect.width);\n                setContainerHeight(entry.contentRect.height);\n            }\n        });\n        if (containerRef.current) {\n            resizeObserver.observe(containerRef.current);\n        }\n        return ()=>{\n            if (containerRef.current) {\n                resizeObserver.unobserve(containerRef.current);\n            }\n        };\n    }, [\n        containerRef\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (containerWidth && containerHeight) {\n            drawChart();\n        }\n    }, [\n        data,\n        containerWidth,\n        containerHeight\n    ]);\n    const drawChart = ()=>{\n        const svg = d3__WEBPACK_IMPORTED_MODULE_1__.select(containerRef.current).append(\"svg\").attr(\"width\", containerWidth).attr(\"height\", containerHeight);\n        const boundsWidth = containerWidth - MARGIN.left - MARGIN.right;\n        const boundsHeight = containerHeight - MARGIN.top - MARGIN.bottom;\n        const chart = svg.append(\"g\").attr(\"transform\", \"translate(\".concat(MARGIN.left, \",\").concat(MARGIN.top, \")\"));\n        // Y axis\n        const yScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear().domain([\n            0,\n            d3__WEBPACK_IMPORTED_MODULE_1__.max(data, (d)=>d.value * 0.1) || 0\n        ]).range([\n            boundsHeight,\n            0\n        ]);\n        chart.append(\"g\").call(d3__WEBPACK_IMPORTED_MODULE_1__.axisLeft(yScale));\n        // X axis\n        const xScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleBand().domain(data.map((d)=>d.name)).range([\n            0,\n            boundsWidth\n        ]).padding(0.1);\n        chart.append(\"g\").attr(\"transform\", \"translate(0,\".concat(boundsHeight, \")\")).call(d3__WEBPACK_IMPORTED_MODULE_1__.axisBottom(xScale));\n        // Line\n        const line = d3__WEBPACK_IMPORTED_MODULE_1__.line().x((d)=>xScale(d.name) + xScale.bandwidth() / 2).y((d)=>yScale(d.value));\n        chart.append(\"path\").datum(data).attr(\"fill\", \"none\").attr(\"stroke\", colorScale(\"0\")).attr(\"stroke-width\", 3).attr(\"d\", line);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Clean up SVG to prevent duplicates\n        return ()=>{\n            d3__WEBPACK_IMPORTED_MODULE_1__.select(containerRef.current).select(\"svg\").remove();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        style: {\n            width: \"100%\",\n            height: \"100%\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/tinamariejensen/Documents/code/Design-System-DataViz/src/app/line-chart/LineChart.tsx\",\n        lineNumber: 100,\n        columnNumber: 10\n    }, this);\n}\n_s(LineChart, \"8ApEMOImyUKlwl/rp+F/G+M/VkE=\");\n_c = LineChart;\nvar _c;\n$RefreshReg$(_c, \"LineChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGluZS1jaGFydC9MaW5lQ2hhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDeUI7QUFFa0M7QUFNM0QsTUFBTUssYUFBYUwsNENBQWUsQ0FBQ0EsMENBQWE7QUFFaEQsTUFBTVEsU0FBUztJQUFFQyxLQUFLO0lBQUlDLE9BQU87SUFBSUMsUUFBUTtJQUFJQyxNQUFNO0FBQUc7QUFFM0MsU0FBU0MsVUFBVSxLQUF3QjtRQUF4QixFQUFFQyxJQUFJLEVBQWtCLEdBQXhCOztJQUNoQyxNQUFNQyxlQUFlWCw2Q0FBTUEsQ0FBQztJQUM1QixNQUFNLENBQUNZLGdCQUFnQkMsa0JBQWtCLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU0sQ0FBQ2UsaUJBQWlCQyxtQkFBbUIsR0FBR2hCLCtDQUFRQSxDQUFDO0lBRXZELG1GQUFtRjtJQUNuRkQsZ0RBQVNBLENBQUM7UUFDUixNQUFNa0IsaUJBQWlCLElBQUlDLGVBQWUsQ0FBQ0M7WUFDekMsS0FBSyxJQUFJQyxTQUFTRCxRQUFTO2dCQUN6Qkwsa0JBQWtCTSxNQUFNQyxXQUFXLENBQUNDLEtBQUs7Z0JBQ3pDTixtQkFBbUJJLE1BQU1DLFdBQVcsQ0FBQ0UsTUFBTTtZQUM3QztRQUNGO1FBRUEsSUFBSVgsYUFBYVksT0FBTyxFQUFFO1lBQ3hCUCxlQUFlUSxPQUFPLENBQUNiLGFBQWFZLE9BQU87UUFDN0M7UUFFQSxPQUFPO1lBQ0wsSUFBSVosYUFBYVksT0FBTyxFQUFFO2dCQUN4QlAsZUFBZVMsU0FBUyxDQUFDZCxhQUFhWSxPQUFPO1lBQy9DO1FBQ0Y7SUFDRixHQUFHO1FBQUNaO0tBQWE7SUFFakJiLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSWMsa0JBQWtCRSxpQkFBaUI7WUFDckNZO1FBQ0Y7SUFDRixHQUFHO1FBQUNoQjtRQUFNRTtRQUFnQkU7S0FBZ0I7SUFFMUMsTUFBTVksWUFBWTtRQUNoQixNQUFNQyxNQUFNL0Isc0NBQ0gsQ0FBQ2UsYUFBYVksT0FBTyxFQUMzQk0sTUFBTSxDQUFDLE9BQ1BDLElBQUksQ0FBQyxTQUFTbEIsZ0JBQ2RrQixJQUFJLENBQUMsVUFBVWhCO1FBRWxCLE1BQU1pQixjQUFjbkIsaUJBQWlCUixPQUFPSSxJQUFJLEdBQUdKLE9BQU9FLEtBQUs7UUFDL0QsTUFBTTBCLGVBQWVsQixrQkFBa0JWLE9BQU9DLEdBQUcsR0FBR0QsT0FBT0csTUFBTTtRQUVqRSxNQUFNMEIsUUFBUU4sSUFDWEUsTUFBTSxDQUFDLEtBQ1BDLElBQUksQ0FBQyxhQUFhLGFBQTRCMUIsT0FBZkEsT0FBT0ksSUFBSSxFQUFDLEtBQWMsT0FBWEosT0FBT0MsR0FBRyxFQUFDO1FBRTVELFNBQVM7UUFDVCxNQUFNNkIsU0FBU3RDLDJDQUNELEdBQ1h3QyxNQUFNLENBQUM7WUFBQztZQUFHeEMsbUNBQU0sQ0FBQ2MsTUFBTSxDQUFDNEIsSUFBTUEsRUFBRUMsS0FBSyxHQUFHLFFBQVE7U0FBRSxFQUNuREMsS0FBSyxDQUFDO1lBQUNSO1lBQWM7U0FBRTtRQUMxQkMsTUFBTUosTUFBTSxDQUFDLEtBQUtZLElBQUksQ0FBQzdDLHdDQUFXLENBQUNzQztRQUVuQyxTQUFTO1FBQ1QsTUFBTVMsU0FBUy9DLHlDQUNILEdBQ1R3QyxNQUFNLENBQUMxQixLQUFLbUMsR0FBRyxDQUFDLENBQUNQLElBQU1BLEVBQUVRLElBQUksR0FDN0JOLEtBQUssQ0FBQztZQUFDO1lBQUdUO1NBQVksRUFDdEJnQixPQUFPLENBQUM7UUFFWGQsTUFDR0osTUFBTSxDQUFDLEtBQ1BDLElBQUksQ0FBQyxhQUFhLGVBQTRCLE9BQWJFLGNBQWEsTUFDOUNTLElBQUksQ0FBQzdDLDBDQUFhLENBQUMrQztRQUV0QixPQUFPO1FBQ1AsTUFBTU0sT0FBT3JELG9DQUNOLEdBQ0pzRCxDQUFDLENBQUMsQ0FBQ1osSUFBTUssT0FBT0wsRUFBRVEsSUFBSSxJQUFLSCxPQUFPUSxTQUFTLEtBQUssR0FDaERDLENBQUMsQ0FBQyxDQUFDZCxJQUFNSixPQUFPSSxFQUFFQyxLQUFLO1FBRTFCTixNQUNHSixNQUFNLENBQUMsUUFDUHdCLEtBQUssQ0FBQzNDLE1BQ05vQixJQUFJLENBQUMsUUFBUSxRQUNiQSxJQUFJLENBQUMsVUFBVTdCLFdBQVcsTUFDMUI2QixJQUFJLENBQUMsZ0JBQWdCLEdBQ3JCQSxJQUFJLENBQUMsS0FBS21CO0lBQ2Y7SUFFQW5ELGdEQUFTQSxDQUFDO1FBQ1IscUNBQXFDO1FBQ3JDLE9BQU87WUFDTEYsc0NBQVMsQ0FBQ2UsYUFBYVksT0FBTyxFQUFFSyxNQUFNLENBQUMsT0FBTzBCLE1BQU07UUFDdEQ7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFBTyw4REFBQ0M7UUFBSUMsS0FBSzdDO1FBQWM4QyxPQUFPO1lBQUVwQyxPQUFPO1lBQVFDLFFBQVE7UUFBTzs7Ozs7O0FBQ3hFO0dBdkZ3QmI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9saW5lLWNoYXJ0L0xpbmVDaGFydC50c3g/MWY1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBteWRhdGF0eXBlIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIExpbmVDaGFydFByb3BzID0ge1xuICBkYXRhOiB7IG5hbWU6IHN0cmluZzsgdmFsdWU6IG51bWJlciB9W107XG59O1xuXG5jb25zdCBjb2xvclNjYWxlID0gZDMuc2NhbGVPcmRpbmFsKGQzLnNjaGVtZVNldDIpO1xuXG5jb25zdCBNQVJHSU4gPSB7IHRvcDogMzAsIHJpZ2h0OiAzMCwgYm90dG9tOiA1MCwgbGVmdDogNTAgfTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGluZUNoYXJ0KHsgZGF0YSB9OiBMaW5lQ2hhcnRQcm9wcykge1xuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtjb250YWluZXJXaWR0aCwgc2V0Q29udGFpbmVyV2lkdGhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtjb250YWluZXJIZWlnaHQsIHNldENvbnRhaW5lckhlaWdodF0gPSB1c2VTdGF0ZSgwKTtcblxuICAvLyBUaGlzIGVmZmVjdCBzZXRzIHVwIGEgUmVzaXplT2JzZXJ2ZXIgdG8gYWRqdXN0IGNoYXJ0IHNpemUgYmFzZWQgb24gaXRzIGNvbnRhaW5lclxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICBmb3IgKGxldCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgIHNldENvbnRhaW5lcldpZHRoKGVudHJ5LmNvbnRlbnRSZWN0LndpZHRoKTtcbiAgICAgICAgc2V0Q29udGFpbmVySGVpZ2h0KGVudHJ5LmNvbnRlbnRSZWN0LmhlaWdodCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY29udGFpbmVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoY29udGFpbmVyUmVmLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoY29udGFpbmVyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgcmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKGNvbnRhaW5lclJlZi5jdXJyZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbY29udGFpbmVyUmVmXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29udGFpbmVyV2lkdGggJiYgY29udGFpbmVySGVpZ2h0KSB7XG4gICAgICBkcmF3Q2hhcnQoKTtcbiAgICB9XG4gIH0sIFtkYXRhLCBjb250YWluZXJXaWR0aCwgY29udGFpbmVySGVpZ2h0XSk7XG5cbiAgY29uc3QgZHJhd0NoYXJ0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHN2ZyA9IGQzXG4gICAgICAuc2VsZWN0KGNvbnRhaW5lclJlZi5jdXJyZW50KVxuICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBjb250YWluZXJXaWR0aClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGNvbnRhaW5lckhlaWdodCk7XG5cbiAgICBjb25zdCBib3VuZHNXaWR0aCA9IGNvbnRhaW5lcldpZHRoIC0gTUFSR0lOLmxlZnQgLSBNQVJHSU4ucmlnaHQ7XG4gICAgY29uc3QgYm91bmRzSGVpZ2h0ID0gY29udGFpbmVySGVpZ2h0IC0gTUFSR0lOLnRvcCAtIE1BUkdJTi5ib3R0b207XG5cbiAgICBjb25zdCBjaGFydCA9IHN2Z1xuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHtNQVJHSU4ubGVmdH0sJHtNQVJHSU4udG9wfSlgKTtcblxuICAgIC8vIFkgYXhpc1xuICAgIGNvbnN0IHlTY2FsZSA9IGQzXG4gICAgICAuc2NhbGVMaW5lYXIoKVxuICAgICAgLmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIChkKSA9PiBkLnZhbHVlICogMC4xKSB8fCAwXSlcbiAgICAgIC5yYW5nZShbYm91bmRzSGVpZ2h0LCAwXSk7XG4gICAgY2hhcnQuYXBwZW5kKFwiZ1wiKS5jYWxsKGQzLmF4aXNMZWZ0KHlTY2FsZSkpO1xuXG4gICAgLy8gWCBheGlzXG4gICAgY29uc3QgeFNjYWxlID0gZDNcbiAgICAgIC5zY2FsZUJhbmQoKVxuICAgICAgLmRvbWFpbihkYXRhLm1hcCgoZCkgPT4gZC5uYW1lKSlcbiAgICAgIC5yYW5nZShbMCwgYm91bmRzV2lkdGhdKVxuICAgICAgLnBhZGRpbmcoMC4xKTtcblxuICAgIGNoYXJ0XG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCR7Ym91bmRzSGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4U2NhbGUpKTtcblxuICAgIC8vIExpbmVcbiAgICBjb25zdCBsaW5lID0gZDNcbiAgICAgIC5saW5lPG15ZGF0YXR5cGU+KClcbiAgICAgIC54KChkKSA9PiB4U2NhbGUoZC5uYW1lKSEgKyB4U2NhbGUuYmFuZHdpZHRoKCkgLyAyKVxuICAgICAgLnkoKGQpID0+IHlTY2FsZShkLnZhbHVlKSk7XG5cbiAgICBjaGFydFxuICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgIC5kYXR1bShkYXRhKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgLmF0dHIoXCJzdHJva2VcIiwgY29sb3JTY2FsZShcIjBcIikpXG4gICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAzKVxuICAgICAgLmF0dHIoXCJkXCIsIGxpbmUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ2xlYW4gdXAgU1ZHIHRvIHByZXZlbnQgZHVwbGljYXRlc1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkMy5zZWxlY3QoY29udGFpbmVyUmVmLmN1cnJlbnQpLnNlbGVjdChcInN2Z1wiKS5yZW1vdmUoKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIDxkaXYgcmVmPXtjb250YWluZXJSZWZ9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSAvPjtcbn1cbiJdLCJuYW1lcyI6WyJkMyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJjb2xvclNjYWxlIiwic2NhbGVPcmRpbmFsIiwic2NoZW1lU2V0MiIsIk1BUkdJTiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIkxpbmVDaGFydCIsImRhdGEiLCJjb250YWluZXJSZWYiLCJjb250YWluZXJXaWR0aCIsInNldENvbnRhaW5lcldpZHRoIiwiY29udGFpbmVySGVpZ2h0Iiwic2V0Q29udGFpbmVySGVpZ2h0IiwicmVzaXplT2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNvbnRlbnRSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJjdXJyZW50Iiwib2JzZXJ2ZSIsInVub2JzZXJ2ZSIsImRyYXdDaGFydCIsInN2ZyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJib3VuZHNXaWR0aCIsImJvdW5kc0hlaWdodCIsImNoYXJ0IiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJtYXgiLCJkIiwidmFsdWUiLCJyYW5nZSIsImNhbGwiLCJheGlzTGVmdCIsInhTY2FsZSIsInNjYWxlQmFuZCIsIm1hcCIsIm5hbWUiLCJwYWRkaW5nIiwiYXhpc0JvdHRvbSIsImxpbmUiLCJ4IiwiYmFuZHdpZHRoIiwieSIsImRhdHVtIiwicmVtb3ZlIiwiZGl2IiwicmVmIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/line-chart/LineChart.tsx\n"));

/***/ })

});