webpackHotUpdate_N_E("pages/index",{

/***/ "./src/assets/icons-14-14.png":
false,

/***/ "./src/assets/shield.png":
false,

/***/ "./src/sections/service-section.js":
/*!*****************************************!*\
  !*** ./src/sections/service-section.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkFlow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/patternBG.png */ "./src/assets/patternBG.png");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/arrowOdd.svg */ "./src/assets/arrowOdd.svg");
/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/arrowEven.svg */ "./src/assets/arrowEven.svg");
/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Sayli\\Downloads\\nextjs_landing_page\\nextjs_landing_page\\src\\sections\\service-section.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */







var data = [{
  image: 'https://static.wixstatic.com/media/7e0f55_9a597067ae4044a8b0f8d98934cb3e4f~mv2.png/v1/fill/w_341,h_104,al_c,q_85,usm_0.66_1.00_0.01/3ds-dark.webp',
  link: '#'
}, {
  image: 'https://static.wixstatic.com/media/7e0f55_9a597067ae4044a8b0f8d98934cb3e4f~mv2.png/v1/fill/w_341,h_104,al_c,q_85,usm_0.66_1.00_0.01/3ds-dark.webp',
  link: '#'
}, {
  image: 'https://static.wixstatic.com/media/7e0f55_9a597067ae4044a8b0f8d98934cb3e4f~mv2.png/v1/fill/w_341,h_104,al_c,q_85,usm_0.66_1.00_0.01/3ds-dark.webp',
  link: '#'
}];
var data2 = {
  description: "The 'Cov-Tech Ventilation System' is tested by Intertek according to IEC 60601-1 international medical safety standards."
};
function WorkFlow() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: styles.workflow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "FOR YOUR SAFETY",
    title: "Medically Tested By Intertek",
    isWhite: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isWhite: true,
    description: data2.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }))));
}
_c = WorkFlow;
var styles = {
  // desc: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   color: 'white',
  //   justifyContent: 'space-between',
  // },
  workflow: {
    backgroundColor: '#25A0FF',
    backgroundImage: "url(".concat(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_4___default.a, ")"),
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    overflow: 'hidden',
    //cut
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    py: [8, null, 7, null, null, 6],
    // pt: -5,
    // pb: -5,
    mt: 7
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: ['35px 0', null, '45px 30px', null, '50px 25px', null, null, '50px 65px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)']
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none'
      }
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: "url(".concat(assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_5___default.a, ")")
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: "url(".concat(assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_6___default.a, ")"),
      top: 17
    },
    '&:last-child::before': {
      display: 'none'
    }
  },
  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582'
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3]
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5]
    }
  }
}; // import React, { useState } from 'react';
// /** @jsx jsx */
// import { jsx, Container, Box, Grid, Text, Heading, Button, Image } from 'theme-ui';
// import { keyframes } from '@emotion/core';
// import TextFeature from 'components/text-feature';
// import ModalVideo from 'react-modal-video';
// import { IoIosPlay } from 'react-icons/io';
// import ServiceThumb from 'assets/whitepouch_gal.jpg';
// import shapePattern from 'assets/shape-pattern1.png';
// import Smart from 'assets/shield.png';
// import Secure from 'assets/icons-14-14.png';
// const data = {
//   subTitle: 'About Us',
//   title: 'Know More About The Device',
//   features: [
//     {
//       id: 1,
//       imgSrc: Smart,
//       altText: 'About The Filter',
//       title: 'About The Filter',
//       text:
//         'The Polypropylene fibre 3-layered filter filters out particles up-to 0.3 microns giving the Cov-Tech Ventilation System an overall efficiency of more than 95%.',
//     },
//     {
//       id: 2,
//       imgSrc: Secure,
//       altText: 'How Does It Work?',
//       title: 'How Does It Work?',
//       text:
//         'Understand how the Cov-Tech Ventilation System works in under 100 seconds through this video.',
//     },
//   ],
// };
// export default function ServiceSection() {
//     // modal popup video handler
//     const [videoOpen, setVideoOpen] = useState(false);
//     const handleClick = (e) => {
//       e.preventDefault();
//       setVideoOpen(true);
//     };
//     return (
//   <section id="about" sx={{ variant: 'section.services' }}>
//   <Container sx={styles.containerBox}>
//     <Box sx={styles.thumbnail}>
//       <Image src={ServiceThumb} alt="Thumbnail" />
//       <Button
//         sx={styles.videoBtn}
//         onClick={handleClick}
//         aria-label="Play Button"
//       >
//         <span>
//           <IoIosPlay />
//         </span>
//       </Button>
//       {/* <Box sx={styles.shapeBox}>
//         <Image src={shapePattern} alt="Shape" />
//       </Box> */}
//     </Box>
//     <Box sx={styles.contentBox}>
//       <TextFeature subTitle={data.subTitle} title={data.title} />
//       <Grid sx={styles.grid}>
//         {data.features.map((item) => (
//           <Box sx={styles.card} key={item.id}>
//             <Image src={item.imgSrc} alt={item.altText} sx={styles.icon} />
//             <Box sx={styles.wrapper}>
//               <Heading sx={styles.wrapper.title}>{item.title}</Heading>
//               <Text sx={styles.wrapper.description}>{item.text}</Text>
//             </Box>
//           </Box>
//         ))}
//       </Grid>
//     </Box>
//   </Container>
//   <ModalVideo
//     channel="youtube"
//     isOpen={videoOpen}
//     videoId="0jGCMJhYk28"
//     onClose={() => setVideoOpen(false)}
//   />
// </section>
// );
// }
// const playPluse = keyframes`
//   from {
//     transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
//     opacity: 1;
//   }
//   to {
// 	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
//     opacity: 0;
//   }
// `;
// const styles = {
//   coreFeature: {
//     py: [0, null, null, 2, null, 7],
//     position: 'relative',
//   },
//   containerBox: {
//     display: 'flex',
//     alignItems: ['flex-start', null, null, 'center'],
//     justifyContent: ['flex-start', null, null, 'space-between'],
//     flexDirection: ['column', null, null, 'row'],
//     pb: [0, null, null, null, null, 3],
//     mt: 7,
//   },
//   thumbnail: {
//     mr: ['auto', null, null, 6, 60, 85],
//     order: [2, null, null, 0],
//     ml: ['auto', null, null, 0],
//     display: 'inline-flex',
//     position: 'relative',
//     '> img': {
//       position: 'relative',
//       zIndex: 1,
//       height: [310, 'auto'],
//     },
//   },
//   shapeBox: {
//     position: 'absolute',
//     bottom: -68,
//     left: -160,
//     zIndex: -1,
//     display: ['none', null, null, null, null, 'inline-block'],
//   },
//   videoBtn: {
//     zIndex: 2,
//     border: 'none',
//     position: 'absolute',
//     left: '50%',
//     top: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: ['60px', null, '80px', null, '100px'],
//     height: ['60px', null, '80px', null, '100px'],
//     p: '0px !important',
//     backgroundColor: 'transparent',
//     '&::before': {
//       position: 'absolute',
//       border: 'none',
//       content: '""',
//       left: '50%',
//       top: '50%',
//       transform: 'translateX(-50%) translateY(-50%)',
//       display: 'block',
//       width: ['60px', null, '80px', null, '100px'],
//       height: ['60px', null, '80px', null, '100px'],
//       backgroundColor: 'primary',
//       borderRadius: '50%',
//       animation: `${playPluse} 1.5s ease-out infinite`,
//       opacity: 0.5,
//     },
//     '&:hover': {
//       // boxShadow: 'rgba(233, 76, 84, 0.57) 0px 9px 20px -5px',
//       backgroundColor: 'white',
//       color: 'primary',
//       border: 'none',
//       bg: 'transparent',
//     },
//     '> span': {
//       border: 'none',
//       backgroundColor: 'rgba(255,255,255,0.5)',
//       width: 'inherit',
//       height: 'inherit',
//       textAlign: 'center',
//       borderRadius: '50%',
//       cursor: 'pointer',
//       transition: 'all 0.5s',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       position: 'relative',
//       zIndex: 2,
//     },
//     svg: {
//       fontSize: [40, null, 48, null, 62],
//     },
//   },
//   contentBox: {
//     width: ['100%', null, null, 315, 390, 450, null, 500],
//     flexShrink: 0,
//     mb: [7, null, 60, 0],
//     textAlign: ['center', null, null, 'left'],
//   },
//   grid: {
//     pr: [2, 0, null, null, 6, '70px'],
//     pl: [2, 0],
//     pt: [2, null, null, null, 3],
//     mx: 'auto',
//     width: ['100%', 370, 420, '100%'],
//     gridGap: ['35px 0', null, null, null, '50px 0'],
//     gridTemplateColumns: ['repeat(1,1fr)'],
//   },
//   card: {
//     display: 'flex',
//     alignItems: 'flex-start',
//     transition: 'all 0.3s',
//   },
//   icon: {
//     width: ['45px', null, null, null, '55px'],
//     height: 'auto',
//     flexShrink: 0,
//     mr: [3, null, null, null, 4],
//   },
//   wrapper: {
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     textAlign: 'left',
//     mt: '-5px',
//     description: {
//       fontSize: [1, null, null, '14px', 1],
//       fontWeight: 400,
//       lineHeight: 1.9,
//     },
//     title: {
//       fontSize: 3,
//       color: 'heading_secondary',
//       lineHeight: 1.4,
//       fontWeight: 700,
//       mb: [2, null, 3, 2, 3],
//     },
//     subTitle: {
//       fontSize: [1, null, null, '14px', 1],
//       fontWeight: 400,
//       lineHeight: 1.9,
//       color: 'blue',
//     },
//   },
//   videoWrapper: {
//     maxWidth: '100%',
//     position: 'relative',
//     width: '900px',
//     '&:before': {
//       content: '""',
//       display: 'block',
//       paddingTop: '56.25%',
//     },
//     iframe: {
//       width: '100%',
//       height: '100%',
//       position: 'absolute',
//       top: 0,
//       left: 0,
//     },
//   },
// };

var _c;

$RefreshReg$(_c, "WorkFlow");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3NlcnZpY2Utc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiaW1hZ2UiLCJsaW5rIiwiZGF0YTIiLCJkZXNjcmlwdGlvbiIsIldvcmtGbG93Iiwic3R5bGVzIiwid29ya2Zsb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJQYXR0ZXJuQkciLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwianVzdGlmeUNvbnRlbnQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwicHkiLCJtdCIsImdyaWQiLCJtYiIsInB0IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJjYXJkIiwiZmxleERpcmVjdGlvbiIsInRleHRBbGlnbiIsIndpZHRoIiwibXgiLCJweCIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwiQXJyb3dPZGQiLCJBcnJvd0V2ZW4iLCJpY29uQm94IiwiZmxleFNocmluayIsImJvcmRlclJhZGl1cyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIndyYXBwZXIiLCJ0aXRsZSIsImxpbmVIZWlnaHQiLCJwciIsInN1YlRpdGxlIiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNYO0FBQ0VDLE9BQUssRUFBRSxtSkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQURXLEVBS1g7QUFDRUQsT0FBSyxFQUFFLG1KQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBTFcsRUFTWDtBQUNFRCxPQUFLLEVBQUUsbUpBRFQ7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FUVyxDQUFiO0FBZUEsSUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRhYjYwNzg2YjQ2ZWViMjVhY2UyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XG5pbXBvcnQgVGV4dEZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy90ZXh0LWZlYXR1cmUnO1xuXG5pbXBvcnQgUGF0dGVybkJHIGZyb20gJ2Fzc2V0cy9wYXR0ZXJuQkcucG5nJztcbmltcG9ydCBBcnJvd09kZCBmcm9tICdhc3NldHMvYXJyb3dPZGQuc3ZnJztcbmltcG9ydCBBcnJvd0V2ZW4gZnJvbSAnYXNzZXRzL2Fycm93RXZlbi5zdmcnO1xuXG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgaW1hZ2U6ICdodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzdlMGY1NV85YTU5NzA2N2FlNDA0NGE4YjBmOGQ5ODkzNGNiM2U0Zn5tdjIucG5nL3YxL2ZpbGwvd18zNDEsaF8xMDQsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMS8zZHMtZGFyay53ZWJwJyxcbiAgICBsaW5rOiAnIycsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogJ2h0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvN2UwZjU1XzlhNTk3MDY3YWU0MDQ0YThiMGY4ZDk4OTM0Y2IzZTRmfm12Mi5wbmcvdjEvZmlsbC93XzM0MSxoXzEwNCxhbF9jLHFfODUsdXNtXzAuNjZfMS4wMF8wLjAxLzNkcy1kYXJrLndlYnAnLFxuICAgIGxpbms6ICcjJyxcbiAgfSxcbiAge1xuICAgIGltYWdlOiAnaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS83ZTBmNTVfOWE1OTcwNjdhZTQwNDRhOGIwZjhkOTg5MzRjYjNlNGZ+bXYyLnBuZy92MS9maWxsL3dfMzQxLGhfMTA0LGFsX2MscV84NSx1c21fMC42Nl8xLjAwXzAuMDEvM2RzLWRhcmsud2VicCcsXG4gICAgbGluazogJyMnLFxuICB9LFxuXTtcblxuY29uc3QgZGF0YTIgPSB7XG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiVGhlICdDb3YtVGVjaCBWZW50aWxhdGlvbiBTeXN0ZW0nIGlzIHRlc3RlZCBieSBJbnRlcnRlayBhY2NvcmRpbmcgdG8gSUVDIDYwNjAxLTEgaW50ZXJuYXRpb25hbCBtZWRpY2FsIHNhZmV0eSBzdGFuZGFyZHMuXCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3JrRmxvdygpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBzeD17c3R5bGVzLndvcmtmbG93fT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgICAgc2xvZ2FuPVwiRk9SIFlPVVIgU0FGRVRZXCJcbiAgICAgICAgICB0aXRsZT1cIk1lZGljYWxseSBUZXN0ZWQgQnkgSW50ZXJ0ZWtcIlxuICAgICAgICAgIGlzV2hpdGU9e3RydWV9XG4gICAgICAgIC8+XG4gICAgICAgIDxCb3g+XG4gICAgICAgIDxUZXh0RmVhdHVyZSBpc1doaXRlPXt0cnVlfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtkYXRhMi5kZXNjcmlwdGlvbn1cbiAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIHsvKiA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNhcmR9IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5pY29uQm94fT57YDAke2l0ZW0uaWR9YH08L0JveD5cbiAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+e2l0ZW0udGl0bGV9PC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+e2l0ZW0udGV4dH08L1RleHQ+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD4gKi99XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgLy8gZGVzYzoge1xuICAvLyAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgLy8gICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgLy8gICBjb2xvcjogJ3doaXRlJyxcbiAgLy8gICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAvLyB9LFxuICB3b3JrZmxvdzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyMyNUEwRkYnLFxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1BhdHRlcm5CR30pYCxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsIC8vY3V0XG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBweTogWzgsIG51bGwsIDcsIG51bGwsIG51bGwsIDZdLFxuICAgIC8vIHB0OiAtNSxcbiAgICAvLyBwYjogLTUsXG4gICAgbXQ6IDcsXG4gIH0sXG4gIGdyaWQ6IHtcbiAgICBtYjogLTEsXG4gICAgcHQ6IDAsXG4gICAgZ3JpZEdhcDogW1xuICAgICAgJzM1cHggMCcsXG4gICAgICBudWxsLFxuICAgICAgJzQ1cHggMzBweCcsXG4gICAgICBudWxsLFxuICAgICAgJzUwcHggMjVweCcsXG4gICAgICBudWxsLFxuICAgICAgbnVsbCxcbiAgICAgICc1MHB4IDY1cHgnLFxuICAgIF0sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xuICAgICAgJ3JlcGVhdCgxLDFmciknLFxuICAgICAgbnVsbCxcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcbiAgICAgIG51bGwsXG4gICAgICAncmVwZWF0KDQsMWZyKScsXG4gICAgXSxcbiAgfSxcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgJ2xlZnQnXSxcbiAgICB3aWR0aDogWycxMDAlJywgJzgwJScsICcxMDAlJ10sXG4gICAgbXg6IFsnYXV0byddLFxuICAgIHB4OiBbNCwgbnVsbCwgbnVsbCwgMF0sXG4gICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDcyLCBudWxsLCA5MF0sXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxuICAgICAgd2lkdGg6IDIxNSxcbiAgICAgIGhlaWdodDogNjAsXG4gICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjIwcHgpJzoge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJyY6bnRoLW9mLXR5cGUoMm4tMSk6OmJlZm9yZSc6IHtcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Fycm93T2RkfSlgLFxuICAgIH0sXG4gICAgJyY6bnRoLW9mLXR5cGUoMm4pOjpiZWZvcmUnOiB7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtBcnJvd0V2ZW59KWAsXG4gICAgICB0b3A6IDE3LFxuICAgIH0sXG4gICAgJyY6bGFzdC1jaGlsZDo6YmVmb3JlJzoge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG5cbiAgaWNvbkJveDoge1xuICAgIHdpZHRoOiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc3MHB4J10sXG4gICAgaGVpZ2h0OiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc3MHB4J10sXG4gICAgZmxleFNocmluazogMCxcbiAgICBib3JkZXJSYWRpdXM6IFsxNSwgbnVsbCwgMjMsIG51bGwsIG51bGwsIDMwXSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG1iOiBbNSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNl0sXG4gICAgbXg6IFsnYXV0bycsIG51bGwsIDBdLFxuICAgIGZvbnRTaXplOiBbNiwgbnVsbCwgNywgbnVsbCwgbnVsbCwgJzMwcHgnXSxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGNvbG9yOiAnIzIzNDU4MicsXG4gIH0sXG4gIHdyYXBwZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBtdDogJy01cHgnLFxuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogWzMsIG51bGwsIDQsIG51bGwsIG51bGwsIDVdLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBsaW5lSGVpZ2h0OiBbMS40LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxLjU1XSxcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXG4gICAgICBtYjogWzIsIDNdLFxuICAgIH0sXG5cbiAgICBzdWJUaXRsZToge1xuICAgICAgZm9udFNpemU6IDEsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgbnVsbCwgMS45LCAyXSxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgb3BhY2l0eTogMC43NSxcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXG4gICAgfSxcbiAgfSxcbn07XG5cblxuXG5cbi8vIGltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8vIC8qKiBAanN4IGpzeCAqL1xuLy8gaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCwgR3JpZCwgVGV4dCwgSGVhZGluZywgQnV0dG9uLCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcbi8vIGltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuLy8gaW1wb3J0IFRleHRGZWF0dXJlIGZyb20gJ2NvbXBvbmVudHMvdGV4dC1mZWF0dXJlJztcbi8vIGltcG9ydCBNb2RhbFZpZGVvIGZyb20gJ3JlYWN0LW1vZGFsLXZpZGVvJztcbi8vIGltcG9ydCB7IElvSW9zUGxheSB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcblxuLy8gaW1wb3J0IFNlcnZpY2VUaHVtYiBmcm9tICdhc3NldHMvd2hpdGVwb3VjaF9nYWwuanBnJztcbi8vIGltcG9ydCBzaGFwZVBhdHRlcm4gZnJvbSAnYXNzZXRzL3NoYXBlLXBhdHRlcm4xLnBuZyc7XG5cbi8vIGltcG9ydCBTbWFydCBmcm9tICdhc3NldHMvc2hpZWxkLnBuZyc7XG4vLyBpbXBvcnQgU2VjdXJlIGZyb20gJ2Fzc2V0cy9pY29ucy0xNC0xNC5wbmcnO1xuXG4vLyBjb25zdCBkYXRhID0ge1xuLy8gICBzdWJUaXRsZTogJ0Fib3V0IFVzJyxcbi8vICAgdGl0bGU6ICdLbm93IE1vcmUgQWJvdXQgVGhlIERldmljZScsXG4vLyAgIGZlYXR1cmVzOiBbXG4vLyAgICAge1xuLy8gICAgICAgaWQ6IDEsXG4vLyAgICAgICBpbWdTcmM6IFNtYXJ0LFxuLy8gICAgICAgYWx0VGV4dDogJ0Fib3V0IFRoZSBGaWx0ZXInLFxuLy8gICAgICAgdGl0bGU6ICdBYm91dCBUaGUgRmlsdGVyJyxcbi8vICAgICAgIHRleHQ6XG4vLyAgICAgICAgICdUaGUgUG9seXByb3B5bGVuZSBmaWJyZSAzLWxheWVyZWQgZmlsdGVyIGZpbHRlcnMgb3V0IHBhcnRpY2xlcyB1cC10byAwLjMgbWljcm9ucyBnaXZpbmcgdGhlIENvdi1UZWNoIFZlbnRpbGF0aW9uIFN5c3RlbSBhbiBvdmVyYWxsIGVmZmljaWVuY3kgb2YgbW9yZSB0aGFuIDk1JS4nLFxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgaWQ6IDIsXG4vLyAgICAgICBpbWdTcmM6IFNlY3VyZSxcbi8vICAgICAgIGFsdFRleHQ6ICdIb3cgRG9lcyBJdCBXb3JrPycsXG4vLyAgICAgICB0aXRsZTogJ0hvdyBEb2VzIEl0IFdvcms/Jyxcbi8vICAgICAgIHRleHQ6XG4vLyAgICAgICAgICdVbmRlcnN0YW5kIGhvdyB0aGUgQ292LVRlY2ggVmVudGlsYXRpb24gU3lzdGVtIHdvcmtzIGluIHVuZGVyIDEwMCBzZWNvbmRzIHRocm91Z2ggdGhpcyB2aWRlby4nLFxuLy8gICAgIH0sXG4vLyAgIF0sXG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2aWNlU2VjdGlvbigpIHtcbi8vICAgICAvLyBtb2RhbCBwb3B1cCB2aWRlbyBoYW5kbGVyXG4vLyAgICAgY29uc3QgW3ZpZGVvT3Blbiwgc2V0VmlkZW9PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbi8vICAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4vLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICBzZXRWaWRlb09wZW4odHJ1ZSk7XG4vLyAgICAgfTtcbi8vICAgICByZXR1cm4gKFxuLy8gICA8c2VjdGlvbiBpZD1cImFib3V0XCIgc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24uc2VydmljZXMnIH19PlxuLy8gICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyQm94fT5cbi8vICAgICA8Qm94IHN4PXtzdHlsZXMudGh1bWJuYWlsfT5cbi8vICAgICAgIDxJbWFnZSBzcmM9e1NlcnZpY2VUaHVtYn0gYWx0PVwiVGh1bWJuYWlsXCIgLz5cbi8vICAgICAgIDxCdXR0b25cbi8vICAgICAgICAgc3g9e3N0eWxlcy52aWRlb0J0bn1cbi8vICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4vLyAgICAgICAgIGFyaWEtbGFiZWw9XCJQbGF5IEJ1dHRvblwiXG4vLyAgICAgICA+XG4vLyAgICAgICAgIDxzcGFuPlxuLy8gICAgICAgICAgIDxJb0lvc1BsYXkgLz5cbi8vICAgICAgICAgPC9zcGFuPlxuLy8gICAgICAgPC9CdXR0b24+XG5cbi8vICAgICAgIHsvKiA8Qm94IHN4PXtzdHlsZXMuc2hhcGVCb3h9PlxuLy8gICAgICAgICA8SW1hZ2Ugc3JjPXtzaGFwZVBhdHRlcm59IGFsdD1cIlNoYXBlXCIgLz5cbi8vICAgICAgIDwvQm94PiAqL31cbi8vICAgICA8L0JveD5cbi8vICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudEJveH0+XG4vLyAgICAgICA8VGV4dEZlYXR1cmUgc3ViVGl0bGU9e2RhdGEuc3ViVGl0bGV9IHRpdGxlPXtkYXRhLnRpdGxlfSAvPlxuXG4vLyAgICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxuLy8gICAgICAgICB7ZGF0YS5mZWF0dXJlcy5tYXAoKGl0ZW0pID0+IChcbi8vICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0ga2V5PXtpdGVtLmlkfT5cbi8vICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uaW1nU3JjfSBhbHQ9e2l0ZW0uYWx0VGV4dH0gc3g9e3N0eWxlcy5pY29ufSAvPlxuXG4vLyAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XG4vLyAgICAgICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+e2l0ZW0udGl0bGV9PC9IZWFkaW5nPlxuLy8gICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuZGVzY3JpcHRpb259PntpdGVtLnRleHR9PC9UZXh0PlxuLy8gICAgICAgICAgICAgPC9Cb3g+XG4vLyAgICAgICAgICAgPC9Cb3g+XG4vLyAgICAgICAgICkpfVxuLy8gICAgICAgPC9HcmlkPlxuLy8gICAgIDwvQm94PlxuLy8gICA8L0NvbnRhaW5lcj5cbi8vICAgPE1vZGFsVmlkZW9cbi8vICAgICBjaGFubmVsPVwieW91dHViZVwiXG4vLyAgICAgaXNPcGVuPXt2aWRlb09wZW59XG4vLyAgICAgdmlkZW9JZD1cIjBqR0NNSmhZazI4XCJcbi8vICAgICBvbkNsb3NlPXsoKSA9PiBzZXRWaWRlb09wZW4oZmFsc2UpfVxuLy8gICAvPlxuLy8gPC9zZWN0aW9uPlxuLy8gKTtcbi8vIH1cblxuLy8gY29uc3QgcGxheVBsdXNlID0ga2V5ZnJhbWVzYFxuLy8gICBmcm9tIHtcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVaKDApIHNjYWxlKDEpO1xuLy8gICAgIG9wYWNpdHk6IDE7XG4vLyAgIH1cblxuLy8gICB0byB7XG4vLyBcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVooMCkgc2NhbGUoMS41KTtcbi8vICAgICBvcGFjaXR5OiAwO1xuLy8gICB9XG4vLyBgO1xuXG4vLyBjb25zdCBzdHlsZXMgPSB7XG4vLyAgIGNvcmVGZWF0dXJlOiB7XG4vLyAgICAgcHk6IFswLCBudWxsLCBudWxsLCAyLCBudWxsLCA3XSxcbi8vICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbi8vICAgfSxcbi8vICAgY29udGFpbmVyQm94OiB7XG4vLyAgICAgZGlzcGxheTogJ2ZsZXgnLFxuLy8gICAgIGFsaWduSXRlbXM6IFsnZmxleC1zdGFydCcsIG51bGwsIG51bGwsICdjZW50ZXInXSxcbi8vICAgICBqdXN0aWZ5Q29udGVudDogWydmbGV4LXN0YXJ0JywgbnVsbCwgbnVsbCwgJ3NwYWNlLWJldHdlZW4nXSxcbi8vICAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsIG51bGwsIG51bGwsICdyb3cnXSxcbi8vICAgICBwYjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDNdLFxuLy8gICAgIG10OiA3LFxuLy8gICB9LFxuLy8gICB0aHVtYm5haWw6IHtcbi8vICAgICBtcjogWydhdXRvJywgbnVsbCwgbnVsbCwgNiwgNjAsIDg1XSxcbi8vICAgICBvcmRlcjogWzIsIG51bGwsIG51bGwsIDBdLFxuLy8gICAgIG1sOiBbJ2F1dG8nLCBudWxsLCBudWxsLCAwXSxcbi8vICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuLy8gICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuLy8gICAgICc+IGltZyc6IHtcbi8vICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuLy8gICAgICAgekluZGV4OiAxLFxuLy8gICAgICAgaGVpZ2h0OiBbMzEwLCAnYXV0byddLFxuLy8gICAgIH0sXG4vLyAgIH0sXG4vLyAgIHNoYXBlQm94OiB7XG4vLyAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4vLyAgICAgYm90dG9tOiAtNjgsXG4vLyAgICAgbGVmdDogLTE2MCxcbi8vICAgICB6SW5kZXg6IC0xLFxuLy8gICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcbi8vICAgfSxcbi8vICAgdmlkZW9CdG46IHtcbi8vICAgICB6SW5kZXg6IDIsXG4vLyAgICAgYm9yZGVyOiAnbm9uZScsXG4vLyAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4vLyAgICAgbGVmdDogJzUwJScsXG4vLyAgICAgdG9wOiAnNTAlJyxcbi8vICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuLy8gICAgIHdpZHRoOiBbJzYwcHgnLCBudWxsLCAnODBweCcsIG51bGwsICcxMDBweCddLFxuLy8gICAgIGhlaWdodDogWyc2MHB4JywgbnVsbCwgJzgwcHgnLCBudWxsLCAnMTAwcHgnXSxcbi8vICAgICBwOiAnMHB4ICFpbXBvcnRhbnQnLFxuLy8gICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50Jyxcbi8vICAgICAnJjo6YmVmb3JlJzoge1xuLy8gICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4vLyAgICAgICBib3JkZXI6ICdub25lJyxcbi8vICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbi8vICAgICAgIGxlZnQ6ICc1MCUnLFxuLy8gICAgICAgdG9wOiAnNTAlJyxcbi8vICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKScsXG4vLyAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuLy8gICAgICAgd2lkdGg6IFsnNjBweCcsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXG4vLyAgICAgICBoZWlnaHQ6IFsnNjBweCcsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXG4vLyAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5Jyxcbi8vICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4vLyAgICAgICBhbmltYXRpb246IGAke3BsYXlQbHVzZX0gMS41cyBlYXNlLW91dCBpbmZpbml0ZWAsXG4vLyAgICAgICBvcGFjaXR5OiAwLjUsXG4vLyAgICAgfSxcbi8vICAgICAnJjpob3Zlcic6IHtcbi8vICAgICAgIC8vIGJveFNoYWRvdzogJ3JnYmEoMjMzLCA3NiwgODQsIDAuNTcpIDBweCA5cHggMjBweCAtNXB4Jyxcbi8vICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbi8vICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4vLyAgICAgICBib3JkZXI6ICdub25lJyxcbi8vICAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxuLy8gICAgIH0sXG4vLyAgICAgJz4gc3Bhbic6IHtcbi8vICAgICAgIGJvcmRlcjogJ25vbmUnLFxuLy8gICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyxcbi8vICAgICAgIHdpZHRoOiAnaW5oZXJpdCcsXG4vLyAgICAgICBoZWlnaHQ6ICdpbmhlcml0Jyxcbi8vICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4vLyAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuLy8gICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4vLyAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuNXMnLFxuLy8gICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuLy8gICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuLy8gICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4vLyAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbi8vICAgICAgIHpJbmRleDogMixcbi8vICAgICB9LFxuLy8gICAgIHN2Zzoge1xuLy8gICAgICAgZm9udFNpemU6IFs0MCwgbnVsbCwgNDgsIG51bGwsIDYyXSxcbi8vICAgICB9LFxuLy8gICB9LFxuLy8gICBjb250ZW50Qm94OiB7XG4vLyAgICAgd2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsIDMxNSwgMzkwLCA0NTAsIG51bGwsIDUwMF0sXG4vLyAgICAgZmxleFNocmluazogMCxcbi8vICAgICBtYjogWzcsIG51bGwsIDYwLCAwXSxcbi8vICAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcbi8vICAgfSxcbi8vICAgZ3JpZDoge1xuLy8gICAgIHByOiBbMiwgMCwgbnVsbCwgbnVsbCwgNiwgJzcwcHgnXSxcbi8vICAgICBwbDogWzIsIDBdLFxuLy8gICAgIHB0OiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgM10sXG4vLyAgICAgbXg6ICdhdXRvJyxcbi8vICAgICB3aWR0aDogWycxMDAlJywgMzcwLCA0MjAsICcxMDAlJ10sXG4vLyAgICAgZ3JpZEdhcDogWyczNXB4IDAnLCBudWxsLCBudWxsLCBudWxsLCAnNTBweCAwJ10sXG4vLyAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogWydyZXBlYXQoMSwxZnIpJ10sXG4vLyAgIH0sXG4vLyAgIGNhcmQ6IHtcbi8vICAgICBkaXNwbGF5OiAnZmxleCcsXG4vLyAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuLy8gICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXG4vLyAgIH0sXG5cbi8vICAgaWNvbjoge1xuLy8gICAgIHdpZHRoOiBbJzQ1cHgnLCBudWxsLCBudWxsLCBudWxsLCAnNTVweCddLFxuLy8gICAgIGhlaWdodDogJ2F1dG8nLFxuLy8gICAgIGZsZXhTaHJpbms6IDAsXG4vLyAgICAgbXI6IFszLCBudWxsLCBudWxsLCBudWxsLCA0XSxcbi8vICAgfSxcbi8vICAgd3JhcHBlcjoge1xuLy8gICAgIHdpZHRoOiAnMTAwJScsXG4vLyAgICAgZGlzcGxheTogJ2ZsZXgnLFxuLy8gICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuLy8gICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuLy8gICAgIG10OiAnLTVweCcsXG4vLyAgICAgZGVzY3JpcHRpb246IHtcbi8vICAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgJzE0cHgnLCAxXSxcbi8vICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbi8vICAgICAgIGxpbmVIZWlnaHQ6IDEuOSxcbi8vICAgICB9LFxuLy8gICAgIHRpdGxlOiB7XG4vLyAgICAgICBmb250U2l6ZTogMyxcbi8vICAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxuLy8gICAgICAgbGluZUhlaWdodDogMS40LFxuLy8gICAgICAgZm9udFdlaWdodDogNzAwLFxuLy8gICAgICAgbWI6IFsyLCBudWxsLCAzLCAyLCAzXSxcbi8vICAgICB9LFxuXG4vLyAgICAgc3ViVGl0bGU6IHtcbi8vICAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgJzE0cHgnLCAxXSxcbi8vICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbi8vICAgICAgIGxpbmVIZWlnaHQ6IDEuOSxcbi8vICAgICAgIGNvbG9yOiAnYmx1ZScsXG4vLyAgICAgfSxcbi8vICAgfSxcbi8vICAgdmlkZW9XcmFwcGVyOiB7XG4vLyAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbi8vICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbi8vICAgICB3aWR0aDogJzkwMHB4Jyxcbi8vICAgICAnJjpiZWZvcmUnOiB7XG4vLyAgICAgICBjb250ZW50OiAnXCJcIicsXG4vLyAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuLy8gICAgICAgcGFkZGluZ1RvcDogJzU2LjI1JScsXG4vLyAgICAgfSxcbi8vICAgICBpZnJhbWU6IHtcbi8vICAgICAgIHdpZHRoOiAnMTAwJScsXG4vLyAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbi8vICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuLy8gICAgICAgdG9wOiAwLFxuLy8gICAgICAgbGVmdDogMCxcbi8vICAgICB9LFxuLy8gICB9LFxuLy8gfTtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9