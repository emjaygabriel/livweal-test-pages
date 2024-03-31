<?php /* Template Name: New Theme */ ?>

<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <link rel="stylesheet" href="/wp-content/themes/livweal-website-theme/assets/sass/main.min.css" /> 

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
    <body>
    <?php wp_body_open(); ?>
    <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6J8Q3B" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) -->
    <header id="header_desktop">
        <nav>
            <a href="/assessment/" class="start-here" target="_blank">START HERE</a>
            <ul>
                <li><a class="menu-item-home" href="/">Home</a></li>
                <li><a class="menu-item-about" href="/about/">About</a></li>
                <li><a class="menu-item-offerings" href="/offerings/">Offerings</a></li>
                <!-- <li><a class="menu-item-testimonials" href="/testimonials/">Testimonials</a></li> -->
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
                <!-- <li><a class="menu-item-testimonials" href="/testimonials/">Testimonials</a></li> -->
                <li><a class="menu-item-contact" href="/contact/">Contact</a></li>
            </ul>  
        </nav>
    </header>
    
    <article id="body_section">

        <?php

        	the_content();

        ?>

</article>
    <footer id="footer_desktop">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <a href="#" class="footer-logo"><img src="/wp-content/themes/livweal-website-theme/assets/images/livweal-logo-footer.png" /></a>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <div class="newsletter-box">
                        <script type="text/javascript" src="https://forms.ontraport.com/v2.4/include/formEditor/genjs-v3.php?html=false&uid=p2c186826f161"></script>
                        <form class="moonray-form-clearfix" action="https://forms.ontraport.com/v2.4/form_processor.php?" method="post" accept-charset="UTF-8">
                        <p>Subscribe to our Newsletter</p>
                        <div class="container-fluid standard-form">
                            <div class="row">
                                <div class="col-12 field-item">
                                    <input name="email" type="email" class="moonray-form-input" id="mr-field-element-243592629670" required value="" placeholder="Name" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 field-item">
                                    <input type="text" placeholder="Email" />
                                </div>
                                <div style="display: none;" class="moonray-form-element-wrapper moonray-form-element-wrapper-alignment-left moonray-form-input-type-text">
                                    <label for="mr-field-element-953306770013" class="moonray-form-label">How did you hear about us?</label>
                                    <input name="f1571" type="text" class="moonray-form-input" id="mr-field-element-953306770013" value="" placeholder />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <input type="submit" name="submit-button" value="SUBSCRIBE" class="standard-button light-green" id="mr-field-element-996842232134" src />
                                    <div style="display: none;">
                                        <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                            <input name="afft_" type="hidden" value="" />
                                          </div>
                                          <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                            <input name="aff_" type="hidden" value="" />
                                          </div>
                                          <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                            <input name="sess_" type="hidden" value="" />
                                          </div>
                                          <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                            <input name="ref_" type="hidden" value="" />
                                          </div>
                                          <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                            <input name="own_" type="hidden" value="" />
                                          </div>
                                          <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                            <input name="oprid" type="hidden" value="" />
                                          </div>
                                          <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                            <input name="contact_id" type="hidden" value="" />
                                          </div>
                                          <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                            <input name="utm_source" type="hidden" value="" />
                                          </div>
                                          <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                            <input name="utm_medium" type="hidden" value="" />
                                          </div>
                                          <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                            <input name="utm_term" type="hidden" value="" />
                                          </div>
                                          <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                            <input name="utm_content" type="hidden" value="" />
                                          </div>
                                          <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                            <input name="utm_campaign" type="hidden" value="" />
                                          </div>
                                          <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                            <input name="referral_page" type="hidden" value="" />
                                          </div>
                                          <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                            <input name="_op_gclid" type="hidden" value="" />
                                          </div>
                                          <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                            <input name="_op_gcid" type="hidden" value="" />
                                          </div>
                                          <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                            <input name="_fbc" type="hidden" value="" />
                                          </div>
                                          <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                            <input name="_fbp" type="hidden" value="" />
                                          </div>
                                          <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                            <input name="uid" type="hidden" value="p2c186826f161" />
                                          </div>
                                          <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                            <input name="uniquep2c186826f161" type="hidden" value="0" />
                                          </div>
                                          <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                            <input name="mopsbbk" type="hidden" value="61F96C9C7E151DD553FDCB1B:9DADFFAC845F364FB20ABD1A" />
                                          </div>
                                          <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                            <input name="mopbelg" type="hidden" value="0166446:1E3234FEF8439B18A2AAA2A5:BEDFB8B80F70D3F7C53B633F" />
                                          </div>
                                          <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                            <input name="_vcid" type="hidden" value="NzkzNTY3fCQyYSQwOCRHbm1KLlNmcnBxWjgxd3lVbnVrT0xleC5PUm5xU2R1bThiNDgvaEMvM0VoQ1dyeUFPNUxsRw==" />
                                          </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="social-desktop">
                                        <a href="https://twitter.com/livweal_"><i class="fa-brands fa-twitter"></i></a>
                                        <a href="http://facebook.com/profile.php?id=100086894267664"><i class="fa-brands fa-facebook-f"></i></a>
                                        <a href="https://www.instagram.com/livweal"><i class="fa-brands fa-instagram"></i></a>
                                        <a href="http://linkedin.com/company/livweal"><i class="fa-brands fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <div class="row">
                        <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12"></div>
                        <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12">
                            <ul class="footer-menu">
                                <li><a href="/about">About</a></li>
                                <li><a href="/offerings">Offerings</a></li>
                                <li><a href="/read-watch-and-listen">Read, Watch &amp; Listen</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                        <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12">
                            <ul class="footer-menu">
                                <li><a href="/privacy-policy">Privacy Policy</a></li>
                                <li><a href="/press-link">Press Link</a></li>
                                <li><a href="/podcast">Podcast</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <footer id="footer_mobile">
        <div class="newsletter-box">
            <script type="text/javascript" src="https://forms.ontraport.com/v2.4/include/formEditor/genjs-v3.php?html=false&uid=p2c186826f161"></script>
            <form class="moonray-form-clearfix" action="https://forms.ontraport.com/v2.4/form_processor.php?" method="post" accept-charset="UTF-8">
            <p>Subscribe to our Newsletter</p>
            <div class="container-fluid standard-form">
                <div class="row">
                    <div class="col-12 field-item">
                        <input name="email" type="email" class="moonray-form-input" id="mr-field-element-243592629670" required value="" placeholder="Name" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 field-item">
                        <input type="text" placeholder="Email" />
                    </div>
                    <div style="display: none;" class="moonray-form-element-wrapper moonray-form-element-wrapper-alignment-left moonray-form-input-type-text">
                        <label for="mr-field-element-953306770013" class="moonray-form-label">How did you hear about us?</label>
                        <input name="f1571" type="text" class="moonray-form-input" id="mr-field-element-953306770013" value="" placeholder />
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <input type="submit" name="submit-button" value="SUBSCRIBE" class="standard-button light-green" id="mr-field-element-996842232134" src />
                        <div style="display: none;">
                            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                <input name="afft_" type="hidden" value="" />
                              </div>
                              <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                <input name="aff_" type="hidden" value="" />
                              </div>
                              <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                <input name="sess_" type="hidden" value="" />
                              </div>
                              <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                <input name="ref_" type="hidden" value="" />
                              </div>
                              <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                <input name="own_" type="hidden" value="" />
                              </div>
                              <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                <input name="oprid" type="hidden" value="" />
                              </div>
                              <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                <input name="contact_id" type="hidden" value="" />
                              </div>
                              <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                <input name="utm_source" type="hidden" value="" />
                              </div>
                              <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                <input name="utm_medium" type="hidden" value="" />
                              </div>
                              <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                <input name="utm_term" type="hidden" value="" />
                              </div>
                              <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                <input name="utm_content" type="hidden" value="" />
                              </div>
                              <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                <input name="utm_campaign" type="hidden" value="" />
                              </div>
                              <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                <input name="referral_page" type="hidden" value="" />
                              </div>
                              <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                <input name="_op_gclid" type="hidden" value="" />
                              </div>
                              <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                <input name="_op_gcid" type="hidden" value="" />
                              </div>
                              <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                <input name="_fbc" type="hidden" value="" />
                              </div>
                              <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                <input name="_fbp" type="hidden" value="" />
                              </div>
                              <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                <input name="uid" type="hidden" value="p2c186826f161" />
                              </div>
                              <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                <input name="uniquep2c186826f161" type="hidden" value="0" />
                              </div>
                              <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                <input name="mopsbbk" type="hidden" value="61F96C9C7E151DD553FDCB1B:9DADFFAC845F364FB20ABD1A" />
                              </div>
                              <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                <input name="mopbelg" type="hidden" value="0166446:1E3234FEF8439B18A2AAA2A5:BEDFB8B80F70D3F7C53B633F" />
                              </div>
                              <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                <input name="_vcid" type="hidden" value="NzkzNTY3fCQyYSQwOCRHbm1KLlNmcnBxWjgxd3lVbnVrT0xleC5PUm5xU2R1bThiNDgvaEMvM0VoQ1dyeUFPNUxsRw==" />
                              </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div> 
        <div class="links">
            <ul>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/press-link">Press Link</a></li>
                <li><a href="/podcast">Podcast</a></li>
            </ul>
        </div>
        <div class="social-media">
            <p>Follow us on:</p>
            <div>
                <a href="https://twitter.com/livweal_"><i class="fa-brands fa-twitter"></i></a>
                <a href="http://facebook.com/profile.php?id=100086894267664"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/livweal"><i class="fa-brands fa-instagram"></i></a>
                <a href="http://linkedin.com/company/livweal"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
        </div>
        <div class="footer-logo">
            <a href="/">
                <img src="/wp-content/themes/livweal-website-theme/assets/images/livweal-logo-footer.png" />
            </a>
        </div>
    </footer>

    <div id="video_overlay">
        <a id="close_overlay" href="#"><i class="fa-solid fa-xmark"></i></a> 
        <div id="overlay_container"></div>
    </div>
    <?php wp_footer(); ?>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" ></script>
    <script src="/wp-content/themes/livweal-website-theme/assets/js/main.js"></script>
</body>
</html>



