import { mixTile } from '../mixPathGame/mixPathGame'
import { COLORS } from '../main/color'

// GRID ELEMENTS

export function updateBackgound(targetColor) {
  let body = document.querySelector('body');
  let background = document.querySelector('.image-cont');
  body.style['background-color'] = targetColor;
  background.style['background-color'] = targetColor;
}

export function createTile(parentDiv, colorCount, x, y, coor) {
  let colorId = COLORS[colorCount];

  const tile = document.createElement('div');
  tile.setAttribute('id', `tile-${colorCount}`);
  tile.setAttribute('colorId', colorId);
  tile.setAttribute('coor', coor);
  tile.classList.add(`mix-tile`);
  tile.style['background-color'] = colorId;
  // tile.style.border = '1px solid black';
  tile.style['aspect-ratio'] = 1;
  tile.addEventListener('click', mixTile);
  let info = {
    ele: tile,
    coor: coor,
    x,
    y
  }

  parentDiv.appendChild(tile)

  return info;
}

export function styleOption(allTiles, coor, pos) {
  let arrow = addArrow(pos);
  let optionTile = allTiles[coor].ele;

  optionTile.appendChild(arrow);
  arrow.style.display = 'flex'
  return arrow
};

function addArrow(pos) {
  let arrow = document.createElement('DIV');
  arrow.setAttribute('id', pos);
  arrow.classList.add('arrow-icons');
  return arrow;
}

export function removeHover(tile) {
  let hoverColor = tile.getAttribute('colorId');
  let functionName = `hover${hoverColor}`
  tile.removeEventListener('mouseover', [functionName]);
}

export function removeOption(allTiles, optionTiles, currentTile, finishTile, updateCheck = false) {
  optionTiles.forEach(coor => {
    let oldTile = allTiles[coor].ele;
    
    // not working....

    removeHover(oldTile);

    if (coor !== finishTile) {
      if (oldTile.firstChild) {
        oldTile.removeChild(oldTile.firstChild)
      }
    }
  })


  if (updateCheck) {
    let prev = allTiles[currentTile.coor].ele;
    prev.style['border-radius'] = '100%';
    let dot = prev.firstChild;
    dot.removeChild(dot.firstChild);

  }

}

function hoverFunction(optionTile, hoverColor) {
  // let hoverColor = optionTile.getAttribute('colorId');
  
  this[`hover${hoverColor}`] = () => {
    return () => {
      let swatch = document.querySelector('#hover-color');
      swatch.style['background-color'] = hoverColor;
      
    }
  };
  optionTile.addEventListener('mouseover', this[`hover${hoverColor}`] );
}

export function styleWin(allTiles, selectedTiles, finishTile, color, level, lives) {
  let body = document.querySelector('body');

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

export function addResult(level) {
  let results = document.querySelector('.results-cont');
  let prevLevel = document.querySelector(`#level-${level}`);
  results.appendChild(prevLevel);
}

export function createLevelDiv(level) {
  let body = document.querySelector('body');
  // tileGrid = document.querySelector('.tile-grid');
  let cont1 = document.createElement('div');
  cont1.classList.add(`tile-grid`);
  cont1.classList.add(`level-cont`);
  cont1.setAttribute('id', `level-${level}`);

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
    let heartCont = document.createElement('DIV');
    heartCont.setAttribute('class', 'lives-heart');
    heartCont.innerHTML = '♥︎';
    heartCont.appendChild(livesMemo);
    let body = document.querySelector('body');
    body.appendChild(heartCont);


    // UPDATE OVERALL
    updateNav('lives', currentCount, increment);

    // REMOVE TIMER
    window.setTimeout(() => { heartCont.remove() }, 1000);
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


