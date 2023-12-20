// Enter code here for all the functionalities only inside offerings page.



const init_courses_image = () => {
    let $courses_image = document.getElementById("courses_images");
    const $images = [
        '/wp-content/themes/livweal-website-theme/assets/images/offerings/courses-main-480.webp',
        '/wp-content/themes/livweal-website-theme/assets/images/offerings/courses-main-768.webp',
        '/wp-content/themes/livweal-website-theme/assets/images/offerings/courses-main-1024.webp',
        '/wp-content/themes/livweal-website-theme/assets/images/offerings/courses-main-1280.webp',
        '/wp-content/themes/livweal-website-theme/assets/images/offerings/courses-main-1920.webp'
    ];

    const $screen_width = window.screen.width;
    console.log($screen_width);
    if($screen_width < 481) { 
        $courses_image.src = $images[0];
    } else if (($screen_width > 480) && ($screen_width < 769)) {
        $courses_image.src = $images[1];
    } else if (($screen_width > 768) && ($screen_width < 1025)) {
        $courses_image.src = $images[2];
    } else if (($screen_width > 1024) && ($screen_width < 1281)) {
        $courses_image.src = $images[3];
    } else if ($screen_width > 1280) {
        $courses_image.src = $images[4];
    }
    $courses_image.style["display"] = "";
};

const init_community_image = () => {
    let $community_image = document.getElementById("community_image");
    const $images = [
        '/wp-content/themes/livweal-website-theme/assets/images/offerings/community-main-480.webp',
        '/wp-content/themes/livweal-website-theme/assets/images/offerings/community-main-768.webp',
        '/wp-content/themes/livweal-website-theme/assets/images/offerings/community-main-1024.webp',
        '/wp-content/themes/livweal-website-theme/assets/images/offerings/community-main-1280.webp',
        '/wp-content/themes/livweal-website-theme/assets/images/offerings/community-main-1920.webp'
    ];

    const $screen_width = window.screen.width;
    console.log($screen_width);
    if($screen_width < 481) { 
        $community_image.src = $images[0];
    } else if (($screen_width > 480) && ($screen_width < 769)) {
        $community_image.src = $images[1];
    } else if (($screen_width > 768) && ($screen_width < 1025)) {
        $community_image.src = $images[2];
    } else if (($screen_width > 1024) && ($screen_width < 1281)) {
        $community_image.src = $images[3];
    } else if ($screen_width > 1280) {
        $community_image.src = $images[4];
    }
    $community_image.style["display"] = "";
};

const init_retreat_image = () => {
    let $retreat_image = document.getElementById("retreat_image");
    const $images = [
        '/wp-content/themes/livweal-website-theme/assets/images/offerings/retreat-480.webp',
        '/wp-content/themes/livweal-website-theme/assets/images/offerings/retreat-768.webp',
        '/wp-content/themes/livweal-website-theme/assets/images/offerings/retreat-1024.webp',
        '/wp-content/themes/livweal-website-theme/assets/images/offerings/retreat-1280.webp',
        '/wp-content/themes/livweal-website-theme/assets/images/offerings/retreat-1920.webp'
    ];

    const $screen_width = window.screen.width;
    console.log($screen_width);
    if($screen_width < 481) { 
        $retreat_image.src = $images[0];
    } else if (($screen_width > 480) && ($screen_width < 769)) {
        $retreat_image.src = $images[1];
    } else if (($screen_width > 768) && ($screen_width < 1025)) {
        $retreat_image.src = $images[2];
    } else if (($screen_width > 1024) && ($screen_width < 1281)) {
        $retreat_image.src = $images[3];
    } else if ($screen_width > 1280) {
        $retreat_image.src = $images[4];
    }
    $retreat_image.style["display"] = "";
};

const init_offerings_courses_top = () => {
    let $offerings_courses_top = document.getElementById("offerings-courses-top");
    const $images = [
        '/wp-content/themes/livweal-website-theme/assets/images/bg/offerings-courses-top-480.webp',
        '/wp-content/themes/livweal-website-theme/assets/images/bg/offerings-courses-top-768.webp',
        '/wp-content/themes/livweal-website-theme/assets/images/bg/offerings-courses-top-1024.webp',
        '/wp-content/themes/livweal-website-theme/assets/images/bg/offerings-courses-top-1280.webp',
        '/wp-content/themes/livweal-website-theme/assets/images/bg/offerings-courses-top-1920.webp'
    ];

    const $screen_width = window.screen.width;
    console.log($screen_width);
    if($screen_width < 481) { 
        $offerings_courses_top.src = $images[0];
    } else if (($screen_width > 480) && ($screen_width < 769)) {
        $offerings_courses_top.src = $images[1];
    } else if (($screen_width > 768) && ($screen_width < 1025)) {
        $offerings_courses_top.src = $images[2];
    } else if (($screen_width > 1024) && ($screen_width < 1281)) {
        $offerings_courses_top.src = $images[3];
    } else if ($screen_width > 1280) {
        $offerings_courses_top.src = $images[4];
    }
    $offerings_courses_top.style["display"] = "";
};

const init_offerings_courses_bottom = () => {
    let $offerings_courses_bottom = document.getElementById("offerings-courses-bottom");
    const $images = [
        '/wp-content/themes/livweal-website-theme/assets/images/bg/offerings-courses-bottom-480.webp',
        '/wp-content/themes/livweal-website-theme/assets/images/bg/offerings-courses-bottom-768.webp',
        '/wp-content/themes/livweal-website-theme/assets/images/bg/offerings-courses-bottom-1024.webp',
        '/wp-content/themes/livweal-website-theme/assets/images/bg/offerings-courses-bottom-1280.webp',
        '/wp-content/themes/livweal-website-theme/assets/images/bg/offerings-courses-bottom-1920.webp'
    ];

    const $screen_width = window.screen.width;
    console.log($screen_width);
    if($screen_width < 481) { 
        $offerings_courses_bottom.src = $images[0];
    } else if (($screen_width > 480) && ($screen_width < 769)) {
        $offerings_courses_bottom.src = $images[1];
    } else if (($screen_width > 768) && ($screen_width < 1025)) {
        $offerings_courses_bottom.src = $images[2];
    } else if (($screen_width > 1024) && ($screen_width < 1281)) {
        $offerings_courses_bottom.src = $images[3];
    } else if ($screen_width > 1280) {
        $offerings_courses_bottom.src = $images[4];
    }
    $offerings_courses_bottom.style["display"] = "";
};

const init_offerrings_retreat = () => {
    let $offerrings_retreat = document.getElementById("offerrings-retreat");
    const $images = [
        '/wp-content/themes/livweal-website-theme/assets/images/bg/offerrings-retreat-480.webp',
        '/wp-content/themes/livweal-website-theme/assets/images/bg/offerrings-retreat-768.webp',
        '/wp-content/themes/livweal-website-theme/assets/images/bg/offerrings-retreat-1024.webp',
        '/wp-content/themes/livweal-website-theme/assets/images/bg/offerrings-retreat-1280.webp',
        '/wp-content/themes/livweal-website-theme/assets/images/bg/offerrings-retreat-1920.webp'
    ];

    const $screen_width = window.screen.width;
    console.log($screen_width);
    if($screen_width < 481) { 
        $offerrings_retreat.src = $images[0];
    } else if (($screen_width > 480) && ($screen_width < 769)) {
        $offerrings_retreat.src = $images[1];
    } else if (($screen_width > 768) && ($screen_width < 1025)) {
        $offerrings_retreat.src = $images[2];
    } else if (($screen_width > 1024) && ($screen_width < 1281)) {
        $offerrings_retreat.src = $images[3];
    } else if ($screen_width > 1280) {
        $offerrings_retreat.src = $images[4];
    }
    $offerrings_retreat.style["display"] = "";
};


init_courses_image();
init_community_image();
init_retreat_image();
init_offerings_courses_top();
init_offerings_courses_bottom();
init_offerrings_retreat();