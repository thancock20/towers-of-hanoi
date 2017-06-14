import 'babel-polyfill';
import './main.styl';
import hanoi from './hanoi';
import animate from './animate';

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('input[name="number"]').oninput=changeEventHandler;
}, false);

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('button[name="start"]').onclick=startEventHandler;
}, false);

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('button[name="reset"]').onclick=location.reload.bind(location, true);
})

function changeEventHandler(event) {
  const discs = event.target.value;

  for (let i = 1; i <= 10; i++) {
    const AElement = document.querySelector(`#peg-A>.disc-${i}`);
    const BElement = document.querySelector(`#peg-B>.disc-${i}`);
    const CElement = document.querySelector(`#peg-C>.disc-${i}`);

    const AClasses = AElement.classList;
    const BClasses = BElement.classList;
    const CClasses = CElement.classList;

    if (i <= discs) {
      AClasses.remove('invisible-disc');
      BClasses.remove('invisible-disc');
      CClasses.remove('invisible-disc');
    } else {
      AClasses.add('invisible-disc');
      BClasses.add('invisible-disc');
      CClasses.add('invisible-disc');
    }
  }
}

function startEventHandler(event) {
  const discsElement = document.querySelector('input[name="number"]');

  this.disabled = true;
  discsElement.disabled = true;

  const discs = discsElement.value;

  let i = 0;
  for (let move of hanoi(discs)) {
    const tick = () => { animate(move) };
    setTimeout(tick, 500 * i++);
  }
}
