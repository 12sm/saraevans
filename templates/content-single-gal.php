<?php while (have_posts()) : the_post(); ?>

<div class="col">
  <article <?php post_class(); ?>>
    
    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
            <header>
              <h1 class="entry-title"><?php the_title(); ?></h1>
              <?php get_template_part('templates/entry-meta'); ?>
            </header>
        </div>
    </div>
    
    <div class="row blog-post-content">
      <div class="col-md-12 col-sm-12">
        <div class="entry-content">
          <?php the_content(); ?>
        </div>
         </div>
     </div>
    
    <footer>
      <?php wp_link_pages(array('before' => '<nav class="page-nav"><p>' . __('Pages:', 'roots'), 'after' => '</p></nav>')); ?>
    </footer>
    
    <div class="row">
      <div class="col-md-12 col-sm-12">
        <?php comments_template('/templates/comments.php'); ?>
        </div>
    </div>
    
  </article>
  </div>
<?php endwhile; ?>