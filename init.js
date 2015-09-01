//<![CDATA[
        $(window).resize(function () { var h = $(window).height();var offsetTop = 105; $(FuncInit.idmap).css('height', (h - offsetTop));}).resize();
        $(function() {
		
		//$(FuncInit.idsup).bind('click',function(){ $(this).animate({ width: '35%' });$(FuncInit.idmap).animate({ width: '35%' });});
		if(FuncInit.bnm){$(FuncTree.updBackG).css('background-image', FuncTree.styles[1]);$(FuncTree.updBackG).css('background-repeat', 'no-repeat');$(FuncTree.updBackG).css('background-size', '100%');}
		$("#fl").bind('click',function(){MapsLib.findMe();});
		$(FuncInit.idtab).on("mouseenter",function(){if(FuncInit.bnm){ $(this).animate({opacity: '0.75',height: '100%',width: '70%'});$(FuncInit.idmap).animate({opacity: '0.3'});$(FuncInit.idp).animate({opacity: '0.3'});$('body').animate({height: '100% !important',margin: '0px !important',padding: '0px !important'});}$(FuncInit.idinf).empty();FuncTree.append("<small>&Agrave; r\'tourn Return MAP </small>(A DROITE)","green");$(FuncInit.idinf).bind('click',function(){ if(FuncInit.bnm){$(FuncInit.idtab).animate({opacity: '1',height: '15%',width: '100%'});$(FuncInit.idmap).animate({opacity: '1'});$(FuncInit.idp).animate({opacity: '1'});}});});
		$(FuncInit.idinf).bind('click',function(){if(FuncInit.bnm){$(FuncInit.idtab).animate({opacity: '0.75',height: '100%',width: '70%'});$(FuncInit.idmap).animate({opacity: '0.3'});$(FuncInit.idp).animate({opacity: '0.3'});}});
		$(FuncInit.idp).hover(function(){if(FuncInit.bnm){$(FuncInit.idtab).animate({opacity: '1',height: '15%',width: '100%'});$(FuncInit.idmap).animate({opacity: '1'});$(FuncInit.idp).animate({opacity: '1'});}});
		$("#rtrm").click(function(){if(FuncInit.bnm){$(FuncInit.idtab).animate({opacity: '1',height: '15%',width: '100%'});$(FuncInit.idmap).animate({opacity: '1'});$(FuncInit.idp).animate({opacity: '1'});}});
		$(FuncInit.idrbb).change(function(){FuncTree.bms=false;FuncTree.bms=false;MapsLib.srchOnAll(this.value);$(FuncInit.idinf).empty();FuncTab.msg= 'BOUZ For see, move mouse!!';FuncTree.append(FuncTab.msg,'red');});
		$(FuncInit.idrbb).mouseleave(function(){FuncTab.crTb();MapsLib.displayList();FuncTab.fshBDD();FuncTab.search='';});
		$(FuncInit.idrbb).click(function(){$(FuncInit.idinf).empty();FuncTab.msg= 'Bouz en bas Move down on transparent!!';FuncTree.append(FuncTab.msg,'blue');});
		$(FuncInit.idbtn).bind('click',function(){$(FuncInit.idsup).empty();$(FuncInit.idsup).animate({ width: '0%' });$(FuncInit.idp).animate({left: '70%'});$('small').show();$(FuncInit.idinf).hide();$('#dep').val(null);$('#arv').val(null);$(FuncInit.idtab).show();$(FuncInit.iditi).css('color','blue');$(FuncInit.iditi).css('border-color','#FFFF00');$(FuncInit.iditi).css('font-size','15px');$(FuncInit.iditi).css('font-weight','none');MapsLib.s=null;MapsLib.e=null;$(FuncInit.idbtn).hide();MapsLib.initialize();$(FuncInit.idtab).show();});
		$(FuncInit.idinf).bind('click',function(){if(FuncInit.bnm){$(FuncInit.idtab).animate({opacity: '1',height: '15%',width: '100%'});$(FuncInit.idmap).animate({opacity: '1'});$(FuncInit.idp).animate({opacity: '1'});}});
		$('#clear').css('color','blue');$('#clear').css('border-color','blue');		
		$('#clear').bind('click',function(){MapsLib.map_centroid = new google.maps.LatLng(-21.137472,55.546906);FuncTree.zoom=10;MapsLib.doSearch();var items = $(FuncInit.idtree).jqxTree('getCheckedItems');for(var i in items){var e=items[i].element;$(FuncInit.idtree).jqxTree('uncheckItem', e);$(FuncInit.idtree).jqxTree('collapseItem', e);}$(FuncInit.idtree).jqxTree('refresh');});
		$('#find_me').click(function(){MapsLib.findMe();return false;});
		$('#dep').click(function(){MapsLib.chad='#dep'; return true;});
		$('#arv').click(function(){MapsLib.chad='#arv'; return true;});
		$(FuncInit.idmap).mouseleave(function(){map.setZoom(FuncTree.rvzoom);FuncRoute.calcRoute();return true;});
		$(FuncInit.iditi).click(function(){FuncRoute.calcRoute();return true;});
		FuncInit.tmp="OUEST";
		MapsLib.initialize();
        });
      //]]>