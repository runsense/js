$(window).resize(function(){var h=$(window).height();var offsetTop=105;$(T.I.m).css('height',(h-offsetTop));}).resize();var tag=document.createElement('script');tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var player;function onYouTubeIframeAPIReady(){player=new YT.Player('player',{height:'50',width:'50',videoId:'3nP6Tz45K_U',events:{'onReady':onPlayerReady,'onStateChange':onPlayerStateChange}});};function onPlayerReady(event){player.loadPlaylist({list:'PLrwe0-1smC6wyncOJYElGcf138ZGHIGgW',listType:'playlist',index:0,startSeconds:1,suggestedQuality:'default'});event.target.playVideo();};var done=false;function onPlayerStateChange(event){if(event.data==YT.PlayerState.PLAYING&&!done){player.setVolume(8);done=true;}};function nextVi(){player.nextVideo();};

