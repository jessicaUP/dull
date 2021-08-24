import { COLORS, mixTilesFour, rgbCMYK, cmykRGB } from '../main/color'


let tileGrid;

let count = 1;

let selectedTiles = [];
let optionTiles = [];
let mixedTiles = [];
let currentTile;
let allTiles = {};

let checkColor = true;
let currentColor;
let C, M, Y, K = 0;


function randomPos() {
  let x = Math.floor(Math.random() * 10) + 1;
  let y = Math.floor(Math.random() * 10) + 1;
  let coor = `${x}-${y}`;
  return {
    coor,
    x,
    y
  }
}

function posObject(coor) {
  let coorArr = coor.split('-');
  return {
    coor,
    x: coorArr[0],
    y: coorArr[1]
  }
}

function setFirstColor(hex1) {
  let step = $.Color(hex1).rgba();
  let color = rgbCMYK(step);
  C = color[0];
  M = color[1];
  Y = color[2];
  debugger
  currentColor = step;
}

function cmykMax() {
  if (C > 1) C = 1;
  if (M > 1) M = 1;
  if (Y > 1) Y = 1;
}


function mixTile() {
  debugger
  let clickedCoor = this.getAttribute('coor');
  let check = optionTiles.some(coor => coor === clickedCoor)
  if (check) {
    clearStyle();

    let colorOne = allTiles[currentTile.coor].ele.getAttribute('colorId')
    if (checkColor) {
      setFirstColor(colorOne);
      checkColor = false;
    }
    let colorTwo = this.getAttribute('colorId')
    colorTwo = rgbCMYK($.Color(colorTwo).rgba())
    count = count + 1
    debugger
    C = (C * (count - 1) + colorTwo[0]) / count
    M = (M * (count - 1) + colorTwo[1]) / count
    Y = (Y * (count - 1) + colorTwo[2]) / count

    cmykMax();
    // let rgb = mixTilesFour(colorOne, colorTwo, count)
    let rgb = cmykRGB([C, M, Y, K])
    let rgbStr = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
    




    //current tile
    // let colorOne = allTiles[currentTile.coor].ele.getAttribute('colorId')
    // let color1 = $.Color(colorOne);
    // console.log(`COLOR1  ${color1}`);
    // //clickedtile
    // let color2 = $.Color(this.getAttribute('colorId'));
    // console.log(`COLOR2 ALPHA  ${color2.toHexString()}`);

    // //set color alpha value
    // color1 = color1.alpha(color1.alpha());

    // color2 = color2.alpha(1/count);

    // //Mixing colors by parts
    // let finalColor = Color_mixer.mix(color1, color2);


    // // for ( let i = 1; i <= count; i++ ) {
    // //   finalColor = finalColor.alpha(finalColor.alpha());
    // //   finalColor = Color_mixer.mix(color1, finalColor)
    // // }
    // console.log(count)
    // count += 1;

    // //set background color to result color


    this.style['background-color'] = rgbStr;
    currentTile = posObject(this.getAttribute('coor'))
    markOptions();
  }
  }



export function createMixGrid() {
  tileGrid = document.querySelector('.tile-grid');
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
      tile.style['aspect-ratio'] = 1
      tile.addEventListener('click', mixTile)
      let info = {
        ele: tile,
        x, 
        y 
      }
      allTiles[coor] = info;
      tileGrid.appendChild(tile)
      colorCount++
    }
  };
  tileGrid.style.display = 'tile-grid';
  tileGrid.style['grid-gap'] = '2px';
  tileGrid.style['grid-template-columns'] = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
  currentTile = randomPos();
  console.log(currentTile)
  markOptions();
  console.log(allTiles)
}



const OPTIONS = [[-1, 0], [1, 0], [0, -1], [0, 1]]

function markOptions() {
  let tile = allTiles[currentTile.coor];
  console.log(tile)
  tile.ele.style.border = '8px inset white';
  let newOptionTiles = [];

  OPTIONS.forEach(pos => {
    let newX = pos[0] + tile.x;
    let newY = pos[1] + tile.y;
    if ( newX <= 10 && newX > 0 && newY <= 10 && newY > 0 ) {
      let newCoor = `${newX}-${newY}`
      newOptionTiles.push(newCoor);
      let optionTile = allTiles[newCoor].ele;
      optionTile.style.border = '1px solid white'
    }
    
  });
  optionTiles = newOptionTiles;
}



function clearStyle() {
  optionTiles.forEach(coor => {
    let oldTile = allTiles[coor].ele;
    oldTile.style.border = 'none'
  })
}





function getTilePosition() {

}



