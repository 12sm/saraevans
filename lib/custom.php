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


?>