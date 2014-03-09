/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can 
 * always reference jQuery with $, even when in .noConflict() mode.
 *
 * Google CDN, Latest jQuery
 * To use the default WordPress version of jQuery, go to lib/config.php and
 * remove or comment out: add_theme_support('jquery-cdn');
 * ======================================================================== */

(function($) {

// Use this variable to set up the common and page specific functions. If you 
// rename this variable, you will also need to rename the namespace below.
var Roots = {
  // All pages
  common: {
    init: function() {
      
      /* Parallax
      function parallax(){
      	var scrolled = $(window).scrollTop();
      	$('.shapes').css('background-position-y', -(scrolled * 0.4) + 'px');
      }
      
      $(window).scroll(function(e){
      	parallax();
      }); */
      
      // iScroll Parallax
      var myScroll;

      function loaded () {
	      myScroll = new IScroll('#scroll-wrapper', {
		      mouseWheel: true,
		      indicators: [{
			      el: document.getElementById('shape-left'),
			      resize: false,
			      ignoreBoundaries: true,
			      speedRatioY: 0.4
			   }, {
				   el: document.getElementById('shape-right'),
				   resize: false,
				   ignoreBoundaries: true,
				   speedRatioY: 0.2
				}]
			});
		}

		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		
      
      //Inject values into mail button
      $("#e2ma_signup_submit_button" ).ready(function(){
	    $("#e2ma_signup_submit_button" ).val( "JOIN" );
	    $("#e2ma_signup_submit_button" ).addClass( "btn btn-default" );
	  });


      //ImgLiquid
      $(".blog-img-container").imgLiquid();
      $(".gal-thumb").imgLiquid();

      // FitVids init
      $(".fitvids").fitVids();
  
	   
	 // Music Album Carousel  
     var owl = $("#album-carousel");
     owl.owlCarousel({
       itemsCustom : [
       [0, 2],
       [480, 3],
       [768, 4],
       [1200, 5],
       [1600, 6]
       ],
       navigation : true,
       navigationText: ['<i class="fa fa-arrow-circle-left"></i>','<i class="fa fa-arrow-circle-right"></i>'],
       pagination: false,
       scrollPerPage : true
      });
      
       /** Lyrics display **/
        $('.play').on('click', function(e){
            var lyrics = $(this).find('.lyric-output').clone();

            if (lyrics.length) {
                $("#lyrics-base").html(lyrics).parent().removeClass("closed");
                $("#lyrics-base").children().removeClass("hide");
                $("#lyrics-base").scrollTop(0,0);
            }else{
                $("#lyrics-base").parent().addClass("closed");
            }

            if (inlinePlayer) {
                inlinePlayer.events.finish = function() {

                    // Remove Playing Class
                    $('a.sm2_playing').removeClass('sm2_playing');

                    // Blow away the last played track
                    inlinePlayer.stopSound(inlinePlayer.lastSound);
                };
            }
        });
        
        /** Load first lyric **/
        var lyrics = $(".songs-list:first-child").find('.lyric-output').clone();
        $("#lyrics-base").html(lyrics);
        
        /** Make album click work **/
		$('.album-link').on('click', function(event){
			window.location = $(this).attr("href");
		});   
		    
        /** Fix weird nav click issue **/
		$('.nav li a').on('click', function(event){
			window.location = $(this).attr("href");
		}); 
		
		
		// ** Audio Player  ** //
		
		$(function() { 
        // Setup the player to autoplay the next track
        var a = audiojs.createAll({
          trackEnded: function() {
            var next = $('ol li.playing').next();
            if (!next.length) next = $('ol li').first();
            next.addClass('playing').siblings().removeClass('playing');
            audio.load($('a', next).attr('data-src'));
            audio.play();
          }
        });
        
        // Load in the first track
        var audio = a[0];
            first = $('ol a').attr('data-src');
        $('ol li').first().addClass('playing');
        audio.load(first);

        // Load in a track on click
        $('ol li').click(function(e) {
          e.preventDefault();
          $(this).addClass('playing').siblings().removeClass('playing');
          audio.load($('a', this).attr('data-src'));
          audio.play();
        });
        // Keyboard shortcuts
        $(document).keydown(function(e) {
          var unicode = e.charCode ? e.charCode : e.keyCode;
             // right arrow
          if (unicode == 39) {
            var next = $('li.playing').next();
            if (!next.length) next = $('ol li').first();
            next.click();
            // back arrow
          } else if (unicode == 37) {
            var prev = $('li.playing').prev();
            if (!prev.length) prev = $('ol li').last();
            prev.click();
            // spacebar
          } else if (unicode == 32) {
            audio.playPause();
          }
        })
      });
	
	// Move audio player	
	$(function(){
    	var c=-460;
    	$(".audio-player").stop().animate({left: ++c%2*460 }, 'fast');
    	$(".music-btn").click(function(){
        	$(".audio-player").stop().animate({left: ++c%2*460 }, 'fast');
        });  
    }); 	
      

    }
  },
  // Home page
  home: {
    init: function() {
      // JavaScript to be fired on the home page  
      
      $('.insta-grid').embedagram({
       	instagram_id: 185380813,
       	thumb_width: 306,
       	limit: 5
       });      
    
       //Jquery hover to fix nav
       $('nav>li>a').hover(function(){$(this).toggleClass('nav-hover');});
   }
  },
  // Photos Page.
  photos: {
    init: function() {
     
     $('.insta-grid').embedagram({
       	instagram_id: 185380813,
       	thumb_width: 306,
       	limit: 20
      });
      
    }
  }
};

// The routing fires all common scripts, followed by the page specific scripts.
// Add additional events for more control over timing e.g. a finalize event
var UTIL = {
  fire: function(func, funcname, args) {
    var namespace = Roots;
    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
      namespace[func][funcname](args);
    }
  },
  loadEvents: function() {
    UTIL.fire('common');

    $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
      UTIL.fire(classnm);
    });
  }
};


$(document).ready(UTIL.loadEvents);
})(jQuery); // Fully reference jQuery after this point.




/** audio.js **/
(function(h,o,g){var p=function(){for(var b=/audio(.min)?.js.*/,a=document.getElementsByTagName("script"),c=0,d=a.length;c<d;c++){var e=a[c].getAttribute("src");if(b.test(e))return e.replace(b,"")}}();g[h]={instanceCount:0,instances:{},flashSource:'      <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="$1" width="1" height="1" name="$1" style="position: absolute; left: -1px;">         <param name="movie" value="$2?playerInstance='+h+'.instances[\'$1\']&datetime=$3">         <param name="allowscriptaccess" value="always">         <embed name="$1" src="$2?playerInstance='+
h+'.instances[\'$1\']&datetime=$3" width="1" height="1" allowscriptaccess="always">       </object>',settings:{autoplay:false,loop:false,preload:true,imageLocation:"../assets/js/player-graphics.gif",swfLocation:"../assets/js/audiojs.swf",useFlash:function(){var b=document.createElement("audio");return!(b.canPlayType&&b.canPlayType("audio/mpeg;").replace(/no/,""))}(),hasFlash:function(){if(navigator.plugins&&navigator.plugins.length&&navigator.plugins["Shockwave Flash"])return true;else if(navigator.mimeTypes&&navigator.mimeTypes.length){var b=
navigator.mimeTypes["application/x-shockwave-flash"];return b&&b.enabledPlugin}else try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash");return true}catch(a){}return false}(),createPlayer:{markup:'          <div class="play-pause">             <p class="play"></p>             <p class="pause"></p>             <p class="loading"></p>             <p class="error"></p>           </div>           <div class="scrubber">             <div class="progress"></div>             <div class="loaded"></div>           </div>           <div class="time">             <em class="played">00:00</em>/<strong class="duration">00:00</strong>           </div>           <div class="error-message"></div>',
playPauseClass:"play-pause",scrubberClass:"scrubber",progressClass:"progress",loaderClass:"loaded",timeClass:"time",durationClass:"duration",playedClass:"played",errorMessageClass:"error-message",playingClass:"playing",loadingClass:"loading",errorClass:"error"},css:'        .audiojs audio { position: absolute; left: -1px; }         .audiojs { width: 460px; height: 36px; background: #404040; overflow: hidden; font-family: monospace; font-size: 12px;           background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #444), color-stop(0.5, #555), color-stop(0.51, #444), color-stop(1, #444));           background-image: -moz-linear-gradient(center top, #444 0%, #555 50%, #444 51%, #444 100%);           -webkit-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3); -moz-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);           -o-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3); box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3); }         .audiojs .play-pause { width: 25px; height: 40px; padding: 4px 6px; margin: 0px; float: left; overflow: hidden; border-right: 1px solid #000; }         .audiojs p { display: none; width: 25px; height: 40px; margin: 0px; cursor: pointer; }         .audiojs .play { display: block; }         .audiojs .scrubber { position: relative; float: left; width: 280px; background: #5a5a5a; height: 14px; margin: 10px; border-top: 1px solid #3f3f3f; border-left: 0px; border-bottom: 0px; overflow: hidden; }         .audiojs .progress { position: absolute; top: 0px; left: 0px; height: 14px; width: 0px; background: #ccc; z-index: 1;           background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #ccc), color-stop(0.5, #ddd), color-stop(0.51, #ccc), color-stop(1, #ccc));           background-image: -moz-linear-gradient(center top, #ccc 0%, #ddd 50%, #ccc 51%, #ccc 100%); }         .audiojs .loaded { position: absolute; top: 0px; left: 0px; height: 14px; width: 0px; background: #000;           background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #222), color-stop(0.5, #333), color-stop(0.51, #222), color-stop(1, #222));           background-image: -moz-linear-gradient(center top, #222 0%, #333 50%, #222 51%, #222 100%); }         .audiojs .time { float: left; height: 36px; line-height: 36px; margin: 0px 0px 0px 6px; padding: 0px 6px 0px 12px; border-left: 1px solid #000; color: #ddd; text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5); }         .audiojs .time em { padding: 0px 2px 0px 0px; color: #f9f9f9; font-style: normal; }         .audiojs .time strong { padding: 0px 0px 0px 2px; font-weight: normal; }         .audiojs .error-message { float: left; display: none; margin: 0px 10px; height: 36px; width: 400px; overflow: hidden; line-height: 36px; white-space: nowrap; color: #fff;           text-overflow: ellipsis; -o-text-overflow: ellipsis; -icab-text-overflow: ellipsis; -khtml-text-overflow: ellipsis; -moz-text-overflow: ellipsis; -webkit-text-overflow: ellipsis; }         .audiojs .error-message a { color: #eee; text-decoration: none; padding-bottom: 1px; border-bottom: 1px solid #999; white-space: wrap; }                 .audiojs .play { background: url("$1") -2px -1px no-repeat; }         .audiojs .loading { background: url("$1") -2px -31px no-repeat; }         .audiojs .error { background: url("$1") -2px -61px no-repeat; }         .audiojs .pause { background: url("$1") -2px -91px no-repeat; }                 .playing .play, .playing .loading, .playing .error { display: none; }         .playing .pause { display: block; }                 .loading .play, .loading .pause, .loading .error { display: none; }         .loading .loading { display: block; }                 .error .time, .error .play, .error .pause, .error .scrubber, .error .loading { display: none; }         .error .error { display: block; }         .error .play-pause p { cursor: auto; }         .error .error-message { display: block; }',
trackEnded:function(){},flashError:function(){var b=this.settings.createPlayer,a=j(b.errorMessageClass,this.wrapper),c='Missing <a href="http://get.adobe.com/flashplayer/">flash player</a> plugin.';if(this.mp3)c+=' <a href="'+this.mp3+'">Download audio file</a>.';g[h].helpers.removeClass(this.wrapper,b.loadingClass);g[h].helpers.addClass(this.wrapper,b.errorClass);a.innerHTML=c},loadError:function(){var b=this.settings.createPlayer,a=j(b.errorMessageClass,this.wrapper);g[h].helpers.removeClass(this.wrapper,
b.loadingClass);g[h].helpers.addClass(this.wrapper,b.errorClass);a.innerHTML='Error loading: "'+this.mp3+'"'},init:function(){g[h].helpers.addClass(this.wrapper,this.settings.createPlayer.loadingClass)},loadStarted:function(){var b=this.settings.createPlayer,a=j(b.durationClass,this.wrapper),c=Math.floor(this.duration/60),d=Math.floor(this.duration%60);g[h].helpers.removeClass(this.wrapper,b.loadingClass);a.innerHTML=(c<10?"0":"")+c+":"+(d<10?"0":"")+d},loadProgress:function(b){var a=this.settings.createPlayer,
c=j(a.scrubberClass,this.wrapper);j(a.loaderClass,this.wrapper).style.width=c.offsetWidth*b+"px"},playPause:function(){this.playing?this.settings.play():this.settings.pause()},play:function(){g[h].helpers.addClass(this.wrapper,this.settings.createPlayer.playingClass)},pause:function(){g[h].helpers.removeClass(this.wrapper,this.settings.createPlayer.playingClass)},updatePlayhead:function(b){var a=this.settings.createPlayer,c=j(a.scrubberClass,this.wrapper);j(a.progressClass,this.wrapper).style.width=
c.offsetWidth*b+"px";a=j(a.playedClass,this.wrapper);c=this.duration*b;b=Math.floor(c/60);c=Math.floor(c%60);a.innerHTML=(b<10?"0":"")+b+":"+(c<10?"0":"")+c}},create:function(b,a){a=a||{};return b.length?this.createAll(a,b):this.newInstance(b,a)},createAll:function(b,a){var c=a||document.getElementsByTagName("audio"),d=[];b=b||{};for(var e=0,i=c.length;e<i;e++)d.push(this.newInstance(c[e],b));return d},newInstance:function(b,a){var c=this.helpers.clone(this.settings),d="audiojs"+this.instanceCount,
e="audiojs_wrapper"+this.instanceCount;this.instanceCount++;if(b.getAttribute("autoplay")!=null)c.autoplay=true;if(b.getAttribute("loop")!=null)c.loop=true;if(b.getAttribute("preload")=="none")c.preload=false;a&&this.helpers.merge(c,a);if(c.createPlayer.markup)b=this.createPlayer(b,c.createPlayer,e);else b.parentNode.setAttribute("id",e);e=new g[o](b,c);c.css&&this.helpers.injectCss(e,c.css);if(c.useFlash&&c.hasFlash){this.injectFlash(e,d);this.attachFlashEvents(e.wrapper,e)}else c.useFlash&&!c.hasFlash&&
this.settings.flashError.apply(e);if(!c.useFlash||c.useFlash&&c.hasFlash)this.attachEvents(e.wrapper,e);return this.instances[d]=e},createPlayer:function(b,a,c){var d=document.createElement("div"),e=b.cloneNode(true);d.setAttribute("class","audiojs");d.setAttribute("className","audiojs");d.setAttribute("id",c);if(e.outerHTML&&!document.createElement("audio").canPlayType){e=this.helpers.cloneHtml5Node(b);d.innerHTML=a.markup;d.appendChild(e);b.outerHTML=d.outerHTML;d=document.getElementById(c)}else{d.appendChild(e);
d.innerHTML+=a.markup;b.parentNode.replaceChild(d,b)}return d.getElementsByTagName("audio")[0]},attachEvents:function(b,a){if(a.settings.createPlayer){var c=a.settings.createPlayer,d=j(c.playPauseClass,b),e=j(c.scrubberClass,b);g[h].events.addListener(d,"click",function(){a.playPause.apply(a)});g[h].events.addListener(e,"click",function(i){i=i.clientX;var f=this,k=0;if(f.offsetParent){do k+=f.offsetLeft;while(f=f.offsetParent)}a.skipTo((i-k)/e.offsetWidth)});if(!a.settings.useFlash){g[h].events.trackLoadProgress(a);
g[h].events.addListener(a.element,"timeupdate",function(){a.updatePlayhead.apply(a)});g[h].events.addListener(a.element,"ended",function(){a.trackEnded.apply(a)});g[h].events.addListener(a.source,"error",function(){clearInterval(a.readyTimer);clearInterval(a.loadTimer);a.settings.loadError.apply(a)})}}},attachFlashEvents:function(b,a){a.swfReady=false;a.load=function(c){a.mp3=c;a.swfReady&&a.element.load(c)};a.loadProgress=function(c,d){a.loadedPercent=c;a.duration=d;a.settings.loadStarted.apply(a);
a.settings.loadProgress.apply(a,[c])};a.skipTo=function(c){if(!(c>a.loadedPercent)){a.updatePlayhead.call(a,[c]);a.element.skipTo(c)}};a.updatePlayhead=function(c){a.settings.updatePlayhead.apply(a,[c])};a.play=function(){if(!a.settings.preload){a.settings.preload=true;a.element.init(a.mp3)}a.playing=true;a.element.pplay();a.settings.play.apply(a)};a.pause=function(){a.playing=false;a.element.ppause();a.settings.pause.apply(a)};a.setVolume=function(c){a.element.setVolume(c)};a.loadStarted=function(){a.swfReady=
true;a.settings.preload&&a.element.init(a.mp3);a.settings.autoplay&&a.play.apply(a)}},injectFlash:function(b,a){var c=this.flashSource.replace(/\$1/g,a);c=c.replace(/\$2/g,b.settings.swfLocation);c=c.replace(/\$3/g,+new Date+Math.random());var d=b.wrapper.innerHTML,e=document.createElement("div");e.innerHTML=c+d;b.wrapper.innerHTML=e.innerHTML;b.element=this.helpers.getSwf(a)},helpers:{merge:function(b,a){for(attr in a)if(b.hasOwnProperty(attr)||a.hasOwnProperty(attr))b[attr]=a[attr]},clone:function(b){if(b==
null||typeof b!=="object")return b;var a=new b.constructor,c;for(c in b)a[c]=arguments.callee(b[c]);return a},addClass:function(b,a){RegExp("(\\s|^)"+a+"(\\s|$)").test(b.className)||(b.className+=" "+a)},removeClass:function(b,a){b.className=b.className.replace(RegExp("(\\s|^)"+a+"(\\s|$)")," ")},injectCss:function(b,a){for(var c="",d=document.getElementsByTagName("style"),e=a.replace(/\$1/g,b.settings.imageLocation),i=0,f=d.length;i<f;i++){var k=d[i].getAttribute("title");if(k&&~k.indexOf("audiojs")){f=
d[i];if(f.innerHTML===e)return;c=f.innerHTML;break}}d=document.getElementsByTagName("head")[0];i=d.firstChild;f=document.createElement("style");if(d){f.setAttribute("type","text/css");f.setAttribute("title","audiojs");if(f.styleSheet)f.styleSheet.cssText=c+e;else f.appendChild(document.createTextNode(c+e));i?d.insertBefore(f,i):d.appendChild(styleElement)}},cloneHtml5Node:function(b){var a=document.createDocumentFragment(),c=a.createElement?a:document;c.createElement("audio");c=c.createElement("div");
a.appendChild(c);c.innerHTML=b.outerHTML;return c.firstChild},getSwf:function(b){b=document[b]||window[b];return b.length>1?b[b.length-1]:b}},events:{memoryLeaking:false,listeners:[],addListener:function(b,a,c){if(b.addEventListener)b.addEventListener(a,c,false);else if(b.attachEvent){this.listeners.push(b);if(!this.memoryLeaking){window.attachEvent("onunload",function(){if(this.listeners)for(var d=0,e=this.listeners.length;d<e;d++)g[h].events.purge(this.listeners[d])});this.memoryLeaking=true}b.attachEvent("on"+
a,function(){c.call(b,window.event)})}},trackLoadProgress:function(b){if(b.settings.preload){var a,c;b=b;var d=/(ipod|iphone|ipad)/i.test(navigator.userAgent);a=setInterval(function(){if(b.element.readyState>-1)d||b.init.apply(b);if(b.element.readyState>1){b.settings.autoplay&&b.play.apply(b);clearInterval(a);c=setInterval(function(){b.loadProgress.apply(b);b.loadedPercent>=1&&clearInterval(c)})}},10);b.readyTimer=a;b.loadTimer=c}},purge:function(b){var a=b.attributes,c;if(a)for(c=0;c<a.length;c+=
1)if(typeof b[a[c].name]==="function")b[a[c].name]=null;if(a=b.childNodes)for(c=0;c<a.length;c+=1)purge(b.childNodes[c])},ready:function(){return function(b){var a=window,c=false,d=true,e=a.document,i=e.documentElement,f=e.addEventListener?"addEventListener":"attachEvent",k=e.addEventListener?"removeEventListener":"detachEvent",n=e.addEventListener?"":"on",m=function(l){if(!(l.type=="readystatechange"&&e.readyState!="complete")){(l.type=="load"?a:e)[k](n+l.type,m,false);if(!c&&(c=true))b.call(a,l.type||
l)}},q=function(){try{i.doScroll("left")}catch(l){setTimeout(q,50);return}m("poll")};if(e.readyState=="complete")b.call(a,"lazy");else{if(e.createEventObject&&i.doScroll){try{d=!a.frameElement}catch(r){}d&&q()}e[f](n+"DOMContentLoaded",m,false);e[f](n+"readystatechange",m,false);a[f](n+"load",m,false)}}}()}};g[o]=function(b,a){this.element=b;this.wrapper=b.parentNode;this.source=b.getElementsByTagName("source")[0]||b;this.mp3=function(c){var d=c.getElementsByTagName("source")[0];return c.getAttribute("src")||
(d?d.getAttribute("src"):null)}(b);this.settings=a;this.loadStartedCalled=false;this.loadedPercent=0;this.duration=1;this.playing=false};g[o].prototype={updatePlayhead:function(){this.settings.updatePlayhead.apply(this,[this.element.currentTime/this.duration])},skipTo:function(b){if(!(b>this.loadedPercent)){this.element.currentTime=this.duration*b;this.updatePlayhead()}},load:function(b){this.loadStartedCalled=false;this.source.setAttribute("src",b);this.element.load();this.mp3=b;g[h].events.trackLoadProgress(this)},
loadError:function(){this.settings.loadError.apply(this)},init:function(){this.settings.init.apply(this)},loadStarted:function(){if(!this.element.duration)return false;this.duration=this.element.duration;this.updatePlayhead();this.settings.loadStarted.apply(this)},loadProgress:function(){if(this.element.buffered!=null&&this.element.buffered.length){if(!this.loadStartedCalled)this.loadStartedCalled=this.loadStarted();this.loadedPercent=this.element.buffered.end(this.element.buffered.length-1)/this.duration;
this.settings.loadProgress.apply(this,[this.loadedPercent])}},playPause:function(){this.playing?this.pause():this.play()},play:function(){/(ipod|iphone|ipad)/i.test(navigator.userAgent)&&this.element.readyState==0&&this.init.apply(this);if(!this.settings.preload){this.settings.preload=true;this.element.setAttribute("preload","auto");g[h].events.trackLoadProgress(this)}this.playing=true;this.element.play();this.settings.play.apply(this)},pause:function(){this.playing=false;this.element.pause();this.settings.pause.apply(this)},
setVolume:function(b){this.element.volume=b},trackEnded:function(){this.skipTo.apply(this,[0]);this.settings.loop||this.pause.apply(this);this.settings.trackEnded.apply(this)}};var j=function(b,a){var c=[];a=a||document;if(a.getElementsByClassName)c=a.getElementsByClassName(b);else{var d,e,i=a.getElementsByTagName("*"),f=RegExp("(^|\\s)"+b+"(\\s|$)");d=0;for(e=i.length;d<e;d++)f.test(i[d].className)&&c.push(i[d])}return c.length>1?c:c[0]}})("audiojs","audiojsInstance",this);




/* Owl Caro */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7(A 3c.3q!=="9"){3c.3q=9(e){9 t(){}t.5S=e;p 5R t}}(9(e,t,n){h r={1N:9(t,n){h r=c;r.$k=e(n);r.6=e.4M({},e.37.2B.6,r.$k.v(),t);r.2A=t;r.4L()},4L:9(){9 r(e){h n,r="";7(A t.6.33==="9"){t.6.33.R(c,[e])}l{1A(n 38 e.d){7(e.d.5M(n)){r+=e.d[n].1K}}t.$k.2y(r)}t.3t()}h t=c,n;7(A t.6.2H==="9"){t.6.2H.R(c,[t.$k])}7(A t.6.2O==="2Y"){n=t.6.2O;e.5K(n,r)}l{t.3t()}},3t:9(){h e=c;e.$k.v("d-4I",e.$k.2x("2w")).v("d-4F",e.$k.2x("H"));e.$k.z({2u:0});e.2t=e.6.q;e.4E();e.5v=0;e.1X=14;e.23()},23:9(){h e=c;7(e.$k.25().N===0){p b}e.1M();e.4C();e.$S=e.$k.25();e.E=e.$S.N;e.4B();e.$G=e.$k.17(".d-1K");e.$K=e.$k.17(".d-1p");e.3u="U";e.13=0;e.26=[0];e.m=0;e.4A();e.4z()},4z:9(){h e=c;e.2V();e.2W();e.4t();e.30();e.4r();e.4q();e.2p();e.4o();7(e.6.2o!==b){e.4n(e.6.2o)}7(e.6.O===j){e.6.O=4Q}e.19();e.$k.17(".d-1p").z("4i","4h");7(!e.$k.2m(":3n")){e.3o()}l{e.$k.z("2u",1)}e.5O=b;e.2l();7(A e.6.3s==="9"){e.6.3s.R(c,[e.$k])}},2l:9(){h e=c;7(e.6.1Z===j){e.1Z()}7(e.6.1B===j){e.1B()}e.4g();7(A e.6.3w==="9"){e.6.3w.R(c,[e.$k])}},3x:9(){h e=c;7(A e.6.3B==="9"){e.6.3B.R(c,[e.$k])}e.3o();e.2V();e.2W();e.4f();e.30();e.2l();7(A e.6.3D==="9"){e.6.3D.R(c,[e.$k])}},3F:9(){h e=c;t.1c(9(){e.3x()},0)},3o:9(){h e=c;7(e.$k.2m(":3n")===b){e.$k.z({2u:0});t.18(e.1C);t.18(e.1X)}l{p b}e.1X=t.4d(9(){7(e.$k.2m(":3n")){e.3F();e.$k.4b({2u:1},2M);t.18(e.1X)}},5x)},4B:9(){h e=c;e.$S.5n(\'<L H="d-1p">\').4a(\'<L H="d-1K"></L>\');e.$k.17(".d-1p").4a(\'<L H="d-1p-49">\');e.1H=e.$k.17(".d-1p-49");e.$k.z("4i","4h")},1M:9(){h e=c,t=e.$k.1I(e.6.1M),n=e.$k.1I(e.6.2i);7(!t){e.$k.I(e.6.1M)}7(!n){e.$k.I(e.6.2i)}},2V:9(){h t=c,n,r;7(t.6.2Z===b){p b}7(t.6.48===j){t.6.q=t.2t=1;t.6.1h=b;t.6.1s=b;t.6.1O=b;t.6.22=b;t.6.1Q=b;t.6.1R=b;p b}n=e(t.6.47).1f();7(n>(t.6.1s[0]||t.2t)){t.6.q=t.2t}7(t.6.1h!==b){t.6.1h.5g(9(e,t){p e[0]-t[0]});1A(r=0;r<t.6.1h.N;r+=1){7(t.6.1h[r][0]<=n){t.6.q=t.6.1h[r][1]}}}l{7(n<=t.6.1s[0]&&t.6.1s!==b){t.6.q=t.6.1s[1]}7(n<=t.6.1O[0]&&t.6.1O!==b){t.6.q=t.6.1O[1]}7(n<=t.6.22[0]&&t.6.22!==b){t.6.q=t.6.22[1]}7(n<=t.6.1Q[0]&&t.6.1Q!==b){t.6.q=t.6.1Q[1]}7(n<=t.6.1R[0]&&t.6.1R!==b){t.6.q=t.6.1R[1]}}7(t.6.q>t.E&&t.6.46===j){t.6.q=t.E}},4r:9(){h n=c,r,i;7(n.6.2Z!==j){p b}i=e(t).1f();n.3d=9(){7(e(t).1f()!==i){7(n.6.O!==b){t.18(n.1C)}t.5d(r);r=t.1c(9(){i=e(t).1f();n.3x()},n.6.45)}};e(t).44(n.3d)},4f:9(){h e=c;e.2g(e.m);7(e.6.O!==b){e.3j()}},43:9(){h t=c,n=0,r=t.E-t.6.q;t.$G.2f(9(i){h s=e(c);s.z({1f:t.M}).v("d-1K",3p(i));7(i%t.6.q===0||i===r){7(!(i>r)){n+=1}}s.v("d-24",n)})},42:9(){h e=c,t=e.$G.N*e.M;e.$K.z({1f:t*2,T:0});e.43()},2W:9(){h e=c;e.40();e.42();e.3Z();e.3v()},40:9(){h e=c;e.M=1F.4O(e.$k.1f()/e.6.q)},3v:9(){h e=c,t=(e.E*e.M-e.6.q*e.M)*-1;7(e.6.q>e.E){e.D=0;t=0;e.3z=0}l{e.D=e.E-e.6.q;e.3z=t}p t},3Y:9(){p 0},3Z:9(){h t=c,n=0,r=0,i,s,o;t.J=[0];t.3E=[];1A(i=0;i<t.E;i+=1){r+=t.M;t.J.2D(-r);7(t.6.12===j){s=e(t.$G[i]);o=s.v("d-24");7(o!==n){t.3E[n]=t.J[i];n=o}}}},4t:9(){h t=c;7(t.6.2a===j||t.6.1v===j){t.B=e(\'<L H="d-5A"/>\').5m("5l",!t.F.15).5c(t.$k)}7(t.6.1v===j){t.3T()}7(t.6.2a===j){t.3S()}},3S:9(){h t=c,n=e(\'<L H="d-4U"/>\');t.B.1o(n);t.1u=e("<L/>",{"H":"d-1n",2y:t.6.2U[0]||""});t.1q=e("<L/>",{"H":"d-U",2y:t.6.2U[1]||""});n.1o(t.1u).1o(t.1q);n.w("2X.B 21.B",\'L[H^="d"]\',9(e){e.1l()});n.w("2n.B 28.B",\'L[H^="d"]\',9(n){n.1l();7(e(c).1I("d-U")){t.U()}l{t.1n()}})},3T:9(){h t=c;t.1k=e(\'<L H="d-1v"/>\');t.B.1o(t.1k);t.1k.w("2n.B 28.B",".d-1j",9(n){n.1l();7(3p(e(c).v("d-1j"))!==t.m){t.1g(3p(e(c).v("d-1j")),j)}})},3P:9(){h t=c,n,r,i,s,o,u;7(t.6.1v===b){p b}t.1k.2y("");n=0;r=t.E-t.E%t.6.q;1A(s=0;s<t.E;s+=1){7(s%t.6.q===0){n+=1;7(r===s){i=t.E-t.6.q}o=e("<L/>",{"H":"d-1j"});u=e("<3N></3N>",{4R:t.6.39===j?n:"","H":t.6.39===j?"d-59":""});o.1o(u);o.v("d-1j",r===s?i:s);o.v("d-24",n);t.1k.1o(o)}}t.35()},35:9(){h t=c;7(t.6.1v===b){p b}t.1k.17(".d-1j").2f(9(){7(e(c).v("d-24")===e(t.$G[t.m]).v("d-24")){t.1k.17(".d-1j").Z("2d");e(c).I("2d")}})},3e:9(){h e=c;7(e.6.2a===b){p b}7(e.6.2e===b){7(e.m===0&&e.D===0){e.1u.I("1b");e.1q.I("1b")}l 7(e.m===0&&e.D!==0){e.1u.I("1b");e.1q.Z("1b")}l 7(e.m===e.D){e.1u.Z("1b");e.1q.I("1b")}l 7(e.m!==0&&e.m!==e.D){e.1u.Z("1b");e.1q.Z("1b")}}},30:9(){h e=c;e.3P();e.3e();7(e.B){7(e.6.q>=e.E){e.B.3K()}l{e.B.3J()}}},55:9(){h e=c;7(e.B){e.B.3k()}},U:9(e){h t=c;7(t.1E){p b}t.m+=t.6.12===j?t.6.q:1;7(t.m>t.D+(t.6.12===j?t.6.q-1:0)){7(t.6.2e===j){t.m=0;e="2k"}l{t.m=t.D;p b}}t.1g(t.m,e)},1n:9(e){h t=c;7(t.1E){p b}7(t.6.12===j&&t.m>0&&t.m<t.6.q){t.m=0}l{t.m-=t.6.12===j?t.6.q:1}7(t.m<0){7(t.6.2e===j){t.m=t.D;e="2k"}l{t.m=0;p b}}t.1g(t.m,e)},1g:9(e,n,r){h i=c,s;7(i.1E){p b}7(A i.6.1Y==="9"){i.6.1Y.R(c,[i.$k])}7(e>=i.D){e=i.D}l 7(e<=0){e=0}i.m=i.d.m=e;7(i.6.2o!==b&&r!=="4e"&&i.6.q===1&&i.F.1x===j){i.1t(0);7(i.F.1x===j){i.1L(i.J[e])}l{i.1r(i.J[e],1)}i.2r();i.4l();p b}s=i.J[e];7(i.F.1x===j){i.1T=b;7(n===j){i.1t("1w");t.1c(9(){i.1T=j},i.6.1w)}l 7(n==="2k"){i.1t(i.6.2v);t.1c(9(){i.1T=j},i.6.2v)}l{i.1t("1m");t.1c(9(){i.1T=j},i.6.1m)}i.1L(s)}l{7(n===j){i.1r(s,i.6.1w)}l 7(n==="2k"){i.1r(s,i.6.2v)}l{i.1r(s,i.6.1m)}}i.2r()},2g:9(e){h t=c;7(A t.6.1Y==="9"){t.6.1Y.R(c,[t.$k])}7(e>=t.D||e===-1){e=t.D}l 7(e<=0){e=0}t.1t(0);7(t.F.1x===j){t.1L(t.J[e])}l{t.1r(t.J[e],1)}t.m=t.d.m=e;t.2r()},2r:9(){h e=c;e.26.2D(e.m);e.13=e.d.13=e.26[e.26.N-2];e.26.5f(0);7(e.13!==e.m){e.35();e.3e();e.2l();7(e.6.O!==b){e.3j()}}7(A e.6.3y==="9"&&e.13!==e.m){e.6.3y.R(c,[e.$k])}},X:9(){h e=c;e.3A="X";t.18(e.1C)},3j:9(){h e=c;7(e.3A!=="X"){e.19()}},19:9(){h e=c;e.3A="19";7(e.6.O===b){p b}t.18(e.1C);e.1C=t.4d(9(){e.U(j)},e.6.O)},1t:9(e){h t=c;7(e==="1m"){t.$K.z(t.2z(t.6.1m))}l 7(e==="1w"){t.$K.z(t.2z(t.6.1w))}l 7(A e!=="2Y"){t.$K.z(t.2z(e))}},2z:9(e){p{"-1G-1a":"2C "+e+"1z 2s","-1W-1a":"2C "+e+"1z 2s","-o-1a":"2C "+e+"1z 2s",1a:"2C "+e+"1z 2s"}},3H:9(){p{"-1G-1a":"","-1W-1a":"","-o-1a":"",1a:""}},3I:9(e){p{"-1G-P":"1i("+e+"V, C, C)","-1W-P":"1i("+e+"V, C, C)","-o-P":"1i("+e+"V, C, C)","-1z-P":"1i("+e+"V, C, C)",P:"1i("+e+"V, C,C)"}},1L:9(e){h t=c;t.$K.z(t.3I(e))},3L:9(e){h t=c;t.$K.z({T:e})},1r:9(e,t){h n=c;n.29=b;n.$K.X(j,j).4b({T:e},{54:t||n.6.1m,3M:9(){n.29=j}})},4E:9(){h e=c,r="1i(C, C, C)",i=n.56("L"),s,o,u,a;i.2w.3O="  -1W-P:"+r+"; -1z-P:"+r+"; -o-P:"+r+"; -1G-P:"+r+"; P:"+r;s=/1i\\(C, C, C\\)/g;o=i.2w.3O.5i(s);u=o!==14&&o.N===1;a="5z"38 t||t.5Q.4P;e.F={1x:u,15:a}},4q:9(){h e=c;7(e.6.27!==b||e.6.1U!==b){e.3Q();e.3R()}},4C:9(){h e=c,t=["s","e","x"];e.16={};7(e.6.27===j&&e.6.1U===j){t=["2X.d 21.d","2N.d 3U.d","2n.d 3V.d 28.d"]}l 7(e.6.27===b&&e.6.1U===j){t=["2X.d","2N.d","2n.d 3V.d"]}l 7(e.6.27===j&&e.6.1U===b){t=["21.d","3U.d","28.d"]}e.16.3W=t[0];e.16.2K=t[1];e.16.2J=t[2]},3R:9(){h t=c;t.$k.w("5y.d",9(e){e.1l()});t.$k.w("21.3X",9(t){p e(t.1d).2m("5C, 5E, 5F, 5N")})},3Q:9(){9 s(e){7(e.2b!==W){p{x:e.2b[0].2c,y:e.2b[0].41}}7(e.2b===W){7(e.2c!==W){p{x:e.2c,y:e.41}}7(e.2c===W){p{x:e.52,y:e.53}}}}9 o(t){7(t==="w"){e(n).w(r.16.2K,a);e(n).w(r.16.2J,f)}l 7(t==="Q"){e(n).Q(r.16.2K);e(n).Q(r.16.2J)}}9 u(n){h u=n.3h||n||t.3g,a;7(u.5a===3){p b}7(r.E<=r.6.q){p}7(r.29===b&&!r.6.3f){p b}7(r.1T===b&&!r.6.3f){p b}7(r.6.O!==b){t.18(r.1C)}7(r.F.15!==j&&!r.$K.1I("3b")){r.$K.I("3b")}r.11=0;r.Y=0;e(c).z(r.3H());a=e(c).2h();i.2S=a.T;i.2R=s(u).x-a.T;i.2P=s(u).y-a.5o;o("w");i.2j=b;i.2L=u.1d||u.4c}9 a(o){h u=o.3h||o||t.3g,a,f;r.11=s(u).x-i.2R;r.2I=s(u).y-i.2P;r.Y=r.11-i.2S;7(A r.6.2E==="9"&&i.3C!==j&&r.Y!==0){i.3C=j;r.6.2E.R(r,[r.$k])}7((r.Y>8||r.Y<-8)&&r.F.15===j){7(u.1l!==W){u.1l()}l{u.5L=b}i.2j=j}7((r.2I>10||r.2I<-10)&&i.2j===b){e(n).Q("2N.d")}a=9(){p r.Y/5};f=9(){p r.3z+r.Y/5};r.11=1F.3v(1F.3Y(r.11,a()),f());7(r.F.1x===j){r.1L(r.11)}l{r.3L(r.11)}}9 f(n){h s=n.3h||n||t.3g,u,a,f;s.1d=s.1d||s.4c;i.3C=b;7(r.F.15!==j){r.$K.Z("3b")}7(r.Y<0){r.1y=r.d.1y="T"}l{r.1y=r.d.1y="3i"}7(r.Y!==0){u=r.4j();r.1g(u,b,"4e");7(i.2L===s.1d&&r.F.15!==j){e(s.1d).w("3a.4k",9(t){t.4S();t.4T();t.1l();e(t.1d).Q("3a.4k")});a=e.4N(s.1d,"4V").3a;f=a.4W();a.4X(0,0,f)}}o("Q")}h r=c,i={2R:0,2P:0,4Y:0,2S:0,2h:14,4Z:14,50:14,2j:14,51:14,2L:14};r.29=j;r.$k.w(r.16.3W,".d-1p",u)},4j:9(){h e=c,t=e.4m();7(t>e.D){e.m=e.D;t=e.D}l 7(e.11>=0){t=0;e.m=0}p t},4m:9(){h t=c,n=t.6.12===j?t.3E:t.J,r=t.11,i=14;e.2f(n,9(s,o){7(r-t.M/20>n[s+1]&&r-t.M/20<o&&t.34()==="T"){i=o;7(t.6.12===j){t.m=e.4p(i,t.J)}l{t.m=s}}l 7(r+t.M/20<o&&r+t.M/20>(n[s+1]||n[s]-t.M)&&t.34()==="3i"){7(t.6.12===j){i=n[s+1]||n[n.N-1];t.m=e.4p(i,t.J)}l{i=n[s+1];t.m=s+1}}});p t.m},34:9(){h e=c,t;7(e.Y<0){t="3i";e.3u="U"}l{t="T";e.3u="1n"}p t},4A:9(){h e=c;e.$k.w("d.U",9(){e.U()});e.$k.w("d.1n",9(){e.1n()});e.$k.w("d.19",9(t,n){e.6.O=n;e.19();e.32="19"});e.$k.w("d.X",9(){e.X();e.32="X"});e.$k.w("d.1g",9(t,n){e.1g(n)});e.$k.w("d.2g",9(t,n){e.2g(n)})},2p:9(){h e=c;7(e.6.2p===j&&e.F.15!==j&&e.6.O!==b){e.$k.w("57",9(){e.X()});e.$k.w("58",9(){7(e.32!=="X"){e.19()}})}},1Z:9(){h t=c,n,r,i,s,o;7(t.6.1Z===b){p b}1A(n=0;n<t.E;n+=1){r=e(t.$G[n]);7(r.v("d-1e")==="1e"){4s}i=r.v("d-1K");s=r.17(".5b");7(A s.v("1J")!=="2Y"){r.v("d-1e","1e");4s}7(r.v("d-1e")===W){s.3K();r.I("4u").v("d-1e","5e")}7(t.6.4v===j){o=i>=t.m}l{o=j}7(o&&i<t.m+t.6.q&&s.N){t.4w(r,s)}}},4w:9(e,n){9 o(){e.v("d-1e","1e").Z("4u");n.5h("v-1J");7(r.6.4x==="4y"){n.5j(5k)}l{n.3J()}7(A r.6.2T==="9"){r.6.2T.R(c,[r.$k])}}9 u(){i+=1;7(r.2Q(n.3l(0))||s===j){o()}l 7(i<=2q){t.1c(u,2q)}l{o()}}h r=c,i=0,s;7(n.5p("5q")==="5r"){n.z("5s-5t","5u("+n.v("1J")+")");s=j}l{n[0].1J=n.v("1J")}u()},1B:9(){9 s(){h r=e(n.$G[n.m]).2G();n.1H.z("2G",r+"V");7(!n.1H.1I("1B")){t.1c(9(){n.1H.I("1B")},0)}}9 o(){i+=1;7(n.2Q(r.3l(0))){s()}l 7(i<=2q){t.1c(o,2q)}l{n.1H.z("2G","")}}h n=c,r=e(n.$G[n.m]).17("5w"),i;7(r.3l(0)!==W){i=0;o()}l{s()}},2Q:9(e){h t;7(!e.3M){p b}t=A e.4D;7(t!=="W"&&e.4D===0){p b}p j},4g:9(){h t=c,n;7(t.6.2F===j){t.$G.Z("2d")}t.1D=[];1A(n=t.m;n<t.m+t.6.q;n+=1){t.1D.2D(n);7(t.6.2F===j){e(t.$G[n]).I("2d")}}t.d.1D=t.1D},4n:9(e){h t=c;t.4G="d-"+e+"-5B";t.4H="d-"+e+"-38"},4l:9(){9 a(e){p{2h:"5D",T:e+"V"}}h e=c,t=e.4G,n=e.4H,r=e.$G.1S(e.m),i=e.$G.1S(e.13),s=1F.4J(e.J[e.m])+e.J[e.13],o=1F.4J(e.J[e.m])+e.M/2,u="5G 5H 5I 5J";e.1E=j;e.$K.I("d-1P").z({"-1G-P-1P":o+"V","-1W-4K-1P":o+"V","4K-1P":o+"V"});i.z(a(s,10)).I(t).w(u,9(){e.3m=j;i.Q(u);e.31(i,t)});r.I(n).w(u,9(){e.36=j;r.Q(u);e.31(r,n)})},31:9(e,t){h n=c;e.z({2h:"",T:""}).Z(t);7(n.3m&&n.36){n.$K.Z("d-1P");n.3m=b;n.36=b;n.1E=b}},4o:9(){h e=c;e.d={2A:e.2A,5P:e.$k,S:e.$S,G:e.$G,m:e.m,13:e.13,1D:e.1D,15:e.F.15,F:e.F,1y:e.1y}},3G:9(){h r=c;r.$k.Q(".d d 21.3X");e(n).Q(".d d");e(t).Q("44",r.3d)},1V:9(){h e=c;7(e.$k.25().N!==0){e.$K.3r();e.$S.3r().3r();7(e.B){e.B.3k()}}e.3G();e.$k.2x("2w",e.$k.v("d-4I")||"").2x("H",e.$k.v("d-4F"))},5T:9(){h e=c;e.X();t.18(e.1X);e.1V();e.$k.5U()},5V:9(t){h n=c,r=e.4M({},n.2A,t);n.1V();n.1N(r,n.$k)},5W:9(e,t){h n=c,r;7(!e){p b}7(n.$k.25().N===0){n.$k.1o(e);n.23();p b}n.1V();7(t===W||t===-1){r=-1}l{r=t}7(r>=n.$S.N||r===-1){n.$S.1S(-1).5X(e)}l{n.$S.1S(r).5Y(e)}n.23()},5Z:9(e){h t=c,n;7(t.$k.25().N===0){p b}7(e===W||e===-1){n=-1}l{n=e}t.1V();t.$S.1S(n).3k();t.23()}};e.37.2B=9(t){p c.2f(9(){7(e(c).v("d-1N")===j){p b}e(c).v("d-1N",j);h n=3c.3q(r);n.1N(t,c);e.v(c,"2B",n)})};e.37.2B.6={q:5,1h:b,1s:[60,4],1O:[61,3],22:[62,2],1Q:b,1R:[63,1],48:b,46:b,1m:2M,1w:64,2v:65,O:b,2p:b,2a:b,2U:["1n","U"],2e:j,12:b,1v:j,39:b,2Z:j,45:2M,47:t,1M:"d-66",2i:"d-2i",1Z:b,4v:j,4x:"4y",1B:b,2O:b,33:b,3f:j,27:j,1U:j,2F:b,2o:b,3B:b,3D:b,2H:b,3s:b,1Y:b,3y:b,3w:b,2E:b,2T:b}})(67,68,69)',62,382,'||||||options|if||function||false|this|owl||||var||true|elem|else|currentItem|||return|items|||||data|on|||css|typeof|owlControls|0px|maximumItem|itemsAmount|browser|owlItems|class|addClass|positionsInArray|owlWrapper|div|itemWidth|length|autoPlay|transform|off|apply|userItems|left|next|px|undefined|stop|newRelativeX|removeClass||newPosX|scrollPerPage|prevItem|null|isTouch|ev_types|find|clearInterval|play|transition|disabled|setTimeout|target|loaded|width|goTo|itemsCustom|translate3d|page|paginationWrapper|preventDefault|slideSpeed|prev|append|wrapper|buttonNext|css2slide|itemsDesktop|swapSpeed|buttonPrev|pagination|paginationSpeed|support3d|dragDirection|ms|for|autoHeight|autoPlayInterval|visibleItems|isTransition|Math|webkit|wrapperOuter|hasClass|src|item|transition3d|baseClass|init|itemsDesktopSmall|origin|itemsTabletSmall|itemsMobile|eq|isCss3Finish|touchDrag|unWrap|moz|checkVisible|beforeMove|lazyLoad||mousedown|itemsTablet|setVars|roundPages|children|prevArr|mouseDrag|mouseup|isCssFinish|navigation|touches|pageX|active|rewindNav|each|jumpTo|position|theme|sliding|rewind|eachMoveUpdate|is|touchend|transitionStyle|stopOnHover|100|afterGo|ease|orignalItems|opacity|rewindSpeed|style|attr|html|addCssSpeed|userOptions|owlCarousel|all|push|startDragging|addClassActive|height|beforeInit|newPosY|end|move|targetElement|200|touchmove|jsonPath|offsetY|completeImg|offsetX|relativePos|afterLazyLoad|navigationText|updateItems|calculateAll|touchstart|string|responsive|updateControls|clearTransStyle|hoverStatus|jsonSuccess|moveDirection|checkPagination|endCurrent|fn|in|paginationNumbers|click|grabbing|Object|resizer|checkNavigation|dragBeforeAnimFinish|event|originalEvent|right|checkAp|remove|get|endPrev|visible|watchVisibility|Number|create|unwrap|afterInit|logIn|playDirection|max|afterAction|updateVars|afterMove|maximumPixels|apStatus|beforeUpdate|dragging|afterUpdate|pagesInArray|reload|clearEvents|removeTransition|doTranslate|show|hide|css2move|complete|span|cssText|updatePagination|gestures|disabledEvents|buildButtons|buildPagination|mousemove|touchcancel|start|disableTextSelect|min|loops|calculateWidth|pageY|appendWrapperSizes|appendItemsSizes|resize|responsiveRefreshRate|itemsScaleUp|responsiveBaseWidth|singleItem|outer|wrap|animate|srcElement|setInterval|drag|updatePosition|onVisibleItems|block|display|getNewPosition|disable|singleItemTransition|closestItem|transitionTypes|owlStatus|inArray|moveEvents|response|continue|buildControls|loading|lazyFollow|lazyPreload|lazyEffect|fade|onStartup|customEvents|wrapItems|eventTypes|naturalWidth|checkBrowser|originalClasses|outClass|inClass|originalStyles|abs|perspective|loadContent|extend|_data|round|msMaxTouchPoints|5e3|text|stopImmediatePropagation|stopPropagation|buttons|events|pop|splice|baseElWidth|minSwipe|maxSwipe|dargging|clientX|clientY|duration|destroyControls|createElement|mouseover|mouseout|numbers|which|lazyOwl|appendTo|clearTimeout|checked|shift|sort|removeAttr|match|fadeIn|400|clickable|toggleClass|wrapAll|top|prop|tagName|DIV|background|image|url|wrapperWidth|img|500|dragstart|ontouchstart|controls|out|input|relative|textarea|select|webkitAnimationEnd|oAnimationEnd|MSAnimationEnd|animationend|getJSON|returnValue|hasOwnProperty|option|onstartup|baseElement|navigator|new|prototype|destroy|removeData|reinit|addItem|after|before|removeItem|1199|979|768|479|800|1e3|carousel|jQuery|window|document'.split('|'),0,{}))


function InlinePlayer() {
  var self = this;
  var pl = this;
  var sm = soundManager; // soundManager instance
  this.excludeClass = 'inline-exclude'; // CSS class for ignoring MP3 links
  this.links = [];
  this.sounds = [];
  this.soundsByURL = [];
  this.indexByURL = [];
  this.lastSound = null;
  this.soundCount = 0;
  var isIE = (navigator.userAgent.match(/msie/i));

  this.config = {
    playNext: false, // stop after one sound, or play through list until end
    autoPlay: false  // start playing the first sound right away
  }

  this.css = {
    // CSS class names appended to link during various states
    sDefault: 'sm2_link', // default state
    sLoading: 'sm2_loading',
    sPlaying: 'sm2_playing',
    sPaused: 'sm2_paused'
  }

  this.addEventHandler = function(o,evtName,evtHandler) {
    typeof(attachEvent)=='undefined'?o.addEventListener(evtName,evtHandler,false):o.attachEvent('on'+evtName,evtHandler);
  }

  this.removeEventHandler = function(o,evtName,evtHandler) {
    typeof(attachEvent)=='undefined'?o.removeEventListener(evtName,evtHandler,false):o.detachEvent('on'+evtName,evtHandler);
  }

  this.classContains = function(o,cStr) {
	return (typeof(o.className)!='undefined'?o.className.match(new RegExp('(\\s|^)'+cStr+'(\\s|$)')):false);
  }

  this.addClass = function(o,cStr) {
    if (!o || !cStr || self.classContains(o,cStr)) return false;
    o.className = (o.className?o.className+' ':'')+cStr;
  }

  this.removeClass = function(o,cStr) {
    if (!o || !cStr || !self.classContains(o,cStr)) return false;
    o.className = o.className.replace(new RegExp('( '+cStr+')|('+cStr+')','g'),'');
  }

  this.getSoundByURL = function(sURL) {
    //console.log( sURL );
    return (typeof self.soundsByURL[sURL] != 'undefined'?self.soundsByURL[sURL]:null);
  }

  this.isChildOfNode = function(o,sNodeName) {
    if (!o || !o.parentNode) {
      return false;
    }
    sNodeName = sNodeName.toLowerCase();
    do {
      o = o.parentNode;
    } while (o && o.parentNode && o.nodeName.toLowerCase() != sNodeName);
    return (o.nodeName.toLowerCase() == sNodeName?o:null);
  }

  this.events = {

    // handlers for sound events as they're started/stopped/played

    play: function() {
      pl.removeClass(this._data.oLink,this._data.className);
      this._data.className = pl.css.sPlaying;
      pl.addClass(this._data.oLink,this._data.className);
    },

    stop: function() {
      pl.removeClass(this._data.oLink,this._data.className);
      this._data.className = '';
    },

    pause: function() {
      pl.removeClass(this._data.oLink,this._data.className);
      this._data.className = pl.css.sPaused;
      pl.addClass(this._data.oLink,this._data.className);
    },

    resume: function() {
      pl.removeClass(this._data.oLink,this._data.className);
      this._data.className = pl.css.sPlaying;
      pl.addClass(this._data.oLink,this._data.className);
    },

    finish: function() {
      pl.removeClass(this._data.oLink,this._data.className);
      this._data.className = '';
      if (pl.config.playNext) {
        var nextLink = (pl.indexByURL[this._data.oLink.href]+1);
        if (nextLink<pl.links.length) {
          pl.handleClick({'target':pl.links[nextLink]});
        }
      }
    }

  }

  this.stopEvent = function(e) {
   if (typeof e != 'undefined' && typeof e.preventDefault != 'undefined') {
      e.preventDefault();
    } else if (typeof event != 'undefined' && typeof event.returnValue != 'undefined') {
      event.returnValue = false;
    }
    return false;
  }

  this.getTheDamnLink = (isIE)?function(e) {
    // I really didn't want to have to do this.
    return (e && e.target?e.target:window.event.srcElement);
  }:function(e) {
    return e.target;
  }

  this.handleClick = function(e) {

    //console.log( 'sound link clicked' );

    // a sound link was clicked
    if (typeof e.button != 'undefined' && e.button>1) {
	  // ignore right-click
	  return true;
    }
    var o = self.getTheDamnLink(e);
    if (o.nodeName.toLowerCase() != 'a') {
      o = self.isChildOfNode(o,'a');
      if (!o) return true;
    }
    var sURL = (o.getAttribute('href'))? o.getAttribute('href') : o.getAttribute('data-url');
    if ( !sURL || self.classContains(o,self.excludeClass)) {
      if (isIE && o.onclick) {
        return false; // IE will run this handler before .onclick(), everyone else is cool?
      }
      return true; // pass-thru for non-MP3/non-links
    }
    sm._writeDebug('handleClick()');
    //var soundURL = (o.href)? o.href ;
    var soundURL;
    if ( o.href.match(/(\.mp3|\.m4a)/i) ) {
      soundURL = o.href;
    }else if ( o.getAttribute('data-url') ){
      soundURL = o.getAttribute('data-url');
    }

    //console.log( soundURL );

    var thisSound = self.getSoundByURL(soundURL);
    if (thisSound) {
      // already exists
      if (thisSound == self.lastSound) {
        // and was playing (or paused)
        thisSound.togglePause();
      } else {
        // different sound
        thisSound.togglePause(); // start playing current
        sm._writeDebug('sound different than last sound: '+self.lastSound.sID);
        if (self.lastSound) self.stopSound(self.lastSound);
      }
    } else {
      // create sound
      thisSound = sm.createSound({
       id:'inlineMP3Sound'+(self.soundCount++),
       url:soundURL,
       onplay:self.events.play,
       onstop:self.events.stop,
       onpause:self.events.pause,
       onresume:self.events.resume,
       onfinish:self.events.finish
      });
      // tack on some custom data
      thisSound._data = {
        oLink: o, // DOM node for reference within SM2 object event handlers
        className: self.css.sPlaying
      };
      self.soundsByURL[soundURL] = thisSound;
      self.sounds.push(thisSound);
      if (self.lastSound) self.stopSound(self.lastSound);
      thisSound.play();
      // stop last sound
    }

    self.lastSound = thisSound; // reference for next call

    if (typeof e != 'undefined' && typeof e.preventDefault != 'undefined') {
      e.preventDefault();
    } else {
      event.returnValue = false;
    }
    return false;
  }

  this.stopSound = function(oSound) {
    soundManager.stop(oSound.sID);
    soundManager.unload(oSound.sID);
  }

  this.init = function() {
    sm._writeDebug('inlinePlayer.init()');
    var oLinks = document.getElementsByTagName('a');
    // grab all links, look for .mp3
    var foundItems = 0;
    for (var i=0; i<oLinks.length; i++) {
      var dataAttr = (oLinks[i].getAttribute('data-url'))? oLinks[i].getAttribute('data-url') : '';
      if (oLinks[i].href.match(/(\.mp3|\.m4a)/i) ) {
        //console.log( 'Standard href MP3 ' + oLinks[i].href );
        self.addClass(oLinks[i],self.css.sDefault); // add default CSS decoration
        self.links[foundItems] = (oLinks[i]);
        self.indexByURL[oLinks[i].href] = foundItems; // hack for indexing
        foundItems++;
      }else if ( dataAttr.match(/(\.mp3|\.m4a)/i) ) {
        //console.log( 'Data Attribute MP3 ' + dataAttr );
        self.addClass(oLinks[i],self.css.sDefault); // add default CSS decoration
        self.links[foundItems] = (oLinks[i]);
        self.indexByURL[dataAttr] = foundItems; // hack for indexing
        foundItems++;
      }
    }
    if (foundItems>0) {
      self.addEventHandler(document,'click',self.handleClick);
	  if (self.config.autoPlay) {
	    self.handleClick({target:self.links[0],preventDefault:function(){}});
	  }
    }
    sm._writeDebug('inlinePlayer.init(): Found '+foundItems+' relevant items.');
  }

  this.init();

}

var inlinePlayer = null;

soundManager.debugMode = false; // disable or enable debug output

soundManager.url = '/assets/js/'; // path to directory containing SM2 SWF

soundManager.flashVersion = 9;
soundManager.useMovieStar = true;

soundManager.onready(function() {
  if (soundManager.supported()) {
    // soundManager.createSound() etc. may now be called
    inlinePlayer = new InlinePlayer();
  }
});
