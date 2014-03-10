<?php if ( is_front_page() ){
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="EN">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
    <meta name="viewport" content="user-scalable=yes">

	<meta name="title" content="Sara Evans | Slow Me Down" />
	<meta property="og:title" content="Sara Evans | Slow Me Down" />
  	<meta property="og:image" content="http://www.tweematic.com/slowmedown/images/icon.png" />
  	<meta property="og:description" content="Slow Me Down at http://zip2.it/SaraEvans" />
  	<meta property="og:url" content="http://www.tweematic.com/slowmedown/">
	<meta property="fb:app_id" content="231992446820312"/>
	<style type="text/css">
		html {overflow: auto;}
		html, body, div, iframe {margin: 0px; padding: 0px; height: 100%; border: none;}
		iframe {display: block; width: 100%; border: none; overflow-y: auto; overflow-x: hidden; height:100%;}
	</style>

	</head>
	<body>
		<!-- Tweematic Iframe Container v2.1 -->
		<iframe id="main" name="main" src="http://www.tweematic.com/slowmedown/index.php" frameborder="0" marginheight="0" marginwidth="0" width="100%" height="100%" scrolling="auto"></iframe>
<script>
var projectWidth=1330;
var projectHeight=1100;
</script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="//d3f6omxqx4kosh.cloudfront.net/iframe/js/iframe.js"></script>
	
</body>
</html>



<?php	
	
}else{
	
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


</body>
</html>

<?php } ?>