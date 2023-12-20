</article>
    <?php
            $template_directory_uri = esc_url(get_template_directory_uri());
        ?>
    <footer id="footer_desktop">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <a href="/" class="footer-logo"><img src="<?php echo $template_directory_uri; ?>/assets/images/livweal-logo-footer.webp" /></a>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <div class="newsletter-box">
                        <p>Subscribe to our Newsletter</p>
                        <div class="newsletter-entry">
                            <button class="btn_subscribe">SUBSCRIBE</button>
                            <input type="text" />
                        </div>
                        <div class="social-desktop">
                            <a href="https://twitter.com/livweal_"><i class="fa-brands fa-twitter"></i></a>
                            <a href="http://facebook.com/profile.php?id=100086894267664"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/livweal"><i class="fa-brands fa-instagram"></i></a>
                            <a href="http://linkedin.com/company/livweal"><i class="fa-brands fa-linkedin-in"></i></a>
                        </div>
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
            <p>Subscribe to our Newsletter</p>
            <div class="newsletter-entry">
                <button class="btn_subscribe">SUBSCRIBE</button>
                <input type="text" />
            </div>
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
            <a href="#">
                <img src="<?php echo $template_directory_uri; ?>/assets/images/livweal-logo-footer.webp" />
            </a>
        </div>
    </footer>

    <?php wp_footer(); ?>

    <script src="https://cdn.jsdelivr.net/npm/foundation-sites@latest/dist/js/foundation.min.js"></script>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="<?php echo $template_directory_uri; ?>/assets/js/main.js"></script>
</body>
</html>