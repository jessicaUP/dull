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







export function optionStyle(coor) {
    // let radiusStr;
    let cursor;

    if (sameArray(coor, up)) {
      // radiusStr = '100% 100% 0 0';
      cursor = 'n-resize';
      // direction = up;
    } else if (sameArray(coor, right)) {
      // radiusStr = '0 100% 100% 0';
      cursor = 'e-resize';
      // direction = right;
    } else if (sameArray(coor, down)) {
      // radiusStr = '0 0 100% 100%';
      cursor = 's-resize';
      // direction = down;
    } else if (sameArray(coor, left)) {
      // radiusStr = '100% 0 0 100%';
      cursor = 'w-resize';
      // direction = left;
    }
    // radiusStr = '0'
    return cursor;
  }

