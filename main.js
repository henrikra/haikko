let i = 0;

function moveSquare() {
  document.getElementById('square1').style.transform = `translate(${Math.sin(i) * 100}px, ${Math.sin(i) * 100}px)`;
  document.getElementById('square2').style.transform = `translate(${Math.cos(i) * 100}px, ${Math.cos(i) * 100}px)`;
  i += 0.05;

  requestAnimationFrame(moveSquare);
}

function startFloating() {
  moveSquare();
}

startFloating();