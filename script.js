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
