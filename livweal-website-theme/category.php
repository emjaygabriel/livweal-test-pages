<?php get_header(); ?>
<link rel="stylesheet" href="/wp-content/themes/livweal-website-theme/assets/sass/rwl.min.css" />
<?php
    // Get the current category object from the global $wp_query
    $current_category = $wp_query->get_queried_object();

    // Initialize the variable to store the category name
    $category_name = '';

    // Check if the current category object exists
    if ($current_category instanceof WP_Term) {
        // Access the category name
        $category_name = $current_category->name;
    } else {
        $category_name = 'Uncategorized';
    }

    $dynamicId = '';
    $label_title = '';
    $label_subtitle = '';
    $video_url = '';
    $wave = '';

    // Validation against "Read", "Watch", and "Listen"
    if ($category_name === "Read") {
        // Category is "Read"
        $dynamicId = 'rwl_read';
        $label_title = 'Read';
        $label_subtitle = 'Activate your mind';
        $video_url = '/wp-content/uploads/assets_2024/rwl/video/Read_Video.webm';
        $wave = '/wp-content/uploads/assets_2024/rwl/Read_wave.webp';
    } elseif ($category_name === "Watch") {
        // Category is "Watch"
        $dynamicId = 'rwl_watch';
        $label_title = 'Watch';
        $label_subtitle = 'See for yourself';
        $video_url = '/wp-content/uploads/assets_2024/rwl/video/Watch_Video.webm';
        $wave = '/wp-content/uploads/assets_2024/rwl/Watch_wave.webp';
    } elseif ($category_name === "Listen") {
        // Category is "Listen"
        $dynamicId = 'rwl_listen';
        $label_title = 'Listen';
        $label_subtitle = 'Tune in to your senses';
        $video_url = '/wp-content/uploads/assets_2024/rwl/video/Listen_Video.webm';
        $wave = '/wp-content/uploads/assets_2024/rwl/Listen_wave.webp';
    } else {
        // Category doesn't match "Read", "Watch", or "Listen"
        // Do something for other categories
    }
?>

<div id="<?php echo $dynamicId; ?>" class="rwl-item">
    <section class="rwl-hero">
        

        <?php if ($category_name == 'Read') : ?>
            <a href="/category/watch" class="btn-next"><img src="https://dev.livweal.com/wp-content/uploads/assets_2024/rwl/btn-next.svg" /></a>

        <?php elseif ($category_name == 'Watch') : ?>
            <a href="/category/read" class="btn-previous"><img src="https://dev.livweal.com/wp-content/uploads/assets_2024/rwl/btn-previous.svg" /></a>
            <a href="/category/listen" class="btn-next"><img src="https://dev.livweal.com/wp-content/uploads/assets_2024/rwl/btn-next.svg" /></a>
        <?php elseif ($category_name == 'Listen') : ?>
            <a href="/category/watch" class="btn-previous"><img src="https://dev.livweal.com/wp-content/uploads/assets_2024/rwl/btn-previous.svg" /></a>
        <?php endif; ?>

        <div class="label_section">
          <h1><?php echo $label_title; ?></h1>
          <p><?php echo $label_subtitle; ?></p>
        </div>
        <video autoplay loop muted playsinline>
            <source src="<?php echo $video_url; ?>" type="video/webm">
            <!-- You can add fallback content here if the browser doesn't support HTML5 video -->
            Your browser does not support the video tag.
        </video>
    </section>
    <div class="top-wave">
        <img src="<?php echo $wave; ?>" />
    </div>
    <section class="rwl-main">
        <div class="container-fluid">
            <div class="row">
                <?php if ( have_posts() ) : while ( have_posts() )  : the_post(); ?>
                
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <div class="blog-item">
                        <?php if (has_post_thumbnail()) : ?>
                            <?php
                                $image_src = wp_get_attachment_image_src( get_post_thumbnail_id(), 'full' );    
                            ?>
                            <a href="<?php the_permalink(); ?>"><img src="<?php echo $image_src[0]; ?>" alt="<?php esc_attr( get_the_title() ); ?>" /></a>
                        <?php endif; ?>
                        
                        
                        <div class="info">
                            <?php echo get_the_date(); ?>
                            <?php 
                                $categories = get_the_category();
                                if (!empty($categories)) {
                                    foreach ($categories as $category) {
                                        // Generate class name based on category name (lowercase and without spaces)
                                        $class = 'category-' . str_replace(' ', '-', strtolower(sanitize_html_class($category->name))); // Ensure class is safe for HTML attributes
                                        echo '<a class="category-label ' . $class . '" href="' . esc_url(get_category_link($category->term_id)) . '">' . esc_html($category->name) . '</a> ';
                                    }
                                }
                            ?>
                        </div>
                        <a href="<?php echo $post_url; ?>" class="title"><?php the_title(); ?></a>
                    </div>
                </div>

                <?php endwhile; endif; ?>

               
            </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>