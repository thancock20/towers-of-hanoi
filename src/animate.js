export default function animate(move) {
  const {disc, source, dest} = move;
  const sourceElement = document.querySelector(`#peg-${source}>.disc-${disc}`);
  const destElement = document.querySelector(`#peg-${dest}>.disc-${disc}`);

  const sourceClasses = sourceElement.classList;
  const destClasses = destElement.classList;

  sourceClasses.remove('selected-disc');
  sourceClasses.add('unselected-disc');
  destClasses.remove('unselected-disc');
  destClasses.add('selected-disc');
}
