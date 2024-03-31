
// Notes
// To compress and minify this, use uglify
// Example: uglifyjs input.js -o output.min.js -m -c (compressed version)
// Example: uglifyjs input.js -o output.min.js
let $is_mobile_menu = false;

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM Ready")
    // Your code here
    console.log('Document is ready!');
    // init_close_overlay();
    // Call the init_page function to initialize the page
    init_page();
    // Put the code that should run after the document is ready
});



// Enter code here for any header scripts
$("#main-menu-toggle").change(function() {
    if ($(this).is(":checked")) {
        $('.header-logo .menu-on').css('display', 'inline-block');
        $('.header-logo .menu-off').css('display', 'none');
    } else {
        $('.header-logo .menu-on').css('display', 'none');
        $('.header-logo .menu-off').css('display', 'inline-block');
    }
});

/*
const init_newsletter_subscribe = () => {
    var $btn_subscribe = document.getElementById('btn_newsletter_subscribe');
    var $btn_subscribe_desktop = document.getElementById('btn_newsletter_subscribe_desktop');
    $btn_subscribe.addEventListener('click', handle_newsletter_subscribe_click_mobile);
    $btn_subscribe_desktop.addEventListener('click', handle_newsletter_subscribe_click_desktop);
};

//mr-field-element-996842232134-subscribe

const handle_newsletter_subscribe_click_desktop = ($event) => {
    $event.preventDefault();
    const $subscribe_input_button = document.getElementById('mr-field-element-996842232134-subscribe-desktop');
    $subscribe_input_button.click();
};

const handle_newsletter_subscribe_click_mobile = ($event) => {
    $event.preventDefault();
    const $subscribe_input_button = document.getElementById('mr-field-element-996842232134-subscribe-mobile');
    $subscribe_input_button.click();
};
*/

// const init_close_overlay = () => {
//     console.log("init overlay");
//     const $close_overlay = document.getElementById('close_overlay');

//     $close_overlay.addEventListener('click', function(event) {
//         console.log("init overlay click");
//         event.preventDefault();
//         document.getElementById('video_overlay').classList.toggle('active');

//     });
// }

function init_page() {
    // Define functions for each case
    console.log("init page")
    const handleHomePage = () => {
        console.log('Executing function for the home page');
        handled_active_page(".menu-item-home"); 
        add_body_id("homepage");
        update_main_logo("dark");
        // Add your home page logic here
    }

    const handleAboutPage = () => {
        console.log('Executing function for the about page');
        handled_active_page(".menu-item-about");
        add_body_id("about");
        update_main_logo("dark");
        // Add your about page logic here
    }

    const handleOfferingsPage = () => {
        console.log('Executing function for the offerings page');
        handled_active_page(".menu-item-offerings");
        add_body_id("offerings");
        update_main_logo("dark");
        // Add your offerings page logic here
    }

    const handleTestimonialsPage = () => {
        console.log('Executing function for the testimonials page');
        handled_active_page(".menu-item-testimonials");
        add_body_id("testimonials");
        update_main_logo("light");
        // Add your testimonials page logic here
    }

    const handleRwlPage = () => {
        console.log('Executing function for the rwl page');
        handled_active_page(".menu-item-rwl");
        add_body_id("rwl");
        update_main_logo("light");
        // Add your rwl page logic here
    }

    const handleOtherPage = () => {
        console.log('Executing function for the rwl page');
        // handled_active_page(".menu-item-rwl");
        add_body_id("rwl");
        update_main_logo("light");
        // Add your rwl page logic here
    }

    const handleContactPage = () => {
        console.log('Executing function for the contact page');
        handled_active_page(".menu-item-contact");
        add_body_id("contact");
        update_main_logo("dark");
        // Add your contact page logic here
    }

    const handled_active_page = ($menu_class) => {
        var menuItems = document.querySelectorAll($menu_class);
        menuItems.forEach(function(item) {
            item.classList.add('active');
        });
    }

    const add_body_id = ($id) => {
        var body = document.body;
        body.id = $id;
    }

    const update_main_logo = ($version) => {
        // 2 versions only, light and dark. (dark is green);
        let $html = null;
        switch($version) {
            case "dark": {
                $html = $(`<img class="green-version" src="https://dev.livweal.com/wp-content/themes/livweal-website-theme/assets/images/livweal-logo-green-desktop.png" />`);
                break;
            }   
            case "light": {
                $html = $(`<img class="white-version" src="https://dev.livweal.com/wp-content/themes/livweal-website-theme/assets/images/livweal-logo-white-desktop.png" />`);
                break;
            }
            default: {
                break;
            }
        }
        const $desktop_logo = $('#desktop_logo');
        $desktop_logo.prepend($html);
    }

    // Get the current URL path
    var currentPath = window.location.pathname;

    // Execute different functions based on the current path
    if(!is_single) {
        switch (true) {
            case currentPath.includes('/about'):
                handleAboutPage();
                break;
            case currentPath.includes('/offerings'):
                handleOfferingsPage();
                break;
            case currentPath.includes('/testimonials'):
                handleTestimonialsPage();
                break;
            case currentPath.includes('/rwl'):
                handleRwlPage();
                break;
            case currentPath.includes('/category/read'):
                handleOtherPage();
                document.getElementById("label_read").classList.add("active");
                break;
            case currentPath.includes('/category/watch'):
                handleOtherPage();
                document.getElementById("label_watch").classList.add("active");
                break;
            case currentPath.includes('/category/listen'):
                document.getElementById("label_listen").classList.add("active");
                handleOtherPage();
                break;
            case currentPath.includes('/contact'):
                handleContactPage();
                break;
            default:
                handleHomePage(); // its homepage.
        }
    } else {
        handleOtherPage();
        document.getElementById("label_read").classList.add("active");
    }
    
}




