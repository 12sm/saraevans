

<?php while (have_posts()) : the_post(); ?>

<div class="col">
  <article <?php post_class(); ?>>
    <header>
      <h1 class="entry-title"><?php the_title(); ?></h1>
      <!-- < ?php get_template_part('templates/entry-meta'); ?> -->
    </header>
    
    <div class="row">
    	<div class="col-md-4 col-sm-4">
        	<?php echo get_the_post_thumbnail($post_id, 'full', array('class' => 'post-image')); ?>
        </div>
    	<div class="col-md-8 col-sm-8">
    		<div class="entry-content">
    		  <?php the_content(); ?>
    		</div>
         </div>
     </div>
   	
    <footer>
      <?php wp_link_pages(array('before' => '<nav class="page-nav"><p>' . __('Pages:', 'roots'), 'after' => '</p></nav>')); ?>
    </footer>
    <?php comments_template('/templates/comments.php'); ?>
  </article>
  </div>
<?php endwhile; ?>
