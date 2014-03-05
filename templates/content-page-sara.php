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
    	<div class="col-md-12 col-sm-12 books-heading">
        	<h1>Books</h1>
            <h2>Sara as an Author</h2>
        </div>
    </div>
    <div class="row">
       <div class="col-md-4 col-sm-4 single-book">
          <img src="http://saraevans.12southdev.com/assets/9781608145690_p0_v2_s260x420.jpg" align="center" />
          <h3>The Sweet By and By</h3>
          <p>Jade Fitzgerald left the pain of her past in the dust when she headed out for college a decade ago. Now she's thriving in her career and glowing in the light of Max Benson's love. But then Jade's hippie mother, Beryl Hill, arrives in Whisper Hollow, Tennessee, for Jade's wedding along with Willow, her wild younger sister. Their arrival forces Jade to throw open the dark closets of her past--the insecurity of living with a restless, wandering mother, the silence of her absent father, and the heart-ripping pain of first-love's rejection.</p>
       </div>
       <div class="col-md-4 col-sm-4">
          <img src="http://saraevans.12southdev.com/assets/lovelifted2g.jpg" align="center" />
          <h3>Love Lifted Me</h3>
          <p>Jade and Max share a deep love, though revelations from his past have recently shaken their marriage. And Jade is completely smitten with Max's little son, Asa, whom she is now raising as her own. Their blended family brings her a joy she's never known. But there is one more secret to be uncovered. One that will impact them all.</p>
       </div>
       <div class="col-md-4 col-sm-4">
          <img src="http://saraevans.12southdev.com/assets/SEnewbookcover.jpg" align="center" />
          <h3>Softly and Tenderly</h3>
          <p>Happily married and owner of two successful boutiques, Jade longs to begin a family with her husband, Max. But when she discovers that Max has an illegitimate son—who he wants her to help raise—Jade’s life is turned upside down.</p>
       </div>
    </div>
</div><!-- end col -->