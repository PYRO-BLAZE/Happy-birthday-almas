// 🎵 Music Controls
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

// 🎉 SweetAlert Popup & Music Start
function startMusic() {
  Swal.fire({
    title: '🎉 Happy Birthday Almas 🌹',
    text: 'With Love, Pyro Blaze ❤️',
    imageUrl: 'https://i.imgur.com/lzYKYPa.png',
    imageWidth: 100,
    imageHeight: 100,
    confirmButtonText: '🥰 Start the Surprise!'
  }).then(() => {
    music.play();
  });
  document.body.onclick = null; // disable further clicks to re-trigger popup
}

