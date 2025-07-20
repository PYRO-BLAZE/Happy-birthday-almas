const music = document.getElementById('music');
const btn = document.getElementById('playPause');
btn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    btn.textContent = '⏸️';
  } else {
    music.pause();
    btn.textContent = '▶️';
  }
});
setInterval(() => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 500);
document.getElementById('volume').addEventListener('input', (e) => {
  document.getElementById('music').volume = e.target.value;
});
window.onload = () => {
  alert('🎉 Happy Birthday Almas 🌹\nWith Love, Pyro Blaze ❤️');
};
