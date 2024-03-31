// Notes
// To compress and minify this, use uglify
// Example: uglifyjs input.js -o output.min.js -m -c (compressed version)
// Example: uglifyjs input.js -o output.min.js
var currentVideoIndex = 1; // Initial video index

// Define video URLs
var videoURLs = [
  "https://dev.livweal.com/wp-content/uploads/assets_2024/home/video/Story1.webm",
  "https://dev.livweal.com/wp-content/uploads/assets_2024/home/video/Story2.webm",
  "https://dev.livweal.com/wp-content/uploads/assets_2024/home/video/Story3.webm",
  "https://dev.livweal.com/wp-content/uploads/assets_2024/home/video/Story4.webm",
  "https://dev.livweal.com/wp-content/uploads/assets_2024/home/video/Story5.webm"
];

// Define mobile video URLs
var mobileVideoURLs = [
  "https://dev.livweal.com/wp-content/uploads/assets_2024/home/video/Story1_mobile_1.webm",
  "https://dev.livweal.com/wp-content/uploads/assets_2024/home/video/Story2_Mobile_1.webm",
  "https://dev.livweal.com/wp-content/uploads/assets_2024/home/video/Story3_Mobile.webm",
  "https://dev.livweal.com/wp-content/uploads/assets_2024/home/video/Story4_Mobile.webm",
  "https://dev.livweal.com/wp-content/uploads/assets_2024/home/video/Story5_Mobile.webm"
];

document.addEventListener("DOMContentLoaded", function() {
    // Code to be executed when the DOM is ready
    // create_video_elements();
    init_testimonial_video1_click(); 
    init_testimonial_video2_click();
    init_welcome_video_click();
    // init_story_slider_end_play();

    setTimeout(function() {
      $('.bg-happy').addClass('dom-ready'); 
      $('.bg-sad').addClass('dom-ready'); 
      $('.hero-text-container').addClass('dom-ready'); 
      console.log("autoplay first video");
      $('#btn_autoplay').trigger("click");
    },2000);
});

function changeVideo(index) {
  var video = document.getElementById('myVideo');
  var storySlider = document.getElementById('story_slider');

  // Set the fade-out effect
  video.style.opacity = 0;

  

  // Remove "active" class from all bullets
  var bullets = document.getElementsByClassName('bullet');
  for (var i = 0; i < bullets.length; i++) {
      bullets[i].classList.remove('active');
  }

  // Update the current video index
  currentVideoIndex = index;

  // Change the video source based on screen width
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth < 640) {
      video.src = mobileVideoURLs[index - 1];
      screenWidth = 640;
  } else {
      video.src = videoURLs[index - 1];
  }

  video.load();
  
  // Set the fade-in effect after a short delay
  setTimeout(function () {
      video.style.opacity = 1;
  }, 100);

  // Set the height transition effect after a short delay
  // setTimeout(function () {
  //     storySlider.style.height = video.clientHeight + "px";
  // }, 200);

  // setTimeout(function() {
  //   // Play the video
  //   // video.play();
  //   console.log("autoplay first video");
  //   $('#btn_autoplay').trigger("click");
  // },1000);

  // Add "active" class to the selected bullet
  bullets[index - 1].classList.add('active');

  // Set the height transition effect
  storySlider.style.height = storySlider.clientHeight + "px";

  //hide/show the next and prev depending on index 
  if(index === 1) {
    document.getElementById("prevButton").classList.add("d-none");
    document.getElementById("nextButton").classList.remove("d-none");
  } else if (index === 5) {
    document.getElementById("prevButton").classList.remove("d-none");
    document.getElementById("nextButton").classList.add("d-none");
  } else {
    document.getElementById("prevButton").classList.remove("d-none");
    document.getElementById("nextButton").classList.remove("d-none");
  }
}

function video_autoplay() {
  console.log("video autoplay");
  var video = document.getElementById('myVideo');
  video.play();
}

function prevVideo() {
  if (currentVideoIndex > 1) {
      changeVideo(currentVideoIndex - 1);
  }
}

function nextVideo() {
  if (currentVideoIndex < 5) {
      changeVideo(currentVideoIndex + 1);
  }
}


// Set the initial video source based on screen width on page load
window.addEventListener('load', function () {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var video = document.getElementById('myVideo');

  if (screenWidth < 640) {
      video.src = mobileVideoURLs[currentVideoIndex - 1];
      screenWidth = 640;
  } else {
      video.src = videoURLs[currentVideoIndex - 1];
  }
});

// Update the video source when the window is resized
window.addEventListener('resize', function () {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var video = document.getElementById('myVideo');

  if (screenWidth < 640) {
      video.src = mobileVideoURLs[currentVideoIndex - 1];
      screenWidth = 640;
  } else {
      video.src = videoURLs[currentVideoIndex - 1];
  }
});

const create_video_elements = () => {
  console.log("create_video_elements");
  var screen_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  var story_slider_container = document.getElementById('story_slider');
  story_slider_container.innerHTML = ''; // Clear previous content

  var video_sources;
  if (screen_width > 640) {
      video_sources = [
          "https://dev.livweal.com/wp-content/uploads/assets_2024/home/video/Story1.webm",
          "https://dev.livweal.com/wp-content/uploads/assets_2024/home/video/Story2.webm",
          "https://dev.livweal.com/wp-content/uploads/assets_2024/home/video/Story3.webm",
          "https://dev.livweal.com/wp-content/uploads/assets_2024/home/video/Story4.webm",
          "https://dev.livweal.com/wp-content/uploads/assets_2024/home/video/Story5.webm"
      ];
  } else {
      video_sources = [
          "https://dev.livweal.com/wp-content/uploads/assets_2024/home/video/Story1_mobile_1.webm",
          "https://dev.livweal.com/wp-content/uploads/assets_2024/home/video/Story2_Mobile_1.webm",
          "https://dev.livweal.com/wp-content/uploads/assets_2024/home/video/Story3_Mobile.webm",
          "https://dev.livweal.com/wp-content/uploads/assets_2024/home/video/Story4_Mobile.webm",
          "https://dev.livweal.com/wp-content/uploads/assets_2024/home/video/Story5_Mobile.webm"
      ];
  }

  for (var i = 0; i < video_sources.length; i++) {
      var video_element = document.createElement('div');
      video_element.innerHTML = '<video id="video' + (i + 1) + '"><source data-src="' + video_sources[i] + '" type="video/webm"></video>';
      story_slider_container.appendChild(video_element);
  }

  // Call the initialization function after elements are added to the DOM
  setTimeout(function() {
    init_story_slider();
  },1000);
  
}

const init_story_slider = () => {
  console.log("init story slider!");
  var slick_options = {
    autoplay: false,
    dots: true,
    arrows: true,
    infinite: false,
    prevArrow: `<span class="slider_prev"><i class="fa-solid fa-circle-chevron-up"></i></span>`,
    nextArrow: `<span class="slider_next"><i class="fa-solid fa-circle-chevron-down"></i></span>`,
    fade: true
  };

  var story_slider = document.getElementById('story_slider');

  if (story_slider) {
    // Initialize slick slider
    new Slick(story_slider, slick_options);

    // Trigger a function when navigating to a new slide
    story_slider.addEventListener('afterChange', function(event, slick, currentSlide){
      var current_video = story_slider.querySelector('.slick-current video');
      if (current_video) {
        load_and_play_video(current_video);
      }
    });

    // Play the video on the first slide after the slider is initialized
    setTimeout(function() {
      console.log("loading the first video")
      var first_video = story_slider.querySelector('.slick-current video');
      if (first_video) {
        load_and_play_video(first_video);
      }
    }, 1000);
  }
};

// Function to load and play the video
const load_and_play_video = (video) => {
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
    video.current_time = 0;
    // Play the video
    video.play();
  },300)
};

const init_testimonial_video1_click = () => {
    const $btn_testimonial1 = document.getElementById("btn_testimonial1");
    const $btn_testimonial1_link = document.getElementById("btn_testimonial1_link");
    const $title = "Sholeh Shahinfar Testimonial";
    const $btn_testimonial_click = ($video) => {
      load_overlay_video($video, $title);
    }

    $btn_testimonial1.addEventListener('click', function(event) {
      event.preventDefault();
      $btn_testimonial_click('https://player.vimeo.com/video/909076035?h=2cde90b770&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1');
    });

    $btn_testimonial1_link.addEventListener('click', function(event) {
      event.preventDefault();
      $btn_testimonial_click('https://player.vimeo.com/video/909076035?h=2cde90b770&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1');
    });
};

const init_testimonial_video2_click = () => {
  const $btn_testimonial2 = document.getElementById("btn_testimonial2");
  const $btn_testimonial2_link = document.getElementById("btn_testimonial2_link");
  const $title = "Kim Davey Testimonial ";
  const $btn_testimonial2_click = ($video) => {
    load_overlay_video($video, $title);
  }

  $btn_testimonial2.addEventListener('click', function(event) {
    event.preventDefault();
    $btn_testimonial2_click('https://player.vimeo.com/video/909075848?h=66ead3fe8f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1');
  });

  $btn_testimonial2_link.addEventListener('click', function(event) {
    event.preventDefault();
    $btn_testimonial2_click('https://player.vimeo.com/video/909075848?h=66ead3fe8f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1');
  });
};

const init_welcome_video_click = () => {
  //btn_welcome_video
  const $btn_welcome_video = document.getElementById("btn_welcome_video");
  const $title = "Kim Davey Testimonial";
  const $btn_welcome_video_click = ($video) => {
    load_overlay_video($video, $title);
  }

  $btn_welcome_video.addEventListener('click', function(event) {
    event.preventDefault();
    $btn_welcome_video_click('https://player.vimeo.com/video/909075848?h=66ead3fe8f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1');
  });
}

// const load_overlay_video = ($video) => {
//   const $overlayContainer = $('#video_overlay');
//   const $overlay = $('#overlay_container');

//   $overlayContainer.toggleClass('active');

//   setTimeout(function () {
//     if ($overlayContainer.hasClass('active')) {
//       let $video = $('<video>', {
//         id: 'overlayVideo',
//         autoplay: false,
//         loop: true,
//         controls: true
//       });

//       let $source = $('<source>', {
//         src: $video,
//         type: 'video/webm'
//       });

//       $video.append($source);
//       $overlay.append($video);

//       console.log("init overlay");

//       const $closeOverlay = $('#close_overlay');

//       $closeOverlay.on('click', function (event) {
//         console.log("init overlay click");
//         event.preventDefault();

//         if ($video.length) {
//           $video.get(0).pause();
//           $video.get(0).currentTime = 0;
//           $overlay.remove($video);

//           $overlayContainer.toggleClass('active');
//         }
//       });
//     } else {
//       let existingVideo = $('#overlayVideo');
//       if (existingVideo.length) {
//         existingVideo.get(0).pause();
//         existingVideo.get(0).currentTime = 0;
//         existingVideo.remove();
//       }
//     }
//   }, 500);
// };

const expand_column = (columnId) => {
  // $(".column").not("#" + columnId).removeClass("col-xl-6 col-lg-6").addClass("col-xl-3 col-lg-3");
  const $not_column = $(".column").not("#" + columnId);
  const $column = $("#" + columnId);
  $not_column.removeClass("col-xl-6");
  $not_column.removeClass("col-lg-6");
  $not_column.removeClass("col-lg-4");
  $not_column.removeClass("col-xl-4");
  $not_column.addClass("col-lg-3");
  $not_column.addClass("col-xl-3");

  // $(".column").not("#" + columnId).addClass("col-xl-3 col-lg-3");
  $column.addClass("col-xl-6");
  $column.addClass("col-lg-6");
  $column.removeClass("col-lg-4");
  $column.removeClass("col-xl-4");
  $column.removeClass("col-lg-3");
  $column.removeClass("col-xl-3");


  // $("#" + columnId).removeClass("col-xl-3 col-lg-3").addClass("col-xl-6 col-lg-6");
  show_video(columnId);
}

const reset_column = (columnId) => {
  $(".column").removeClass("col-xl-6 col-lg-6").addClass("col-xl-4 col-lg-4");
  const $column = $(".column");
  $column.removeClass("col-xl-6");
  $column.removeClass("col-lg-6");
  $column.addClass("col-lg-4");
  $column.addClass("col-xl-4");
  $column.removeClass("col-lg-3");
  $column.removeClass("col-xl-3");

  reset_video(columnId);
}

const show_video = (columnId) => {
  $("#" + columnId + " img").hide();
  $("#" + columnId + " video").removeClass("d-none").addClass("d-block");
  $("#" + columnId + " video").get(0).play();
}

const reset_video = (columnId) => {
  $("#" + columnId + " img").show();
  $("#" + columnId + " video").removeClass("d-block").addClass("d-none");
  $("#" + columnId + " video").get(0).pause();
}

const load_overlay_video = ($videoId, $title) => {
  const overlay_container = document.getElementById('video_overlay');
  const overlay = document.getElementById('overlay_container');
  overlay_container.classList.toggle('active');

  setTimeout(function () {
      if (overlay_container.classList.contains('active')) {
          // Create a new iframe element
          let iframe = document.createElement('iframe');

          // Set attributes for the iframe
          iframe.src = $videoId;
          iframe.frameBorder = 0;
          iframe.allow = 'autoplay; fullscreen; picture-in-picture';
          iframe.style.position = 'absolute';
          iframe.style.top = '0';
          iframe.style.left = '0';
          iframe.style.width = '100%';
          iframe.style.height = '100%';
          iframe.title = $title;

          // Append the iframe to the overlay container
          overlay.appendChild(iframe);

          console.log("init overlay");
          const $close_overlay = document.getElementById('close_overlay');

          $close_overlay.addEventListener('click', function (event) {
              console.log("init overlay click");
              event.preventDefault();

              // Remove the iframe when closing the overlay
              overlay.removeChild(iframe);

              document.getElementById('video_overlay').classList.toggle('active');
          });
      } else {
          // Remove the iframe if the overlay is not active
          overlay.innerHTML = '';
      }
  }, 500);
}

init_story_slider_end_play = () => {
  var video = document.getElementById('myVideo');
  video.addEventListener("ended", function() {
      // Video ended, do something here
      console.log("Video ended");
      if(currentVideoIndex < 5) {
        nextVideo();
      } else {
        changeVideo(1);
      }
  });
}

// -- STORY VIDEO -- //
// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to toggle play/pause of video
function togglePlay(videoId) {
  const video = document.getElementById(videoId);
  if (video.paused) {
      video.play();
  } else {
      video.pause();
  }
}

// Function to play or pause video based on visibility
function toggleVideoPlay() {
  const desktopVideo = document.getElementById('myVideo');
  const mobileVideo = document.getElementById('myVideoMobile');

  // Check if desktop video is in viewport
  if (window.innerWidth >= 600 && isInViewport(desktopVideo)) {
      desktopVideo.play();
  } else {
      desktopVideo.pause();
  }

  // Check if mobile video is in viewport
  if (window.innerWidth < 600 && isInViewport(mobileVideo)) {
      mobileVideo.play();
  } else {
      mobileVideo.pause();
  }
}

// Initial check
toggleVideoPlay();

// Listen for scroll and resize events
window.addEventListener('scroll', toggleVideoPlay);
window.addEventListener('resize', toggleVideoPlay);