// Notes
// To compress and minify this, use uglify
// Example: uglifyjs input.js -o output.min.js -m -c (compressed version)
// Example: uglifyjs input.js -o output.min.js

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM Ready")
    if(window.innerWidth > 560) {
        init_screen_resize();
    }
});

window.addEventListener('resize', function() {
    if(window.innerWidth > 560) {
        init_screen_resize();
    }
    
});

const init_screen_resize = () => {
    init_element_height("values-item");
    init_element_height("testimonial-item");
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
