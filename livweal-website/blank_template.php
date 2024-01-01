<?php /* Template Name: New Theme */ ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <?php
            $template_directory_uri = esc_url(get_template_directory_uri());
        ?>
        <meta charset="<?php bloginfo( 'charset' ); ?>" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <link rel="stylesheet" href="/wp-content/themes/livweal/assets/sass/main.min.css" />
        
        <style>
            @media screen and (max-width: 768px) {
                .offerings_retreat {
                    padding-bottom: 5rem !important;
                    margin-bottom: 0;
                }
            }
        </style>
    </head>
    <body>

    <header id="header_desktop">
        <nav>
            <a href="/fundamentals-live/" class="start-here" target="_blank">START HERE</a>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about/">About</a></li>
                <li><a href="/offerings/">Offerings</a></li>
                <li><a href="/foundation/">Foundation</a></li>
                <li><a href="/rwl/">Read, Watch, Listen</a></li>
                <li><a href="/contact/">Contact</a></li>
            </ul>  
        </nav>
        <a href="/" class="logo"><img src="https://livweal.com/wp-content/uploads/2023/12/livweal-logo-green-desktop.webp" /></a>
    </header>

    <header id="header_mobile">
        <a href="/" class="header-logo">
            <img class="menu-on" src="https://livweal.com/wp-content/uploads/2023/12/livweal-logo-white-mobile.webp" style="display: none;" />
            <img class="menu-off" src="https://livweal.com/wp-content/uploads/2023/12/livweal-logo-green-mobile.webp" style="display: inline-block;" />
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
                <li><a href="/about/">About</a></li>
                <li><a href="/offerings/">Offerings</a></li>
                <li><a href="/foundation/">Foundation</a></li>
                <li><a href="/rwl/">Read, Watch, Listen</a></li>
                <li><a href="/contact/">Contact</a></li>
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
                    <a href="#" class="footer-logo"><img src="/wp-content/themes/livweal/assets/images/livweal-logo-footer.webp" /></a>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <div class="newsletter-box">
                        <script type="text/javascript" src="https://forms.ontraport.com/v2.4/include/formEditor/genjs-v3.php?html=false&uid=p2c186826f161"></script>
                        <form class="moonray-form-clearfix" action="https://forms.ontraport.com/v2.4/form_processor.php?" method="post" accept-charset="UTF-8">
                        <p>Subscribe to our Newsletter</p>
                        <div class="container-fluid standard-form">
                            <div class="row">
                                <div class="col-12 field-item">
                                    <input name="firstname" type="text" class="moonray-form-input" id="mr-field-element-323877635092" required value="" placeholder="Name" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 field-item">
                                <input name="email" type="email" class="moonray-form-input" id="mr-field-element-243592629670" required value="" placeholder="Email" />
                                </div>
                                <div style="display: none;" class="moonray-form-element-wrapper moonray-form-element-wrapper-alignment-left moonray-form-input-type-text">
                                    <label for="mr-field-element-953306770013" class="moonray-form-label">How did you hear about us?</label>
                                    <input name="f1571" type="text" class="moonray-form-input" id="mr-field-element-953306770013" value="" placeholder />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                  <a id="btn_newsletter_subscribe_desktop" href="#" class="standard-button light-green">SUBSCRIBE</a>
                                    <input type="submit" name="submit-button" value="SUBSCRIBE" class="standard-button light-green" id="mr-field-element-996842232134-subscribe-desktop" src style="display: none;" />
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
                                <li><a href="/rwl">Read, Watch &amp; Listen</a></li>
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
                        <input name="firstname" type="text" class="moonray-form-input" id="mr-field-element-323877635092" required value="" placeholder="Name" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 field-item">
                        <input name="email" type="email" class="moonray-form-input" id="mr-field-element-243592629670" required value="" placeholder="Email" />
                    </div>
                    <div style="display: none;" class="moonray-form-element-wrapper moonray-form-element-wrapper-alignment-left moonray-form-input-type-text">
                        <label for="mr-field-element-953306770013" class="moonray-form-label">How did you hear about us?</label>
                        <input name="f1571" type="text" class="moonray-form-input" id="mr-field-element-953306770013" value="" placeholder />
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-center">
                        <a id="btn_newsletter_subscribe" href="#" class="standard-button light-green">SUBSCRIBE</a>
                        <input type="submit" name="submit-button" value="SUBSCRIBE" class="standard-button light-green" id="mr-field-element-996842232134-subscribe-mobile" src style="display: none;" />
                        <div style="display: none;">
                            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                <input id="newsletter_mobile_name" name="afft_" type="hidden" value="" />
                              </div>
                              <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
                                <input id="newsletter_mobile_email" name="aff_" type="hidden" value="" />
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
                <img src="/wp-content/themes/livweal/assets/images/livweal-logo-footer.webp" />
            </a>
        </div>
    </footer>


    <script src="https://cdn.jsdelivr.net/npm/foundation-sites@latest/dist/js/foundation.min.js"></script>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="/wp-content/themes/livweal/assets/js/main.min.js"></script>
</body>
</html>

