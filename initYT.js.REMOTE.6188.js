var FuncInit=FuncInit||{};var FuncInit={idtree:'#jqxTree',idplyr:'#player',videoid:'',plyLstId:'PLrwe0-1smC6zGKsy0ggtEJWAQDaBC2n4i',plys:null,tmpVid:[],h:0,w:0,fact:1,uri:'',src:[{id:'roots',label:'roots',value:'PLrwe0-1smC6xL233WdVGDdaCugFfd5cbW'},{id:'newRoots',label:'newRoots',value:'PLrwe0-1smC6ySPPPHuiS8Zto7t5V46G_L'},{id:'danceHall',label:'danceHall',value:'PLrwe0-1smC6yoRxfeKGPOpeFaEF6sK4nR'},{id:'luv',label:'luv',value:'PLrwe0-1smC6yjAPZeG8-fQKbgxqVelz_O'},{id:'rnb',label:'rnb',value:'PLrwe0-1smC6zwo4Y7O4XBl3cpFzpiMAkH'},{id:'rap',label:'rap',value:'PLrwe0-1smC6xiPucN4OZ_Uu2pQ5fJz2uE'},{id:'electro',label:'electro',value:'PLrwe0-1smC6w8At_JO2HcJdpucIqn6im1'},{id:'sphh',label:'special hip-hop',value:'PLrwe0-1smC6xH0EtS7-2W2K422EVR19bk'},{id:'sprg',label:'special reggae',value:'PLrwe0-1smC6xvoITpy0zzwirUm2D_4n3b'},{id:'vid',label:'video',value:'PLrwe0-1smC6y5pjwm9-yE5C3DLxwjoQk3'},{id:'97kafr',label:'97kafr',value:'PLrwe0-1smC6zeAU3Yb9VPb2jjSf8hOWiI'},{id:'reunion',label:'reunion',value:'PLrwe0-1smC6zGKsy0ggtEJWAQDaBC2n4i',selected:true}],tmp:'',PlrR:function(event){player.loadPlaylist({list:FuncInit.plyLstId,listType:'playlist',index:0,startSeconds:1,suggestedQuality:'default'});event.target.pauseVideo();var arr=FuncInit.plys.getPlaylist();alert(arr);FuncTree.add(arr);},PlrStd:function(event){player.setVolume(0);event.target.pauseVideo();},rchg:function(){FuncInit.plys.destroy();onYouTubeIframeAPIReady();},init:function(){var tag=document.createElement('script');tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);$(FuncInit.idtree).mouseleave(function(){if(FuncInit.plys!=null){FuncInit.plys.setSize(FuncInit.w*0.9,FuncInit.h);};$(FuncInit.idtree).animate({'width':FuncInit.w*0.05});});$(FuncInit.idtree).mouseenter(function(){if(FuncInit.plys!=null){FuncInit.plys.setSize(FuncInit.w*0.67,FuncInit.h);};$(FuncInit.idtree).animate({'width':(FuncInit.w*0.3)});});}};FuncInit.init();FuncInit.h=$(window).height();FuncInit.w=$(window).width();$(window).resize(function(){FuncInit.h=$(window).height();FuncInit.w=$(window).width();$(FuncInit.idtree).animate({'height':(FuncInit.h)});$(FuncInit.idtree).animate({'width':(FuncInit.w*0.3)});if(FuncInit.plys!=null){FuncInit.plys.setSize(FuncInit.w*67/100,FuncInit.h);}}).resize();var FuncTree=FuncTree||{};var FuncTree={bchk:false,bgrow:false,bms:true,updBackG:"body",ptbid:['PLrwe0-1smC6xL233WdVGDdaCugFfd5cbW'],curi:function(id){FuncInit.uri='<iframe id="'+id+'" sandbox="Access-Control-Allow-Origin allow-scripts" type="text/html" width="250" height="50"src="http://www.youtube.com/embed/'+id+'?autoplay=0&origin=http://runsense.re"frameborder="0" enablejsapi="1" />';},add:function(arr){$(FuncInit.idtree).jqxTree('collapseAll');var it=$(FuncInit.idtree).jqxTree('getSelectedItem');var elmt=it.element;var lg=arr.length;var elmt=$(FuncInit.idtree).jqxTree('getSelectedItem');var felmt=[];for(var i=lg-1;i>=0;i--){var rplc='#'+arr[i];$(FuncInit.idtree).jqxTree('addTo',{id:arr[i],label:'play '+i,value:arr[i],items:[{id:'',label:' ',value:''}]},elmt);var itm=$(FuncInit.idtree).jqxTree('getItem',$(rplc)[0]);felmt[i]=itm.element;}$(FuncInit.idtree).jqxTree('expandItem',elmt);$(FuncInit.idtree).jqxTree('expandItem',felmt[felmt.length-1]);$(FuncInit.idtree).mouseenter();/*for(var i in felmt)  $(FuncInit.idtree).jqxTree('expandItem', felmt[i]);$(FuncInit.idtree).jqxTree('refresh');*/},init:function(){var w=FuncInit.w*30/100;$(FuncInit.idtree).jqxTree({source:FuncInit.src,width:w,height:FuncInit.h});}};var w=FuncInit.w*67/100;onYouTubeIframeAPIReady=function(){FuncInit.plys=new YT.Player('player',{height:FuncInit.h,width:w,videoId:FuncInit.videoid,events:{'onReady':onPlayerReady,'onStateChange':onPlayerStateChange}});};var done=false;onPlayerReady=function(event){if(!done){FuncInit.plys.loadPlaylist({list:FuncInit.plyLstId,listType:'playlist',index:0,startSeconds:1,suggestedQuality:'default'});FuncInit.plys.setVolume(19);event.target.playVideo();}else FuncInit.plys.playVideo();};onPlayerStateChange=function(event){if(event.data==YT.PlayerState.PLAYING&&!done){done=true;var arr=FuncInit.plys.getPlaylist();FuncTree.add(arr);}};FuncTree.init();$('#jqxTree .jqx-tree-item').mouseenter(function(event){var text=event.target.textContent;});$(FuncInit.idtree).bind('select',function(ev){ev.stopPropagation();var a=ev.args;var e=a.element;var i=$(FuncInit.idtree).jqxTree('getItem',e);var spl=i.label.split(' ');if(spl[0]==='play'){FuncInit.videoid=i.value;FuncInit.plys.playVideoAt(spl[1]);$(FuncInit.idtree).jqxTree('expandItem',e);}else{FuncInit.plyLstId=i.value;done=false;FuncInit.videoid='';FuncInit.rchg();}});$('#jqxTree').bind('expand',function(event){var args=event.args;var elmt=args.element;var i=$(FuncInit.idtree).jqxTree('getItem',elmt);FuncTree.curi(i.value);var spl=i.label.split(' ');if(spl[0]==='play'){$(FuncInit.idtree).jqxTree('addTo',{html:FuncInit.uri,disabled:true},elmt);$(FuncInit.idtree).jqxTree('refresh');}});