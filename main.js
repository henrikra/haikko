function moveSquare(i = 0) {
  document.getElementById('square1').style.transform = `translateY(${Math.sin(i) * 100}px)`;
  document.getElementById('square2').style.transform = `translateY(${Math.cos(i) * 100}px)`;
  setTimeout(() => moveSquare(i + 0.1), 50);
}

function startFloating() {
  moveSquare();
}

startFloating();