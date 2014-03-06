
<?php while (have_posts()) : the_post(); ?>

<div class="row col-video">
  <div class="col-md-12"> 
  <div class="row">
  	<header>
      <h1 class="entry-title"><?php the_title(); ?></h1>
      <div class="row meta-date-share">
	<div class="col-md-6 col-sm-6 col-xs-6">
        <h3>Gallery: 
<?php        $terms = get_terms( 'species' );

foreach ( $terms as $term ) {

    // Sanitize the term, since we will be displaying it.
    $term = sanitize_term( $term, 'species' );

    $term_link = get_term_link( $term, 'species' );
   
    // If there was an error, continue to the next term.
    if ( is_wp_error( $term_link ) ) {
        continue;
    }

    // We successfully got a link. Print it out.
    echo '<a href="' . esc_url( $term_link ) . '">' . $term->name . '</a>, ';
}

?></h3>
    </div>
    <div class="col-md-6 col-sm-6 col-xs-6">
        <div class="addthis_toolbox addthis_default_style addthis_32x32_style">
            <a class="addthis_button_facebook"></a>
            <a class="addthis_button_twitter"></a>
            <a class="addthis_button_google_plusone_share"></a>
            <a class="addthis_button_pinterest_share"></a>
            <a class="addthis_button_compact"></a><a class="addthis_counter addthis_bubble_style"></a>
        </div>
    </div>
</div>
<script type="text/javascript">var addthis_config = {"data_track_addressbar":false};</script>
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-522809fc5a657fd3"></script>
      </header>
  </div>
  <div class="row fitvids">
      <?php echo do_shortcode('[types field="video-url" width="1280" height="720"][/types]')?>  
  </div>
      <div class="row">
        <div class="col-xs-6">
        </div>
        <div class="col-xs-6">
        </div>
      </div>
  </div>
</div>

<?php echo do_shortcode('[wpv-view name="Related Videos"]')?>

    <div class="row col">
    	<div class="col-md-12 col-sm-12">
    		<?php comments_template('/templates/comments.php'); ?>
        </div>
    </div>


<?php endwhile; ?>