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
    	<div class="col-md-1 col-sm-1"></div>
    	<div class="col-md-9 col-sm-11 books-heading">
        	<h1>Books</h1>
            <h2>Sara as an Author</h2>
        </div>
    </div>
    <div class="row">
       <div class="col-md-1 col-sm-1"></div>
       <div class="col-md-3 col-sm-3">
          <a href="http://saraevans.merchmo.com/pages/productdetail/Sweet_By_And_By_Book_264/">
          <img src="http://saraevans.12southdev.com/assets/9781608145690_p0_v2_s260x420.jpg" align="center" />
          </a>
          <h3>The Sweet By and By</h3>
       </div>
       <div class="col-md-3 col-sm-3">
          <a href="http://www.amazon.com/Love-Lifted-Me-Songbird-Novel/dp/1595544917/ref=sr_1_4?ie=UTF8&qid=1322580160&sr=8-4">
          <img src="http://saraevans.12southdev.com/assets/lovelifted2g.jpg" align="center" />
          </a>
          <h3>Love Lifted Me</h3>
       </div>
       <div class="col-md-3 col-sm-3">
          <a href="http://www.thomasnelson.com/softly-and-tenderly.html">
          <img src="http://saraevans.12southdev.com/assets/SEnewbookcover.jpg" align="center" />
          </a>
          <h3>Softly and Tenderly</h3>
       </div>
    </div>
</div><!-- end col -->