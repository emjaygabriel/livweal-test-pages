<?php get_header(); ?>
<link rel="stylesheet" href="/wp-content/themes/livweal-website-theme/assets/sass/rwl.min.css" />
<?php
    // Get the categories of the current post
    $categories = get_the_category();

    // Define the prefix for the ID based on the category
    $prefixMap = array(
        "Read" => "rwl_read",
        "Watch" => "rwl_watch",
        "Listen" => "rwl_listen"
    );

    $title = array(
        "Read" => "Read",
        "Watch" => "Watch",
        "Listen" => "Listen"
    );

    $sub_title = array(
        "Read" => "Activate your mind",
        "Watch" => "See for yourself",
        "Listen" => "Tune in to your senses"
    );

    $video_urls = array(
        "Read" => "/wp-content/uploads/assets_2024/rwl/video/Read_Video.webm",
        "Watch" => "/wp-content/uploads/assets_2024/rwl/video/Watch_Video.webm",
        "Listen" => "/wp-content/uploads/assets_2024/rwl/video/Listen_Video.webm"
    );

    $waves = array(
        "Read" => "/wp-content/uploads/assets_2024/rwl/Read_wave.webp",
        "Watch" => "/wp-content/uploads/assets_2024/rwl/Watch_wave.webp",
        "Listen" => "/wp-content/uploads/assets_2024/rwl/Listen_wave.webp"
    );

    // Initialize the dynamic ID variable
    $dynamicId = '';
    $label_title = '';
    $label_subtitle = '';
    $video_url = '';
    $wave = '';

    // Check if categories exist and find the first valid category
    if ($categories) {
        $firstCategory = reset($categories); // Get the first category
        if (array_key_exists($firstCategory->name, $prefixMap)) {
            // Generate the dynamic ID for the valid category
            $dynamicId = $prefixMap[$firstCategory->name];
            $label_title = $title[$firstCategory->name];
            $label_subtitle = $sub_title[$firstCategory->name];
            $video_url = $video_urls[$firstCategory->name];
            $wave = $waves[$firstCategory->name];
        }
    }
?>

<div id="<?php echo $dynamicId; ?>" class="rwl-item">
    <section class="rwl-hero">
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
                <div class="col-12">
                    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                    <?php get_template_part( 'entry' ); ?>
                    
                    <?php endwhile; endif; ?>
                    <!-- <footer class="footer"> -->
                    <!-- < php if ( comments_open() && !post_password_required() ) { comments_template( '', true ); } ? -->
                    <!-- ?php get_template_part( 'nav', 'below-single' ); ? -->
                    <!-- </footer> -->
                </div>
            </div>
        </div>
    </section>
</div>


<script>
    sessionStorage.setItem('rwl_section', '<?php echo $label_title ?>');
</script>
    
<?php get_footer(); ?>