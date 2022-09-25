webpackHotUpdate_N_E("pages/index",{

/***/ "./src/assets/core-feature.png":
false,

/***/ "./src/assets/shape-pattern2.png":
false,

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
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    sx: styles.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    sx: styles.flex,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    sx: styles.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    as: "h2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, title), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    as: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, text), __jsx("a", {
    href: "#shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
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
      lineNumber: 82,
      columnNumber: 15
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "secondary",
    "aria-label": "Watch Video",
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaPlayCircle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }), " Watch Video"))), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    sx: styles.images,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx("picture", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, __jsx("source", {
    media: "(max-width: 700px)",
    srcset: assets_transparent_small_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }), __jsx("source", {
    media: "(max-width: 1400px)",
    srcset: assets_medium_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }), __jsx("source", {
    media: "(min-width: 1401px)",
    srcset: image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
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

/***/ }),

/***/ "./src/sections/core-feature.js":
/*!**************************************!*\
  !*** ./src/sections/core-feature.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoreFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var assets_supported_01_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/supported-01.png */ "./src/assets/supported-01.png");
/* harmony import */ var assets_supported_01_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_supported_01_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_supported_02_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/supported-02.png */ "./src/assets/supported-02.png");
/* harmony import */ var assets_supported_02_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_supported_02_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_supported_03_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/supported-03.png */ "./src/assets/supported-03.png");
/* harmony import */ var assets_supported_03_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_supported_03_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_supported_04_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/supported-04.png */ "./src/assets/supported-04.png");
/* harmony import */ var assets_supported_04_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_supported_04_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_supported_05_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/supported-05.png */ "./src/assets/supported-05.png");
/* harmony import */ var assets_supported_05_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_supported_05_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_supported_06_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/supported-06.png */ "./src/assets/supported-06.png");
/* harmony import */ var assets_supported_06_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_supported_06_png__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Sayli\\Downloads\\nextjs_landing_page\\nextjs_landing_page\\src\\sections\\core-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */








var data = {
  // subTitle: 'FOR YOUR SAFETY',
  title: 'Supported By',
  // description:
  //   "The 'Cov-Tech Ventilation System' is tested by Intertek according to IEC 60601-1 international medical safety standards.",
  // btnName: 'Get Started',
  // btnURL: '#',
  clients: [{
    image: assets_supported_02_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    link: 'https://www.3ds.com/'
  }, {
    image: assets_supported_05_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    link: 'https://riidl.org/'
  }, {
    image: assets_supported_01_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    link: 'https://www.somaiya.edu/en'
  }, {
    image: assets_supported_06_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    link: 'https://www.msins.in/'
  }, {
    image: assets_supported_03_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    link: 'https://www.birac.nic.in/seedFund.php'
  }, {
    image: assets_supported_04_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    link: 'https://dst.gov.in/'
  }]
}; // const data2 = [
//   {
//     image: DstLogo,
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

function CoreFeature() {
  var _this = this;

  var clients = data.clients;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.coreFeature'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 4
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_2__["default"] // subTitle={data.subTitle}
  , {
    title: data.title // description={data.description}
    ,
    btnName: data.btnName,
    btnURL: data.btnURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.clients,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, clients.map(function (_ref, index) {
    var link = _ref.link,
        image = _ref.image;
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      href: link,
      key: "client-image-key-".concat(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("img", {
      src: image,
      width: "123",
      height: "28",
      alt: "client image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 19
      }
    }));
  }))));
}
_c = CoreFeature;
var styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 4, 0, null, 4],
    mt: 5,
    mb: -7,
    borderRadius: 6
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '100%', null, 340, 600, 430, null, 485],
    pt: 5,
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    mb: -7,
    '.description': {
      pr: [0, null, 6, 7, 6]
    }
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    mb: 4,
    ml: ['auto', null, null, 6, 3],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto']
    }
  },
  // shapeBox: {
  //   position: 'absolute',
  //   bottom: -65,
  //   right: -165,
  //   zIndex: -1,
  //   display: ['none', 'inline-block', 'none', null, 'inline-block'],
  // },
  // grid: {
  //   mb: -1,
  //   pt: 0,
  //   gridGap: [
  //     '35px 0',
  //     null,
  //     '45px 30px',
  //     null,
  //     '50px 25px',
  //     null,
  //     null,
  //     '50px 65px',
  //   ],
  //   gridTemplateColumns: [
  //     'repeat(1,1fr)',
  //     null,
  //     'repeat(2,1fr)',
  //     null,
  //     'repeat(4,1fr)',
  //   ],
  // },
  clients: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: ['center', null, null, 'center', 'flex-start'],
    pt: '20px',
    mt: 3,
    img: {
      mb: 7,
      ml: 3,
      mr: 5,
      height: '50px',
      width: '170px'
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
};

var _c;

$RefreshReg$(_c, "CoreFeature");

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

/***/ }),

/***/ "./src/sections/shoptest.js":
/*!**********************************!*\
  !*** ./src/sections/shoptest.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServiceSection; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var components_contactForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/contactForm */ "./src/components/contactForm.js");
/* harmony import */ var assets_form_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/form.png */ "./src/assets/form.png");
/* harmony import */ var assets_form_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_form_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_buy_online_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/buy-online.png */ "./src/assets/buy-online.png");
/* harmony import */ var assets_buy_online_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_buy_online_png__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\Sayli\\Downloads\\nextjs_landing_page\\nextjs_landing_page\\src\\sections\\shoptest.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */







var data = {
  subTitle: 'SHOP NOW',
  title: 'Get the Cov-Tech Ventilation System',
  features: [{
    id: 1,
    imgSrc: assets_buy_online_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    altText: 'Buy Now',
    title: 'Get It Now',
    text: 'Buy the Cov-Tech Ventilation System for ₹5,599/- only.'
  }, {
    id: 2,
    imgSrc: assets_form_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    altText: 'Buy Now',
    title: 'Place Your Order Or Contact Us',
    text: 'We are currently not accepting payments online. Please fill the contact form to buy the device and call us for discounted prices on bulk order or donations.'
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
    id: "shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 3
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 3
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_contactForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  })))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_4__["default"], {
    subTitle: data.subTitle,
    title: data.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, data.features.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.card,
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: item.imgSrc,
      alt: item.altText,
      sx: styles.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.wrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      sx: styles.wrapper.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 15
      }
    }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      sx: styles.wrapper.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 15
      }
    }, item.text)));
  })))));
}

_s(ServiceSection, "fjrTXSMqqo5cVpzR03nEXJYpFAo=");

_c = ServiceSection;
var styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative'
  },
  containerBox: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, 3],
    mb: 6,
    pt: '30px'
  }, "pb", '30px'),
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
  }
};

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

/***/ }),

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
/* harmony import */ var assets_zoom1_gal_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/zoom1_gal.jpg */ "./src/assets/zoom1_gal.jpg");
/* harmony import */ var assets_zoom1_gal_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_zoom1_gal_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/patternBG.png */ "./src/assets/patternBG.png");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_6__);


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
    // imgSrc: Smart,
    // altText: 'Medically Tested By Intertek',
    title: 'Medically Tested By Intertek',
    text: "The 'Cov-Tech Ventilation System' is tested by Intertek according to IEC 60601-1 international medical safety standards."
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
      lineNumber: 27,
      columnNumber: 3
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 3
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: assets_zoom1_gal_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Thumbnail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: styles.test,
    subTitle: data.subTitle,
    title: data.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, data.features.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.card,
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.wrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      sx: styles.wrapper.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
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
    backgroundImage: "url(".concat(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_6___default.a, ")"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NvcmUtZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3Nob3B0ZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvc2VjdGlvbnMvd29ya2Zsb3cuanMiXSwibmFtZXMiOlsiQkFOTkVSX0RBVEEiLCJ0aXRsZSIsInRleHQiLCJpbWFnZSIsInNlY3Rpb25JbWFnZSIsIkJhbm5lciIsInVzZVN0YXRlIiwidmlkZW9PcGVuIiwic2V0VmlkZW9PcGVuIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJzdHlsZXMiLCJzZWN0aW9uIiwiY29udGFpbmVyIiwiZmxleCIsImNvbnRlbnQiLCJpbWFnZXMiLCJzbWFsbCIsIm1lZGl1bSIsIm92ZXJmbG93IiwiYmFja2dyb3VuZENvbG9yIiwicHQiLCJwYiIsIm1heFdpZHRoIiwicG9zaXRpb24iLCJmbGV4V3JhcCIsImdhcCIsInRleHRBbGlnbiIsImgyIiwiZm9udEZhbWlseSIsImNvbG9yIiwibGV0dGVyU3BhY2luZyIsImZvbnRTaXplIiwibGluZUhlaWdodCIsIm1iIiwibXQiLCJteCIsInAiLCJmb3JtIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiaW5wdXQiLCJ3aWR0aCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsIm1yIiwiaGVpZ2h0IiwicHgiLCJib3hTaGFkb3ciLCJvdXRsaW5lIiwiYnV0dG9uIiwiZm9udFdlaWdodCIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwiV2Via2l0QXBwZWFyYW5jZSIsImFwcGVhcmFuY2UiLCJjdXJzb3IiLCJ0cmFuc2l0aW9uIiwibGVmdCIsImNsaWVudHMiLCJzcGFuIiwib3BhY2l0eSIsImEiLCJtbCIsImltZyIsImRhdGEiLCJleHAiLCJsaW5rIiwiUmlpZGwiLCJTdnUiLCJNc2lzIiwiQmlyYWMiLCJEc3RMb2dvIiwiQ29yZUZlYXR1cmUiLCJ2YXJpYW50IiwiY29udGFpbmVyQm94IiwiY29udGVudEJveCIsImJ0bk5hbWUiLCJidG5VUkwiLCJtYXAiLCJpbmRleCIsImZsZXhTaHJpbmsiLCJwciIsInRodW1ibmFpbCIsInpJbmRleCIsInN1YlRpdGxlIiwiZmVhdHVyZXMiLCJpZCIsImltZ1NyYyIsIlNlY3VyZSIsImFsdFRleHQiLCJTbWFydCIsIlNlcnZpY2VTZWN0aW9uIiwiZ3JpZCIsIml0ZW0iLCJjYXJkIiwiaWNvbiIsIndyYXBwZXIiLCJkZXNjcmlwdGlvbiIsImNvcmVGZWF0dXJlIiwicHkiLCJmbGV4RGlyZWN0aW9uIiwib3JkZXIiLCJzaGFwZUJveCIsImJvdHRvbSIsInBsIiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJTZXJ2aWNlVGh1bWIiLCJ0ZXN0IiwicGxheVBsdXNlIiwia2V5ZnJhbWVzIiwiYmFja2dyb3VuZEltYWdlIiwiUGF0dGVybkJHIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwidmlkZW9XcmFwcGVyIiwicGFkZGluZ1RvcCIsImlmcmFtZSIsInRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsd0RBRFc7QUFFbEJDLE1BQUksRUFDRiwyTEFIZ0I7QUFJcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFQyxPQUFLLEVBQUVDLDZEQUFZQTtBQWxCRCxDQUFwQjtBQW9CaUIsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUNqQyxNQUFRSixLQUFSLEdBQStCRCxXQUEvQixDQUFRQyxLQUFSO0FBQUEsTUFBZUMsSUFBZixHQUErQkYs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWFkNjUyOWVmOTViMzUxMjg0ZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbFZpZGVvIGZyb20gJ3JlYWN0LW1vZGFsLXZpZGVvJztcbmltcG9ydCB7IEZhUGxheUNpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7XG4gIEJveCxcbiAgQ29udGFpbmVyLFxuICBGbGV4LFxuICBIZWFkaW5nLFxuICBUZXh0LFxuICBMYWJlbCxcbiAgSW5wdXQsXG4gIEJ1dHRvbixcbiAgTGluayxcbn0gZnJvbSAndGhlbWUtdWknO1xuXG5pbXBvcnQgc21hbGwgZnJvbSAnYXNzZXRzL3RyYW5zcGFyZW50LXNtYWxsLnBuZyc7XG5pbXBvcnQgbWVkaXVtIGZyb20gJ2Fzc2V0cy9tZWRpdW0ucG5nJztcbmltcG9ydCBzZWN0aW9uSW1hZ2UgZnJvbSAnYXNzZXRzL3RyYW5zcGFyZW50LnBuZyc7XG5cbmNvbnN0IEJBTk5FUl9EQVRBID0ge1xuICB0aXRsZTogXCJPbmUgT2YgVGhlIFdvcmxkJ3MgTW9zdCBFY29ub21pY2FsIFZlbnRpbGF0aW9uIFN5c3RlbXNcIixcbiAgdGV4dDpcbiAgICAnVGhlIENvdi1UZWNoIFZlbnRpbGF0aW9uIFN5c3RlbSBpcyBzbWFydGx5IGRlc2lnbmVkIHRvIHByb3ZpZGUgdGhlIG1vc3QgdXNlciBmcmllbmRseSBleHBlcmllbmNlLiBFcXVpcHBlZCB3aXRoIGEgUG9seXByb3B5bGVuZSAzLWxheWVyZWQgZmlsdGVyLCBpdCBoYXMgbW9yZSB0aGFuIDk1JSBmaWx0ZXIgZWZmaWNpZW5jeS4nLFxuLy8gICBjbGllbnRzOiBbXG4vLyAgICAge1xuLy8gICAgICAgaW1hZ2U6IGNsaWVudDEsXG4vLyAgICAgICBsaW5rOiAnIycsXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgICBpbWFnZTogY2xpZW50Mixcbi8vICAgICAgIGxpbms6ICcjJyxcbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgIGltYWdlOiBjbGllbnQzLFxuLy8gICAgICAgbGluazogJyMnLFxuLy8gICAgIH0sXG4vLyAgIF0sXG4gIGltYWdlOiBzZWN0aW9uSW1hZ2UsXG59O1xuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYW5uZXIoKSB7XG4gIGNvbnN0IHsgdGl0bGUsIHRleHQsIGltYWdlIH0gPSBCQU5ORVJfREFUQTtcbiAgY29uc3QgW3ZpZGVvT3Blbiwgc2V0VmlkZW9PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRWaWRlb09wZW4odHJ1ZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBpZD1cImJhbm5lclwiIHN4PXtzdHlsZXMuc2VjdGlvbn0+XG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPEZsZXggc3g9e3N0eWxlcy5mbGV4fT5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImgyXCI+e3RpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgICAgIDxUZXh0IGFzPVwicFwiPnt0ZXh0fTwvVGV4dD5cbiAgICAgICAgICAgIHsvKiA8Qm94IGFzPVwiZm9ybVwiPlxuICAgICAgICAgICAgICA8TGFiZWwgdmFyaWFudD1cInN0eWxlcy5zck9ubHlcIiBodG1sRm9yPVwiZG9tYWluTmFtZVwiPlxuICAgICAgICAgICAgICAgIERvbWFpbiBOYW1lXG4gICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBkb21haW4gbmFtZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImRvbWFpbk5hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwiZG9tYWluTmFtZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgXG4gICAgICAgICAgICA8L0JveD4gKi99XG4gICAgICAgICAgICA8YSBocmVmPVwiI3Nob3BcIj48QnV0dG9uIHZhcmlhbnQgPSBcInByaW1hcnlcIj5HZXQgSXQgTm93PC9CdXR0b24+PC9hPlxuICAgICAgICAgICAgey8qIDxCdXR0b24gY2xhc3NOYW1lID0gXCJkb25hdGVfX2J0blwiIHZhcmlhbnQgPSBcInNlY29uZGFyeVwiIGFyaWEtbGFiZWwgPSBcIkdldCBTdGFydGVkXCI+V2F0Y2ggVmlkZW88L0J1dHRvbj4gKi99XG4gICAgICAgICAgICB7LyogPEJveCBzeD17c3R5bGVzLmNsaWVudHN9PlxuICAgICAgICAgICAgICA8VGV4dCBhcz1cInNwYW5cIj5PdXIgY2xpZW50czwvVGV4dD5cbiAgICAgICAgICAgICAge2NsaWVudHMubWFwKCh7IGxpbmssIGltYWdlIH0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bGlua30ga2V5PXtgY2xpZW50LWltYWdlLWtleS0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEyM1wiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI4XCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiY2xpZW50IGltYWdlXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQm94PiAqL31cbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxNb2RhbFZpZGVvXG4gICAgICAgICAgICAgICAgY2hhbm5lbD1cInlvdXR1YmVcIlxuICAgICAgICAgICAgICAgIGlzT3Blbj17dmlkZW9PcGVufVxuICAgICAgICAgICAgICAgIHZpZGVvSWQ9XCJNMGk5OTZTemNEUVwiXG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0VmlkZW9PcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJXYXRjaCBWaWRlb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZhUGxheUNpcmNsZSAvPiBXYXRjaCBWaWRlb1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5pbWFnZXN9PlxuICAgICAgICAgIDxwaWN0dXJlPlxuICAgICAgICAgIDxzb3VyY2UgbWVkaWE9XCIobWF4LXdpZHRoOiA3MDBweClcIiBzcmNzZXQ9e3NtYWxsfSAvPlxuICAgICAgICAgIDxzb3VyY2UgbWVkaWE9XCIobWF4LXdpZHRoOiAxNDAwcHgpXCIgc3Jjc2V0PXttZWRpdW19IC8+XG4gICAgICAgICAgPHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDE0MDFweClcIiBzcmNzZXQ9e2ltYWdlfSAvPlxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gLz5cbiAgICAgICAgPC9waWN0dXJlPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc2VjdGlvbjoge1xuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjlGQkZEJyxcbiAgICBwdDogWycxNjBweCcsIG51bGwsIG51bGwsIG51bGwsICcyMDBweCddLFxuICAgIHBiOiBbJzcwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnMTAwcHgnXSxcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgbWF4V2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcxMTcwcHgnLCAnMTI4MHB4J10sXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIH0sXG4gIGZsZXg6IHtcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIGdhcDogMCxcbiAgfSxcbiAgY29udGVudDoge1xuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCAnbGVmdCcsIG51bGwsICdjZW50ZXInLCAnbGVmdCddLFxuICAgIGZsZXg6IFsnMCAwIDEwMCUnLCBudWxsLCBudWxsLCBudWxsLCAnMCAwIDUwJScsICcwIDAgNDAlJ10sXG4gICAgaDI6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdETSBTYW5zJyxcbiAgICAgIGNvbG9yOiAnIzAyMDczRScsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTFweCcsXG4gICAgICBmb250U2l6ZTogWycyOHB4JywgbnVsbCwgJzMycHgnLCBudWxsLCBudWxsLCAnNDVweCcsICc1NXB4J10sXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQ1LFxuICAgICAgbWF4V2lkdGg6ICc1NDZweCcsXG4gICAgICBtYjogJzEwcHgnLFxuICAgICAgbXQ6ICctMjVweCcsXG4gICAgICBteDogWycwJywgbnVsbCwgbnVsbCwgJ2F1dG8nXSxcbiAgICB9LFxuICAgIHA6IHtcbiAgICAgIGZvbnRTaXplOiBbJzE1cHgnLCBudWxsLCAnMTZweCddLFxuICAgICAgbGluZUhlaWdodDogWzIsIG51bGwsIDIuNjJdLFxuICAgICAgY29sb3I6ICcjMDIwNzNFJyxcbiAgICAgIG1heFdpZHRoOiAnNDg2cHgnLFxuICAgICAgbWI6ICcyMHB4JyxcbiAgICB9LFxuICAgIGZvcm06IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogW251bGwsIG51bGwsIG51bGwsICdjZW50ZXInLCAnZmxleC1zdGFydCddLFxuICAgICAgbXQ6ICcyNXB4JyxcbiAgICAgIG1iOiBbJzIwcHgnLCAnNDBweCddLFxuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgd2lkdGg6IFsnMTAwJScsICcyMTVweCcsICczNDZweCcsIG51bGwsICczMDBweCcsIG51bGwsICczNDBweCddLFxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI0U5RURGNScsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzhweCcsXG4gICAgICAgIG1yOiBbJzAnLCAnMTVweCddLFxuICAgICAgICBtYjogWycxMHB4JywgJzAnXSxcbiAgICAgICAgaGVpZ2h0OiBbJzUwcHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnNTVweCcsICc2MHB4J10sXG4gICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgIGNvbG9yOiAncmdiYSgyLDcsNjIsLjQpJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIHB4OiAnMjVweCcsXG4gICAgICAgIGJveFNoYWRvdzogJ25vbmUgIWltcG9ydGFudCcsXG4gICAgICAgIG91dGxpbmU6ICdub25lICFpbXBvcnRhbnQnLFxuICAgICAgICAnJjo6cGxhY2Vob2xkZXInOiB7XG4gICAgICAgICAgY29sb3I6ICdyZ2JhKDIsNyw2MiwuNCknLFxuICAgICAgICB9LFxuICAgICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgICBib3JkZXI6ICdwcmltYXJ5JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBidXR0b246IHtcbiAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgICAgY29sb3I6ICcjZmZmZicsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnOHB4JyxcbiAgICAgICAgaGVpZ2h0OiBbJzUwcHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnNTVweCcsICc2MHB4J10sXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIHBhZGRpbmc6ICcwIDMycHgnLFxuICAgICAgICBXZWJraXRBcHBlYXJhbmNlOiAnbm9uZScsXG4gICAgICAgIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgbXg6IFsnYXV0bycsIDBdLFxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDUwMG1zIGVhc2UnLFxuICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdzZWNvbmRhcnknLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBpbWFnZXM6IHtcbiAgICBmbGV4OiBbJzAgMCAxMDAlJywgbnVsbCwgbnVsbCwgbnVsbCwgJzAgMCA1MCUnLCAnMCAwIDYwJSddLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGxlZnQ6IFsnYXV0bycsICc1MHB4JywgJzUwcHgnLCBudWxsLCAnNTBweCcsICcxMDBweCddLFxuICAgIG10OiBbJzMwcHgnLCBudWxsLCAnNDBweCcsIG51bGwsICc0MHB4J10sXG4gIH0sXG4gIGNsaWVudHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZmxleFdyYXA6ICduby13cmFwJyxcbiAgICBqdXN0aWZ5Q29udGVudDogWydjZW50ZXInLCBudWxsLCBudWxsLCAnY2VudGVyJywgJ2ZsZXgtc3RhcnQnXSxcbiAgICBzcGFuOiB7XG4gICAgICBjb2xvcjogJyM1NjYyNzInLFxuICAgICAgb3BhY2l0eTogMC42LFxuICAgICAgZmxleDogWycwIDAgMTAwJScsICcxIDEgMTAwJScsICcwIDAgYXV0byddLFxuICAgICAgbWI6IFsnMTBweCcsIG51bGwsICcwJ10sXG4gICAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgJ2xlZnQnXSxcbiAgICB9LFxuICAgIGE6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgbWw6IFsnMTBweCcsICcxNXB4JywgbnVsbCwgJzE1cHgnLCAnMHB4JywgbnVsbCwgJzE1cHgnXSxcbiAgICAgIGltZzoge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcblxuXG5cblxuLy8gaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuLy8gaW1wb3J0IHsgQ29udGFpbmVyLCBCb3gsIEhlYWRpbmcsIFRleHQsIEltYWdlLCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XG4vLyBpbXBvcnQgQmFubmVySW1nIGZyb20gJ2Fzc2V0cy9iYW5uZXItdGh1bWIucG5nJztcbi8vIGltcG9ydCBTaGFwZUxlZnQgZnJvbSAnYXNzZXRzL3NoYXBlLWxlZnQucG5nJztcbi8vIGltcG9ydCBTaGFwZVJpZ2h0IGZyb20gJ2Fzc2V0cy9zaGFwZS1yaWdodC5wbmcnO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYW5uZXIoKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPHNlY3Rpb24gc3g9e3N0eWxlcy5iYW5uZXJ9IGlkPVwiaG9tZVwiPlxuLy8gICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmJhbm5lci5jb250YWluZXJ9PlxuLy8gICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYmFubmVyLmNvbnRlbnRCb3h9PlxuLy8gICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiB2YXJpYW50PVwiaGVyb1ByaW1hcnlcIj5cbi8vICAgICAgICAgICAgIE9uZSBPZiBUaGUgV29ybGQncyBNb3N0IEVjb25vbWljYWwgUFBFIFZlbnRpbGF0aW9uIFN5c3RlbXNcbi8vICAgICAgICAgICA8L0hlYWRpbmc+XG4vLyAgICAgICAgICAgey8qIDxUZXh0IGFzPVwicFwiIHZhcmlhbnQ9XCJoZXJvU2Vjb25kYXJ5XCI+XG4vLyAgICAgICAgICAgICBHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGVcbi8vICAgICAgICAgICAgIHZpY3Rvcnkgb2YgdGhlIG1hbmFnZW1lbnRzIHRoYXQgc3VwcGxpZXMgYmVzdCBkZXNpZ24gc3lzdGVtXG4vLyAgICAgICAgICAgICBndWlkZWxpbmVzIGV2ZXIuXG4vLyAgICAgICAgICAgPC9UZXh0PiAqL31cbi8vICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCI+R2V0IEl0IE5vdzwvQnV0dG9uPlxuLy8gICAgICAgICA8L0JveD5cblxuLy8gICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYmFubmVyLmltYWdlQm94fT5cbi8vICAgICAgICAgICA8SW1hZ2Ugc3JjPXtCYW5uZXJJbWd9IGFsdD1cImJhbm5lclwiIC8+XG4vLyAgICAgICAgIDwvQm94PlxuLy8gICAgICAgPC9Db250YWluZXI+XG4vLyAgICAgPC9zZWN0aW9uPlxuLy8gICApO1xuLy8gfVxuXG4vLyBjb25zdCBzdHlsZXMgPSB7XG4vLyAgIGJhbm5lcjoge1xuLy8gICAgIHB0OiBbJzE0MHB4JywgJzE0NXB4JywgJzE1NXB4JywgJzE3MHB4JywgbnVsbCwgbnVsbCwgJzE4MHB4JywgJzIxNXB4J10sXG4vLyAgICAgcGI6IFsyLCBudWxsLCAwLCBudWxsLCAyLCAwLCBudWxsLCA1XSxcbi8vICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbi8vICAgICB6SW5kZXg6IDIsXG4vLyAgICAgJyY6OmJlZm9yZSc6IHtcbi8vICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuLy8gICAgICAgY29udGVudDogJ1wiXCInLFxuLy8gICAgICAgYm90dG9tOiA2LFxuLy8gICAgICAgbGVmdDogMCxcbi8vICAgICAgIGhlaWdodDogJzEwMCUnLFxuLy8gICAgICAgd2lkdGg6ICcxMDAlJyxcbi8vICAgICAgIHpJbmRleDogLTEsXG4vLyAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtTaGFwZUxlZnR9KWAsXG4vLyAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbi8vICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2JvdHRvbSBsZWZ0Jyxcbi8vICAgICAgIGJhY2tncm91bmRTaXplOiAnMzYlJyxcbi8vICAgICB9LFxuLy8gICAgICcmOjphZnRlcic6IHtcbi8vICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuLy8gICAgICAgY29udGVudDogJ1wiXCInLFxuLy8gICAgICAgYm90dG9tOiAnNDBweCcsXG4vLyAgICAgICByaWdodDogMCxcbi8vICAgICAgIGhlaWdodDogJzEwMCUnLFxuLy8gICAgICAgd2lkdGg6ICcxMDAlJyxcbi8vICAgICAgIHpJbmRleDogLTEsXG4vLyAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtTaGFwZVJpZ2h0fSlgLFxuLy8gICAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXG4vLyAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdib3R0b20gcmlnaHQnLFxuLy8gICAgICAgYmFja2dyb3VuZFNpemU6ICczMiUnLFxuLy8gICAgIH0sXG4vLyAgICAgY29udGFpbmVyOiB7XG4vLyAgICAgICBtaW5IZWlnaHQ6ICdpbmhlcml0Jyxcbi8vICAgICAgIGRpc3BsYXk6ICdmbGV4Jyxcbi8vICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuLy8gICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuLy8gICAgIH0sXG4vLyAgICAgY29udGVudEJveDoge1xuLy8gICAgICAgd2lkdGg6IFsnMTAwJScsICc5MCUnLCAnNTM1cHgnLCBudWxsLCAnNTclJywgJzYwJScsICc2OCUnLCAnNjAlJ10sXG4vLyAgICAgICBteDogJ2F1dG8nLFxuLy8gICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbi8vICAgICAgIG1iOiBbJzQwcHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA3XSxcbi8vICAgICB9LFxuLy8gICAgIGltYWdlQm94OiB7XG4vLyAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4vLyAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuLy8gICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4Jyxcbi8vICAgICAgIG1iOiBbMCwgbnVsbCwgLTYsIG51bGwsIG51bGwsICctNDBweCcsIG51bGwsIC0zXSxcbi8vICAgICAgIGltZzoge1xuLy8gICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbi8vICAgICAgICAgaGVpZ2h0OiBbMjQ1LCAnYXV0byddLFxuLy8gICAgICAgfSxcbi8vICAgICB9LFxuLy8gICB9LFxuLy8gfTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBHcmlkLCBDb250YWluZXIsIEJveCwgSW1hZ2UsIExpbmsgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgVGV4dEZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy90ZXh0LWZlYXR1cmUnO1xuaW1wb3J0IFN2dSBmcm9tICdhc3NldHMvc3VwcG9ydGVkLTAxLnBuZyc7XG5pbXBvcnQgZXhwIGZyb20gJ2Fzc2V0cy9zdXBwb3J0ZWQtMDIucG5nJztcbmltcG9ydCBCaXJhYyBmcm9tICdhc3NldHMvc3VwcG9ydGVkLTAzLnBuZyc7XG5pbXBvcnQgRHN0TG9nbyBmcm9tICdhc3NldHMvc3VwcG9ydGVkLTA0LnBuZyc7XG5pbXBvcnQgUmlpZGwgZnJvbSAnYXNzZXRzL3N1cHBvcnRlZC0wNS5wbmcnO1xuaW1wb3J0IE1zaXMgZnJvbSAnYXNzZXRzL3N1cHBvcnRlZC0wNi5wbmcnO1xuXG5jb25zdCBkYXRhID0ge1xuICAvLyBzdWJUaXRsZTogJ0ZPUiBZT1VSIFNBRkVUWScsXG4gIHRpdGxlOiAnU3VwcG9ydGVkIEJ5JyxcbiAgLy8gZGVzY3JpcHRpb246XG4gIC8vICAgXCJUaGUgJ0Nvdi1UZWNoIFZlbnRpbGF0aW9uIFN5c3RlbScgaXMgdGVzdGVkIGJ5IEludGVydGVrIGFjY29yZGluZyB0byBJRUMgNjA2MDEtMSBpbnRlcm5hdGlvbmFsIG1lZGljYWwgc2FmZXR5IHN0YW5kYXJkcy5cIixcbiAgLy8gYnRuTmFtZTogJ0dldCBTdGFydGVkJyxcbiAgLy8gYnRuVVJMOiAnIycsXG4gIGNsaWVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGltYWdlOiBleHAsXG4gICAgICAgICAgbGluazogJ2h0dHBzOi8vd3d3LjNkcy5jb20vJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGltYWdlOiBSaWlkbCxcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9yaWlkbC5vcmcvJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGltYWdlOiBTdnUsXG4gICAgICAgICAgbGluazogJ2h0dHBzOi8vd3d3LnNvbWFpeWEuZWR1L2VuJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGltYWdlOiBNc2lzLFxuICAgICAgICAgIGxpbms6ICdodHRwczovL3d3dy5tc2lucy5pbi8nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaW1hZ2U6IEJpcmFjLFxuICAgICAgICAgIGxpbms6ICdodHRwczovL3d3dy5iaXJhYy5uaWMuaW4vc2VlZEZ1bmQucGhwJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGltYWdlOiBEc3RMb2dvLFxuICAgICAgICAgIGxpbms6ICdodHRwczovL2RzdC5nb3YuaW4vJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG59O1xuXG4vLyBjb25zdCBkYXRhMiA9IFtcbi8vICAge1xuLy8gICAgIGltYWdlOiBEc3RMb2dvLFxuLy8gICAgIGxpbms6ICcjJyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGltYWdlOiAnaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS83ZTBmNTVfOWE1OTcwNjdhZTQwNDRhOGIwZjhkOTg5MzRjYjNlNGZ+bXYyLnBuZy92MS9maWxsL3dfMzQxLGhfMTA0LGFsX2MscV84NSx1c21fMC42Nl8xLjAwXzAuMDEvM2RzLWRhcmsud2VicCcsXG4vLyAgICAgbGluazogJyMnLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaW1hZ2U6ICdodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzdlMGY1NV85YTU5NzA2N2FlNDA0NGE4YjBmOGQ5ODkzNGNiM2U0Zn5tdjIucG5nL3YxL2ZpbGwvd18zNDEsaF8xMDQsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMS8zZHMtZGFyay53ZWJwJyxcbi8vICAgICBsaW5rOiAnIycsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpbWFnZTogJ2h0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvN2UwZjU1XzlhNTk3MDY3YWU0MDQ0YThiMGY4ZDk4OTM0Y2IzZTRmfm12Mi5wbmcvdjEvZmlsbC93XzM0MSxoXzEwNCxhbF9jLHFfODUsdXNtXzAuNjZfMS4wMF8wLjAxLzNkcy1kYXJrLndlYnAnLFxuLy8gICAgIGxpbms6ICcjJyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGltYWdlOiAnaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS83ZTBmNTVfOWE1OTcwNjdhZTQwNDRhOGIwZjhkOTg5MzRjYjNlNGZ+bXYyLnBuZy92MS9maWxsL3dfMzQxLGhfMTA0LGFsX2MscV84NSx1c21fMC42Nl8xLjAwXzAuMDEvM2RzLWRhcmsud2VicCcsXG4vLyAgICAgbGluazogJyMnLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaW1hZ2U6ICdodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzdlMGY1NV85YTU5NzA2N2FlNDA0NGE4YjBmOGQ5ODkzNGNiM2U0Zn5tdjIucG5nL3YxL2ZpbGwvd18zNDEsaF8xMDQsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMS8zZHMtZGFyay53ZWJwJyxcbi8vICAgICBsaW5rOiAnIycsXG4vLyAgIH0sXG4vLyBdO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29yZUZlYXR1cmUoKSB7XG4gIGNvbnN0IHsgY2xpZW50cyB9ID0gZGF0YTtcbiAgcmV0dXJuIChcbiAgIDxzZWN0aW9uIHN4PXt7dmFyaWFudDogJ3NlY3Rpb24uY29yZUZlYXR1cmUnfX0+XG4gICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lckJveH0+XG4gICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudEJveH0+XG4gICAgICAgIDxUZXh0RmVhdHVyZSBcbiAgICAgICAgICAvLyBzdWJUaXRsZT17ZGF0YS5zdWJUaXRsZX1cbiAgICAgICAgICB0aXRsZT17ZGF0YS50aXRsZX1cbiAgICAgICAgICAvLyBkZXNjcmlwdGlvbj17ZGF0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICBidG5OYW1lPXtkYXRhLmJ0bk5hbWV9XG4gICAgICAgICAgYnRuVVJMPXtkYXRhLmJ0blVSTH1cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveCBzeD17c3R5bGVzLmNsaWVudHN9PlxuICAgICAgICAgICAgICB7LyogPFRleHQgYXM9XCJzcGFuXCI+T3VyIGNsaWVudHM8L1RleHQ+ICovfVxuICAgICAgICAgICAgICB7Y2xpZW50cy5tYXAoKHsgbGluaywgaW1hZ2UgfSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsaW5rfSBrZXk9e2BjbGllbnQtaW1hZ2Uta2V5LSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTIzXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjhcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJjbGllbnQgaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICB7LyogPEJveCBzeD17c3R5bGVzLnRodW1ibmFpbH0+XG4gICAgICAgIDxJbWFnZSBocmVmPVwiaHR0cHM6Ly93d3cuaW50ZXJ0ZWsuY29tL1wiIHNyYz1cImh0dHBzOi8vd3d3LmludGVydGVrLmNvbS9zaGFyZWQvaW1nL3NpdGUvbG9nby1oZWFkZXItc21AMngucG5nXCIgYWx0PVwiVGh1bWJuYWlsXCIgLz5cbiAgICAgICAgPEltYWdlIGhyZWY9XCJodHRwczovL3d3dy5pbnRlcnRlay5jb20vXCIgc3JjPVwiaHR0cHM6Ly93d3cuaW50ZXJ0ZWsuY29tL3NoYXJlZC9pbWcvc2l0ZS9sb2dvLWhlYWRlci1zbUAyeC5wbmdcIiBhbHQ9XCJUaHVtYm5haWxcIiAvPlxuICAgICAgICA8SW1hZ2UgaHJlZj1cImh0dHBzOi8vd3d3LmludGVydGVrLmNvbS9cIiBzcmM9XCJodHRwczovL3d3dy5pbnRlcnRlay5jb20vc2hhcmVkL2ltZy9zaXRlL2xvZ28taGVhZGVyLXNtQDJ4LnBuZ1wiIGFsdD1cIlRodW1ibmFpbFwiIC8+XG4gICAgICAgIDxJbWFnZSBocmVmPVwiaHR0cHM6Ly93d3cuaW50ZXJ0ZWsuY29tL1wiIHNyYz1cImh0dHBzOi8vd3d3LmludGVydGVrLmNvbS9zaGFyZWQvaW1nL3NpdGUvbG9nby1oZWFkZXItc21AMngucG5nXCIgYWx0PVwiVGh1bWJuYWlsXCIgLz5cbiAgICAgICAgPEltYWdlIGhyZWY9XCJodHRwczovL3d3dy5pbnRlcnRlay5jb20vXCIgc3JjPVwiaHR0cHM6Ly93d3cuaW50ZXJ0ZWsuY29tL3NoYXJlZC9pbWcvc2l0ZS9sb2dvLWhlYWRlci1zbUAyeC5wbmdcIiBhbHQ9XCJUaHVtYm5haWxcIiAvPlxuICAgICAgICA8SW1hZ2UgaHJlZj1cImh0dHBzOi8vd3d3LmludGVydGVrLmNvbS9cIiBzcmM9XCJodHRwczovL3d3dy5pbnRlcnRlay5jb20vc2hhcmVkL2ltZy9zaXRlL2xvZ28taGVhZGVyLXNtQDJ4LnBuZ1wiIGFsdD1cIlRodW1ibmFpbFwiIC8+XG4gICAgICAgIHsvKiA8Qm94IHN4PXtzdHlsZXMuc2hhcGVCb3h9PlxuICAgICAgICAgIDxJbWFnZSBzcmM9e3NoYXBlUGF0dGVybn0gYWx0PVwiU2hhcGVcIi8+XG4gICAgICAgIDwvQm94PiAqL31cbiAgICAgIHsvKiA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIHtkYXRhMi5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaWNvbkJveH0+e2AwJHtpdGVtLmlkfWB9PC9Cb3g+XG4gICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPiAqL31cbiAgICA8L0NvbnRhaW5lcj5cbiAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250YWluZXJCb3g6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBmbGV4V3JhcDogWyd3cmFwJywgbnVsbCwgbnVsbCwgJ25vd3JhcCddLFxuICAgIHBiOiBbMCwgNCwgMCwgbnVsbCwgNF0sXG4gICAgbXQ6IDUsXG4gICAgbWI6LTcsXG4gICAgYm9yZGVyUmFkaXVzOiA2LFxuICB9LFxuICBjb250ZW50Qm94OiB7XG4gICAgZmxleFNocmluazogMCxcbiAgICBweDogWzAsIG51bGwsICczMHB4JywgMF0sXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdsZWZ0J10sXG4gICAgd2lkdGg6IFsnMTAwJScsICcxMDAlJywgbnVsbCwgMzQwLCA2MDAsIDQzMCwgbnVsbCwgNDg1XSxcbiAgICBwdDogNSxcbiAgICBwYjogWyc1MHB4JywgJzYwcHgnLCBudWxsLCAwXSxcbiAgICBteDogWydhdXRvJywgbnVsbCwgbnVsbCwgMF0sXG4gICAgbWI6IC03LFxuICAgICcuZGVzY3JpcHRpb24nOiB7XG4gICAgICBwcjogWzAsIG51bGwsIDYsIDcsIDZdLFxuICAgIH0sXG4gIH0sXG4gIHRodW1ibmFpbDoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgbXI6ICdhdXRvJyxcbiAgICBtYjogNCxcbiAgICBtbDogWydhdXRvJywgbnVsbCwgbnVsbCwgNiwgM10sXG4gICAgJz4gaW1nJzoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB6SW5kZXg6IDEsXG4gICAgICBoZWlnaHQ6IFszMTAsICdhdXRvJ10sXG4gICAgfSxcbiAgfSxcbiAgLy8gc2hhcGVCb3g6IHtcbiAgLy8gICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgLy8gICBib3R0b206IC02NSxcbiAgLy8gICByaWdodDogLTE2NSxcbiAgLy8gICB6SW5kZXg6IC0xLFxuICAvLyAgIGRpc3BsYXk6IFsnbm9uZScsICdpbmxpbmUtYmxvY2snLCAnbm9uZScsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcbiAgLy8gfSxcbiAgLy8gZ3JpZDoge1xuICAvLyAgIG1iOiAtMSxcbiAgLy8gICBwdDogMCxcbiAgLy8gICBncmlkR2FwOiBbXG4gIC8vICAgICAnMzVweCAwJyxcbiAgLy8gICAgIG51bGwsXG4gIC8vICAgICAnNDVweCAzMHB4JyxcbiAgLy8gICAgIG51bGwsXG4gIC8vICAgICAnNTBweCAyNXB4JyxcbiAgLy8gICAgIG51bGwsXG4gIC8vICAgICBudWxsLFxuICAvLyAgICAgJzUwcHggNjVweCcsXG4gIC8vICAgXSxcbiAgLy8gICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXG4gIC8vICAgICAncmVwZWF0KDEsMWZyKScsXG4gIC8vICAgICBudWxsLFxuICAvLyAgICAgJ3JlcGVhdCgyLDFmciknLFxuICAvLyAgICAgbnVsbCxcbiAgLy8gICAgICdyZXBlYXQoNCwxZnIpJyxcbiAgLy8gICBdLFxuICAvLyB9LFxuICBjbGllbnRzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAganVzdGlmeUNvbnRlbnQ6IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2NlbnRlcicsICdmbGV4LXN0YXJ0J10sXG4gICAgcHQ6ICcyMHB4JyxcbiAgICBtdDogMyxcbiAgICBpbWc6IHtcbiAgICAgIG1iOiA3LFxuICAgICAgbWw6IDMsXG4gICAgICBtcjogNSxcbiAgICAgIGhlaWdodDogJzUwcHgnLFxuICAgICAgd2lkdGg6ICcxNzBweCcsXG4gICAgfSxcbiAgICBhOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIG1sOiBbJzEwcHgnLCAnMTVweCcsIG51bGwsICcxNXB4JywgJzBweCcsIG51bGwsICcxNXB4J10sXG4gICAgICBpbWc6IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgQm94LCBHcmlkLCBUZXh0LCBIZWFkaW5nLCBCdXR0b24sIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcclxuaW1wb3J0IFRleHRGZWF0dXJlIGZyb20gJ2NvbXBvbmVudHMvdGV4dC1mZWF0dXJlJztcclxuaW1wb3J0IENvbnRhY3RVcyBmcm9tICdjb21wb25lbnRzL2NvbnRhY3RGb3JtJztcclxuaW1wb3J0IFNtYXJ0IGZyb20gJ2Fzc2V0cy9mb3JtLnBuZyc7XHJcbmltcG9ydCBTZWN1cmUgZnJvbSAnYXNzZXRzL2J1eS1vbmxpbmUucG5nJztcclxuXHJcbmNvbnN0IGRhdGEgPSB7XHJcbiAgc3ViVGl0bGU6ICdTSE9QIE5PVycsXHJcbiAgdGl0bGU6ICdHZXQgdGhlIENvdi1UZWNoIFZlbnRpbGF0aW9uIFN5c3RlbScsXHJcbiAgZmVhdHVyZXM6IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBpbWdTcmM6IFNlY3VyZSxcclxuICAgICAgICBhbHRUZXh0OiAnQnV5IE5vdycsXHJcbiAgICAgICAgdGl0bGU6ICdHZXQgSXQgTm93JyxcclxuICAgICAgICB0ZXh0OlxyXG4gICAgICAgICAgJ0J1eSB0aGUgQ292LVRlY2ggVmVudGlsYXRpb24gU3lzdGVtIGZvciDigrk1LDU5OS8tIG9ubHkuJyxcclxuICAgICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIGltZ1NyYzogU21hcnQsXHJcbiAgICAgIGFsdFRleHQ6ICdCdXkgTm93JyxcclxuICAgICAgdGl0bGU6ICdQbGFjZSBZb3VyIE9yZGVyIE9yIENvbnRhY3QgVXMnLFxyXG4gICAgICB0ZXh0OlxyXG4gICAgICAgICdXZSBhcmUgY3VycmVudGx5IG5vdCBhY2NlcHRpbmcgcGF5bWVudHMgb25saW5lLiBQbGVhc2UgZmlsbCB0aGUgY29udGFjdCBmb3JtIHRvIGJ1eSB0aGUgZGV2aWNlIGFuZCBjYWxsIHVzIGZvciBkaXNjb3VudGVkIHByaWNlcyBvbiBidWxrIG9yZGVyIG9yIGRvbmF0aW9ucy4nLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljZVNlY3Rpb24oKSB7XHJcbiAgICAvLyBtb2RhbCBwb3B1cCB2aWRlbyBoYW5kbGVyXHJcbiAgICBjb25zdCBbdmlkZW9PcGVuLCBzZXRWaWRlb09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHNldFZpZGVvT3Blbih0cnVlKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gIDxzZWN0aW9uIGlkPVwic2hvcFwiPlxyXG4gIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJCb3h9PlxyXG4gICAgPEJveCBzeD17c3R5bGVzLnRodW1ibmFpbH0+XHJcbiAgICAgIHsvKiA8SW1hZ2Ugc3JjPXtTZXJ2aWNlVGh1bWJ9IGFsdD1cIlRodW1ibmFpbFwiIC8+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxDb250YWN0VXMgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxCb3ggc3g9e3N0eWxlcy5zaGFwZUJveH0+XHJcbiAgICAgICAgPEltYWdlIHNyYz17c2hhcGVQYXR0ZXJufSBhbHQ9XCJTaGFwZVwiIC8+XHJcbiAgICAgIDwvQm94PiAqL31cclxuICAgIDwvQm94PlxyXG4gICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnRCb3h9PlxyXG4gICAgICA8VGV4dEZlYXR1cmUgc3ViVGl0bGU9e2RhdGEuc3ViVGl0bGV9IHRpdGxlPXtkYXRhLnRpdGxlfSAvPlxyXG5cclxuICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICB7ZGF0YS5mZWF0dXJlcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLmltZ1NyY30gYWx0PXtpdGVtLmFsdFRleHR9IHN4PXtzdHlsZXMuaWNvbn0gLz5cclxuXHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9PntpdGVtLnRpdGxlfTwvSGVhZGluZz5cclxuICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuZGVzY3JpcHRpb259PntpdGVtLnRleHR9PC9UZXh0PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0JveD5cclxuICA8L0NvbnRhaW5lcj5cclxuPC9zZWN0aW9uPlxyXG4pO1xyXG59XHJcblxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNvcmVGZWF0dXJlOiB7XHJcbiAgICBweTogWzAsIG51bGwsIG51bGwsIDIsIG51bGwsIDddLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgfSxcclxuICBjb250YWluZXJCb3g6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6IFsnZmxleC1zdGFydCcsIG51bGwsIG51bGwsICdjZW50ZXInXSxcclxuICAgIGp1c3RpZnlDb250ZW50OiBbJ2ZsZXgtc3RhcnQnLCBudWxsLCBudWxsLCAnc3BhY2UtYmV0d2VlbiddLFxyXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCBudWxsLCAncm93J10sXHJcbiAgICBwYjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDNdLFxyXG4gICAgbWI6IDYsXHJcbiAgICBwdDogJzMwcHgnLFxyXG4gICAgcGI6ICczMHB4JyxcclxuICB9LFxyXG4gIHRodW1ibmFpbDoge1xyXG4gICAgbXI6IFsnYXV0bycsIG51bGwsIG51bGwsIDYsIDYwLCA4NV0sXHJcbiAgICBvcmRlcjogWzIsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgbWw6IFsnYXV0bycsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgJz4gaW1nJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgekluZGV4OiAxLFxyXG4gICAgICBoZWlnaHQ6IFszMTAsICdhdXRvJ10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2hhcGVCb3g6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgYm90dG9tOiAtNjgsXHJcbiAgICBsZWZ0OiAtMTYwLFxyXG4gICAgekluZGV4OiAtMSxcclxuICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcclxuICB9LFxyXG4gIGNvbnRlbnRCb3g6IHtcclxuICAgIHdpZHRoOiBbJzEwMCUnLCBudWxsLCBudWxsLCAzMTUsIDM5MCwgNDUwLCBudWxsLCA1MDBdLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIG1iOiBbNywgbnVsbCwgNjAsIDBdLFxyXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdsZWZ0J10sXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBwcjogWzIsIDAsIG51bGwsIG51bGwsIDYsICc3MHB4J10sXHJcbiAgICBwbDogWzIsIDBdLFxyXG4gICAgcHQ6IFsyLCBudWxsLCBudWxsLCBudWxsLCAzXSxcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICB3aWR0aDogWycxMDAlJywgMzcwLCA0MjAsICcxMDAlJ10sXHJcbiAgICBncmlkR2FwOiBbJzM1cHggMCcsIG51bGwsIG51bGwsIG51bGwsICc1MHB4IDAnXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFsncmVwZWF0KDEsMWZyKSddLFxyXG4gIH0sXHJcbiAgY2FyZDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcclxuICB9LFxyXG4gIGljb246IHtcclxuICAgIHdpZHRoOiBbJzQ1cHgnLCBudWxsLCBudWxsLCBudWxsLCAnNTVweCddLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgbXI6IFszLCBudWxsLCBudWxsLCBudWxsLCA0XSxcclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgbXQ6ICctNXB4JyxcclxuICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgJzE0cHgnLCAxXSxcclxuICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjksXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IDMsXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgbWI6IFsyLCBudWxsLCAzLCAyLCAzXSxcclxuICAgIH0sXHJcblxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAnMTRweCcsIDFdLFxyXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuOSxcclxuICAgICAgY29sb3I6ICdibHVlJyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgQm94LCBHcmlkLCBUZXh0LCBIZWFkaW5nLCBCdXR0b24sIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgVGV4dEZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy90ZXh0LWZlYXR1cmUnO1xuaW1wb3J0IFNlcnZpY2VUaHVtYiBmcm9tICdhc3NldHMvem9vbTFfZ2FsLmpwZyc7XG5pbXBvcnQgUGF0dGVybkJHIGZyb20gJ2Fzc2V0cy9wYXR0ZXJuQkcucG5nJztcbi8vIGltcG9ydCBTbWFydCBmcm9tICdhc3NldHMvc2hpZWxkLnBuZyc7XG4vLyBpbXBvcnQgU2VjdXJlIGZyb20gJ2Fzc2V0cy9pY29ucy0xNC0xNC5wbmcnO1xuXG5jb25zdCBkYXRhID0ge1xuICB0aXRsZTogJ01lZGljYWxseSBUZXN0ZWQgQnkgSW50ZXJ0ZWsnLFxuICBmZWF0dXJlczogW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgLy8gaW1nU3JjOiBTbWFydCxcbiAgICAgIC8vIGFsdFRleHQ6ICdNZWRpY2FsbHkgVGVzdGVkIEJ5IEludGVydGVrJyxcbiAgICAgIHRpdGxlOiAnTWVkaWNhbGx5IFRlc3RlZCBCeSBJbnRlcnRlaycsXG4gICAgICB0ZXh0OlxuICAgICAgICBcIlRoZSAnQ292LVRlY2ggVmVudGlsYXRpb24gU3lzdGVtJyBpcyB0ZXN0ZWQgYnkgSW50ZXJ0ZWsgYWNjb3JkaW5nIHRvIElFQyA2MDYwMS0xIGludGVybmF0aW9uYWwgbWVkaWNhbCBzYWZldHkgc3RhbmRhcmRzLlwiLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2aWNlU2VjdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICA8c2VjdGlvbiBzeD17eyB2YXJpYW50OiAnc2VjdGlvbi5zZXJ2aWNlcycgfX0+XG4gIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJCb3h9PlxuICAgIDxCb3ggc3g9e3N0eWxlcy50aHVtYm5haWx9PlxuICAgICAgPEltYWdlIHNyYz17U2VydmljZVRodW1ifSBhbHQ9XCJUaHVtYm5haWxcIiAvPlxuXG4gICAgICB7LyogPEJveCBzeD17c3R5bGVzLnNoYXBlQm94fT5cbiAgICAgICAgPEltYWdlIHNyYz17c2hhcGVQYXR0ZXJufSBhbHQ9XCJTaGFwZVwiIC8+XG4gICAgICA8L0JveD4gKi99XG4gICAgPC9Cb3g+XG4gICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnRCb3h9PlxuICAgICAgPFRleHRGZWF0dXJlICBzeD17c3R5bGVzLnRlc3R9IHN1YlRpdGxlPXtkYXRhLnN1YlRpdGxlfSB0aXRsZT17ZGF0YS50aXRsZX0gLz5cblxuICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cbiAgICAgIHtkYXRhLmZlYXR1cmVzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgey8qIDxJbWFnZSBzcmM9e2l0ZW0uaW1nU3JjfSBhbHQ9e2l0ZW0uYWx0VGV4dH0gc3g9e3N0eWxlcy5pY29ufSAvPiAqL31cblxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgICAgICB7LyogPEhlYWRpbmcgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT57aXRlbS50aXRsZX08L0hlYWRpbmc+ICovfVxuICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuZGVzY3JpcHRpb259PntpdGVtLnRleHR9PC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICkpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvQm94PlxuICA8L0NvbnRhaW5lcj5cbjwvc2VjdGlvbj5cbik7XG59XG5cbmNvbnN0IHBsYXlQbHVzZSA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWigwKSBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVaKDApIHNjYWxlKDEuNSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuYDtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb3JlRmVhdHVyZToge1xuICAgIHB5OiBbMCwgbnVsbCwgbnVsbCwgMiwgbnVsbCwgN10sXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIH0sXG4gIGNvbnRhaW5lckJveDoge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiBbJ2ZsZXgtc3RhcnQnLCBudWxsLCBudWxsLCAnY2VudGVyJ10sXG4gICAganVzdGlmeUNvbnRlbnQ6IFsnZmxleC1zdGFydCcsIG51bGwsIG51bGwsICdzcGFjZS1iZXR3ZWVuJ10sXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCBudWxsLCAncm93J10sXG4gICAgcGI6ICczMHB4JyxcbiAgICBwdDogJzMwcHgnLFxuICAgIG10OiA3LFxuICAgIG1iOiAnLTEwMHB4JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjVBMEZGJyxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtQYXR0ZXJuQkd9KWAsXG4gICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgYm9yZGVyUmFkaXVzOiA2LFxuICB9LFxuICB0aHVtYm5haWw6IHtcbiAgICBtcjogWydhdXRvJywgbnVsbCwgbnVsbCwgNiwgNjAsIDg1XSxcbiAgICBvcmRlcjogWzIsIG51bGwsIG51bGwsIDBdLFxuICAgIG1sOiBbJ2F1dG8nLCBudWxsLCBudWxsLCAwXSxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICc+IGltZyc6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgekluZGV4OiAxLFxuICAgICAgaGVpZ2h0OiBbMzEwLCAnYXV0byddLFxuICAgIH0sXG4gIH0sXG4gIHNoYXBlQm94OiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYm90dG9tOiAtNjgsXG4gICAgbGVmdDogLTE2MCxcbiAgICB6SW5kZXg6IC0xLFxuICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcbiAgfSxcbiAgY29udGVudEJveDoge1xuICAgIHdpZHRoOiBbJzEwMCUnLCBudWxsLCBudWxsLCAzMTUsIDM5MCwgNDUwLCBudWxsLCA1MDBdLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgbWI6IFs3LCBudWxsLCA2MCwgMF0sXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdsZWZ0J10sXG4gIH0sXG4gIGdyaWQ6IHtcbiAgICBwcjogWzIsIDAsIG51bGwsIG51bGwsIDYsICc3MHB4J10sXG4gICAgcGw6IFsyLCAwXSxcbiAgICBwdDogWzIsIG51bGwsIG51bGwsIG51bGwsIDNdLFxuICAgIG14OiAnYXV0bycsXG4gICAgd2lkdGg6IFsnMTAwJScsIDM3MCwgNDIwLCAnMTAwJSddLFxuICAgIGdyaWRHYXA6IFsnMzVweCAwJywgbnVsbCwgbnVsbCwgbnVsbCwgJzUwcHggMCddLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFsncmVwZWF0KDEsMWZyKSddLFxuICB9LFxuICBjYXJkOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxuICB9LFxuXG4gIGljb246IHtcbiAgICB3aWR0aDogWyc0NXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzU1cHgnXSxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIG1yOiBbMywgbnVsbCwgbnVsbCwgbnVsbCwgNF0sXG4gIH0sXG4gIHdyYXBwZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBtdDogJy01cHgnLFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsICcxNHB4JywgMV0sXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjksXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgZm9udFNpemU6IDMsXG4gICAgICBjb2xvcjogJ3doaXRlJywgXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBtYjogWzIsIG51bGwsIDMsIDIsIDNdLFxuICAgIH0sXG4gICAgc3ViVGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgJzE0cHgnLCAxXSxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuOSxcbiAgICB9LFxuICB9LFxuICB2aWRlb1dyYXBwZXI6IHtcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHdpZHRoOiAnOTAwcHgnLFxuICAgICcmOmJlZm9yZSc6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBwYWRkaW5nVG9wOiAnNTYuMjUlJyxcbiAgICB9LFxuICAgIGlmcmFtZToge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgIH0sXG4gIH0sXG59O1xuXG5cblxuXG5cbi8vIC8qKiBAanN4IGpzeCAqL1xuLy8gaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuLy8gaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkLCBCb3gsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XG4vLyBpbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcbi8vIGltcG9ydCBUZXh0RmVhdHVyZSBmcm9tICdjb21wb25lbnRzL3RleHQtZmVhdHVyZSc7XG5cbi8vIGltcG9ydCBQYXR0ZXJuQkcgZnJvbSAnYXNzZXRzL3BhdHRlcm5CRy5wbmcnO1xuLy8gaW1wb3J0IEFycm93T2RkIGZyb20gJ2Fzc2V0cy9hcnJvd09kZC5zdmcnO1xuLy8gaW1wb3J0IEFycm93RXZlbiBmcm9tICdhc3NldHMvYXJyb3dFdmVuLnN2Zyc7XG5cbi8vIGNvbnN0IGRhdGEgPSBbXG4vLyAgIHtcbi8vICAgICBpbWFnZTogJ2h0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvN2UwZjU1XzlhNTk3MDY3YWU0MDQ0YThiMGY4ZDk4OTM0Y2IzZTRmfm12Mi5wbmcvdjEvZmlsbC93XzM0MSxoXzEwNCxhbF9jLHFfODUsdXNtXzAuNjZfMS4wMF8wLjAxLzNkcy1kYXJrLndlYnAnLFxuLy8gICAgIGxpbms6ICcjJyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGltYWdlOiAnaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS83ZTBmNTVfOWE1OTcwNjdhZTQwNDRhOGIwZjhkOTg5MzRjYjNlNGZ+bXYyLnBuZy92MS9maWxsL3dfMzQxLGhfMTA0LGFsX2MscV84NSx1c21fMC42Nl8xLjAwXzAuMDEvM2RzLWRhcmsud2VicCcsXG4vLyAgICAgbGluazogJyMnLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaW1hZ2U6ICdodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzdlMGY1NV85YTU5NzA2N2FlNDA0NGE4YjBmOGQ5ODkzNGNiM2U0Zn5tdjIucG5nL3YxL2ZpbGwvd18zNDEsaF8xMDQsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMS8zZHMtZGFyay53ZWJwJyxcbi8vICAgICBsaW5rOiAnIycsXG4vLyAgIH0sXG4vLyBdO1xuXG4vLyBjb25zdCBkYXRhMiA9IHtcbi8vICAgZGVzY3JpcHRpb246XG4vLyAgICAgXCJUaGUgJ0Nvdi1UZWNoIFZlbnRpbGF0aW9uIFN5c3RlbScgaXMgdGVzdGVkIGJ5IEludGVydGVrIGFjY29yZGluZyB0byBJRUMgNjA2MDEtMSBpbnRlcm5hdGlvbmFsIG1lZGljYWwgc2FmZXR5IHN0YW5kYXJkcy5cIixcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtGbG93KCkge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxzZWN0aW9uIHN4PXtzdHlsZXMud29ya2Zsb3d9PlxuLy8gICAgICAgPENvbnRhaW5lcj5cbi8vICAgICAgICAgPFNlY3Rpb25IZWFkZXJcbi8vICAgICAgICAgICBzbG9nYW49XCJGT1IgWU9VUiBTQUZFVFlcIlxuLy8gICAgICAgICAgIHRpdGxlPVwiTWVkaWNhbGx5IFRlc3RlZCBCeSBJbnRlcnRla1wiXG4vLyAgICAgICAgICAgaXNXaGl0ZT17dHJ1ZX1cbi8vICAgICAgICAgLz5cbi8vICAgICAgICAgPEJveD5cbi8vICAgICAgICAgPFRleHRGZWF0dXJlIGlzV2hpdGU9e3RydWV9XG4vLyAgICAgICAgICAgZGVzY3JpcHRpb249e2RhdGEyLmRlc2NyaXB0aW9ufVxuLy8gICAgICAgICAvPlxuLy8gICAgICAgICA8L0JveD5cbi8vICAgICAgICAgey8qIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XG4vLyAgICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXG4vLyAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0ga2V5PXtpdGVtLmlkfT5cbi8vICAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmljb25Cb3h9PntgMCR7aXRlbS5pZH1gfTwvQm94PlxuLy8gICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XG4vLyAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT57aXRlbS50aXRsZX08L0hlYWRpbmc+XG4vLyAgICAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy53cmFwcGVyLnN1YlRpdGxlfT57aXRlbS50ZXh0fTwvVGV4dD5cbi8vICAgICAgICAgICAgICAgPC9Cb3g+XG4vLyAgICAgICAgICAgICA8L0JveD5cbi8vICAgICAgICAgICApKX1cbi8vICAgICAgICAgPC9HcmlkPiAqL31cbi8vICAgICAgIDwvQ29udGFpbmVyPlxuLy8gICAgIDwvc2VjdGlvbj5cbi8vICAgKTtcbi8vIH1cblxuLy8gY29uc3Qgc3R5bGVzID0ge1xuLy8gICAvLyBkZXNjOiB7XG4vLyAgIC8vICAgZGlzcGxheTogJ2ZsZXgnLFxuLy8gICAvLyAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuLy8gICAvLyAgIGNvbG9yOiAnd2hpdGUnLFxuLy8gICAvLyAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4vLyAgIC8vIH0sXG4vLyAgIHdvcmtmbG93OiB7XG4vLyAgICAgYmFja2dyb3VuZENvbG9yOiAnIzI1QTBGRicsXG4vLyAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7UGF0dGVybkJHfSlgLFxuLy8gICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuLy8gICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxuLy8gICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuLy8gICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuLy8gICAgIG92ZXJmbG93OiAnaGlkZGVuJywgLy9jdXRcbi8vICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4vLyAgICAgZGlzcGxheTogJ2ZsZXgnLFxuLy8gICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuLy8gICAgIGNvbG9yOiAnd2hpdGUnLFxuLy8gICAgIHB5OiBbOCwgbnVsbCwgNywgbnVsbCwgbnVsbCwgNl0sXG4vLyAgICAgLy8gcHQ6IC01LFxuLy8gICAgIC8vIHBiOiAtNSxcbi8vICAgICBtdDogNyxcbi8vICAgfSxcbi8vICAgZ3JpZDoge1xuLy8gICAgIG1iOiAtMSxcbi8vICAgICBwdDogMCxcbi8vICAgICBncmlkR2FwOiBbXG4vLyAgICAgICAnMzVweCAwJyxcbi8vICAgICAgIG51bGwsXG4vLyAgICAgICAnNDVweCAzMHB4Jyxcbi8vICAgICAgIG51bGwsXG4vLyAgICAgICAnNTBweCAyNXB4Jyxcbi8vICAgICAgIG51bGwsXG4vLyAgICAgICBudWxsLFxuLy8gICAgICAgJzUwcHggNjVweCcsXG4vLyAgICAgXSxcbi8vICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXG4vLyAgICAgICAncmVwZWF0KDEsMWZyKScsXG4vLyAgICAgICBudWxsLFxuLy8gICAgICAgJ3JlcGVhdCgyLDFmciknLFxuLy8gICAgICAgbnVsbCxcbi8vICAgICAgICdyZXBlYXQoNCwxZnIpJyxcbi8vICAgICBdLFxuLy8gICB9LFxuLy8gICBjYXJkOiB7XG4vLyAgICAgZGlzcGxheTogJ2ZsZXgnLFxuLy8gICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuLy8gICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuLy8gICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCAnbGVmdCddLFxuLy8gICAgIHdpZHRoOiBbJzEwMCUnLCAnODAlJywgJzEwMCUnXSxcbi8vICAgICBteDogWydhdXRvJ10sXG4vLyAgICAgcHg6IFs0LCBudWxsLCBudWxsLCAwXSxcbi8vICAgICAnJjo6YmVmb3JlJzoge1xuLy8gICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4vLyAgICAgICBjb250ZW50OiAnXCJcIicsXG4vLyAgICAgICB0b3A6IDAsXG4vLyAgICAgICBsZWZ0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNzIsIG51bGwsIDkwXSxcbi8vICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuLy8gICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXG4vLyAgICAgICB3aWR0aDogMjE1LFxuLy8gICAgICAgaGVpZ2h0OiA2MCxcbi8vICAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMjBweCknOiB7XG4vLyAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbi8vICAgICAgIH0sXG4vLyAgICAgfSxcbi8vICAgICAnJjpudGgtb2YtdHlwZSgybi0xKTo6YmVmb3JlJzoge1xuLy8gICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7QXJyb3dPZGR9KWAsXG4vLyAgICAgfSxcbi8vICAgICAnJjpudGgtb2YtdHlwZSgybik6OmJlZm9yZSc6IHtcbi8vICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Fycm93RXZlbn0pYCxcbi8vICAgICAgIHRvcDogMTcsXG4vLyAgICAgfSxcbi8vICAgICAnJjpsYXN0LWNoaWxkOjpiZWZvcmUnOiB7XG4vLyAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4vLyAgICAgfSxcbi8vICAgfSxcblxuLy8gICBpY29uQm94OiB7XG4vLyAgICAgd2lkdGg6IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzcwcHgnXSxcbi8vICAgICBoZWlnaHQ6IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzcwcHgnXSxcbi8vICAgICBmbGV4U2hyaW5rOiAwLFxuLy8gICAgIGJvcmRlclJhZGl1czogWzE1LCBudWxsLCAyMywgbnVsbCwgbnVsbCwgMzBdLFxuLy8gICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbi8vICAgICBkaXNwbGF5OiAnZmxleCcsXG4vLyAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4vLyAgICAgbWI6IFs1LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA2XSxcbi8vICAgICBteDogWydhdXRvJywgbnVsbCwgMF0sXG4vLyAgICAgZm9udFNpemU6IFs2LCBudWxsLCA3LCBudWxsLCBudWxsLCAnMzBweCddLFxuLy8gICAgIGZvbnRXZWlnaHQ6IDcwMCxcbi8vICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4vLyAgICAgY29sb3I6ICcjMjM0NTgyJyxcbi8vICAgfSxcbi8vICAgd3JhcHBlcjoge1xuLy8gICAgIHdpZHRoOiAnMTAwJScsXG4vLyAgICAgZGlzcGxheTogJ2ZsZXgnLFxuLy8gICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuLy8gICAgIG10OiAnLTVweCcsXG4vLyAgICAgdGl0bGU6IHtcbi8vICAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgNCwgbnVsbCwgbnVsbCwgNV0sXG4vLyAgICAgICBjb2xvcjogJ3doaXRlJyxcbi8vICAgICAgIGxpbmVIZWlnaHQ6IFsxLjQsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDEuNTVdLFxuLy8gICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAyXSxcbi8vICAgICAgIG1iOiBbMiwgM10sXG4vLyAgICAgfSxcblxuLy8gICAgIHN1YlRpdGxlOiB7XG4vLyAgICAgICBmb250U2l6ZTogMSxcbi8vICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbi8vICAgICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCBudWxsLCAxLjksIDJdLFxuLy8gICAgICAgY29sb3I6ICd3aGl0ZScsXG4vLyAgICAgICBvcGFjaXR5OiAwLjc1LFxuLy8gICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA1XSxcbi8vICAgICB9LFxuLy8gICB9LFxuLy8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=