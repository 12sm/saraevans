<?php 

define( 'UPLOADS', ''.'assets' );

add_action( 'admin_head' , 'add_museo_sans' );
function add_museo_sans() { ?>
  <script type="text/javascript" src="//use.typekit.net/cxj8bfd.js"></script>
  <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
<?php }

function bread_crumbs ($atts) {

   extract(shortcode_atts(array(
    'width' => '100%',
   ), $atts));
return yoast_breadcrumb('<div class="breadcrumbs">','</div>');
}

add_shortcode('breadcrumbs', 'bread_crumbs');


add_action( 'init', 'my_cleanup', 11 ); // after they are registered
function my_cleanup() {
if ( !is_admin() ) {
global $WP_Views;
remove_action('wp_print_styles', array($WP_Views, 'add_render_css'));
remove_action('wp_head', 'wpv_add_front_end_js');
remove_action('wp_footer', 'wpcf_access_dependencies_render_js');
wp_dequeue_style( 'views-pagination-style' );
wp_dequeue_script( 'views-pagination-script' );
wp_dequeue_script( 'wpv-date-front-end-script' );
wp_dequeue_script( 'jquery-ui-datepicker' );
wp_dequeue_script( 'jquery-ui-core' );
wp_dequeue_style( 'jquery-ui-datepicker' );
}
}


?>