webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/banner.js":
/*!********************************!*\
  !*** ./src/sections/banner.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Banner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal-video */ "./node_modules/react-modal-video/lib/index.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var assets_transparent_small_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/transparent-small.png */ "./src/assets/transparent-small.png");
/* harmony import */ var assets_transparent_small_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_transparent_small_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_medium_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/medium.png */ "./src/assets/medium.png");
/* harmony import */ var assets_medium_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_medium_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_transparent_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/transparent.png */ "./src/assets/transparent.png");
/* harmony import */ var assets_transparent_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_transparent_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Sayli\\Downloads\\nextjs_landing_page\\nextjs_landing_page\\src\\sections\\banner.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // import client2 from 'assets/client-2.svg';
// import client3 from 'assets/client-3.svg';


var BANNER_DATA = {
  title: "One Of The World's Most Economical Ventilation Systems",
  text: 'The Cov-Tech Ventilation System is smartly designed to provide the most user friendly experience. Equipped with a Polypropylene 3-layered filter, it has more than 95% filter efficiency.',
  //   clients: [
  //     {
  //       image: client1,
  //       link: '#',
  //     },
  //     {
  //       image: client2,
  //       link: '#',
  //     },
  //     {
  //       image: client3,
  //       link: '#',
  //     },
  //   ],
  image: assets_transparent_png__WEBPACK_IMPORTED_MODULE_6___default.a
};
function Banner() {
  _s();

  var title = BANNER_DATA.title,
      text = BANNER_DATA.text,
      image = BANNER_DATA.image;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      videoOpen = _useState[0],
      setVideoOpen = _useState[1];

  var handleClick = function handleClick(e) {
    e.preventDefault();
    setVideoOpen(true);
  };

  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    as: "section",
    id: "banner",
    sx: styles.section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    sx: styles.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    sx: styles.flex,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    sx: styles.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    as: "h2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, title), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    as: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, text), __jsx("a", {
    href: "#shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }, "Get It Now")), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_modal_video__WEBPACK_IMPORTED_MODULE_1___default.a, {
    channel: "youtube",
    isOpen: videoOpen,
    videoId: "M0i996SzcDQ",
    onClose: function onClose() {
      return setVideoOpen(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "secondary",
    "aria-label": "Watch Video",
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaPlayCircle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }), " Watch Video"))), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    sx: styles.images,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, __jsx("picture", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, __jsx("source", {
    media: "(max-width: 700px)",
    srcset: assets_transparent_small_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }), __jsx("source", {
    media: "(max-width: 1400px)",
    srcset: assets_medium_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }), __jsx("source", {
    media: "(min-width: 1401px)",
    srcset: image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }))))));
}

_s(Banner, "fjrTXSMqqo5cVpzR03nEXJYpFAo=");

_c = Banner;
;
var styles = {
  section: {
    overflow: 'hidden',
    backgroundColor: '#F9FBFD',
    pt: ['160px', null, null, null, '200px'],
    pb: ['70px', null, null, null, '100px']
  },
  container: {
    maxWidth: ['100%', null, null, null, null, '1170px', '1280px'],
    position: 'relative'
  },
  flex: {
    flexWrap: 'wrap',
    gap: 0
  },
  content: {
    textAlign: ['center', 'left', null, 'center', 'left'],
    flex: ['0 0 100%', null, null, null, '0 0 50%', '0 0 40%'],
    h2: {
      fontFamily: 'DM Sans',
      color: '#02073E',
      letterSpacing: '-1px',
      fontSize: ['28px', null, '32px', null, null, '45px', '55px'],
      lineHeight: 1.45,
      maxWidth: '546px',
      mb: '10px',
      mt: '-25px',
      mx: ['0', null, null, 'auto']
    },
    p: {
      fontSize: ['15px', null, '16px'],
      lineHeight: [2, null, 2.62],
      color: '#02073E',
      maxWidth: '486px',
      mb: '20px'
    },
    form: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: [null, null, null, 'center', 'flex-start'],
      mt: '25px',
      mb: ['20px', '40px'],
      input: {
        width: ['100%', '215px', '346px', null, '300px', null, '340px'],
        border: '1px solid #E9EDF5',
        borderRadius: '8px',
        mr: ['0', '15px'],
        mb: ['10px', '0'],
        height: ['50px', null, null, null, null, '55px', '60px'],
        fontSize: '16px',
        color: 'rgba(2,7,62,.4)',
        backgroundColor: '#ffffff',
        px: '25px',
        boxShadow: 'none !important',
        outline: 'none !important',
        '&::placeholder': {
          color: 'rgba(2,7,62,.4)'
        },
        '&:focus': {
          border: 'primary'
        }
      },
      button: {
        fontSize: '16px',
        color: '#ffff',
        fontWeight: 700,
        borderRadius: '8px',
        height: ['50px', null, null, null, null, '55px', '60px'],
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 32px',
        WebkitAppearance: 'none',
        appearance: 'none',
        outline: 'none',
        cursor: 'pointer',
        mx: ['auto', 0],
        transition: 'all 500ms ease',
        '&:hover': {
          backgroundColor: 'secondary'
        }
      }
    }
  },
  images: {
    flex: ['0 0 100%', null, null, null, '0 0 50%', '0 0 60%'],
    position: 'relative',
    left: ['auto', '50px', '50px', null, '50px', '100px'],
    mt: ['30px', null, '40px', null, '40px']
  },
  clients: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'no-wrap',
    justifyContent: ['center', null, null, 'center', 'flex-start'],
    span: {
      color: '#566272',
      opacity: 0.6,
      flex: ['0 0 100%', '1 1 100%', '0 0 auto'],
      mb: ['10px', null, '0'],
      textAlign: ['center', null, 'left']
    },
    a: {
      display: 'flex',
      alignItems: 'center',
      ml: ['10px', '15px', null, '15px', '0px', null, '15px'],
      img: {
        display: 'block'
      }
    }
  }
}; // import { jsx } from 'theme-ui';
// import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
// import BannerImg from 'assets/banner-thumb.png';
// import ShapeLeft from 'assets/shape-left.png';
// import ShapeRight from 'assets/shape-right.png';
// export default function Banner() {
//   return (
//     <section sx={styles.banner} id="home">
//       <Container sx={styles.banner.container}>
//         <Box sx={styles.banner.contentBox}>
//           <Heading as="h1" variant="heroPrimary">
//             One Of The World's Most Economical PPE Ventilation Systems
//           </Heading>
//           {/* <Text as="p" variant="heroSecondary">
//             Get your blood tests delivered at let home collect sample from the
//             victory of the managements that supplies best design system
//             guidelines ever.
//           </Text> */}
//           <Button variant="primary">Get It Now</Button>
//         </Box>
//         <Box sx={styles.banner.imageBox}>
//           <Image src={BannerImg} alt="banner" />
//         </Box>
//       </Container>
//     </section>
//   );
// }
// const styles = {
//   banner: {
//     pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
//     pb: [2, null, 0, null, 2, 0, null, 5],
//     position: 'relative',
//     zIndex: 2,
//     '&::before': {
//       position: 'absolute',
//       content: '""',
//       bottom: 6,
//       left: 0,
//       height: '100%',
//       width: '100%',
//       zIndex: -1,
//       backgroundImage: `url(${ShapeLeft})`,
//       backgroundRepeat: `no-repeat`,
//       backgroundPosition: 'bottom left',
//       backgroundSize: '36%',
//     },
//     '&::after': {
//       position: 'absolute',
//       content: '""',
//       bottom: '40px',
//       right: 0,
//       height: '100%',
//       width: '100%',
//       zIndex: -1,
//       backgroundImage: `url(${ShapeRight})`,
//       backgroundRepeat: `no-repeat`,
//       backgroundPosition: 'bottom right',
//       backgroundSize: '32%',
//     },
//     container: {
//       minHeight: 'inherit',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//     },
//     contentBox: {
//       width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
//       mx: 'auto',
//       textAlign: 'center',
//       mb: ['40px', null, null, null, null, 7],
//     },
//     imageBox: {
//       justifyContent: 'center',
//       textAlign: 'center',
//       display: 'inline-flex',
//       mb: [0, null, -6, null, null, '-40px', null, -3],
//       img: {
//         position: 'relative',
//         height: [245, 'auto'],
//       },
//     },
//   },
// };

var _c;

$RefreshReg$(_c, "Banner");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcyJdLCJuYW1lcyI6WyJCQU5ORVJfREFUQSIsInRpdGxlIiwidGV4dCIsImltYWdlIiwic2VjdGlvbkltYWdlIiwiQmFubmVyIiwidXNlU3RhdGUiLCJ2aWRlb09wZW4iLCJzZXRWaWRlb09wZW4iLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlcyIsInNlY3Rpb24iLCJjb250YWluZXIiLCJmbGV4IiwiY29udGVudCIsImltYWdlcyIsInNtYWxsIiwibWVkaXVtIiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwdCIsInBiIiwibWF4V2lkdGgiLCJwb3NpdGlvbiIsImZsZXhXcmFwIiwiZ2FwIiwidGV4dEFsaWduIiwiaDIiLCJmb250RmFtaWx5IiwiY29sb3IiLCJsZXR0ZXJTcGFjaW5nIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwibWIiLCJtdCIsIm14IiwicCIsImZvcm0iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJpbnB1dCIsIndpZHRoIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwibXIiLCJoZWlnaHQiLCJweCIsImJveFNoYWRvdyIsIm91dGxpbmUiLCJidXR0b24iLCJmb250V2VpZ2h0IiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJXZWJraXRBcHBlYXJhbmNlIiwiYXBwZWFyYW5jZSIsImN1cnNvciIsInRyYW5zaXRpb24iLCJsZWZ0IiwiY2xpZW50cyIsInNwYW4iLCJvcGFjaXR5IiwiYSIsIm1sIiwiaW1nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFZQTtDQUVBO0FBQ0E7O0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUc7QUFDbEJDLE9BQUssRUFBRSx3REFEVztBQUVsQkMsTUFBSSxFQUNGLDJMQUhnQjtBQUlwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZlMTk2YWY2ZDIyYmJlZDhmMmNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWxWaWRlbyBmcm9tICdyZWFjdC1tb2RhbC12aWRlbyc7XG5pbXBvcnQgeyBGYVBsYXlDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQge1xuICBCb3gsXG4gIENvbnRhaW5lcixcbiAgRmxleCxcbiAgSGVhZGluZyxcbiAgVGV4dCxcbiAgTGFiZWwsXG4gIElucHV0LFxuICBCdXR0b24sXG4gIExpbmssXG59IGZyb20gJ3RoZW1lLXVpJztcblxuaW1wb3J0IHNtYWxsIGZyb20gJ2Fzc2V0cy90cmFuc3BhcmVudC1zbWFsbC5wbmcnO1xuaW1wb3J0IG1lZGl1bSBmcm9tICdhc3NldHMvbWVkaXVtLnBuZyc7XG4vLyBpbXBvcnQgY2xpZW50MiBmcm9tICdhc3NldHMvY2xpZW50LTIuc3ZnJztcbi8vIGltcG9ydCBjbGllbnQzIGZyb20gJ2Fzc2V0cy9jbGllbnQtMy5zdmcnO1xuaW1wb3J0IHNlY3Rpb25JbWFnZSBmcm9tICdhc3NldHMvdHJhbnNwYXJlbnQucG5nJztcblxuY29uc3QgQkFOTkVSX0RBVEEgPSB7XG4gIHRpdGxlOiBcIk9uZSBPZiBUaGUgV29ybGQncyBNb3N0IEVjb25vbWljYWwgVmVudGlsYXRpb24gU3lzdGVtc1wiLFxuICB0ZXh0OlxuICAgICdUaGUgQ292LVRlY2ggVmVudGlsYXRpb24gU3lzdGVtIGlzIHNtYXJ0bHkgZGVzaWduZWQgdG8gcHJvdmlkZSB0aGUgbW9zdCB1c2VyIGZyaWVuZGx5IGV4cGVyaWVuY2UuIEVxdWlwcGVkIHdpdGggYSBQb2x5cHJvcHlsZW5lIDMtbGF5ZXJlZCBmaWx0ZXIsIGl0IGhhcyBtb3JlIHRoYW4gOTUlIGZpbHRlciBlZmZpY2llbmN5LicsXG4vLyAgIGNsaWVudHM6IFtcbi8vICAgICB7XG4vLyAgICAgICBpbWFnZTogY2xpZW50MSxcbi8vICAgICAgIGxpbms6ICcjJyxcbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgIGltYWdlOiBjbGllbnQyLFxuLy8gICAgICAgbGluazogJyMnLFxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgaW1hZ2U6IGNsaWVudDMsXG4vLyAgICAgICBsaW5rOiAnIycsXG4vLyAgICAgfSxcbi8vICAgXSxcbiAgaW1hZ2U6IHNlY3Rpb25JbWFnZSxcbn07XG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhbm5lcigpIHtcbiAgY29uc3QgeyB0aXRsZSwgdGV4dCwgaW1hZ2UgfSA9IEJBTk5FUl9EQVRBO1xuICBjb25zdCBbdmlkZW9PcGVuLCBzZXRWaWRlb09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFZpZGVvT3Blbih0cnVlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwiYmFubmVyXCIgc3g9e3N0eWxlcy5zZWN0aW9ufT5cbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8RmxleCBzeD17c3R5bGVzLmZsZXh9PlxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIj57dGl0bGV9PC9IZWFkaW5nPlxuICAgICAgICAgICAgPFRleHQgYXM9XCJwXCI+e3RleHR9PC9UZXh0PlxuICAgICAgICAgICAgey8qIDxCb3ggYXM9XCJmb3JtXCI+XG4gICAgICAgICAgICAgIDxMYWJlbCB2YXJpYW50PVwic3R5bGVzLnNyT25seVwiIGh0bWxGb3I9XCJkb21haW5OYW1lXCI+XG4gICAgICAgICAgICAgICAgRG9tYWluIE5hbWVcbiAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIGRvbWFpbiBuYW1lXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZG9tYWluTmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJkb21haW5OYW1lXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICBcbiAgICAgICAgICAgIDwvQm94PiAqL31cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjc2hvcFwiPjxCdXR0b24gdmFyaWFudCA9IFwicHJpbWFyeVwiPkdldCBJdCBOb3c8L0J1dHRvbj48L2E+XG4gICAgICAgICAgICB7LyogPEJ1dHRvbiBjbGFzc05hbWUgPSBcImRvbmF0ZV9fYnRuXCIgdmFyaWFudCA9IFwic2Vjb25kYXJ5XCIgYXJpYS1sYWJlbCA9IFwiR2V0IFN0YXJ0ZWRcIj5XYXRjaCBWaWRlbzwvQnV0dG9uPiAqL31cbiAgICAgICAgICAgIHsvKiA8Qm94IHN4PXtzdHlsZXMuY2xpZW50c30+XG4gICAgICAgICAgICAgIDxUZXh0IGFzPVwic3BhblwiPk91ciBjbGllbnRzPC9UZXh0PlxuICAgICAgICAgICAgICB7Y2xpZW50cy5tYXAoKHsgbGluaywgaW1hZ2UgfSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsaW5rfSBrZXk9e2BjbGllbnQtaW1hZ2Uta2V5LSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTIzXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjhcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJjbGllbnQgaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Cb3g+ICovfVxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPE1vZGFsVmlkZW9cbiAgICAgICAgICAgICAgICBjaGFubmVsPVwieW91dHViZVwiXG4gICAgICAgICAgICAgICAgaXNPcGVuPXt2aWRlb09wZW59XG4gICAgICAgICAgICAgICAgdmlkZW9JZD1cIk0waTk5NlN6Y0RRXCJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRWaWRlb09wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIldhdGNoIFZpZGVvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RmFQbGF5Q2lyY2xlIC8+IFdhdGNoIFZpZGVvXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmltYWdlc30+XG4gICAgICAgICAgPHBpY3R1cmU+XG4gICAgICAgICAgPHNvdXJjZSBtZWRpYT1cIihtYXgtd2lkdGg6IDcwMHB4KVwiIHNyY3NldD17c21hbGx9IC8+XG4gICAgICAgICAgPHNvdXJjZSBtZWRpYT1cIihtYXgtd2lkdGg6IDE0MDBweClcIiBzcmNzZXQ9e21lZGl1bX0gLz5cbiAgICAgICAgICA8c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTQwMXB4KVwiIHNyY3NldD17aW1hZ2V9IC8+XG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSAvPlxuICAgICAgICA8L3BpY3R1cmU+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBzZWN0aW9uOiB7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGOUZCRkQnLFxuICAgIHB0OiBbJzE2MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzIwMHB4J10sXG4gICAgcGI6IFsnNzBweCcsIG51bGwsIG51bGwsIG51bGwsICcxMDBweCddLFxuICB9LFxuICBjb250YWluZXI6IHtcbiAgICBtYXhXaWR0aDogWycxMDAlJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzExNzBweCcsICcxMjgwcHgnXSxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgfSxcbiAgZmxleDoge1xuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgZ2FwOiAwLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsICdsZWZ0JywgbnVsbCwgJ2NlbnRlcicsICdsZWZ0J10sXG4gICAgZmxleDogWycwIDAgMTAwJScsIG51bGwsIG51bGwsIG51bGwsICcwIDAgNTAlJywgJzAgMCA0MCUnXSxcbiAgICBoMjoge1xuICAgICAgZm9udEZhbWlseTogJ0RNIFNhbnMnLFxuICAgICAgY29sb3I6ICcjMDIwNzNFJyxcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMXB4JyxcbiAgICAgIGZvbnRTaXplOiBbJzI4cHgnLCBudWxsLCAnMzJweCcsIG51bGwsIG51bGwsICc0NXB4JywgJzU1cHgnXSxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNDUsXG4gICAgICBtYXhXaWR0aDogJzU0NnB4JyxcbiAgICAgIG1iOiAnMTBweCcsXG4gICAgICBtdDogJy0yNXB4JyxcbiAgICAgIG14OiBbJzAnLCBudWxsLCBudWxsLCAnYXV0byddLFxuICAgIH0sXG4gICAgcDoge1xuICAgICAgZm9udFNpemU6IFsnMTVweCcsIG51bGwsICcxNnB4J10sXG4gICAgICBsaW5lSGVpZ2h0OiBbMiwgbnVsbCwgMi42Ml0sXG4gICAgICBjb2xvcjogJyMwMjA3M0UnLFxuICAgICAgbWF4V2lkdGg6ICc0ODZweCcsXG4gICAgICBtYjogJzIwcHgnLFxuICAgIH0sXG4gICAgZm9ybToge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiBbbnVsbCwgbnVsbCwgbnVsbCwgJ2NlbnRlcicsICdmbGV4LXN0YXJ0J10sXG4gICAgICBtdDogJzI1cHgnLFxuICAgICAgbWI6IFsnMjBweCcsICc0MHB4J10sXG4gICAgICBpbnB1dDoge1xuICAgICAgICB3aWR0aDogWycxMDAlJywgJzIxNXB4JywgJzM0NnB4JywgbnVsbCwgJzMwMHB4JywgbnVsbCwgJzM0MHB4J10sXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjRTlFREY1JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnOHB4JyxcbiAgICAgICAgbXI6IFsnMCcsICcxNXB4J10sXG4gICAgICAgIG1iOiBbJzEwcHgnLCAnMCddLFxuICAgICAgICBoZWlnaHQ6IFsnNTBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICc1NXB4JywgJzYwcHgnXSxcbiAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgICAgY29sb3I6ICdyZ2JhKDIsNyw2MiwuNCknLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgcHg6ICcyNXB4JyxcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZSAhaW1wb3J0YW50JyxcbiAgICAgICAgb3V0bGluZTogJ25vbmUgIWltcG9ydGFudCcsXG4gICAgICAgICcmOjpwbGFjZWhvbGRlcic6IHtcbiAgICAgICAgICBjb2xvcjogJ3JnYmEoMiw3LDYyLC40KScsXG4gICAgICAgIH0sXG4gICAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICAgIGJvcmRlcjogJ3ByaW1hcnknLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICBjb2xvcjogJyNmZmZmJyxcbiAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc4cHgnLFxuICAgICAgICBoZWlnaHQ6IFsnNTBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICc1NXB4JywgJzYwcHgnXSxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgcGFkZGluZzogJzAgMzJweCcsXG4gICAgICAgIFdlYmtpdEFwcGVhcmFuY2U6ICdub25lJyxcbiAgICAgICAgYXBwZWFyYW5jZTogJ25vbmUnLFxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICBteDogWydhdXRvJywgMF0sXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgNTAwbXMgZWFzZScsXG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3NlY29uZGFyeScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGltYWdlczoge1xuICAgIGZsZXg6IFsnMCAwIDEwMCUnLCBudWxsLCBudWxsLCBudWxsLCAnMCAwIDUwJScsICcwIDAgNjAlJ10sXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgbGVmdDogWydhdXRvJywgJzUwcHgnLCAnNTBweCcsIG51bGwsICc1MHB4JywgJzEwMHB4J10sXG4gICAgbXQ6IFsnMzBweCcsIG51bGwsICc0MHB4JywgbnVsbCwgJzQwcHgnXSxcbiAgfSxcbiAgY2xpZW50czoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmbGV4V3JhcDogJ25vLXdyYXAnLFxuICAgIGp1c3RpZnlDb250ZW50OiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdjZW50ZXInLCAnZmxleC1zdGFydCddLFxuICAgIHNwYW46IHtcbiAgICAgIGNvbG9yOiAnIzU2NjI3MicsXG4gICAgICBvcGFjaXR5OiAwLjYsXG4gICAgICBmbGV4OiBbJzAgMCAxMDAlJywgJzEgMSAxMDAlJywgJzAgMCBhdXRvJ10sXG4gICAgICBtYjogWycxMHB4JywgbnVsbCwgJzAnXSxcbiAgICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCAnbGVmdCddLFxuICAgIH0sXG4gICAgYToge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBtbDogWycxMHB4JywgJzE1cHgnLCBudWxsLCAnMTVweCcsICcwcHgnLCBudWxsLCAnMTVweCddLFxuICAgICAgaW1nOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuXG5cblxuXG4vLyBpbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG4vLyBpbXBvcnQgeyBDb250YWluZXIsIEJveCwgSGVhZGluZywgVGV4dCwgSW1hZ2UsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcbi8vIGltcG9ydCBCYW5uZXJJbWcgZnJvbSAnYXNzZXRzL2Jhbm5lci10aHVtYi5wbmcnO1xuLy8gaW1wb3J0IFNoYXBlTGVmdCBmcm9tICdhc3NldHMvc2hhcGUtbGVmdC5wbmcnO1xuLy8gaW1wb3J0IFNoYXBlUmlnaHQgZnJvbSAnYXNzZXRzL3NoYXBlLXJpZ2h0LnBuZyc7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhbm5lcigpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8c2VjdGlvbiBzeD17c3R5bGVzLmJhbm5lcn0gaWQ9XCJob21lXCI+XG4vLyAgICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuYmFubmVyLmNvbnRhaW5lcn0+XG4vLyAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5iYW5uZXIuY29udGVudEJveH0+XG4vLyAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHZhcmlhbnQ9XCJoZXJvUHJpbWFyeVwiPlxuLy8gICAgICAgICAgICAgT25lIE9mIFRoZSBXb3JsZCdzIE1vc3QgRWNvbm9taWNhbCBQUEUgVmVudGlsYXRpb24gU3lzdGVtc1xuLy8gICAgICAgICAgIDwvSGVhZGluZz5cbi8vICAgICAgICAgICB7LyogPFRleHQgYXM9XCJwXCIgdmFyaWFudD1cImhlcm9TZWNvbmRhcnlcIj5cbi8vICAgICAgICAgICAgIEdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZVxuLy8gICAgICAgICAgICAgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMgdGhhdCBzdXBwbGllcyBiZXN0IGRlc2lnbiBzeXN0ZW1cbi8vICAgICAgICAgICAgIGd1aWRlbGluZXMgZXZlci5cbi8vICAgICAgICAgICA8L1RleHQ+ICovfVxuLy8gICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIj5HZXQgSXQgTm93PC9CdXR0b24+XG4vLyAgICAgICAgIDwvQm94PlxuXG4vLyAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5iYW5uZXIuaW1hZ2VCb3h9PlxuLy8gICAgICAgICAgIDxJbWFnZSBzcmM9e0Jhbm5lckltZ30gYWx0PVwiYmFubmVyXCIgLz5cbi8vICAgICAgICAgPC9Cb3g+XG4vLyAgICAgICA8L0NvbnRhaW5lcj5cbi8vICAgICA8L3NlY3Rpb24+XG4vLyAgICk7XG4vLyB9XG5cbi8vIGNvbnN0IHN0eWxlcyA9IHtcbi8vICAgYmFubmVyOiB7XG4vLyAgICAgcHQ6IFsnMTQwcHgnLCAnMTQ1cHgnLCAnMTU1cHgnLCAnMTcwcHgnLCBudWxsLCBudWxsLCAnMTgwcHgnLCAnMjE1cHgnXSxcbi8vICAgICBwYjogWzIsIG51bGwsIDAsIG51bGwsIDIsIDAsIG51bGwsIDVdLFxuLy8gICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuLy8gICAgIHpJbmRleDogMixcbi8vICAgICAnJjo6YmVmb3JlJzoge1xuLy8gICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4vLyAgICAgICBjb250ZW50OiAnXCJcIicsXG4vLyAgICAgICBib3R0b206IDYsXG4vLyAgICAgICBsZWZ0OiAwLFxuLy8gICAgICAgaGVpZ2h0OiAnMTAwJScsXG4vLyAgICAgICB3aWR0aDogJzEwMCUnLFxuLy8gICAgICAgekluZGV4OiAtMSxcbi8vICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1NoYXBlTGVmdH0pYCxcbi8vICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuLy8gICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnYm90dG9tIGxlZnQnLFxuLy8gICAgICAgYmFja2dyb3VuZFNpemU6ICczNiUnLFxuLy8gICAgIH0sXG4vLyAgICAgJyY6OmFmdGVyJzoge1xuLy8gICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4vLyAgICAgICBjb250ZW50OiAnXCJcIicsXG4vLyAgICAgICBib3R0b206ICc0MHB4Jyxcbi8vICAgICAgIHJpZ2h0OiAwLFxuLy8gICAgICAgaGVpZ2h0OiAnMTAwJScsXG4vLyAgICAgICB3aWR0aDogJzEwMCUnLFxuLy8gICAgICAgekluZGV4OiAtMSxcbi8vICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1NoYXBlUmlnaHR9KWAsXG4vLyAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbi8vICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2JvdHRvbSByaWdodCcsXG4vLyAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJzMyJScsXG4vLyAgICAgfSxcbi8vICAgICBjb250YWluZXI6IHtcbi8vICAgICAgIG1pbkhlaWdodDogJ2luaGVyaXQnLFxuLy8gICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuLy8gICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4vLyAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4vLyAgICAgfSxcbi8vICAgICBjb250ZW50Qm94OiB7XG4vLyAgICAgICB3aWR0aDogWycxMDAlJywgJzkwJScsICc1MzVweCcsIG51bGwsICc1NyUnLCAnNjAlJywgJzY4JScsICc2MCUnXSxcbi8vICAgICAgIG14OiAnYXV0bycsXG4vLyAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuLy8gICAgICAgbWI6IFsnNDBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDddLFxuLy8gICAgIH0sXG4vLyAgICAgaW1hZ2VCb3g6IHtcbi8vICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbi8vICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4vLyAgICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuLy8gICAgICAgbWI6IFswLCBudWxsLCAtNiwgbnVsbCwgbnVsbCwgJy00MHB4JywgbnVsbCwgLTNdLFxuLy8gICAgICAgaW1nOiB7XG4vLyAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuLy8gICAgICAgICBoZWlnaHQ6IFsyNDUsICdhdXRvJ10sXG4vLyAgICAgICB9LFxuLy8gICAgIH0sXG4vLyAgIH0sXG4vLyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==