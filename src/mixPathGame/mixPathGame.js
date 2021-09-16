import { COLORS, rgbCMYK, cmykRGB, cmykMax, setFirstColor, addColor, C, M, Y, K } from '../main/color'
import { randomNum, posObject, colorArr, sameArray, styleFinish, optionStyle, clearStyle, finishStar, createSwatches, addArrow } from '../main/helper'
import { createLevelCount, createLevelDiv, createTile, livesUpdate, updateBackgound, updateNav } from '../main/styleElements';

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
  
  optionTiles = markOptions();
};


function createMixGrid() {

  let grid = createLevelDiv(level);
  updateNav('lives', lives);

  let colorCount = 0;
  for (let x = 1; x <= 10; x++) {
    for (let y = 1; y <= 10; y++) {
      let coor = `${x}-${y}`;
      let tile = createTile(grid, colorCount, x, y, coor);
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

  }

  

  targetColor = `rgb(${parseInt(mixedColor[0])}, ${parseInt(mixedColor[1])}, ${parseInt(mixedColor[2])})`;
  finishTile = currentTile.coor;
  // let finishEle = allTiles[finishTile].ele;
  // finishEle.style['border-radius'] = '100%';
  // finishEle.style.border = 'none'

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
  let body = document.querySelector('body')
  if ( targetColor === color && count - 1 === level ) {
    Object.values(allTiles).forEach(tile => {
      let { coor, ele } = tile;
      if (!selectedTiles.includes(coor) || coor === finishTile ) {
        ele.style.border = '1px solid black';
        ele.style['background-color'] = color;
        // if (ele.firstChild) {
        //   ele.removeChild(ele.firstChild)
        // }
      }
    })

    let finalEle = allTiles[finishTile].ele;
    finalEle.classList.remove('blink');
    finalEle.style['border-radius'] = '0';
    finalEle.style.border = '1px solid black';
    // finalEle.removeChild(finalEle.firstChild);
    // if (finalEle.firstChild) finalEle.removeChild(finalEle.firstChild);


    let success = document.createElement('DIV');
    success.setAttribute('class', 'success');
    success.innerHTML = '...success';
    body.appendChild(success);
    let increment = Math.ceil(level / 2);
    livesUpdate(lives, 'add', increment)

    let swatch = document.querySelector('#target-color');
    swatch.classList.remove('blink');

    window.setTimeout(() => {
      let buttonDiv = document.createElement('DIV');
      buttonDiv.classList.add('button-cont', 'blink');
      let levelButton = document.createElement('BUTTON');
      levelButton.innerHTML = 'next level...';
      levelButton.setAttribute('class', 'level-button');
      buttonDiv.appendChild(levelButton);
      body.appendChild(buttonDiv);

      // heartCont.remove();
      levelButton.addEventListener('click', () => {

        let results = document.querySelector('.results-cont');
        let prevLevel = document.querySelector(`#level-${level}`);
        results.appendChild(prevLevel);
        // prevLevel.style.position = 'relative'
        // let swatches = document.querySelector('.swatches');
        // swatches.remove();
        
        lives = lives + Math.ceil(level / 2);
        level = level + 1;
        
        // selectedTiles = [];
        count = 1;
        setNewGrid();
        // let body = document.querySelector('body');
        // body.style['background-color'] = targetColor;
        // document.querySelector(`#group-${level}`).scrollIntoView({
          //   behavior: 'smooth'
          // });
          success.remove();
          buttonDiv.remove();
          
          swatch.classList.add('blink');

          
          return true;
        })
        // finalEle.removeChild(finalEle.firstChild)
        
    }, 1750)
  } else if (targetColor !== color && count - 1 === level) {
      let final = currentTile.ele
      // if (final.firstChild) {
      //   final.removeChild(final.firstChild);
      // }
      // final.classList.add('wrong');
      final.style['border-radius'] = '100%'
  
      // let outline = document.createElement('DIV');
      // outline.setAttribute('class', 'dot-outline');
      // x.classList.add('dot');
      // outline.appendChild(x);
      // final.appendChild(outline);
      livesUpdate(lives, 'sub', -1)
      lives = lives - 1;
      final.addEventListener('click', resetGrid);
  
      return false;
    } else {
      nextMoveOptions(false);
      return false
    }
}



export function mixTile() {
  let clickedCoor = this.getAttribute('coor');
  let check = optionTiles.some(coor => coor === clickedCoor)
  if (check) {
    optionTiles.forEach(coor => {
      let tile = allTiles[coor].ele;
      let hoverColor = tile.getAttribute('colorId');
      tile.removeEventListener('mouseover', hoverSwatch,true)
    })
    clearStyle(optionTiles, currentTile, finishTile, true);
    selectedTiles.push(clickedCoor);
    let colorOne = allTiles[currentTile.coor].ele.getAttribute('colorId')
    if (checkColor) {
      currentColor = setFirstColor(colorOne);
      checkColor = false;
    }
    let colorTwo = this.getAttribute('colorId')

    // ADD COLOR RETURN MIXED RGB
    count = count + 1
    let rgb = addColor(colorTwo, count);
    let rgbStr = `rgb(${parseInt(rgb[0])}, ${parseInt(rgb[1])}, ${parseInt(rgb[2])})`
  

    // SET NEW COLOR & MARK NEXT OPTIONS
    this.style['background-color'] = rgbStr;


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
    let swatch = document.querySelector('#current-color');
    swatch.style['background-color'] = rgbStr;
    this.style['border-radius'] = '0';
    optionTiles = markOptions();
    // checkWinLose(rgbStr);
    if ( checkWinLose(rgbStr) === false  ) {
      // LOSE
      currentTile = posObject(this.getAttribute('coor'));
      if (optionTiles.length === 0 || count - 1 === level ) {
        let star = document.querySelector('.star');
        if (star) star.remove(); 
        let x = document.querySelector('.dot');
        x.innerHTML = 'X';
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


export const hoverSwatch = (hoverColor) => {    
  return () => {
    let swatch = document.querySelector('#hover-color');
    swatch.style['background-color'] = hoverColor;

  }
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
    let arrow = addArrow(pos.name);
    
    if (newX <= 10 &&
      newX > 0 &&
      newY <= 10 &&
      newY > 0 &&
      !selectedTiles.includes(newCoor)) {
        
        
        if (!styleCheck) {
          newOptionTiles.push(newCoor);
        } else if (newCoor !== finishTile) {
        let optionTile = allTiles[newCoor].ele;
        let hoverColor = optionTile.getAttribute('colorId');
        optionTile.addEventListener('mouseover', hoverSwatch(hoverColor));
        newOptionTiles.push(newCoor);
        // [[-1, 0], [1, 0], [0, -1], [0, 1]];
        let radiusStr = optionStyle(pos.dir);
        // let arrow = <i class="fas fa-caret-up"></i>
        optionTile.appendChild(arrow);
        arrow.style.display = 'flex'
        
        // EVENT LISTENER
        
        
        
        // arrow.style['color'] = targetColor;
        // optionTile.style['border-radius'] = radiusStr;
        // optionTile.style.border = 'none';
        // optionTile.style.border = '1px solid white'
      } else if (count === level && newCoor === finishTile) {
        let optionTile = allTiles[newCoor].ele;
        let hoverColor = optionTile.getAttribute('colorId');
        optionTile.addEventListener('mouseover', hoverSwatch(hoverColor))
        newOptionTiles.push(newCoor);
        // newOptionTiles = [newCoor];
        // let optionTile = allTiles[newCoor].ele;

        // optionTile.style.border = '1px solid transparent';
        // optionTile.style['border-radius'] = '100%';
        // let star = document.createElement('DIV');
        // star.innerHTML = '★';
        // optionTile.appendChild(star);
        styleFinish(finishTile);
      }
      
    }
  });
  
  if ( newOptionTiles.includes(finishTile) ) {
    clearStyle(newOptionTiles, currentTile, finishTile);
    newOptionTiles.forEach(coor => {
      let tile = allTiles[coor].ele;
      let hoverColor = tile.getAttribute('colorId')
      tile.removeEventListener('mouseover', hoverSwatch,true)
    })
    newOptionTiles = [finishTile]
  } else if ( count > level ) {
    clearStyle(newOptionTiles, currentTile, finishTile);
    newOptionTiles = [];
  }

  return newOptionTiles
}





