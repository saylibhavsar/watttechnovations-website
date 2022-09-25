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
  title: 'Know More About The Device',
  features: [{
    id: 1,
    imgSrc: assets_shield_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    altText: 'About The Filter',
    title: 'About The Filter',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3dvcmtmbG93LmpzIl0sIm5hbWVzIjpbImRhdGEiLCJzdWJUaXRsZSIsInRpdGxlIiwiZmVhdHVyZXMiLCJpZCIsImltZ1NyYyIsIlNtYXJ0IiwiYWx0VGV4dCIsInRleHQiLCJTZWN1cmUiLCJTZXJ2aWNlU2VjdGlvbiIsInZhcmlhbnQiLCJzdHlsZXMiLCJjb250YWluZXJCb3giLCJ0aHVtYm5haWwiLCJTZXJ2aWNlVGh1bWIiLCJjb250ZW50Qm94IiwiZ3JpZCIsIm1hcCIsIml0ZW0iLCJjYXJkIiwiaWNvbiIsIndyYXBwZXIiLCJkZXNjcmlwdGlvbiIsInBsYXlQbHVzZSIsImtleWZyYW1lcyIsImNvcmVGZWF0dXJlIiwicHkiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwicGIiLCJtdCIsIm1yIiwib3JkZXIiLCJtbCIsInpJbmRleCIsImhlaWdodCIsInNoYXBlQm94IiwiYm90dG9tIiwibGVmdCIsInZpZGVvQnRuIiwiYm9yZGVyIiwidG9wIiwidHJhbnNmb3JtIiwid2lkdGgiLCJwIiwiYmFja2dyb3VuZENvbG9yIiwiY29udGVudCIsImJvcmRlclJhZGl1cyIsImFuaW1hdGlvbiIsIm9wYWNpdHkiLCJjb2xvciIsImJnIiwidGV4dEFsaWduIiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsInN2ZyIsImZvbnRTaXplIiwiZmxleFNocmluayIsIm1iIiwicHIiLCJwbCIsInB0IiwibXgiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwidmlkZW9XcmFwcGVyIiwibWF4V2lkdGgiLCJwYWRkaW5nVG9wIiwiaWZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45NGRmYjdlMzVkNmU0MDU3NTcxNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgQm94LCBHcmlkLCBUZXh0LCBIZWFkaW5nLCBCdXR0b24sIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgVGV4dEZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy90ZXh0LWZlYXR1cmUnO1xuaW1wb3J0IHsgSW9Jb3NQbGF5IH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuXG5pbXBvcnQgU2VydmljZVRodW1iIGZyb20gJ2Fzc2V0cy93aGl0ZXBvdWNoX2dhbC5qcGcnO1xuaW1wb3J0IHNoYXBlUGF0dGVybiBmcm9tICdhc3NldHMvc2hhcGUtcGF0dGVybjEucG5nJztcblxuaW1wb3J0IFNtYXJ0IGZyb20gJ2Fzc2V0cy9zaGllbGQucG5nJztcbmltcG9ydCBTZWN1cmUgZnJvbSAnYXNzZXRzL2ljb25zLTE0LTE0LnBuZyc7XG5cbmNvbnN0IGRhdGEgPSB7XG4gIHN1YlRpdGxlOiAnRk9SIFlPVVIgU0FGRVRZJyxcbiAgdGl0bGU6ICdLbm93IE1vcmUgQWJvdXQgVGhlIERldmljZScsXG4gIGZlYXR1cmVzOiBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBpbWdTcmM6IFNtYXJ0LFxuICAgICAgYWx0VGV4dDogJ0Fib3V0IFRoZSBGaWx0ZXInLFxuICAgICAgdGl0bGU6ICdBYm91dCBUaGUgRmlsdGVyJyxcbiAgICAgIHRleHQ6XG4gICAgICAgIFwiVGhlICdDb3YtVGVjaCBWZW50aWxhdGlvbiBTeXN0ZW0nIGlzIHRlc3RlZCBieSBJbnRlcnRlayBhY2NvcmRpbmcgdG8gSUVDIDYwNjAxLTEgaW50ZXJuYXRpb25hbCBtZWRpY2FsIHNhZmV0eSBzdGFuZGFyZHMuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIGltZ1NyYzogU2VjdXJlLFxuICAgICAgYWx0VGV4dDogJ0hvdyBEb2VzIEl0IFdvcms/JyxcbiAgICAgIHRpdGxlOiAnSG93IERvZXMgSXQgV29yaz8nLFxuICAgICAgdGV4dDpcbiAgICAgICAgJ1VuZGVyc3RhbmQgaG93IHRoZSBDb3YtVGVjaCBWZW50aWxhdGlvbiBTeXN0ZW0gd29ya3MgaW4gdW5kZXIgMTAwIHNlY29uZHMgdGhyb3VnaCB0aGlzIHZpZGVvLicsXG4gICAgfSxcbiAgXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlcnZpY2VTZWN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gIDxzZWN0aW9uIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLnNlcnZpY2VzJyB9fT5cbiAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lckJveH0+XG4gICAgPEJveCBzeD17c3R5bGVzLnRodW1ibmFpbH0+XG4gICAgICA8SW1hZ2Ugc3JjPXtTZXJ2aWNlVGh1bWJ9IGFsdD1cIlRodW1ibmFpbFwiIC8+XG5cbiAgICAgIHsvKiA8Qm94IHN4PXtzdHlsZXMuc2hhcGVCb3h9PlxuICAgICAgICA8SW1hZ2Ugc3JjPXtzaGFwZVBhdHRlcm59IGFsdD1cIlNoYXBlXCIgLz5cbiAgICAgIDwvQm94PiAqL31cbiAgICA8L0JveD5cbiAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudEJveH0+XG4gICAgICA8VGV4dEZlYXR1cmUgc3ViVGl0bGU9e2RhdGEuc3ViVGl0bGV9IHRpdGxlPXtkYXRhLnRpdGxlfSAvPlxuXG4gICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxuICAgICAge2RhdGEuZmVhdHVyZXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNhcmR9IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLmltZ1NyY30gYWx0PXtpdGVtLmFsdFRleHR9IHN4PXtzdHlsZXMuaWNvbn0gLz5cblxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9PntpdGVtLnRpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy53cmFwcGVyLmRlc2NyaXB0aW9ufT57aXRlbS50ZXh0fTwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApKX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L0JveD5cbiAgPC9Db250YWluZXI+XG48L3NlY3Rpb24+XG4pO1xufVxuXG5jb25zdCBwbGF5UGx1c2UgPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVooMCkgc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWigwKSBzY2FsZSgxLjUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbmA7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29yZUZlYXR1cmU6IHtcbiAgICBweTogWzAsIG51bGwsIG51bGwsIDIsIG51bGwsIDddLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB9LFxuICBjb250YWluZXJCb3g6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogWydmbGV4LXN0YXJ0JywgbnVsbCwgbnVsbCwgJ2NlbnRlciddLFxuICAgIGp1c3RpZnlDb250ZW50OiBbJ2ZsZXgtc3RhcnQnLCBudWxsLCBudWxsLCAnc3BhY2UtYmV0d2VlbiddLFxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgbnVsbCwgbnVsbCwgJ3JvdyddLFxuICAgIHBiOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgM10sXG4gICAgbXQ6IDcsXG4gIH0sXG4gIHRodW1ibmFpbDoge1xuICAgIG1yOiBbJ2F1dG8nLCBudWxsLCBudWxsLCA2LCA2MCwgODVdLFxuICAgIG9yZGVyOiBbMiwgbnVsbCwgbnVsbCwgMF0sXG4gICAgbWw6IFsnYXV0bycsIG51bGwsIG51bGwsIDBdLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgJz4gaW1nJzoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB6SW5kZXg6IDEsXG4gICAgICBoZWlnaHQ6IFszMTAsICdhdXRvJ10sXG4gICAgfSxcbiAgfSxcbiAgc2hhcGVCb3g6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206IC02OCxcbiAgICBsZWZ0OiAtMTYwLFxuICAgIHpJbmRleDogLTEsXG4gICAgZGlzcGxheTogWydub25lJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ2lubGluZS1ibG9jayddLFxuICB9LFxuICB2aWRlb0J0bjoge1xuICAgIHpJbmRleDogMixcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgd2lkdGg6IFsnNjBweCcsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXG4gICAgaGVpZ2h0OiBbJzYwcHgnLCBudWxsLCAnODBweCcsIG51bGwsICcxMDBweCddLFxuICAgIHA6ICcwcHggIWltcG9ydGFudCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICcmOjpiZWZvcmUnOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgbGVmdDogJzUwJScsXG4gICAgICB0b3A6ICc1MCUnLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB3aWR0aDogWyc2MHB4JywgbnVsbCwgJzgwcHgnLCBudWxsLCAnMTAwcHgnXSxcbiAgICAgIGhlaWdodDogWyc2MHB4JywgbnVsbCwgJzgwcHgnLCBudWxsLCAnMTAwcHgnXSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGFuaW1hdGlvbjogYCR7cGxheVBsdXNlfSAxLjVzIGVhc2Utb3V0IGluZmluaXRlYCxcbiAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICB9LFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgLy8gYm94U2hhZG93OiAncmdiYSgyMzMsIDc2LCA4NCwgMC41NykgMHB4IDlweCAyMHB4IC01cHgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXG4gICAgfSxcbiAgICAnPiBzcGFuJzoge1xuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknLFxuICAgICAgd2lkdGg6ICdpbmhlcml0JyxcbiAgICAgIGhlaWdodDogJ2luaGVyaXQnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC41cycsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgekluZGV4OiAyLFxuICAgIH0sXG4gICAgc3ZnOiB7XG4gICAgICBmb250U2l6ZTogWzQwLCBudWxsLCA0OCwgbnVsbCwgNjJdLFxuICAgIH0sXG4gIH0sXG4gIGNvbnRlbnRCb3g6IHtcbiAgICB3aWR0aDogWycxMDAlJywgbnVsbCwgbnVsbCwgMzE1LCAzOTAsIDQ1MCwgbnVsbCwgNTAwXSxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIG1iOiBbNywgbnVsbCwgNjAsIDBdLFxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCAnbGVmdCddLFxuICB9LFxuICBncmlkOiB7XG4gICAgcHI6IFsyLCAwLCBudWxsLCBudWxsLCA2LCAnNzBweCddLFxuICAgIHBsOiBbMiwgMF0sXG4gICAgcHQ6IFsyLCBudWxsLCBudWxsLCBudWxsLCAzXSxcbiAgICBteDogJ2F1dG8nLFxuICAgIHdpZHRoOiBbJzEwMCUnLCAzNzAsIDQyMCwgJzEwMCUnXSxcbiAgICBncmlkR2FwOiBbJzM1cHggMCcsIG51bGwsIG51bGwsIG51bGwsICc1MHB4IDAnXSxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbJ3JlcGVhdCgxLDFmciknXSxcbiAgfSxcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgfSxcblxuICBpY29uOiB7XG4gICAgd2lkdGg6IFsnNDVweCcsIG51bGwsIG51bGwsIG51bGwsICc1NXB4J10sXG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgZmxleFNocmluazogMCxcbiAgICBtcjogWzMsIG51bGwsIG51bGwsIG51bGwsIDRdLFxuICB9LFxuICB3cmFwcGVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgbXQ6ICctNXB4JyxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAnMTRweCcsIDFdLFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbGluZUhlaWdodDogMS45LFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiAzLFxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBtYjogWzIsIG51bGwsIDMsIDIsIDNdLFxuICAgIH0sXG5cbiAgICBzdWJUaXRsZToge1xuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAnMTRweCcsIDFdLFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbGluZUhlaWdodDogMS45LFxuICAgICAgY29sb3I6ICdibHVlJyxcbiAgICB9LFxuICB9LFxuICB2aWRlb1dyYXBwZXI6IHtcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHdpZHRoOiAnOTAwcHgnLFxuICAgICcmOmJlZm9yZSc6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBwYWRkaW5nVG9wOiAnNTYuMjUlJyxcbiAgICB9LFxuICAgIGlmcmFtZToge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgIH0sXG4gIH0sXG59O1xuXG5cblxuXG5cbi8vIC8qKiBAanN4IGpzeCAqL1xuLy8gaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuLy8gaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkLCBCb3gsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XG4vLyBpbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcbi8vIGltcG9ydCBUZXh0RmVhdHVyZSBmcm9tICdjb21wb25lbnRzL3RleHQtZmVhdHVyZSc7XG5cbi8vIGltcG9ydCBQYXR0ZXJuQkcgZnJvbSAnYXNzZXRzL3BhdHRlcm5CRy5wbmcnO1xuLy8gaW1wb3J0IEFycm93T2RkIGZyb20gJ2Fzc2V0cy9hcnJvd09kZC5zdmcnO1xuLy8gaW1wb3J0IEFycm93RXZlbiBmcm9tICdhc3NldHMvYXJyb3dFdmVuLnN2Zyc7XG5cbi8vIGNvbnN0IGRhdGEgPSBbXG4vLyAgIHtcbi8vICAgICBpbWFnZTogJ2h0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvN2UwZjU1XzlhNTk3MDY3YWU0MDQ0YThiMGY4ZDk4OTM0Y2IzZTRmfm12Mi5wbmcvdjEvZmlsbC93XzM0MSxoXzEwNCxhbF9jLHFfODUsdXNtXzAuNjZfMS4wMF8wLjAxLzNkcy1kYXJrLndlYnAnLFxuLy8gICAgIGxpbms6ICcjJyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGltYWdlOiAnaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS83ZTBmNTVfOWE1OTcwNjdhZTQwNDRhOGIwZjhkOTg5MzRjYjNlNGZ+bXYyLnBuZy92MS9maWxsL3dfMzQxLGhfMTA0LGFsX2MscV84NSx1c21fMC42Nl8xLjAwXzAuMDEvM2RzLWRhcmsud2VicCcsXG4vLyAgICAgbGluazogJyMnLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaW1hZ2U6ICdodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzdlMGY1NV85YTU5NzA2N2FlNDA0NGE4YjBmOGQ5ODkzNGNiM2U0Zn5tdjIucG5nL3YxL2ZpbGwvd18zNDEsaF8xMDQsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMS8zZHMtZGFyay53ZWJwJyxcbi8vICAgICBsaW5rOiAnIycsXG4vLyAgIH0sXG4vLyBdO1xuXG4vLyBjb25zdCBkYXRhMiA9IHtcbi8vICAgZGVzY3JpcHRpb246XG4vLyAgICAgXCJUaGUgJ0Nvdi1UZWNoIFZlbnRpbGF0aW9uIFN5c3RlbScgaXMgdGVzdGVkIGJ5IEludGVydGVrIGFjY29yZGluZyB0byBJRUMgNjA2MDEtMSBpbnRlcm5hdGlvbmFsIG1lZGljYWwgc2FmZXR5IHN0YW5kYXJkcy5cIixcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtGbG93KCkge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxzZWN0aW9uIHN4PXtzdHlsZXMud29ya2Zsb3d9PlxuLy8gICAgICAgPENvbnRhaW5lcj5cbi8vICAgICAgICAgPFNlY3Rpb25IZWFkZXJcbi8vICAgICAgICAgICBzbG9nYW49XCJGT1IgWU9VUiBTQUZFVFlcIlxuLy8gICAgICAgICAgIHRpdGxlPVwiTWVkaWNhbGx5IFRlc3RlZCBCeSBJbnRlcnRla1wiXG4vLyAgICAgICAgICAgaXNXaGl0ZT17dHJ1ZX1cbi8vICAgICAgICAgLz5cbi8vICAgICAgICAgPEJveD5cbi8vICAgICAgICAgPFRleHRGZWF0dXJlIGlzV2hpdGU9e3RydWV9XG4vLyAgICAgICAgICAgZGVzY3JpcHRpb249e2RhdGEyLmRlc2NyaXB0aW9ufVxuLy8gICAgICAgICAvPlxuLy8gICAgICAgICA8L0JveD5cbi8vICAgICAgICAgey8qIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XG4vLyAgICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXG4vLyAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0ga2V5PXtpdGVtLmlkfT5cbi8vICAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmljb25Cb3h9PntgMCR7aXRlbS5pZH1gfTwvQm94PlxuLy8gICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XG4vLyAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT57aXRlbS50aXRsZX08L0hlYWRpbmc+XG4vLyAgICAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy53cmFwcGVyLnN1YlRpdGxlfT57aXRlbS50ZXh0fTwvVGV4dD5cbi8vICAgICAgICAgICAgICAgPC9Cb3g+XG4vLyAgICAgICAgICAgICA8L0JveD5cbi8vICAgICAgICAgICApKX1cbi8vICAgICAgICAgPC9HcmlkPiAqL31cbi8vICAgICAgIDwvQ29udGFpbmVyPlxuLy8gICAgIDwvc2VjdGlvbj5cbi8vICAgKTtcbi8vIH1cblxuLy8gY29uc3Qgc3R5bGVzID0ge1xuLy8gICAvLyBkZXNjOiB7XG4vLyAgIC8vICAgZGlzcGxheTogJ2ZsZXgnLFxuLy8gICAvLyAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuLy8gICAvLyAgIGNvbG9yOiAnd2hpdGUnLFxuLy8gICAvLyAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4vLyAgIC8vIH0sXG4vLyAgIHdvcmtmbG93OiB7XG4vLyAgICAgYmFja2dyb3VuZENvbG9yOiAnIzI1QTBGRicsXG4vLyAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7UGF0dGVybkJHfSlgLFxuLy8gICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuLy8gICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxuLy8gICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuLy8gICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuLy8gICAgIG92ZXJmbG93OiAnaGlkZGVuJywgLy9jdXRcbi8vICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4vLyAgICAgZGlzcGxheTogJ2ZsZXgnLFxuLy8gICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuLy8gICAgIGNvbG9yOiAnd2hpdGUnLFxuLy8gICAgIHB5OiBbOCwgbnVsbCwgNywgbnVsbCwgbnVsbCwgNl0sXG4vLyAgICAgLy8gcHQ6IC01LFxuLy8gICAgIC8vIHBiOiAtNSxcbi8vICAgICBtdDogNyxcbi8vICAgfSxcbi8vICAgZ3JpZDoge1xuLy8gICAgIG1iOiAtMSxcbi8vICAgICBwdDogMCxcbi8vICAgICBncmlkR2FwOiBbXG4vLyAgICAgICAnMzVweCAwJyxcbi8vICAgICAgIG51bGwsXG4vLyAgICAgICAnNDVweCAzMHB4Jyxcbi8vICAgICAgIG51bGwsXG4vLyAgICAgICAnNTBweCAyNXB4Jyxcbi8vICAgICAgIG51bGwsXG4vLyAgICAgICBudWxsLFxuLy8gICAgICAgJzUwcHggNjVweCcsXG4vLyAgICAgXSxcbi8vICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXG4vLyAgICAgICAncmVwZWF0KDEsMWZyKScsXG4vLyAgICAgICBudWxsLFxuLy8gICAgICAgJ3JlcGVhdCgyLDFmciknLFxuLy8gICAgICAgbnVsbCxcbi8vICAgICAgICdyZXBlYXQoNCwxZnIpJyxcbi8vICAgICBdLFxuLy8gICB9LFxuLy8gICBjYXJkOiB7XG4vLyAgICAgZGlzcGxheTogJ2ZsZXgnLFxuLy8gICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuLy8gICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuLy8gICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCAnbGVmdCddLFxuLy8gICAgIHdpZHRoOiBbJzEwMCUnLCAnODAlJywgJzEwMCUnXSxcbi8vICAgICBteDogWydhdXRvJ10sXG4vLyAgICAgcHg6IFs0LCBudWxsLCBudWxsLCAwXSxcbi8vICAgICAnJjo6YmVmb3JlJzoge1xuLy8gICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4vLyAgICAgICBjb250ZW50OiAnXCJcIicsXG4vLyAgICAgICB0b3A6IDAsXG4vLyAgICAgICBsZWZ0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNzIsIG51bGwsIDkwXSxcbi8vICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuLy8gICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXG4vLyAgICAgICB3aWR0aDogMjE1LFxuLy8gICAgICAgaGVpZ2h0OiA2MCxcbi8vICAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMjBweCknOiB7XG4vLyAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbi8vICAgICAgIH0sXG4vLyAgICAgfSxcbi8vICAgICAnJjpudGgtb2YtdHlwZSgybi0xKTo6YmVmb3JlJzoge1xuLy8gICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7QXJyb3dPZGR9KWAsXG4vLyAgICAgfSxcbi8vICAgICAnJjpudGgtb2YtdHlwZSgybik6OmJlZm9yZSc6IHtcbi8vICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Fycm93RXZlbn0pYCxcbi8vICAgICAgIHRvcDogMTcsXG4vLyAgICAgfSxcbi8vICAgICAnJjpsYXN0LWNoaWxkOjpiZWZvcmUnOiB7XG4vLyAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4vLyAgICAgfSxcbi8vICAgfSxcblxuLy8gICBpY29uQm94OiB7XG4vLyAgICAgd2lkdGg6IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzcwcHgnXSxcbi8vICAgICBoZWlnaHQ6IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzcwcHgnXSxcbi8vICAgICBmbGV4U2hyaW5rOiAwLFxuLy8gICAgIGJvcmRlclJhZGl1czogWzE1LCBudWxsLCAyMywgbnVsbCwgbnVsbCwgMzBdLFxuLy8gICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbi8vICAgICBkaXNwbGF5OiAnZmxleCcsXG4vLyAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4vLyAgICAgbWI6IFs1LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA2XSxcbi8vICAgICBteDogWydhdXRvJywgbnVsbCwgMF0sXG4vLyAgICAgZm9udFNpemU6IFs2LCBudWxsLCA3LCBudWxsLCBudWxsLCAnMzBweCddLFxuLy8gICAgIGZvbnRXZWlnaHQ6IDcwMCxcbi8vICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4vLyAgICAgY29sb3I6ICcjMjM0NTgyJyxcbi8vICAgfSxcbi8vICAgd3JhcHBlcjoge1xuLy8gICAgIHdpZHRoOiAnMTAwJScsXG4vLyAgICAgZGlzcGxheTogJ2ZsZXgnLFxuLy8gICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuLy8gICAgIG10OiAnLTVweCcsXG4vLyAgICAgdGl0bGU6IHtcbi8vICAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgNCwgbnVsbCwgbnVsbCwgNV0sXG4vLyAgICAgICBjb2xvcjogJ3doaXRlJyxcbi8vICAgICAgIGxpbmVIZWlnaHQ6IFsxLjQsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDEuNTVdLFxuLy8gICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAyXSxcbi8vICAgICAgIG1iOiBbMiwgM10sXG4vLyAgICAgfSxcblxuLy8gICAgIHN1YlRpdGxlOiB7XG4vLyAgICAgICBmb250U2l6ZTogMSxcbi8vICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbi8vICAgICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCBudWxsLCAxLjksIDJdLFxuLy8gICAgICAgY29sb3I6ICd3aGl0ZScsXG4vLyAgICAgICBvcGFjaXR5OiAwLjc1LFxuLy8gICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA1XSxcbi8vICAgICB9LFxuLy8gICB9LFxuLy8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=