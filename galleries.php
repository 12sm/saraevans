
<?php
/*
Template Name: Galleries
*/
get_header(); ?>
[wpv-layout-start]
	[wpv-items-found]
           <div class="row">
	<div class="col-md-2">
	</div>
	<div class="col-md-8"> 
		<div class="row">
			<h1> [wpv-post-title]</h1>
		</div>
		<div class="row fitvids">
				[types field="video-url" width="1280" height="720"][/types]
		</div>
	</div>
</div>
<div class="row">
       	<div class="col-sm-2">
        </div>
        <div class="col-sm-8">
       		<div class="row">
   			<div class="col-sm-12 gal-title-box">
   			<h2>More Videos</h2>
   			</div>
		</div>	
		<wpv-loop wrap="4">
		[wpv-item index=1]
		<div class="row">
              <a href="[wpv-post-url]"><div class="col-sm-3 col-xs-6 gal-thumb" style='background-image: url("[wpv-post-featured-image raw='true']")'>
                </div></a>
        [wpv-item index=4]
        <a href="[wpv-post-url]"><div class="col-sm-3 col-xs-6 gal-thumb" style='background-image: url("[wpv-post-featured-image raw='true']")'>
                </div></a>
                </div>
        [wpv-item index=other]
        <a href="[wpv-post-url]"><div class="col-sm-3 col-xs-6 gal-thumb" style='background-image: url("[wpv-post-featured-image raw='true']")'>
                </div></a>
          </wpv-loop>
    </div>
</div>
	[/wpv-items-found]
	[wpv-no-items-found]
		[wpml-string context="wpv-views"]<strong>No posts found</strong>[/wpml-string]
	[/wpv-no-items-found]
[wpv-layout-end]