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
    _s = $RefreshSig$(),
    _templateObject;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */









var data = {
  subTitle: 'About Us',
  title: 'Know More About The Device',
  features: [{
    id: 1,
    imgSrc: assets_shield_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    altText: 'About The Filter',
    title: 'About The Filter',
    text: 'The Polypropylene fibre 3-layered filter filters out particles up-to 0.3 microns giving the Cov-Tech Ventilation System an overall efficiency of more than 95%.'
  }, {
    id: 2,
    imgSrc: assets_icons_14_14_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    altText: 'How Does It Work?',
    title: 'How Does It Work?',
    text: 'Understand how the Cov-Tech Ventilation System works in under 100 seconds through this video.'
  }]
};
function ServiceSection() {
  _s();

  var _this = this;

  // modal popup video handler
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      videoOpen = _useState[0],
      setVideoOpen = _useState[1];

  var handleClick = function handleClick(e) {
    e.preventDefault();
    setVideoOpen(true);
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("section", {
    id: "about",
    sx: {
      variant: 'section.services'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 3
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 3
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: assets_whitepouch_gal_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "Thumbnail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    sx: styles.videoBtn,
    onClick: handleClick,
    "aria-label": "Play Button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoIosPlay"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  })))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_4__["default"], {
    subTitle: data.subTitle,
    title: data.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, data.features.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.card,
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: item.imgSrc,
      alt: item.altText,
      sx: styles.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.wrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      sx: styles.wrapper.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 15
      }
    }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      sx: styles.wrapper.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 15
      }
    }, item.text)));
  })))));
}

_s(ServiceSection, "fjrTXSMqqo5cVpzR03nEXJYpFAo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3dvcmtmbG93LmpzIl0sIm5hbWVzIjpbImRhdGEiLCJzdWJUaXRsZSIsInRpdGxlIiwiZmVhdHVyZXMiLCJpZCIsImltZ1NyYyIsIlNtYXJ0IiwiYWx0VGV4dCIsInRleHQiLCJTZWN1cmUiLCJTZXJ2aWNlU2VjdGlvbiIsInVzZVN0YXRlIiwidmlkZW9PcGVuIiwic2V0VmlkZW9PcGVuIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YXJpYW50Iiwic3R5bGVzIiwiY29udGFpbmVyQm94IiwidGh1bWJuYWlsIiwiU2VydmljZVRodW1iIiwidmlkZW9CdG4iLCJjb250ZW50Qm94IiwiZ3JpZCIsIm1hcCIsIml0ZW0iLCJjYXJkIiwiaWNvbiIsIndyYXBwZXIiLCJkZXNjcmlwdGlvbiIsInBsYXlQbHVzZSIsImtleWZyYW1lcyIsImNvcmVGZWF0dXJlIiwicHkiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwicGIiLCJtdCIsIm1yIiwib3JkZXIiLCJtbCIsInpJbmRleCIsImhlaWdodCIsInNoYXBlQm94IiwiYm90dG9tIiwibGVmdCIsImJvcmRlciIsInRvcCIsInRyYW5zZm9ybSIsIndpZHRoIiwicCIsImJhY2tncm91bmRDb2xvciIsImNvbnRlbnQiLCJib3JkZXJSYWRpdXMiLCJhbmltYXRpb24iLCJvcGFjaXR5IiwiY29sb3IiLCJiZyIsInRleHRBbGlnbiIsImN1cnNvciIsInRyYW5zaXRpb24iLCJzdmciLCJmb250U2l6ZSIsImZsZXhTaHJpbmsiLCJtYiIsInByIiwicGwiLCJwdCIsIm14IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsInZpZGVvV3JhcHBlciIsIm1heFdpZHRoIiwicGFkZGluZ1RvcCIsImlmcmFtZSJdLCJtYXBwaW5n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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45NjJiZjI3ODVjOThiZTFiYTQ5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgQm94LCBHcmlkLCBUZXh0LCBIZWFkaW5nLCBCdXR0b24sIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgVGV4dEZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy90ZXh0LWZlYXR1cmUnO1xuaW1wb3J0IHsgSW9Jb3NQbGF5IH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuXG5pbXBvcnQgU2VydmljZVRodW1iIGZyb20gJ2Fzc2V0cy93aGl0ZXBvdWNoX2dhbC5qcGcnO1xuaW1wb3J0IHNoYXBlUGF0dGVybiBmcm9tICdhc3NldHMvc2hhcGUtcGF0dGVybjEucG5nJztcblxuaW1wb3J0IFNtYXJ0IGZyb20gJ2Fzc2V0cy9zaGllbGQucG5nJztcbmltcG9ydCBTZWN1cmUgZnJvbSAnYXNzZXRzL2ljb25zLTE0LTE0LnBuZyc7XG5cbmNvbnN0IGRhdGEgPSB7XG4gIHN1YlRpdGxlOiAnQWJvdXQgVXMnLFxuICB0aXRsZTogJ0tub3cgTW9yZSBBYm91dCBUaGUgRGV2aWNlJyxcbiAgZmVhdHVyZXM6IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIGltZ1NyYzogU21hcnQsXG4gICAgICBhbHRUZXh0OiAnQWJvdXQgVGhlIEZpbHRlcicsXG4gICAgICB0aXRsZTogJ0Fib3V0IFRoZSBGaWx0ZXInLFxuICAgICAgdGV4dDpcbiAgICAgICAgJ1RoZSBQb2x5cHJvcHlsZW5lIGZpYnJlIDMtbGF5ZXJlZCBmaWx0ZXIgZmlsdGVycyBvdXQgcGFydGljbGVzIHVwLXRvIDAuMyBtaWNyb25zIGdpdmluZyB0aGUgQ292LVRlY2ggVmVudGlsYXRpb24gU3lzdGVtIGFuIG92ZXJhbGwgZWZmaWNpZW5jeSBvZiBtb3JlIHRoYW4gOTUlLicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIGltZ1NyYzogU2VjdXJlLFxuICAgICAgYWx0VGV4dDogJ0hvdyBEb2VzIEl0IFdvcms/JyxcbiAgICAgIHRpdGxlOiAnSG93IERvZXMgSXQgV29yaz8nLFxuICAgICAgdGV4dDpcbiAgICAgICAgJ1VuZGVyc3RhbmQgaG93IHRoZSBDb3YtVGVjaCBWZW50aWxhdGlvbiBTeXN0ZW0gd29ya3MgaW4gdW5kZXIgMTAwIHNlY29uZHMgdGhyb3VnaCB0aGlzIHZpZGVvLicsXG4gICAgfSxcbiAgXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlcnZpY2VTZWN0aW9uKCkge1xuICAgIC8vIG1vZGFsIHBvcHVwIHZpZGVvIGhhbmRsZXJcbiAgICBjb25zdCBbdmlkZW9PcGVuLCBzZXRWaWRlb09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNldFZpZGVvT3Blbih0cnVlKTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gIDxzZWN0aW9uIGlkPVwiYWJvdXRcIiBzeD17eyB2YXJpYW50OiAnc2VjdGlvbi5zZXJ2aWNlcycgfX0+XG4gIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJCb3h9PlxuICAgIDxCb3ggc3g9e3N0eWxlcy50aHVtYm5haWx9PlxuICAgICAgPEltYWdlIHNyYz17U2VydmljZVRodW1ifSBhbHQ9XCJUaHVtYm5haWxcIiAvPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBzeD17c3R5bGVzLnZpZGVvQnRufVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgYXJpYS1sYWJlbD1cIlBsYXkgQnV0dG9uXCJcbiAgICAgID5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPElvSW9zUGxheSAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L0J1dHRvbj5cblxuICAgICAgey8qIDxCb3ggc3g9e3N0eWxlcy5zaGFwZUJveH0+XG4gICAgICAgIDxJbWFnZSBzcmM9e3NoYXBlUGF0dGVybn0gYWx0PVwiU2hhcGVcIiAvPlxuICAgICAgPC9Cb3g+ICovfVxuICAgIDwvQm94PlxuICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50Qm94fT5cbiAgICAgIDxUZXh0RmVhdHVyZSBzdWJUaXRsZT17ZGF0YS5zdWJUaXRsZX0gdGl0bGU9e2RhdGEudGl0bGV9IC8+XG5cbiAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgIHtkYXRhLmZlYXR1cmVzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5pbWdTcmN9IGFsdD17aXRlbS5hbHRUZXh0fSBzeD17c3R5bGVzLmljb259IC8+XG5cbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT57aXRlbS50aXRsZX08L0hlYWRpbmc+XG4gICAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMud3JhcHBlci5kZXNjcmlwdGlvbn0+e2l0ZW0udGV4dH08L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Cb3g+XG4gIDwvQ29udGFpbmVyPlxuPC9zZWN0aW9uPlxuKTtcbn1cblxuY29uc3QgcGxheVBsdXNlID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVaKDApIHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVooMCkgc2NhbGUoMS41KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5gO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvcmVGZWF0dXJlOiB7XG4gICAgcHk6IFswLCBudWxsLCBudWxsLCAyLCBudWxsLCA3XSxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgfSxcbiAgY29udGFpbmVyQm94OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6IFsnZmxleC1zdGFydCcsIG51bGwsIG51bGwsICdjZW50ZXInXSxcbiAgICBqdXN0aWZ5Q29udGVudDogWydmbGV4LXN0YXJ0JywgbnVsbCwgbnVsbCwgJ3NwYWNlLWJldHdlZW4nXSxcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsIG51bGwsIG51bGwsICdyb3cnXSxcbiAgICBwYjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDNdLFxuICAgIG10OiA3LFxuICB9LFxuICB0aHVtYm5haWw6IHtcbiAgICBtcjogWydhdXRvJywgbnVsbCwgbnVsbCwgNiwgNjAsIDg1XSxcbiAgICBvcmRlcjogWzIsIG51bGwsIG51bGwsIDBdLFxuICAgIG1sOiBbJ2F1dG8nLCBudWxsLCBudWxsLCAwXSxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICc+IGltZyc6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgekluZGV4OiAxLFxuICAgICAgaGVpZ2h0OiBbMzEwLCAnYXV0byddLFxuICAgIH0sXG4gIH0sXG4gIHNoYXBlQm94OiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYm90dG9tOiAtNjgsXG4gICAgbGVmdDogLTE2MCxcbiAgICB6SW5kZXg6IC0xLFxuICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcbiAgfSxcbiAgdmlkZW9CdG46IHtcbiAgICB6SW5kZXg6IDIsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogJzUwJScsXG4gICAgdG9wOiAnNTAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgIHdpZHRoOiBbJzYwcHgnLCBudWxsLCAnODBweCcsIG51bGwsICcxMDBweCddLFxuICAgIGhlaWdodDogWyc2MHB4JywgbnVsbCwgJzgwcHgnLCBudWxsLCAnMTAwcHgnXSxcbiAgICBwOiAnMHB4ICFpbXBvcnRhbnQnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgdG9wOiAnNTAlJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKScsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgd2lkdGg6IFsnNjBweCcsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXG4gICAgICBoZWlnaHQ6IFsnNjBweCcsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBhbmltYXRpb246IGAke3BsYXlQbHVzZX0gMS41cyBlYXNlLW91dCBpbmZpbml0ZWAsXG4gICAgICBvcGFjaXR5OiAwLjUsXG4gICAgfSxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIC8vIGJveFNoYWRvdzogJ3JnYmEoMjMzLCA3NiwgODQsIDAuNTcpIDBweCA5cHggMjBweCAtNXB4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxuICAgIH0sXG4gICAgJz4gc3Bhbic6IHtcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyxcbiAgICAgIHdpZHRoOiAnaW5oZXJpdCcsXG4gICAgICBoZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuNXMnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHpJbmRleDogMixcbiAgICB9LFxuICAgIHN2Zzoge1xuICAgICAgZm9udFNpemU6IFs0MCwgbnVsbCwgNDgsIG51bGwsIDYyXSxcbiAgICB9LFxuICB9LFxuICBjb250ZW50Qm94OiB7XG4gICAgd2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsIDMxNSwgMzkwLCA0NTAsIG51bGwsIDUwMF0sXG4gICAgZmxleFNocmluazogMCxcbiAgICBtYjogWzcsIG51bGwsIDYwLCAwXSxcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcbiAgfSxcbiAgZ3JpZDoge1xuICAgIHByOiBbMiwgMCwgbnVsbCwgbnVsbCwgNiwgJzcwcHgnXSxcbiAgICBwbDogWzIsIDBdLFxuICAgIHB0OiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgM10sXG4gICAgbXg6ICdhdXRvJyxcbiAgICB3aWR0aDogWycxMDAlJywgMzcwLCA0MjAsICcxMDAlJ10sXG4gICAgZ3JpZEdhcDogWyczNXB4IDAnLCBudWxsLCBudWxsLCBudWxsLCAnNTBweCAwJ10sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogWydyZXBlYXQoMSwxZnIpJ10sXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gIH0sXG5cbiAgaWNvbjoge1xuICAgIHdpZHRoOiBbJzQ1cHgnLCBudWxsLCBudWxsLCBudWxsLCAnNTVweCddLFxuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgbXI6IFszLCBudWxsLCBudWxsLCBudWxsLCA0XSxcbiAgfSxcbiAgd3JhcHBlcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIG10OiAnLTVweCcsXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgJzE0cHgnLCAxXSxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuOSxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogMyxcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxuICAgICAgbGluZUhlaWdodDogMS40LFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgbWI6IFsyLCBudWxsLCAzLCAyLCAzXSxcbiAgICB9LFxuXG4gICAgc3ViVGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgJzE0cHgnLCAxXSxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuOSxcbiAgICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgfSxcbiAgfSxcbiAgdmlkZW9XcmFwcGVyOiB7XG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB3aWR0aDogJzkwMHB4JyxcbiAgICAnJjpiZWZvcmUnOiB7XG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgcGFkZGluZ1RvcDogJzU2LjI1JScsXG4gICAgfSxcbiAgICBpZnJhbWU6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICB9LFxuICB9LFxufTtcblxuXG5cblxuXG4vLyAvKiogQGpzeCBqc3ggKi9cbi8vIGltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcbi8vIGltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xuLy8gaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XG4vLyBpbXBvcnQgVGV4dEZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy90ZXh0LWZlYXR1cmUnO1xuXG4vLyBpbXBvcnQgUGF0dGVybkJHIGZyb20gJ2Fzc2V0cy9wYXR0ZXJuQkcucG5nJztcbi8vIGltcG9ydCBBcnJvd09kZCBmcm9tICdhc3NldHMvYXJyb3dPZGQuc3ZnJztcbi8vIGltcG9ydCBBcnJvd0V2ZW4gZnJvbSAnYXNzZXRzL2Fycm93RXZlbi5zdmcnO1xuXG4vLyBjb25zdCBkYXRhID0gW1xuLy8gICB7XG4vLyAgICAgaW1hZ2U6ICdodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzdlMGY1NV85YTU5NzA2N2FlNDA0NGE4YjBmOGQ5ODkzNGNiM2U0Zn5tdjIucG5nL3YxL2ZpbGwvd18zNDEsaF8xMDQsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMS8zZHMtZGFyay53ZWJwJyxcbi8vICAgICBsaW5rOiAnIycsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpbWFnZTogJ2h0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvN2UwZjU1XzlhNTk3MDY3YWU0MDQ0YThiMGY4ZDk4OTM0Y2IzZTRmfm12Mi5wbmcvdjEvZmlsbC93XzM0MSxoXzEwNCxhbF9jLHFfODUsdXNtXzAuNjZfMS4wMF8wLjAxLzNkcy1kYXJrLndlYnAnLFxuLy8gICAgIGxpbms6ICcjJyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGltYWdlOiAnaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS83ZTBmNTVfOWE1OTcwNjdhZTQwNDRhOGIwZjhkOTg5MzRjYjNlNGZ+bXYyLnBuZy92MS9maWxsL3dfMzQxLGhfMTA0LGFsX2MscV84NSx1c21fMC42Nl8xLjAwXzAuMDEvM2RzLWRhcmsud2VicCcsXG4vLyAgICAgbGluazogJyMnLFxuLy8gICB9LFxuLy8gXTtcblxuLy8gY29uc3QgZGF0YTIgPSB7XG4vLyAgIGRlc2NyaXB0aW9uOlxuLy8gICAgIFwiVGhlICdDb3YtVGVjaCBWZW50aWxhdGlvbiBTeXN0ZW0nIGlzIHRlc3RlZCBieSBJbnRlcnRlayBhY2NvcmRpbmcgdG8gSUVDIDYwNjAxLTEgaW50ZXJuYXRpb25hbCBtZWRpY2FsIHNhZmV0eSBzdGFuZGFyZHMuXCIsXG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3JrRmxvdygpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8c2VjdGlvbiBzeD17c3R5bGVzLndvcmtmbG93fT5cbi8vICAgICAgIDxDb250YWluZXI+XG4vLyAgICAgICAgIDxTZWN0aW9uSGVhZGVyXG4vLyAgICAgICAgICAgc2xvZ2FuPVwiRk9SIFlPVVIgU0FGRVRZXCJcbi8vICAgICAgICAgICB0aXRsZT1cIk1lZGljYWxseSBUZXN0ZWQgQnkgSW50ZXJ0ZWtcIlxuLy8gICAgICAgICAgIGlzV2hpdGU9e3RydWV9XG4vLyAgICAgICAgIC8+XG4vLyAgICAgICAgIDxCb3g+XG4vLyAgICAgICAgIDxUZXh0RmVhdHVyZSBpc1doaXRlPXt0cnVlfVxuLy8gICAgICAgICAgIGRlc2NyaXB0aW9uPXtkYXRhMi5kZXNjcmlwdGlvbn1cbi8vICAgICAgICAgLz5cbi8vICAgICAgICAgPC9Cb3g+XG4vLyAgICAgICAgIHsvKiA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxuLy8gICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxuLy8gICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNhcmR9IGtleT17aXRlbS5pZH0+XG4vLyAgICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5pY29uQm94fT57YDAke2l0ZW0uaWR9YH08L0JveD5cbi8vICAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxuLy8gICAgICAgICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+e2l0ZW0udGl0bGV9PC9IZWFkaW5nPlxuLy8gICAgICAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+e2l0ZW0udGV4dH08L1RleHQ+XG4vLyAgICAgICAgICAgICAgIDwvQm94PlxuLy8gICAgICAgICAgICAgPC9Cb3g+XG4vLyAgICAgICAgICAgKSl9XG4vLyAgICAgICAgIDwvR3JpZD4gKi99XG4vLyAgICAgICA8L0NvbnRhaW5lcj5cbi8vICAgICA8L3NlY3Rpb24+XG4vLyAgICk7XG4vLyB9XG5cbi8vIGNvbnN0IHN0eWxlcyA9IHtcbi8vICAgLy8gZGVzYzoge1xuLy8gICAvLyAgIGRpc3BsYXk6ICdmbGV4Jyxcbi8vICAgLy8gICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbi8vICAgLy8gICBjb2xvcjogJ3doaXRlJyxcbi8vICAgLy8gICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuLy8gICAvLyB9LFxuLy8gICB3b3JrZmxvdzoge1xuLy8gICAgIGJhY2tncm91bmRDb2xvcjogJyMyNUEwRkYnLFxuLy8gICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1BhdHRlcm5CR30pYCxcbi8vICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbi8vICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcbi8vICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbi8vICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbi8vICAgICBvdmVyZmxvdzogJ2hpZGRlbicsIC8vY3V0XG4vLyAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuLy8gICAgIGRpc3BsYXk6ICdmbGV4Jyxcbi8vICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbi8vICAgICBjb2xvcjogJ3doaXRlJyxcbi8vICAgICBweTogWzgsIG51bGwsIDcsIG51bGwsIG51bGwsIDZdLFxuLy8gICAgIC8vIHB0OiAtNSxcbi8vICAgICAvLyBwYjogLTUsXG4vLyAgICAgbXQ6IDcsXG4vLyAgIH0sXG4vLyAgIGdyaWQ6IHtcbi8vICAgICBtYjogLTEsXG4vLyAgICAgcHQ6IDAsXG4vLyAgICAgZ3JpZEdhcDogW1xuLy8gICAgICAgJzM1cHggMCcsXG4vLyAgICAgICBudWxsLFxuLy8gICAgICAgJzQ1cHggMzBweCcsXG4vLyAgICAgICBudWxsLFxuLy8gICAgICAgJzUwcHggMjVweCcsXG4vLyAgICAgICBudWxsLFxuLy8gICAgICAgbnVsbCxcbi8vICAgICAgICc1MHB4IDY1cHgnLFxuLy8gICAgIF0sXG4vLyAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xuLy8gICAgICAgJ3JlcGVhdCgxLDFmciknLFxuLy8gICAgICAgbnVsbCxcbi8vICAgICAgICdyZXBlYXQoMiwxZnIpJyxcbi8vICAgICAgIG51bGwsXG4vLyAgICAgICAncmVwZWF0KDQsMWZyKScsXG4vLyAgICAgXSxcbi8vICAgfSxcbi8vICAgY2FyZDoge1xuLy8gICAgIGRpc3BsYXk6ICdmbGV4Jyxcbi8vICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbi8vICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbi8vICAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgJ2xlZnQnXSxcbi8vICAgICB3aWR0aDogWycxMDAlJywgJzgwJScsICcxMDAlJ10sXG4vLyAgICAgbXg6IFsnYXV0byddLFxuLy8gICAgIHB4OiBbNCwgbnVsbCwgbnVsbCwgMF0sXG4vLyAgICAgJyY6OmJlZm9yZSc6IHtcbi8vICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuLy8gICAgICAgY29udGVudDogJ1wiXCInLFxuLy8gICAgICAgdG9wOiAwLFxuLy8gICAgICAgbGVmdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDcyLCBudWxsLCA5MF0sXG4vLyAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbi8vICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxuLy8gICAgICAgd2lkdGg6IDIxNSxcbi8vICAgICAgIGhlaWdodDogNjAsXG4vLyAgICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjIwcHgpJzoge1xuLy8gICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4vLyAgICAgICB9LFxuLy8gICAgIH0sXG4vLyAgICAgJyY6bnRoLW9mLXR5cGUoMm4tMSk6OmJlZm9yZSc6IHtcbi8vICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Fycm93T2RkfSlgLFxuLy8gICAgIH0sXG4vLyAgICAgJyY6bnRoLW9mLXR5cGUoMm4pOjpiZWZvcmUnOiB7XG4vLyAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtBcnJvd0V2ZW59KWAsXG4vLyAgICAgICB0b3A6IDE3LFxuLy8gICAgIH0sXG4vLyAgICAgJyY6bGFzdC1jaGlsZDo6YmVmb3JlJzoge1xuLy8gICAgICAgZGlzcGxheTogJ25vbmUnLFxuLy8gICAgIH0sXG4vLyAgIH0sXG5cbi8vICAgaWNvbkJveDoge1xuLy8gICAgIHdpZHRoOiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc3MHB4J10sXG4vLyAgICAgaGVpZ2h0OiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc3MHB4J10sXG4vLyAgICAgZmxleFNocmluazogMCxcbi8vICAgICBib3JkZXJSYWRpdXM6IFsxNSwgbnVsbCwgMjMsIG51bGwsIG51bGwsIDMwXSxcbi8vICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4vLyAgICAgZGlzcGxheTogJ2ZsZXgnLFxuLy8gICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuLy8gICAgIG1iOiBbNSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNl0sXG4vLyAgICAgbXg6IFsnYXV0bycsIG51bGwsIDBdLFxuLy8gICAgIGZvbnRTaXplOiBbNiwgbnVsbCwgNywgbnVsbCwgbnVsbCwgJzMwcHgnXSxcbi8vICAgICBmb250V2VpZ2h0OiA3MDAsXG4vLyAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuLy8gICAgIGNvbG9yOiAnIzIzNDU4MicsXG4vLyAgIH0sXG4vLyAgIHdyYXBwZXI6IHtcbi8vICAgICB3aWR0aDogJzEwMCUnLFxuLy8gICAgIGRpc3BsYXk6ICdmbGV4Jyxcbi8vICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbi8vICAgICBtdDogJy01cHgnLFxuLy8gICAgIHRpdGxlOiB7XG4vLyAgICAgICBmb250U2l6ZTogWzMsIG51bGwsIDQsIG51bGwsIG51bGwsIDVdLFxuLy8gICAgICAgY29sb3I6ICd3aGl0ZScsXG4vLyAgICAgICBsaW5lSGVpZ2h0OiBbMS40LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxLjU1XSxcbi8vICAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXG4vLyAgICAgICBtYjogWzIsIDNdLFxuLy8gICAgIH0sXG5cbi8vICAgICBzdWJUaXRsZToge1xuLy8gICAgICAgZm9udFNpemU6IDEsXG4vLyAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4vLyAgICAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgbnVsbCwgMS45LCAyXSxcbi8vICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuLy8gICAgICAgb3BhY2l0eTogMC43NSxcbi8vICAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXG4vLyAgICAgfSxcbi8vICAgfSxcbi8vIH07XG4iXSwic291cmNlUm9vdCI6IiJ9