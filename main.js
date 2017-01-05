function _(selector) {
  return document.getElementById(selector);
}

let i = 0;

function moveSquare() {
  const offset = 3;
  _('emoji1').style.transform = `translate(${Math.sin(i) * 100}px, ${Math.sin(i) * 100 * offset}px)`;
  _('emoji2').style.transform = `translate(${Math.cos(i) * 100 * offset}px, ${Math.cos(i) * 100}px)`;
  i += 0.05;

  requestAnimationFrame(moveSquare);
}

function startFloating() {
  moveSquare();
}


_('start-btn').addEventListener('click', () => {
  startFloating();
  _('main-image').src = 'http://travelwithtom.com/wp-content/uploads/2014/01/kracow-poland-slider1.jpg';
  _('main-text').style.display = 'none';
  _('reveal').style.display = 'block';
  _('emojis').style.display = 'block';
  _('start-btn').style.display = 'none';
});