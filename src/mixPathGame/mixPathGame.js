import { COLORS, mixTilesTwo } from '../main/color'


let tileGrid;

let count = 1;

let selectedTiles = [];
let optionTiles = [];
let mixedTiles = [];
let currentTile;
let allTiles = {};

export function randomPos() {
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

function mixTile() {
  let clickedCoor = this.getAttribute('coor');
  let check = optionTiles.some(coor => coor === clickedCoor )
  if (check) {
    clearStyle();

    let colorOne = allTiles[currentTile.coor].ele.getAttribute('colorId')
    let colorTwo = this.getAttribute('colorId')

    let rgb = mixTilesTwo(colorOne, colorTwo)




    
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
    

    this.style['background-color'] = rgb;
    currentTile = posObject(this.getAttribute('coor'))
    markOptions();
  }
}

function clearStyle() {
  optionTiles.forEach(coor => {
    let oldTile = allTiles[coor].ele;
    oldTile.style.border = 'none'
  })
}





function getTilePosition() {

}