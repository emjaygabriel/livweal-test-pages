<?php /* Template Name: RWL Theme */ ?>

<?php get_header(); ?>
<link rel="stylesheet" href="https://dev.livweal.com/wp-content/themes/livweal-website-theme/assets/sass/rwl.min.css" />
<div id="rwl_read" class="rwl-item">
    <section class="rwl-hero">
        <a href="#" class="btn-next" onclick="go_to_watch(event)"><img src="https://dev.livweal.com/wp-content/uploads/assets_2024/rwl/btn-next.svg" /></a>
        <div class="label_section">
          <h1>Read</h1>
          <p>Activate your mind</p>
        </div>
        <video autoplay loop muted playsinline>
            <source src="https://dev.livweal.com/wp-content/uploads/assets_2024/rwl/video/Read_Video.webm" type="video/webm">
            <!-- You can add fallback content here if the browser doesn't support HTML5 video -->
            Your browser does not support the video tag.
        </video>
    </section>
    <div class="top-wave">
        <img src="https://dev.livweal.com/wp-content/uploads/assets_2024/rwl/Read_wave.webp" />
    </div>
    <section class="rwl-main">
        <div class="container-fluid">
            <div class="row">
                <?php
                    $args = array(
                        'post_type' => 'post',
                        'posts_per_page' => -1, // -1 for all posts, you can set a specific number if needed
                        'category_name' => 'Read' // Slug of the category you want to query
                    );
                    
                    $query = new WP_Query($args);
                    
                    if ($query->have_posts()) :
                        while ($query->have_posts()) : $query->the_post();
                            // Get the full image URL
                            $full_image_url = wp_get_attachment_image_src(get_post_thumbnail_id(), 'full');
                            // Get the post URL
                            $post_url = get_permalink();
                            // Get the post categories
                            $categories = get_the_category();
                            // Get the post date
                            $post_date = get_the_date();
                    
                            // Output your post content here
                            ?>
                            
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div class="blog-item">
                                    <?php if ($full_image_url) : ?>
                                    <a href="<?php echo $post_url; ?>"><img src="<?php echo $full_image_url[0]; ?>" alt="<?php the_title(); ?>" /></a>
                                    <?php endif; ?>
                                    <div class="info">
                                      <?php echo $post_date; ?> 
                                      <?php 
                                        if ($categories) {
                                            foreach ($categories as $category) {
                                                echo '<a class="category-label" href="' . esc_url(get_category_link($category->term_id)) . '">' . esc_html($category->name) . '</a>';
                                            }
                                        }
                                        ?>
                                    </div>
                                    <a href="<?php echo $post_url; ?>" class="title"><?php the_title(); ?></a>
                                </div>
                            </div>
                            <?php
                        endwhile;
                        wp_reset_postdata(); // Reset post data to restore the original query
                    else :
                        // If no posts match your query
                        echo 'No posts found.';
                    endif;
                    ?>
            </div>
            <div class="row">
                <div class="col-12 text-center">
                    <a href="/category/read" class="standard-button red">SEE MORE ALL POSTS</a>
                </div>
            </div>
        </div>
    </section>
</div>

<div id="rwl_watch" class="rwl-item d-none">
    <section class="rwl-hero">
        <a href="#" class="btn-previous" onclick="go_to_read(event)"><img src="https://dev.livweal.com/wp-content/uploads/assets_2024/rwl/btn-previous.svg" /></a>
        <a href="#" class="btn-next" onclick="go_to_listen(event)"><img src="https://dev.livweal.com/wp-content/uploads/assets_2024/rwl/btn-next.svg" /></a>
        <div class="label_section">
          <h1>Watch</h1>
          <p>See for yourself</p>
        </div>
        <video autoplay loop muted playsinline>
            <source src="https://dev.livweal.com/wp-content/uploads/assets_2024/rwl/video/Watch_Video.webm" type="video/webm">
            <!-- You can add fallback content here if the browser doesn't support HTML5 video -->
            Your browser does not support the video tag.
        </video>
    </section>
    <div class="top-wave">
        <img src="https://dev.livweal.com/wp-content/uploads/assets_2024/rwl/Watch_wave.webp" />
    </div>
    <section class="rwl-main">
        <div class="container-fluid">
            <div class="row">
                <?php
                    $args = array(
                        'post_type' => 'post',
                        'posts_per_page' => -1, // -1 for all posts, you can set a specific number if needed
                        'category_name' => 'Watch' // Slug of the category you want to query
                    );
                    
                    $query = new WP_Query($args);
                    
                    if ($query->have_posts()) :
                        while ($query->have_posts()) : $query->the_post();
                            // Get the full image URL
                            $full_image_url = wp_get_attachment_image_src(get_post_thumbnail_id(), 'full');
                            // Get the post URL
                            $post_url = get_permalink();
                            // Get the post categories
                            $categories = get_the_category();
                            // Get the post date
                            $post_date = get_the_date();
                    
                            // Output your post content here
                            ?>
                            
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div class="blog-item">
                                    <?php if ($full_image_url) : ?>
                                    <a href="<?php echo $post_url; ?>"><img src="<?php echo $full_image_url[0]; ?>" alt="<?php the_title(); ?>" /></a>
                                    <?php endif; ?>
                                    <div class="info">
                                      <?php echo $post_date; ?> 
                                      <?php 
                                        if ($categories) {
                                            foreach ($categories as $category) {
                                                echo '<a class="category-label" href="' . esc_url(get_category_link($category->term_id)) . '">' . esc_html($category->name) . '</a>';
                                            }
                                        }
                                        ?>
                                    </div>
                                    <a href="<?php echo $post_url; ?>" class="title"><?php the_title(); ?></a>
                                </div>
                            </div>
                            <?php
                        endwhile;
                        wp_reset_postdata(); // Reset post data to restore the original query
                    else :
                        // If no posts match your query
                        echo 'No posts found.';
                    endif;
                    ?>
            </div>
            <div class="row">
                <div class="col-12 text-center">
                    <a href="/category/watch" class="standard-button light-green">SEE MORE ALL POSTS</a>
                </div>
            </div>
        </div>
    </section>
</div>

<div id="rwl_listen" class="rwl-item d-none">
    <section class="rwl-hero">
        <a href="#" class="btn-previous" onclick="go_to_watch(event)"><img src="https://dev.livweal.com/wp-content/uploads/assets_2024/rwl/btn-previous.svg" /></a>
        <div class="label_section">
          <h1>Listen</h1>
          <p>Tune in to your senses</p>
        </div>
        <video autoplay loop muted playsinline>
            <source src="https://dev.livweal.com/wp-content/uploads/assets_2024/rwl/video/Listen_Video.webm" type="video/webm">
            <!-- You can add fallback content here if the browser doesn't support HTML5 video -->
            Your browser does not support the video tag.
        </video>
    </section>
    <div class="top-wave">
        <img src="https://dev.livweal.com/wp-content/uploads/assets_2024/rwl/Listen_wave.webp" />
    </div>
    <section class="rwl-main">
        <div class="container-fluid">
            <div class="row">
                <?php
                    $args = array(
                        'post_type' => 'post',
                        'posts_per_page' => -1, // -1 for all posts, you can set a specific number if needed
                        'category_name' => 'Listen' // Slug of the category you want to query
                    );
                    
                    $query = new WP_Query($args);
                    
                    if ($query->have_posts()) :
                        while ($query->have_posts()) : $query->the_post();
                            // Get the full image URL
                            $full_image_url = wp_get_attachment_image_src(get_post_thumbnail_id(), 'full');
                            // Get the post URL
                            $post_url = get_permalink();
                            // Get the post categories
                            $categories = get_the_category();
                            // Get the post date
                            $post_date = get_the_date();
                    
                            // Output your post content here
                            ?>
                            
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div class="blog-item">
                                    <?php if ($full_image_url) : ?>
                                    <a href="<?php echo $post_url; ?>"><img src="<?php echo $full_image_url[0]; ?>" alt="<?php the_title(); ?>" /></a>
                                    <?php endif; ?>
                                    <div class="info">
                                      <?php echo $post_date; ?> 
                                      <?php 
                                        if ($categories) {
                                            foreach ($categories as $category) {
                                                echo '<a class="category-label" href="' . esc_url(get_category_link($category->term_id)) . '">' . esc_html($category->name) . '</a>';
                                            }
                                        }
                                        ?>
                                    </div>
                                    <a href="<?php echo $post_url; ?>" class="title"><?php the_title(); ?></a>
                                </div>
                            </div>
                            <?php
                        endwhile;
                        wp_reset_postdata(); // Reset post data to restore the original query
                    else :
                        // If no posts match your query
                        echo 'No posts found.';
                    endif;
                    ?>
            </div>
            <div class="row">
                <div class="col-12 text-center">
                    <a href="/category/listen" class="standard-button green">SEE MORE ALL POSTS</a>
                </div>
            </div>
        </div>
    </section>
</div>
<script src="https://dev.livweal.com/wp-content/themes/livweal-website-theme/assets/js/rwl.js"></script>
        
        
        <?php
        	the_content();
        ?>
<div class="rwl_section_bottom"><img decoding="async" id="rwl_section_top" src="https://dev.livweal.com/wp-content/uploads/assets_2024/home/rwl-bottom-1920.webp"></div>
<?php get_footer(); ?>
