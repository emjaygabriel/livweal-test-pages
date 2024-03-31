// initialization of foundation zurb
// $(document).foundation();
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


// Enter code here for any footer scripts