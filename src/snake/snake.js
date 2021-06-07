
import { getMoveDirection } from './moves';
import { mixColor, mixTilesTwo, randomColor } from '../main/color';
import { FOOD_COLORS } from './colorFood';


export const SNAKE_SPEED = 5;
const SNAKE_ADDITIONS = 1;
const snakeBody = [{ x: 15, y: 15 }];
let newBody = 0;
export let SNAKE_COLOR = randomColor();

export function updateSnake() {
  addBody();
  let move = getMoveDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }
  snakeBody[0].x += move.x;
  snakeBody[0].y += move.y;

}


export function getSnakePos() {
  return snakeBody[0];
}

export function snakeOverlap() {
  let ignoreHead = true;
  return snakeEatSelf(snakeBody[0], ignoreHead)
}

export function drawSnake(gameBoard) {
  snakeBody.forEach(part => {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = part.y;
    snakeElement.style.gridColumnStart = part.x;
    // snakeElement.style[]
    snakeElement.classList.add('snake-body');
    gameBoard.appendChild(snakeElement)

  })

  let snake = document.querySelectorAll('.snake-body');
  for (let i = 0; i < snake.length; i++) {
    snake[i].style['background-color'] = SNAKE_COLOR;
  }
}


export function snakeAdd(amount) {
  let mix = mixTilesTwo(FOOD_COLORS[0].color, SNAKE_COLOR);
  SNAKE_COLOR = mix
  newBody += amount;
}



export function snakeEatSelf(position, ignoreHead = false) {
  
  return snakeBody.some((part, idx) => {
    if (ignoreHead && idx === 0) return false;
    return isEqual(part, position)
  })
}

export function snakeEat(position) {
  return isEqual(snakeBody[0], position);
}


function isEqual(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y

  // add color mix check
}

function addBody() {
  for (let i = 0; i < newBody; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
  }
  newBody = 0;
}