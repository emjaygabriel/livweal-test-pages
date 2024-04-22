// Notes
// To compress and minify this, use uglify
// Example: uglifyjs input.js -o output.min.js -m -c (compressed version)
// Example: uglifyjs input.js -o output.min.js
// //wp-content/uploads/assets_2024/ --> live ur
const $image_url = "https://dev.livweal.com/wp-content/uploads/assets_2024/testimonials/categories/";

document.addEventListener("DOMContentLoaded", function() {
    

    // init_product_categories();
    init_video_testimonials();

    $('#testimonial-category-item').slick({
        infinite: false,
        dots: false,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1700,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: false,
                dots: true,
                arrows: false,
              }
            },
            {
                breakpoint: 1500,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: false,
                  dots: true,
                  arrows: false,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: false,
                  dots: true,
                  arrows: false,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll:1,
                  infinite: false,
                  dots: true,
                  arrows: false,
                }
            },
            {
                breakpoint: 769,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: false,
                  dots: true,
                  arrows: false,
                }
            },
            {
                breakpoint: 481,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: false,
                  dots: true,
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px'
                }
            }
            
        ]
      });

    if(window.innerWidth > 1650) {
      // Code to be executed when the DOM is ready
      document.getElementById("btn_show_testimonials_product").addEventListener("click", view_testimonial_product);
      document.getElementById("btn_show_testimonials_coaching").addEventListener("click", view_testimonial_coaching);
      document.getElementById("btn_show_testimonials_service").addEventListener("click", view_testimonial_service);
      document.getElementById("btn_show_testimonials_tech").addEventListener("click", view_testimonial_tech);
      document.getElementById("btn_show_testimonials_others").addEventListener("click", view_testimonial_others);
      document.getElementById("btn_show_testimonials_expert").addEventListener("click", view_testimonial_expert);

      init_category_hover('btn_show_testimonials_product','product');
      init_category_hover('btn_show_testimonials_coaching','coaching');
      init_category_hover('btn_show_testimonials_service','service');
      init_category_hover('btn_show_testimonials_tech','tech');
      init_category_hover('btn_show_testimonials_others','others');
      init_category_hover('btn_show_testimonials_expert','expert');
    } else {
      document.getElementById("slick-slide00").addEventListener("click", view_testimonial_product);
      document.getElementById("slick-slide01").addEventListener("click", view_testimonial_coaching);
      document.getElementById("slick-slide02").addEventListener("click", view_testimonial_service);
      document.getElementById("slick-slide03").addEventListener("click", view_testimonial_tech);
      document.getElementById("slick-slide04").addEventListener("click", view_testimonial_expert);
      document.getElementById("slick-slide05").addEventListener("click", view_testimonial_others);

      init_category_hover('slick-slide00','product');
      init_category_hover('slick-slide01','coaching');
      init_category_hover('slick-slide02','service');
      init_category_hover('slick-slide03','tech');
      init_category_hover('slick-slide04','expert');
      init_category_hover('slick-slide05','others');
    }

    preloadImages();
});



const view_testimonial_product = () => {
    view_testimonials_by_category('product');
    change_category_image("btn_show_testimonials_product", "product", "active");
    change_category_image("btn_show_testimonials_coaching", "coaching", "default");
    change_category_image("btn_show_testimonials_service", "service", "default");
    change_category_image("btn_show_testimonials_tech", "tech", "default");
    change_category_image("btn_show_testimonials_others", "others", "default");
    change_category_image("btn_show_testimonials_expert", "expert", "default");

    change_category_image("slick-slide00", "product", "active");
    change_category_image("slick-slide01", "coaching", "default");
    change_category_image("slick-slide02", "service", "default");
    change_category_image("slick-slide03", "tech", "default");
    change_category_image("slick-slide04", "expert", "default");
    change_category_image("slick-slide05", "others", "default");
    
}

const view_testimonial_coaching = () => {
    view_testimonials_by_category('coaching');
    change_category_image("btn_show_testimonials_product", "product", "default");
    change_category_image("btn_show_testimonials_coaching", "coaching", "active");
    change_category_image("btn_show_testimonials_service", "service", "default");
    change_category_image("btn_show_testimonials_tech", "tech", "default");
    change_category_image("btn_show_testimonials_others", "others", "default");
    change_category_image("btn_show_testimonials_expert", "expert", "default");

    change_category_image("slick-slide00", "product", "default");
    change_category_image("slick-slide01", "coaching", "active");
    change_category_image("slick-slide02", "service", "default");
    change_category_image("slick-slide03", "tech", "default");
    change_category_image("slick-slide04", "expert", "default");
    change_category_image("slick-slide05", "others", "default");
}

const view_testimonial_service = () => {
    view_testimonials_by_category('service');
    change_category_image("btn_show_testimonials_product", "product", "default");
    change_category_image("btn_show_testimonials_coaching", "coaching", "default");
    change_category_image("btn_show_testimonials_service", "service", "active");
    change_category_image("btn_show_testimonials_tech", "tech", "default");
    change_category_image("btn_show_testimonials_others", "others", "default");
    change_category_image("btn_show_testimonials_expert", "expert", "default");

    change_category_image("slick-slide00", "product", "default");
    change_category_image("slick-slide01", "coaching", "default");
    change_category_image("slick-slide02", "service", "active");
    change_category_image("slick-slide03", "tech", "default");
    change_category_image("slick-slide04", "expert", "default");
    change_category_image("slick-slide05", "others", "default");
}   

const view_testimonial_tech = () => {
    view_testimonials_by_category('tech');
    change_category_image("btn_show_testimonials_product", "product", "default");
    change_category_image("btn_show_testimonials_coaching", "coaching", "default");
    change_category_image("btn_show_testimonials_service", "service", "default");
    change_category_image("btn_show_testimonials_tech", "tech", "active");
    change_category_image("btn_show_testimonials_others", "others", "default");
    change_category_image("btn_show_testimonials_expert", "expert", "default");

    change_category_image("slick-slide00", "product", "default");
    change_category_image("slick-slide01", "coaching", "default");
    change_category_image("slick-slide02", "service", "default");
    change_category_image("slick-slide03", "tech", "active");
    change_category_image("slick-slide04", "expert", "default");
    change_category_image("slick-slide05", "others", "default");
}

const view_testimonial_others = () => {
    view_testimonials_by_category('others');
    change_category_image("btn_show_testimonials_product", "product", "default");
    change_category_image("btn_show_testimonials_coaching", "coaching", "default");
    change_category_image("btn_show_testimonials_service", "service", "default");
    change_category_image("btn_show_testimonials_tech", "tech", "default");
    change_category_image("btn_show_testimonials_others", "others", "active");
    change_category_image("btn_show_testimonials_expert", "expert", "default");

    change_category_image("slick-slide00", "product", "default");
    change_category_image("slick-slide01", "coaching", "default");
    change_category_image("slick-slide02", "service", "default");
    change_category_image("slick-slide03", "tech", "default");
    change_category_image("slick-slide04", "expert", "default");
    change_category_image("slick-slide05", "others", "active");
}

const view_testimonial_expert = () => {
    view_testimonials_by_category('expert');
    change_category_image("btn_show_testimonials_product", "product", "default");
    change_category_image("btn_show_testimonials_coaching", "coaching", "default");
    change_category_image("btn_show_testimonials_service", "service", "default");
    change_category_image("btn_show_testimonials_tech", "tech", "default");
    change_category_image("btn_show_testimonials_others", "others", "default");
    change_category_image("btn_show_testimonials_expert", "expert", "active");

    change_category_image("slick-slide00", "product", "default");
    change_category_image("slick-slide01", "coaching", "default");
    change_category_image("slick-slide02", "service", "default");
    change_category_image("slick-slide03", "tech", "default");
    change_category_image("slick-slide04", "expert", "active");
    change_category_image("slick-slide05", "others", "default");
}

const view_testimonials_by_category = ($section) => {
    var $testimonials_category = document.getElementsByClassName('testimonials-category');
    var $category_waves = document.getElementsByClassName('category_wave');
    var $category_buttons = document.getElementsByClassName('testimonial-category-button');

    for (var i = 0; i < $testimonials_category.length; i++) {
        $testimonials_category[i].style.display = 'none';
        $category_waves[i].style.display = 'none';
        $category_buttons[i].classList.remove('active');
    }
    
    const $body_element = document.getElementById("testimonials-category-content");
    $body_element.className = "";
    $body_element.classList.add(`${$section}-wave`);

    document.getElementById(`${$section}-category-section`).style.display = 'block';
    document.getElementById(`${$section}-wave`).style.display = 'block';

    const btn = document.getElementById(`btn_show_testimonials_${$section}`);
    if(btn != null) {
      btn.classList.add('active');
    }

    let $slick_button = "";
    switch($section) {
      case "product":   $slick_button = "slick-slide00"; break;
      case "coaching":  $slick_button = "slick-slide01"; break;
      case "service":   $slick_button = "slick-slide02"; break;
      case "tech":      $slick_button = "slick-slide03"; break;
      case "expert":    $slick_button = "slick-slide04"; break;
      case "others":    $slick_button = "slick-slide05"; break;
      default:          $slick_button = "slick-slide01"; break;
    }

    const btn_slick = document.getElementById($slick_button);
    if(btn_slick != null) {
      btn_slick.classList.add('active');
    }

    
}



const init_video_testimonials = () => {
  var $parent_container = document.getElementById('testimonials-category-content');

  // Get all anchor elements inside .testimonial-item
  var $child_anchors = $parent_container.querySelectorAll('.testimonial-item a');

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


function preloadImages() {
  console.log("preloading images");
  const imageArray = [ ///wp-content/uploads/assets_2024/
    'https://dev.livweal.com/wp-content/uploads/assets_2024/testimonials/categories/coaching-active.webp"',
    'https://dev.livweal.com/wp-content/uploads/assets_2024/testimonials/categories/coaching-default.webp"',
    'https://dev.livweal.com/wp-content/uploads/assets_2024/testimonials/categories/coaching-hover.webp"',
    'https://dev.livweal.com/wp-content/uploads/assets_2024/testimonials/categories/others-active.webp"',
    'https://dev.livweal.com/wp-content/uploads/assets_2024/testimonials/categories/others-default.webp"',
    'https://dev.livweal.com/wp-content/uploads/assets_2024/testimonials/categories/others-hover.webp"',
    'https://dev.livweal.com/wp-content/uploads/assets_2024/testimonials/categories/expert-active.webp"',
    'https://dev.livweal.com/wp-content/uploads/assets_2024/testimonials/categories/expert-default.webp"',
    'https://dev.livweal.com/wp-content/uploads/assets_2024/testimonials/categories/expert-hover.webp"',
    'https://dev.livweal.com/wp-content/uploads/assets_2024/testimonials/categories/product-active.webp"',
    'https://dev.livweal.com/wp-content/uploads/assets_2024/testimonials/categories/product-default.webp"',
    'https://dev.livweal.com/wp-content/uploads/assets_2024/testimonials/categories/product-hover.webp"',
    'https://dev.livweal.com/wp-content/uploads/assets_2024/testimonials/categories/service-active.webp"',
    'https://dev.livweal.com/wp-content/uploads/assets_2024/testimonials/categories/service-default.webp"',
    'https://dev.livweal.com/wp-content/uploads/assets_2024/testimonials/categories/service-hover.webp"',
    'https://dev.livweal.com/wp-content/uploads/assets_2024/testimonials/categories/tech-default.webp"',
    'https://dev.livweal.com/wp-content/uploads/assets_2024/testimonials/categories/tech-hover.webp"',
    'https://dev.livweal.com/wp-content/uploads/assets_2024/testimonials/categories/tech-active.webp"'
  ];

  let preloadedImages = [];

  for (var i = 0; i < imageArray.length; i++) {
      var img = new Image();
      img.src = imageArray[i];
      preloadedImages.push(img);
  }

  // return preloadedImages; --> no return needed.
}

const init_category_hover = ($id, $category_name) => {
  
  const btn = document.getElementById($id);
  const img = btn.querySelector('img');

  btn.addEventListener('mouseenter', () => {
    change_category_image($id, $category_name, 'hover');
  });

  btn.addEventListener('mouseleave', () => {
    if(btn.classList.contains('active')) {
      // img.src = `${$image_url}${$category_name}-active.webp"`; 
      change_category_image($id, $category_name, 'active');
    } else {
      // img.src = `${$image_url}${$category_name}-default.webp"`;
      change_category_image($id, $category_name, 'default'); 
    }
  });
}

const change_category_image = ($id, $category_name, $state) => {
  const btn = document.getElementById($id);
  if(btn !== null) {
    const img = btn.querySelector('img');
    img.src = `${$image_url}${$category_name}-${$state}.webp`;
  }
}