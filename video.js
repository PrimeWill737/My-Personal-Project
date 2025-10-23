const video = document.getElementById("background-video");
const playPauseButton = document.getElementById("play-pause");

function updateControlState() {
  const isPlaying = !video.paused && !video.ended && video.readyState >= 2;
  playPauseButton.classList.toggle("is-paused", !isPlaying);
  playPauseButton.setAttribute("aria-pressed", String(isPlaying));
  playPauseButton.setAttribute("aria-label", isPlaying ? "Pause video" : "Play video");
}

function togglePlayback() {
  if (!video.src) {
    alert("Replace 'sample-video.mp4' with the path to your background video file.");
    return;
  }

  if (video.paused || video.ended) {
    video.play().catch((error) => {
      console.error("Playback failed:", error);
    });
  } else {
    video.pause();
  }
}

playPauseButton.addEventListener("click", togglePlayback);
video.addEventListener("play", updateControlState);
video.addEventListener("pause", updateControlState);
video.addEventListener("ended", updateControlState);

document.addEventListener("DOMContentLoaded", updateControlState);