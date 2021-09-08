import { COLORS, mixTilesFour, rgbCMYK, cmykRGB } from '../main/color'

// BOARD
let tileGrid;
let body;
let allTiles = {};
let checkColor = true;



// GAMEPLAY
const OPTIONS = [
  {dir: [-1, 0], name: 'up'}, 
  {dir: [1, 0], name: 'down'}, 
  {dir: [0, -1], name: 'left'}, 
  {dir: [0, 1], name: 'right'}
];
let selectedTiles = [];
let path;
let startTile;
let finishTile;
let targetColor;
let level = 3;
let lives = 3;

// CURRENT MOVE
let currentTile;
let count = 1;
let optionTiles = [];
let C, M, Y, K = 0;
let direction;


const up = [-1, 0];
const down = [1, 0];
const left = [0, -1];
const right = [0, 1];

// let mixedTiles = [];

let currentColor;

function randomNum(num) {
  return Math.floor(Math.random() * num) 
}

function findPath() {
  let mixedColor;
  setFirstColor(currentColor);
  while ((count) <= level) {
    optionTiles = nextMoveOptions(false);
    let next = optionTiles[randomNum(optionTiles.length)];
    // return next = `${newX}-${newY}`
    selectedTiles.push(next);
    
    let nextColor = allTiles[next].ele.getAttribute('colorId');
    mixedColor = addColor(nextColor);
    currentTile = posObject(next);
    count + 1;
  }
  

  targetColor = `rgb(${parseInt(mixedColor[0])}, ${parseInt(mixedColor[1])}, ${parseInt(mixedColor[2])})`;
  finishTile = currentTile.coor;
  // let finishEle = allTiles[finishTile].ele;
  // finishEle.style['border-radius'] = '100%';
  // finishEle.style.border = 'none'
  let body = document.querySelector('body');
  body.style['background-color'] = targetColor;

  // RESET VARIABLES FOR GAMEPLAY
  // currentTile = startTile;
  // count = 1
  // optionTiles = [startTile];
  path = selectedTiles;
  // selectedTiles = [currentTile.coor];
  // C = 0;
  // M = 0;
  // Y = 0;
  debugger
  resetVariables();
}



function setPath() {
  // FIRST POSITION
  let x = randomNum(10) + 1;
  let y = randomNum(10) + 1;
  let coor = `${x}-${y}`;
  let coorObj = {
      coor,
      x,
      y
    };
  currentTile = coorObj;
  startTile = coorObj;
  selectedTiles.push(coor);
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
  let step = rgbColor.split('(')[1].split(')')[0].split(', ');

  return step.map(num => parseInt(num));
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

function checkWinLose(color) {
  if ( targetColor === color && count - 1 === level ) {
    Object.values(allTiles).forEach(tile => {
      let { coor, ele } = tile;
      if (!selectedTiles.includes(coor)) {
        ele.style.border = 'none';
        ele.style['background-color'] = color;
      }
    })
    level = level + 1;
    lives = lives + 2;
    selectedTiles = [];
    count = 1;
    setNewGrid();
    document.querySelector(`#group-${level}`).scrollIntoView({
      behavior: 'smooth'
    });

    return true;
  }
  return false;
}


function mixTile() {
  let clickedCoor = this.getAttribute('coor');
  let check = optionTiles.some(coor => coor === clickedCoor)
  if (check) {
    clearStyle(optionTiles, true);
    selectedTiles.push(clickedCoor);
    let colorOne = allTiles[currentTile.coor].ele.getAttribute('colorId')
    if (checkColor) {
      setFirstColor(colorOne);
      checkColor = false;
    }
    let colorTwo = this.getAttribute('colorId')

    // ADD COLOR RETURN MIXED RGB
    let rgb = addColor(colorTwo);
    let rgbStr = `rgb(${parseInt(rgb[0])}, ${parseInt(rgb[1])}, ${parseInt(rgb[2])})`
  
  

    // SET NEW COLOR & MARK NEXT OPTIONS
    this.style['background-color'] = rgbStr;

    // CHECK WIN or LOSE
    optionTiles.forEach(coor => {
      let oldOption = allTiles[coor].ele;
      if (coor !== currentTile) {
        oldOption.style.border = '1px solid black'
      } else {
        oldOption.style.border = 'none'
      }
    })
    if ( !checkWinLose(rgbStr) ) {
      currentTile = posObject(this.getAttribute('coor'));
      markOptions();

    }

  }
}



function createMixGrid() {
 body = document.querySelector('body');
  // tileGrid = document.querySelector('.tile-grid');

  let cont = document.createElement('div')
  body.appendChild(cont)
  // tileGrid.appendChild(cont)
  cont.setAttribute('class', 'tile-grid');
  cont.setAttribute('id', `group-${level}`);
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
      tile.style.border = '1px solid black';
      tile.style['aspect-ratio'] = 1;
      tile.addEventListener('click', mixTile)
      let info = {
        ele: tile,
        coor: coor,
        x, 
        y 
      }
      allTiles[coor] = info;
      cont.appendChild(tile)
      colorCount++
    }
  };
  cont.style.display = 'tile-grid';
  cont.style['grid-gap'] = '4px';
  cont.style['grid-template-columns'] = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
  // SET START TILE 
  // setPath();
  // markOptions();
}

export function setNewGrid() {
  createMixGrid();
  setPath();
  resetVariables();
  markOptions();
};

export function resetGrid() {
  let prev = document.querySelector(`#group-${level}`);
  prev.remove();
  createMixGrid();
  resetVariables();
  markOptions();
  // console.log('clicked')
  
}

function resetVariables() {
  currentTile = startTile;
  count = 1
  // optionTiles = [startTile];
  path = selectedTiles;
  selectedTiles = [currentTile.coor];
  C = 0;
  M = 0;
  Y = 0;
  styleFinish();
}

function styleFinish() {

  let finishEle = allTiles[finishTile].ele;
  finishEle.style['border-radius'] = '100%';
  // finishEle.style.border = 'none';
  finishEle.setAttribute('class', 'blink')
  // setInterval(function() {
  //   $(`${}`)
  // })
  
}




function markOptions() {
  let tile = allTiles[currentTile.coor];
  tile.ele.style['border-radius'] = '100%'
  // tile.ele.style.border = '8px inset white';
  optionTiles = nextMoveOptions(true)
}

function nextMoveOptions(styleCheck) {
  let newOptionTiles = [];
  let tile = allTiles[currentTile.coor];

  Object.values(OPTIONS).forEach(pos => {
    let newX = pos.dir[0] + tile.x;
    let newY = pos.dir[1] + tile.y;
    let newCoor = `${newX}-${newY}`

    // SHOULD CREATE ARROW INSTEAD
    // let arrow = document.querySelector(`#${pos.name}`);
    let arrow = document.createElement('DIV');
    arrow.setAttribute('id', `${pos.name}`);
    arrow.setAttribute('class', 'arrow-icons')

    if (newX <= 10 && 
        newX > 0 && 
        newY <= 10 && 
        newY > 0  &&
        !selectedTiles.includes(newCoor)) {
      if (!styleCheck) {
        newOptionTiles.push(newCoor);
      } else if (newCoor !== finishTile) {
        newOptionTiles.push(newCoor);
        let optionTile = allTiles[newCoor].ele;
        // [[-1, 0], [1, 0], [0, -1], [0, 1]];
        let radiusStr = optionStyle(pos.dir);
        // let arrow = <i class="fas fa-caret-up"></i>
        optionTile.appendChild(arrow);
        arrow.style.display = 'flex'
        // arrow.style['color'] = targetColor;
        optionTile.style['border-radius'] = radiusStr;
        optionTile.style.border = 'none';
        // optionTile.style.border = '1px solid white'
      } else if (count === level && newCoor === finishTile) {
        clearStyle(newOptionTiles);
        newOptionTiles = [newCoor];
        let optionTile = allTiles[newCoor].ele;
        optionTile.style.border = '2px solid black';
        
      }
    
    }
  });
  return newOptionTiles
}



function clearStyle(tiles, updateCheck = false) {
  tiles.forEach(coor => {
    let oldTile = allTiles[coor].ele;
    if (oldTile.firstChild) {
      oldTile.removeChild(oldTile.firstChild)
    }
    oldTile.style.border = 'none';
    oldTile.style['border-radius'] = '0 0 0 0';
  })
  if (updateCheck) {
    let prev = allTiles[currentTile.coor].ele;
    prev.style['border-radius'] = '100%';
  }
  // prev.style.width = '80%';
  // prev.style.margin = 'auto';
  // switch (direction) {
  //   case up:
  //     prev.style.border = `3px solid rgb(${targetColor[0]}, ${targetColor[1]}, ${targetColor[2]})`
  //     prev.style['border-top'] = 'none';
  //     break;
  //   case down:
  //     prev.style.border = `3px solid rgb(${targetColor[0]}, ${targetColor[1]}, ${targetColor[2]})`
  //     prev.style['border-bottom'] = 'none';
  //     break;
  //   case right:
  //     prev.style.border = `3px solid rgb(${targetColor[0]}, ${targetColor[1]}, ${targetColor[2]})`
  //     prev.style['border-right'] = 'none';
  //     break;
  //   case left:
  //     prev.style.border = `3px solid rgb(${targetColor[0]}, ${targetColor[1]}, ${targetColor[2]})`
  //     prev.style['border-left'] = 'none';
  //     break;

  // }
  // prev.style.border = 'none';
  // prev.style.border = '2px solid white';

}

function optionStyle(coor) {
  let radiusStr;

  if (sameArray(coor, up)) {
    radiusStr = '100% 100% 0 0';
    direction = up;
  } else if (sameArray(coor, right)) {
    radiusStr = '0 100% 100% 0';
    direction = right;
  } else if (sameArray(coor, down)) {
    radiusStr = '0 0 100% 100%';
    direction = down;
  } else if (sameArray(coor, left)) {
    radiusStr = '100% 0 0 100%';
    direction = left;
  }

  return radiusStr;
}

function sameArray(arr1, arr2) {
  return arr1.every((val, index) => val === arr2[index])
}
