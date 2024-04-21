<!DOCTYPE html>
<html <?php language_attributes(); ?> <?php blankslate_schema_type(); ?>>
    <head>
        <?php
            $template_directory_uri = esc_url(get_template_directory_uri());
        ?>
        <meta charset="<?php bloginfo( 'charset' ); ?>" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
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


    </head>
    <body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <header id="header_desktop">
        <nav>
            <a href="/assessment/" class="start-here" target="_blank">START HERE</a>
            <ul>
                <li><a class="menu-item-home" href="/">Home</a></li>
                <li><a class="menu-item-about" href="/about/">About</a></li>
                <li><a class="menu-item-offerings" href="/offerings/">Offerings</a></li>
                <li><a class="menu-item-testimonials" href="/testimonials/">Testimonials</a></li>
                <!-- <li>
                    <a class="menu-item-rwl" href="/rwl/"><span id="label_read">Read</span>, <span id="label_watch">Watch</span>, <span id="label_listen">Listen</span></a>
                    <ul>    
                        <li><a href="/category/read">Read</a></li>
                        <li><a href="/category/watch">Watch</a></li>
                        <li><a href="/category/listen">Listen</a></li>
                    </ul>
                </li> -->
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
                <!-- <li><a class="menu-item-rwl" href="/rwl/">Read, Watch, Listen</a></li> -->
                <li><a class="menu-item-contact" href="/contact/">Contact</a></li>
            </ul>  
        </nav>
    </header>
    
    <article id="body_section">

