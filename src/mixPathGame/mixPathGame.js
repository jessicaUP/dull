import { COLORS, mixTilesFour, rgbCMYK, cmykRGB } from '../main/color'

// BOARD
let tileGrid;
let allTiles = {};
let checkColor = true;

// GAMEPLAY
const OPTIONS = [[-1, 0], [1, 0], [0, -1], [0, 1]];
let selectedTiles = [];
let startTile;
let targetColor;
let level = 5;
let lives = 3;

// CURRENT MOVE
let currentTile;
let count = 1;
let optionTiles = [];
let C, M, Y, K = 0;

// let mixedTiles = [];

let currentColor;

function randomNum(num) {
  return Math.floor(Math.random() * num) + 1
}

function findPath() {
  let mixedColor;
  setFirstColor(currentColor);
  while ((count - 1) <= level) {
    optionTiles = nextMoveOptions(false);
    let next = optionTiles.indexOf(randomNum(optionTiles.length));
    // return next = `${newX}-${newY}`
    selectedTiles.push(next);
    let nextColor = allTiles[next].ele.getAttribute('colorId');
    mixedColor = addColor(nextColor);
    currentTile = posObject(next);
    count + 1;
  }
  targetColor = mixedColor;

  // RESET VARIABLES FOR GAMEPLAY
  currentTile = startTile;
  count = 1
  optionTiles = [];
  C, M, Y, K = 0;
}



function setPath() {
  // FIRST POSITION
  let x = randomNum(10);
  let y = randomNum(10);
  let coor = `${x}-${y}`;
  let coorObj = {
      coor,
      x,
      y
    };
  currentTile = coorObj;
  startTile = coorObj;
  selectedTiles.push(coor);
  debugger
  currentColor = allTiles[coor].ele.getAttribute('colorId');

  // FIND PATH
    findPath();

  // RETURN START TILE
  // return coorObj;
}

function posObject(coor) {
  let coorArr = coor.split('-');
  return {
    coor,
    x: coorArr[0],
    y: coorArr[1]
  }
}

function colorArr(rgbColor) {
  // 'rgb(r, g, b)'
  debugger
  let step = rgbColor.split('(')[1].split(')')[0].split(', ');
  return step;
}

function setFirstColor(rgbColor) {
  // let step = $.Color(hex1).rgba();
  // MAKE INTO ARRAY OF VALUES R-G-B
  
  let step = colorArr(rgbColor);
  let color = rgbCMYK(step);
  C = color[0];
  M = color[1];
  Y = color[2];
  currentColor = step;
}

function cmykMax() {
  if (C > 1) C = 1;
  if (M > 1) M = 1;
  if (Y > 1) Y = 1;
}

function addColor(rgbColor) {
  let cmykColor = rgbCMYK(colorArr(rgbColor));
  count = count + 1

  C = (C * (count - 1) + cmykColor[0]) / count
  Y = (Y * (count - 1) + cmykColor[2]) / count
  M = (M * (count - 1) + cmykColor[1]) / count
  cmykMax();

  return cmykRGB([C, M, Y, K])
}


function mixTile() {
  let clickedCoor = this.getAttribute('coor');
  let check = optionTiles.some(coor => coor === clickedCoor)
  if (check) {
    clearStyle();

    let colorOne = allTiles[currentTile.coor].ele.getAttribute('colorId')
    if (checkColor) {
      setFirstColor(colorOne);
      checkColor = false;
    }
    let colorTwo = this.getAttribute('colorId')

    // ADD COLOR RETURN MIXED RGB
    let rgb = addColor(colorTwo);
    let rgbStr = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
  

    // SET NEW COLOR & MARK NEXT OPTIONS
    this.style['background-color'] = rgbStr;
    currentTile = posObject(this.getAttribute('coor'))
    markOptions();
  }
  }



export function createMixGrid() {
  tileGrid = document.querySelector('.tile-grid');
  let colorCount = 0;

  for (let x = 1; x <= 10; x++) {
    for (let y = 1; y <= 10; y++) {
      let colorId = COLORS[colorCount];
      let coor = `${x}-${y}`;
      const tile = document.createElement('div');
      tile.setAttribute('id', colorCount)
      tile.setAttribute('colorId', colorId)
      tile.setAttribute('coor', coor)
      tile.setAttribute('class', 'mix-tile')
      tile.style['background-color'] = colorId;
      tile.style['aspect-ratio'] = 1
      tile.addEventListener('click', mixTile)
      let info = {
        ele: tile,
        x, 
        y 
      }
      allTiles[coor] = info;
      tileGrid.appendChild(tile)
      colorCount++
    }
  };
  tileGrid.style.display = 'tile-grid';
  tileGrid.style['grid-gap'] = '2px';
  tileGrid.style['grid-template-columns'] = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
  // SET START TILE 
  setPath();
  markOptions();
}




function markOptions() {
  let tile = allTiles[currentTile.coor];
  tile.ele.style.border = '8px inset white';
  optionTiles = nextMoveOptions(true)
}

function nextMoveOptions(styleCheck) {
  let newOptionTiles = [];

  OPTIONS.forEach(pos => {
    let newX = pos[0] + tile.x;
    let newY = pos[1] + tile.y;
    let newCoor = `${newX}-${newY}`
    if (newX <= 10 && newX > 0 && newY <= 10 && newY > 0 && !selectedTiles.includes(newCoor)) {
      newOptionTiles.push(newCoor);
      if (styleCheck) {
        let optionTile = allTiles[newCoor].ele;
        optionTile.style.border = '1px solid white'
        
      }
    }
  });
  return newOptionTiles
}



function clearStyle() {
  optionTiles.forEach(coor => {
    let oldTile = allTiles[coor].ele;
    oldTile.style.border = 'none'
  })
}

