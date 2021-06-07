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
/* harmony export */   "mixTilesTwo": () => (/* binding */ mixTilesTwo)
/* harmony export */ });
var COLORS = ['#990033', '#993333', '#b30000', '#ff0000', '#cc2900', '#b35900', '#cca300', '#cccc00', '#999900', '#558000', '#b30059', '#b30000', '#ff7733', '#ff6600', '#ff9933', '#ffd633', '#ffcc00', '#e6e600', '#99cc00', '#666633', '#cc0066', '#ff3333', '#ff944d', '#ff9933', '#ffcc00', '#ffff00', '#ffff66', '#ccff33', '#669900', '#336600', '#ff0066', '#ff5050', '#ff6666', '#ff9966', '#ffcc66', '#ffff99', '#ccff66', '#99ff66', '#33cc33', '#339933', '#cc3399', '#ff3399', '#ff6699', '#ff9999', '#ffcc99', '#ffffcc', '#ccff99', '#99ff99', '#66ff66', '#00cc66', '#cc00cc', '#ff66ff', '#ff99ff', '#ffb3d1', '#ffe6f0', '#ffffff', '#ccffcc', '#99ffcc', '#00ff99', '#339966', '#993399', '#b300b3', '#d966ff', '#e6ccff', '#f2e6ff', '#e6f2ff', '#e6ffff', '#66ffff', '#00cc99', '#009999', '#9900cc', '#cc33ff', '#cc66ff', '#cc99ff', '#e6ccff', '#b3d7ff', '#b3ffff', '#00e6e6', '#00b3b3', '#336699', '#6600cc', '#9933ff', '#9966ff', '#9999ff', '#b3b3ff', '#90c0f0', '#80ccff', '#73b4fa', '#4d4dff', '#003d99', '#4d0099', '#7a00cc', '#a366ff', '#6666ff', '#8080ff', '#007bff', '#0099ff', '#007acc', '#0000cc', '#000080'];
function randomColor() {
  var num = Math.floor(Math.random() * 100);
  var color = COLORS[num];
  return color;
}
function mixColor(color1, color2) {
  var c1 = chroma(color1);
  var c2 = chroma(color2);
  return chroma.mix(c1, c2).hex();
}

function avg(num1, num2) {
  return (num1 + num2) / 2;
}

function mixTilesTwo(hex1, hex2) {
  var color1 = $.Color(hex1).rgba();
  var color2 = $.Color(hex2).rgba();
  var r = avg(color1[0], color2[0]);
  var g = avg(color1[1], color2[1]);
  var b = avg(color1[2], color2[2]);
  var rgb = "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
  return rgb;
}

/***/ }),

/***/ "./src/matchGame/matchingGame.js":
/*!***************************************!*\
  !*** ./src/matchGame/matchingGame.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMatchGrid": () => (/* binding */ createMatchGrid)
/* harmony export */ });
/* harmony import */ var _main_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main/color */ "./src/main/color.js");


function pickColors(tileAmount) {
  var colors = [];
  var i = 0;

  while (i < 50) {
    var color = (0,_main_color__WEBPACK_IMPORTED_MODULE_0__.randomColor)();

    if (!colors.includes(color)) {
      var colorObj = {
        color: color
      };
      colors.push(colorObj);
      i++;
    }
  }

  ;
  return colors;
} // [start] Fisher-Yates shuffle -- shuffle algorithm resource


function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [array[j], array[i]];
    array[i] = _ref[0];
    array[j] = _ref[1];
  }
} // [end] Fisher-Yates shuffle


var tileColors;
var matchGrid;
var count;
var selectedTiles = [];
var selectedTileIds = [];
var tilesCorrect = [];
function createMatchGrid() {
  var colors = pickColors();
  tileColors = colors.concat(colors);
  shuffle(tileColors);

  for (var i = 0; i < tileColors.length; i++) {
    var tile = document.createElement('div');
    tile.setAttribute('id', i);
    tile.setAttribute('class', 'match-tile');
    tile.style['background-color'] = 'black';
    tile.style['aspect-ratio'] = 1;
    tile.addEventListener('click', flipTile);
    matchGrid = document.getElementsByClassName('match-grid')[0];
    count = document.querySelector('#count');
    matchGrid.appendChild(tile);
  }

  ;
  matchGrid.style.display = 'grid';
  matchGrid.style['grid-gap'] = '2px';
  matchGrid.style['grid-template-columns'] = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
}

function checkPair() {
  var cards = matchGrid.querySelectorAll('div');
  var x = selectedTileIds[0];
  var y = selectedTileIds[1];

  if (selectedTiles[0] === selectedTiles[1]) {
    alert('match...');
    tilesCorrect.push(selectedTiles);
  } else {
    // alert('nope.');
    cards[x].style['background-color'] = 'black';
    cards[y].style['background-color'] = 'black';
  }

  selectedTiles = [];
  selectedTileIds = [];
  count.textContent = tilesCorrect.length;

  if (tilesCorrect.length === tileColors.length / 2) {
    alert('you found them...');
  }
}

function flipTile() {
  var tileId = this.getAttribute('id');
  selectedTiles.push(tileColors[tileId].color);
  selectedTileIds.push(tileId);
  this.style['background-color'] = tileColors[tileId].color;

  if (selectedTiles.length === 2) {
    setTimeout(checkPair, 500);
  }
}

/***/ }),

/***/ "./src/mixPathGame/mixPathGame.js":
/*!****************************************!*\
  !*** ./src/mixPathGame/mixPathGame.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomPos": () => (/* binding */ randomPos),
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

function mixTile() {
  var clickedCoor = this.getAttribute('coor');
  var check = optionTiles.some(function (coor) {
    return coor === clickedCoor;
  });

  if (check) {
    clearStyle();
    var colorOne = allTiles[currentTile.coor].ele.getAttribute('colorId');
    var colorTwo = this.getAttribute('colorId');
    var rgb = (0,_main_color__WEBPACK_IMPORTED_MODULE_0__.mixTilesTwo)(colorOne, colorTwo); //current tile
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

    this.style['background-color'] = rgb;
    currentTile = posObject(this.getAttribute('coor'));
    markOptions();
  }
}

function clearStyle() {
  optionTiles.forEach(function (coor) {
    var oldTile = allTiles[coor].ele;
    oldTile.style.border = 'none';
  });
}

function getTilePosition() {}

/***/ }),

/***/ "./src/snake/colorFood.js":
/*!********************************!*\
  !*** ./src/snake/colorFood.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LIVES": () => (/* binding */ LIVES),
/* harmony export */   "FOOD_COLORS": () => (/* binding */ FOOD_COLORS),
/* harmony export */   "updateTarget": () => (/* binding */ updateTarget),
/* harmony export */   "updateColorFood": () => (/* binding */ updateColorFood),
/* harmony export */   "drawColorFood": () => (/* binding */ drawColorFood)
/* harmony export */ });
/* harmony import */ var _main_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main/color */ "./src/main/color.js");
/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snake */ "./src/snake/snake.js");
/* harmony import */ var _snakeGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snakeGame */ "./src/snake/snakeGame.js");



var BODY_ADD = 3;
var LIVES = 3;
var FOOD_COLORS = [{
  pos: (0,_snakeGame__WEBPACK_IMPORTED_MODULE_2__.randomPos)(),
  color: (0,_main_color__WEBPACK_IMPORTED_MODULE_0__.randomColor)()
}, {
  pos: (0,_snakeGame__WEBPACK_IMPORTED_MODULE_2__.randomPos)(),
  color: (0,_main_color__WEBPACK_IMPORTED_MODULE_0__.randomColor)()
}];
var FOOD_ADD = 3; // [start] Fisher-Yates shuffle -- shuffle algorithm resource

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [array[j], array[i]];
    array[i] = _ref[0];
    array[j] = _ref[1];
  }
} // [end] Fisher-Yates shuffle


var target;
function updateTarget() {
  // target = document.querySelector('.food-target');
  var mix = (0,_main_color__WEBPACK_IMPORTED_MODULE_0__.mixTilesTwo)(FOOD_COLORS[0].color, _snake__WEBPACK_IMPORTED_MODULE_1__.SNAKE_COLOR); // target.style['background-color'] = mix;

  var body = document.querySelector('body');
  body.style['background-color'] = mix;
}
function updateColorFood() {
  if ((0,_snake__WEBPACK_IMPORTED_MODULE_1__.snakeEat)(FOOD_COLORS[0].pos)) {
    FOOD_COLORS.shift();
    (0,_snake__WEBPACK_IMPORTED_MODULE_1__.snakeAdd)(BODY_ADD);
    foodAdd(FOOD_ADD);
    shuffle(FOOD_COLORS);
    updateTarget();
    LIVES++;
  }

  FOOD_COLORS.forEach(function (color) {
    if ((0,_snake__WEBPACK_IMPORTED_MODULE_1__.snakeEat)(color.pos)) {
      LIVES--;
    }
  });
  updateTarget();
}

function foodAdd(amount) {
  for (var i = 0; i < amount; i++) {
    var food = {
      color: (0,_main_color__WEBPACK_IMPORTED_MODULE_0__.randomColor)(),
      pos: (0,_snakeGame__WEBPACK_IMPORTED_MODULE_2__.randomPos)()
    };
    FOOD_COLORS.push(food);
  }
}

function drawColorFood(gameBoard) {
  for (var i = 0; i < FOOD_COLORS.length; i++) {
    var foodElement = document.createElement('div');
    foodElement.style.gridRowStart = FOOD_COLORS[i].pos.y;
    foodElement.style.gridColumnStart = FOOD_COLORS[i].pos.x; // snakeElement.style[]

    foodElement.classList.add('color-food');
    foodElement.style['background-color'] = FOOD_COLORS[i].color;
    gameBoard.appendChild(foodElement);
  }
} // function getRandomFoodPos() {
//   let nextFoodPos;
//   while (nextFoodPos == null || snakeEat(nextFoodPos)) {
//     nextFoodPos = randomPos()
//     FOOD_COLOR = randomColor()
//   } 
//   return nextFoodPos;
// }

/***/ }),

/***/ "./src/snake/moves.js":
/*!****************************!*\
  !*** ./src/snake/moves.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMoveDirection": () => (/* binding */ getMoveDirection)
/* harmony export */ });
var moveDirection = {
  x: 0,
  y: 0
};
var lastMove = {
  x: 0,
  y: 0
};
window.addEventListener('keydown', function (e) {
  switch (e.key) {
    case 'ArrowLeft':
      if (lastMove.x !== 0) break;
      moveDirection = {
        x: -1,
        y: 0
      };
      break;

    case 'ArrowRight':
      if (lastMove.x !== 0) break;
      moveDirection = {
        x: 1,
        y: 0
      };
      break;

    case 'ArrowUp':
      if (lastMove.y !== 0) break;
      moveDirection = {
        x: 0,
        y: -1
      };
      break;

    case 'ArrowDown':
      if (lastMove.y !== 0) break;
      moveDirection = {
        x: 0,
        y: 1
      };
      break;
  }
});
function getMoveDirection() {
  lastMove = moveDirection;
  return moveDirection;
}

/***/ }),

/***/ "./src/snake/snake.js":
/*!****************************!*\
  !*** ./src/snake/snake.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SNAKE_SPEED": () => (/* binding */ SNAKE_SPEED),
/* harmony export */   "SNAKE_COLOR": () => (/* binding */ SNAKE_COLOR),
/* harmony export */   "updateSnake": () => (/* binding */ updateSnake),
/* harmony export */   "getSnakePos": () => (/* binding */ getSnakePos),
/* harmony export */   "snakeOverlap": () => (/* binding */ snakeOverlap),
/* harmony export */   "drawSnake": () => (/* binding */ drawSnake),
/* harmony export */   "snakeAdd": () => (/* binding */ snakeAdd),
/* harmony export */   "snakeEatSelf": () => (/* binding */ snakeEatSelf),
/* harmony export */   "snakeEat": () => (/* binding */ snakeEat)
/* harmony export */ });
/* harmony import */ var _moves__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moves */ "./src/snake/moves.js");
/* harmony import */ var _main_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main/color */ "./src/main/color.js");
/* harmony import */ var _colorFood__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colorFood */ "./src/snake/colorFood.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var SNAKE_SPEED = 5;
var SNAKE_ADDITIONS = 1;
var snakeBody = [{
  x: 15,
  y: 15
}];
var newBody = 0;
var SNAKE_COLOR = (0,_main_color__WEBPACK_IMPORTED_MODULE_1__.randomColor)();
function updateSnake() {
  addBody();
  var move = (0,_moves__WEBPACK_IMPORTED_MODULE_0__.getMoveDirection)();

  for (var i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = _objectSpread({}, snakeBody[i]);
  }

  snakeBody[0].x += move.x;
  snakeBody[0].y += move.y;
}
function getSnakePos() {
  return snakeBody[0];
}
function snakeOverlap() {
  var ignoreHead = true;
  return snakeEatSelf(snakeBody[0], ignoreHead);
}
function drawSnake(gameBoard) {
  snakeBody.forEach(function (part) {
    var snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = part.y;
    snakeElement.style.gridColumnStart = part.x; // snakeElement.style[]

    snakeElement.classList.add('snake-body');
    gameBoard.appendChild(snakeElement);
  });
  var snake = document.querySelectorAll('.snake-body');

  for (var i = 0; i < snake.length; i++) {
    snake[i].style['background-color'] = SNAKE_COLOR;
  }
}
function snakeAdd(amount) {
  var mix = (0,_main_color__WEBPACK_IMPORTED_MODULE_1__.mixTilesTwo)(_colorFood__WEBPACK_IMPORTED_MODULE_2__.FOOD_COLORS[0].color, SNAKE_COLOR);
  SNAKE_COLOR = mix;
  newBody += amount;
}
function snakeEatSelf(position) {
  var ignoreHead = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return snakeBody.some(function (part, idx) {
    if (ignoreHead && idx === 0) return false;
    return isEqual(part, position);
  });
}
function snakeEat(position) {
  return isEqual(snakeBody[0], position);
}

function isEqual(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y; // add color mix check
}

function addBody() {
  for (var i = 0; i < newBody; i++) {
    snakeBody.push(_objectSpread({}, snakeBody[snakeBody.length - 1]));
  }

  newBody = 0;
}

/***/ }),

/***/ "./src/snake/snakeGame.js":
/*!********************************!*\
  !*** ./src/snake/snakeGame.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSnakeGrid": () => (/* binding */ createSnakeGrid),
/* harmony export */   "main": () => (/* binding */ main),
/* harmony export */   "randomPos": () => (/* binding */ randomPos)
/* harmony export */ });
/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake */ "./src/snake/snake.js");
/* harmony import */ var _colorFood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colorFood */ "./src/snake/colorFood.js");


var lastRenderTime = 0;
var snakeGrid;
var gameOver = false;
var livesDiv;
function createSnakeGrid() {
  snakeGrid = document.querySelector('.snake-grid');
  livesDiv = document.querySelector('.lives'); // for (let i = 0; i < 625; i++) {
  //   const tile = document.createElement('span');
  //   tile.setAttribute('id', i);
  //   tile.setAttribute('class', 'snake-tile');
  //   tile.style['background-color'] = 'white';
  //   tile.style['border'] = '1px solid black';
  //   tile.style['aspect-ratio'] = 1;
  //   snakeGrid.appendChild(tile)
  // }
}
function main(currentTime) {
  if (gameOver) {
    if (confirm('boo.')) {
      window.location = 'https://jessicaup.github.io/dull./';
    }

    return;
  }

  window.requestAnimationFrame(main);
  var secondsSinceRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceRender < 1 / _snake__WEBPACK_IMPORTED_MODULE_0__.SNAKE_SPEED) return;
  lastRenderTime = currentTime;
  update();
  draw();
}

function update() {
  (0,_snake__WEBPACK_IMPORTED_MODULE_0__.updateSnake)();
  (0,_colorFood__WEBPACK_IMPORTED_MODULE_1__.updateColorFood)();
  checkFail();
}

function draw() {
  snakeGrid.innerHTML = "";
  (0,_snake__WEBPACK_IMPORTED_MODULE_0__.drawSnake)(snakeGrid);
  (0,_colorFood__WEBPACK_IMPORTED_MODULE_1__.drawColorFood)(snakeGrid);
  livesDiv.innerHTML = "".concat(_colorFood__WEBPACK_IMPORTED_MODULE_1__.LIVES);
}

function checkFail() {
  gameOver = outOfBounds((0,_snake__WEBPACK_IMPORTED_MODULE_0__.getSnakePos)()) || (0,_snake__WEBPACK_IMPORTED_MODULE_0__.snakeOverlap)() || _colorFood__WEBPACK_IMPORTED_MODULE_1__.LIVES <= 0;
}

;

function outOfBounds(position) {
  return position.x > 35 || position.x < 1 || position.y > 35 || position.y < 1;
}

function randomPos() {
  return {
    x: Math.floor(Math.random() * 35) + 1,
    y: Math.floor(Math.random() * 35) + 1
  };
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
/* harmony import */ var _matchGame_matchingGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matchGame/matchingGame */ "./src/matchGame/matchingGame.js");
/* harmony import */ var _mixPathGame_mixPathGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixPathGame/mixPathGame */ "./src/mixPathGame/mixPathGame.js");
/* harmony import */ var _snake_snakeGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snake/snakeGame */ "./src/snake/snakeGame.js");



document.addEventListener('DOMContentLoaded', function () {
  // let yellow = chroma('#F5FF00')
  // let blue = chroma('#00C2FF')
  // let final = chroma.mix(yellow, blue)
  // console.log(final)
  (0,_mixPathGame_mixPathGame__WEBPACK_IMPORTED_MODULE_1__.createMixGrid)(); // createSnakeGrid();
  // createMatchGrid();
  // window.requestAnimationFrame(main);
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map