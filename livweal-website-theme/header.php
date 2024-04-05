<!DOCTYPE html>
<html <?php language_attributes(); ?> <?php blankslate_schema_type(); ?>>
    <head>
        <?php
            $template_directory_uri = esc_url(get_template_directory_uri());
        ?>
        <meta charset="<?php bloginfo( 'charset' ); ?>" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <link rel="stylesheet" href="<?php echo $template_directory_uri; ?>/assets/sass/main.min.css" /> 

        <?php wp_head(); ?>

        <?php
        // Check if the current page is a single post
        $is_single = is_single();

        // If it's a single post, get the primary category
        if ($is_single) {
            // Get the post ID
            $post_id = get_the_ID();

            // Get the categories for the post
            $categories = get_the_category($post_id);

            // Initialize an array to store category names
            $category_names = array();

            // Loop through categories and extract names
            foreach ($categories as $category) {
                $category_names[] = $category->name;
            }

            // If there are categories, extract the first one as primary
            if (!empty($category_names)) {
                $primary_category = $category_names[0];

                // Display the primary category and store it in a JavaScript variable
                echo '<script>';
                echo 'const current_category = "' . esc_js($primary_category) . '";'; // Escaping for safety
                echo 'const is_single = true;';
                echo '</script>';
            }
        } else {
            // If it's not a single post, set is_single to false
            echo '<script>';
            echo 'const current_category = "";';
            echo 'const is_single = false;';
            echo '</script>';
        }
        ?>

        <!-- Google Tag Manager --> <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-N6J8Q3B');</script> <!-- End Google Tag Manager --> <!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=G-YNNBBCTHLR"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-YNNBBCTHLR'); </script> <meta name="facebook-domain-verification" content="zhfzfykebwfolakdf7c1hajz7acs86" /> <!-- Meta Pixel Code --> <script> !function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '499912966837533'); fbq('track', 'PageView'); </script> <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=499912966837533&ev=PageView&noscript=1" /></noscript> <!-- End Meta Pixel Code -->
    </head>
    <body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6J8Q3B" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) -->
    <header id="header_desktop">
        <nav>
            <a href="/assessment/" class="start-here" target="_blank">START HERE</a>
            <ul>
                <li><a class="menu-item-home" href="/">Home</a></li>
                <li><a class="menu-item-about" href="/about/">About</a></li>
                <li><a class="menu-item-offerings" href="/offerings/">Offerings</a></li>
                <li><a class="menu-item-testimonials" href="/testimonials/">Testimonials</a></li>
                <li><a class="menu-item-contact" href="/contact/">Contact</a></li>
            </ul>  
        </nav>
        <a  href="/" id="desktop_logo" class="logo"></a>
    </header>
  
    <header id="header_mobile">
        <a href="/" class="header-logo">
            <img class="menu-on" src="/wp-content/themes/livweal-website-theme/assets/images/livweal-logo-white-mobile.png" style="display: none;" />
            <img class="menu-off" src="/wp-content/themes/livweal-website-theme/assets/images/livweal-logo-green-mobile.png" style="display: inline-block;" />
        </a>
  
        <input id="main-menu-toggle" type="checkbox" />
  
        <label for="main-menu-toggle">
            <span></span>
            <span></span>
            <span></span>
        </label>
  
        <nav>    
            <ul>
                <li><a class="menu-item-home" href="/">Home</a></li>
                <li><a class="menu-item-about" href="/about/">About</a></li>
                <li><a class="menu-item-offerings" href="/offerings/">Offerings</a></li>
                <li><a class="menu-item-testimonials" href="/testimonials/">Testimonials</a></li>
                <li><a class="menu-item-contact" href="/contact/">Contact</a></li>
            </ul>  
        </nav>
    </header>
    
    <article id="body_section">

