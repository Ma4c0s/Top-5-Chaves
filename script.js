document.addEventListener("click", () => {
  const audio = document.getElementById("Musica");

  audio.volume = 0; // começa mudo
  audio.play();

  // fade-in suave
  let volume = 0;
  const fade = setInterval(() => {
    if (volume < 0.7) {
      volume += 0.01;
      audio.volume = volume;
    } else {
      clearInterval(fade);
    }
  }, 100);

}, { once: true });