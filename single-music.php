<?php while (have_posts()) : the_post(); ?>
  <article <?php post_class(); ?>>
      <?php the_content(); ?>
  </article>
<?php endwhile; ?>