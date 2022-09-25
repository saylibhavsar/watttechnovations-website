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
/* harmony import */ var assets_whitepouch_gal_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/whitepouch_gal.jpg */ "./src/assets/whitepouch_gal.jpg");
/* harmony import */ var assets_whitepouch_gal_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_whitepouch_gal_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/shape-pattern1.png */ "./src/assets/shape-pattern1.png");
/* harmony import */ var assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_shield_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/shield.png */ "./src/assets/shield.png");
/* harmony import */ var assets_shield_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_shield_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_icons_14_14_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/icons-14-14.png */ "./src/assets/icons-14-14.png");
/* harmony import */ var assets_icons_14_14_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_icons_14_14_png__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\Users\\Sayli\\Downloads\\nextjs_landing_page\\nextjs_landing_page\\src\\sections\\workflow.js",
    _templateObject;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */









var data = {
  subTitle: 'FOR YOUR SAFETY',
  title: 'Medically Tested By Intertek',
  features: [{
    id: 1,
    imgSrc: assets_shield_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    altText: 'Medically Tested By Intertek',
    title: 'Medically Tested By Intertek',
    text: "The 'Cov-Tech Ventilation System' is tested by Intertek according to IEC 60601-1 international medical safety standards."
  }, {
    id: 2,
    imgSrc: assets_icons_14_14_png__WEBPACK_IMPORTED_MODULE_9___default.a,
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
      lineNumber: 39,
      columnNumber: 3
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 3
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: assets_whitepouch_gal_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "Thumbnail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_4__["default"], {
    subTitle: data.subTitle,
    title: data.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, data.features.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.card,
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: item.imgSrc,
      alt: item.altText,
      sx: styles.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.wrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      sx: styles.wrapper.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 15
      }
    }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      sx: styles.wrapper.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 15
      }
    }, item.text)));
  })))));
}
_c = ServiceSection;
var playPluse = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);\n    opacity: 1;\n  }\n\n  to {\n\ttransform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);\n    opacity: 0;\n  }\n"])));
var styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative'
  },
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, 3],
    mt: 7
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
  videoBtn: {
    zIndex: 2,
    border: 'none',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: ['60px', null, '80px', null, '100px'],
    height: ['60px', null, '80px', null, '100px'],
    p: '0px !important',
    backgroundColor: 'transparent',
    '&::before': {
      position: 'absolute',
      border: 'none',
      content: '""',
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      display: 'block',
      width: ['60px', null, '80px', null, '100px'],
      height: ['60px', null, '80px', null, '100px'],
      backgroundColor: 'primary',
      borderRadius: '50%',
      animation: "".concat(playPluse, " 1.5s ease-out infinite"),
      opacity: 0.5
    },
    '&:hover': {
      // boxShadow: 'rgba(233, 76, 84, 0.57) 0px 9px 20px -5px',
      backgroundColor: 'white',
      color: 'primary',
      border: 'none',
      bg: 'transparent'
    },
    '> span': {
      border: 'none',
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: 'inherit',
      height: 'inherit',
      textAlign: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.5s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2
    },
    svg: {
      fontSize: [40, null, 48, null, 62]
    }
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
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3]
    },
    subTitle: {
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9,
      color: 'blue'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3dvcmtmbG93LmpzIl0sIm5hbWVzIjpbImRhdGEiLCJzdWJUaXRsZSIsInRpdGxlIiwiZmVhdHVyZXMiLCJpZCIsImltZ1NyYyIsIlNtYXJ0IiwiYWx0VGV4dCIsInRleHQiLCJTZWN1cmUiLCJTZXJ2aWNlU2VjdGlvbiIsInZhcmlhbnQiLCJzdHlsZXMiLCJjb250YWluZXJCb3giLCJ0aHVtYm5haWwiLCJTZXJ2aWNlVGh1bWIiLCJjb250ZW50Qm94IiwiZ3JpZCIsIm1hcCIsIml0ZW0iLCJjYXJkIiwiaWNvbiIsIndyYXBwZXIiLCJkZXNjcmlwdGlvbiIsInBsYXlQbHVzZSIsImtleWZyYW1lcyIsImNvcmVGZWF0dXJlIiwicHkiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwicGIiLCJtdCIsIm1yIiwib3JkZXIiLCJtbCIsInpJbmRleCIsImhlaWdodCIsInNoYXBlQm94IiwiYm90dG9tIiwibGVmdCIsInZpZGVvQnRuIiwiYm9yZGVyIiwidG9wIiwidHJhbnNmb3JtIiwid2lkdGgiLCJwIiwiYmFja2dyb3VuZENvbG9yIiwiY29udGVudCIsImJvcmRlclJhZGl1cyIsImFuaW1hdGlvbiIsIm9wYWNpdHkiLCJjb2xvciIsImJnIiwidGV4dEFsaWduIiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsInN2ZyIsImZvbnRTaXplIiwiZmxleFNocmluayIsIm1iIiwicHIiLCJwbCIsInB0IiwibXgiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwidmlkZW9XcmFwcGVyIiwibWF4V2lkdGgiLCJwYWRkaW5nVG9wIiwiaWZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMTYxMTgxYWVhY2Y5ZGRjZThmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgQm94LCBHcmlkLCBUZXh0LCBIZWFkaW5nLCBCdXR0b24sIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgVGV4dEZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy90ZXh0LWZlYXR1cmUnO1xuaW1wb3J0IHsgSW9Jb3NQbGF5IH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuXG5pbXBvcnQgU2VydmljZVRodW1iIGZyb20gJ2Fzc2V0cy93aGl0ZXBvdWNoX2dhbC5qcGcnO1xuaW1wb3J0IHNoYXBlUGF0dGVybiBmcm9tICdhc3NldHMvc2hhcGUtcGF0dGVybjEucG5nJztcblxuaW1wb3J0IFNtYXJ0IGZyb20gJ2Fzc2V0cy9zaGllbGQucG5nJztcbmltcG9ydCBTZWN1cmUgZnJvbSAnYXNzZXRzL2ljb25zLTE0LTE0LnBuZyc7XG5cbmNvbnN0IGRhdGEgPSB7XG4gIHN1YlRpdGxlOiAnRk9SIFlPVVIgU0FGRVRZJyxcbiAgdGl0bGU6ICdNZWRpY2FsbHkgVGVzdGVkIEJ5IEludGVydGVrJyxcbiAgZmVhdHVyZXM6IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIGltZ1NyYzogU21hcnQsXG4gICAgICBhbHRUZXh0OiAnTWVkaWNhbGx5IFRlc3RlZCBCeSBJbnRlcnRlaycsXG4gICAgICB0aXRsZTogJ01lZGljYWxseSBUZXN0ZWQgQnkgSW50ZXJ0ZWsnLFxuICAgICAgdGV4dDpcbiAgICAgICAgXCJUaGUgJ0Nvdi1UZWNoIFZlbnRpbGF0aW9uIFN5c3RlbScgaXMgdGVzdGVkIGJ5IEludGVydGVrIGFjY29yZGluZyB0byBJRUMgNjA2MDEtMSBpbnRlcm5hdGlvbmFsIG1lZGljYWwgc2FmZXR5IHN0YW5kYXJkcy5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgaW1nU3JjOiBTZWN1cmUsXG4gICAgICBhbHRUZXh0OiAnSG93IERvZXMgSXQgV29yaz8nLFxuICAgICAgdGl0bGU6ICdIb3cgRG9lcyBJdCBXb3JrPycsXG4gICAgICB0ZXh0OlxuICAgICAgICAnVW5kZXJzdGFuZCBob3cgdGhlIENvdi1UZWNoIFZlbnRpbGF0aW9uIFN5c3RlbSB3b3JrcyBpbiB1bmRlciAxMDAgc2Vjb25kcyB0aHJvdWdoIHRoaXMgdmlkZW8uJyxcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljZVNlY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgPHNlY3Rpb24gc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24uc2VydmljZXMnIH19PlxuICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyQm94fT5cbiAgICA8Qm94IHN4PXtzdHlsZXMudGh1bWJuYWlsfT5cbiAgICAgIDxJbWFnZSBzcmM9e1NlcnZpY2VUaHVtYn0gYWx0PVwiVGh1bWJuYWlsXCIgLz5cblxuICAgICAgey8qIDxCb3ggc3g9e3N0eWxlcy5zaGFwZUJveH0+XG4gICAgICAgIDxJbWFnZSBzcmM9e3NoYXBlUGF0dGVybn0gYWx0PVwiU2hhcGVcIiAvPlxuICAgICAgPC9Cb3g+ICovfVxuICAgIDwvQm94PlxuICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50Qm94fT5cbiAgICAgIDxUZXh0RmVhdHVyZSBzdWJUaXRsZT17ZGF0YS5zdWJUaXRsZX0gdGl0bGU9e2RhdGEudGl0bGV9IC8+XG5cbiAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XG4gICAgICB7ZGF0YS5mZWF0dXJlcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0ga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uaW1nU3JjfSBhbHQ9e2l0ZW0uYWx0VGV4dH0gc3g9e3N0eWxlcy5pY29ufSAvPlxuXG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+e2l0ZW0udGl0bGV9PC9IZWFkaW5nPlxuICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuZGVzY3JpcHRpb259PntpdGVtLnRleHR9PC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICkpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvQm94PlxuICA8L0NvbnRhaW5lcj5cbjwvc2VjdGlvbj5cbik7XG59XG5cbmNvbnN0IHBsYXlQbHVzZSA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWigwKSBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVaKDApIHNjYWxlKDEuNSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuYDtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb3JlRmVhdHVyZToge1xuICAgIHB5OiBbMCwgbnVsbCwgbnVsbCwgMiwgbnVsbCwgN10sXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIH0sXG4gIGNvbnRhaW5lckJveDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiBbJ2ZsZXgtc3RhcnQnLCBudWxsLCBudWxsLCAnY2VudGVyJ10sXG4gICAganVzdGlmeUNvbnRlbnQ6IFsnZmxleC1zdGFydCcsIG51bGwsIG51bGwsICdzcGFjZS1iZXR3ZWVuJ10sXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCBudWxsLCAncm93J10sXG4gICAgcGI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAzXSxcbiAgICBtdDogNyxcbiAgfSxcbiAgdGh1bWJuYWlsOiB7XG4gICAgbXI6IFsnYXV0bycsIG51bGwsIG51bGwsIDYsIDYwLCA4NV0sXG4gICAgb3JkZXI6IFsyLCBudWxsLCBudWxsLCAwXSxcbiAgICBtbDogWydhdXRvJywgbnVsbCwgbnVsbCwgMF0sXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAnPiBpbWcnOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHpJbmRleDogMSxcbiAgICAgIGhlaWdodDogWzMxMCwgJ2F1dG8nXSxcbiAgICB9LFxuICB9LFxuICBzaGFwZUJveDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJvdHRvbTogLTY4LFxuICAgIGxlZnQ6IC0xNjAsXG4gICAgekluZGV4OiAtMSxcbiAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnaW5saW5lLWJsb2NrJ10sXG4gIH0sXG4gIHZpZGVvQnRuOiB7XG4gICAgekluZGV4OiAyLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICB3aWR0aDogWyc2MHB4JywgbnVsbCwgJzgwcHgnLCBudWxsLCAnMTAwcHgnXSxcbiAgICBoZWlnaHQ6IFsnNjBweCcsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXG4gICAgcDogJzBweCAhaW1wb3J0YW50JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgIHRvcDogJzUwJScsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSknLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHdpZHRoOiBbJzYwcHgnLCBudWxsLCAnODBweCcsIG51bGwsICcxMDBweCddLFxuICAgICAgaGVpZ2h0OiBbJzYwcHgnLCBudWxsLCAnODBweCcsIG51bGwsICcxMDBweCddLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgYW5pbWF0aW9uOiBgJHtwbGF5UGx1c2V9IDEuNXMgZWFzZS1vdXQgaW5maW5pdGVgLFxuICAgICAgb3BhY2l0eTogMC41LFxuICAgIH0sXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICAvLyBib3hTaGFkb3c6ICdyZ2JhKDIzMywgNzYsIDg0LCAwLjU3KSAwcHggOXB4IDIwcHggLTVweCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBiZzogJ3RyYW5zcGFyZW50JyxcbiAgICB9LFxuICAgICc+IHNwYW4nOiB7XG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC41KScsXG4gICAgICB3aWR0aDogJ2luaGVyaXQnLFxuICAgICAgaGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjVzJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB6SW5kZXg6IDIsXG4gICAgfSxcbiAgICBzdmc6IHtcbiAgICAgIGZvbnRTaXplOiBbNDAsIG51bGwsIDQ4LCBudWxsLCA2Ml0sXG4gICAgfSxcbiAgfSxcbiAgY29udGVudEJveDoge1xuICAgIHdpZHRoOiBbJzEwMCUnLCBudWxsLCBudWxsLCAzMTUsIDM5MCwgNDUwLCBudWxsLCA1MDBdLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgbWI6IFs3LCBudWxsLCA2MCwgMF0sXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdsZWZ0J10sXG4gIH0sXG4gIGdyaWQ6IHtcbiAgICBwcjogWzIsIDAsIG51bGwsIG51bGwsIDYsICc3MHB4J10sXG4gICAgcGw6IFsyLCAwXSxcbiAgICBwdDogWzIsIG51bGwsIG51bGwsIG51bGwsIDNdLFxuICAgIG14OiAnYXV0bycsXG4gICAgd2lkdGg6IFsnMTAwJScsIDM3MCwgNDIwLCAnMTAwJSddLFxuICAgIGdyaWRHYXA6IFsnMzVweCAwJywgbnVsbCwgbnVsbCwgbnVsbCwgJzUwcHggMCddLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFsncmVwZWF0KDEsMWZyKSddLFxuICB9LFxuICBjYXJkOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxuICB9LFxuXG4gIGljb246IHtcbiAgICB3aWR0aDogWyc0NXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzU1cHgnXSxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIG1yOiBbMywgbnVsbCwgbnVsbCwgbnVsbCwgNF0sXG4gIH0sXG4gIHdyYXBwZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBtdDogJy01cHgnLFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsICcxNHB4JywgMV0sXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjksXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgZm9udFNpemU6IDMsXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIG1iOiBbMiwgbnVsbCwgMywgMiwgM10sXG4gICAgfSxcblxuICAgIHN1YlRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsICcxNHB4JywgMV0sXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjksXG4gICAgICBjb2xvcjogJ2JsdWUnLFxuICAgIH0sXG4gIH0sXG4gIHZpZGVvV3JhcHBlcjoge1xuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgd2lkdGg6ICc5MDBweCcsXG4gICAgJyY6YmVmb3JlJzoge1xuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHBhZGRpbmdUb3A6ICc1Ni4yNSUnLFxuICAgIH0sXG4gICAgaWZyYW1lOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgfSxcbiAgfSxcbn07XG5cblxuXG5cblxuLy8gLyoqIEBqc3gganN4ICovXG4vLyBpbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG4vLyBpbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIEJveCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcbi8vIGltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xuLy8gaW1wb3J0IFRleHRGZWF0dXJlIGZyb20gJ2NvbXBvbmVudHMvdGV4dC1mZWF0dXJlJztcblxuLy8gaW1wb3J0IFBhdHRlcm5CRyBmcm9tICdhc3NldHMvcGF0dGVybkJHLnBuZyc7XG4vLyBpbXBvcnQgQXJyb3dPZGQgZnJvbSAnYXNzZXRzL2Fycm93T2RkLnN2Zyc7XG4vLyBpbXBvcnQgQXJyb3dFdmVuIGZyb20gJ2Fzc2V0cy9hcnJvd0V2ZW4uc3ZnJztcblxuLy8gY29uc3QgZGF0YSA9IFtcbi8vICAge1xuLy8gICAgIGltYWdlOiAnaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS83ZTBmNTVfOWE1OTcwNjdhZTQwNDRhOGIwZjhkOTg5MzRjYjNlNGZ+bXYyLnBuZy92MS9maWxsL3dfMzQxLGhfMTA0LGFsX2MscV84NSx1c21fMC42Nl8xLjAwXzAuMDEvM2RzLWRhcmsud2VicCcsXG4vLyAgICAgbGluazogJyMnLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaW1hZ2U6ICdodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzdlMGY1NV85YTU5NzA2N2FlNDA0NGE4YjBmOGQ5ODkzNGNiM2U0Zn5tdjIucG5nL3YxL2ZpbGwvd18zNDEsaF8xMDQsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMS8zZHMtZGFyay53ZWJwJyxcbi8vICAgICBsaW5rOiAnIycsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpbWFnZTogJ2h0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvN2UwZjU1XzlhNTk3MDY3YWU0MDQ0YThiMGY4ZDk4OTM0Y2IzZTRmfm12Mi5wbmcvdjEvZmlsbC93XzM0MSxoXzEwNCxhbF9jLHFfODUsdXNtXzAuNjZfMS4wMF8wLjAxLzNkcy1kYXJrLndlYnAnLFxuLy8gICAgIGxpbms6ICcjJyxcbi8vICAgfSxcbi8vIF07XG5cbi8vIGNvbnN0IGRhdGEyID0ge1xuLy8gICBkZXNjcmlwdGlvbjpcbi8vICAgICBcIlRoZSAnQ292LVRlY2ggVmVudGlsYXRpb24gU3lzdGVtJyBpcyB0ZXN0ZWQgYnkgSW50ZXJ0ZWsgYWNjb3JkaW5nIHRvIElFQyA2MDYwMS0xIGludGVybmF0aW9uYWwgbWVkaWNhbCBzYWZldHkgc3RhbmRhcmRzLlwiLFxuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya0Zsb3coKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPHNlY3Rpb24gc3g9e3N0eWxlcy53b3JrZmxvd30+XG4vLyAgICAgICA8Q29udGFpbmVyPlxuLy8gICAgICAgICA8U2VjdGlvbkhlYWRlclxuLy8gICAgICAgICAgIHNsb2dhbj1cIkZPUiBZT1VSIFNBRkVUWVwiXG4vLyAgICAgICAgICAgdGl0bGU9XCJNZWRpY2FsbHkgVGVzdGVkIEJ5IEludGVydGVrXCJcbi8vICAgICAgICAgICBpc1doaXRlPXt0cnVlfVxuLy8gICAgICAgICAvPlxuLy8gICAgICAgICA8Qm94PlxuLy8gICAgICAgICA8VGV4dEZlYXR1cmUgaXNXaGl0ZT17dHJ1ZX1cbi8vICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGF0YTIuZGVzY3JpcHRpb259XG4vLyAgICAgICAgIC8+XG4vLyAgICAgICAgIDwvQm94PlxuLy8gICAgICAgICB7LyogPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cbi8vICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcbi8vICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfSBrZXk9e2l0ZW0uaWR9PlxuLy8gICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaWNvbkJveH0+e2AwJHtpdGVtLmlkfWB9PC9Cb3g+XG4vLyAgICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cbi8vICAgICAgICAgICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9PntpdGVtLnRpdGxlfTwvSGVhZGluZz5cbi8vICAgICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9PntpdGVtLnRleHR9PC9UZXh0PlxuLy8gICAgICAgICAgICAgICA8L0JveD5cbi8vICAgICAgICAgICAgIDwvQm94PlxuLy8gICAgICAgICAgICkpfVxuLy8gICAgICAgICA8L0dyaWQ+ICovfVxuLy8gICAgICAgPC9Db250YWluZXI+XG4vLyAgICAgPC9zZWN0aW9uPlxuLy8gICApO1xuLy8gfVxuXG4vLyBjb25zdCBzdHlsZXMgPSB7XG4vLyAgIC8vIGRlc2M6IHtcbi8vICAgLy8gICBkaXNwbGF5OiAnZmxleCcsXG4vLyAgIC8vICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4vLyAgIC8vICAgY29sb3I6ICd3aGl0ZScsXG4vLyAgIC8vICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbi8vICAgLy8gfSxcbi8vICAgd29ya2Zsb3c6IHtcbi8vICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjVBMEZGJyxcbi8vICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtQYXR0ZXJuQkd9KWAsXG4vLyAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXG4vLyAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXG4vLyAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4vLyAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4vLyAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLCAvL2N1dFxuLy8gICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbi8vICAgICBkaXNwbGF5OiAnZmxleCcsXG4vLyAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4vLyAgICAgY29sb3I6ICd3aGl0ZScsXG4vLyAgICAgcHk6IFs4LCBudWxsLCA3LCBudWxsLCBudWxsLCA2XSxcbi8vICAgICAvLyBwdDogLTUsXG4vLyAgICAgLy8gcGI6IC01LFxuLy8gICAgIG10OiA3LFxuLy8gICB9LFxuLy8gICBncmlkOiB7XG4vLyAgICAgbWI6IC0xLFxuLy8gICAgIHB0OiAwLFxuLy8gICAgIGdyaWRHYXA6IFtcbi8vICAgICAgICczNXB4IDAnLFxuLy8gICAgICAgbnVsbCxcbi8vICAgICAgICc0NXB4IDMwcHgnLFxuLy8gICAgICAgbnVsbCxcbi8vICAgICAgICc1MHB4IDI1cHgnLFxuLy8gICAgICAgbnVsbCxcbi8vICAgICAgIG51bGwsXG4vLyAgICAgICAnNTBweCA2NXB4Jyxcbi8vICAgICBdLFxuLy8gICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcbi8vICAgICAgICdyZXBlYXQoMSwxZnIpJyxcbi8vICAgICAgIG51bGwsXG4vLyAgICAgICAncmVwZWF0KDIsMWZyKScsXG4vLyAgICAgICBudWxsLFxuLy8gICAgICAgJ3JlcGVhdCg0LDFmciknLFxuLy8gICAgIF0sXG4vLyAgIH0sXG4vLyAgIGNhcmQ6IHtcbi8vICAgICBkaXNwbGF5OiAnZmxleCcsXG4vLyAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4vLyAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4vLyAgICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsICdsZWZ0J10sXG4vLyAgICAgd2lkdGg6IFsnMTAwJScsICc4MCUnLCAnMTAwJSddLFxuLy8gICAgIG14OiBbJ2F1dG8nXSxcbi8vICAgICBweDogWzQsIG51bGwsIG51bGwsIDBdLFxuLy8gICAgICcmOjpiZWZvcmUnOiB7XG4vLyAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbi8vICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbi8vICAgICAgIHRvcDogMCxcbi8vICAgICAgIGxlZnQ6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA3MiwgbnVsbCwgOTBdLFxuLy8gICAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXG4vLyAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcbi8vICAgICAgIHdpZHRoOiAyMTUsXG4vLyAgICAgICBoZWlnaHQ6IDYwLFxuLy8gICAgICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTIyMHB4KSc6IHtcbi8vICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuLy8gICAgICAgfSxcbi8vICAgICB9LFxuLy8gICAgICcmOm50aC1vZi10eXBlKDJuLTEpOjpiZWZvcmUnOiB7XG4vLyAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtBcnJvd09kZH0pYCxcbi8vICAgICB9LFxuLy8gICAgICcmOm50aC1vZi10eXBlKDJuKTo6YmVmb3JlJzoge1xuLy8gICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7QXJyb3dFdmVufSlgLFxuLy8gICAgICAgdG9wOiAxNyxcbi8vICAgICB9LFxuLy8gICAgICcmOmxhc3QtY2hpbGQ6OmJlZm9yZSc6IHtcbi8vICAgICAgIGRpc3BsYXk6ICdub25lJyxcbi8vICAgICB9LFxuLy8gICB9LFxuXG4vLyAgIGljb25Cb3g6IHtcbi8vICAgICB3aWR0aDogWyc1MHB4JywgbnVsbCwgJzYwcHgnLCBudWxsLCBudWxsLCAnNzBweCddLFxuLy8gICAgIGhlaWdodDogWyc1MHB4JywgbnVsbCwgJzYwcHgnLCBudWxsLCBudWxsLCAnNzBweCddLFxuLy8gICAgIGZsZXhTaHJpbms6IDAsXG4vLyAgICAgYm9yZGVyUmFkaXVzOiBbMTUsIG51bGwsIDIzLCBudWxsLCBudWxsLCAzMF0sXG4vLyAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuLy8gICAgIGRpc3BsYXk6ICdmbGV4Jyxcbi8vICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbi8vICAgICBtYjogWzUsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDZdLFxuLy8gICAgIG14OiBbJ2F1dG8nLCBudWxsLCAwXSxcbi8vICAgICBmb250U2l6ZTogWzYsIG51bGwsIDcsIG51bGwsIG51bGwsICczMHB4J10sXG4vLyAgICAgZm9udFdlaWdodDogNzAwLFxuLy8gICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbi8vICAgICBjb2xvcjogJyMyMzQ1ODInLFxuLy8gICB9LFxuLy8gICB3cmFwcGVyOiB7XG4vLyAgICAgd2lkdGg6ICcxMDAlJyxcbi8vICAgICBkaXNwbGF5OiAnZmxleCcsXG4vLyAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4vLyAgICAgbXQ6ICctNXB4Jyxcbi8vICAgICB0aXRsZToge1xuLy8gICAgICAgZm9udFNpemU6IFszLCBudWxsLCA0LCBudWxsLCBudWxsLCA1XSxcbi8vICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuLy8gICAgICAgbGluZUhlaWdodDogWzEuNCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMS41NV0sXG4vLyAgICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDJdLFxuLy8gICAgICAgbWI6IFsyLCAzXSxcbi8vICAgICB9LFxuXG4vLyAgICAgc3ViVGl0bGU6IHtcbi8vICAgICAgIGZvbnRTaXplOiAxLFxuLy8gICAgICAgZm9udFdlaWdodDogNDAwLFxuLy8gICAgICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIG51bGwsIDEuOSwgMl0sXG4vLyAgICAgICBjb2xvcjogJ3doaXRlJyxcbi8vICAgICAgIG9wYWNpdHk6IDAuNzUsXG4vLyAgICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDVdLFxuLy8gICAgIH0sXG4vLyAgIH0sXG4vLyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==