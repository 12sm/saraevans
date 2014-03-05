<div class="timeline">
	<?php echo do_shortcode( '[WPVT]' ) ?>
</div>

<div class="col two-col">
<?php while (have_posts()) : the_post(); ?>
  <?php the_content(); ?>
  <?php wp_link_pages(array('before' => '<nav class="pagination">', 'after' => '</nav>')); ?>
<?php endwhile; ?>
</div>