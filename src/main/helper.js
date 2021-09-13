import { allTiles, hoverSwatch } from '../mixPathGame/mixPathGame'


const up = [-1, 0];
const down = [1, 0];
const left = [0, -1];
const right = [0, 1];




export function randomNum(num) {
  return Math.floor(Math.random() * num)
}

export function posObject(coor) {
  let coorArr = coor.split('-');
  return {
    coor,
    x: coorArr[0],
    y: coorArr[1]
  }
}

export function sameArray(arr1, arr2) {
  return arr1.every((val, index) => val === arr2[index])
}







// STYLING


export function createSwatches(parent) {
  let swatches = document.createElement('DIV');
  parent.appendChild(swatches);
  swatches.setAttribute('class', 'swatches');
  
  
  let target = document.createElement('DIV');
  target.setAttribute('class', 'swatch blink');
  target.setAttribute('id', 'target-color');
  // target.setAttribute('')
  swatches.appendChild(target);

  let hover = document.createElement('DIV');
  hover.setAttribute('class', 'swatch');
  hover.setAttribute('id', 'hover-color');
  swatches.appendChild(hover);


  let current = document.createElement('DIV');
  current.setAttribute('class', 'swatch');
  current.setAttribute('id', 'current-color');
  swatches.appendChild(current);
  
}


export function styleFinish(finishTile) {
  debugger
  let finishEle = allTiles[finishTile].ele;
  finishEle.style.border = '1px solid transparent';
  finishEle.style['border-radius'] = '100%';

  finishEle.setAttribute('class', 'blink')

}

export function finishStar(finishTile) {
  debugger
  let finishEle = allTiles[finishTile].ele;
  finishEle.style['border-radius'] = '100%';
  let star = document.createElement('DIV');
  star.setAttribute('class', 'star')
  star.innerHTML = '★';
  finishEle.appendChild(star);
}


export function clearStyle(tiles, currentTile, finishTile, updateCheck = false) {
    tiles.forEach(coor => {
      let oldTile = allTiles[coor].ele;
      if (coor !== finishTile) {
        if (oldTile.firstChild) {
          oldTile.removeChild(oldTile.firstChild)
        }
        // oldTile.style.border = '1px solid black';
        oldTile.style['border-radius'] = '0';
        
        // oldTile.removeEventListener('mouseover', hoverSwatch(oldTile.getAttribute('colorId')))
      }
    })
    

    if (updateCheck) {
      let prev = allTiles[currentTile.coor].ele;
      prev.style['border-radius'] = '100%';
    }

  }

export function optionStyle(coor) {
    let radiusStr;

    if (sameArray(coor, up)) {
      radiusStr = '100% 100% 0 0';
      // direction = up;
    } else if (sameArray(coor, right)) {
      radiusStr = '0 100% 100% 0';
      // direction = right;
    } else if (sameArray(coor, down)) {
      radiusStr = '0 0 100% 100%';
      // direction = down;
    } else if (sameArray(coor, left)) {
      radiusStr = '100% 0 0 100%';
      // direction = left;
    }
    radiusStr = '0'
    return radiusStr;
  }

