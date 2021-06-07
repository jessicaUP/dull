import { SNAKE_SPEED, drawSnake, updateSnake, getSnakePos, snakeOverlap } from './snake'
import { drawColorFood, updateColorFood, LIVES } from './colorFood'


let lastRenderTime = 0;
let snakeGrid;
let gameOver = false;
let livesDiv;



export function createSnakeGrid() {
  snakeGrid = document.querySelector('.snake-grid')
  livesDiv = document.querySelector('.lives')
  
  // for (let i = 0; i < 625; i++) {
  //   const tile = document.createElement('span');
  //   tile.setAttribute('id', i);
  //   tile.setAttribute('class', 'snake-tile');
  //   tile.style['background-color'] = 'white';
  //   tile.style['border'] = '1px solid black';
  //   tile.style['aspect-ratio'] = 1;
    
  //   snakeGrid.appendChild(tile)
  // }

  
}

export function main(currentTime) {
  if (gameOver) {
    if (confirm('boo.')) {
      window.location = 'https://jessicaup.github.io/dull./'
    }
    return
  }

  window.requestAnimationFrame(main);
  const secondsSinceRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;

  update();
  draw();

}

function update() {
  updateSnake();
  updateColorFood();
  checkFail();
}

function draw() {
  snakeGrid.innerHTML = "";
  drawSnake(snakeGrid);
  drawColorFood(snakeGrid);
  livesDiv.innerHTML = `${LIVES}`
}

function checkFail() {
  gameOver = outOfBounds(getSnakePos()) || snakeOverlap() || LIVES <= 0;
};

function outOfBounds(position) {
  return (
    position.x > 35 || position.x < 1 ||
    position.y > 35 || position.y < 1 
  )
}

export function randomPos() {
  return {
    x: Math.floor(Math.random() * 35) + 1,
    y: Math.floor(Math.random() * 35) + 1
  }
}