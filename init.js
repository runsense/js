$.urlParam=function(name){var results=new RegExp('[\?&amp;]' + name + '=([^&amp;#]*)').exec(window.location.href);try{return results[1]||0;}catch(e){return null;}}
$(window).resize(function () { var h = $(window).height();var offsetTop = 105; $(FuncInit.idmap).css('height', (h - offsetTop));}).resize();
$(function(){FuncInit.init();FuncTree.init();if(FuncInit.bxt) FuncInit.tmp="OUEST";MapsLib.initialize();if (typeof google !== 'object' && typeof google.maps !== 'object') {location.reload(false);} });
