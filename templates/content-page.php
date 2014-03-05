<<<<<<< HEAD
<?php while (have_posts()) : the_post(); ?>
  <?php the_content(); ?>
  <?php wp_link_pages(array('before' => '<nav class="pagination">', 'after' => '</nav>')); ?>
<?php endwhile; ?>
=======
<?php echo do_shortcode('[wpv-view name="blog-page"]') ?>

<div class="col">
<!--<?php while (have_posts()) : the_post(); ?>
  <?php the_content(); ?>
  <?php wp_link_pages(array('before' => '<nav class="pagination">', 'after' => '</nav>')); ?>
<?php endwhile; ?>-->
</div>
>>>>>>> e9f28d5df896a3babbc89c90aeed335d77c61f54
