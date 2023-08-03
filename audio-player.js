let selectedMood;
let selectedEnvironment;
let previousEnvironment;
let audio = new Audio(); // Default, silent Audio object
let selectedModule;

// Map of moods and environments to audio files
const audioMap = {
  focus: {
    glass_bead_game: {
      forest:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FFOCUS%20%2B%20EV%2FFOCUS_GlassBeadGame%20%2B%20Forest.mp3",
      ocean:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FFOCUS%20%2B%20EV%2FFOCUS_GlassBeadGame%20%2B%20Ocean.mp3",
      mountain:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FFOCUS%20%2B%20EV%2FFOCUS_GlassBeadGame%20%2B%20Mountain.mp3",
      cavern:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FFOCUS%20%2B%20EV%2FFOCUS_GlassBeadGame%20%2B%20Cavern.mp3"
    },
    meaningful_thoughts: {
      forest:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FFOCUS%20%2B%20EV%2FFOCUS_GlassBeadGame%20%2B%20Forest.mp3",
      ocean:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FFOCUS%20%2B%20EV%2FFOCUS_GlassBeadGame%20%2B%20Ocean.mp3",
      mountain:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FFOCUS%20%2B%20EV%2FFOCUS_GlassBeadGame%20%2B%20Mountain.mp3",
      cavern:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FFOCUS%20%2B%20EV%2FFOCUS_GlassBeadGame%20%2B%20Cavern.mp3"
    },
    pen_to_paper: {
      forest:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FFOCUS%20%2B%20EV%2FFOCUS_PenToPaper%20%2B%20Forest.mp3",
      ocean:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FFOCUS%20%2B%20EV%2FFOCUS_PenToPaper%20%2B%20Ocean.mp3",
      mountain:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FFOCUS%20%2B%20EV%2FFOCUS_PenToPaper%20%2B%20Mountain.mp3",
      cavern:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FFOCUS%20%2B%20EV%2FFOCUS_PenToPaper%20%2B%20InsideCavern.mp3"
    }
  },
  sleep: {
    campfire: {
      forest:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_Campfire%20%2B%20Forest.mp3",
      ocean:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_Campfire%20%2B%20Ocean.mp3",
      mountain:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_Campfire%20%2B%20Mountain.mp3",
      cavern:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_Campfire%20%2B%20InsideCavern.mp3"
    },
    drift_off: {
      forest:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_DriftOff%20%2B%20Forest.mp3",
      ocean:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_DriftOff%20%2B%20Ocean.mp3",
      mountain:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_DriftOff%20%2B%20Mountain.mp3",
      cavern:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_DriftOff%20%2B%20InsideCavern.mp3"
    },
    clouds: {
      forest:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_Nuages%20%2B%20Forest.mp3",
      ocean:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_Nuages%20%2B%20Ocean.mp3",
      mountain:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_Nuages%20%2B%20Mountain.mp3",
      cavern:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_Nuages%20%2B%20InsideCavern.mp3"
    },
    space: {
      forest:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_Space%20%2B%20Forest.mp3",
      ocean:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_Space%20%2B%20Ocean.mp3",
      mountain:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_Space%20%2B%20Mountain.mp3",
      cavern:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FSLEEP%20%2B%20EV%2FSLEEP_Space%20%2B%20InsideCavern.mp3"
    }
  },
  energize: {
    dig_deep:
      "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FENERGY%20%28no%20EV%29%2FENERGY_DigDeep_2023-06-28_23_36_32.mp3",
    endless_summer:
      "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FENERGY%20%28no%20EV%29%2FENERGY_DigDeep_2023-06-28_23_36_32.mp3",
    free_solo:
      "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FENERGY%20%28no%20EV%29%2FENERGY_FreeSolo_2023-06-29_00_03_53.mp3",
    kitesurfing:
      "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FENERGY%20%28no%20EV%29%2FENERGY_Kitesurfing_2023-06-28_23_44_54.mp3",
    dune_racer:
      "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FENERGY%20%28no%20EV%29%2FPOWER_DuneRacer_2023-06-29_00_13_53.mp3"

  },
  chill: {
    easy_breezy: {
      forest:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_EasyBreezy%20%2B%20Forest.mp3",
      ocean:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_EasyBreezy%20%2B%20Ocean.mp3",
      mountain:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_EasyBreezy%20%2B%20Mountain.mp3",
      cavern:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_EasyBreezy%20%2B%20InsideCavern.mp3"
    },
    io: {
      forest:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_IO%20%2B%20Forest.mp3",
      ocean:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_IO%20%2B%20Ocean.mp3",
      mountain:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_IO%20%2B%20Mountain.mp3",
      cavern:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_IO%20%2B%20InsideCavern.mp3"
    },
    new_vintage: {
      forest:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_NewVintage%20%2B%20Forest.mp3",
      ocean:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_NewVintage%20%2B%20Ocean.mp3",
      mountain:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_NewVintage%20%2B%20Mountain.mp3",
      cavern:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_NewVintage%20%2B%20InsideCavern.mp3"
    },
    osmosis: {
      forest:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_Osmosis%20%2B%20Forest.mp3",
      ocean:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_Osmosis%20%2B%20Ocean.mp3",
      mountain:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_Osmosis%20%2B%20Mountain.mp3",
      cavern:
        "https://s3.eu-west-2.amazonaws.com/lifescoremusic.com-assets/assets%2FCHILL%20%2B%20EV%2FCHILL_Osmosis%20%2B%20InsideCavern.mp3"
    }
  }
  // ... more moods, modules, and environments
};

// Listen for mood selection changes
document.querySelectorAll('input[name="mood"]').forEach(function (radio) {
  radio.addEventListener("change", function () {
    selectedMood = this.value;

    if (selectedMood === "energize") {
      // Disable environment radio buttons
      document
        .querySelectorAll('input[name="environment"]')
        .forEach(function (radio) {
          radio.disabled = true;
        });
      selectedEnvironment = null; // Since there are no environments for "energize"
    } else {
      // Enable environment radio buttons
      document
        .querySelectorAll('input[name="environment"]')
        .forEach(function (radio) {
          radio.disabled = false;
        });
      selectedEnvironment = previousEnvironment; // Reapply the previously selected environment
    }

    playAudio();
  });
});

// Listen for environment selection changes
document
  .querySelectorAll('input[name="environment"]')
  .forEach(function (radio) {
    radio.addEventListener("change", function () {
      selectedEnvironment = this.value;
      previousEnvironment = this.value; // Update the previous environment
      playAudio();
    });
  });

function playAudio() {
  let audioFile;
  let randomModule;

  if (selectedMood) {
    let moodModules = audioMap[selectedMood];
    let moduleNames = Object.keys(moodModules);
    randomModule = moduleNames[Math.floor(Math.random() * moduleNames.length)];

    if (selectedMood === "energize") {
      // Since there are no environments for "energize", just select the audioFile
      audioFile = moodModules[randomModule];
    } else if (selectedEnvironment) {
      // If the mood is not "energize", we check for selectedEnvironment
      audioFile = moodModules[randomModule][selectedEnvironment];
    }
  }

  if (audioFile) {
    audio.pause();
    audio.src = audioFile;
    audio.play();
    selectedModule = randomModule;
    updateDisplay();
  } else {
    console.log(
      "Please select a mood. If the mood is not 'energize', please also select an environment."
    );
  }
}

function formatText(text) {
  // Check if text is defined before trying to format it
  if (text) {
    // Replace underscores with spaces
    let newText = text.replace(/_/g, " ");
    // Convert to title case
    newText = newText
      .toLowerCase()
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");

    return newText;
  } else {
    // If text is undefined, return an empty string or a default value
    return "";
  }
}

function updateDisplay() {
  const moodDisplay = document.getElementById("mood-display");
  const moduleDisplay = document.getElementById("module-display");

  let formattedMood = formatText(selectedMood);

  // Call formatText only when updating moduleDisplay
  if (selectedModule) {
    let formattedModule = formatText(selectedModule);
    moduleDisplay.textContent = `${formattedModule}`;
  }

  moodDisplay.textContent = `${formattedMood}`;
}

let togglePlaybackButton = document.getElementById("toggle-playback");
let playIcon = document.getElementById("play-icon");
let pauseIcon = document.getElementById("pause-icon");
let animationElement = document.getElementById("animation-element");


// Check if the audio is currently playing
function isAudioPlaying(audio) {
  return !audio.paused;
}

// Set initial states
animationElement.style.display = "block";
pauseIcon.style.display = "none";
playIcon.style.display = "none";


// Attach a click event listener to the button
togglePlaybackButton.addEventListener("click", function () {
  if (isAudioPlaying(audio)) {
    // If the audio is playing, pause it
    audio.pause();
    // Hide the pause icon and animation, show the play icon
    pauseIcon.style.display = "none";
    playIcon.style.display = "block";
    animationElement.style.display = "none";
    gsap.to(playIcon, { duration: 0.5, autoAlpha: 1 });
    gsap.to(pauseIcon, { duration: 0.5, autoAlpha: 0 });
    gsap.to(animationElement, { duration: 0.5, autoAlpha: 0 });
  } else {
    // If the audio is paused, play it
    audio.play();
    // Hide the play icon, show the pause icon and animation
    playIcon.style.display = "none";
    animationElement.style.display = "block";
    gsap.to(playIcon, { duration: 0.5, autoAlpha: 0 });
    gsap.to(animationElement, { duration: 0.5, autoAlpha: 1 });
  }
});

// Attach a hover event listener to the animation element
animationElement.addEventListener("mouseover", function () {
  // On hover, hide the animation and show the pause button
  animationElement.style.display = "none";
  pauseIcon.style.display = "block";
  gsap.to(pauseIcon, { duration: 0.5, autoAlpha: 1 });
  gsap.to(animationElement, { duration: 0.5, autoAlpha: 0 });
});

// Attach a mouseout event listener to the pause button
pauseIcon.addEventListener("mouseout", function () {
  // If the audio is playing, hide the pause button and show the animation
  if (isAudioPlaying(audio)) {
    pauseIcon.style.display = "none";
    animationElement.style.display = "block";
    gsap.to(pauseIcon, { duration: 0.5, autoAlpha: 0, delay: 0.2 });
    gsap.to(animationElement, { duration: 0.5, autoAlpha: 1, delay: 0.2 });
  }
});
