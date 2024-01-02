document.addEventListener("DOMContentLoaded", function() {
    // Code to be executed when the DOM is ready
    init_story_slider();
});

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
    var firstVideo = $slider.find('.slick-current video')[0];
    if (firstVideo) {
      loadAndPlayVideo(firstVideo);
    }
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
}