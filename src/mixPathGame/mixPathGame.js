import { COLORS, rgbCMYK, cmykRGB, cmykMax, setFirstColor, addColor, C, M, Y, K } from '../main/color'
import { randomNum, posObject, colorArr, sameArray, optionStyle, createSwatches, addArrow } from '../main/helper'
import { addResult, createLevelCount, createLevelDiv, createNextButton, createTile, livesUpdate, removeOption, styleWin, updateBackgound, updateNav, clearStyle, styleOption, removeHover, styleFinish, finishStar, createResults } from '../main/styleElements';

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
let hoverColor;
// let direction;



// let mixedTiles = [];


// DOM LOADED START
export function startGame() {

  // CREATE GRID
  setNewGrid();
  createResults();

  // ADD RESET... for now
  // const reset = document.querySelector('.reset');
  // reset.addEventListener('click', resetGrid);


}

function setNewGrid() {
  let step = createMixGrid();
  setPath();

  updateBackgound(targetColor);
  
  step.remove();
  createMixGrid();
  finishStar(finishTile);
  resetVariables();
  updateNav('level', level);
  
  optionTiles = markOptions();
};


function createMixGrid() {

  let grid = createLevelDiv(level);
  updateNav('lives', lives);

  let colorCount = 0;
  for (let x = 1; x <= 10; x++) {
    for (let y = 1; y <= 10; y++) {
      let coor = `${x}-${y}`;
      let tile = createTile(colorCount, x, y, coor, grid);
      allTiles[coor] = tile;
      colorCount++
    }
  };

  return grid
}



function findPath() {
  let mixedColor;
  currentColor = setFirstColor(currentColor);
  
  while ((count) <= level) {
    optionTiles = nextMoveOptions(false);

    let next = optionTiles[randomNum(optionTiles.length)];
    selectedTiles.push(next);

    let nextColor = allTiles[next].ele.getAttribute('colorId');
    count = count + 1

    mixedColor = addColor(nextColor, count);
    currentTile = posObject(next);

  };

  targetColor = `rgb(${parseInt(mixedColor[0])}, ${parseInt(mixedColor[1])}, ${parseInt(mixedColor[2])})`;
  finishTile = currentTile.coor;

  path = selectedTiles;
  resetVariables();
}



function setPath() {
  // FIRST POSITION
  let x, y, coor;
  if (currentTile) {
    x = currentTile.x;
    y = currentTile.y;
    coor = currentTile.coor;
  } else {
    x = randomNum(10) + 1;
    y = randomNum(10) + 1;
    coor = `${x}-${y}`;

  }
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
}

function checkLives() {
  if (lives === 0) {
    alert('...you lose')
  }
}


function checkWinLose(color) {
  // checkLives();
  
  if ( targetColor === color && count - 1 === level ) {
    // CORRECT

    styleWin(selectedTiles, finishTile, color, level, lives);    
    
    // NEXT LEVEL BUTTON
    window.setTimeout(() => {
      let buttonDiv = createNextButton();
      buttonDiv.addEventListener('click', () => {
        addResult(level, selectedTiles);

        lives = lives + Math.ceil(level / 2);
        level = level + 1;
        count = 1;
        setNewGrid();
        let success = document.querySelector('.success');
        success.remove();
        buttonDiv.remove();
        let swatch = document.querySelector('#target-color');
        swatch.classList.add('blink');

        return true;
      })
    }, 1750)

  } else if (targetColor !== color && count - 1 === level) {
    // INCORRECT
      let final = currentTile.ele
      final.style['border-radius'] = '100%'

      livesUpdate(lives, 'sub', -1)
      lives = lives - 1;
      final.addEventListener('click', resetGrid);
  
      return false;
    } else {
      // NEXT MOVE
      nextMoveOptions(false);
      return false;
    };
};



export function mixTile() {
  let clickedCoor = this.getAttribute('coor');
  let check = optionTiles.some(coor => coor === clickedCoor);
  if (check) {
    // REMOVE OPTION STYLING
    
    removeOption(optionTiles, currentTile, finishTile, true);
    // clearStyle(optionTiles, currentTile, finishTile, true);
    selectedTiles.push(clickedCoor);
    let colorOne = allTiles[currentTile.coor].ele.getAttribute('colorId')
    if (checkColor) {
      currentColor = setFirstColor(colorOne);
      checkColor = false;
    }
    // let posCoor = this.getAttribute('coor');
    // let newTile = allTiles[posCoor].ele;
    let colorTwo = this.getAttribute('colorId');
    
    // ADD COLOR RETURN MIXED RGB
    count = count + 1
    let rgb = addColor(colorTwo, count);
    let rgbStr = `rgb(${parseInt(rgb[0])}, ${parseInt(rgb[1])}, ${parseInt(rgb[2])})`
    
    
    // SET NEW COLOR & MARK NEXT OPTIONS
    
    
    // CHECK WIN or LOSE
    // optionTiles.forEach(coor => {
      //   let oldOption = allTiles[coor].ele;
      //   if (coor !== currentTile) {
        //     // oldOption.style.border = '1px solid black'
        //   } else {
          //     oldOption.style.border = '1px solid black'
          //   }
          // })
    currentTile = allTiles[clickedCoor];
    currentTile.ele.style['background-color'] = rgbStr;

    let swatch = document.querySelector('#current-color');
    swatch.style['background-color'] = rgbStr;
    this.style['border-radius'] = '0';
    optionTiles = markOptions();
    // checkWinLose(rgbStr);
    if ( checkWinLose(rgbStr) === false  ) {
      // LOSE
      currentTile = posObject(this.getAttribute('coor'));
      if (optionTiles.length === 0 || count -1 === level ) {
        let star = document.querySelector('.star');
        if (star) star.remove(); 
        let x = document.querySelector('.dot');
        x.innerHTML = 'X';
        this.classList.remove('blink')
        let blink = allTiles[currentTile.coor].ele.firstChild;
        blink.classList.add('blink');
        let removeBlink = document.querySelector('#target-color');
        removeBlink.classList.remove('blink');
        
      }
      
    } else {

      // WIN
      let star = document.querySelector('.star');
      if (star) star.remove(); 
      let x = document.querySelector(`#dot-${count - 1}`);
      x.remove();
    }

  }
}





export function resetGrid() {
  let prev = document.querySelector(`#level-${level}`);
  prev.remove();
  createMixGrid();
  let blink = document.querySelector('#target-color');
  blink.classList.add('blink');
  // document.querySelector('body');
  // let tiles = document.querySelector('.tile-grid');
  // let background = document.querySelector('.image-cont');
  // body.style['background-color'] = targetColor;
  // background.style['background-color'] = targetColor;
  // tiles.style['background-color'] = targetColor;
  resetVariables();
  finishStar(finishTile)
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


  updateBackgound(targetColor);
  
  // finishStar(finishTile);
}


function markOptions() {
  let tile = allTiles[currentTile.coor];
  if (currentTile.coor !== finishTile) {
    tile.ele.style['border-radius'] = '100%'
  }
  let dotOutline = document.createElement('DIV');
  dotOutline.setAttribute('class', 'dot-outline');
  dotOutline.setAttribute('ID', `dot-${count - 1}`);
  let dot = document.createElement('DIV');
  dot.setAttribute('class', 'dot');
  dot.innerHTML = `${level - (count - 1)}`;
  dotOutline.appendChild(dot);
  tile.ele.appendChild(dotOutline)
  return nextMoveOptions(true);
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
    
    if (newX <= 10 &&
      newX > 0 &&
      newY <= 10 &&
      newY > 0 &&
      !selectedTiles.includes(newCoor)) {
         
      if (!styleCheck) {
        newOptionTiles.push(newCoor);
      } else if (newCoor !== finishTile) {
        // STYLE NEXT OPTION
        let arrow = styleOption(optionTiles, newCoor, pos.name);
        newOptionTiles.push(newCoor);
      } else if (count === level && newCoor === finishTile) {
        let optionTile = allTiles[newCoor].ele;
        styleOption(optionTiles, newCoor, pos.name, true);
        newOptionTiles.push(newCoor);
        styleFinish(finishTile);
      }
      
    }
  });


  if (newOptionTiles.includes(finishTile) && count === level) {
    let finalIdx = newOptionTiles.indexOf(finishTile);
    let optionEdit = [...newOptionTiles];
    optionEdit.splice(finalIdx, 1);
    removeOption(optionEdit, currentTile, finishTile);
    
    newOptionTiles = [finishTile]
  } else if ( count > level ) {
    let newEle = removeOption(newOptionTiles, currentTile, finishTile);
    // let coor2 = newEle.getAttribute('coor');
    // allTiles[coor].ele = newEle;
    newOptionTiles = [];
  }

  return newOptionTiles
}





