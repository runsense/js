//<![CDATA[
$.urlParam=function(name){var results=new RegExp('[\?&amp;]' + name + '=([^&amp;#]*)').exec(window.location.href);try{return results[1]||0;}catch(e){return null;}}

        $(window).resize(function () { var h = $(window).height();var offsetTop = 105; $(FuncInit.idmap).css('height', (h - offsetTop));}).resize();
        $(function() {
		
		//$(FuncInit.idsup).bind('click',function(){ $(this).animate({ width: '35%' });$(FuncInit.idmap).animate({ width: '35%' });});
		FuncInit.init();
		$(FuncInit.idtree).jqxTree({checkboxes:true,source:FuncTree.source,width:'100%',height:FuncTree.initl,theme:'summer'});
		$('#jqxTree .jqx-tree-item').mouseenter(function (event){event.stopPropagation();var text = event.target.textContent;var i;if(FuncInit.bnm&&FuncTree.bms)try{text = text.replace(/ /g,'').replace(/'/g,'');rplc = '#'+text;i = $(FuncInit.idtree).jqxTree('getItem',$(rplc)[0] );}catch(e){for(var j in FuncTree.theme){var rplc=FuncTree.theme[j].label.replace(/ /g,'').replace(/'/g,'');if(rplc==text) {rplc='#'+FuncInit.tmp+'_'+FuncTree.theme[j].value;i = $(FuncInit.idtree).jqxTree('getItem',$(rplc)[0] );}}}finally{FuncTree.applysrch(i);MapsLib.doSearch();}});
		$(FuncInit.idtree).on('expand', function(ev) {if(FuncInit.bnm){var e = ev.args.element;var i = $(FuncInit.idtree).jqxTree('getItem',e );if($(FuncInit.idtree).jqxTree('getItem',e.parentElement.parentElement)!=null) FuncTree.zoom=12; else FuncTree.zoom=10;if(!FuncTree.bgrow){FuncTree.selectBox(i);FuncTree.bgrow=true;$(FuncInit.idtree).jqxTree('checkItem', e, true);$('small').show();FuncTree.applysrch(i);MapsLib.doSearch();$(FuncInit.idtree).jqxTree('ensureVisible', e);}}});
		$(FuncInit.idtree).on('collapse', function(ev){FuncTree.bms=true; if(!FuncTree.bgrow){FuncTree.bgrow=true;FuncTree.ptbid=new Array();$(FuncInit.idtab).empty();FuncTree.applysrch(null);$('small').hide();FuncTree.zoom=10;MapsLib.doSearch();}});
		$(FuncInit.idtree).bind('select', function(ev){ev.stopPropagation();FuncTree.zoom=FuncInit.rvzm;var a = ev.args;var e = a.element;var i = $(FuncInit.idtree).jqxTree('getItem', e);if(i!=null) { FuncTree.selectBox(i);for(var cpt in FuncInit.txtInit) if(FuncInit.txtInit[cpt]==i.label) {FuncTree.bgrow=true;} $(FuncInit.idtree).jqxTree('checkItem', e, true); FuncTree.applysrch(i); MapsLib.doSearch();}});
		$(FuncInit.idtree).on('checkChange', function (ev){if(!FuncTree.bgrow){$('#clear').css('color','red');$('#clear').css('border-color','green');var a = ev.args;var e = a.element;var item = $(FuncInit.idtree).jqxTree('getItem', e);var bIn=false;for(var i in FuncInit.txtInit) {if(item.label==FuncInit.txtInit[i]) bIn=true;}if(!bIn){FuncInit.tmp= item.label;var items = $(FuncInit.idtree).jqxTree('getCheckedItems');var pre = e.parentElement.parentElement;var	prei = $(FuncInit.idtree).jqxTree('getItem', pre);if(prei!=null)for(var i in items){if(items[i].element!=pre&&items[i].element!=e) { $(FuncInit.idtree).jqxTree('uncheckItem', items[i].element); }}}FuncTree.bgrow=true;if(a.checked){ $(FuncInit.idtree).jqxTree('expandItem', e);}else {$(FuncInit.idtree).jqxTree('collapseItem', e);}}else{$('#clear').css('font-weight','bold');$('#clear').css('font-size','18px');}}); 
		
		if(FuncInit.bxt) FuncInit.tmp="OUEST";
		initialize();
        });
      //]]>