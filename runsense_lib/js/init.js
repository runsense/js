$(window).resize(function () { var h = $(window).height();var offsetTop = 105; $(FuncInit.idmap).css('height', (h - offsetTop));}).resize();
$(function(){
FuncInit.init();FuncTree.init();MapsLib.initialize();
//if it's too fast for navigator!!
if (typeof google !== 'object' && typeof google.maps !== 'object') {location.reload(false);} });
google.maps.visualRefresh = true;