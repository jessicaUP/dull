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
/* harmony export */   "C": () => (/* binding */ C),
/* harmony export */   "M": () => (/* binding */ M),
/* harmony export */   "Y": () => (/* binding */ Y),
/* harmony export */   "K": () => (/* binding */ K),
/* harmony export */   "randomColor": () => (/* binding */ randomColor),
/* harmony export */   "rgbCMYK": () => (/* binding */ rgbCMYK),
/* harmony export */   "cmykRGB": () => (/* binding */ cmykRGB),
/* harmony export */   "cmykMax": () => (/* binding */ cmykMax),
/* harmony export */   "setFirstColor": () => (/* binding */ setFirstColor),
/* harmony export */   "addColor": () => (/* binding */ addColor)
/* harmony export */ });
var COLORS = ['rgb(153, 0, 51)', 'rgb(153, 51, 51)', 'rgb(179, 0, 0)', 'rgb(255, 0, 0)', 'rgb(204, 41, 0)', 'rgb(179, 89, 0)', 'rgb(204, 163, 0)', 'rgb(204, 204, 0)', 'rgb(153, 153, 0)', 'rgb(85, 128, 0)', 'rgb(179, 0, 89)', 'rgb(179, 0, 0)', 'rgb(255, 119, 51)', 'rgb(255, 102, 0)', 'rgb(255, 153, 51)', 'rgb(255, 214, 51)', 'rgb(255, 204, 0)', 'rgb(230, 230, 0)', 'rgb(153, 204, 0)', 'rgb(102, 102, 51)', 'rgb(204, 0, 102)', 'rgb(255, 51, 51)', 'rgb(255, 148, 77)', 'rgb(255, 153, 51)', 'rgb(255, 204, 0)', 'rgb(255, 255, 0)', 'rgb(255, 255, 102)', 'rgb(204, 255, 51)', 'rgb(102, 153, 0)', 'rgb(51, 102, 0)', 'rgb(255, 0, 102)', 'rgb(255, 80, 80)', 'rgb(255, 102, 102)', 'rgb(255, 153, 102)', 'rgb(255, 204, 102)', 'rgb(255, 255, 153)', 'rgb(204, 255, 102)', 'rgb(153, 255, 102)', 'rgb(51, 204, 51)', 'rgb(51, 153, 51)', 'rgb(204, 51, 153)', 'rgb(255, 51, 153)', 'rgb(255, 102, 153)', 'rgb(255, 153, 153)', 'rgb(255, 204, 153)', 'rgb(255, 255, 204)', 'rgb(204, 255, 153)', 'rgb(153, 255, 153)', 'rgb(102, 255, 102)', 'rgb(0, 204, 102)', 'rgb(204, 0, 204)', 'rgb(255, 102, 255)', 'rgb(255, 153, 255)', 'rgb(255, 179, 209)', 'rgb(255, 230, 240)', 'rgb(255, 255, 255)', 'rgb(204, 255, 204)', 'rgb(153, 255, 204)', 'rgb(0, 255, 153)', 'rgb(51, 153, 102)', 'rgb(153, 51, 153)', 'rgb(179, 0, 179)', 'rgb(217, 102, 255)', 'rgb(230, 204, 255)', 'rgb(242, 230, 255)', 'rgb(230, 242, 255)', 'rgb(230, 255, 255)', 'rgb(102, 255, 255)', 'rgb(0, 204, 153)', 'rgb(0, 153, 153)', 'rgb(153, 0, 204)', 'rgb(204, 51, 255)', 'rgb(204, 102, 255)', 'rgb(204, 153, 255)', 'rgb(230, 204, 255)', 'rgb(179, 215, 255)', 'rgb(179, 255, 255)', 'rgb(0, 230, 230)', 'rgb(0, 179, 179)', 'rgb(51, 102, 153)', 'rgb(102, 0, 204)', 'rgb(153, 51, 255)', 'rgb(153, 102, 255)', 'rgb(153, 153, 255)', 'rgb(179, 179, 255)', 'rgb(144, 192, 240)', 'rgb(128, 204, 255)', 'rgb(115, 180, 250)', 'rgb(77, 77, 255)', 'rgb(0, 61, 153)', 'rgb(77, 0, 153)', 'rgb(122, 0, 204)', 'rgb(163, 102, 255)', 'rgb(102, 102, 255)', 'rgb(128, 128, 255)', 'rgb(0, 123, 255)', 'rgb(0, 153, 255)', 'rgb(0, 122, 204)', 'rgb(0, 0, 204)', 'rgb(0, 0, 128)'];
var C,
    M,
    Y,
    K = 0;
function randomColor() {
  var num = Math.floor(Math.random() * 100);
  var color = COLORS[num];
  return color;
}

function colorArr(rgbColor) {
  // 'rgb(r, g, b)'
  var step = rgbColor.split('(')[1].split(')')[0].split(', ');
  return step.map(function (num) {
    return parseInt(num);
  });
}

function avg(num1, num2, step) {
  return (num1 * (step - 1) + num2) / step;
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
function cmykMax() {
  if (C > 1) C = 1;
  if (M > 1) M = 1;
  if (Y > 1) Y = 1;
}
function setFirstColor(rgbColor) {
  // let step = $.Color(hex1).rgba();
  // MAKE INTO ARRAY OF VALUES R-G-B
  var step = colorArr(rgbColor);
  var color = rgbCMYK(step);
  C = color[0];
  M = color[1];
  Y = color[2];
  return step;
}
function addColor(rgbColor, count) {
  var cmykColor = rgbCMYK(colorArr(rgbColor));
  C = (C * (count - 1) + cmykColor[0]) / count;
  Y = (Y * (count - 1) + cmykColor[2]) / count;
  M = (M * (count - 1) + cmykColor[1]) / count;
  cmykMax();
  return cmykRGB([C, M, Y, K]);
}

/***/ }),

/***/ "./src/main/helper.js":
/*!****************************!*\
  !*** ./src/main/helper.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomNum": () => (/* binding */ randomNum),
/* harmony export */   "posObject": () => (/* binding */ posObject),
/* harmony export */   "sameArray": () => (/* binding */ sameArray),
/* harmony export */   "styleFinish": () => (/* binding */ styleFinish),
/* harmony export */   "clearStyle": () => (/* binding */ clearStyle),
/* harmony export */   "optionStyle": () => (/* binding */ optionStyle)
/* harmony export */ });
/* harmony import */ var _mixPathGame_mixPathGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixPathGame/mixPathGame */ "./src/mixPathGame/mixPathGame.js");

var up = [-1, 0];
var down = [1, 0];
var left = [0, -1];
var right = [0, 1];
function randomNum(num) {
  return Math.floor(Math.random() * num);
}
function posObject(coor) {
  var coorArr = coor.split('-');
  return {
    coor: coor,
    x: coorArr[0],
    y: coorArr[1]
  };
}
function sameArray(arr1, arr2) {
  return arr1.every(function (val, index) {
    return val === arr2[index];
  });
} // STYLING

function styleFinish(finishTile) {
  var finishEle = _mixPathGame_mixPathGame__WEBPACK_IMPORTED_MODULE_0__.allTiles[finishTile].ele;
  finishEle.style.border = '1px solid transparent';
  finishEle.style['border-radius'] = '100%';
  finishEle.setAttribute('class', 'blink');
}
function clearStyle(tiles, currentTile, finishTile) {
  var updateCheck = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  tiles.forEach(function (coor) {
    var oldTile = _mixPathGame_mixPathGame__WEBPACK_IMPORTED_MODULE_0__.allTiles[coor].ele;

    if (coor !== finishTile) {
      if (oldTile.firstChild) {
        oldTile.removeChild(oldTile.firstChild);
      } // oldTile.style.border = '1px solid black';


      oldTile.style['border-radius'] = '0';
    }
  });

  if (updateCheck) {
    var prev = _mixPathGame_mixPathGame__WEBPACK_IMPORTED_MODULE_0__.allTiles[currentTile.coor].ele;
    prev.style['border-radius'] = '100%';
  }
}
function optionStyle(coor) {
  var radiusStr;

  if (sameArray(coor, up)) {
    radiusStr = '100% 100% 0 0'; // direction = up;
  } else if (sameArray(coor, right)) {
    radiusStr = '0 100% 100% 0'; // direction = right;
  } else if (sameArray(coor, down)) {
    radiusStr = '0 0 100% 100%'; // direction = down;
  } else if (sameArray(coor, left)) {
    radiusStr = '100% 0 0 100%'; // direction = left;
  }

  radiusStr = '0';
  return radiusStr;
}

/***/ }),

/***/ "./src/mixPathGame/mixPathGame.js":
/*!****************************************!*\
  !*** ./src/mixPathGame/mixPathGame.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allTiles": () => (/* binding */ allTiles),
/* harmony export */   "OPTIONS": () => (/* binding */ OPTIONS),
/* harmony export */   "startGame": () => (/* binding */ startGame),
/* harmony export */   "resetGrid": () => (/* binding */ resetGrid)
/* harmony export */ });
/* harmony import */ var _main_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main/color */ "./src/main/color.js");
/* harmony import */ var _main_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main/helper */ "./src/main/helper.js");

 // BOARD

var tileGrid;
var body;
var allTiles = {};
var checkColor = true; // GAMEPLAY

var selectedTiles = [];
var path;
var startTile;
var finishTile;
var targetColor;
var level = 1;
var lives = 3;
var OPTIONS = [{
  dir: [-1, 0],
  name: 'up'
}, {
  dir: [1, 0],
  name: 'down'
}, {
  dir: [0, -1],
  name: 'left'
}, {
  dir: [0, 1],
  name: 'right'
}]; // CURRENT MOVE

var currentTile;
var currentColor;
var count = 1;
var optionTiles = []; // let direction;
// let mixedTiles = [];
// DOM LOADED START

function startGame() {
  // CREATE GRID
  setNewGrid(); // ADD RESET... for now

  var reset = document.querySelector('.reset');
  reset.addEventListener('click', resetGrid);
}

function setNewGrid() {
  createMixGrid();
  setPath();
  resetVariables();
  optionTiles = markOptions();
}

;

function createMixGrid() {
  body = document.querySelector('body'); // tileGrid = document.querySelector('.tile-grid');

  var cont1 = document.createElement('div');
  cont1.setAttribute('class', "level-cont");
  cont1.setAttribute('id', "level-".concat(level));
  body.appendChild(cont1);
  var cont2 = document.createElement('div');
  cont1.appendChild(cont2);
  cont2.setAttribute('class', 'tile-grid');
  cont2.setAttribute('id', "group-".concat(level));
  var cont3 = document.createElement('div');
  cont3.setAttribute('class', 'level-text');
  cont3.innerHTML = "".concat(level);
  cont1.appendChild(cont3); // tileGrid.appendChild(cont)

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
      tile.style['background-color'] = colorId; // tile.style.border = '1px solid black';

      tile.style['aspect-ratio'] = 1;
      tile.addEventListener('click', mixTile);
      var info = {
        ele: tile,
        coor: coor,
        x: x,
        y: y
      };
      allTiles[coor] = info;
      cont2.appendChild(tile);
      colorCount++;
    }
  }

  ;
  cont2.style.display = 'tile-grid';
  cont2.style['grid-gap'] = '4px';
  cont2.style['grid-template-columns'] = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'; // SET START TILE 
  // setPath();
  // markOptions();
}

function findPath() {
  var mixedColor;
  currentColor = (0,_main_color__WEBPACK_IMPORTED_MODULE_0__.setFirstColor)(currentColor);

  while (count <= level) {
    optionTiles = nextMoveOptions(false);
    var next = optionTiles[(0,_main_helper__WEBPACK_IMPORTED_MODULE_1__.randomNum)(optionTiles.length)]; // return next = `${newX}-${newY}`

    selectedTiles.push(next);
    var nextColor = allTiles[next].ele.getAttribute('colorId');
    mixedColor = (0,_main_color__WEBPACK_IMPORTED_MODULE_0__.addColor)(nextColor, count);
    currentTile = (0,_main_helper__WEBPACK_IMPORTED_MODULE_1__.posObject)(next);
    count = count + 1; // count + 1;
  }

  targetColor = "rgb(".concat(parseInt(mixedColor[0]), ", ").concat(parseInt(mixedColor[1]), ", ").concat(parseInt(mixedColor[2]), ")");
  finishTile = currentTile.coor; // let finishEle = allTiles[finishTile].ele;
  // finishEle.style['border-radius'] = '100%';
  // finishEle.style.border = 'none'

  var body = document.querySelector('body');
  body.style['background-color'] = targetColor; // RESET VARIABLES FOR GAMEPLAY
  // currentTile = startTile;
  // count = 1
  // optionTiles = [startTile];

  path = selectedTiles; // selectedTiles = [currentTile.coor];
  // C = 0;
  // M = 0;
  // Y = 0;

  resetVariables();
}

function setPath() {
  // FIRST POSITION
  var x = (0,_main_helper__WEBPACK_IMPORTED_MODULE_1__.randomNum)(10) + 1;
  var y = (0,_main_helper__WEBPACK_IMPORTED_MODULE_1__.randomNum)(10) + 1;
  var coor = "".concat(x, "-").concat(y);
  var coorObj = {
    coor: coor,
    x: x,
    y: y
  };
  currentTile = coorObj;
  startTile = coorObj;
  selectedTiles.push(coor);
  currentColor = allTiles[coor].ele.getAttribute('colorId'); // FIND PATH

  findPath(); // RETURN START TILE
  // return coorObj;
}

function checkWinLose(color) {
  if (targetColor === color && count - 1 === level) {
    Object.values(allTiles).forEach(function (tile) {
      var coor = tile.coor,
          ele = tile.ele;

      if (!selectedTiles.includes(coor)) {
        ele.style.border = 'none';
        ele.style['background-color'] = color;
      }
    });
    level = level + 1;
    lives = lives + 1;
    var finalEle = allTiles[finishTile].ele;
    finalEle.classList.remove('blink');
    finalEle.style.border = 'none';
    finalEle.style['border-radius'] = '0';
    finalEle.removeChild(finalEle.firstChild); // selectedTiles = [];

    count = 1;
    setNewGrid();
    document.querySelector("#group-".concat(level)).scrollIntoView({
      behavior: 'smooth'
    });
    return true;
  } else if (targetColor !== color && count - 1 === level) {
    debugger;
    allTiles[currentTile.coor].innerHTML = 'x';
    return false;
  }
}

function mixTile() {
  var clickedCoor = this.getAttribute('coor');
  var check = optionTiles.some(function (coor) {
    return coor === clickedCoor;
  });

  if (check) {
    (0,_main_helper__WEBPACK_IMPORTED_MODULE_1__.clearStyle)(optionTiles, currentTile, finishTile, true);
    selectedTiles.push(clickedCoor);
    var colorOne = allTiles[currentTile.coor].ele.getAttribute('colorId');

    if (checkColor) {
      currentColor = (0,_main_color__WEBPACK_IMPORTED_MODULE_0__.setFirstColor)(colorOne);
      checkColor = false;
    }

    var colorTwo = this.getAttribute('colorId'); // ADD COLOR RETURN MIXED RGB

    var rgb = (0,_main_color__WEBPACK_IMPORTED_MODULE_0__.addColor)(colorTwo, count);
    var rgbStr = "rgb(".concat(parseInt(rgb[0]), ", ").concat(parseInt(rgb[1]), ", ").concat(parseInt(rgb[2]), ")");
    count = count + 1; // SET NEW COLOR & MARK NEXT OPTIONS

    this.style['background-color'] = rgbStr; // CHECK WIN or LOSE

    optionTiles.forEach(function (coor) {
      var oldOption = allTiles[coor].ele;

      if (coor !== currentTile) {// oldOption.style.border = '1px solid black'
      } else {
        oldOption.style.border = 'none';
      }
    });

    if (!checkWinLose(rgbStr)) {
      currentTile = (0,_main_helper__WEBPACK_IMPORTED_MODULE_1__.posObject)(this.getAttribute('coor'));
      optionTiles = markOptions();
    }
  }
}

function resetGrid() {
  var prev = document.querySelector("#level-".concat(level));
  prev.remove();
  createMixGrid();
  resetVariables();
  optionTiles = markOptions(); // console.log('clicked')
}

function resetVariables() {
  currentTile = startTile;
  count = 1; // path = selectedTiles;
  // selectedTiles = [startTile];

  selectedTiles = [currentTile.coor];
  var color = allTiles[currentTile.coor].ele.getAttribute('colorId');
  currentColor = (0,_main_color__WEBPACK_IMPORTED_MODULE_0__.setFirstColor)(color);
  (0,_main_helper__WEBPACK_IMPORTED_MODULE_1__.styleFinish)(finishTile);
}

function markOptions() {
  var tile = allTiles[currentTile.coor];
  tile.ele.style['border-radius'] = '100%';
  return nextMoveOptions(true);
}

function nextMoveOptions(styleCheck) {
  var newOptionTiles = [];
  var tile = allTiles[currentTile.coor];
  Object.values(OPTIONS).forEach(function (pos) {
    var newX = pos.dir[0] + tile.x;
    var newY = pos.dir[1] + tile.y;
    var newCoor = "".concat(newX, "-").concat(newY); // SHOULD CREATE ARROW INSTEAD
    // let arrow = document.querySelector(`#${pos.name}`);

    var arrow = document.createElement('DIV');
    arrow.setAttribute('id', "".concat(pos.name));
    arrow.setAttribute('class', 'arrow-icons');

    if (newX <= 10 && newX > 0 && newY <= 10 && newY > 0 && !selectedTiles.includes(newCoor)) {
      if (!styleCheck) {
        newOptionTiles.push(newCoor);
      } else if (newCoor !== finishTile) {
        newOptionTiles.push(newCoor);
        var optionTile = allTiles[newCoor].ele; // [[-1, 0], [1, 0], [0, -1], [0, 1]];

        var radiusStr = (0,_main_helper__WEBPACK_IMPORTED_MODULE_1__.optionStyle)(pos.dir); // let arrow = <i class="fas fa-caret-up"></i>

        optionTile.appendChild(arrow);
        arrow.style.display = 'flex'; // arrow.style['color'] = targetColor;

        optionTile.style['border-radius'] = radiusStr;
        optionTile.style.border = 'none'; // optionTile.style.border = '1px solid white'
      } else if (count === level && newCoor === finishTile) {
        newOptionTiles.push(newCoor); // newOptionTiles = [newCoor];

        var _optionTile = allTiles[newCoor].ele; // optionTile.style.border = '1px solid transparent';

        _optionTile.style['border-radius'] = '100%';
        var star = document.createElement('DIV');
        star.innerHTML = '★';

        _optionTile.appendChild(star);
      }
    }
  });

  if (newOptionTiles.includes(finishTile)) {
    (0,_main_helper__WEBPACK_IMPORTED_MODULE_1__.clearStyle)(newOptionTiles, currentTile, finishTile);
    newOptionTiles = [finishTile];
  } else if (count > level) {
    (0,_main_helper__WEBPACK_IMPORTED_MODULE_1__.clearStyle)(newOptionTiles, currentTile, finishTile);
    newOptionTiles = [];
  }

  return newOptionTiles;
}

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
  (0,_mixPathGame_mixPathGame__WEBPACK_IMPORTED_MODULE_0__.startGame)();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map