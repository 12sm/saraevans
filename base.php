<?php
  if (!is_page('splash')) {
?>

<?php get_template_part('templates/head'); ?>
<body <?php body_class(); ?>>

  <!--[if lt IE 8]>
    <div class="alert alert-warning">
      <?php _e('You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.', 'roots'); ?>
    </div>
  <![endif]-->

  	<?php
    do_action('get_header');
    // Use Bootstrap's navbar if enabled in config.php
    if (current_theme_supports('bootstrap-top-navbar')) {
      get_template_part('templates/header-top-navbar');
    } else {
      get_template_part('templates/header');
    }
  ?>
  	<div id="shape-left" class="shapes shape-left"></div>
 	<div id="shape-right" class="shapes shape-right"></div>

  <div class="wrap container-fluid" role="document">
    <div class="content row">
      <main class="main <?php echo roots_main_class(); ?>" role="main">
        <?php include roots_template_path(); ?>
      </main><!-- /.main -->
    </div><!-- /.content -->
  </div><!-- /.wrap -->

  <?php get_template_part('templates/footer'); ?>

<!-- Google Code for Sara Evans - 365 Day Site Conversion Page -->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 947941608;
var google_conversion_language = "en";
var google_conversion_format = "3";
var google_conversion_color = "ffffff";
var google_conversion_label = "RxVdCOi0kSAQ6OGBxAM";
var google_conversion_value = 0;
/* ]]> */
</script>
<script type="text/javascript" src="http://www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="http://www.googleadservices.com/pagead/conversion/947941608/?value=0&label=RxVdCOi0kSAQ6OGBxAM&guid=ON&script=0"/>
</div>
</noscript>
</body>
</html>
<?php } ?>

<?php
  if (is_page('splash')){
    get_template_part('templates/content', 'page-splash');
  }
?>

<?php
if (is_page('stagecoach')){
  get_template_part('templates/content', 'page-stagecoach');
}
?>
