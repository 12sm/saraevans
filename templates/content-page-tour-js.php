

<div class="col">

<?php while (have_posts()) : the_post(); ?>
  <?php the_content(); ?>
  <?php wp_link_pages(array('before' => '<nav class="pagination">', 'after' => '</nav>')); ?>
<?php endwhile; ?>

<h1>Sara on Tour</h1>

<div class="listings-height">
   <div id="powered">
      <a href="https://tourbox.songkick.com/" target="_blank" title="Songkick">
        by&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430 111" enable-background="new 0 0 430 111"><title>Songkick</title><desc>Tour Dates by Songkick</desc><path d="M276.4 67.6c-4.4 0-7.3-1.3-10.3-6-2.9-4.7-7.9-12.6-7.9-12.6l21.5-30H261l-17.1 23.8V-.1h-15.6v82.4h15.6V56.2s8.7 13.7 11.4 18c4.3 6.5 10 8.3 19.4 8.3h4.6V67.6h-2.9zM416 67.6c-4.4 0-7.3-1.3-10.3-6-3-4.7-7.9-12.6-7.9-12.6l21.5-30h-18.7l-17.1 23.8V-.1h-15.6v82.4h15.6V56.2s8.7 13.7 11.4 18c4.3 6.5 10 8.3 19.4 8.3h4.6V67.6H416zM33.3 83c-9.7 0-17.6-1.8-24.1-8.4l10-10c3.3 3.3 9.1 4.5 14.2 4.5 6.2 0 9.1-2 9.1-5.7 0-1.5-.4-2.8-1.2-3.8-.8-.8-2.1-1.4-4.2-1.7l-7.7-1.1c-5.6-.8-9.9-2.7-12.7-5.6-2.9-3-4.4-7.3-4.4-12.7 0-11.6 8.7-20.1 23.2-20.1 9.1 0 16 2.1 21.4 7.6l-9.8 9.8c-4-4-9.3-3.7-12-3.7-5.4 0-7.7 3.1-7.7 5.9 0 .8.3 2 1.2 2.9.8.8 2.1 1.6 4.4 1.9l7.7 1.1c5.7.8 9.8 2.6 12.5 5.3 3.4 3.3 4.7 8 4.7 13.9C57.8 75.9 46.7 83 33.3 83zM105.4 75.9c-4.6 4.6-10 7.1-17.7 7.1-7.8 0-13.1-2.5-17.7-7.1-6.7-6.7-6.4-15.6-6.4-25.2 0-9.5-.3-18.5 6.4-25.1 4.6-4.6 10-7.1 17.7-7.1 7.8 0 13.1 2.5 17.7 7.1 6.7 6.7 6.4 15.6 6.4 25.1 0 9.5.2 18.5-6.4 25.2zM93.9 35.1c-1.2-1.5-3.4-2.8-6.2-2.8-2.9 0-5.1 1.2-6.2 2.8-1.4 1.9-2.3 4-2.3 15.6s.9 13.7 2.3 15.5c1.2 1.5 3.4 2.9 6.2 2.9 2.9 0 5.1-1.3 6.2-2.9 1.4-1.9 2.3-3.9 2.3-15.5s-.9-13.7-2.3-15.6zM338.3 83.1c-7.4 0-13-2.5-17.6-7.1-6.7-6.7-6.4-15.6-6.4-25.2 0-9.5-.3-18.5 6.4-25.1 4.6-4.6 10.2-7.1 17.6-7.1 12 0 21.7 6.7 24.1 20.7h-15.9c-1-3.6-2.9-6.8-8.1-6.8-2.9 0-5 1.2-6.1 2.7-1.4 1.9-2.4 4.1-2.4 15.7s1 13.8 2.4 15.7c1.2 1.5 3.3 2.7 6.1 2.7 5.2 0 7.1-3.2 8.1-6.8h15.9c-2.3 13.9-12.1 20.6-24.1 20.6zM205 87.1c0 8.4-5.8 9.8-9.5 9.8h-5.7v13.9h6.9c15.5-.1 24-8.2 24-23.8l-.1-46.9c0-7.3-3.4-13.1-8.3-16.9-4.4-3.3-10-5-15.6-5-7.4 0-13 2.5-17.6 7.1-6.7 6.7-6.4 15.6-6.4 25.1 0 9.5-.3 18.5 6.4 25.2 4.6 4.6 10.2 7.1 17.6 7.1 2.9 0 5.5-.6 8.3-1.9v6.3zm-8.2-18c-2.9 0-5-1.2-6.1-2.7-1.4-1.9-2.4-4.1-2.4-15.7s1-13.8 2.4-15.7c1.2-1.5 3.3-2.7 6.1-2.7 5.1 0 7.1 3.1 8.1 6.6v23.6c-1 3.5-3 6.6-8.1 6.6zM166.4 46.5c0-6.5.3-14.3-6.4-20.9-4.6-4.6-10-7.1-17.7-7.1-7.8 0-13.1 2.5-17.7 7.1-6.7 6.7-6.4 14.9-6.4 20.9v36h15.6v-36c0-8.1.9-9.3 2.3-11.2 1.2-1.5 3.4-3 6.2-3 2.9 0 5.1 1.5 6.2 3 1.4 1.9 2.3 2.9 2.3 11.2v35.9h15.6V46.5zM299.4 12.6V0h-15.5v12.6zM283.5 19.1h15.9v38.8c0 6.9 4.4 9.8 9.6 9.8h3.6v14.8h-5.1c-15.8-.1-24-8.8-24-24V19.1z"/></svg>
      </a>
    </div>
    <h2 id="title">TOUR DATES</h2>
    <div id="track-cta" class="row hide">
      <span id="cta-text">
        <p>Track <span id="artist-name"></span> and never miss them live.</p>
        <p>Includes news and updates from the artist direct to your inbox.</p>
      </span>
      <div class="buttons">
        <a id="subscribe" href="https://www.songkick.com/artists/__ARTIST_ID__/trackings/signup?utm_source=11593&utm_medium=partner&utm_campaign=track_cta&utm_content=__ARTIST_ID__" class="button js-track-cta" title="Subscribe" target="_blank">Subscribe</a>
      </div>
    </div>
    <div class="results">
      <div class="loading row"></div>
      <div class="event hide">
        <a class="link row" href="" target="_blank">
          <div class="date">
            <div class="start"></div>
            <div class="end hide">&ndash;&nbsp;</div>
          </div><div class="artists hide">
            <span class="headline"></span><span class="support"></span>
          </div><div class="location">
            <span class="venue"></span><span class="city"></span>
          </div>
          <div class="others"></div>
        </a>
        <div class="buttons">
          <a class="additional-link hide" href="" title="" target="_blank">
            <!-- additional label -->
          </a><a class="ticket-link" href="" title="Tickets" target="_blank">
            Tickets
          </a>
        </div>
      </div>
      <div class="no-events hide">
        <p>No upcoming concerts or festivals.</p>
      </div>
      <div class="api-error hide">
        <p>Oops, we couldn’t contact Songkick and get the list of concerts.</p>
        <p>
          <a href="javascript:window.location.reload();">Click to retry</a>
        </p>
      </div>
    </div>
  </div>
  <div class="microformat">
    <script type="application/ld+json">
    </script>
  </div>
    <script type="text/javascript" src="//widget.sk-static.com/assets/songkick-widget-551816c.js"></script>

    <script type="text/javascript">
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-2610254-17', 'auto');
      ga('send', 'pageview');

      $(document).on('render.songkickWidget', function() {
        if (SongkickWidget.parameters.getParameter('artist')) {
          SongkickWidget.Analytics.viewEvents();
          SongkickWidget.Analytics.viewTrackButton();
          $(document).on('click', '.ticket-link', SongkickWidget.Analytics.findTicketsClickHandler);
          $(document).on('click', '.link', SongkickWidget.Analytics.eventRowClickHandler);
          $(document).on('click', '.additional-link', SongkickWidget.Analytics.additionalUrlClickHandler);
          $(document).on('click', '.js-track-cta', SongkickWidget.Analytics.trackClickHandler);
        }
      });
    </script>

</div>
