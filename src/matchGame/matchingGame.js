import { randomColor } from '../main/color'
   
function pickColors(tileAmount) {
  const colors = [];
  let i = 0;
  while ( i < 50 ) {
    let color = randomColor();
    if (!colors.includes(color)) {
      let colorObj = {
        color: color
      }
      colors.push(colorObj);
      i++;
    }
  };
    return colors;
}
  
  // [start] Fisher-Yates shuffle -- shuffle algorithm resource
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
// [end] Fisher-Yates shuffle

let tileColors;
let matchGrid;
let count;

let selectedTiles = [];
let selectedTileIds = [];
let tilesCorrect = [];

export function createMatchGrid() {
  let colors = pickColors();
  tileColors = colors.concat(colors);
  shuffle(tileColors);
  
  for ( let i = 0; i < tileColors.length; i++ ) {
    const tile = document.createElement('div');
    tile.setAttribute('id', i)
    tile.setAttribute('class', 'match-tile')
    tile.style['background-color'] = 'black'
    tile.style['aspect-ratio'] = 1
    tile.addEventListener('click', flipTile)
    
    matchGrid = document.getElementsByClassName('match-grid')[0];
    count = document.querySelector('#count');
    matchGrid.appendChild(tile)
  };
  matchGrid.style.display = 'grid';
  matchGrid.style['grid-gap'] = '2px';
  matchGrid.style['grid-template-columns'] = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
}



function checkPair() {
  const cards = matchGrid.querySelectorAll('div');
  const x = selectedTileIds[0];
  const y = selectedTileIds[1];
  if (selectedTiles[0] === selectedTiles[1]) {
    alert('match...');
    tilesCorrect.push(selectedTiles);
  } else {
    // alert('nope.');
    cards[x].style['background-color'] = 'black';
    cards[y].style['background-color'] = 'black';
  }
  selectedTiles = [];
  selectedTileIds = [];
  count.textContent = tilesCorrect.length;
  if (tilesCorrect.length === tileColors.length/2) {
    alert('you found them...')
  }
}
  
function flipTile() {
  let tileId = this.getAttribute('id');
  selectedTiles.push(tileColors[tileId].color);
  selectedTileIds.push(tileId);
  this.style['background-color'] = tileColors[tileId].color;
  if (selectedTiles.length === 2) {
    setTimeout(checkPair, 500);
  }
}
