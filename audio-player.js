document.addEventListener("DOMContentLoaded", function() {
  // List of mood tracks goes here...

  function stopAllAudio(tracks) {
    tracks.forEach(function(track) {
      track.modules.forEach(function(module) {
        module.variations.forEach(function(variation) {
          if (variation.audioObj) {
            variation.audioObj.pause();
            variation.audioObj.currentTime = 0;
          }
        });
      });
    });
  }

  function setupTrackListener(tracks) {
    tracks.forEach(function(track) {
      var button = document.getElementById(track.id);

      if (!button) {
        console.error(`No button found with ID: ${track.id}`);
        return;
      }

      button.addEventListener('click', function(e) {
        e.preventDefault();

        stopAllAudio(tracks);

        var randomModule = track.modules[Math.floor(Math.random() * track.modules.length)];

        document.getElementById('mood-category').textContent = track.name;
        document.getElementById('module-name').textContent = randomModule.name;

        var moodIconElem = document.getElementById('mood-category-icon');
        var icon = document.getElementById(track.icon);
        if (moodIconElem && icon) moodIconElem.innerHTML = icon.outerHTML;

        var environmentSelector = document.getElementById('environment-selector');
        environmentSelector.innerHTML = '';

        randomModule.variations.forEach(function(variation, index) {
          var option = document.createElement('option');
          option.textContent = variation.environment;
          option.value = index;
          environmentSelector.appendChild(option);
        });

        environmentSelector.onchange = function() {
          var selectedVariation = randomModule.variations[this.value];

          if (selectedVariation.audioObj) {
            selectedVariation.audioObj.pause();
            selectedVariation.audioObj.currentTime = 0;
          }

          document.getElementById('environment-category').textContent = selectedVariation.environment;

          selectedVariation.audioObj = new Audio(selectedVariation.audio);
          selectedVariation.audioObj.addEventListener('error', () => {
            console.error(`Failed to load audio: ${selectedVariation.audio}`);
          });

          selectedVariation.audioObj.play().catch(error => {
            console.error('Error:', error);
          });
        };

        environmentSelector.dispatchEvent(new Event('change'));

        var isEnergizeTrack = track.name === 'Energize';
        moodTracks.forEach(function(moodTrack) {
          var moodButton = document.getElementById(moodTrack.id);
          if (moodButton) moodButton.disabled = isEnergizeTrack;
        });

        // Check the clicked radio button
        button.checked = true;
      });
    });
  }

  setupTrackListener(moodTracks);
});
