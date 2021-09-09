import { COLORS, rgbCMYK, cmykRGB, cmykMax, setFirstColor, addColor, C, M, Y, K } from '../main/color'
import { randomNum, posObject, colorArr, sameArray, styleFinish, optionStyle, clearStyle } from '../main/helper'

// BOARD
let tileGrid;
let body;
export let allTiles = {};
let checkColor = true;

// GAMEPLAY

let selectedTiles = [];
let path;
let startTile;
let finishTile;
let targetColor;
let level = 1;
let lives = 3;

export const OPTIONS = [
  { dir: [-1, 0], name: 'up' },
  { dir: [1, 0], name: 'down' },
  { dir: [0, -1], name: 'left' },
  { dir: [0, 1], name: 'right' }
];

// CURRENT MOVE
let currentTile;
let currentColor;
let count = 1;
let optionTiles = [];
// let direction;



// let mixedTiles = [];


// DOM LOADED START
export function startGame() {

  // CREATE GRID
  setNewGrid();

  // ADD RESET... for now
  // const reset = document.querySelector('.reset');
  // reset.addEventListener('click', resetGrid);


}

function setNewGrid() {
  createMixGrid();
  setPath();
  resetVariables();
  optionTiles = markOptions();
};


function createMixGrid() {
  body = document.querySelector('body');
  // tileGrid = document.querySelector('.tile-grid');
  let cont1 = document.createElement('div');
  cont1.setAttribute('class', `level-cont`);
  cont1.setAttribute('id', `level-${level}`);
  body.appendChild(cont1);
  let cont2 = document.createElement('div');
  cont1.appendChild(cont2);
  cont2.setAttribute('class', 'tile-grid');
  cont2.setAttribute('id', `group-${level}`);
  
  let cont3 = document.createElement('div');
  cont3.setAttribute('class', 'level-text');
  cont3.innerHTML = `${level}`;
  cont1.appendChild(cont3);

  let livesCont = document.querySelector('.lives');
  livesCont.innerHTML = `${lives}`;
  // tileGrid.appendChild(cont)
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
      // tile.style.border = '1px solid black';
      tile.style['aspect-ratio'] = 1;
      tile.addEventListener('click', mixTile)
      let info = {
        ele: tile,
        coor: coor,
        x,
        y
      }
      allTiles[coor] = info;
      cont2.appendChild(tile)
      colorCount++
    }
  };
  cont2.style.display = 'tile-grid';
  // cont2.style['grid-gap'] = '4px';
  cont2.style['grid-template-columns'] = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
  // SET START TILE 
  // setPath();
  // markOptions();
}



function findPath() {
  let mixedColor;
  currentColor = setFirstColor(currentColor);
  while ((count) <= level) {
    optionTiles = nextMoveOptions(false);
    let next = optionTiles[randomNum(optionTiles.length)];
    // return next = `${newX}-${newY}`
    selectedTiles.push(next);
    if ( !allTiles[next] ) {
     return findPath();
    }
    let nextColor = allTiles[next].ele.getAttribute('colorId');
    mixedColor = addColor(nextColor, count);
    currentTile = posObject(next);
    count = count + 1
    // count + 1;
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

function checkLives() {
  if (lives === 0) {
    alert('...you lose')
  }
}


function checkWinLose(color) {
  // checkLives();
  if ( targetColor === color && count - 1 === level ) {
    Object.values(allTiles).forEach(tile => {
      let { coor, ele } = tile;
      if (!selectedTiles.includes(coor)) {
        ele.style.border = 'none';
        ele.style['background-color'] = color;
      }
    })
    lives = lives + level;
    level = level + 1;
    let finalEle = allTiles[finishTile].ele;
    finalEle.classList.remove('blink');
    finalEle.style.border = 'none'
    finalEle.style['border-radius'] = '0'
    finalEle.removeChild(finalEle.firstChild)
    // selectedTiles = [];
    count = 1;
    setNewGrid();
    document.querySelector(`#group-${level}`).scrollIntoView({
      behavior: 'smooth'
    });

    return true;
  } 
  let nextOptions = nextMoveOptions(false);
  if ((targetColor !== color && count - 1 === level) || nextOptions.length === 0 ) {
    debugger
    let final = currentTile.ele
    if (final.firstChild) {
      final.removeChild(final.firstChild);
    }
    final.setAttribute('class', 'wrong');
    let x = document.createElement('DIV');
    x.innerHTML = 'x';
    x.setAttribute('class', 'wrong-x');
    final.appendChild(x)
    lives = lives - 1;
    final.addEventListener('click', resetGrid);

    return false;
  }
}


function mixTile() {
  let clickedCoor = this.getAttribute('coor');
  let check = optionTiles.some(coor => coor === clickedCoor)
  if (check) {
    clearStyle(optionTiles, currentTile, finishTile, true);
    selectedTiles.push(clickedCoor);
    let colorOne = allTiles[currentTile.coor].ele.getAttribute('colorId')
    if (checkColor) {
      currentColor = setFirstColor(colorOne);
      checkColor = false;
    }
    let colorTwo = this.getAttribute('colorId')

    // ADD COLOR RETURN MIXED RGB
    let rgb = addColor(colorTwo, count);
    let rgbStr = `rgb(${parseInt(rgb[0])}, ${parseInt(rgb[1])}, ${parseInt(rgb[2])})`
    count = count + 1
  

    // SET NEW COLOR & MARK NEXT OPTIONS
    this.style['background-color'] = rgbStr;

    // SET CURRENT
    
    // CHECK WIN or LOSE
    optionTiles.forEach(coor => {
      let oldOption = allTiles[coor].ele;
      if (coor !== currentTile) {
        // oldOption.style.border = '1px solid black'
      } else {
        oldOption.style.border = 'none'
      }
    })
    currentTile = allTiles[clickedCoor];
    this.style['border-radius'] = '100%';
    if ( !checkWinLose(rgbStr) ) {
      currentTile = posObject(this.getAttribute('coor'));
      optionTiles = markOptions();

    }

  }
}





export function resetGrid() {
  let prev = document.querySelector(`#level-${level}`);
  prev.remove();
  createMixGrid();
  resetVariables();
  optionTiles = markOptions();
  // console.log('clicked')
  
}

function resetVariables() {
  currentTile = startTile;
  count = 1
  // path = selectedTiles;
  // selectedTiles = [startTile];
  selectedTiles = [currentTile.coor];
  let color = allTiles[currentTile.coor].ele.getAttribute('colorId');
  currentColor = setFirstColor(color);
  styleFinish(finishTile);
}


function markOptions() {
  let tile = allTiles[currentTile.coor];
  tile.ele.style['border-radius'] = '100%'
  return nextMoveOptions(true)
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
      newY > 0 &&
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
        newOptionTiles.push(newCoor);
        // newOptionTiles = [newCoor];
        let optionTile = allTiles[newCoor].ele;

        // optionTile.style.border = '1px solid transparent';
        optionTile.style['border-radius'] = '100%';
        let star = document.createElement('DIV');
        star.innerHTML = '★';
        optionTile.appendChild(star);
        
      }
      
    }
  });
  
  if ( newOptionTiles.includes(finishTile) ) {
    clearStyle(newOptionTiles, currentTile, finishTile);
    newOptionTiles = [finishTile]
  } else if ( count > level ) {
    clearStyle(newOptionTiles, currentTile, finishTile);
    newOptionTiles = [];
  }

  return newOptionTiles
}




