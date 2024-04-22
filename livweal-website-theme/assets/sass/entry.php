<?php
// Get the post categories
$post_categories = get_the_category();
$category_list = '';
if ($post_categories) {
    foreach ($post_categories as $category) {
        // Generate class name based on category name (lowercase and without spaces)
        $class = 'category-' . str_replace(' ', '-', strtolower(sanitize_html_class($category->name))); // Ensure class is safe for HTML attributes
        // Append span element with category name and class
        $category_list .= '<span class="' . $class . '">' . esc_html($category->name) . '</span>';
    }
}
 
// Get the post date
$post_date = get_the_date();

// Get the author name
$author_name = get_the_author();

// Get the post title
$post_title = get_the_title();

// Get the next and previous post objects
$next_post = get_next_post();
$prev_post = get_previous_post();

// Get the next post title
$next_post_title = ($next_post) ? get_the_title($next_post) : '';
// Get the previous post title
$prev_post_title = ($prev_post) ? get_the_title($prev_post) : '';

// Get the next and previous post links with titles
$next_post_link = get_next_post_link('%link', '%title', true, '', 'category');
$prev_post_link = get_previous_post_link('%link', '%title', true, '', 'category');

$next_post_url = get_permalink(get_next_post());
$previous_post_url = get_permalink(get_previous_post());
?>

<div class="blog-main" id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

    <?php 
        $categories = get_the_category();
        if (!empty($categories)) {
            foreach ($categories as $category) {
                // Determine the category name and set the link text accordingly
                $link_text = '';
                switch (strtolower($category->name)) {
                    case 'read':
                        $link_text = '&lt;&lt; Back to Read';
                        break;
                    case 'watch':
                        $link_text = '&lt;&lt; Back to Watch';
                        break;
                    case 'listen':
                        $link_text = '&lt;&lt; Back to Listen';
                        break;
                    default:
                        $link_text = 'Back'; // Default link text if category doesn't match any specific case
                        break;
                }
                echo '<a class="category-label" href="' . esc_url(get_category_link($category->term_id)) . '">' . esc_html($link_text) . '</a> ';
            }
        }
    ?>

    <?php
        // Check if the current page is a single post
        $is_single = is_single();

        // If it's a single post, proceed to get the primary category
        if ($is_single) {
            // Get the post ID
            $post_id = get_the_ID();

            // Get the categories for the post
            $categories = get_the_category($post_id);

            // Initialize a variable to store the primary category
            $primary_category = '';

            // If there are categories, extract the first one as primary
            if (!empty($categories)) {
                $primary_category = $categories[0]->name;

                // Output the post title based on the primary category
                if ($primary_category === 'Read') {
                    ?>
                        <h1><?php echo $post_title; ?></h1>
                        <div class="heading-info">
                            <span class="categories"><?php echo $category_list; ?></span>
                            <span class="post-author">POSTED <?php echo $post_date; ?> BY <?php echo $author_name; ?></span>
                        </div>
                    <?php
                } elseif ($primary_category === 'Watch' || $primary_category === 'Listen') {
                    // Get the podcast embed custom field value
                    $podcast_embed = get_post_meta($post_id, 'podcast', true);
                    
                    // Check if the custom field has a value
                    if (!empty($podcast_embed)) {
                        ?>
                        <div class="podcast-embed"><?php echo $podcast_embed; ?></div>
                        <?php
                    }
                    
                    // Display the post title below the podcast embed
                    ?>
                        <h1 class="text-center"><?php echo $post_title; ?></h1>
                        <div class="heading-info text-center">
                            <span class="categories"><?php echo $category_list; ?></span>
                            <span class="post-author">POSTED <?php echo $post_date; ?> BY <?php echo $author_name; ?></span>
                        </div>
                    <?php
                }
            }
        }
    ?>






    
    
    <div class="blog-content">
        <?php get_template_part( 'entry', ( is_front_page() || is_home() || is_front_page() && is_home() || is_archive() || is_search() ? 'summary' : 'content' ) ); ?>
        
    </div>
    <div class="blog-nav">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <?php if ($prev_post_link) : ?>
                        <div class="prev-link">
                            <a href="<?php echo $previous_post_url; ?>">
                                <span>&lt;&lt; PREVIOUS</span>
                                <span><?php echo $prev_post_title; ?></span>
                            </a>
                        </div>
                    <?php endif; ?>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <?php if ($next_post_link) : ?>
                        <div class="next-link">
                            <a href="<?php echo $next_post_url; ?>">
                                <span>NEXT &gt;&gt;</span>
                                <span><?php echo $next_post_title; ?></span>
                            </a>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        
        
    </div>
</div>