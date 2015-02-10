

<div class="col">

<?php while (have_posts()) : the_post(); ?>
  <?php the_content(); ?>
  <?php wp_link_pages(array('before' => '<nav class="pagination">', 'after' => '</nav>')); ?>
<?php endwhile; ?>


<h1>Sara on Tour</h1>
<a href="http://www.songkick.com/artists/16594" class="songkick-widget" data-theme="light" data-track-button="on" data-detect-style="true" data-font-color="#808080" data-background-color="#ffffff">Sara Evans Tour Dates</a>
<script src="//widget.songkick.com/widget.js"></script>
</div>
