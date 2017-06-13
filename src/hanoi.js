export default function* hanoi(disc, source = 'A', dest = 'B', temp = 'C') {
  if (disc === 0) return;
  yield * hanoi(disc-1, source, temp, dest);
  yield {disc, source, dest};
  yield * hanoi(disc-1, temp, dest, source);
}
