/*!
 * Runsense 97Kafr
 *
 * Copyright 2018, Dalleau Pascal
 *
 */
var FuncTree=FuncTree || {};var FuncTree={bchk:false,bgrow:false,bms:true,updBackG:"body",ptbid:['PLrwe0-1smC6xL233WdVGDdaCugFfd5cbW'],add:function(arr){$('#jqxTree').jqxTree('collapseAll');var it = $('#jqxTree').jqxTree('getSelectedItem');var elmt = it.element;var lg=arr.length;var elmt=$('#jqxTree').jqxTree('getSelectedItem');var felmt=[];for(var i=lg-1;i>=0;i--){var uri='<iframe id="'+arr[i]+'" sandbox="Access-Control-Allow-Origin allow-scripts" type="text/html" width="250" height="50"src="http://www.youtube.com/embed/'+arr[i]+'?autoplay=0&origin=http://runsense.re"frameborder="0" enablejsapi="1" />';var rplc='#'+arr[i];$('#jqxTree').jqxTree('addTo', {id:arr[i], label:'play '+i,value:arr[i],items:[{html:uri, disabled:true}] },elmt); var itm=$('#jqxTree').jqxTree('getItem', $(rplc)[0]);felmt[i]=itm.element;}$('#jqxTree').jqxTree('expandItem', elmt);for(var i in felmt)  $('#jqxTree').jqxTree('expandItem', felmt[i]);$('#jqxTree').jqxTree('refresh');},init:function(){$(FuncInit.idtree).jqxTree({source:FuncInit.src,width:'100%',height:FuncInit.h});$('#jqxTree .jqx-tree-item').mouseenter(function (event){var text = event.target.textContent;var i;});
$(FuncInit.idtree).bind('select', function(ev){ev.stopPropagation();var a = ev.args;var e = a.element;var i=$(FuncInit.idtree).jqxTree('getItem', e); var spl=i.label.split(' ');if(spl[0]==='play'){FuncInit.videoid=i.value;FuncInit.plys.playVideoAt(spl[1]);}else{FuncInit.plyLstId=i.value;done=false;FuncInit.videoid='';FuncInit.rchg();}});}};




