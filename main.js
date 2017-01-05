function moveSquare(i = 0) {
  const yPosition = Math.sin(i) * 100;
  document.getElementById('square').style.transform = `translateY(${yPosition}px)`;
  setTimeout(() => moveSquare(i + 0.1), 50);
}

function startFloating() {
  moveSquare();
}

startFloating();