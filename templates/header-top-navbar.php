<header class="banner navbar navbar-default navbar-static-top" role="banner">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
     
      <a class="navbar-brand" href="<?php echo home_url(); ?>/"><?php bloginfo('name'); ?></a>
    </div>

   <div id="social-float" class="row social-nav">
  <ul id="menu-social-navigation" class=""><li class="menu-"><li class="menu-"><a href="https://www.facebook.com/saraevans" target="_blank"><i class="fa fa-facebook fa-2x"></i></a></li>
<li class="menu-"><a href="https://twitter.com/saraevansmusic" target="_blank"><i class="fa fa-twitter fa-2x"></i></a></li>
<li class="menu-"><a href="http://instagram.com/saraevansmusic" target="_blank"><i class="fa fa-instagram fa-2x"></i></a></li>
<li class="menu-"><a href="http://www.pinterest.com/saraevansmusic" target="_blank"><i class="fa fa-pinterest fa-2x"></i></a></li>
<li class="menu-"><a href="http://www.youtube.com/subscription_center?add_user=saraevans" target="_blank"><i class="fa fa-youtube-square fa-2x"></i></a></li>
</ul>
              </div>

    <nav class="collapse navbar-collapse affix" role="navigation"> 
      <?php
        if (has_nav_menu('primary_navigation')) :
          wp_nav_menu(array('theme_location' => 'primary_navigation', 'menu_class' => 'nav nav-pills nav-stacked'));
        endif;
      ?>
      <a href="#"><button type="button" class="btn btn-default music-btn">
      <i class="fa fa-music fa-2x"></i>
      </button></a>
    </nav>
    
    <div class="audio-player">
    	<?php echo do_shortcode( '[wpv-view name="audio-player"]' ) ?>
    </div>

</header>
