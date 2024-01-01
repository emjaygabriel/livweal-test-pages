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
      };
  
      var $slider = $('#story_slider');
  
      $slider.slick(slickOptions);
  
      // Pause the currently playing video when changing slides
      $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var currentVideo = $slider.find('.slick-current video')[0];
        currentVideo.controls = false;
        if (currentVideo) {
          currentVideo.pause();
        }
      });
  
      // Trigger a function when navigating to a new slide
      $slider.on('afterChange', function(event, slick, currentSlide){
        var currentVideo = $slider.find('.slick-current video')[0];
        currentVideo.controls = false;
        if (currentVideo) {
          // Reset the playback position to the beginning
          currentVideo.currentTime = 0;
          currentVideo.play();
        }
      });
};