/*!
 * Runsense 97Kafr
 *
 * Copyright 2018, Dalleau Pascal
 *
 */
var FuncInit= FuncInit || {};var FuncInit={idtree:'#jqxTree',videoid:'',plyLstId:'PLrwe0-1smC6wyncOJYElGcf138ZGHIGgW',h:0,w:0
,src:[{id:'roots',label:'roots',value:'PLrwe0-1smC6xL233WdVGDdaCugFfd5cbW'},{id:'newRoots',label:'newRoots ',value:'PLrwe0-1smC6ySPPPHuiS8Zto7t5V46G_L'},{id:'danceHall',label:'danceHall',value:'PLrwe0-1smC6yoRxfeKGPOpeFaEF6sK4nR'},{id:'97kafr',label:'97kafr',value:'PLrwe0-1smC6zeAU3Yb9VPb2jjSf8hOWiI'},{id:'reunion',label:'reunion ',value:'PLrwe0-1smC6zGKsy0ggtEJWAQDaBC2n4i',selected:true},{id:'luv',label:'luv',value:'PLrwe0-1smC6yjAPZeG8-fQKbgxqVelz_O'},{id:'rnb',label:'rnb',value:'PLrwe0-1smC6zwo4Y7O4XBl3cpFzpiMAkH'},{id:'rap',label:'rap',value:'PLrwe0-1smC6xiPucN4OZ_Uu2pQ5fJz2uE'},
{id:'electro',label:'electro',value:'PLrwe0-1smC6w8At_JO2HcJdpucIqn6im1'},{id:'roots',label:'roots',value:''}
,{id:'sphh',label:'special hip-hop',value:'PLrwe0-1smC6xH0EtS7-2W2K422EVR19bk'},{id:'sprg',label:'special reggae',value:'PLrwe0-1smC6xvoITpy0zzwirUm2D_4n3b'}],plys:null,tbply:new Array(),tmp:'',PlrR:function(event){player.loadPlaylist({list:FuncInit.plyLstId,listType:'playlist',index:0,startSeconds:1,suggestedQuality:'default'});event.target.pauseVideo();var arr= FuncInit.plys.getPlaylist();alert(arr);FuncTree.add(arr);},PlrStd:function(event){player.setVolume(0);event.target.pauseVideo();},rchg:function(){FuncInit.plys.destroy();onYouTubeIframeAPIReady();},init:function(){var tag  =document.createElement('script');tag.src = "https://www.youtube.com/iframe_api";var firstScriptTag = document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);}};
FuncInit.init();FuncInit.h =$(window).height();FuncInit.w=$(window).width();
var FuncTree=FuncTree || {};var FuncTree={bchk:false,bgrow:false,bms:true,updBackG:"body",ptbid:['PLrwe0-1smC6xL233WdVGDdaCugFfd5cbW'],add:function(arr){$('#jqxTree').jqxTree('collapseAll');var it = $('#jqxTree').jqxTree('getSelectedItem');var elmt = it.element;var lg=arr.length;var elmt=$('#jqxTree').jqxTree('getSelectedItem');var felmt=[];for(var i=lg-1;i>=0;i--){var uri='<iframe id="'+arr[i]+'" sandbox="Access-Control-Allow-Origin allow-scripts" type="text/html" width="250" height="50"src="http://www.youtube.com/embed/'+arr[i]+'?autoplay=0&origin=http://runsense.re"frameborder="0" enablejsapi="1" />';var rplc='#'+arr[i];$('#jqxTree').jqxTree('addTo', {id:arr[i], label:'play '+i,value:arr[i],items:[{html:uri, disabled:true}] },elmt); var itm=$('#jqxTree').jqxTree('getItem', $(rplc)[0]);felmt[i]=itm.element;}$('#jqxTree').jqxTree('expandItem', elmt);for(var i in felmt)  $('#jqxTree').jqxTree('expandItem', felmt[i]);$('#jqxTree').jqxTree('refresh');},init:function(){var w=FuncInit.w*30/100;$(FuncInit.idtree).jqxTree({source:FuncInit.src,width:w,height:FuncInit.h});$('#jqxTree .jqx-tree-item').mouseenter(function (event){var text = event.target.textContent;var i;});
$(FuncInit.idtree).bind('select', function(ev){ev.stopPropagation();var a = ev.args;var e = a.element;var i=$(FuncInit.idtree).jqxTree('getItem', e); var spl=i.label.split(' ');if(spl[0]==='play'){FuncInit.videoid=i.value;FuncInit.plys.playVideoAt(spl[1]);}else{FuncInit.plyLstId=i.value;done=false;FuncInit.videoid='';FuncInit.rchg();}});}};
var w=FuncInit.w*67/100;onYouTubeIframeAPIReady=function (){FuncInit.plys=new YT.Player('player',{height:FuncInit.h,width:w,videoId:FuncInit.videoid,events: {'onReady': onPlayerReady,'onStateChange': onPlayerStateChange}}); };var done = false;onPlayerReady=function (event){if(!done){FuncInit.plys.loadPlaylist({list:FuncInit.plyLstId,
listType:'playlist',index:0,startSeconds:1,suggestedQuality:'default'});FuncInit.plys.setVolume(19);event.target.playVideo();}else  FuncInit.plys.playVideo();}; onPlayerStateChange=function (event){if (event.data==YT.PlayerState.PLAYING && !done){done=true;var arr=FuncInit.plys.getPlaylist();FuncTree.add(arr);}};FuncTree.init();