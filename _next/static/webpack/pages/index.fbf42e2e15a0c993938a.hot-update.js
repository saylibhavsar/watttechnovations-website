webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/feature.js":
/*!*********************************!*\
  !*** ./src/sections/feature.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var assets_icons_07_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/icons-07.png */ "./src/assets/icons-07.png");
/* harmony import */ var assets_icons_07_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_icons_07_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_icons_08_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/icons-08.png */ "./src/assets/icons-08.png");
/* harmony import */ var assets_icons_08_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_icons_08_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_icons_09_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/icons-09.png */ "./src/assets/icons-09.png");
/* harmony import */ var assets_icons_09_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_icons_09_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_icons_10_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/icons-10.png */ "./src/assets/icons-10.png");
/* harmony import */ var assets_icons_10_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_icons_10_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_icons_11_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/icons-11.png */ "./src/assets/icons-11.png");
/* harmony import */ var assets_icons_11_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_icons_11_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_icons_12_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/icons-12.png */ "./src/assets/icons-12.png");
/* harmony import */ var assets_icons_12_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_icons_12_png__WEBPACK_IMPORTED_MODULE_9__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Sayli\\Downloads\\nextjs_landing_page\\nextjs_landing_page\\src\\sections\\feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import Image from 'next/image';










var PRODUCT_FEATURE = {
  sectionTitle: {
    text: 'PRODUCT FEATURES',
    title: 'Technical Specifications'
  },
  posts: [{
    icon: assets_icons_07_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    title: 'Lighter than you’d think',
    text: 'The entire assembly weighs only 750 grams'
  }, {
    icon: assets_icons_08_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    title: 'Compact Design',
    text: 'Carefully designed after numerous iterations, to deliver the best results in the least space.'
  }, {
    icon: assets_icons_09_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    title: 'Anti-Fogging Feature .',
    text: 'Helps to reduce the <b>mist/fog<b> formed on the face shield of the suit.'
  }, {
    icon: assets_icons_12_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    title: 'Anti-Comtamination',
    text: 'Designed to be controlled from outside the PPE suit, no inside contamination.'
  }, {
    icon: assets_icons_10_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    title: 'Waist Mounted',
    text: 'Fastens on the waist giving the user complete freedom of movement.'
  }, {
    icon: assets_icons_11_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    title: 'Noise Dampening',
    text: 'Three levels of Dampening to reduce Noise and Vibration even at a high RPM.'
  }]
};

var ProductFeature = function ProductFeature() {
  var sectionTitle = PRODUCT_FEATURE.sectionTitle,
      posts = PRODUCT_FEATURE.posts;
  return __jsx("section", {
    id: "feature",
    sx: {
      variant: 'section.testimonial'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.section,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx(components_section_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    slogan: sectionTitle.text,
    title: sectionTitle.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, posts.map(function (_ref, index) {
    var label = _ref.label,
        icon = _ref.icon,
        title = _ref.title,
        text = _ref.text,
        button = _ref.button;
    return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      key: "feature-key-".concat(index),
      sx: styles.items,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }
    }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      className: "image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: icon,
      alt: title,
      width: "70",
      height: "70",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.itemContent,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 15
      }
    }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      as: "h3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }
    }, title, label ? __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      as: "span",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 28
      }
    }, label) : null), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      as: "p",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }
    }, text)));
  })))));
};

_c = ProductFeature;
/* harmony default export */ __webpack_exports__["default"] = (ProductFeature);
var styles = {
  section: {
    pt: ['70px', null, null, null, '100px', null, '150px'],
    pb: ['40px', null, null, null, '70px', null, '90px'],
    backgroundColor: '#F9FAFC'
  },
  grid: {
    gridColumnGap: '30px',
    gridTemplateColumns: ['1fr', null, '1fr 1fr', null, '1fr 1fr 1fr']
  },
  items: {
    display: 'flex',
    mb: ['30px', null, null, null, null, null, '60px'],
    '.image': {
      flexShrink: '0',
      width: '70px',
      height: '70px',
      mr: ['20px', null, null, '30px']
    }
  },
  itemContent: {
    h3: {
      fontSize: ['17px', null, null, null, '18px'],
      color: '#0F2137',
      fontWeight: 700,
      lineHeight: 1,
      alignItems: 'center',
      display: 'inline-flex',
      flexWrap: 'wrap',
      span: {
        backgroundColor: '#28A5FF',
        fontSize: '13px',
        color: '#fff',
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        lineHeight: '26px',
        borderRadius: '30px',
        letterSpacing: '-0.5px',
        px: '10px',
        ml: ['10px', null, '10px', '10px'],
        mt: ['0', null, '5px', '0']
      }
    },
    p: {
      color: '#343D48',
      fontSize: ['14px', null, null, '16px'],
      lineHeight: 1.87,
      mt: '5px',
      mb: '10px'
    },
    a: {
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: '15px',
      color: '#3183FF',
      fontWeight: 500,
      transition: 'all 500ms ease',
      '&:hover': {
        color: 'black'
      },
      svg: {
        fontSize: '17px',
        ml: '5px'
      }
    }
  }
}; // import { jsx } from 'theme-ui';
// import { Container, Grid } from 'theme-ui';
// import SectionHeader from 'components/section-header';
// import FeatureCard from 'components/feature-card.js';
// import Performance from 'assets/feature/performance.svg';
// import Partnership from 'assets/feature/partnership.svg';
// import Subscription from 'assets/feature/subscription.svg';
// import Support from 'assets/feature/support.svg';
// const data = [
//   {
//     id: 1,
//     imgSrc: Performance,
//     altText: 'Fast Performance',
//     title: 'Fast Performance',
//     text:
//       'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.',
//   },
//   {
//     id: 2,
//     imgSrc: Partnership,
//     altText: 'Pro Subscription',
//     title: 'Pro Subscription',
//     text:
//       'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
//   },
//   {
//     id: 3,
//     imgSrc: Subscription,
//     altText: 'Partnership deal',
//     title: 'Partnership deal',
//     text:
//       'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.',
//   },
//   {
//     id: 4,
//     imgSrc: Support,
//     altText: 'Customer Support',
//     title: 'Customer Support',
//     text:
//       'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
//   },
// ];
// export default function Feature() {
//   return (
//     <section sx={{ variant: 'section.feature' }}>
//     <Container>
//       <SectionHeader
//         slogan="Core Features"
//         title="Ultimate Quality Features"
//       />
//       <Grid sx={styles.grid}>
//         {data.map((item) => (
//           <FeatureCard
//             key={item.id}
//             src={item.imgSrc}
//             alt={item.altText}
//             title={item.title}
//             text={item.text}
//           />
//         ))}
//       </Grid>
//     </Container>
//   </section>
//   );
// }
// const styles = {
//   grid: {
//     pt: [0, null, null, null, null, null, 2],
//     px: [5, 6, 0, null, 7, 8, 7],
//     gridGap: [
//       '40px 0',
//       null,
//       '45px 30px',
//       null,
//       '60px 50px',
//       '70px 50px',
//       null,
//       '80px 90px',
//     ],
//     gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
//   },
// };

var _c;

$RefreshReg$(_c, "ProductFeature");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2ZlYXR1cmUuanMiXSwibmFtZXMiOlsiUFJPRFVDVF9GRUFUVVJFIiwic2VjdGlvblRpdGxlIiwidGV4dCIsInRpdGxlIiwicG9zdHMiLCJpY29uIiwiZmVhdHVyZTEiLCJmZWF0dXJlMiIsImZlYXR1cmUzIiwiZmVhdHVyZTYiLCJmZWF0dXJlNCIsImZlYXR1cmU1IiwiUHJvZHVjdEZlYXR1cmUiLCJ2YXJpYW50Iiwic3R5bGVzIiwic2VjdGlvbiIsImdyaWQiLCJtYXAiLCJpbmRleCIsImxhYmVsIiwiYnV0dG9uIiwiaXRlbXMiLCJpdGVtQ29udGVudCIsInB0IiwicGIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJncmlkQ29sdW1uR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImRpc3BsYXkiLCJtYiIsImZsZXhTaHJpbmsiLCJ3aWR0aCIsImhlaWdodCIsIm1yIiwiaDMiLCJmb250U2l6ZSIsImNvbG9yIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJhbGlnbkl0ZW1zIiwiZmxleFdyYXAiLCJzcGFuIiwiYm9yZGVyUmFkaXVzIiwibGV0dGVyU3BhY2luZyIsInB4IiwibWwiLCJtdCIsInAiLCJhIiwidHJhbnNpdGlvbiIsInN2ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQUc7QUFDdEJDLGNBQVksRUFBRTtBQUNaQyxRQUFJLEVBQUUsa0JBRE07QUFFWkMsU0FBSyxFQUFFO0FBRkssR0FEUTtBQUt0QkMsT0FBSyxFQUFFLENBQ0w7QUFDRUMsUUFBSSxFQUFFQywwREFEUjtBQUVFSCxTQUFLLEVBQUUsMEJBRlQ7QUFHRUQsUUFBSSxFQUNGO0FBSkosR0FESyxFQU9MO0FBQ0VHLFFBQUksRUFBRUUsMERBRFI7QUFFRUosU0FBSyxFQUFFLGdCQUZUO0FBR0VELFFBQUksRUFDRjtBQUpKLEdBUEssRUFhTDtBQUNFRyxRQUFJLEVBQUVHLDBEQURSO0FBRUVMLFNBQUssRUFBRSx3QkFGVDtBQUdFRCxRQUFJLEVBQ0Y7QUFKSixHQWJLLEVBbUJMO0FBQ0VHLFFBQUksRUFBRUksMERBRFI7QUFFRU4sU0FBSyxFQUFFLG9CQUZUO0FBR0VELFFBQUksRUFDRjtBQUpKLEdBbkJLLEVBeUJMO0FBQ0VHLFFBQUksRUFBRUssMERBRFI7QUFFRVAsU0FBSyxFQUFFLGVBRlQ7QUFHRUQsUUFBSSxFQUNGO0FBSkosR0F6QkssRUErQkw7QUFDRUcsUUFBSSxFQUFFTSwwREFEUjtBQUVFUixTQUFLLEVBQUUsaUJBRlQ7QUFHRUQsUUFBSSxFQUNGO0FBSkosR0EvQks7QUFMZSxDQUF4Qjs7QUE2Q0EsSUFBTVUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLE1BQVFYLFlBQVIsR0FBZ0NELGVBQWhDLENBQVFDLFlBQVI7QUFBQSxNQUFzQkcsS0FBdEIsR0FBZ0NKLGVBQWhDLENBQXNCSSxLQUF0QjtBQUNBLFNBQ0U7QUFBUyxNQUFFLEVBQUMsU0FBWjtBQUFzQixNQUFFLEVBQUU7QUFBRVMsYUFBTyxFQUFFO0FBQVgsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUVBQUQ7QUFBZSxVQUFNLEVBQUVkLFlBQVksQ0FBQ0MsSUFBcEM7QUFBMEMsU0FBSyxFQUFFRCxZQUFZLENBQUNFLEtBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUdFLE1BQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUVXLE1BQU0sQ0FBQ0UsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHWixLQUFLLENBQUNhLEdBQU4sQ0FBVSxnQkFBdUNDLEtBQXZDO0FBQUEsUUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsUUFBVWQsSUFBVixRQUFVQSxJQUFWO0FBQUEsUUFBZ0JGLEtBQWhCLFFBQWdCQSxLQUFoQjtBQUFBLFFBQXVCRCxJQUF2QixRQUF1QkEsSUFBdkI7QUFBQSxRQUE2QmtCLE1BQTdCLFFBQTZCQSxNQUE3QjtBQUFBLFdBQ1QsTUFBQyw0Q0FBRDtBQUFLLFNBQUcsd0JBQWlCRixLQUFqQixDQUFSO0FBQWtDLFFBQUUsRUFBRUosTUFBTSxDQUFDTyxLQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw0Q0FBRDtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRWhCLElBQVY7QUFBZ0IsU0FBRyxFQUFFRixLQUFyQjtBQUE0QixXQUFLLEVBQUMsSUFBbEM7QUFBdUMsWUFBTSxFQUFDLElBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLEVBSUUsTUFBQyw0Q0FBRDtBQUFLLFFBQUUsRUFBRVcsTUFBTSxDQUFDUSxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFTLFFBQUUsRUFBQyxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR25CLEtBREgsRUFFR2dCLEtBQUssR0FBRyxNQUFDLDZDQUFEO0FBQU0sUUFBRSxFQUFDLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFpQkEsS0FBakIsQ0FBSCxHQUFvQyxJQUY1QyxDQURGLEVBS0UsTUFBQyw2Q0FBRDtBQUFNLFFBQUUsRUFBQyxHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBY2pCLElBQWQsQ0FMRixDQUpGLENBRFM7QUFBQSxHQUFWLENBREgsQ0FIRixDQURGLENBREEsQ0FERjtBQThCRCxDQWhDRDs7S0FBTVUsYztBQWtDU0EsNkVBQWY7QUFFQSxJQUFNRSxNQUFNLEdBQUc7QUFDYkMsU0FBTyxFQUFFO0FBQ1BRLE1BQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixJQUFyQixFQUEyQixPQUEzQixFQUFvQyxJQUFwQyxFQUEwQyxPQUExQyxDQURHO0FBRVBDLE1BQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixJQUFyQixFQUEyQixNQUEzQixFQUFtQyxJQUFuQyxFQUF5QyxNQUF6QyxDQUZHO0FBR1BDLG1CQUFlLEVBQUU7QUFIVixHQURJO0FBTWJULE1BQUksRUFBRTtBQUNKVSxpQkFBYSxFQUFFLE1BRFg7QUFFSkMsdUJBQW1CLEVBQUUsQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLFNBQWQsRUFBeUIsSUFBekIsRUFBK0IsYUFBL0I7QUFGakIsR0FOTztBQVViTixPQUFLLEVBQUU7QUFDTE8sV0FBTyxFQUFFLE1BREo7QUFFTEMsTUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLElBQTNCLEVBQWlDLElBQWpDLEVBQXVDLE1BQXZDLENBRkM7QUFHTCxjQUFVO0FBQ1JDLGdCQUFVLEVBQUUsR0FESjtBQUVSQyxXQUFLLEVBQUUsTUFGQztBQUdSQyxZQUFNLEVBQUUsTUFIQTtBQUlSQyxRQUFFLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsTUFBckI7QUFKSTtBQUhMLEdBVk07QUFvQmJYLGFBQVcsRUFBRTtBQUNYWSxNQUFFLEVBQUU7QUFDRkMsY0FBUSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLE1BQTNCLENBRFI7QUFFRkMsV0FBSyxFQUFFLFNBRkw7QUFHRkMsZ0JBQVUsRUFBRSxHQUhWO0FBSUZDLGdCQUFVLEVBQUUsQ0FKVjtBQUtGQyxnQkFBVSxFQUFFLFFBTFY7QUFNRlgsYUFBTyxFQUFFLGFBTlA7QUFPRlksY0FBUSxFQUFFLE1BUFI7QUFRRkMsVUFBSSxFQUFFO0FBQ0poQix1QkFBZSxFQUFFLFNBRGI7QUFFSlUsZ0JBQVEsRUFBRSxNQUZOO0FBR0pDLGFBQUssRUFBRSxNQUhIO0FBSUpDLGtCQUFVLEVBQUUsR0FKUjtBQUtKVCxlQUFPLEVBQUUsTUFMTDtBQU1KVyxrQkFBVSxFQUFFLFFBTlI7QUFPSkQsa0JBQVUsRUFBRSxNQVBSO0FBUUpJLG9CQUFZLEVBQUUsTUFSVjtBQVNKQyxxQkFBYSxFQUFFLFFBVFg7QUFVSkMsVUFBRSxFQUFFLE1BVkE7QUFXSkMsVUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxNQUFmLEVBQXVCLE1BQXZCLENBWEE7QUFZSkMsVUFBRSxFQUFFLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBWSxLQUFaLEVBQW1CLEdBQW5CO0FBWkE7QUFSSixLQURPO0FBd0JYQyxLQUFDLEVBQUU7QUFDRFgsV0FBSyxFQUFFLFNBRE47QUFFREQsY0FBUSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLE1BQXJCLENBRlQ7QUFHREcsZ0JBQVUsRUFBRSxJQUhYO0FBSURRLFFBQUUsRUFBRSxLQUpIO0FBS0RqQixRQUFFLEVBQUU7QUFMSCxLQXhCUTtBQStCWG1CLEtBQUMsRUFBRTtBQUNEcEIsYUFBTyxFQUFFLGFBRFI7QUFFRFcsZ0JBQVUsRUFBRSxRQUZYO0FBR0RKLGNBQVEsRUFBRSxNQUhUO0FBSURDLFdBQUssRUFBRSxTQUpOO0FBS0RDLGdCQUFVLEVBQUUsR0FMWDtBQU1EWSxnQkFBVSxFQUFFLGdCQU5YO0FBT0QsaUJBQVc7QUFDVGIsYUFBSyxFQUFFO0FBREUsT0FQVjtBQVVEYyxTQUFHLEVBQUU7QUFDSGYsZ0JBQVEsRUFBRSxNQURQO0FBRUhVLFVBQUUsRUFBRTtBQUZEO0FBVko7QUEvQlE7QUFwQkEsQ0FBZixDLENBMEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZiZjQyZTJlMTVhMGM5OTM5MzhhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBMaW5rLCBCb3gsIEdyaWQsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBJb0lvc0Fycm93Rm9yd2FyZCB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xuaW1wb3J0IGZlYXR1cmUxIGZyb20gJ2Fzc2V0cy9pY29ucy0wNy5wbmcnO1xuaW1wb3J0IGZlYXR1cmUyIGZyb20gJ2Fzc2V0cy9pY29ucy0wOC5wbmcnO1xuaW1wb3J0IGZlYXR1cmUzIGZyb20gJ2Fzc2V0cy9pY29ucy0wOS5wbmcnO1xuaW1wb3J0IGZlYXR1cmU0IGZyb20gJ2Fzc2V0cy9pY29ucy0xMC5wbmcnO1xuaW1wb3J0IGZlYXR1cmU1IGZyb20gJ2Fzc2V0cy9pY29ucy0xMS5wbmcnO1xuaW1wb3J0IGZlYXR1cmU2IGZyb20gJ2Fzc2V0cy9pY29ucy0xMi5wbmcnO1xuXG5jb25zdCBQUk9EVUNUX0ZFQVRVUkUgPSB7XG4gIHNlY3Rpb25UaXRsZToge1xuICAgIHRleHQ6ICdQUk9EVUNUIEZFQVRVUkVTJyxcbiAgICB0aXRsZTogJ1RlY2huaWNhbCBTcGVjaWZpY2F0aW9ucycsXG4gIH0sXG4gIHBvc3RzOiBbXG4gICAge1xuICAgICAgaWNvbjogZmVhdHVyZTEsXG4gICAgICB0aXRsZTogJ0xpZ2h0ZXIgdGhhbiB5b3XigJlkIHRoaW5rJyxcbiAgICAgIHRleHQ6XG4gICAgICAgICdUaGUgZW50aXJlIGFzc2VtYmx5IHdlaWdocyBvbmx5IDc1MCBncmFtcycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiBmZWF0dXJlMixcbiAgICAgIHRpdGxlOiAnQ29tcGFjdCBEZXNpZ24nLFxuICAgICAgdGV4dDpcbiAgICAgICAgJ0NhcmVmdWxseSBkZXNpZ25lZCBhZnRlciBudW1lcm91cyBpdGVyYXRpb25zLCB0byBkZWxpdmVyIHRoZSBiZXN0IHJlc3VsdHMgaW4gdGhlIGxlYXN0IHNwYWNlLicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiBmZWF0dXJlMyxcbiAgICAgIHRpdGxlOiAnQW50aS1Gb2dnaW5nIEZlYXR1cmUgLicsXG4gICAgICB0ZXh0OlxuICAgICAgICAnSGVscHMgdG8gcmVkdWNlIHRoZSA8Yj5taXN0L2ZvZzxiPiBmb3JtZWQgb24gdGhlIGZhY2Ugc2hpZWxkIG9mIHRoZSBzdWl0LicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiBmZWF0dXJlNixcbiAgICAgIHRpdGxlOiAnQW50aS1Db210YW1pbmF0aW9uJyxcbiAgICAgIHRleHQ6XG4gICAgICAgICdEZXNpZ25lZCB0byBiZSBjb250cm9sbGVkIGZyb20gb3V0c2lkZSB0aGUgUFBFIHN1aXQsIG5vIGluc2lkZSBjb250YW1pbmF0aW9uLicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiBmZWF0dXJlNCxcbiAgICAgIHRpdGxlOiAnV2Fpc3QgTW91bnRlZCcsXG4gICAgICB0ZXh0OlxuICAgICAgICAnRmFzdGVucyBvbiB0aGUgd2Fpc3QgZ2l2aW5nIHRoZSB1c2VyIGNvbXBsZXRlIGZyZWVkb20gb2YgbW92ZW1lbnQuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IGZlYXR1cmU1LFxuICAgICAgdGl0bGU6ICdOb2lzZSBEYW1wZW5pbmcnLFxuICAgICAgdGV4dDpcbiAgICAgICAgJ1RocmVlIGxldmVscyBvZiBEYW1wZW5pbmcgdG8gcmVkdWNlIE5vaXNlIGFuZCBWaWJyYXRpb24gZXZlbiBhdCBhIGhpZ2ggUlBNLidcbiAgICB9LFxuICBdLFxufTtcblxuY29uc3QgUHJvZHVjdEZlYXR1cmUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgc2VjdGlvblRpdGxlLCBwb3N0cyB9ID0gUFJPRFVDVF9GRUFUVVJFO1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwiZmVhdHVyZVwiIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLnRlc3RpbW9uaWFsJyB9fT5cbiAgICA8Qm94IHN4PXtzdHlsZXMuc2VjdGlvbn0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvbkhlYWRlciBzbG9nYW49e3NlY3Rpb25UaXRsZS50ZXh0fSB0aXRsZT17c2VjdGlvblRpdGxlLnRpdGxlfSAvPlxuXG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAge3Bvc3RzLm1hcCgoeyBsYWJlbCwgaWNvbiwgdGl0bGUsIHRleHQsIGJ1dHRvbiB9LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPEJveCBrZXk9e2BmZWF0dXJlLWtleS0ke2luZGV4fWB9IHN4PXtzdHlsZXMuaXRlbXN9PlxuICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImltYWdlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ljb259IGFsdD17dGl0bGV9IHdpZHRoPVwiNzBcIiBoZWlnaHQ9XCI3MFwiIC8+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaXRlbUNvbnRlbnR9PlxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIj5cbiAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgIHtsYWJlbCA/IDxUZXh0IGFzPVwic3BhblwiPntsYWJlbH08L1RleHQ+IDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgPFRleHQgYXM9XCJwXCI+e3RleHR9PC9UZXh0PlxuICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPXtidXR0b24ubGlua30+XG4gICAgICAgICAgICAgICAgICB7YnV0dG9uLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgPElvSW9zQXJyb3dGb3J3YXJkIC8+XG4gICAgICAgICAgICAgICAgPC9MaW5rPiAqL31cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RGZWF0dXJlO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHNlY3Rpb246IHtcbiAgICBwdDogWyc3MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzEwMHB4JywgbnVsbCwgJzE1MHB4J10sXG4gICAgcGI6IFsnNDBweCcsIG51bGwsIG51bGwsIG51bGwsICc3MHB4JywgbnVsbCwgJzkwcHgnXSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjlGQUZDJyxcbiAgfSxcbiAgZ3JpZDoge1xuICAgIGdyaWRDb2x1bW5HYXA6ICczMHB4JyxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbJzFmcicsIG51bGwsICcxZnIgMWZyJywgbnVsbCwgJzFmciAxZnIgMWZyJ10sXG4gIH0sXG4gIGl0ZW1zOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG1iOiBbJzMwcHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnNjBweCddLFxuICAgICcuaW1hZ2UnOiB7XG4gICAgICBmbGV4U2hyaW5rOiAnMCcsXG4gICAgICB3aWR0aDogJzcwcHgnLFxuICAgICAgaGVpZ2h0OiAnNzBweCcsXG4gICAgICBtcjogWycyMHB4JywgbnVsbCwgbnVsbCwgJzMwcHgnXSxcbiAgICB9LFxuICB9LFxuICBpdGVtQ29udGVudDoge1xuICAgIGgzOiB7XG4gICAgICBmb250U2l6ZTogWycxN3B4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzE4cHgnXSxcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICAgIHNwYW46IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzI4QTVGRicsXG4gICAgICAgIGZvbnRTaXplOiAnMTNweCcsXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgbGluZUhlaWdodDogJzI2cHgnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICczMHB4JyxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogJy0wLjVweCcsXG4gICAgICAgIHB4OiAnMTBweCcsXG4gICAgICAgIG1sOiBbJzEwcHgnLCBudWxsLCAnMTBweCcsICcxMHB4J10sXG4gICAgICAgIG10OiBbJzAnLCBudWxsLCAnNXB4JywgJzAnXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwOiB7XG4gICAgICBjb2xvcjogJyMzNDNENDgnLFxuICAgICAgZm9udFNpemU6IFsnMTRweCcsIG51bGwsIG51bGwsICcxNnB4J10sXG4gICAgICBsaW5lSGVpZ2h0OiAxLjg3LFxuICAgICAgbXQ6ICc1cHgnLFxuICAgICAgbWI6ICcxMHB4JyxcbiAgICB9LFxuICAgIGE6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGZvbnRTaXplOiAnMTVweCcsXG4gICAgICBjb2xvcjogJyMzMTgzRkYnLFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCA1MDBtcyBlYXNlJyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgIH0sXG4gICAgICBzdmc6IHtcbiAgICAgICAgZm9udFNpemU6ICcxN3B4JyxcbiAgICAgICAgbWw6ICc1cHgnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcblxuXG5cblxuXG5cbi8vIGltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcbi8vIGltcG9ydCB7IENvbnRhaW5lciwgR3JpZCB9IGZyb20gJ3RoZW1lLXVpJztcbi8vIGltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xuLy8gaW1wb3J0IEZlYXR1cmVDYXJkIGZyb20gJ2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkLmpzJztcbi8vIGltcG9ydCBQZXJmb3JtYW5jZSBmcm9tICdhc3NldHMvZmVhdHVyZS9wZXJmb3JtYW5jZS5zdmcnO1xuLy8gaW1wb3J0IFBhcnRuZXJzaGlwIGZyb20gJ2Fzc2V0cy9mZWF0dXJlL3BhcnRuZXJzaGlwLnN2Zyc7XG4vLyBpbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gJ2Fzc2V0cy9mZWF0dXJlL3N1YnNjcmlwdGlvbi5zdmcnO1xuLy8gaW1wb3J0IFN1cHBvcnQgZnJvbSAnYXNzZXRzL2ZlYXR1cmUvc3VwcG9ydC5zdmcnO1xuXG4vLyBjb25zdCBkYXRhID0gW1xuLy8gICB7XG4vLyAgICAgaWQ6IDEsXG4vLyAgICAgaW1nU3JjOiBQZXJmb3JtYW5jZSxcbi8vICAgICBhbHRUZXh0OiAnRmFzdCBQZXJmb3JtYW5jZScsXG4vLyAgICAgdGl0bGU6ICdGYXN0IFBlcmZvcm1hbmNlJyxcbi8vICAgICB0ZXh0OlxuLy8gICAgICAgJ0xldOKAmXMganVzdCBnZXQgdGhpcyBvdXQgb2YgdGhlIHdheSAtIHRoZXJlIHdpbGwgYWx3YXlzIGJlIGEga2l0IHZlcnNpb24gb2YgRWR1IGZsb3cuIFBhaWQgc3Vic2NyaXB0aW9ucyBhbGxvdyB1cyB0byBjb250aW51ZSBoZWxwaW5nIGxlYXJuZXJzIGFyb3VuZCB0aGUgd29ybGQuJyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAyLFxuLy8gICAgIGltZ1NyYzogUGFydG5lcnNoaXAsXG4vLyAgICAgYWx0VGV4dDogJ1BybyBTdWJzY3JpcHRpb24nLFxuLy8gICAgIHRpdGxlOiAnUHJvIFN1YnNjcmlwdGlvbicsXG4vLyAgICAgdGV4dDpcbi8vICAgICAgICdXZSBiZWxpZXZlIGl04oCZcyBpbXBvcnRhbnQgZm9yIGV2ZXJ5b25lIHRvIGhhdmUgYWNjZXNzIHRvIHNvZnR3YXJlIOKAkyBlc3BlY2lhbGx5IHdoZW4gaXQgY29tZXMgdG8gZGlnaXRhbCBsZWFybmluZyBiZSBuYXZpZ2F0ZWQgYnkga2V5Ym9hcmQgYW5kIHNjcmVlbiByZWFkZXJzLicsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogMyxcbi8vICAgICBpbWdTcmM6IFN1YnNjcmlwdGlvbixcbi8vICAgICBhbHRUZXh0OiAnUGFydG5lcnNoaXAgZGVhbCcsXG4vLyAgICAgdGl0bGU6ICdQYXJ0bmVyc2hpcCBkZWFsJyxcbi8vICAgICB0ZXh0OlxuLy8gICAgICAgJ0xldOKAmXMganVzdCBnZXQgdGhpcyBvdXQgb2YgdGhlIHdheSAtIHRoZXJlIHdpbGwgYWx3YXlzIGJlIGEga2l0IHZlcnNpb24gb2YgRWR1IGZsb3cuIFBhaWQgc3Vic2NyaXB0aW9ucyBhbGxvdyB1cyB0byBjb250aW51ZSBoZWxwaW5nIGxlYXJuZXJzIGFyb3VuZCB0aGUgd29ybGQuJyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiA0LFxuLy8gICAgIGltZ1NyYzogU3VwcG9ydCxcbi8vICAgICBhbHRUZXh0OiAnQ3VzdG9tZXIgU3VwcG9ydCcsXG4vLyAgICAgdGl0bGU6ICdDdXN0b21lciBTdXBwb3J0Jyxcbi8vICAgICB0ZXh0OlxuLy8gICAgICAgJ1dlIGJlbGlldmUgaXTigJlzIGltcG9ydGFudCBmb3IgZXZlcnlvbmUgdG8gaGF2ZSBhY2Nlc3MgdG8gc29mdHdhcmUg4oCTIGVzcGVjaWFsbHkgd2hlbiBpdCBjb21lcyB0byBkaWdpdGFsIGxlYXJuaW5nIGJlIG5hdmlnYXRlZCBieSBrZXlib2FyZCBhbmQgc2NyZWVuIHJlYWRlcnMuJyxcbi8vICAgfSxcbi8vIF07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmUoKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPHNlY3Rpb24gc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24uZmVhdHVyZScgfX0+XG4vLyAgICAgPENvbnRhaW5lcj5cbi8vICAgICAgIDxTZWN0aW9uSGVhZGVyXG4vLyAgICAgICAgIHNsb2dhbj1cIkNvcmUgRmVhdHVyZXNcIlxuLy8gICAgICAgICB0aXRsZT1cIlVsdGltYXRlIFF1YWxpdHkgRmVhdHVyZXNcIlxuLy8gICAgICAgLz5cblxuLy8gICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cbi8vICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXG4vLyAgICAgICAgICAgPEZlYXR1cmVDYXJkXG4vLyAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4vLyAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1nU3JjfVxuLy8gICAgICAgICAgICAgYWx0PXtpdGVtLmFsdFRleHR9XG4vLyAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbi8vICAgICAgICAgICAgIHRleHQ9e2l0ZW0udGV4dH1cbi8vICAgICAgICAgICAvPlxuLy8gICAgICAgICApKX1cbi8vICAgICAgIDwvR3JpZD5cbi8vICAgICA8L0NvbnRhaW5lcj5cbi8vICAgPC9zZWN0aW9uPlxuLy8gICApO1xuLy8gfVxuXG4vLyBjb25zdCBzdHlsZXMgPSB7XG4vLyAgIGdyaWQ6IHtcbi8vICAgICBwdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDJdLFxuLy8gICAgIHB4OiBbNSwgNiwgMCwgbnVsbCwgNywgOCwgN10sXG4vLyAgICAgZ3JpZEdhcDogW1xuLy8gICAgICAgJzQwcHggMCcsXG4vLyAgICAgICBudWxsLFxuLy8gICAgICAgJzQ1cHggMzBweCcsXG4vLyAgICAgICBudWxsLFxuLy8gICAgICAgJzYwcHggNTBweCcsXG4vLyAgICAgICAnNzBweCA1MHB4Jyxcbi8vICAgICAgIG51bGwsXG4vLyAgICAgICAnODBweCA5MHB4Jyxcbi8vICAgICBdLFxuLy8gICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFsncmVwZWF0KDEsMWZyKScsIG51bGwsICdyZXBlYXQoMiwxZnIpJ10sXG4vLyAgIH0sXG4vLyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==