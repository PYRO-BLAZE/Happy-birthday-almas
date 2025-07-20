// 🎵 Play/Pause Button
const music = document.getElementById('music');
const playPauseBtn = document.getElementById('playPause');
playPauseBtn.onclick = function () {
  if (music.paused) {
    music.play();
    playPauseBtn.textContent = '⏸️';
  } else {
    music.pause();
    playPauseBtn.textContent = '▶️';
  }
};

// 🎚️ Volume Control
document.getElementById('volume').addEventListener('input', (e) => {
  music.volume = e.target.value;
});

// ❤️ Floating Hearts
setInterval(() => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 500);


