function f(i) {
  const yPosition = Math.sin(i) * 100;
  document.getElementById('square').style.transform = `translateY(${yPosition}px)`;
  setTimeout(() => f(i + 0.1), 50);
}
f(0);