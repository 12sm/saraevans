

<div class="col">

<?php while (have_posts()) : the_post(); ?>
  <?php the_content(); ?>
  <?php wp_link_pages(array('before' => '<nav class="pagination">', 'after' => '</nav>')); ?>
<?php endwhile; ?>

<h1>Sara on Tour</h1>

<a href="http://saraevans.com/meet-greet-photos/">
<img src="http://saraevans.com/assets/meet-n-greet.png" />
</a>

<script type='text/javascript' src='http://www.bandsintown.com/javascripts/bit_widget.js'></script>
<a href='http://www.bandsintown.com' class='bit-widget-initializer' data-text-color="#898989" data-artist='Sara Evans'>Bandsintown</a>

</div>