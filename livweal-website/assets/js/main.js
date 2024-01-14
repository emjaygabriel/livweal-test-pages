
let $is_mobile_menu = false;
$(document).ready({
    
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

const init_close_overlay = () => {
    console.log("init overlay");
    const $close_overlay = document.getElementById('close_overlay');
    $('body').addClass('overflow-hidden');
    $close_overlay.addEventListener('click', function(event) {
        console.log("init overlay click");
        event.preventDefault();
        document.getElementById('video_overlay').classList.toggle('active');
        $('boday').removeClass('overflow-hidden');
    });
}

init_newsletter_subscribe();
init_close_overlay();
// Enter code here for any footer scripts