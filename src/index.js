import { setNewGrid, resetGrid } from './mixPathGame/mixPathGame'


document.addEventListener('DOMContentLoaded', () => {
  // let yellow = chroma('#F5FF00')
  // let blue = chroma('#00C2FF')
  // let final = chroma.mix(yellow, blue)
  // console.log(final)
  

  setNewGrid();
  const reset = document.querySelector('.reset');
  reset.addEventListener('click', resetGrid);
  // createSnakeGrid();
  // createMatchGrid();
  // window.requestAnimationFrame(main);

})
