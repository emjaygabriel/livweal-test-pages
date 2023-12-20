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
        
        <style>
            @media screen and (max-width: 768px) {
                .offerings_retreat {
                    padding-bottom: 5rem !important;
                    margin-bottom: 0;
                }
            }
        </style>
        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <header id="header_desktop">
        <nav>
            <a href="#" class="start-here">START HERE</a>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/offerings">Offerings</a></li>
                <li><a href="/testimonials">Testimonials</a></li>
                <li><a href="/read-watch-and-listen">Read, Watch, Listen</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>  
        </nav>
        <a href="#" class="logo"><img src="<?php echo $template_directory_uri; ?>/assets/images/livweal-logo-green-desktop.webp" /></a>
    </header>

    <header id="header_mobile">
        <a href="#" class="header-logo">
            <img class="menu-on" src="<?php echo $template_directory_uri; ?>/assets/images/livweal-logo-white-mobile.webp" style="display: none;" />
            <img class="menu-off" src="<?php echo $template_directory_uri; ?>/assets/images/livweal-logo-green-mobile.webp" style="display: inline-block;" />
        </a>

        <input id="main-menu-toggle" type="checkbox" />

        <label for="main-menu-toggle">
            <span></span>
            <span></span>
            <span></span>
        </label>

        <nav>    
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/offerings">Offerings</a></li>
                <li><a href="/testimonials">Testimonials</a></li>
                <li><a href="/read-watch-and-listen">Read, Watch, Listen</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>  
        </nav>
    </header>
    
    <article id="body_section">

