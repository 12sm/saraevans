<div class="timeline">
	<?php echo do_shortcode( '[WPVT]' ) ?>
</div>

<div class="col two-col">
<?php while (have_posts()) : the_post(); ?>
  <?php the_content(); ?>
  <?php wp_link_pages(array('before' => '<nav class="pagination">', 'after' => '</nav>')); ?>
<?php endwhile; ?>
</div>


<div class="col">
    <div class="row">
       <div class="col-md-4 col-sm-4">
          <img src="http://lorempixel.com/280/400" />
       </div>
       <div class="col-md-8 col-sm-8">
          <h3>Title of the Book</h3>
          <p>Happily married and owner of two successful boutiques, Jade longs to begin a family with her husband, Max. But when she discovers that Max has an illegitimate son—who he wants her to help raise—Jade’s life is turned upside down.</p>
    
    <p>She flees to her childhood home, a rambling Iowa farmhouse, with enough room to breathe. There—while her mother’s health grows fragile, and the tug of her first love grows stronger—Jade begins to question everything she thought she knew about family, love, and motherhood. In the wide-open landscape, Jade begins to see a future that doesn’t rest on the power of her past but in the goodness of God's tender mercies.</p>
    
    <p>Order a copy of Sara's new book "Softly and Tenderly" today!</p>
    
       </div>
    </div>
</div><!-- end col -->