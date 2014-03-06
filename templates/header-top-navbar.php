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

    <nav class="collapse navbar-collapse affix" role="navigation"> 
      <?php
        if (has_nav_menu('primary_navigation')) :
          wp_nav_menu(array('theme_location' => 'primary_navigation', 'menu_class' => 'nav nav-pills nav-stacked'));
        endif;
      ?>
      <a href="/music"><button type="button" class="btn btn-default music-btn">
      <i class="fa fa-music fa-2x"></i>
      </button></a>
    </nav>
    
    <div class="audio-player">
    	<?php echo do_shortcode( '[wpv-view name="audio-player"]' ) ?>
    </div>

</header>
