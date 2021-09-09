import { allTiles } from '../mixPathGame/mixPathGame'


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





export function styleFinish(finishTile) {
  let finishEle = allTiles[finishTile].ele;
  finishEle.style.border = '1px solid transparent';
  finishEle.style['border-radius'] = '100%';
  finishEle.setAttribute('class', 'blink')

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

