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


// NAV ELEMENTS

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


