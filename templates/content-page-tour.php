<?php while (have_posts()) : the_post(); ?>
  <?php the_content(); ?>
  <?php wp_link_pages(array('before' => '<nav class="pagination">', 'after' => '</nav>')); ?>
<?php endwhile; ?>

<script type='text/javascript' src='http://www.bandsintown.com/javascripts/bit_widget.js'></script>
<a href='http://www.bandsintown.com' class='bit-widget-initializer' data-text-color="#FFFFFF" data-artist='Sara Evans'>Bandsintown</a>