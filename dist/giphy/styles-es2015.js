(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@font-face {\n  font-family: \"Museo Slab\";\n  src: url(\"https://db.onlinewebfonts.com/t/196c0c5e71a561354be4ab3f1b12788a.eot\");\n  /* IE9*/\n  src: url(\"https://db.onlinewebfonts.com/t/196c0c5e71a561354be4ab3f1b12788a.eot?#iefix\") format(\"embedded-opentype\"), url(\"https://db.onlinewebfonts.com/t/196c0c5e71a561354be4ab3f1b12788a.woff2\") format(\"woff2\"), url(\"https://db.onlinewebfonts.com/t/196c0c5e71a561354be4ab3f1b12788a.woff\") format(\"woff\"), url(\"https://db.onlinewebfonts.com/t/196c0c5e71a561354be4ab3f1b12788a.ttf\") format(\"truetype\"), url(\"https://db.onlinewebfonts.com/t/196c0c5e71a561354be4ab3f1b12788a.svg#Museo Slab\") format(\"svg\");\n  /* iOS 4.1- */\n}\n* {\n  font-family: \"Museo Slab\", sans-serif;\n}\nhtml {\n  scroll-behavior: smooth;\n}\nbody {\n  margin: auto;\n  max-width: 1500px;\n  min-width: 320px;\n  background-color: #f7f7f7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9EOlxcYW1pdFxcZ2lwaHktc2VhcmNoLW1hc3Rlci9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQVkseUJBQUE7RUFDUixnRkFBQTtFQUFrRixPQUFBO0VBQ2xGLHFmQUFBO0VBSXNHLGFBQUE7QUNEMUc7QURJQTtFQUNJLHFDQUFBO0FDRko7QURJQTtFQUNJLHVCQUFBO0FDREo7QURHQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRpbmcgZXh0ZXJuYWwgZm9udCBgTXVzZW8gU2xhYmBcbkBmb250LWZhY2Uge2ZvbnQtZmFtaWx5OiBcIk11c2VvIFNsYWJcIjtcbiAgICBzcmM6IHVybChcImh0dHBzOi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMTk2YzBjNWU3MWE1NjEzNTRiZTRhYjNmMWIxMjc4OGEuZW90XCIpOyAvKiBJRTkqL1xuICAgIHNyYzogdXJsKFwiaHR0cHM6Ly9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8xOTZjMGM1ZTcxYTU2MTM1NGJlNGFiM2YxYjEyNzg4YS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCAvKiBJRTYtSUU4ICovXG4gICAgdXJsKFwiaHR0cHM6Ly9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8xOTZjMGM1ZTcxYTU2MTM1NGJlNGFiM2YxYjEyNzg4YS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgLyogY2hyb21lIGZpcmVmb3ggKi9cbiAgICB1cmwoXCJodHRwczovL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzE5NmMwYzVlNzFhNTYxMzU0YmU0YWIzZjFiMTI3ODhhLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgLyogY2hyb21lIGZpcmVmb3ggKi9cbiAgICB1cmwoXCJodHRwczovL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzE5NmMwYzVlNzFhNTYxMzU0YmU0YWIzZjFiMTI3ODhhLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgLyogY2hyb21lIGZpcmVmb3ggb3BlcmEgU2FmYXJpLCBBbmRyb2lkLCBpT1MgNC4yKyovXG4gICAgdXJsKFwiaHR0cHM6Ly9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8xOTZjMGM1ZTcxYTU2MTM1NGJlNGFiM2YxYjEyNzg4YS5zdmcjTXVzZW8gU2xhYlwiKSBmb3JtYXQoXCJzdmdcIik7IC8qIGlPUyA0LjEtICovXG59XG5cbip7XG4gICAgZm9udC1mYW1pbHk6IFwiTXVzZW8gU2xhYlwiICwgc2Fucy1zZXJpZjtcbn1cbmh0bWwge1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuYm9keXtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiAxNTAwcHg7XG4gICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJNdXNlbyBTbGFiXCI7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8xOTZjMGM1ZTcxYTU2MTM1NGJlNGFiM2YxYjEyNzg4YS5lb3RcIik7XG4gIC8qIElFOSovXG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8xOTZjMGM1ZTcxYTU2MTM1NGJlNGFiM2YxYjEyNzg4YS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCJodHRwczovL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzE5NmMwYzVlNzFhNTYxMzU0YmU0YWIzZjFiMTI3ODhhLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzE5NmMwYzVlNzFhNTYxMzU0YmU0YWIzZjFiMTI3ODhhLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8xOTZjMGM1ZTcxYTU2MTM1NGJlNGFiM2YxYjEyNzg4YS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIHVybChcImh0dHBzOi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMTk2YzBjNWU3MWE1NjEzNTRiZTRhYjNmMWIxMjc4OGEuc3ZnI011c2VvIFNsYWJcIikgZm9ybWF0KFwic3ZnXCIpO1xuICAvKiBpT1MgNC4xLSAqL1xufVxuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvIFNsYWJcIiwgc2Fucy1zZXJpZjtcbn1cblxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDE1MDBweDtcbiAgbWluLXdpZHRoOiAzMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\amit\giphy-search-master\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map