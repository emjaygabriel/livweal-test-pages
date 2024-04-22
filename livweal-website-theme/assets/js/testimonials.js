// Notes
// To compress and minify this, use uglify
// Example: uglifyjs input.js -o output.min.js -m -c (compressed version)
// Example: uglifyjs input.js -o output.min.js
// //wp-content/uploads/assets_2024/ --> live ur
const $image_url = "https://dev.livweal.com/wp-content/uploads/assets_2024/testimonials/categories/";

document.addEventListener("DOMContentLoaded", function() {
    // init_product_categories();
    init_video_testimonials();
    init_screen_resize();
});

window.addEventListener('resize', function() {
  if(window.innerWidth > 560) {
      init_screen_resize();
  }
  
});

const init_screen_resize = () => {
  init_element_height("transformation-item");
  init_element_height("working-with-jennifer-item-info");
}

const init_video_testimonials = () => {
  // Get all anchor elements inside .testimonial-item
  var $child_anchors = document.querySelectorAll('.video_link');
  // Add onclick event to each anchor
  $child_anchors.forEach(function(anchor) {
    anchor.onclick = function(event) {
      // Prevent the default behavior
      event.preventDefault();

      // Access the data-src attribute
      var dataSrc = anchor.getAttribute('data-src');
      var dataTitle = anchor.getAttribute('data-title');

      // Your custom logic goes here
      load_overlay_video(dataSrc, dataTitle);
    };
  });
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

const init_element_height = (class_name) => {
  console.log("init element height");
  let elements = document.getElementsByClassName(class_name);
  let maxHeight = 0;

  for (let i = 0; i < elements.length; i++) {
      elements[i].removeAttribute('style');
  }

  // Find the maximum height
  for (var i = 0; i < elements.length; i++) {
    var height = elements[i].offsetHeight;
    maxHeight = Math.max(maxHeight, height);
  }
  // Set the maximum height to all elements with the same class
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.height = maxHeight + 'px';
  }
}