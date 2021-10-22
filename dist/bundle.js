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
  if (typeof rgbColor !== 'string') return rgbColor;
  var step = rgbColor.split('(')[1].split(')')[0].split(', ');
  return step.map(function (num) {
    return parseInt(num);
  });
} // function avg(num1, num2, step) {
//   return ((num1 * (step - 1)) + num2) / step
// }


function rgbCMYK(rgb) {
  var red = rgb[0] / 255;
  var green = rgb[1] / 255;
  var blue = rgb[2] / 255;
  var c = 1 - red;
  var m = 1 - green;
  var y = 1 - blue;
  return [c, m, y, 0];
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
  var step = colorArr(rgbColor);
  var color = rgbCMYK(step);
  C = color[0];
  M = color[1];
  Y = color[2];
  var currentSwatch = document.querySelector('#current-color');
  currentSwatch.style['background-color'] = rgbColor;
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
// export function createSwatches(parent) {
//   let swatches = document.createElement('DIV');
//   parent.appendChild(swatches);
//   swatches.setAttribute('class', 'swatches');
//   let target = document.createElement('DIV');
//   target.setAttribute('class', 'swatch blink');
//   target.setAttribute('id', 'target-color');
//   // target.setAttribute('')
//   swatches.appendChild(target);
//   let hover = document.createElement('DIV');
//   hover.setAttribute('class', 'swatch');
//   hover.setAttribute('id', 'hover-color');
//   swatches.appendChild(hover);
//   let current = document.createElement('DIV');
//   current.setAttribute('class', 'swatch');
//   current.setAttribute('id', 'current-color');
//   swatches.appendChild(current);
// }

function optionStyle(coor) {
  // let radiusStr;
  var cursor;

  if (sameArray(coor, up)) {
    // radiusStr = '100% 100% 0 0';
    cursor = 'n-resize'; // direction = up;
  } else if (sameArray(coor, right)) {
    // radiusStr = '0 100% 100% 0';
    cursor = 'e-resize'; // direction = right;
  } else if (sameArray(coor, down)) {
    // radiusStr = '0 0 100% 100%';
    cursor = 's-resize'; // direction = down;
  } else if (sameArray(coor, left)) {
    // radiusStr = '100% 0 0 100%';
    cursor = 'w-resize'; // direction = left;
  } // radiusStr = '0'


  return cursor;
}

/***/ }),

/***/ "./src/main/styleElements.js":
/*!***********************************!*\
  !*** ./src/main/styleElements.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateBackgound": () => (/* binding */ updateBackgound),
/* harmony export */   "createTile": () => (/* binding */ createTile),
/* harmony export */   "styleOption": () => (/* binding */ styleOption),
/* harmony export */   "removeHover": () => (/* binding */ removeHover),
/* harmony export */   "removeOption": () => (/* binding */ removeOption),
/* harmony export */   "styleFinish": () => (/* binding */ styleFinish),
/* harmony export */   "finishStar": () => (/* binding */ finishStar),
/* harmony export */   "styleWin": () => (/* binding */ styleWin),
/* harmony export */   "createNextButton": () => (/* binding */ createNextButton),
/* harmony export */   "addResult": () => (/* binding */ addResult),
/* harmony export */   "createModal": () => (/* binding */ createModal),
/* harmony export */   "createLevelDiv": () => (/* binding */ createLevelDiv),
/* harmony export */   "livesUpdate": () => (/* binding */ livesUpdate),
/* harmony export */   "updateNav": () => (/* binding */ updateNav)
/* harmony export */ });
/* harmony import */ var _mixPathGame_mixPathGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixPathGame/mixPathGame */ "./src/mixPathGame/mixPathGame.js");
/* harmony import */ var _main_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main/color */ "./src/main/color.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper */ "./src/main/helper.js");


 // GRID ELEMENTS

var mixClick = false;
var messages = ['...you can do better then that', '...that\'s all you got?!', '...why are you taking a break', '...keep going', '...can you handle the pressure?!'];
function updateBackgound(targetColor) {
  var body = document.querySelector('body');
  var background = document.querySelector('.image-cont');
  body.style['background-color'] = targetColor;
  background.style['background-color'] = targetColor;
}
function createTile(colorCount, x, y, coor) {
  var parentDiv = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  // if (mixCLick) {
  //   // WHERE I CAN MIX UP BOARD IF THEY DO NOT WANT IT IN COLOR ORDER.
  // }
  var colorId = _main_color__WEBPACK_IMPORTED_MODULE_1__.COLORS[colorCount];
  var tile = document.createElement('div');
  tile.setAttribute('id', "tile-".concat(colorCount));
  tile.setAttribute('colorId', colorId);
  tile.setAttribute('coor', coor);
  tile.setAttribute('color-idx', colorCount);
  tile.classList.add("mix-tile");
  tile.style['background-color'] = colorId; // tile.style.border = '1px solid black';

  tile.style['aspect-ratio'] = 1;
  tile.addEventListener('click', _mixPathGame_mixPathGame__WEBPACK_IMPORTED_MODULE_0__.mixTile);
  tile.addEventListener('mouseover', function () {
    var swatch = document.querySelector('#hover-color');
    swatch.style['background-color'] = 'black';
  });
  var info = {
    ele: tile,
    coor: coor,
    x: x,
    y: y
  };

  if (parentDiv) {
    parentDiv.appendChild(tile);
  }

  return info;
}
function styleOption(optionTiles, coor, pos, finalCheck) {
  var optionTile = _mixPathGame_mixPathGame__WEBPACK_IMPORTED_MODULE_0__.allTiles[coor].ele;
  var hoverColor = optionTile.getAttribute('colorId');
  hoverFunction(optionTiles, optionTile, hoverColor);
  optionTile.style.cursor = 'pointer';
  var arrow = addArrow(pos);
  optionTile.appendChild(arrow);
  arrow.style.display = 'flex';
  optionTile.style.cursor = '';

  if (finalCheck) {
    optionTile.removeChild(optionTile.firstChild);
  }

  return arrow;
}
;

function addArrow(coor) {
  var arrow = document.createElement('DIV');
  arrow.setAttribute('id', coor);
  arrow.classList.add('arrow-icons');
  return arrow;
}

function removeHover(tile) {
  // let newEle = tile.cloneNode(true);
  tile.style.cursor = 'default';
  var colorId = _main_color__WEBPACK_IMPORTED_MODULE_1__.COLORS[colorCount];
  var coor = tile.getAttribute('coor');
  var colorCount = tile.getAttribute('color-idx');
  var xy = coor.split('-');
  var newEle = createTile(colorCount, parseInt(xy[0]), parseInt(xy[1]), coor); // let coor = tile.getAttribute('coor')
  // newEle.setAttribute('coor', coor);

  tile.parentElement.replaceChild(newEle.ele, tile); // newEle.addEventListener('click', mixTile);

  _mixPathGame_mixPathGame__WEBPACK_IMPORTED_MODULE_0__.allTiles[coor] = newEle;
  if (newEle.firstChild) newEle.removeChild(newEle.firstChild);
  return newEle;
}
function removeOption(optionTiles, currentTile, finishTile) {
  var updateCheck = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  optionTiles.forEach(function (coor) {
    var oldTile = _mixPathGame_mixPathGame__WEBPACK_IMPORTED_MODULE_0__.allTiles[coor].ele; // let coor = oldTile.coor;
    // let colorCount = oldTile
    // let colorId = COLORS[colorCount];
    // not working....

    var ele = removeHover(oldTile);

    if (ele.firstChild) {
      ele.removeChild(ele.firstChild);
    }

    ;
    return ele;
  });

  if (updateCheck) {
    var prev = _mixPathGame_mixPathGame__WEBPACK_IMPORTED_MODULE_0__.allTiles[currentTile.coor].ele;
    prev.style['border-radius'] = '100%';
    var dot = prev.firstChild;
    dot.removeChild(dot.firstChild);
  } // return ele
  // NotWorking

}

function hoverStep(optionTile, hoverColor) {
  return function () {
    var swatch = document.querySelector('#hover-color');
    swatch.style['background-color'] = hoverColor;
    var arrow = optionTile.firstChild.cloneNode(true);
    arrow.classList.add('swatch-arrow');
    arrow.style.position = 'relative';

    if (swatch.lastChild) {
      swatch.removeChild(swatch.lastChild);
    }

    swatch.appendChild(arrow);
  };
}

;

function hoverFunction(optionTiles, optionTile, hoverColor) {
  var hover = function hover() {
    return hoverStep(optionTile, hoverColor);
  };

  optionTile.addEventListener('mouseover', hover());
}

function hoverSwatchFunc(optionTiles, optionTile, hoverColor) {
  return function () {
    var swatch = document.querySelector('#hover-color');

    if (swatch.lastChild) {
      swatch.removeChild(swatch.lastChild);
    }

    if (optionTiles.includes(optionTile)) {
      swatch.style['background-color'] = hoverColor;
      var arrow = optionTile.firstChild.cloneNode(true);
      arrow.classList.add('swatch-arrow');
      arrow.style.position = 'relative';
      swatch.appendChild(arrow);
    } else {
      swatch.style['background-color'] = 'black';
    }
  };
}

function styleFinish(finishTile) {
  var finishEle = _mixPathGame_mixPathGame__WEBPACK_IMPORTED_MODULE_0__.allTiles[finishTile].ele;
  finishEle.style.border = '1px solid transparent'; // finishEle.style['border-radius'] = '100%';

  var swatch = document.querySelector('.blink');
  swatch.classList.remove('blink');
  finishEle.classList.add('blink');
}
function finishStar(finishTile) {
  var ele = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var finishEle;

  if (ele) {
    finishEle = finishTile;
  } else {
    finishEle = _mixPathGame_mixPathGame__WEBPACK_IMPORTED_MODULE_0__.allTiles[finishTile].ele;
  }

  finishEle.style['border-radius'] = '100%';
  var star = document.createElement('DIV');
  star.classList.add('star');
  if (ele) star.setAttribute('class', 'result-star');
  star.innerHTML = '★';
  finishEle.appendChild(star);
  return star;
}
function styleWin(selectedTiles, finishTile, color, level, lives) {
  var body = document.querySelector('body');
  var hoverSwatch = document.querySelector('#hover-color');
  hoverSwatch.style['background-color'] = 'black'; // EXTRA TILES

  Object.values(_mixPathGame_mixPathGame__WEBPACK_IMPORTED_MODULE_0__.allTiles).forEach(function (tile) {
    var coor = tile.coor,
        ele = tile.ele;

    if (!selectedTiles.includes(coor) || coor === finishTile) {
      ele.style.border = '1px solid black';
      ele.style['background-color'] = color;
    }
  }); // FINISH TILE

  var finalEle = _mixPathGame_mixPathGame__WEBPACK_IMPORTED_MODULE_0__.allTiles[finishTile].ele;
  finalEle.classList.remove('blink');
  finalEle.style['border-radius'] = '0';
  finalEle.style.border = '1px solid black'; // SUCCESS MESSAGE

  var success = document.createElement('DIV');
  success.setAttribute('class', 'success');
  success.innerHTML = '...success';
  body.appendChild(success);
  var increment = Math.ceil(level / 2);
  livesUpdate(lives, 'add', increment);
  var swatch = document.querySelector('#target-color');
  swatch.classList.remove('blink');
}
function createNextButton(text) {
  var body = document.querySelector('body');
  var buttonDiv = document.createElement('DIV');
  buttonDiv.classList.add('button-cont', 'blink');
  var levelButton = document.createElement('BUTTON');
  levelButton.innerHTML = text;
  levelButton.setAttribute('class', 'level-button');
  buttonDiv.appendChild(levelButton);
  body.appendChild(buttonDiv);
  return buttonDiv;
} // NAV ELEMENTS

function addResult(level, selectedTiles) {
  // PREPARE CONTAINER
  var levelCont = document.createElement('DIV');
  levelCont.setAttribute('class', 'level-display');
  var selected = []; // ADD SELECTED TILES

  selectedTiles.forEach(function (coor) {
    var addition = _mixPathGame_mixPathGame__WEBPACK_IMPORTED_MODULE_0__.allTiles[coor].ele;
    levelCont.appendChild(addition);
    selected.push(addition);
  }); // ADD LEVEL

  var last = selected.at(-1);
  var star = finishStar(last, true);
  last.style['border-radius'] = '0';
  var levelText = document.createElement('DIV');
  levelText.setAttribute('class', 'level-num');
  levelCont.appendChild(levelText); // levelCont.appendChild(levelText)  

  levelText.innerHTML = level;
  var results = document.querySelector('#mid-results');
  var finalResults = document.querySelector('#final-results');
  results.appendChild(levelCont);
  finalResults.appendChild(levelCont.cloneNode(true)); // DELETE GRID

  var prevLevel = document.querySelector("#level-".concat(level));
  prevLevel.remove();
}

function clearModal() {
  var displays = ['.display-results', '.display-about', '.display-controls', '.display-help'];
  displays.forEach(function (classString) {
    var displayCont = document.querySelector(classString);
    if (displayCont) displayCont.style.display = 'none';
  });
}

function modalFunc(element, type) {
  var displayType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return function () {
    var clickedCheck = document.querySelector('.nav-clicked');
    if (clickedCheck) clickedCheck.classList.toggle('nav-clicked');
    var displayCont = document.querySelector('.display-cont');
    displayCont.style.display = 'flex'; // let prevDisplay = document.querySelector('.display');
    // if (prevDisplay) prevDisplay.style.display = 'none';

    clearModal();

    if (type === 'close') {
      element.style.display = 'none';
      displayCont.style.display = 'none';
    } else {
      element.style.display = 'flex';
      var display, current, button;
      displayCont.style.display = 'flex';

      switch (displayType) {
        case 'help':
          display = document.querySelector('.display-help');
          current = document.querySelector('.start-message');
          current.innerHTML = '';
          button = document.querySelector('.help-modal');
          break;

        case 'results':
          display = document.querySelector('.display-results');
          current = document.querySelector('.start-message');
          current.innerHTML = '...um you have to beat a level first!';
          button = document.querySelector('.result-star');

          if (_mixPathGame_mixPathGame__WEBPACK_IMPORTED_MODULE_0__.level !== 1) {
            var newMessage = messages[(0,_helper__WEBPACK_IMPORTED_MODULE_2__.randomNum)(messages.length)];
            current.innerHTML = newMessage;
          }

          break;

        case 'about':
          display = document.querySelector('.display-about');
          button = document.querySelector('.about');
          break;
      }

      ;

      if (clickedCheck === button) {
        element.click();
        button.classList.toggle('nav-clicked');
      }

      button.classList.toggle('nav-clicked');
      display.style.display = 'flex';
    }
  };
} // function helpClick(type) {
//   let prev = document.querySelector('.help');
//   if (prev) prev.style.display = 'none';
//   let infoEle;
//   switch (type) {
//     case 'color':
//       infoEle = document.querySelector('.page-info');
//       break;
//     case 'path':
//       infoEle = document.querySelector('.page-path');
//       break;
//     case 'swatch':
//       infoEle = document.querySelector('.page-swathes');
//       break;
//     case 'console':
//       debugger
//       infoEle = document.querySelector('.page-console');
//       break;
//   };
//   infoEle.style.display = 'flex';
// }
// export function createHelp() {
//   let colorBtn = document.querySelector('#color-btn');
//   let pathBtn = document.querySelector('#path-btn');
//   let goalBtn = document.querySelector('#goal-btn');
//   let consoleBtn = document.querySelector('#console-btn');
//   colorBtn.addEventListener('click', () => helpClick('color'));
//   pathBtn.addEventListener('click', () => helpClick('path'));
//   goalBtn.addEventListener('click', () => helpClick('swatch'));
//   consoleBtn.addEventListener('click', () => helpClick('console'));
// };


function btnFunc(clickedBtn, type) {
  return function () {
    var display, nextBtn;
    var currentBtn = document.querySelector('.clicked');
    var current = document.querySelector('.nav-button-clicked');
    current.classList.toggle('nav-button-clicked');
    currentBtn.classList.toggle('clicked'); // if (current) current.style.display = 'none';

    switch (type) {
      case 'page-info':
        display = document.querySelector('#page-intro');
        nextBtn = document.querySelector('#goal-btn');
        break;

      case 'page-color':
        display = document.querySelector('#page-color');
        nextBtn = document.querySelector('#color-btn');
        break;

      case 'page-path':
        display = document.querySelector('#page-path');
        nextBtn = document.querySelector('#path-btn');
        break;

      case 'page-console':
        display = document.querySelector('#page-console');
        nextBtn = document.querySelector('#console-btn');
        break;

      case 'page-controls':
        display = document.querySelector('#page-controls');
        nextBtn = document.querySelector('#controls-btn');
        break;

      default:
        break;
    } // display.style.display = 'flex';


    nextBtn.classList.toggle('clicked');
    display.classList.toggle('nav-button-clicked');
  };
}

function createModal(types) {
  var button;
  var display;
  var square = document.querySelector('.display-cont');
  var close = document.querySelector('.close-button');
  var modal = document.querySelector('.modal');
  types.forEach(function (type) {
    switch (type) {
      case 'help':
        display = document.querySelector('.display-help');
        button = document.querySelector('.help-modal');
        var goalNav = document.querySelector('#goal-btn');
        var colorNav = document.querySelector('#color-btn');
        var pathNav = document.querySelector('#path-btn');
        var consoleNav = document.querySelector('#console-btn');
        var controlsNav = document.querySelector('#controls-btn');
        goalNav.addEventListener('click', btnFunc(goalNav, 'page-info'));
        colorNav.addEventListener('click', btnFunc(colorNav, 'page-color'));
        pathNav.addEventListener('click', btnFunc(pathNav, 'page-path'));
        consoleNav.addEventListener('click', btnFunc(consoleNav, 'page-console'));
        controlsNav.addEventListener('click', btnFunc(controlsNav, 'page-controls'));
        break;

      case 'results':
        display = document.querySelector('.display-results');
        button = document.querySelector('.result-star');
        break;

      case 'about':
        display = document.querySelector('.display-about');
        button = document.querySelector('.about');
        square.appendChild(display);
        break;
    }

    button.addEventListener('click', modalFunc(modal, 'open', type));
    close.addEventListener('click', modalFunc(modal, 'close'));
    modal.addEventListener('click', modalFunc(modal, 'close'));
    square.addEventListener('click', function (e) {
      return e.stopPropagation();
    });
  });
}
function createLevelDiv(level) {
  var body = document.querySelector('body'); // tileGrid = document.querySelector('.tile-grid');

  var cont1 = document.createElement('div');
  cont1.classList.add("tile-grid");
  cont1.classList.add("level-cont");
  cont1.setAttribute('id', "level-".concat(level));
  cont1.style['z-index'] = '2';
  cont1.style.display = 'tile-grid'; // cont2.style['grid-gap'] = '4px';

  cont1.style['grid-template-columns'] = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
  body.appendChild(cont1);
  return cont1;
}
function livesUpdate(currentCount, addOrSub, increment) {
  window.setTimeout(function () {
    // CREATE FLASH MEMO
    var livesMemo = document.createElement('DIV');
    livesMemo.setAttribute('class', "".concat(addOrSub, "-lives"));
    livesMemo.classList.add('lives-amount');
    livesMemo.innerHTML = "".concat(addOrSub === 'add' ? '+' : '').concat(increment); // let heartCont = document.createElement('DIV');
    // heartCont.setAttribute('class', 'lives-heart');
    // heartCont.innerHTML = '♥︎';

    var heart = document.querySelector('.lives-cont');
    heart.appendChild(livesMemo); // let body = document.querySelector('body');
    // body.appendChild(heartCont);
    // UPDATE OVERALL

    updateNav('lives', currentCount, increment); // FLASH / REMOVE TIMER

    window.setTimeout(function () {
      livesMemo.style.color = 'black';
    }, 500);
    window.setTimeout(function () {
      livesMemo.remove();
    }, 1000);
  }, 750);
}
;
function updateNav(eleType, currentCount) {
  var increment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var ele;

  switch (eleType) {
    case 'lives':
      ele = document.querySelector('.lives');
      break;

    case 'level':
      ele = document.querySelector('.level-text');
      break;

    default:
      break;
  }

  if (!increment) {
    ele.innerHTML = "".concat(currentCount);
  } else {
    var total = parseInt(currentCount) + increment;
    ele.innerHTML = "".concat(total);
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
/* harmony export */   "allTiles": () => (/* binding */ allTiles),
/* harmony export */   "level": () => (/* binding */ level),
/* harmony export */   "OPTIONS": () => (/* binding */ OPTIONS),
/* harmony export */   "startGame": () => (/* binding */ startGame),
/* harmony export */   "keyboardMix": () => (/* binding */ keyboardMix),
/* harmony export */   "mixTile": () => (/* binding */ mixTile),
/* harmony export */   "resetGrid": () => (/* binding */ resetGrid)
/* harmony export */ });
/* harmony import */ var _main_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main/color */ "./src/main/color.js");
/* harmony import */ var _main_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main/helper */ "./src/main/helper.js");
/* harmony import */ var _main_styleElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main/styleElements */ "./src/main/styleElements.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



 // BOARD

var tileGrid;
var body;
var allTiles = {};
var checkColor = true;
var helpCheck = true; // GAMEPLAY

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
var optionTiles = [];
var hoverColor; // let direction;
// let mixedTiles = [];
// DOM LOADED START

function startGame() {
  // CREATE GRID
  setNewGrid();
  (0,_main_styleElements__WEBPACK_IMPORTED_MODULE_2__.createModal)(['help', 'results', 'about']);
  var firstTry = window.location.href.split('?')[1];
  debugger;

  if (helpCheck && !firstTry) {
    window.setTimeout(function () {
      var helpModal = document.querySelector('.help-modal');
      helpModal.click();
    }, 1000);
  }

  window.addEventListener('keydown', keyboardMix()); // ADD RESET... for now
  // const reset = document.querySelector('.reset');
  // reset.addEventListener('click', resetGrid);
}

function setNewGrid() {
  var step = createMixGrid();
  setPath();
  (0,_main_styleElements__WEBPACK_IMPORTED_MODULE_2__.updateBackgound)(targetColor);
  step.remove();
  createMixGrid();
  (0,_main_styleElements__WEBPACK_IMPORTED_MODULE_2__.finishStar)(finishTile);
  resetVariables();
  (0,_main_styleElements__WEBPACK_IMPORTED_MODULE_2__.updateNav)('level', level);
  optionTiles = markOptions();
}

;

function createMixGrid() {
  var grid = (0,_main_styleElements__WEBPACK_IMPORTED_MODULE_2__.createLevelDiv)(level);
  (0,_main_styleElements__WEBPACK_IMPORTED_MODULE_2__.updateNav)('lives', lives);
  var colorCount = 0;

  for (var x = 1; x <= 10; x++) {
    for (var y = 1; y <= 10; y++) {
      var coor = "".concat(x, "-").concat(y);
      var tile = (0,_main_styleElements__WEBPACK_IMPORTED_MODULE_2__.createTile)(colorCount, x, y, coor, grid);
      allTiles[coor] = tile;
      colorCount++;
    }
  }

  ;
  return grid;
}

function findPath() {
  var mixedColor;
  currentColor = (0,_main_color__WEBPACK_IMPORTED_MODULE_0__.setFirstColor)(currentColor);
  var start = currentTile;
  var startColor = currentColor;
  count = 1;

  while (count <= level) {
    optionTiles = nextMoveOptions(false);
    var next = optionTiles[(0,_main_helper__WEBPACK_IMPORTED_MODULE_1__.randomNum)(optionTiles.length)];
    selectedTiles.push(next);

    if (!next) {
      currentTile = start;
      currentColor = startColor;
      selectedTiles = [];
      setPath();
      return;
    }

    var nextColor = allTiles[next].ele.getAttribute('colorId');
    count++;
    mixedColor = (0,_main_color__WEBPACK_IMPORTED_MODULE_0__.addColor)(nextColor, count);
    currentTile = (0,_main_helper__WEBPACK_IMPORTED_MODULE_1__.posObject)(next);
  }

  ;
  targetColor = "rgb(".concat(parseInt(mixedColor[0]), ", ").concat(parseInt(mixedColor[1]), ", ").concat(parseInt(mixedColor[2]), ")");
  finishTile = currentTile.coor;
  path = selectedTiles;
  resetVariables();
}

function setPath() {
  // FIRST POSITION
  var x, y, coor;

  if (currentTile) {
    x = currentTile.x;
    y = currentTile.y;
    coor = currentTile.coor;
  } else {
    x = (0,_main_helper__WEBPACK_IMPORTED_MODULE_1__.randomNum)(10) + 1;
    y = (0,_main_helper__WEBPACK_IMPORTED_MODULE_1__.randomNum)(10) + 1;
    coor = "".concat(x, "-").concat(y);
  }

  var coorObj = {
    coor: coor,
    x: x,
    y: y
  };
  currentTile = coorObj;
  startTile = coorObj;
  selectedTiles.push(coor);
  currentColor = allTiles[coor].ele.getAttribute('colorId'); // FIND PATH

  findPath();
}

function checkLives() {
  if (lives === 0) {
    alert('...you lose');
  }
}

function checkWinLose(color) {
  // checkLives();
  if (targetColor === color && count - 1 === level) {
    // CORRECT
    (0,_main_styleElements__WEBPACK_IMPORTED_MODULE_2__.styleWin)(selectedTiles, finishTile, color, level, lives); // NEXT LEVEL BUTTON

    window.setTimeout(function () {
      var buttonDiv = (0,_main_styleElements__WEBPACK_IMPORTED_MODULE_2__.createNextButton)('next level...');
      buttonDiv.addEventListener('click', function () {
        (0,_main_styleElements__WEBPACK_IMPORTED_MODULE_2__.addResult)(level, selectedTiles);
        lives = lives + Math.ceil(level / 2);
        level = level + 1;
        count = 1;
        setNewGrid();
        var success = document.querySelector('.success');
        success.remove();
        buttonDiv.remove();
        var swatch = document.querySelector('#target-color');
        swatch.classList.add('blink');
        return true;
      });
    }, 1750);
  } else if (targetColor !== color && count - 1 === level) {
    // INCORRECT
    var _final = currentTile.ele;
    _final.style['border-radius'] = '100%';
    (0,_main_styleElements__WEBPACK_IMPORTED_MODULE_2__.livesUpdate)(lives, 'sub', -1);
    lives = lives - 1;

    _final.addEventListener('click', resetGrid);

    gameOver();
    return false;
  } else {
    // NEXT MOVE
    nextMoveOptions(false);
    return false;
  }

  ;
}

;
function keyboardMix() {
  return function (e) {
    console.log(e.keyCode);

    if (gameOver(true)) {
      nextEle = document.querySelector('#new-game');
      nextEle.click();
      return;
    }

    var nextEle, direction, keyType; // let modalCheck = document.querySelector('.display-cont');

    var modal = document.querySelector('.modal');

    if (modal.style.display !== 'none') {
      nextEle = modal;
    } else {
      switch (e.keyCode) {
        case 37:
          direction = 'left';
          keyType = 'direction';
          break;

        case 38:
          direction = 'up';
          keyType = 'direction';
          break;

        case 39:
          direction = 'right';
          keyType = 'direction';
          break;

        case 40:
          direction = 'down';
          keyType = 'direction';
          break;

        case 13:
          // ENTER
          nextEle = document.querySelector('.blink');
          keyType = 'enter';
          break;

        case 72:
          // H - help
          nextEle = document.querySelector('.help-modal');
          keyType = 'help';
          break;

        case 82:
          // R - results
          nextEle = document.querySelector('.result-star');
          keyType = 'results';
          break;

        case 65:
          // A - about
          nextEle = document.querySelector('.about');
          keyType = 'about';
          break;
      }

      ;

      if (keyType === 'direction') {
        var tile = allTiles[currentTile.coor];
        OPTIONS.forEach(function (dirObj) {
          if (dirObj.name === direction) {
            var newX = dirObj.dir[0] + tile.x;
            var newY = dirObj.dir[1] + tile.y;
            var newCoor = "".concat(newX, "-").concat(newY);
            nextEle = allTiles[newCoor].ele;
          }
        });
      }
    }

    nextEle.click();
  };
}

function gameOver() {
  var check = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  // FUNCTION TO TAKE ACTION
  if (lives === 0) {
    if (check) return true;
    var results = document.querySelector('#final-cont'); // let modal = document.querySelector('.modal');

    var x = document.querySelector('.dot');
    x.innerHTML = ''; // PUT UP MESSAGE 

    var gameoverMessage = document.querySelector('.gameover-message');
    gameoverMessage.style.display = 'flex'; // ADD RESULTS

    window.setTimeout(function () {
      results.style.display = 'flex';
      window.setTimeout(function () {
        results.style.display = 'flex';
      }, 1000);
      var gameover = document.querySelector('.gameover');
      gameover.style.display = 'flex';
      var button = (0,_main_styleElements__WEBPACK_IMPORTED_MODULE_2__.createNextButton)('try again');
      button.setAttribute('id', 'new-game');
      button.addEventListener('click', function () {
        // RESET ENTIRE GAME
        window.location.href = window.location.pathname + "?false";
      });
    }, 2000); // let message = document.querySelector('.start-message');
    // message.innerHTML = '';
  }
}

function mixTile() {
  var clickedCoor = this.getAttribute('coor');
  var check = optionTiles.some(function (coor) {
    return coor === clickedCoor;
  });

  if (check) {
    // REMOVE OPTION STYLING
    (0,_main_styleElements__WEBPACK_IMPORTED_MODULE_2__.removeOption)(optionTiles, currentTile, finishTile, true); // clearStyle(optionTiles, currentTile, finishTile, true);

    selectedTiles.push(clickedCoor);
    var colorOne = allTiles[currentTile.coor].ele.getAttribute('colorId');

    if (checkColor) {
      currentColor = (0,_main_color__WEBPACK_IMPORTED_MODULE_0__.setFirstColor)(colorOne);
      checkColor = false;
    } // let posCoor = this.getAttribute('coor');
    // let newTile = allTiles[posCoor].ele;


    var colorTwo = this.getAttribute('colorId'); // ADD COLOR RETURN MIXED RGB

    count = count + 1;
    var rgb = (0,_main_color__WEBPACK_IMPORTED_MODULE_0__.addColor)(colorTwo, count);
    var rgbStr = "rgb(".concat(parseInt(rgb[0]), ", ").concat(parseInt(rgb[1]), ", ").concat(parseInt(rgb[2]), ")");
    currentTile = allTiles[clickedCoor];
    currentTile.ele.style['background-color'] = rgbStr;
    var swatch = document.querySelector('#current-color');
    swatch.style['background-color'] = rgbStr;
    this.style['border-radius'] = '0';
    optionTiles = markOptions(); // checkWinLose(rgbStr);

    if (checkWinLose(rgbStr) === false) {
      // LOSE
      currentTile = (0,_main_helper__WEBPACK_IMPORTED_MODULE_1__.posObject)(this.getAttribute('coor'));

      if (optionTiles.length === 0 || count - 1 === level) {
        var star = document.querySelector('.star');
        if (star) star.remove();
        var x = document.querySelector('.dot');
        x.innerHTML = 'X';
        this.classList.remove('blink');
        var blink = allTiles[currentTile.coor].ele.firstChild;
        blink.classList.add('blink');
        var removeBlink = document.querySelector('#target-color');
        removeBlink.classList.remove('blink');
        var nope = document.createElement('DIV');

        var _body = document.querySelector('body');

        nope.setAttribute('class', 'success');
        nope.classList.add('nope');
        nope.innerHTML = '...nope';
        if (gameOver(true)) nope.innerHTML = '';

        _body.appendChild(nope);
      }
    } else {
      // WIN
      var _star = document.querySelector('.star');

      if (_star) _star.remove();

      var _x = document.querySelector("#dot-".concat(count - 1));

      _x.remove();
    }
  }
}
function resetGrid() {
  var prev = document.querySelector("#level-".concat(level));
  prev.remove();
  createMixGrid();
  var blink = document.querySelector('#target-color');
  blink.classList.add('blink'); // document.querySelector('body');
  // let tiles = document.querySelector('.tile-grid');
  // let background = document.querySelector('.image-cont');
  // body.style['background-color'] = targetColor;
  // background.style['background-color'] = targetColor;
  // tiles.style['background-color'] = targetColor;

  var message = document.querySelector('.success');
  if (message) message.remove();
  resetVariables();
  (0,_main_styleElements__WEBPACK_IMPORTED_MODULE_2__.finishStar)(finishTile);
  optionTiles = markOptions(); // console.log('clicked')
}

function resetVariables() {
  currentTile = startTile;
  count = 1; // path = selectedTiles;
  // selectedTiles = [startTile];

  selectedTiles = [currentTile.coor];
  var color = allTiles[currentTile.coor].ele.getAttribute('colorId');
  currentColor = (0,_main_color__WEBPACK_IMPORTED_MODULE_0__.setFirstColor)(color);
  (0,_main_styleElements__WEBPACK_IMPORTED_MODULE_2__.updateBackgound)(targetColor); // finishStar(finishTile);
}

function markOptions() {
  var tile = allTiles[currentTile.coor];

  if (currentTile.coor !== finishTile) {
    tile.ele.style['border-radius'] = '100%';
  }

  var dotOutline = document.createElement('DIV');
  dotOutline.setAttribute('class', 'dot-outline');
  dotOutline.setAttribute('ID', "dot-".concat(count - 1));
  var dot = document.createElement('DIV');
  dot.setAttribute('class', 'dot');
  dot.innerHTML = "".concat(level - (count - 1));
  dotOutline.appendChild(dot);
  tile.ele.appendChild(dotOutline);
  return nextMoveOptions(true);
}

function nextMoveOptions(styleCheck) {
  var newOptionTiles = [];
  var tile = allTiles[currentTile.coor];
  Object.values(OPTIONS).forEach(function (pos) {
    var newX = pos.dir[0] + tile.x;
    var newY = pos.dir[1] + tile.y;
    var newCoor = "".concat(newX, "-").concat(newY);

    if (newX <= 10 && newX > 0 && newY <= 10 && newY > 0 && !selectedTiles.includes(newCoor)) {
      if (!styleCheck) {
        newOptionTiles.push(newCoor);
      } else if (newCoor !== finishTile) {
        // STYLE NEXT OPTION
        var arrow = (0,_main_styleElements__WEBPACK_IMPORTED_MODULE_2__.styleOption)(optionTiles, newCoor, pos.name);
        newOptionTiles.push(newCoor);
      } else if (count === level && newCoor === finishTile) {
        var optionTile = allTiles[newCoor].ele;
        (0,_main_styleElements__WEBPACK_IMPORTED_MODULE_2__.styleOption)(optionTiles, newCoor, pos.name, true);
        newOptionTiles.push(newCoor);
        (0,_main_styleElements__WEBPACK_IMPORTED_MODULE_2__.styleFinish)(finishTile);
      }
    }
  });

  if (newOptionTiles.includes(finishTile) && count === level) {
    var finalIdx = newOptionTiles.indexOf(finishTile);

    var optionEdit = _toConsumableArray(newOptionTiles);

    optionEdit.splice(finalIdx, 1);
    (0,_main_styleElements__WEBPACK_IMPORTED_MODULE_2__.removeOption)(optionEdit, currentTile, finishTile);
    newOptionTiles = [finishTile];
  } else if (count > level) {
    var newEle = (0,_main_styleElements__WEBPACK_IMPORTED_MODULE_2__.removeOption)(newOptionTiles, currentTile, finishTile); // let coor2 = newEle.getAttribute('coor');
    // allTiles[coor].ele = newEle;

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