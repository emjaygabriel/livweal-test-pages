// Notes
// To compress and minify this, use uglify
// Example: uglifyjs input.js -o output.min.js -m -c (compressed version)
// Example: uglifyjs input.js -o output.min.js

document.addEventListener("DOMContentLoaded", function() {
    // Code to be executed when the DOM is ready
    
});

const view_testimonial_product = ($event) => {
    console.log("product click", $event);
}

const view_testimonial_coaching = () => {
    $event.preventDefault();
    console.log("coaching click");
}

const view_testimonial_service = () => {
    $event.preventDefault();
    console.log("service click");
}   

const view_testimonial_tech = () => {
    $event.preventDefault();
    console.log("tech click");
}

const view_testimonial_education = () => {
    $event.preventDefault();
    console.log("education click");
}

const view_testimonial_expert = () => {
    $event.preventDefault();
    console.log("expert click");
}

