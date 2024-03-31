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
    console.log("DOM READY!");
    // Code to be executed when the DOM is ready
    // create_video_elements();
    init_testimonial_video1_click(); 
    init_testimonial_video2_click();
    // init_welcome_video_click();
    // init_story_slider_end_play();

    setTimeout(function() {
      $('.bg-happy').addClass('dom-ready'); 
      $('.bg-sad').addClass('dom-ready'); 
      $('.hero-text-container').addClass('dom-ready'); 
      // console.log("autoplay first video");
      // $('#btn_autoplay').trigger("click");
    },2000);
});

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

// const init_welcome_video_click = () => {
//   //btn_welcome_video
//   const $btn_welcome_video = document.getElementById("btn_welcome_video");
//   const $title = "Kim Davey Testimonial";
//   const $btn_welcome_video_click = ($video) => {
//     load_overlay_video($video, $title);
//   }

//   $btn_welcome_video.addEventListener('click', function(event) {
//     event.preventDefault();
//     $btn_welcome_video_click('https://player.vimeo.com/video/909075848?h=66ead3fe8f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1');
//   });
// }

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

document.getElementById('myVideo').addEventListener('click', function() {
  var video = document.getElementById('myVideo');
  video.play();
});
document.getElementById('myVideoMobile').addEventListener('click', function() {
  var video = document.getElementById('myVideo');
  video.play();
});

const play_story_video = () => {
  const video = document.getElementById("myVideo");
  const video_mobile = document.getElementById("myVideoMobile");
  if(window.innerWidth > 480) {
    video.play();
    document.getElementById('myVideo').click();
    video_mobile.pause();
  } else {
    video_mobile.play();
    document.getElementById('myVideoMobile').click();
    video.pause();
  }
}

const pause_story_video = () => {
  const video = document.getElementById("myVideo");
  const video_mobile = document.getElementById("myVideoMobile");
  video.pause();
  video_mobile.pause();
}

// -- STORY VIDEO -- //
var observer = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === true) {
    console.log('Element has just become visible in screen');
    play_story_video();
  } else {
    console.log('Element no longer visible');
    pause_story_video();
  }
		
}, { threshold: [0.5] });

observer.observe(document.querySelector("#myVideo"));
observer.observe(document.querySelector("#myVideoMobile"));

