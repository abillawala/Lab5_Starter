// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // elements
  const hornSelect = document.getElementById('horn-select');
  console.log(hornSelect);

  const hornImage = document.querySelector('#expose img');
  const hornAudio = document.querySelector('audio');

  const volumeIcon = document.querySelector('#volume-controls img');
  const volumeSlider = document.getElementById('volume');

  const playSound = document.querySelector('button');

  // Selection
  hornSelect.addEventListener('change', (event) => {
    const choice = event.target.value;
  
    if (choice !== 'select') {
      hornImage.src = `assets/images/${choice}.svg`;
      hornImage.alt = choice;
      hornAudio.src = `assets/audio/${choice}.mp3`;
    }
  });

  // Volume Slider

  volumeSlider.addEventListener('input',(event) => {
    const volumeValue = event.target.value;
    hornAudio.volume = volumeValue/100;

    if(volumeValue == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    }
    else if (volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    }
    else if (volumeValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    }
    else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  // Button
  playSound.addEventListener('click', (event) => {
    hornAudio.play();
    if (hornSelect.value === 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}