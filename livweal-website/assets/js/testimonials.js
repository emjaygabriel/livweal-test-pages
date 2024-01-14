// Notes
// To compress and minify this, use uglify
// Example: uglifyjs input.js -o output.min.js -m -c (compressed version)
// Example: uglifyjs input.js -o output.min.js

document.addEventListener("DOMContentLoaded", function() {
    // Code to be executed when the DOM is ready
    document.getElementById("btn_show_testimonials_product").addEventListener("click", view_testimonial_product);
    document.getElementById("btn_show_testimonials_coaching").addEventListener("click", view_testimonial_coaching);
    document.getElementById("btn_show_testimonials_service").addEventListener("click", view_testimonial_service);
    document.getElementById("btn_show_testimonials_tech").addEventListener("click", view_testimonial_tech);
    document.getElementById("btn_show_testimonials_education").addEventListener("click", view_testimonial_education);
    document.getElementById("btn_show_testimonials_expert").addEventListener("click", view_testimonial_expert);

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
});



const view_testimonial_product = () => {
    view_testimonials_by_category('product');
}

const view_testimonial_coaching = () => {
    view_testimonials_by_category('coaching');
}

const view_testimonial_service = () => {
    view_testimonials_by_category('service');
}   

const view_testimonial_tech = () => {
    view_testimonials_by_category('tech');
}

const view_testimonial_education = () => {
    view_testimonials_by_category('education');
}

const view_testimonial_expert = () => {
    view_testimonials_by_category('expert');
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
    document.getElementById(`btn_show_testimonials_${$section}`).classList.add('active');
}