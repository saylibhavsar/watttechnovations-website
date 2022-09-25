webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/testimonial.js":
/*!*************************************!*\
  !*** ./src/sections/testimonial.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TestimonialCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/rating */ "./src/components/rating.js");
/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/button-group */ "./src/components/button-group.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_testimonial_Quote_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/testimonial/Quote.png */ "./src/assets/testimonial/Quote.png");
/* harmony import */ var assets_testimonial_Quote_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_Quote_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Sayli\\Downloads\\nextjs_landing_page\\nextjs_landing_page\\src\\sections\\testimonial.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */






var data = [{
  id: 1,
  title: 'A Boon To Mankind',
  description: 'Such an innovation is definitely a boon to mankind as one of the worst hurdles of working in a pandemic is wearing a PPE suit which is very exhausting for the doctors. It truly is a boon to mankind.',
  avatar: assets_testimonial_Quote_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  name: 'Dr. Ashutosh Gupta',
  designation: 'SMT K G Mittal Ayu Hospital, Mumbai',
  review: 4
}, {
  id: 2,
  title: 'A Must Buy',
  description: 'The Cov-tech Ventilation System is a blessing to all the front-line corona warriors. The unit is incredibly lightweight and effective in cooling. This is a must buy for all the  independent medical practitioners.',
  avatar: assets_testimonial_Quote_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  name: 'Dr. Poonam Sabhachandani',
  designation: 'Independent Medical Practitioner, Pune',
  review: 5
}, {
  id: 3,
  title: 'Comfortable To Use',
  description: 'After testing the device, I found out that there is no aerosol generation resulting from the device and the equipment is quite light in weight and small in size. Using this device was a very comfortable experience for me.',
  avatar: assets_testimonial_Quote_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  name: 'Dr. Kumar Mandhare',
  designation: 'Independent Medical Practitioner, Pune',
  review: 5
}, {
  id: 4,
  title: 'Significant Difference After Using The Device',
  description: 'There is a significant difference in comfort after using the device, the airflow is definitely adequate even in the afternoon heat. The preparation takes 5-10 minutes which is worth it as the person will be in the PPE kit for a long time.',
  avatar: assets_testimonial_Quote_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  name: 'Dr. Sumeet Jagtap',
  designation: 'Independent Medical Practitioner, Pune',
  review: 4
}];
var responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1619
    },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.

  },
  laptop: {
    breakpoint: {
      max: 1619,
      min: 1024
    },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.

  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 640
    },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.

  },
  mobile: {
    breakpoint: {
      max: 639,
      min: 0
    },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.

  }
};
function TestimonialCard() {
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    id: "testimonial",
    sx: {
      variant: 'section.testimonial'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    css: {
      textAlign: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Testimonial",
    title: "What Medical Professionals Say",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.carouselWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_5___default.a, {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: "",
    containerClass: "carousel-container",
    customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_button_group__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 30
      }
    }),
    dotListClass: "",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass: "",
    keyBoardControl: true,
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: "",
    slidesToSlide: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.reviewCard,
      key: "testimonial--key".concat(item.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_rating__WEBPACK_IMPORTED_MODULE_3__["default"], {
      rating: item.review,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 15
      }
    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      as: "h3",
      sx: styles.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 15
      }
    }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      sx: styles.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 15
      }
    }, item.description), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "card-footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 15
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: item.avatar,
      alt: "Client Image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 19
      }
    })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "reviewer-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      as: "h4",
      sx: styles.heading,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 19
      }
    }, item.name), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      sx: styles.designation,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 19
      }
    }, item.designation))));
  }))));
}
_c = TestimonialCard;
var styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: ['100%', null, null, '750px', '1000px', '1180px', null, 'calc(50% + 865px)'],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s'
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1
        }
      }
    }
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: ['30px 20px 35px', '30px 25px 35px', '30px 20px 35px', '35px 30px 40px 40px', '30px 30px 35px', '35px 30px 40px 40px'],
    bg: '#F9FBFD',
    textAlign: 'left',
    m: ['28px 5px 30px 5px', '28px 20px 30px 20px', '28px 15px 30px 15px', '28px 15px 30px 15px', '30px 20px 40px'],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)'
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex'
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0
        }
      },
      '.star': {
        color: 'primary',
        mr: '1px'
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px'
      }
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '40px',
          height: '30px',
          // borderRadius: '50%',
          objectFit: 'fit'
        }
      }
    }
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2]
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4
  }
};

var _c;

$RefreshReg$(_c, "TestimonialCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFsLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhdmF0YXIiLCJRdW90ZSIsIm5hbWUiLCJkZXNpZ25hdGlvbiIsInJldmlldyIsInJlc3BvbnNpdmUiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwic2xpZGVzVG9TbGlkZSIsImxhcHRvcCIsInRhYmxldCIsIm1vYmlsZSIsIlRlc3RpbW9uaWFsQ2FyZCIsInZhcmlhbnQiLCJ0ZXh0QWxpZ24iLCJzdHlsZXMiLCJjYXJvdXNlbFdyYXBwZXIiLCJtYXAiLCJpdGVtIiwicmV2aWV3Q2FyZCIsImhlYWRpbmciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm10IiwicHgiLCJ3aWR0aCIsIm1heFdpZHRoIiwibXIiLCJtbCIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwicCIsImJnIiwibSIsIm1iIiwidWwiLCJwbCIsImxpc3RTdHlsZSIsInN2ZyIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJmbGV4U2hyaW5rIiwiaW1nIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNYO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSxtQkFGVDtBQUdFQyxhQUFXLEVBQ1Qsd01BSko7QUFLRUMsUUFBTSxFQUFFQyxtRUFMVjtBQU1FQyxNQUFJLEVBQUUsb0JBTlI7QUFPRUMsYUFBVyxFQUFFLHFDQVBmO0FB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LFNBQUssRUFBRSxTQURJO0FBRVhPLGNBQVUsRUFBRSxLQUZEO0FBR1hELFlBQVEsRUFBRSxDQUhDO0FBSVhFLGNBQVUsRUFBRTtBQUpEO0FBckhBLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTFkMTRkZTI5MzY4YmQ3NjFmNGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEhlYWRpbmcsIFRleHQsIEJveCwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcbmltcG9ydCBSYXRpbmcgZnJvbSAnY29tcG9uZW50cy9yYXRpbmcnO1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwJztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tdWx0aS1jYXJvdXNlbCc7XG5cbmltcG9ydCBRdW90ZSBmcm9tICdhc3NldHMvdGVzdGltb25pYWwvUXVvdGUucG5nJztcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiAnQSBCb29uIFRvIE1hbmtpbmQnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1N1Y2ggYW4gaW5ub3ZhdGlvbiBpcyBkZWZpbml0ZWx5IGEgYm9vbiB0byBtYW5raW5kIGFzIG9uZSBvZiB0aGUgd29yc3QgaHVyZGxlcyBvZiB3b3JraW5nIGluIGEgcGFuZGVtaWMgaXMgd2VhcmluZyBhIFBQRSBzdWl0IHdoaWNoIGlzIHZlcnkgZXhoYXVzdGluZyBmb3IgdGhlIGRvY3RvcnMuIEl0IHRydWx5IGlzIGEgYm9vbiB0byBtYW5raW5kLicsXG4gICAgYXZhdGFyOiBRdW90ZSxcbiAgICBuYW1lOiAnRHIuIEFzaHV0b3NoIEd1cHRhJyxcbiAgICBkZXNpZ25hdGlvbjogJ1NNVCBLIEcgTWl0dGFsIEF5dSBIb3NwaXRhbCwgTXVtYmFpJyxcbiAgICByZXZpZXc6IDQsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogJ0EgTXVzdCBCdXknLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1RoZSBDb3YtdGVjaCBWZW50aWxhdGlvbiBTeXN0ZW0gaXMgYSBibGVzc2luZyB0byBhbGwgdGhlIGZyb250LWxpbmUgY29yb25hIHdhcnJpb3JzLiBUaGUgdW5pdCBpcyBpbmNyZWRpYmx5IGxpZ2h0d2VpZ2h0IGFuZCBlZmZlY3RpdmUgaW4gY29vbGluZy4gVGhpcyBpcyBhIG11c3QgYnV5IGZvciBhbGwgdGhlICBpbmRlcGVuZGVudCBtZWRpY2FsIHByYWN0aXRpb25lcnMuJyxcbiAgICBhdmF0YXI6IFF1b3RlLFxuICAgIG5hbWU6ICdEci4gUG9vbmFtIFNhYmhhY2hhbmRhbmknLFxuICAgIGRlc2lnbmF0aW9uOiAnSW5kZXBlbmRlbnQgTWVkaWNhbCBQcmFjdGl0aW9uZXIsIFB1bmUnLFxuICAgIHJldmlldzogNSxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiAnQ29tZm9ydGFibGUgVG8gVXNlJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdBZnRlciB0ZXN0aW5nIHRoZSBkZXZpY2UsIEkgZm91bmQgb3V0IHRoYXQgdGhlcmUgaXMgbm8gYWVyb3NvbCBnZW5lcmF0aW9uIHJlc3VsdGluZyBmcm9tIHRoZSBkZXZpY2UgYW5kIHRoZSBlcXVpcG1lbnQgaXMgcXVpdGUgbGlnaHQgaW4gd2VpZ2h0IGFuZCBzbWFsbCBpbiBzaXplLiBVc2luZyB0aGlzIGRldmljZSB3YXMgYSB2ZXJ5IGNvbWZvcnRhYmxlIGV4cGVyaWVuY2UgZm9yIG1lLicsXG4gICAgYXZhdGFyOiBRdW90ZSxcbiAgICBuYW1lOiAnRHIuIEt1bWFyIE1hbmRoYXJlJyxcbiAgICBkZXNpZ25hdGlvbjogJ0luZGVwZW5kZW50IE1lZGljYWwgUHJhY3RpdGlvbmVyLCBQdW5lJyxcbiAgICByZXZpZXc6IDUsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICB0aXRsZTogJ1NpZ25pZmljYW50IERpZmZlcmVuY2UgQWZ0ZXIgVXNpbmcgVGhlIERldmljZScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnVGhlcmUgaXMgYSBzaWduaWZpY2FudCBkaWZmZXJlbmNlIGluIGNvbWZvcnQgYWZ0ZXIgdXNpbmcgdGhlIGRldmljZSwgdGhlIGFpcmZsb3cgaXMgZGVmaW5pdGVseSBhZGVxdWF0ZSBldmVuIGluIHRoZSBhZnRlcm5vb24gaGVhdC4gVGhlIHByZXBhcmF0aW9uIHRha2VzIDUtMTAgbWludXRlcyB3aGljaCBpcyB3b3J0aCBpdCBhcyB0aGUgcGVyc29uIHdpbGwgYmUgaW4gdGhlIFBQRSBraXQgZm9yIGEgbG9uZyB0aW1lLicsXG4gICAgYXZhdGFyOiBRdW90ZSxcbiAgICBuYW1lOiAnRHIuIFN1bWVldCBKYWd0YXAnLFxuICAgIGRlc2lnbmF0aW9uOiAnSW5kZXBlbmRlbnQgTWVkaWNhbCBQcmFjdGl0aW9uZXIsIFB1bmUnLFxuICAgIHJldmlldzogNCxcbiAgfSxcbl07XG5cbmNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gIGRlc2t0b3A6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxNjE5IH0sXG4gICAgaXRlbXM6IDQsXG4gICAgc2xpZGVzVG9TbGlkZTogNCwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cbiAgfSxcbiAgbGFwdG9wOiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDE2MTksIG1pbjogMTAyNCB9LFxuICAgIGl0ZW1zOiAzLFxuICAgIHNsaWRlc1RvU2xpZGU6IDMsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gIH0sXG4gIHRhYmxldDoge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDY0MCB9LFxuICAgIGl0ZW1zOiAyLFxuICAgIHNsaWRlc1RvU2xpZGU6IDIsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gIH0sXG4gIG1vYmlsZToge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA2MzksIG1pbjogMCB9LFxuICAgIGl0ZW1zOiAxLFxuICAgIHNsaWRlc1RvU2xpZGU6IDEsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0aW1vbmlhbENhcmQoKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJ0ZXN0aW1vbmlhbFwiIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLnRlc3RpbW9uaWFsJyB9fT5cbiAgICAgIDxDb250YWluZXIgY3NzPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyIHNsb2dhbj1cIlRlc3RpbW9uaWFsXCIgdGl0bGU9XCJXaGF0IE1lZGljYWwgUHJvZmVzc2lvbmFscyBTYXlcIiAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Qm94IHN4PXtzdHlsZXMuY2Fyb3VzZWxXcmFwcGVyfT5cbiAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgYWRkaXRpb25hbFRyYW5zZnJvbT17MH1cbiAgICAgICAgICBhcnJvd3M9e2ZhbHNlfVxuICAgICAgICAgIGF1dG9QbGF5U3BlZWQ9ezMwMDB9XG4gICAgICAgICAgY2VudGVyTW9kZT17ZmFsc2V9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICBjb250YWluZXJDbGFzcz1cImNhcm91c2VsLWNvbnRhaW5lclwiXG4gICAgICAgICAgY3VzdG9tQnV0dG9uR3JvdXA9ezxCdXR0b25Hcm91cCAvPn1cbiAgICAgICAgICBkb3RMaXN0Q2xhc3M9XCJcIlxuICAgICAgICAgIGRyYWdnYWJsZVxuICAgICAgICAgIGZvY3VzT25TZWxlY3Q9e2ZhbHNlfVxuICAgICAgICAgIGluZmluaXRlPXt0cnVlfVxuICAgICAgICAgIGl0ZW1DbGFzcz1cIlwiXG4gICAgICAgICAga2V5Qm9hcmRDb250cm9sXG4gICAgICAgICAgbWluaW11bVRvdWNoRHJhZz17ODB9XG4gICAgICAgICAgcmVuZGVyQnV0dG9uR3JvdXBPdXRzaWRlXG4gICAgICAgICAgcmVuZGVyRG90c091dHNpZGU9e2ZhbHNlfVxuICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICAgICAgc2hvd0RvdHM9e2ZhbHNlfVxuICAgICAgICAgIHNsaWRlckNsYXNzPVwiXCJcbiAgICAgICAgICBzbGlkZXNUb1NsaWRlPXsxfVxuICAgICAgICA+XG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMucmV2aWV3Q2FyZH0ga2V5PXtgdGVzdGltb25pYWwtLWtleSR7aXRlbS5pZH1gfT5cbiAgICAgICAgICAgICAgPFJhdGluZyByYXRpbmc9e2l0ZW0ucmV2aWV3fSAvPlxuICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImgzXCIgc3g9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e2l0ZW0uZGVzY3JpcHRpb259PC9UZXh0PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5hdmF0YXJ9IGFsdD1cIkNsaWVudCBJbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdlci1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImg0XCIgc3g9e3N0eWxlcy5oZWFkaW5nfT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMuZGVzaWduYXRpb259PntpdGVtLmRlc2lnbmF0aW9ufTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgIDwvQm94PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBjYXJvdXNlbFdyYXBwZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJyxcbiAgICBtdDogJy0zMHB4JyxcbiAgICBweDogJzE1cHgnLFxuICAgICcuY2Fyb3VzZWwtY29udGFpbmVyJzoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1heFdpZHRoOiBbXG4gICAgICAgICcxMDAlJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgJzc1MHB4JyxcbiAgICAgICAgJzEwMDBweCcsXG4gICAgICAgICcxMTgwcHgnLFxuICAgICAgICBudWxsLFxuICAgICAgICAnY2FsYyg1MCUgKyA4NjVweCknLFxuICAgICAgXSxcbiAgICAgIG1yOiBbJ2F1dG8nLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnLTIyMHB4J10sXG4gICAgICBtbDogJ2F1dG8nLFxuICAgICAgJy5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtJzoge1xuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcbiAgICAgIH0sXG4gICAgICAnLnJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSg0biknOiB7XG4gICAgICAgIG9wYWNpdHk6ICcwLjUnLFxuICAgICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYyMHB4KSc6IHtcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICByZXZpZXdDYXJkOiB7XG4gICAgYm94U2hhZG93OiAnMHB4IDBweCAxcHggcmdiYSgzOCwgNzgsIDExOCwgMC4zNSknLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gICAgYm9yZGVyUmFkaXVzOiAnNnB4JyxcbiAgICBwOiBbXG4gICAgICAnMzBweCAyMHB4IDM1cHgnLFxuICAgICAgJzMwcHggMjVweCAzNXB4JyxcbiAgICAgICczMHB4IDIwcHggMzVweCcsXG4gICAgICAnMzVweCAzMHB4IDQwcHggNDBweCcsXG4gICAgICAnMzBweCAzMHB4IDM1cHgnLFxuICAgICAgJzM1cHggMzBweCA0MHB4IDQwcHgnLFxuICAgIF0sXG4gICAgYmc6ICcjRjlGQkZEJyxcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBtOiBbXG4gICAgICAnMjhweCA1cHggMzBweCA1cHgnLFxuICAgICAgJzI4cHggMjBweCAzMHB4IDIwcHgnLFxuICAgICAgJzI4cHggMTVweCAzMHB4IDE1cHgnLFxuICAgICAgJzI4cHggMTVweCAzMHB4IDE1cHgnLFxuICAgICAgJzMwcHggMjBweCA0MHB4JyxcbiAgICBdLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYm94U2hhZG93OiAnMHB4IDZweCAzMHB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSknLFxuICAgIH0sXG4gICAgJy5yYXRpbmcnOiB7XG4gICAgICBtYjogWzEsIG51bGwsIG51bGwsIDJdLFxuICAgICAgdWw6IHtcbiAgICAgICAgcGw6IDAsXG4gICAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgICAgICBtYjogMCxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgfSxcbiAgICAgIHN2Zzoge1xuICAgICAgICBtYXJnaW5SaWdodDogJzJweCcsXG4gICAgICAgICcmOmxhc3Qtb2YtdHlwZSc6IHtcbiAgICAgICAgICBtYXJnaW5SaWdodDogMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnLnN0YXInOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICAgIG1yOiAnMXB4JyxcbiAgICAgIH0sXG4gICAgICAnLnN0YXItbyc6IHtcbiAgICAgICAgY29sb3I6ICcjZGRkJyxcbiAgICAgICAgbXI6ICcxcHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcuY2FyZC1mb290ZXInOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIG1hcmdpblRvcDogWzUsIG51bGwsIG51bGwsICczM3B4J10sXG4gICAgICAnLmltYWdlJzoge1xuICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICBtcjogWzMsIG51bGwsIG51bGwsIDRdLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGltZzoge1xuICAgICAgICAgIHdpZHRoOiAnNDBweCcsXG4gICAgICAgICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgICAgICAgLy8gYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgICBvYmplY3RGaXQ6ICdmaXQnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiBbMSwgMl0sXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIG1iOiBbMywgbnVsbCwgbnVsbCwgJzIycHgnXSxcbiAgICBjb2xvcjogJ3RleHQnLFxuICAgIGxpbmVIZWlnaHQ6IDEuNixcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIGNvbG9yOiAndGV4dCcsXG4gICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIDJdLFxuICB9LFxuICBoZWFkaW5nOiB7XG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgbWI6ICczcHgnLFxuICAgIGNvbG9yOiAndGV4dCcsXG4gICAgbGluZUhlaWdodDogMS4zLFxuICB9LFxuICBkZXNpZ25hdGlvbjoge1xuICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgZm9udFdlaWdodDogJzUwMCcsXG4gICAgZm9udFNpemU6IDEsXG4gICAgbGluZUhlaWdodDogMS40LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=