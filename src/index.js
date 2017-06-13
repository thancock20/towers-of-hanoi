import './main.styl';
import hanoi from './hanoi';
import animate from './animate';

let i = 0;
for (let move of hanoi(5)) {
  const tick = () => { animate(move) };
  setTimeout(tick, 500 * i++);
}
