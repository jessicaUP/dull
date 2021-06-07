import { createMatchGrid } from './matchGame/matchingGame'
import { createMixGrid } from './mixPathGame/mixPathGame'
import { createSnakeGrid, main } from './snake/snakeGame'


document.addEventListener('DOMContentLoaded', () => {
  // let yellow = chroma('#F5FF00')
  // let blue = chroma('#00C2FF')
  // let final = chroma.mix(yellow, blue)
  // console.log(final)
  

  createMixGrid();
  // createSnakeGrid();
  // createMatchGrid();
  // window.requestAnimationFrame(main);

})
