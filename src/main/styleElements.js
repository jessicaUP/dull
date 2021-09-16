

export function livesUpdate(currentCount, addOrSub, increment) {
  window.setTimeout(() => {

    // CREATE FLASH MEMO
    let livesMemo = document.createElement('DIV');
    livesMemo.setAttribute('class', `${addOrSub}-lives`);
    livesMemo.classList.add('lives-amount');
    livesMemo.innerHTML = `${addOrSub === 'add' ? '+' : '-'}${increment}`;
    let heartCont = document.createElement('DIV');
    heartCont.setAttribute('class', 'lives-heart');
    heartCont.innerHTML = '♥︎';
    heartCont.appendChild(livesMemo);
    let body = document.querySelector('body');
    body.appendChild(heartCont);

    // UPDATE OVERALL
    updateNav('lives', currentCount, increment);

    // REMOVE TIMER
    window.setTimeout(() => { heartCont.remove() }, 1000);
  }, 1000)
};



export function updateNav(eleType, currentCount, increment = false) {
  let ele;
  switch (eleType) {
    case 'lives':
      ele = document.querySelector('.lives');
      break;
    case 'level':
      ele = document.querySelector('.level-text');
      break;
    default:
      break;
  }

  if (!increment) {
    ele.innerHTML = `${currentCount}`;
  } else {
    ele.innerHTML = `${currentCount + increment}`;
  }
}