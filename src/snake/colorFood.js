import { COLORS, randomColor, mixColor, mixTilesTwo } from '../main/color'
import { snakeAdd, snakeEat, SNAKE_COLOR } from './snake'
import { randomPos } from './snakeGame'


const BODY_ADD = 3; 
export let LIVES = 3;

export let FOOD_COLORS = [
  { pos: randomPos(), color: randomColor() },
  { pos: randomPos(), color: randomColor() }
];
const FOOD_ADD = 3;


 // [start] Fisher-Yates shuffle -- shuffle algorithm resource
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
// [end] Fisher-Yates shuffle


let target;

export function updateTarget() {
  // target = document.querySelector('.food-target');
  let mix = mixTilesTwo(FOOD_COLORS[0].color, SNAKE_COLOR);
  // target.style['background-color'] = mix;
  let body = document.querySelector('body')
  body.style['background-color'] = mix;
}


export function updateColorFood() {
  if (snakeEat(FOOD_COLORS[0].pos)) {
    FOOD_COLORS.shift();
    snakeAdd(BODY_ADD);
    foodAdd(FOOD_ADD);
    shuffle(FOOD_COLORS);
    updateTarget();
    LIVES++
  } 

  FOOD_COLORS.forEach(color => {
    if (snakeEat(color.pos)) {
      LIVES--
    }
  })
  updateTarget();
}

function foodAdd(amount) {
  for (let i = 0; i < amount; i++) {
    let food = { color: randomColor(), pos: randomPos() }
    FOOD_COLORS.push(food)
  }
}

export function drawColorFood(gameBoard) {

  for (let i = 0; i < FOOD_COLORS.length; i++) {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = FOOD_COLORS[i].pos.y;
  foodElement.style.gridColumnStart = FOOD_COLORS[i].pos.x;
  // snakeElement.style[]
  foodElement.classList.add('color-food');
  foodElement.style['background-color'] = FOOD_COLORS[i].color;
  gameBoard.appendChild(foodElement);
  }

}

// function getRandomFoodPos() {
//   let nextFoodPos;

//   while (nextFoodPos == null || snakeEat(nextFoodPos)) {
//     nextFoodPos = randomPos()
//     FOOD_COLOR = randomColor()
//   } 
//   return nextFoodPos;
// }