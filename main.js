let i = 0;

function moveSquare() {
  const offset = 3;
  document.getElementById('square1').style.transform = `translate(${Math.sin(i) * 100}px, ${Math.sin(i) * 100 * offset}px)`;
  document.getElementById('square2').style.transform = `translate(${Math.cos(i) * 100 * offset}px, ${Math.cos(i) * 100}px)`;
  i += 0.05;

  requestAnimationFrame(moveSquare);
}

function startFloating() {
  moveSquare();
}

startFloating();