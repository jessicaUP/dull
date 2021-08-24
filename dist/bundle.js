/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main/color.js":
/*!***************************!*\
  !*** ./src/main/color.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COLORS": () => (/* binding */ COLORS),
/* harmony export */   "randomColor": () => (/* binding */ randomColor),
/* harmony export */   "mixColor": () => (/* binding */ mixColor),
/* harmony export */   "mixTilesTwo": () => (/* binding */ mixTilesTwo),
/* harmony export */   "rgbCMYK": () => (/* binding */ rgbCMYK),
/* harmony export */   "cmykRGB": () => (/* binding */ cmykRGB),
/* harmony export */   "mixTilesThree": () => (/* binding */ mixTilesThree),
/* harmony export */   "mixTilesFour": () => (/* binding */ mixTilesFour)
/* harmony export */ });
var COLORS = ['#990033', '#993333', '#b30000', '#ff0000', '#cc2900', '#b35900', '#cca300', '#cccc00', '#999900', '#558000', '#b30059', '#b30000', '#ff7733', '#ff6600', '#ff9933', '#ffd633', '#ffcc00', '#e6e600', '#99cc00', '#666633', '#cc0066', '#ff3333', '#ff944d', '#ff9933', '#ffcc00', '#ffff00', '#ffff66', '#ccff33', '#669900', '#336600', '#ff0066', '#ff5050', '#ff6666', '#ff9966', '#ffcc66', '#ffff99', '#ccff66', '#99ff66', '#33cc33', '#339933', '#cc3399', '#ff3399', '#ff6699', '#ff9999', '#ffcc99', '#ffffcc', '#ccff99', '#99ff99', '#66ff66', '#00cc66', '#cc00cc', '#ff66ff', '#ff99ff', '#ffb3d1', '#ffe6f0', '#ffffff', '#ccffcc', '#99ffcc', '#00ff99', '#339966', '#993399', '#b300b3', '#d966ff', '#e6ccff', '#f2e6ff', '#e6f2ff', '#e6ffff', '#66ffff', '#00cc99', '#009999', '#9900cc', '#cc33ff', '#cc66ff', '#cc99ff', '#e6ccff', '#b3d7ff', '#b3ffff', '#00e6e6', '#00b3b3', '#336699', '#6600cc', '#9933ff', '#9966ff', '#9999ff', '#b3b3ff', '#90c0f0', '#80ccff', '#73b4fa', '#4d4dff', '#003d99', '#4d0099', '#7a00cc', '#a366ff', '#6666ff', '#8080ff', '#007bff', '#0099ff', '#007acc', '#0000cc', '#000080'];
function randomColor() {
  var num = Math.floor(Math.random() * 100);
  var color = COLORS[num];
  return color;
}
function mixColor(color1, color2) {
  "";
  var c1 = chroma(color1);
  var c2 = chroma(color2);
  return chroma.mix(c1, c2).hex();
}

function black(num1, num2, step) {
  // let check = ((num1 * (step - 1)) + num2) / step
  var check = (num1 / step + num2 / step) * step;
  debugger; // let check = (num1) + (num2);

  if (check < 0) {
    return 0;
  } else if (check > 1) {
    return 1;
  } else {
    return check;
  } // if (check > 255) {
  //   return 255
  // } else if (check < 0) {
  //   return 0
  // } else {
  //   return check
  // }

}

function avg(num1, num2, step) {
  // let check = num2 - (num1);
  // if (check > 255) {
  //   return 255
  // } else if (check < 0) {
  //   return 0
  // } else {
  //   return check
  // }
  return (num1 * (step - 1) + num2) / step; // let check = (num1 / step) + (num2 / step);
  // // let check = (num1) + (num2);
  // if (check > 100) {
  //   return 100
  // } else {
  //   return check
  // }
}

function mixTilesTwo(hex1, hex2) {
  var color1 = $.Color(hex1).rgba();
  var color2 = $.Color(hex2).rgba();
  var r = color1[0] + color2[0];
  var g = avg(color1[1], color2[1]);
  var b = avg(color1[2], color2[2]); // let rgb = `rgb(${r}, ${g}, ${b})`

  return rgb;
}
function rgbCMYK(rgb) {
  var red = rgb[0] / 255;
  var green = rgb[1] / 255;
  var blue = rgb[2] / 255;
  var k = 1 - Math.max(red, green, blue);
  var c = (1 - (red - k)) / (1 - k);
  var m = (1 - (green - k)) / (1 - k);
  var y = (1 - (blue - k)) / (1 - k);
  return [c, m, y, k];
}
function cmykRGB(cmyk) {
  var r = 255 * (1 - cmyk[0]) * (1 - cmyk[3]);
  var g = 255 * (1 - cmyk[1]) * (1 - cmyk[3]);
  var b = 255 * (1 - cmyk[2]) * (1 - cmyk[3]);
  return [r, g, b];
}
function mixTilesThree(c1, c2, step) {
  var color1 = rgbCMYK($.Color(c1).rgba());
  var color2 = rgbCMYK($.Color(c2).rgba());
  debugger;
  var c = avg(color1[0], color2[0], step);
  var m = avg(color1[1], color2[1], step);
  var y = avg(color1[2], color2[2], step);
  var k = black(color1[3], color2[3], step);
  var rgb = cmykRGB([c, m, y, k]);
  var rgbStr = "rgb(".concat(rgb[0], ", ").concat(rgb[1], ", ").concat(rgb[2], ")");
  return rgbStr;
}
function mixTilesFour(c1, c2, step) {
  var color1 = rgbCMYK($.Color(c1).rgba());
  var color2 = rgbCMYK($.Color(c2).rgba());
  debugger;
  C = C + color2[0] / step;
  M = M + color2[1] / step;
  Y = Y + color2[2] / step; // let a = 1

  var rgb = cmykRGB([C, M, Y, K]);
  var rgbStr = "rgb(".concat(rgb[0], ", ").concat(rgb[1], ", ").concat(rgb[2], ")");
  return rgbStr;
}

/***/ }),

/***/ "./src/mixPathGame/mixPathGame.js":
/*!****************************************!*\
  !*** ./src/mixPathGame/mixPathGame.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMixGrid": () => (/* binding */ createMixGrid)
/* harmony export */ });
/* harmony import */ var _main_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main/color */ "./src/main/color.js");

var tileGrid;
var count = 1;
var selectedTiles = [];
var optionTiles = [];
var mixedTiles = [];
var currentTile;
var allTiles = {};
var checkColor = true;
var currentColor;
var C,
    M,
    Y,
    K = 0;

function randomPos() {
  var x = Math.floor(Math.random() * 10) + 1;
  var y = Math.floor(Math.random() * 10) + 1;
  var coor = "".concat(x, "-").concat(y);
  return {
    coor: coor,
    x: x,
    y: y
  };
}

function posObject(coor) {
  var coorArr = coor.split('-');
  return {
    coor: coor,
    x: coorArr[0],
    y: coorArr[1]
  };
}

function setFirstColor(hex1) {
  var step = $.Color(hex1).rgba();
  var color = (0,_main_color__WEBPACK_IMPORTED_MODULE_0__.rgbCMYK)(step);
  C = color[0];
  M = color[1];
  Y = color[2];
  debugger;
  currentColor = step;
}

function cmykMax() {
  if (C > 1) C = 1;
  if (M > 1) M = 1;
  if (Y > 1) Y = 1;
}

function mixTile() {
  debugger;
  var clickedCoor = this.getAttribute('coor');
  var check = optionTiles.some(function (coor) {
    return coor === clickedCoor;
  });

  if (check) {
    clearStyle();
    var colorOne = allTiles[currentTile.coor].ele.getAttribute('colorId');

    if (checkColor) {
      setFirstColor(colorOne);
      checkColor = false;
    }

    var colorTwo = this.getAttribute('colorId');
    colorTwo = (0,_main_color__WEBPACK_IMPORTED_MODULE_0__.rgbCMYK)($.Color(colorTwo).rgba());
    count = count + 1;
    debugger;
    C = (C * (count - 1) + colorTwo[0]) / count;
    M = (M * (count - 1) + colorTwo[1]) / count;
    Y = (Y * (count - 1) + colorTwo[2]) / count;
    cmykMax(); // let rgb = mixTilesFour(colorOne, colorTwo, count)

    var rgb = (0,_main_color__WEBPACK_IMPORTED_MODULE_0__.cmykRGB)([C, M, Y, K]);
    var rgbStr = "rgb(".concat(rgb[0], ", ").concat(rgb[1], ", ").concat(rgb[2], ")"); //current tile
    // let colorOne = allTiles[currentTile.coor].ele.getAttribute('colorId')
    // let color1 = $.Color(colorOne);
    // console.log(`COLOR1  ${color1}`);
    // //clickedtile
    // let color2 = $.Color(this.getAttribute('colorId'));
    // console.log(`COLOR2 ALPHA  ${color2.toHexString()}`);
    // //set color alpha value
    // color1 = color1.alpha(color1.alpha());
    // color2 = color2.alpha(1/count);
    // //Mixing colors by parts
    // let finalColor = Color_mixer.mix(color1, color2);
    // // for ( let i = 1; i <= count; i++ ) {
    // //   finalColor = finalColor.alpha(finalColor.alpha());
    // //   finalColor = Color_mixer.mix(color1, finalColor)
    // // }
    // console.log(count)
    // count += 1;
    // //set background color to result color

    this.style['background-color'] = rgbStr;
    currentTile = posObject(this.getAttribute('coor'));
    markOptions();
  }
}

function createMixGrid() {
  tileGrid = document.querySelector('.tile-grid');
  var colorCount = 0;

  for (var x = 1; x <= 10; x++) {
    for (var y = 1; y <= 10; y++) {
      var colorId = _main_color__WEBPACK_IMPORTED_MODULE_0__.COLORS[colorCount];
      var coor = "".concat(x, "-").concat(y);
      var tile = document.createElement('div');
      tile.setAttribute('id', colorCount);
      tile.setAttribute('colorId', colorId);
      tile.setAttribute('coor', coor);
      tile.setAttribute('class', 'mix-tile');
      tile.style['background-color'] = colorId;
      tile.style['aspect-ratio'] = 1;
      tile.addEventListener('click', mixTile);
      var info = {
        ele: tile,
        x: x,
        y: y
      };
      allTiles[coor] = info;
      tileGrid.appendChild(tile);
      colorCount++;
    }
  }

  ;
  tileGrid.style.display = 'tile-grid';
  tileGrid.style['grid-gap'] = '2px';
  tileGrid.style['grid-template-columns'] = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
  currentTile = randomPos();
  console.log(currentTile);
  markOptions();
  console.log(allTiles);
}
var OPTIONS = [[-1, 0], [1, 0], [0, -1], [0, 1]];

function markOptions() {
  var tile = allTiles[currentTile.coor];
  console.log(tile);
  tile.ele.style.border = '8px inset white';
  var newOptionTiles = [];
  OPTIONS.forEach(function (pos) {
    var newX = pos[0] + tile.x;
    var newY = pos[1] + tile.y;

    if (newX <= 10 && newX > 0 && newY <= 10 && newY > 0) {
      var newCoor = "".concat(newX, "-").concat(newY);
      newOptionTiles.push(newCoor);
      var optionTile = allTiles[newCoor].ele;
      optionTile.style.border = '1px solid white';
    }
  });
  optionTiles = newOptionTiles;
}

function clearStyle() {
  optionTiles.forEach(function (coor) {
    var oldTile = allTiles[coor].ele;
    oldTile.style.border = 'none';
  });
}

function getTilePosition() {}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixPathGame_mixPathGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixPathGame/mixPathGame */ "./src/mixPathGame/mixPathGame.js");

document.addEventListener('DOMContentLoaded', function () {
  // let yellow = chroma('#F5FF00')
  // let blue = chroma('#00C2FF')
  // let final = chroma.mix(yellow, blue)
  // console.log(final)
  (0,_mixPathGame_mixPathGame__WEBPACK_IMPORTED_MODULE_0__.createMixGrid)(); // createSnakeGrid();
  // createMatchGrid();
  // window.requestAnimationFrame(main);
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map