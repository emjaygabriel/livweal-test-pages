// Notes
// To compress and minify this, use uglify
// Example: uglifyjs input.js -o output.min.js -m -c (compressed version)
// Example: uglifyjs input.js -o output.min.js
const $read = document.getElementById("rwl_read");
const $watch = document.getElementById("rwl_watch");
const $listen = document.getElementById("rwl_listen");

document.addEventListener('DOMContentLoaded', function() {
    // This code will run when the DOM is fully loaded
    init_rwl_section();
});




function go_to_read(event) {
    event.preventDefault();
    set_read();
}

function set_read() {
    $read.classList.remove("d-none");
    $watch.classList.add("d-none");
    $listen.classList.add("d-none");
    sessionStorage.setItem('rwl_section', "Read");
}

function go_to_watch(event) {
    event.preventDefault();
    set_watch();
}

function set_watch() {
    $read.classList.add("d-none");
    $watch.classList.remove("d-none");
    $listen.classList.add("d-none");
    sessionStorage.setItem('rwl_section', "Watch");
}

function go_to_listen(event) {
    event.preventDefault();   
    set_listen(); 
}

function set_listen() {
    $read.classList.add("d-none");
    $watch.classList.add("d-none");
    $listen.classList.remove("d-none");
    sessionStorage.setItem('rwl_section', "Listen");
}

function init_rwl_section() {
    // Retrieving data from Session Storage
    var rwl_section_data = sessionStorage.getItem('rwl_section');

    // Checking if data is undefined, null, or doesn't exist
    if (rwl_section_data === undefined || rwl_section_data === null || rwl_section_data === '') {
        // Set a default value if data is not available
        rwl_section_data = 'Read';
        sessionStorage.setItem('rwl_section', rwl_section_data);
    }

    switch(rwl_section_data) {
        case "Read": set_read(); break;
        case "Watch": set_watch(); break;
        case "Listen": set_listen(); break;
        default: break;
    }

}