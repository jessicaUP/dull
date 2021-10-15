import { mixTile, allTiles, level } from '../mixPathGame/mixPathGame'
import { COLORS } from '../main/color'
import { randomNum } from './helper';

// GRID ELEMENTS

let mixClick = false;

let messages = [
  '...you can do better then that',
  '...that\'s all you got?!',
  '...why are you taking a break',
  '...keep going',
  '...can you handle the pressure?!'
]


export function updateBackgound(targetColor) {
  let body = document.querySelector('body');
  let background = document.querySelector('.image-cont');
  body.style['background-color'] = targetColor;
  background.style['background-color'] = targetColor;
}

export function createTile(colorCount, x, y, coor, parentDiv = false) {
  // if (mixCLick) {
  //   // WHERE I CAN MIX UP BOARD IF THEY DO NOT WANT IT IN COLOR ORDER.
  // }
  let colorId = COLORS[colorCount];


  const tile = document.createElement('div');
  tile.setAttribute('id', `tile-${colorCount}`);
  tile.setAttribute('colorId', colorId);
  tile.setAttribute('coor', coor);
  tile.setAttribute('color-idx', colorCount);
  tile.classList.add(`mix-tile`);
  tile.style['background-color'] = colorId;
  // tile.style.border = '1px solid black';
  tile.style['aspect-ratio'] = 1;
  tile.addEventListener('click', mixTile);
  tile.addEventListener('mouseover', () => {
    let swatch = document.querySelector('#hover-color');
    swatch.style['background-color'] = 'black';
  });
  let info = {
    ele: tile,
    coor: coor,
    x,
    y
  }

  if (parentDiv) {
    parentDiv.appendChild(tile)
  }

  return info;
}

export function styleOption(optionTiles, coor, pos, finalCheck) {
  let optionTile = allTiles[coor].ele;
  let hoverColor = optionTile.getAttribute('colorId');
  hoverFunction(optionTiles, optionTile, hoverColor);
  optionTile.style.cursor = 'pointer';
  
  let arrow = addArrow(pos);
  optionTile.appendChild(arrow);
  arrow.style.display = 'flex'
  optionTile.style.cursor = ''
  
  if (finalCheck) {
    optionTile.removeChild(optionTile.firstChild)
    // let star = optionTile.firstChild;
    // star.style['font-size'] = '1vw';
    // arrow.style['font-size']
    // star.style['margin-bottom'] = '5px';
  }
  
  return arrow
};

function addArrow(coor) {
  let arrow = document.createElement('DIV');
  arrow.setAttribute('id', coor);
  arrow.classList.add('arrow-icons');
  return arrow;
}



export function removeHover(tile) {
  // let newEle = tile.cloneNode(true);
  tile.style.cursor = 'default';
  let colorId = COLORS[colorCount];
  let coor = tile.getAttribute('coor');
  let colorCount = tile.getAttribute('color-idx');
  let xy = coor.split('-');
  let newEle = createTile(colorCount, parseInt(xy[0]), parseInt(xy[1]), coor)
  // let coor = tile.getAttribute('coor')
  // newEle.setAttribute('coor', coor);
  tile.parentElement.replaceChild(newEle.ele, tile);
  // newEle.addEventListener('click', mixTile);

  allTiles[coor] = newEle;
  if (newEle.firstChild) newEle.removeChild(newEle.firstChild)
  return newEle;
}

export function removeOption(optionTiles, currentTile, finishTile, updateCheck = false) {
  optionTiles.forEach(coor => {
    let oldTile = allTiles[coor].ele;
    // let coor = oldTile.coor;
    // let colorCount = oldTile
    // let colorId = COLORS[colorCount];
    
    // not working....

    let ele = removeHover(oldTile);
    if (ele.firstChild) {
      ele.removeChild(ele.firstChild)
    };



    return ele;
  })


  if (updateCheck) {
    let prev = allTiles[currentTile.coor].ele;
    prev.style['border-radius'] = '100%';
    let dot = prev.firstChild;
    dot.removeChild(dot.firstChild);

  }
  // return ele

  // NotWorking
}

function hoverStep(optionTile, hoverColor) {
    return () => {
      let swatch = document.querySelector('#hover-color');
      swatch.style['background-color'] = hoverColor;
      let arrow = optionTile.firstChild.cloneNode(true);
      arrow.classList.add('swatch-arrow')
      arrow.style.position = 'relative';
      if (swatch.lastChild) {
        swatch.removeChild(swatch.lastChild)
      }
      swatch.appendChild(arrow)
    }
};


function hoverFunction(optionTiles, optionTile, hoverColor) {
  let hover = () => hoverStep(optionTile, hoverColor);
  optionTile.addEventListener('mouseover', hover());
}

function hoverSwatchFunc(optionTiles, optionTile, hoverColor) {
  return () => {
    let swatch = document.querySelector('#hover-color');
    if (swatch.lastChild) {
      swatch.removeChild(swatch.lastChild)
    }
    debugger
    if (optionTiles.includes(optionTile)) {
      swatch.style['background-color'] = hoverColor;
      let arrow = optionTile.firstChild.cloneNode(true);
      arrow.classList.add('swatch-arrow')
      arrow.style.position = 'relative';
      swatch.appendChild(arrow);
    } else {
      swatch.style['background-color'] = 'black';
    }
  }
}

export function styleFinish(finishTile) {
  let finishEle = allTiles[finishTile].ele;
  finishEle.style.border = '1px solid transparent';
  finishEle.style['border-radius'] = '100%';

  let swatch = document.querySelector('.blink');
  swatch.classList.remove('blink');

  finishEle.classList.add('blink');

}

export function finishStar(finishTile, ele = false) {
  let finishEle;
  if (ele) {
    finishEle = finishTile;
  } else {
    finishEle = allTiles[finishTile].ele;
  }
  
  finishEle.style['border-radius'] = '100%';
  let star = document.createElement('DIV');
  star.classList.add('star')
  if (ele) star.setAttribute('class', 'result-star');
  star.innerHTML = '★';
  finishEle.appendChild(star);
  return star;
}

export function styleWin(selectedTiles, finishTile, color, level, lives) {
  let body = document.querySelector('body');
  let hoverSwatch = document.querySelector('#hover-color');
  hoverSwatch.style['background-color'] = 'black';

  // EXTRA TILES
  Object.values(allTiles).forEach(tile => {
    let { coor, ele } = tile;
    if (!selectedTiles.includes(coor) || coor === finishTile) {
      ele.style.border = '1px solid black';
      ele.style['background-color'] = color;
    }
  });

  // FINISH TILE
  let finalEle = allTiles[finishTile].ele;
  finalEle.classList.remove('blink');
  finalEle.style['border-radius'] = '0';
  finalEle.style.border = '1px solid black';

  // SUCCESS MESSAGE
  let success = document.createElement('DIV');
  success.setAttribute('class', 'success');
  success.innerHTML = '...success';
  body.appendChild(success);
  let increment = Math.ceil(level / 2);
  livesUpdate(lives, 'add', increment)

  let swatch = document.querySelector('#target-color');

  swatch.classList.remove('blink');


}

export function createNextButton() {
  let body = document.querySelector('body');
  let buttonDiv = document.createElement('DIV');
  buttonDiv.classList.add('button-cont', 'blink');
  let levelButton = document.createElement('BUTTON');
  levelButton.innerHTML = 'next level...';
  levelButton.setAttribute('class', 'level-button');
  buttonDiv.appendChild(levelButton);
  body.appendChild(buttonDiv);
  return buttonDiv;
}




// NAV ELEMENTS

export function addResult(level, selectedTiles) {
  // PREPARE CONTAINER
  let levelCont = document.createElement('DIV');
  levelCont.setAttribute('class', 'level-display');
  
  let selected = []


  // ADD SELECTED TILES
  selectedTiles.forEach(coor => {
    let addition = allTiles[coor].ele;
    levelCont.appendChild(addition);
    selected.push(addition);

  });

  
  // ADD LEVEL
  let last = selected.at(-1);
  let star = finishStar(last, true);
  last.style['border-radius'] = '0';
  let levelText = document.createElement('DIV');
  levelText.setAttribute('class', 'level-num');
  levelCont.appendChild(levelText)  
  levelCont.appendChild(levelText)  
  levelText.innerHTML = level;

  let results = document.querySelector('.results-cont');
  results.appendChild(levelCont);




  // DELETE GRID
  let prevLevel = document.querySelector(`#level-${level}`);
  prevLevel.remove();
}

function clearModal() {
  let displays = ['.display-results', '.display-about', '.display-controls', '.display-help'];

  displays.forEach(classString => {
    let displayCont = document.querySelector(classString);
    if (displayCont) displayCont.style.display = 'none'
  })
}

function modalFunc(element, type, displayType = null) {
  return () => {
    let clickedCheck = document.querySelector('.nav-clicked');
    if (clickedCheck) clickedCheck.classList.toggle('nav-clicked');

    // let prevDisplay = document.querySelector('.display');
    // if (prevDisplay) prevDisplay.style.display = 'none';
    clearModal();
    if (type === 'close') {
      element.style.display = 'none';

    } else {
      element.style.display = 'flex';
      let display, current, button;
      switch (displayType) {
        case 'help':
          display = document.querySelector('.display-help');
          current = document.querySelector('.start-message');
          current.innerHTML = '';
          button = document.querySelector('.help-modal');
          break;
        case 'results':                                                                                   
          display = document.querySelector('.display-results')
          current = document.querySelector('.start-message');
          current.innerHTML = '...um you have to beat a level first!';
          button = document.querySelector('.result-star');


          if (level !== 1) {
            let newMessage = messages[randomNum(messages.length)];
            current.innerHTML = newMessage;
          }
          break;
        case 'about':
          display = document.querySelector('.display-about');
          button = document.querySelector('.about');
          break;

      };
      
      if (clickedCheck === button) {
        element.click();
        button.classList.toggle('nav-clicked');
      } 

      button.classList.toggle('nav-clicked');
      display.style.display = 'flex';
    

    }

  }
}

// function helpClick(type) {
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
  return () => {
    let display, nextBtn;
    let currentBtn = document.querySelector('.clicked')
    let current = document.querySelector('.nav-button-clicked');
    current.classList.toggle('nav-button-clicked');
    currentBtn.classList.toggle('clicked');
    // if (current) current.style.display = 'none';

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
    }

    // display.style.display = 'flex';
    nextBtn.classList.toggle('clicked')
    display.classList.toggle('nav-button-clicked');
  }
}

export function createModal(types) {
  let button;
  let display;

  let square = document.querySelector('.display-cont');
  let close = document.querySelector('.close-button');
  let modal = document.querySelector('.modal');

  types.forEach(type => {
    switch (type) {
      case 'help':
        display = document.querySelector('.display-help');
        button = document.querySelector('.help-modal');
        let goalNav = document.querySelector('#goal-btn');
        let colorNav = document.querySelector('#color-btn');
        let pathNav = document.querySelector('#path-btn');
        let consoleNav = document.querySelector('#console-btn');
        let controlsNav = document.querySelector('#controls-btn');
        goalNav.addEventListener('click', btnFunc(goalNav,'page-info'));
        colorNav.addEventListener('click', btnFunc(colorNav,'page-color'));
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
      square.addEventListener('click', (e) => e.stopPropagation());

  })

}

export function createLevelDiv(level) {
  let body = document.querySelector('body');
  // tileGrid = document.querySelector('.tile-grid');
  let cont1 = document.createElement('div');
  cont1.classList.add(`tile-grid`);
  cont1.classList.add(`level-cont`);
  cont1.setAttribute('id', `level-${level}`);

  cont1.style['z-index'] = '2';
  cont1.style.display = 'tile-grid';
  // cont2.style['grid-gap'] = '4px';
  cont1.style['grid-template-columns'] = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
  body.appendChild(cont1);

  return cont1;
}

export function livesUpdate(currentCount, addOrSub, increment) {
  window.setTimeout(() => {

    // CREATE FLASH MEMO
    let livesMemo = document.createElement('DIV');
    livesMemo.setAttribute('class', `${addOrSub}-lives`);
    livesMemo.classList.add('lives-amount');
    livesMemo.innerHTML = `${addOrSub === 'add' ? '+' : ''}${increment}`;
    // let heartCont = document.createElement('DIV');
    // heartCont.setAttribute('class', 'lives-heart');
    // heartCont.innerHTML = '♥︎';

    let heart = document.querySelector('.lives-cont')
    heart.appendChild(livesMemo);
    // let body = document.querySelector('body');
    // body.appendChild(heartCont);


    // UPDATE OVERALL
    updateNav('lives', currentCount, increment);

    // FLASH / REMOVE TIMER
    window.setTimeout(() => { livesMemo.style.color = 'black' }, 500);
    window.setTimeout(() => { livesMemo.remove() }, 1000);
  }, 750)
};

export function updateNav(eleType, currentCount, increment = false) {
  let ele;
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
    ele.innerHTML = `${currentCount}`;
  } else {
    let total = parseInt(currentCount) + increment;
    ele.innerHTML = `${total}`;
  }
}


