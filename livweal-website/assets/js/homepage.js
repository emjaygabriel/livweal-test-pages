// Notes
// To compress and minify this, use uglify
// Example: uglifyjs input.js -o output.min.js -m -c (compressed version)
// Example: uglifyjs input.js -o output.min.js

document.addEventListener("DOMContentLoaded", function() {
    // Code to be executed when the DOM is ready
    create_video_elements();
    init_testimonial_video1_click(); 
    init_testimonial_video2_click();
    init_welcome_video_click();
});

const create_video_elements = () => {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  var storySliderContainer = document.getElementById('story_slider');
  storySliderContainer.innerHTML = ''; // Clear previous content

  var videoSources;
  if (screenWidth > 640) {
      videoSources = [
          "https://livweal.com/wp-content/uploads/2024/01/Story1.webm",
          "https://livweal.com/wp-content/uploads/2024/01/Story2.webm",
          "https://livweal.com/wp-content/uploads/2024/01/Story3.webm",
          "https://livweal.com/wp-content/uploads/2024/01/Story4.webm",
          "https://livweal.com/wp-content/uploads/2024/01/Story5.webm"
      ];
  } else {
      videoSources = [
          "https://livweal.com/wp-content/uploads/2024/01/Story1_mobile_1.webm",
          "https://livweal.com/wp-content/uploads/2024/01/Story2_Mobile_1.webm",
          "https://livweal.com/wp-content/uploads/2024/01/Story3_Mobile.webm",
          "https://livweal.com/wp-content/uploads/2024/01/Story4_Mobile.webm",
          "https://livweal.com/wp-content/uploads/2024/01/Story5_Mobile.webm"
      ];
  }

  for (var i = 0; i < videoSources.length; i++) {
      var videoElement = document.createElement('div');
      videoElement.innerHTML = '<video id="video' + (i + 1) + '"><source data-src="' + videoSources[i] + '" type="video/webm"></video>';
      storySliderContainer.appendChild(videoElement);
  }

  // Call the initialization function after elements are added to the DOM
  init_story_slider();
}

const init_story_slider = () => {
    console.log("init story slider!");
    var slickOptions = {
      autoplay: false,
      dots: true,
      arrows: true,
      infinite: false,
      prevArrow: `<span class="slider_prev"><i class="fa-solid fa-circle-chevron-up"></i></span>`,
      nextArrow: `<span class="slider_next"><i class="fa-solid fa-circle-chevron-down"></i></span>`,
      fade: true
    };

    var $slider = $('#story_slider');

    $slider.slick(slickOptions);

    // Trigger a function when navigating to a new slide
    $slider.on('afterChange', function(event, slick, currentSlide){
      var currentVideo = $slider.find('.slick-current video')[0];
      if (currentVideo) {
        loadAndPlayVideo(currentVideo);
      }
    });

    // Play the video on the first slide after the slider is initialized
    setTimeout(function() {
      console.log("loading the first video")
      var firstVideo = $slider.find('.slick-current video')[0];
      if (firstVideo) {
        loadAndPlayVideo(firstVideo);
      }
    },1000);
};

// Function to load and play the video
const loadAndPlayVideo = (video) => {
  // Check if the video source has not been loaded
  if (!video.hasAttribute('src')) {
    var source = video.querySelector('source[data-src]');
    console.log(source.getAttribute('data-src'));
    if (source) {
      // Load the source attribute
      video.src = source.getAttribute('data-src');
    }
  }

  setTimeout(function() {
    // Reset the playback position to the beginning
    video.currentTime = 0;
    // Play the video
    video.play();
  },300)
};

const init_testimonial_video1_click = () => {
    const $btn_testimonial1 = document.getElementById("btn_testimonial1");
    const $btn_testimonial1_link = document.getElementById("btn_testimonial1_link");

    const $btn_testimonial_click = ($video) => {
      load_overlay_video($video);
    }

    $btn_testimonial1.addEventListener('click', function(event) {
      event.preventDefault();
      $btn_testimonial_click('assets/images/sholeh_shahinfar_testimonial-1.webm');
    });

    $btn_testimonial1_link.addEventListener('click', function(event) {
      event.preventDefault();
      $btn_testimonial_click('assets/images/sholeh_shahinfar_testimonial-1.webm');
    });
};

const init_testimonial_video2_click = () => {
  const $btn_testimonial2 = document.getElementById("btn_testimonial2");
  const $btn_testimonial2_link = document.getElementById("btn_testimonial2_link");

  const $btn_testimonial2_click = ($video) => {
    load_overlay_video($video);
  }

  $btn_testimonial2.addEventListener('click', function(event) {
    event.preventDefault();
    $btn_testimonial2_click('assets/images/sholeh_shahinfar_testimonial-2.webm');
  });

  $btn_testimonial2_link.addEventListener('click', function(event) {
    event.preventDefault();
    $btn_testimonial2_click('assets/images/sholeh_shahinfar_testimonial-2.webm');
  });
};

const init_welcome_video_click = () => {
  //btn_welcome_video
  const $btn_welcome_video = document.getElementById("btn_welcome_video");

  const $btn_welcome_video_click = ($video) => {
    load_overlay_video($video);
  }

  $btn_welcome_video.addEventListener('click', function(event) {
    event.preventDefault();
    $btn_welcome_video_click('assets/images/home/video/test.webm');
  });
}

const load_overlay_video = ($video) => {
  const overlay_container = document.getElementById('video_overlay')
      const overlay = document.getElementById('overlay_container');
      // document.getElementById('video_overlay').classList.toggle('active');
      overlay_container.classList.toggle('active');

      let video = document.createElement('video');
      video.id = 'overlayVideo';
      video.autoplay = false;
      video.loop = true;
      video.controls = true; // Add controls to the video

      setTimeout(function() {
        if (overlay_container.classList.contains('active')) {
          let source = document.createElement('source');
          source.src = $video;  // Replace with the actual path or URL to your webm video file
          source.type = 'video/webm';
  
          video.appendChild(source);
          overlay.appendChild(video);

          console.log("init overlay");
          const $close_overlay = document.getElementById('close_overlay');

          $close_overlay.addEventListener('click', function(event) {
              console.log("init overlay click");
              event.preventDefault();

              if (video) {
                  video.pause();
                  video.currentTime = 0;
                  overlay.removeChild(video);

                  document.getElementById('video_overlay').classList.toggle('active');
              }
          });
        } else {
            let existingVideo = document.getElementById('overlayVideo');
            if (existingVideo) {
                existingVideo.pause();
                existingVideo.currentTime = 0;
                overlay.removeChild(existingVideo);
            }
        }
      },500);
}