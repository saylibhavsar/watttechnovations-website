webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/workflow.js":
/*!**********************************!*\
  !*** ./src/sections/workflow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServiceSection; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var assets_zoom1_gal_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/zoom1_gal.jpg */ "./src/assets/zoom1_gal.jpg");
/* harmony import */ var assets_zoom1_gal_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_zoom1_gal_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/shape-pattern1.png */ "./src/assets/shape-pattern1.png");
/* harmony import */ var assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/patternBG.png */ "./src/assets/patternBG.png");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\Sayli\\Downloads\\nextjs_landing_page\\nextjs_landing_page\\src\\sections\\workflow.js",
    _templateObject;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */







 // import Smart from 'assets/shield.png';
// import Secure from 'assets/icons-14-14.png';

var data = {
  title: 'Medically Tested By Intertek',
  features: [{
    id: 1,
    imgSrc: Smart,
    altText: 'Medically Tested By Intertek',
    title: 'Medically Tested By Intertek',
    text: "The 'Cov-Tech Ventilation System' is tested by Intertek according to IEC 60601-1 international medical safety standards."
  }, {
    id: 2,
    imgSrc: Secure,
    altText: 'How Does It Work?',
    title: 'How Does It Work?',
    text: 'Understand how the Cov-Tech Ventilation System works in under 100 seconds through this video.'
  }]
};
function ServiceSection() {
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("section", {
    sx: {
      variant: 'section.services'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 3
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 3
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: assets_zoom1_gal_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "Thumbnail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_4__["default"], {
    subTitle: data.subTitle,
    title: data.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, data.features.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.card,
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: item.imgSrc,
      alt: item.altText,
      sx: styles.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.wrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      sx: styles.wrapper.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      sx: styles.wrapper.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 15
      }
    }, item.text)));
  })))));
}
_c = ServiceSection;
var playPluse = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);\n    opacity: 1;\n  }\n\n  to {\n\ttransform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);\n    opacity: 0;\n  }\n"])));
var styles = {
  test: {
    color: 'white'
  },
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative'
  },
  containerBox: {
    color: 'white',
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: '30px',
    pt: '30px',
    mt: 7,
    mb: '-100px',
    backgroundColor: '#25A0FF',
    backgroundImage: "url(".concat(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_8___default.a, ")"),
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    borderRadius: 6
  },
  thumbnail: {
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto']
    }
  },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block']
  },
  contentBox: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left']
  },
  grid: {
    pr: [2, 0, null, null, 6, '70px'],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: 'auto',
    width: ['100%', 370, 420, '100%'],
    gridGap: ['35px 0', null, null, null, '50px 0'],
    gridTemplateColumns: ['repeat(1,1fr)']
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s'
  },
  icon: {
    width: ['45px', null, null, null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, null, null, null, 4]
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-5px',
    description: {
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9
    },
    title: {
      fontSize: 3,
      color: 'white',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3]
    },
    subTitle: {
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9
    }
  },
  videoWrapper: {
    maxWidth: '100%',
    position: 'relative',
    width: '900px',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%'
    },
    iframe: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0
    }
  }
}; // /** @jsx jsx */
// import { jsx } from 'theme-ui';
// import { Container, Grid, Box, Heading, Text } from 'theme-ui';
// import SectionHeader from 'components/section-header';
// import TextFeature from 'components/text-feature';
// import PatternBG from 'assets/patternBG.png';
// import ArrowOdd from 'assets/arrowOdd.svg';
// import ArrowEven from 'assets/arrowEven.svg';
// const data = [
//   {
//     image: 'https://static.wixstatic.com/media/7e0f55_9a597067ae4044a8b0f8d98934cb3e4f~mv2.png/v1/fill/w_341,h_104,al_c,q_85,usm_0.66_1.00_0.01/3ds-dark.webp',
//     link: '#',
//   },
//   {
//     image: 'https://static.wixstatic.com/media/7e0f55_9a597067ae4044a8b0f8d98934cb3e4f~mv2.png/v1/fill/w_341,h_104,al_c,q_85,usm_0.66_1.00_0.01/3ds-dark.webp',
//     link: '#',
//   },
//   {
//     image: 'https://static.wixstatic.com/media/7e0f55_9a597067ae4044a8b0f8d98934cb3e4f~mv2.png/v1/fill/w_341,h_104,al_c,q_85,usm_0.66_1.00_0.01/3ds-dark.webp',
//     link: '#',
//   },
// ];
// const data2 = {
//   description:
//     "The 'Cov-Tech Ventilation System' is tested by Intertek according to IEC 60601-1 international medical safety standards.",
// };
// export default function WorkFlow() {
//   return (
//     <section sx={styles.workflow}>
//       <Container>
//         <SectionHeader
//           slogan="FOR YOUR SAFETY"
//           title="Medically Tested By Intertek"
//           isWhite={true}
//         />
//         <Box>
//         <TextFeature isWhite={true}
//           description={data2.description}
//         />
//         </Box>
//         {/* <Grid sx={styles.grid}>
//           {data.map((item) => (
//             <Box sx={styles.card} key={item.id}>
//               <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
//               <Box sx={styles.wrapper}>
//                 <Heading sx={styles.wrapper.title}>{item.title}</Heading>
//                 <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
//               </Box>
//             </Box>
//           ))}
//         </Grid> */}
//       </Container>
//     </section>
//   );
// }
// const styles = {
//   // desc: {
//   //   display: 'flex',
//   //   alignItems: 'center',
//   //   color: 'white',
//   //   justifyContent: 'space-between',
//   // },
//   workflow: {
//     backgroundColor: '#25A0FF',
//     backgroundImage: `url(${PatternBG})`,
//     backgroundRepeat: `no-repeat`,
//     backgroundPosition: 'center center',
//     backgroundSize: 'cover',
//     position: 'relative',
//     overflow: 'hidden', //cut
//     justifyContent: 'center',
//     display: 'flex',
//     alignItems: 'center',
//     color: 'white',
//     py: [8, null, 7, null, null, 6],
//     // pt: -5,
//     // pb: -5,
//     mt: 7,
//   },
//   grid: {
//     mb: -1,
//     pt: 0,
//     gridGap: [
//       '35px 0',
//       null,
//       '45px 30px',
//       null,
//       '50px 25px',
//       null,
//       null,
//       '50px 65px',
//     ],
//     gridTemplateColumns: [
//       'repeat(1,1fr)',
//       null,
//       'repeat(2,1fr)',
//       null,
//       'repeat(4,1fr)',
//     ],
//   },
//   card: {
//     display: 'flex',
//     flexDirection: 'column',
//     position: 'relative',
//     textAlign: ['center', null, 'left'],
//     width: ['100%', '80%', '100%'],
//     mx: ['auto'],
//     px: [4, null, null, 0],
//     '&::before': {
//       position: 'absolute',
//       content: '""',
//       top: 0,
//       left: [0, null, null, null, null, 72, null, 90],
//       backgroundRepeat: `no-repeat`,
//       backgroundPosition: 'center center',
//       width: 215,
//       height: 60,
//       '@media screen and (max-width:1220px)': {
//         display: 'none',
//       },
//     },
//     '&:nth-of-type(2n-1)::before': {
//       backgroundImage: `url(${ArrowOdd})`,
//     },
//     '&:nth-of-type(2n)::before': {
//       backgroundImage: `url(${ArrowEven})`,
//       top: 17,
//     },
//     '&:last-child::before': {
//       display: 'none',
//     },
//   },
//   iconBox: {
//     width: ['50px', null, '60px', null, null, '70px'],
//     height: ['50px', null, '60px', null, null, '70px'],
//     flexShrink: 0,
//     borderRadius: [15, null, 23, null, null, 30],
//     backgroundColor: 'white',
//     display: 'flex',
//     alignItems: 'center',
//     mb: [5, null, null, null, null, 6],
//     mx: ['auto', null, 0],
//     fontSize: [6, null, 7, null, null, '30px'],
//     fontWeight: 700,
//     justifyContent: 'center',
//     color: '#234582',
//   },
//   wrapper: {
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     mt: '-5px',
//     title: {
//       fontSize: [3, null, 4, null, null, 5],
//       color: 'white',
//       lineHeight: [1.4, null, null, null, null, 1.55],
//       pr: [0, null, null, null, null, 2],
//       mb: [2, 3],
//     },
//     subTitle: {
//       fontSize: 1,
//       fontWeight: 400,
//       lineHeight: [1.85, null, null, 1.9, 2],
//       color: 'white',
//       opacity: 0.75,
//       pr: [0, null, null, null, null, 5],
//     },
//   },
// };

var _c;

$RefreshReg$(_c, "ServiceSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3dvcmtmbG93LmpzIl0sIm5hbWVzIjpbImRhdGEiLCJ0aXRsZSIsImZlYXR1cmVzIiwiaWQiLCJpbWdTcmMiLCJTbWFydCIsImFsdFRleHQiLCJ0ZXh0IiwiU2VjdXJlIiwiU2VydmljZVNlY3Rpb24iLCJ2YXJpYW50Iiwic3R5bGVzIiwiY29udGFpbmVyQm94IiwidGh1bWJuYWlsIiwiU2VydmljZVRodW1iIiwiY29udGVudEJveCIsInN1YlRpdGxlIiwiZ3JpZCIsIm1hcCIsIml0ZW0iLCJjYXJkIiwiaWNvbiIsIndyYXBwZXIiLCJkZXNjcmlwdGlvbiIsInBsYXlQbHVzZSIsImtleWZyYW1lcyIsInRlc3QiLCJjb2xvciIsImNvcmVGZWF0dXJlIiwicHkiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwicGIiLCJwdCIsIm10IiwibWIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJQYXR0ZXJuQkciLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJib3JkZXJSYWRpdXMiLCJtciIsIm9yZGVyIiwibWwiLCJ6SW5kZXgiLCJoZWlnaHQiLCJzaGFwZUJveCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJ0ZXh0QWxpZ24iLCJwciIsInBsIiwibXgiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsInRyYW5zaXRpb24iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwidmlkZW9XcmFwcGVyIiwibWF4V2lkdGgiLCJjb250ZW50IiwicGFkZGluZ1RvcCIsImlmcmFtZSIsInRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNDYyNzFiMTMxMzgyNmEzOWE2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgQm94LCBHcmlkLCBUZXh0LCBIZWFkaW5nLCBCdXR0b24sIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgVGV4dEZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy90ZXh0LWZlYXR1cmUnO1xuaW1wb3J0IHsgSW9Jb3NQbGF5IH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuXG5pbXBvcnQgU2VydmljZVRodW1iIGZyb20gJ2Fzc2V0cy96b29tMV9nYWwuanBnJztcbmltcG9ydCBzaGFwZVBhdHRlcm4gZnJvbSAnYXNzZXRzL3NoYXBlLXBhdHRlcm4xLnBuZyc7XG5pbXBvcnQgUGF0dGVybkJHIGZyb20gJ2Fzc2V0cy9wYXR0ZXJuQkcucG5nJztcbi8vIGltcG9ydCBTbWFydCBmcm9tICdhc3NldHMvc2hpZWxkLnBuZyc7XG4vLyBpbXBvcnQgU2VjdXJlIGZyb20gJ2Fzc2V0cy9pY29ucy0xNC0xNC5wbmcnO1xuXG5jb25zdCBkYXRhID0ge1xuICB0aXRsZTogJ01lZGljYWxseSBUZXN0ZWQgQnkgSW50ZXJ0ZWsnLFxuICBmZWF0dXJlczogW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgaW1nU3JjOiBTbWFydCxcbiAgICAgIGFsdFRleHQ6ICdNZWRpY2FsbHkgVGVzdGVkIEJ5IEludGVydGVrJyxcbiAgICAgIHRpdGxlOiAnTWVkaWNhbGx5IFRlc3RlZCBCeSBJbnRlcnRlaycsXG4gICAgICB0ZXh0OlxuICAgICAgICBcIlRoZSAnQ292LVRlY2ggVmVudGlsYXRpb24gU3lzdGVtJyBpcyB0ZXN0ZWQgYnkgSW50ZXJ0ZWsgYWNjb3JkaW5nIHRvIElFQyA2MDYwMS0xIGludGVybmF0aW9uYWwgbWVkaWNhbCBzYWZldHkgc3RhbmRhcmRzLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBpbWdTcmM6IFNlY3VyZSxcbiAgICAgIGFsdFRleHQ6ICdIb3cgRG9lcyBJdCBXb3JrPycsXG4gICAgICB0aXRsZTogJ0hvdyBEb2VzIEl0IFdvcms/JyxcbiAgICAgIHRleHQ6XG4gICAgICAgICdVbmRlcnN0YW5kIGhvdyB0aGUgQ292LVRlY2ggVmVudGlsYXRpb24gU3lzdGVtIHdvcmtzIGluIHVuZGVyIDEwMCBzZWNvbmRzIHRocm91Z2ggdGhpcyB2aWRlby4nLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2aWNlU2VjdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICA8c2VjdGlvbiBzeD17eyB2YXJpYW50OiAnc2VjdGlvbi5zZXJ2aWNlcycgfX0+XG4gIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJCb3h9PlxuICAgIDxCb3ggc3g9e3N0eWxlcy50aHVtYm5haWx9PlxuICAgICAgPEltYWdlIHNyYz17U2VydmljZVRodW1ifSBhbHQ9XCJUaHVtYm5haWxcIiAvPlxuXG4gICAgICB7LyogPEJveCBzeD17c3R5bGVzLnNoYXBlQm94fT5cbiAgICAgICAgPEltYWdlIHNyYz17c2hhcGVQYXR0ZXJufSBhbHQ9XCJTaGFwZVwiIC8+XG4gICAgICA8L0JveD4gKi99XG4gICAgPC9Cb3g+XG4gICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnRCb3h9PlxuICAgICAgPFRleHRGZWF0dXJlIHN1YlRpdGxlPXtkYXRhLnN1YlRpdGxlfSB0aXRsZT17ZGF0YS50aXRsZX0gLz5cblxuICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cbiAgICAgIHtkYXRhLmZlYXR1cmVzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5pbWdTcmN9IGFsdD17aXRlbS5hbHRUZXh0fSBzeD17c3R5bGVzLmljb259IC8+XG5cbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT57aXRlbS50aXRsZX08L0hlYWRpbmc+XG4gICAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMud3JhcHBlci5kZXNjcmlwdGlvbn0+e2l0ZW0udGV4dH08L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Cb3g+XG4gIDwvQ29udGFpbmVyPlxuPC9zZWN0aW9uPlxuKTtcbn1cblxuY29uc3QgcGxheVBsdXNlID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVaKDApIHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVooMCkgc2NhbGUoMS41KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5gO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHRlc3Q6IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgfSxcbiAgY29yZUZlYXR1cmU6IHtcbiAgICBweTogWzAsIG51bGwsIG51bGwsIDIsIG51bGwsIDddLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB9LFxuICBjb250YWluZXJCb3g6IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogWydmbGV4LXN0YXJ0JywgbnVsbCwgbnVsbCwgJ2NlbnRlciddLFxuICAgIGp1c3RpZnlDb250ZW50OiBbJ2ZsZXgtc3RhcnQnLCBudWxsLCBudWxsLCAnc3BhY2UtYmV0d2VlbiddLFxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgbnVsbCwgbnVsbCwgJ3JvdyddLFxuICAgIHBiOiAnMzBweCcsXG4gICAgcHQ6ICczMHB4JyxcbiAgICBtdDogNyxcbiAgICBtYjogJy0xMDBweCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzI1QTBGRicsXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7UGF0dGVybkJHfSlgLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgIGJvcmRlclJhZGl1czogNixcbiAgfSxcbiAgdGh1bWJuYWlsOiB7XG4gICAgbXI6IFsnYXV0bycsIG51bGwsIG51bGwsIDYsIDYwLCA4NV0sXG4gICAgb3JkZXI6IFsyLCBudWxsLCBudWxsLCAwXSxcbiAgICBtbDogWydhdXRvJywgbnVsbCwgbnVsbCwgMF0sXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAnPiBpbWcnOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHpJbmRleDogMSxcbiAgICAgIGhlaWdodDogWzMxMCwgJ2F1dG8nXSxcbiAgICB9LFxuICB9LFxuICBzaGFwZUJveDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJvdHRvbTogLTY4LFxuICAgIGxlZnQ6IC0xNjAsXG4gICAgekluZGV4OiAtMSxcbiAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnaW5saW5lLWJsb2NrJ10sXG4gIH0sXG4gIGNvbnRlbnRCb3g6IHtcbiAgICB3aWR0aDogWycxMDAlJywgbnVsbCwgbnVsbCwgMzE1LCAzOTAsIDQ1MCwgbnVsbCwgNTAwXSxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIG1iOiBbNywgbnVsbCwgNjAsIDBdLFxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCAnbGVmdCddLFxuICB9LFxuICBncmlkOiB7XG4gICAgcHI6IFsyLCAwLCBudWxsLCBudWxsLCA2LCAnNzBweCddLFxuICAgIHBsOiBbMiwgMF0sXG4gICAgcHQ6IFsyLCBudWxsLCBudWxsLCBudWxsLCAzXSxcbiAgICBteDogJ2F1dG8nLFxuICAgIHdpZHRoOiBbJzEwMCUnLCAzNzAsIDQyMCwgJzEwMCUnXSxcbiAgICBncmlkR2FwOiBbJzM1cHggMCcsIG51bGwsIG51bGwsIG51bGwsICc1MHB4IDAnXSxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbJ3JlcGVhdCgxLDFmciknXSxcbiAgfSxcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgfSxcblxuICBpY29uOiB7XG4gICAgd2lkdGg6IFsnNDVweCcsIG51bGwsIG51bGwsIG51bGwsICc1NXB4J10sXG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgZmxleFNocmluazogMCxcbiAgICBtcjogWzMsIG51bGwsIG51bGwsIG51bGwsIDRdLFxuICB9LFxuICB3cmFwcGVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgbXQ6ICctNXB4JyxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAnMTRweCcsIDFdLFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbGluZUhlaWdodDogMS45LFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiAzLFxuICAgICAgY29sb3I6ICd3aGl0ZScsIFxuICAgICAgbGluZUhlaWdodDogMS40LFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgbWI6IFsyLCBudWxsLCAzLCAyLCAzXSxcbiAgICB9LFxuICAgIHN1YlRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsICcxNHB4JywgMV0sXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjksXG4gICAgfSxcbiAgfSxcbiAgdmlkZW9XcmFwcGVyOiB7XG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB3aWR0aDogJzkwMHB4JyxcbiAgICAnJjpiZWZvcmUnOiB7XG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgcGFkZGluZ1RvcDogJzU2LjI1JScsXG4gICAgfSxcbiAgICBpZnJhbWU6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICB9LFxuICB9LFxufTtcblxuXG5cblxuXG4vLyAvKiogQGpzeCBqc3ggKi9cbi8vIGltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcbi8vIGltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xuLy8gaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XG4vLyBpbXBvcnQgVGV4dEZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy90ZXh0LWZlYXR1cmUnO1xuXG4vLyBpbXBvcnQgUGF0dGVybkJHIGZyb20gJ2Fzc2V0cy9wYXR0ZXJuQkcucG5nJztcbi8vIGltcG9ydCBBcnJvd09kZCBmcm9tICdhc3NldHMvYXJyb3dPZGQuc3ZnJztcbi8vIGltcG9ydCBBcnJvd0V2ZW4gZnJvbSAnYXNzZXRzL2Fycm93RXZlbi5zdmcnO1xuXG4vLyBjb25zdCBkYXRhID0gW1xuLy8gICB7XG4vLyAgICAgaW1hZ2U6ICdodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzdlMGY1NV85YTU5NzA2N2FlNDA0NGE4YjBmOGQ5ODkzNGNiM2U0Zn5tdjIucG5nL3YxL2ZpbGwvd18zNDEsaF8xMDQsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMS8zZHMtZGFyay53ZWJwJyxcbi8vICAgICBsaW5rOiAnIycsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpbWFnZTogJ2h0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvN2UwZjU1XzlhNTk3MDY3YWU0MDQ0YThiMGY4ZDk4OTM0Y2IzZTRmfm12Mi5wbmcvdjEvZmlsbC93XzM0MSxoXzEwNCxhbF9jLHFfODUsdXNtXzAuNjZfMS4wMF8wLjAxLzNkcy1kYXJrLndlYnAnLFxuLy8gICAgIGxpbms6ICcjJyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGltYWdlOiAnaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS83ZTBmNTVfOWE1OTcwNjdhZTQwNDRhOGIwZjhkOTg5MzRjYjNlNGZ+bXYyLnBuZy92MS9maWxsL3dfMzQxLGhfMTA0LGFsX2MscV84NSx1c21fMC42Nl8xLjAwXzAuMDEvM2RzLWRhcmsud2VicCcsXG4vLyAgICAgbGluazogJyMnLFxuLy8gICB9LFxuLy8gXTtcblxuLy8gY29uc3QgZGF0YTIgPSB7XG4vLyAgIGRlc2NyaXB0aW9uOlxuLy8gICAgIFwiVGhlICdDb3YtVGVjaCBWZW50aWxhdGlvbiBTeXN0ZW0nIGlzIHRlc3RlZCBieSBJbnRlcnRlayBhY2NvcmRpbmcgdG8gSUVDIDYwNjAxLTEgaW50ZXJuYXRpb25hbCBtZWRpY2FsIHNhZmV0eSBzdGFuZGFyZHMuXCIsXG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3JrRmxvdygpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8c2VjdGlvbiBzeD17c3R5bGVzLndvcmtmbG93fT5cbi8vICAgICAgIDxDb250YWluZXI+XG4vLyAgICAgICAgIDxTZWN0aW9uSGVhZGVyXG4vLyAgICAgICAgICAgc2xvZ2FuPVwiRk9SIFlPVVIgU0FGRVRZXCJcbi8vICAgICAgICAgICB0aXRsZT1cIk1lZGljYWxseSBUZXN0ZWQgQnkgSW50ZXJ0ZWtcIlxuLy8gICAgICAgICAgIGlzV2hpdGU9e3RydWV9XG4vLyAgICAgICAgIC8+XG4vLyAgICAgICAgIDxCb3g+XG4vLyAgICAgICAgIDxUZXh0RmVhdHVyZSBpc1doaXRlPXt0cnVlfVxuLy8gICAgICAgICAgIGRlc2NyaXB0aW9uPXtkYXRhMi5kZXNjcmlwdGlvbn1cbi8vICAgICAgICAgLz5cbi8vICAgICAgICAgPC9Cb3g+XG4vLyAgICAgICAgIHsvKiA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxuLy8gICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxuLy8gICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNhcmR9IGtleT17aXRlbS5pZH0+XG4vLyAgICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5pY29uQm94fT57YDAke2l0ZW0uaWR9YH08L0JveD5cbi8vICAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxuLy8gICAgICAgICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+e2l0ZW0udGl0bGV9PC9IZWFkaW5nPlxuLy8gICAgICAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+e2l0ZW0udGV4dH08L1RleHQ+XG4vLyAgICAgICAgICAgICAgIDwvQm94PlxuLy8gICAgICAgICAgICAgPC9Cb3g+XG4vLyAgICAgICAgICAgKSl9XG4vLyAgICAgICAgIDwvR3JpZD4gKi99XG4vLyAgICAgICA8L0NvbnRhaW5lcj5cbi8vICAgICA8L3NlY3Rpb24+XG4vLyAgICk7XG4vLyB9XG5cbi8vIGNvbnN0IHN0eWxlcyA9IHtcbi8vICAgLy8gZGVzYzoge1xuLy8gICAvLyAgIGRpc3BsYXk6ICdmbGV4Jyxcbi8vICAgLy8gICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbi8vICAgLy8gICBjb2xvcjogJ3doaXRlJyxcbi8vICAgLy8gICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuLy8gICAvLyB9LFxuLy8gICB3b3JrZmxvdzoge1xuLy8gICAgIGJhY2tncm91bmRDb2xvcjogJyMyNUEwRkYnLFxuLy8gICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1BhdHRlcm5CR30pYCxcbi8vICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbi8vICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcbi8vICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbi8vICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbi8vICAgICBvdmVyZmxvdzogJ2hpZGRlbicsIC8vY3V0XG4vLyAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuLy8gICAgIGRpc3BsYXk6ICdmbGV4Jyxcbi8vICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbi8vICAgICBjb2xvcjogJ3doaXRlJyxcbi8vICAgICBweTogWzgsIG51bGwsIDcsIG51bGwsIG51bGwsIDZdLFxuLy8gICAgIC8vIHB0OiAtNSxcbi8vICAgICAvLyBwYjogLTUsXG4vLyAgICAgbXQ6IDcsXG4vLyAgIH0sXG4vLyAgIGdyaWQ6IHtcbi8vICAgICBtYjogLTEsXG4vLyAgICAgcHQ6IDAsXG4vLyAgICAgZ3JpZEdhcDogW1xuLy8gICAgICAgJzM1cHggMCcsXG4vLyAgICAgICBudWxsLFxuLy8gICAgICAgJzQ1cHggMzBweCcsXG4vLyAgICAgICBudWxsLFxuLy8gICAgICAgJzUwcHggMjVweCcsXG4vLyAgICAgICBudWxsLFxuLy8gICAgICAgbnVsbCxcbi8vICAgICAgICc1MHB4IDY1cHgnLFxuLy8gICAgIF0sXG4vLyAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xuLy8gICAgICAgJ3JlcGVhdCgxLDFmciknLFxuLy8gICAgICAgbnVsbCxcbi8vICAgICAgICdyZXBlYXQoMiwxZnIpJyxcbi8vICAgICAgIG51bGwsXG4vLyAgICAgICAncmVwZWF0KDQsMWZyKScsXG4vLyAgICAgXSxcbi8vICAgfSxcbi8vICAgY2FyZDoge1xuLy8gICAgIGRpc3BsYXk6ICdmbGV4Jyxcbi8vICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbi8vICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbi8vICAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgJ2xlZnQnXSxcbi8vICAgICB3aWR0aDogWycxMDAlJywgJzgwJScsICcxMDAlJ10sXG4vLyAgICAgbXg6IFsnYXV0byddLFxuLy8gICAgIHB4OiBbNCwgbnVsbCwgbnVsbCwgMF0sXG4vLyAgICAgJyY6OmJlZm9yZSc6IHtcbi8vICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuLy8gICAgICAgY29udGVudDogJ1wiXCInLFxuLy8gICAgICAgdG9wOiAwLFxuLy8gICAgICAgbGVmdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDcyLCBudWxsLCA5MF0sXG4vLyAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbi8vICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxuLy8gICAgICAgd2lkdGg6IDIxNSxcbi8vICAgICAgIGhlaWdodDogNjAsXG4vLyAgICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjIwcHgpJzoge1xuLy8gICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4vLyAgICAgICB9LFxuLy8gICAgIH0sXG4vLyAgICAgJyY6bnRoLW9mLXR5cGUoMm4tMSk6OmJlZm9yZSc6IHtcbi8vICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Fycm93T2RkfSlgLFxuLy8gICAgIH0sXG4vLyAgICAgJyY6bnRoLW9mLXR5cGUoMm4pOjpiZWZvcmUnOiB7XG4vLyAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtBcnJvd0V2ZW59KWAsXG4vLyAgICAgICB0b3A6IDE3LFxuLy8gICAgIH0sXG4vLyAgICAgJyY6bGFzdC1jaGlsZDo6YmVmb3JlJzoge1xuLy8gICAgICAgZGlzcGxheTogJ25vbmUnLFxuLy8gICAgIH0sXG4vLyAgIH0sXG5cbi8vICAgaWNvbkJveDoge1xuLy8gICAgIHdpZHRoOiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc3MHB4J10sXG4vLyAgICAgaGVpZ2h0OiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc3MHB4J10sXG4vLyAgICAgZmxleFNocmluazogMCxcbi8vICAgICBib3JkZXJSYWRpdXM6IFsxNSwgbnVsbCwgMjMsIG51bGwsIG51bGwsIDMwXSxcbi8vICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4vLyAgICAgZGlzcGxheTogJ2ZsZXgnLFxuLy8gICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuLy8gICAgIG1iOiBbNSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNl0sXG4vLyAgICAgbXg6IFsnYXV0bycsIG51bGwsIDBdLFxuLy8gICAgIGZvbnRTaXplOiBbNiwgbnVsbCwgNywgbnVsbCwgbnVsbCwgJzMwcHgnXSxcbi8vICAgICBmb250V2VpZ2h0OiA3MDAsXG4vLyAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuLy8gICAgIGNvbG9yOiAnIzIzNDU4MicsXG4vLyAgIH0sXG4vLyAgIHdyYXBwZXI6IHtcbi8vICAgICB3aWR0aDogJzEwMCUnLFxuLy8gICAgIGRpc3BsYXk6ICdmbGV4Jyxcbi8vICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbi8vICAgICBtdDogJy01cHgnLFxuLy8gICAgIHRpdGxlOiB7XG4vLyAgICAgICBmb250U2l6ZTogWzMsIG51bGwsIDQsIG51bGwsIG51bGwsIDVdLFxuLy8gICAgICAgY29sb3I6ICd3aGl0ZScsXG4vLyAgICAgICBsaW5lSGVpZ2h0OiBbMS40LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxLjU1XSxcbi8vICAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXG4vLyAgICAgICBtYjogWzIsIDNdLFxuLy8gICAgIH0sXG5cbi8vICAgICBzdWJUaXRsZToge1xuLy8gICAgICAgZm9udFNpemU6IDEsXG4vLyAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4vLyAgICAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgbnVsbCwgMS45LCAyXSxcbi8vICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuLy8gICAgICAgb3BhY2l0eTogMC43NSxcbi8vICAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXG4vLyAgICAgfSxcbi8vICAgfSxcbi8vIH07XG4iXSwic291cmNlUm9vdCI6IiJ9