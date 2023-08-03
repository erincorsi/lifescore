//barba page transition

function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function updateCurrentClass() {
	$(".w--current").removeClass("w--current");
	$(".nav a").each(function(index) {
		if ($this.attr("href") === window.location.pathname) {
			$(this).addClass("w--current");
		}
	});
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
}

$(function () {
    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    await delay(1000);
                    done();
                },

                async enter(data) {
                    contentAnimation();
                },

                async once(data) {
                    contentAnimation();
                },
            },
        ],
    });
});

//lenis smooth scroll

"use strict"; // fix lenis in safari

if (Webflow.env("editor") === undefined) {
  const lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 0.7,
    infinite: false,
    gestureOrientation: "vertical",
    normalizeWheel: false,
    smoothTouch: false
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  $("[data-lenis-start]").on("click", function () {
    lenis.start();
  });
  $("[data-lenis-stop]").on("click", function () {
    lenis.stop();
  });
  $("[data-lenis-toggle]").on("click", function () {
    $(this).toggleClass("stop-scroll");
    if ($(this).hasClass("stop-scroll")) {
      lenis.stop();
    } else {
      lenis.start();
    }
  });

  function connectToScrollTrigger() {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
  }
  connectToScrollTrigger();
}

// Keep track if this is the first time a user has visited the site
const FIRST_VISIT_FLAG = 'isFirstVisit';
const isFirstVisit = localStorage.getItem(FIRST_VISIT_FLAG)=== null;
   
function showMediaPlayer() {
  const element = document.getElementById('music-player');
  if (element) {
    element.classList.remove('hidden');
    element.classList.add("visible");
  }
}

// Removes is-intro and is-full -screen classes from media player so that only the small music player shows
function removeFullScreenMedialPlayer() {
  document.querySelectorAll('.tooltip2_component').forEach(target => target.classList.remove('is-full-screen'));
  document.querySelectorAll('.music-player_wrapper').forEach(target => target.classList.remove('is-full-screen'));	
  document.querySelectorAll('.fs-form_block').forEach(target => target.classList.remove('is-full-screen'));
  document.querySelectorAll('.fs-radio_column').forEach(target => target.classList.remove('is-full-screen'));
  document.querySelectorAll('.menu-trigger').forEach(target => target.classList.remove('is-full-screen'));
  document.querySelectorAll('.music-player_card-playing').forEach(target => target.classList.remove('is-full-screen'));
  document.querySelectorAll('.fs-grid_block').forEach(target => target.classList.remove('is-full-screen'));
  document.querySelectorAll('.fs-grid_block').forEach(target => target.classList.add('hide'));
  document.querySelectorAll('.quiz_radio-field').forEach(target => target.classList.remove('is-full-screen'));
  document.querySelectorAll('.radio-label').forEach(target => target.classList.remove('is-full-screen'));
  document.querySelectorAll('.lifescore_logo-wrapper').forEach(target => target.classList.add('hide'));
  document.querySelectorAll('.footer_intro-sequence').forEach(target => target.classList.add('hide'));
  document.querySelectorAll('.intro-sequence-header').forEach(target => target.classList.add('hide'));
  document.querySelectorAll('.plus-text').forEach(target => target.classList.add('hide'));
  document.querySelectorAll('.radio-group_label').forEach(target => target.classList.add('hide'));
  document.querySelectorAll('.radio-group_label').forEach(target => target.classList.add('hide'));
  document.querySelectorAll('.button-wrapper_enter-site').forEach(target => target.classList.add('hide'));
  document.querySelectorAll('.header5_background-image-wrapper').forEach(target => target.classList.add('hide'));
  document.querySelectorAll('.grain.music-player').forEach(target => target.classList.add('hide'));
  document.querySelectorAll('.header47_gradient').forEach(target => target.classList.add('hide'));
}
    
document.addEventListener('DOMContentLoaded', () => {
  if (!isFirstVisit) {
     removeFullScreenMedialPlayer();
  } else {
  	document.querySelectorAll('#class-adder').forEach(trigger => {
      // Event listening for "Enter Site" button
      trigger.addEventListener('click', function(){
        localStorage.setItem(FIRST_VISIT_FLAG, 'true');
        removeFullScreenMedialPlayer();
      });
   });
  }
  showMediaPlayer();
});


//show current year in footer

// when the DOM is ready
document.addEventListener("DOMContentLoaded", function() { 
  // get the the span element
  const yrSpan = document.querySelector('.current-year');
  // get the current year
  const currentYr = new Date().getFullYear();
  // set the year span element's text to the current year
  yrSpan.textContent = currentYr;
});
