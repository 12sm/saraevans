
<div class="row">
  <div class="col-sm-2">
  </div>
  <div class="col-sm-10"><article <?php post_class(); ?>>
  <header>
  <div class="row">
    <div class="col-sm-12">
    <h2 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
    <?php get_template_part('templates/entry-meta'); ?>
    </div>
    </div>
    <div class="row">
    <div class="col-sm-12">
  </header>
  <div class="entry-summary">
    <?php the_excerpt(); ?>
  </div>
  </div>
  </div>
</article>
</div>
</div>
</div>