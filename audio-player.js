document.addEventListener("DOMContentLoaded", function() {
var moodTracks = [
  {
    id: 'focus-audio-button',
    name: 'Focus',
    icon: 'focus-icon',
    modules: [
      {
        name: 'Glass Bead Game',
        variations: [
          {
            environment: 'Forest',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FFOCUS%20%2B%20EV%2FFOCUS_GlassBeadGame%20%2B%20Forest.mp3'
          },
          {
            environment: 'Ocean',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FFOCUS%20%2B%20EV%2FFOCUS_GlassBeadGame%20%2B%20Ocean.mp3'
          },
          {
            environment: 'Mountain',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FFOCUS%20%2B%20EV%2FFOCUS_GlassBeadGame%20%2B%20Mountain.mp3'
          },
          {
            environment: 'Cavern',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FFOCUS%20%2B%20EV%2FFOCUS_GlassBeadGame%20%2B%20InsideCavern.mp3'
          },
        ]
      },
      {
        name: 'Meaningful Thoughts',
        variations: [
          {
            environment: 'Forest',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FFOCUS%20%2B%20EV%2FFOCUS_MeaningfulThoughts%20%2B%20Forest.mp3'
          },
          {
            environment: 'Ocean',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FFOCUS%20%2B%20EV%2FFOCUS_MeaningfulThoughts%20%2B%20Ocean.mp3'
          },
          {
            environment: 'Mountain',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FFOCUS%20%2B%20EV%2FFOCUS_MeaningfulThoughts%20%2B%20Mountain.mp3'
          },
          {
            environment: 'Cavern',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FFOCUS%20%2B%20EV%2FFOCUS_MeaningfulThoughts%20%2B%20InsideCavern.mp3'
          },
        ]
      },
      {
        name: 'Pen to Paper',
        variations: [
          {
            environment: 'Forest',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FFOCUS%20%2B%20EV%2FFOCUS_PenToPaper%20%2B%20Forest.mp3'
          },
          {
            environment: 'Ocean',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FFOCUS%20%2B%20EV%2FFOCUS_PenToPaper%20%2B%20Ocean.mp3'
          },
          {
            environment: 'Mountain',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FFOCUS%20%2B%20EV%2FFOCUS_PenToPaper%20%2B%20Mountain.mp3'
          },
          {
            environment: 'Cavern',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FFOCUS%20%2B%20EV%2FFOCUS_PenToPaper%20%2B%20InsideCavern.mp3'
          },
        ]
      },
      // More modules...
    ]
  },
  {
    id: 'sleep-audio-button',
    name: 'Sleep',
    icon: 'sleep-icon',
    modules: [
      {
        name: 'Campfire',
        variations: [
          {
            environment: 'Forest',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_Campfire%20%2B%20Forest.mp3'
          },
          {
            environment: 'Ocean',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_Campfire%20%2B%20Ocean.mp3'
          },
          {
            environment: 'Mountain',
            audio: 'hhttps://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_Campfire%20%2B%20Mountain.mp3'
          },
          {
            environment: 'Cavern',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_Campfire%20%2B%20InsideCavern.mp3'
          },
        ]
      },
      {
        name: 'Drift Off',
        variations: [
          {
            environment: 'Forest',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_DriftOff%20%2B%20Forest.mp3'
          },
          {
            environment: 'Ocean',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_DriftOff%20%2B%20Ocean.mp3'
          },
          {
            environment: 'Mountain',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_DriftOff%20%2B%20Mountain.mp3'
          },
          {
            environment: 'Cavern',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_DriftOff%20%2B%20InsideCavern.mp3'
          },
        ]
      },
      {
        name: 'Clouds',
        variations: [
          {
            environment: 'Forest',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_Nuages%20%2B%20Forest.mp3'
          },
          {
            environment: 'Ocean',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_Nuages%20%2B%20Ocean.mp3'
          },
          {
            environment: 'Mountain',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_Nuages%20%2B%20Mountain.mp3'
          },
          {
            environment: 'Cavern',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_Nuages%20%2B%20Cavern.mp3'
          },
        ]
      },
        {
        name: 'Space',
        variations: [
          {
            environment: 'Forest',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_Space%20%2B%20Forest.mp3'
          },
          {
            environment: 'Ocean',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_Space%20%2B%20Forest.mp3'
          },
          {
            environment: 'Mountain',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_Space%20%2B%20Forest.mp3'
          },
          {
            environment: 'Cavern',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_Space%20%2B%20Forest.mp3'
          },
        ]
      },
      // More modules...
    ]
  },
 {
    id: 'energize-audio-button',
    name: 'Energize',
    icon: 'energize-icon',
    modules: [
      {
        name: 'Dig Deep',
        audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FENERGY%20%28no%20EV%29%2FENERGY_DigDeep_2023-06-28_23_36_32.mp3'
          },
      {
        name: 'Endless Summer',
        audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FENERGY%20%28no%20EV%29%2FENERGY_EndlessSummer_2023-06-28_23_41_26.mp3'
          },
      {
        name: 'Free Solo',
        audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FENERGY%20%28no%20EV%29%2FENERGY_FreeSolo_2023-06-29_00_03_53.mp3'
          },
        {
        name: 'Endless Summer',
        audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FENERGY%20%28no%20EV%29%2FENERGY_EndlessSummer_2023-06-28_23_41_26.mp3'
          },
        ]
      },
      // More modules...
 {
    id: 'chill-audio-button',
    name: 'Chill',
    icon: 'chill-icon',
    modules: [
      {
        name: 'Easy Breezy',
        variations: [
          {
            environment: 'Forest',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_EasyBreezy%20%2B%20Forest.mp3'
          },
          {
            environment: 'Ocean',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_EasyBreezy%20%2B%20Ocean.mp3'
          },
          {
            environment: 'Mountain',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_EasyBreezy%20%2B%20Mountain.mp3'
          },
          {
            environment: 'Cavern',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_EasyBreezy%20%2B%20InsideCavern.mp3'
          },
        ]
      },
      {
        name: 'IO',
        variations: [
          {
            environment: 'Forest',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_IO%20%2B%20Forest.mp3'
          },
          {
            environment: 'Ocean',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_IO%20%2B%20Ocean.mp3'
          },
          {
            environment: 'Mountain',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_IO%20%2B%20Mountain.mp3'
          },
          {
            environment: 'Cavern',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_IO%20%2B%20InsideCavern.mp3'
          },
        ]
      },
      {
        name: 'New Vintage',
        variations: [
          {
            environment: 'Forest',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_NewVintage%20%2B%20Forest.mp3'
          },
          {
            environment: 'Ocean',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_NewVintage%20%2B%20Ocean.mp3'
          },
          {
            environment: 'Mountain',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_NewVintage%20%2B%20Mountain.mp3'
          },
          {
            environment: 'Cavern',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_NewVintage%20%2B%20InsideCavern.mp3'
          },
        ]
      },
        {
        name: 'Osmosis',
        variations: [
          {
            environment: 'Forest',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_Osmosis%20%2B%20Forest.mp3'
          },
          {
            environment: 'Ocean',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_Osmosis%20%2B%20Ocean.mp3'
          },
          {
            environment: 'Mountain',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_Osmosis%20%2B%20Mountain.mp3'
          },
          {
            environment: 'Cavern',
            audio: 'https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_Osmosis%20%2B%20InsideCavern.mp3'
          },
        ]
      },
      // More modules...
    ]
  },
  // More moods...
];
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
