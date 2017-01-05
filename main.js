function moveSquare(i = 0) {
  document.getElementById('square1').style.transform = `translate(${Math.sin(i) * 100}px, ${Math.sin(i) * 100}px)`;
  document.getElementById('square2').style.transform = `translate(${Math.cos(i) * 100}px, ${Math.cos(i) * 100}px)`;
  setTimeout(() => moveSquare(i + 0.1), 50);
}

function startFloating() {
  moveSquare();
}

startFloating();