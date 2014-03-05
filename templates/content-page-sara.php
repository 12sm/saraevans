<div class="timeline">
	<?php echo do_shortcode( '[WPVT]' ) ?>
</div>

<div class="col two-col">
<?php while (have_posts()) : the_post(); ?>
  <?php the_content(); ?>
  <?php wp_link_pages(array('before' => '<nav class="pagination">', 'after' => '</nav>')); ?>
<?php endwhile; ?>
</div>


<div class="col books-section">
    <div class="row">
       <div class="col-md-3 col-sm-3 books-heading">
          <h1>Books</h1>
            <h2>Sara as an Author</h2>
       </div>
       <div class="col-md-3 col-sm-3">
          <img src="http://saraevans.12southdev.com/assets/9781608145690_p0_v2_s260x420.jpg" align="center" />
          <h3>The Sweet By and By</h3>
       </div>
       <div class="col-md-3 col-sm-3">
          <img src="http://saraevans.12southdev.com/assets/lovelifted2g.jpg" align="center" />
          <h3>Love Lifted Me</h3>
       </div>
       <div class="col-md-3 col-sm-3">
          <img src="http://saraevans.12southdev.com/assets/SEnewbookcover.jpg" align="center" />
          <h3>Softly and Tenderly</h3>
       </div>
    </div>
</div><!-- end col -->