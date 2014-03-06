
<?php while (have_posts()) : the_post(); ?>

<div class="row col-video">
  <div class="col-md-12"> 
  <div class="row">
  	<header>
      <h1 class="entry-title"><?php the_title(); ?></h1>
      <?php get_template_part('templates/entry-meta'); ?>
      </header>
  </div>
  <div class="row fitvids">
      <?php echo do_shortcode('[types field="video-url" width="1280" height="720"][/types]')?>  
  </div>
      <div class="row">
        <div class="col-xs-6">
        </div>
        <div class="col-xs-6">
        </div>
      </div>
  </div>
</div>

<?php echo do_shortcode('[wpv-view name="Related Videos"]')?>

    <div class="row col">
    	<div class="col-md-12 col-sm-12">
    		<?php comments_template('/templates/comments.php'); ?>
        </div>
    </div>


<?php endwhile; ?>