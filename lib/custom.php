<?php 

define( 'UPLOADS', ''.'assets' );

add_action( 'admin_head' , 'add_museo_sans' );
function add_museo_sans() { ?>
  <script type="text/javascript" src="//use.typekit.net/cxj8bfd.js"></script>
  <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
<?php }


?>