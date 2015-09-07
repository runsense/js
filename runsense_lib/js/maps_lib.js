/*!
 * Runsense 97Kafr
 *
 * Copyright 2018, Dalleau Pascal
 *
 */

var FuncInit= FuncInit || {};
var FuncInit={initSrch:'',bxt:false,ak:'',src:'',zm:10,rvzm:13,bnm:true,initl:'auto',idtree:"#jqxTree",idtab:"#listv",idmap:"#map_canvas",idp:"#panel",idinf:"#info",iditi:"#iti",idbtn:"#btn",idsup:"#pano",idrbb:"#r_bdd",bstyle:"http://runsense.github.io/js/f.png",txtInit:["terrain et jeux POOL"/*0*/,"sentiers et routes PATH & ROAD"/*1*/,"manger & dormir EAT & SLEEP"/*2*/,"Lieu dit et quartier PLACE & QUARTER"	/*3*/,"boite de nuit & pub NIGHT CLUB & FESTIVALS"/*4*/,"loisirs, info marinne ENTERTAINEMENT & SEA INFO"/*5*/,"http://runsense.github.io/js/img/"/*6*/,"http://maps.google.com/mapfiles/kml/shapes/"/*7*/,".png"/*8*/,"<span style='background-color: #FFF;'>"/*9*/,"</span>"/*10*/,"http://runsense.github.io/js/img/blason/"/*11*/,".gif"]/*12*/,srcZn:[],srcId:[],tmp:''};


//Objet creation tableau de réponse json

var FuncTab = FuncTab || {};
var FuncTab = {bmrk:false,results:null,idx:0,search:"",list_table:"",lat:null,lng:null,msg:"Pour Afficher les donners, cliquer ailleurs!!",
 fsearch:function(s){var rplc ='#'+s.replace(/ /g,'').replace(/'/g,'');var table= $("#list_table").dataTable();table.fnFilter(s);$(rplc).mouseover();},
 displayList: function(json) {try{MapsLib.handleError(json);}catch( e){ ;}var columns = json["columns"];var rows = json["rows"];var rplc="#"+MapsLib.cpte;FuncTab.results = $(rplc);FuncTab.results .empty();if (rows == null) FuncTab.results.append("<span class='lead'>No results found</span>"); else{FuncTab.crTb();FuncTab.cRows(rows);FuncTab.fnsTb();}},
crTb:function(){var rplc="#"+0;FuncTab.results=$(rplc);FuncTab.results.empty();FuncTab.list_table="<table class='table' id ='list_table'><tbody>";},
fshBDD:function()
{FuncTab.list_table += "</tbody></table>";if(FuncTab.lat!=""&&FuncTab.lng!=""){if(FuncTab.lng<55.8){MapsLib.map_centroid=new google.maps.LatLng(FuncTab.lat,FuncTab.lng);map.setCenter(MapsLib.map_centroid);}}FuncTab.results.append(FuncTab.list_table);
	$("#list_table").dataTable({"aoColumns":[null,null,null,null,null,null],"sDom": '<"top"pf>rt<"bottom"lip><"clear">',"language": {"sProcessing":"T ou plane!!","infoEmpty": "La patience reste en vertus!!Wait or complete search!!","zeroRecords": FuncTab.msg},"bFilter": true,"bInfo": true,"scrollY":"450px","scrollCollapse": true,"paging":true,"bAutoWidth": false});
	$(".table tbody").on('click','tr',function(){if(!FuncTree.bchk){MapsLib.addSrchMarker.setMap(null);var lat=$(this).children('td:nth-child(4)').text();var lng = $(this).children('td:nth-child(5)').text();var nm = '#'+$(this).children('td:nth-child(6)').text();FuncTab.tabToMap(lat,lng);$(FuncInit.idtree).jqxTree('selectItem', $(nm)[0]);$(FuncInit.idtree).jqxTree('expandItem', $(nm)[0]);$(FuncInit.idmap).focus();FuncTree.zoom=13;FuncInit.bnm=true;}}).on( 'mouseover','tr',function(){$(this).css("background","#0404B4");}).on('mouseleave','tr',function(){$(this).css("background","");}).on( 'mouseover', 'td', function (){$(this).css("background","#B8860B");$(this).css("fontSize","180%");}).on('mouseleave','td',function(){$(this).css("background","");$(this).css("fontSize","100%");});},
fnsTb:function()
{FuncTab.list_table += "</tbody></table>";if(FuncTab.lat!=""&&FuncTab.lng!=""){if(FuncTab.lng<55.8){MapsLib.map_centroid= new google.maps.LatLng(FuncTab.lat,FuncTab.lng);map.setCenter(MapsLib.map_centroid);}}FuncTab.results.append(FuncTab.list_table);
  $("#list_table").dataTable({"aoColumns": [null,null,null,null,null,null],"sDom":'<"top"pf>rt<"bottom"lip><"clear">',"language": {"infoEmpty": "La patience reste en vertus!!Wait and move mouse","zeroRecords": "PLAY WITH MOUSE for search go top right and left down!!Y GAGN ZOUER POU FE LE RECHERCHE EN HAUT A DROITE EN BAS A GAUCHE"},"oSearch":{"sSearch":FuncTab.search},"bFilter":true,"bInfo":true,"scrollY":"450px","scrollCollapse": true,"paging":true,"bAutoWidth": false});
  $(".table tbody").on('click','tr',function(){if(!FuncTree.bchk){MapsLib.addSrchMarker.setMap(null);FuncTree.bchk=true;var nm=$(this).children('td:nth-child(2)').text().replace(/ /g,'');var lat = $(this).children('td:nth-child(5)').text();var lng=$(this).children('td:nth-child(6)').text();var ids=FuncInit.srcId; for(var id in ids) if(ids[id].label==nm) FuncTab.bmrk=true;if(!FuncTab.bmrk){ids = FuncInit.srcZn; for(var id in ids) if(ids[id]==nm) FuncTab.bmrk=true;};nm ='#'+nm;FuncTab.tabToMap(lat,lng);FuncTab.bmrk=false;$(FuncInit.idtree).jqxTree('selectItem',$(nm)[0]);FuncTree.bchk=false;$(FuncInit.idmap).focus();}}).on('mouseover','tr',function(){$(this).css("background","#0404B4");}).on('mouseleave','tr',function(){$(this).css("background","");}).on('mouseover','td',function(){$(this).css("background","#B8860B");$(this).css("fontSize","180%");}).on( 'mouseleave','td',function(){$(this).css("background","");$(this).css("fontSize","100%");});},
cRows:function(rows) {for (var row in rows) {var ctg = rows[row][0];var nom = rows[row][1];var desc = rows[row][2];FuncTab.lat = rows[row][3];FuncTab.lng = rows[row][4];if(ctg.split("http:").length==1) {var spl=ctg.split("*");var lg=spl.length;if(lg==1) {ctg="<img src='http://runsense.github.io/js/img/ico/"+ctg+".png' style='width: 30px;height: 30px'></img>"; }else{ctg='';for(var i in spl) ctg=ctg+"<img src='http://runsense.github.io/js/img/ico/"+spl[i]+".png' style='width: 15px;height: 30px'></img>";}}else ctg="<img src='"+ctg+"' style='width: 30px;height: 30px'></img>";FuncTab.list_table += "<tr id="+nom.replace(/ /g,'').replace(/'/g,'')+"><td >" +ctg + "</td><td >" + nom + "</td><td >" + desc + "</td><td >" +ctg + "</td><td style='color:blue;width:20px;' >" + FuncTab.lat + "</td><td style='color:blue;width:20px;' >" + FuncTab.lng + "</td></tr>";}},
tabToMap: function(lat,lng){if(lat>-22){if(lng<55.8){MapsLib.map_centroid = new google.maps.LatLng(lat,lng);map.setCenter(MapsLib.map_centroid);if(FuncTree.zoom!=10) FuncTree.zoom=16;map.setMapTypeId(google.maps.MapTypeId.ROADMAP);map.setZoom(FuncTree.zoom);if(FuncInit.bnm){$(FuncInit.idtab).animate({opacity:'0.3', height:'30%'});$(FuncInit.idmap).animate({opacity: '1' });}else{$(FuncInit.idtab).animate({zIndex:'0'});$(FuncInit.idmap).animate({zIndex:'1'});$(FuncInit.idp).animate({zIndex:'1'});}MapsLib.chad='#arv';MapsLib.addrFromLatLng(MapsLib.map_centroid);if(!FuncTab.bmrk){var ad=$(MapsLib.chad).val();MapsLib.addSrchMarker = new google.maps.Marker({position: MapsLib.map_centroid,map: map,animation: google.maps.Animation.DROP,title:ad});}}}}}

//Objet Itinéraire Google

var FuncRoute = FuncRoute || {};
var FuncRoute = {directionsDisplay : new google.maps.DirectionsRenderer(),directionsService : new google.maps.DirectionsService(),
    calcRoute: function () {$(FuncInit.idinf).empty();$(FuncInit.idinf).show();if(MapsLib.e!==null){var request={origin:MapsLib.s,destination:MapsLib.e,travelMode: google.maps.TravelMode.DRIVING};FuncRoute.directionsService.route(request,function(response,status){if(status==google.maps.DirectionsStatus.OK){FuncRoute.directionsDisplay.setDirections(response);MapsLib.zoom(map);$(FuncInit.idinf).empty();FuncRoute.directionsDisplay.setPanel(document.getElementById('pano'));$('small').hide();$(FuncInit.idsup).animate({ width: '35%'});$(FuncInit.idp).animate({left: '100%' });$(FuncInit.idtab).hide();$(FuncInit.idbtn).show();}else{$(FuncInit.idinf).empty();$(FuncInit.idinf).append("<h1>Y GAGN PA t&EGRAVE;r l&AGRAVE!!(UNKNOW ADRESSE)</h1>");$(FuncInit.idinf).css("color","#000");$(FuncInit.idinf).css("background-color","red");}});MapsLib.doSearch();}}
	};
var FuncTree = FuncTree || {};
var FuncTree = {
	bchk:false,bgrow:false,bms:true,updBackG:"body",ptbid:['1So5MDh-kSSDOudH6iznmgC3DTfn4SBKiilMj27DI'],styles:["",FuncInit.bstyle],zoom:10,rvzoom:11,
	theme:[{label:'general',value:''},{label:FuncInit.txtInit[0],value:'t'},{label:FuncInit.txtInit[1],value:'s'},{label:FuncInit.txtInit[2],value:'md'},{label:FuncInit.txtInit[3],value:'v'},{label:FuncInit.txtInit[4],value:'n'},{label:FuncInit.txtInit[5],value:'a'}],
	srcStyle:[{label: FuncInit.txtInit[0],value: "play"},{label: FuncInit.txtInit[1],value: "hiker"},{label: FuncInit.txtInit[2],value: "dining"},{label: FuncInit.txtInit[3],value: "realestate"},{label: FuncInit.txtInit[4],value: "star"},{label: FuncInit.txtInit[5],value: "ranger_station"},{label: "EST",value: "#DAA520",lien:FuncInit.txtInit[6]+"Est.png"},{label: "Bras-Panon",value: "#4B0082",lien:FuncInit.txtInit[6]+"brasPanon.png" },{label: "Saint-Andre",value: "#006400",lien:FuncInit.txtInit[6]+"saintAndre.png"},{label: "Saint-Benoit",value: "#008B8B",lien:FuncInit.txtInit[6]+"saintBenoit.png"},{label: "Sainte-Anne",value: "#800000",lien:FuncInit.txtInit[6]+"sainteAnne.png"},{label: "Sainte-Rose",value: "#DAA520",lien:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sainte-Rose_eglise.jpg/800px-Sainte-Rose_eglise.jpg"},{label: "La Plaine Des Palmistes",value: "#CD5C5C",lien:"https://upload.wikimedia.org/wikipedia/commons/b/b3/Ppalmistes2.jpg"},{label: "Salazie",value: "#000080",lien:"http://www.transeet.fr/wp-content/uploads/2013/05/Ile-de-la-Reunion-510x350.jpg"},{label:"OUEST", value:" #CD5C5C",lien:FuncInit.txtInit[6]+"Ouest.png"},{label: "Mafate",value: "#4B0082",lien:FuncInit.txtInit[6]+"mafate.png"},{label: "Saint-Gilles",value: "#006400",lien:FuncInit.txtInit[6]+"saintGilles.png"},{label: "Saint-Leu",value: "#008B8B",lien:FuncInit.txtInit[6]+"saintLeu.png"},{label: "Trois Bassins",value: "#800000",lien:FuncInit.txtInit[6]+"troisBassins.png"},{label: "Saint-Paul",value: "#DAA520",lien:FuncInit.txtInit[6]+"saintPaul.png"},{label: "Etang Sale",value: "#CD5C5C",lien:FuncInit.txtInit[6]+"etangSale.png"},{label: "Entre-Deux",value: "#000080",lien:FuncInit.txtInit[6]+"entreDeux.png"},{label: "Les Avirons",value: "#FFD700",lien:FuncInit.txtInit[6]+"lesAvirons.png"},{label: "SUD",value:"#66CDAA",lien:FuncInit.txtInit[6]+"sud.png"},{label: "Saint-Pierre",value: "#4B0082",lien:FuncInit.txtInit[6]+"saintPierre.png"},{label: "Saint-Joseph",value: "#006400",lien:FuncInit.txtInit[6]+"saintJoseph.png"},{label: "Petite Ile",value: "#008B8B",lien:"https://upload.wikimedia.org/wikipedia/commons/1/11/Reunion_PetiteIle.JPG"},{label: "Saint-Louis",value: "#800000",lien:"https://upload.wikimedia.org/wikipedia/commons/e/e1/R%C3%A9union_LesMakes.JPG"},{label: "Cilaos",value: "#DAA520",lien:"https://upload.wikimedia.org/wikipedia/commons/4/43/Cirque_De_Cilaos_On_Reunion.jpg"},{label: "Tampon",value: "#CD5C5C",lien:FuncInit.txtInit[6]+"tampon.png"},{label: "La Plaine Des Cafres",value: "#000080",lien:FuncInit.txtInit[6]+"laPlaineDesCafres.png"},{label: "enclos du Tremblet",value: "#FFD700",lien:"https://upload.wikimedia.org/wikipedia/commons/3/37/Piton_de_la_Fournaise%2C_R%C3%A9union_Island_%28High_Resolution%29.jpg"},{label: "Saint-Phillippe",value: "#66CDAA",lien:FuncInit.txtInit[6]+"saintPhillippe.png"},{label: "NORD",value: "#4169E1",lien:FuncInit.txtInit[6]+"rocheEcrite.png"},{label: "Saint-Denis",value: "#4B0082",lien: "https://upload.wikimedia.org/wikipedia/commons/b/b9/SaintDenisReunion003.jpg"},{label: "Sainte-Marie",value: "#006400",lien:FuncInit.txtInit[6]+"sainteMarie.png"},{label: "Sainte-Suzanne",value: "#008B8B",lien:FuncInit.txtInit[6]+"sainteSuzanne.png"},{label: "La Possession",value: "#800000",lien:FuncInit.txtInit[6]+"laPossession.png"},{label: "Le Port",value: "#DAA520",lien:FuncInit.txtInit[6]+"lePort.png"}],
	source:FuncInit.src,
	applyChild:function(items){ for(var i in items) FuncTree.chkItm(items[i]);},
	chkItm :function(elmt){ var rplc='#'+elmt.id; $(FuncInit.idtree).jqxTree('checkItem', $(rplc)[0], true);},
	slcItm :function(txt){ var rplc='#'+txt; return $(FuncInit.idtree).jqxTree('selectItem', $(rplc)[0], true);},
	applysrch :function(i){var tmp=FuncTree.ptbid;var stmp=FuncTree.styles;FuncTree.ptbid=new Array();FuncTree.styles=new Array();try{FuncTree.ptbid.push(i.value);FuncTree.styles.push(FuncTree.chStyle(i.label));var u=FuncTree.chURL(i.label);if(u!=null) FuncTree.styles.push(FuncTree.chURL(i.label));else FuncTree.styles.push(FuncInit.bstyle);}catch(e){ FuncTree.ptbid=tmp;FuncTree.styles=stmp;}},
	applyMob :function(rplc){
	var tmp=FuncTree.ptbid;var stmp=FuncTree.styles;FuncTree.ptbid=new Array();FuncTree.styles=new Array();
	try{
		rplc=rplc.replace(/#/g,'');var src=FuncTree.src;
		for(var c in src) if(src[c].id==rplc) {var i=src[c];i.html=i.html.split('>')[1].split('<')[0];
		FuncTree.ptbid.push(i.value);
		FuncTree.styles.push(FuncTree.chStyle(i.html));var u=FuncTree.chURL(i.html);if(u!=null) FuncTree.styles.push(FuncTree.chURL(i.html));else FuncTree.styles.push(FuncInit.bstyle);
		}
		}catch(e){ FuncTree.ptbid=tmp;FuncTree.styles=stmp;}
		MapsLib.doSearch();
	},
	chStyle:function(l) { for(var i=0; i<FuncTree.srcStyle.length;i++) if(FuncTree.srcStyle[i].label==l) return FuncTree.srcStyle[i].value;},
	chURL:function(l){for(var i=0; i<FuncTree.srcStyle.length;i++) if(FuncTree.srcStyle[i].label==l) return FuncTree.srcStyle[i].lien;},
	append:function(txt,color){$(FuncInit.idinf).append(txt);$(FuncInit.idinf).css("color","white");$(FuncInit.idinf).css("background-color",color);},
	selectBox:function(i){if(i.id.match('_')==null){var itmid=i.id;FuncInit.tmp='';$("#r_lieu").selectBox('value',itmid);var zns = FuncInit.srcZn;for(var z in zns){ if(zns[z]==itmid) FuncInit.tmp=itmid;}if(FuncInit.tmp=='') {var ids = FuncInit.srcId; for(var id in ids) if(ids[id].label==itmid) FuncInit.tmp=ids[id].id;}if(FuncInit.tmp=='') FuncInit.tmp=itmid.split('_')[0]; FuncTree.bms=true;}else { var slc=i.id.split('_')[1]; $("#r_theme").selectBox('value',slc);FuncTree.bms=false;}}
};
$(FuncInit.idtree).jqxTree({checkboxes:true,source:FuncTree.source,width:'100%',height:FuncTree.initl,theme:'summer'});
$('#jqxTree .jqx-tree-item').mouseenter(function (event){event.stopPropagation();var text = event.target.textContent;var i;if(FuncInit.bnm&&FuncTree.bms)try{text = text.replace(/ /g,'').replace(/'/g,'');rplc = '#'+text;i = $(FuncInit.idtree).jqxTree('getItem',$(rplc)[0] );}catch(e){for(var j in FuncTree.theme){var rplc=FuncTree.theme[j].label.replace(/ /g,'').replace(/'/g,'');if(rplc==text) {rplc='#'+FuncInit.tmp+'_'+FuncTree.theme[j].value;i = $(FuncInit.idtree).jqxTree('getItem',$(rplc)[0] );}}}finally{FuncTree.applysrch(i);MapsLib.doSearch();}});
$(FuncInit.idtree).on('expand', function(ev) {if(FuncInit.bnm){var e = ev.args.element;var i = $(FuncInit.idtree).jqxTree('getItem',e );if($(FuncInit.idtree).jqxTree('getItem',e.parentElement.parentElement)!=null) FuncTree.zoom=12; else FuncTree.zoom=10;if(!FuncTree.bgrow){FuncTree.selectBox(i);FuncTree.bgrow=true;$(FuncInit.idtree).jqxTree('checkItem', e, true);$('small').show();FuncTree.applysrch(i);MapsLib.doSearch();$(FuncInit.idtree).jqxTree('ensureVisible', e);}}});
$(FuncInit.idtree).on('collapse', function(ev){FuncTree.bms=true; if(!FuncTree.bgrow){FuncTree.bgrow=true;FuncTree.ptbid=new Array();$(FuncInit.idtab).empty();FuncTree.applysrch(null);$('small').hide();FuncTree.zoom=10;MapsLib.doSearch();}});
$(FuncInit.idtree).bind('select', function(ev){ev.stopPropagation();FuncTree.zoom=FuncInit.rvzm;var a = ev.args;var e = a.element;var i = $(FuncInit.idtree).jqxTree('getItem', e);if(i!=null) { FuncTree.selectBox(i);for(var cpt in FuncInit.txtInit) if(FuncInit.txtInit[cpt]==i.label) {FuncTree.bgrow=true;} $(FuncInit.idtree).jqxTree('checkItem', e, true); FuncTree.applysrch(i); MapsLib.doSearch();}});
$(FuncInit.idtree).on('checkChange', function (ev){if(!FuncTree.bgrow){$('#clear').css('color','red');$('#clear').css('border-color','green');var a = ev.args;var e = a.element;var item = $(FuncInit.idtree).jqxTree('getItem', e);var bIn=false;for(var i in FuncInit.txtInit) {if(item.label==FuncInit.txtInit[i]) bIn=true;}if(!bIn){FuncInit.tmp= item.label;var items = $(FuncInit.idtree).jqxTree('getCheckedItems');var pre = e.parentElement.parentElement;var	prei = $(FuncInit.idtree).jqxTree('getItem', pre);if(prei!=null)for(var i in items){if(items[i].element!=pre&&items[i].element!=e) { $(FuncInit.idtree).jqxTree('uncheckItem', items[i].element); }}}FuncTree.bgrow=true;if(a.checked){ $(FuncInit.idtree).jqxTree('expandItem', e);}else {$(FuncInit.idtree).jqxTree('collapseItem', e);}}else{$('#clear').css('font-weight','bold');$('#clear').css('font-size','18px');}}); 
$("#r_tab").change(function ()  {FuncTree.bms=false;FuncTab.fsearch(this.value);$(FuncInit.idtab).mouseover();}); 
if(!FuncInit.bxt) {
$( "#r_theme" ).selectBox({mobile: true}).change(function () {FuncTree.bms=false;var bzn= false;var zns = FuncInit.srcZn;for(var z in zns){if(zns[z]==FuncInit.tmp) bzn= true;}if(bzn){MapsLib.srchOnAll(this.value);$(FuncInit.idinf).empty();FuncTab.msg= 'R\'gard champ rouz, &eacute;crits &agrave; o&ugrave;, ou play plus bas!!';FuncTree.append(FuncTab.msg,'red');} else{var ids = FuncInit.srcId;var rplc= '#'+FuncInit.tmp+'_';rplc = rplc+$(this).val();if(FuncInit.bnm) $(FuncInit.idtree).jqxTree('selectItem',$(rplc)[0]);else FuncTree.applyMob(rplc);}});
$("#r_lieu").selectBox({mobile: true}).change(function () {FuncTree.bms=false;FuncInit.tmp= $(this).val();$( "#r_theme" ).selectBox('value',"general");var rplc ='#'+FuncInit.tmp;if(FuncInit.bnm) $(FuncInit.idtree).jqxTree('selectItem',$(rplc)[0]); else FuncTree.applyMob(rplc); });
}else{$( "#r_lieu" ).empty();$( "#r_lieu" ).html(FuncInit.name);$( "#r_theme" ).empty();}
google.maps.visualRefresh = true;
/*!
 * Runsense 97Kafr
 *
 * Copyright 2018, Dalleau Pascal
 *
 */
//Objet Librairie de Google Map
var MapsLib = MapsLib || {};
var MapsLib = {colSrch:'description',
  s:null,e:null,cpte:0,chad:'',datajson:['',''],geocoder:new google.maps.Geocoder(),polygonTableID:[],polygon:new Array(),googleApiKey:FuncInit.ak,locationColumn	:"lat",map_centroid:new google.maps.LatLng(-21.137472,55.546906),locationScope:"reunion",defaultZoom:FuncInit.zm,row:[],addSrchMarker:new google.maps.Marker(),h:34,p:10,
  strVw:new google.maps.StreetViewPanorama(document.getElementById("strvw"),{position: MapsLib.map_centroid,pov:{heading:34,pitch:10}}),
doSearch:function(location){FuncTree.bgrow = false;MapsLib.clearSearch();MapsLib.polygonTableID=FuncTree.ptbid;MapsLib.polygon=new Array();try{var tl=MapsLib.polygonTableID.length;map.setMapTypeId(google.maps.MapTypeId.SATELLITE);for(var i=0; i<tl; i++){var stl= FuncTree.styles[i];if(stl=="dining"||stl=="star")map.setMapTypeId(google.maps.MapTypeId.HYBRID);var layer = new google.maps.FusionTablesLayer({query: {from:   MapsLib.polygonTableID[i],select: "geometry"},styles: [{markerOptions: {iconName: stl,},polygonOptions: {fillColor: stl,strokeColor: "#FFFFF0",strokeWeight: "int"},polylineOptions: {strokeColor: stl,strokeWeight:"int"}},]});try{var chcmp=FuncTree.styles[i+1];if(chcmp.charAt(0)!='#'&&chcmp!='NO') {$(FuncTree.updBackG).css('background-image', 'url(' + chcmp+ ')');$(FuncTree.updBackG).css('background-repeat', 'no-repeat');$(FuncTree.updBackG).css('background-size', '100%');}else $(FuncTree.updBackG).css('background-image', 'url("+FuncInit.tstyle+")');if(stl.charAt(0)!='#') $(FuncInit.idp).css('border-color',stl);FuncTree.styles=new Array();}finally{google.maps.event.addListener(layer, 'click', function(e){ MapsLib.anLayer(e);});MapsLib.polygon.push(layer);MapsLib.polygon[i].setMap(map);}}}catch(e){;}finally{MapsLib.getList();$(FuncInit.idtree).focus();}},
anLayer:function(e){if(!FuncTree.bchk&&!FuncTree.bgrow){var s= e.infoWindowHtml.split('<b>nom:</b> ')[1].split('<br>')[0];FuncTree.bchk=true;FuncTab.fsearch(s);var rplc ='#'+s.replace(/ /g,'').replace(/'/g,'');$(FuncInit.idtree).jqxTree('selectItem',$(rplc)[0]);MapsLib.chad='#arv'; MapsLib.addrFromLatLng(e.latLng);FuncTree.bchk=false;return s;}},
findMe: function(){if(navigator.geolocation){navigator.geolocation.getCurrentPosition(function(position){fl=new google.maps.LatLng(position.coords.latitude,position.coords.longitude);MapsLib.chad= '#dep';MapsLib.addrFromLatLng(fl);map.setCenter(fl);}, null);}else FuncTree.append('Lo l\'action fo config!!Configurate your Position','red');},
addrFromLatLng: function(latLngPoint){/*Sortie lat long console*/console.log(latLngPoint);MapsLib.geocoder.geocode({'latLng': latLngPoint}, function(results, status){if (status == google.maps.GeocoderStatus.OK){if(results.length>1)$(MapsLib.chad).val(results[0].formatted_address.split(',')[0]+','+results[1].formatted_address); else $(MapsLib.chad).val(results[0].formatted_address);if(MapsLib.chad=='#dep'){MapsLib.s=results[0].formatted_address;$(FuncInit.iditi).css('font-size','20px');$(FuncInit.iditi).css('font-weight','bold');}else{MapsLib.e=results[0].formatted_address;$(FuncInit.iditi).css('color','red');$(FuncInit.iditi).css('border-color','green');}}});},
zoom: function(map) { var bounds = new google.maps.LatLngBounds(); map.data.forEach(function(feature) { MapsLib.processPoints(feature.getGeometry(), bounds.extend, bounds); }); map.fitBounds(bounds);},
processPoints: function(geometry, callback, thisArg){if(geometry instanceof google.maps.LatLng)callback.call(thisArg, geometry); else if(geometry instanceof google.maps.Data.Point) callback.call(thisArg, geometry.get()); else {geometry.getArray().forEach(function(g) {MapsLib.processPoints(g, callback, thisArg);});}},
clickmap: function(pos){if(pos!=null) MapsLib.addrFromLatLng(pos.latLng); map.setMapTypeId(google.maps.MapTypeId.HYBRID);},
<<<<<<< HEAD
clearSearch: function() { MapsLib.polygonTableID=null; for(var i=0;i<MapsLib.polygon.length;i++) if (MapsLib.polygon[i] != null) { MapsLib.polygon[i].setMap(null); MapsLib.polygon[i]=null; } map.setCenter(MapsLib.map_centroid); map.setZoom(FuncTree.zoom);},
query: function(selectColumns, limit, callback) {
	for(var i in MapsLib.polygonTableID)
	{
		if(MapsLib.polygonTableID[i]!="NO")
		{
			MapsLib.cpte=i; $(FuncInit.idtab).append("<div title='Revenir MAP A DROITE(View MAP RIGHT)' id="+i+" style='background-color: #FFFFFF;'/>");
			var queryStr = []; queryStr.push("SELECT " + selectColumns); queryStr.push(" FROM " + MapsLib.polygonTableID[i]);
			var sql = encodeURIComponent(queryStr.join(" ")); $.ajax({url: "https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback="+callback+"&key="+MapsLib.googleApiKey, dataType: "jsonp"});
		}else { $(FuncInit.idtab).empty(); $(FuncInit.idtab).append("<div  id="+i+" style='background-color: #FF0000;>NO DATA</div>"); }
	}
	$(FuncInit.idinf).empty(); FuncTree.append("ALLER sur le Panneau TRANSPARENT en BAS à gauche pour la description </br> (GO ON TRANSPARENT  left down panel)","blue");
  },
getList: function() { var selectColumns = "categ,nom,description,lat,lng"; MapsLib.query(selectColumns, 10, "FuncTab.displayList");},
srchOnAll: function(txt) {
	var th= $( "#r_theme" ).val();
	var li= $("#r_lieu").val();
if(txt!='')
	{
	FuncTab.search=txt;
	MapsLib.row= [];
	MapsLib.cpte= 0;
	var fsrc= FuncTree.source;
	var bsrc=true;
	FuncTab.crTb();
	var ssrcMap;

		for(var i in fsrc)
			if(bsrc)
			{
				var src= fsrc[i];
				var items= src.items;
				
				for(var j in items)
				{
				if(bsrc)
					try{
						var srcMap=items[j];
						if(srcMap.id==li) bsrc=false;
						//MapsLib.getSearch(srcMap.value);
						var ssimts= items[j].items;
						for(var k in ssimts)
						try{
							var ssrcMap=ssimts[k];
							
							var spl= ssrcMap.id.split('_')[1];
							
							
						if(th!='')
							{
								if(spl==th) {MapsLib.getSearch(ssrcMap.value);}
							}else
								MapsLib.getSearch(ssrcMap.value);
						}catch(e){;}
					}catch(e){;}
				}
				if(src.id==li) bsrc=false;
			}
			
		MapsLib.displayList();
	FuncTab.fshBDD();
	MapsLib.cpte= 0;
	}				
},
getSearch: function(value) {
	
	var callback= "MapsLib.addrow";
			
				var selectColumns = "nom,description,lat,lng,categ";
				var queryStr = []; queryStr.push("SELECT " + selectColumns); queryStr.push(" FROM " +value);
				queryStr.push(" WHERE description CONTAINS '"+FuncTab.search+"' ");//queryStr.push(" LIMIT 10");
				var sql = encodeURIComponent(queryStr.join(" "));
				//console.log(sql);
				$.ajax({url: "https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback="+callback+"&key="+MapsLib.googleApiKey, dataType: "jsonp", async : false});
},
addrow : function(json) {
<<<<<<< HEAD
console.log(json);
=======
>>>>>>> 7bb6b9a291c880b070f59eca2437346e36a02b3e
	try{MapsLib.handleError(json);}catch( e){ ;}
	var rows = json["rows"];
	for(var r in rows)
		if(rows[r]!=undefined)
		try{
			var rg=[rows[r][4],rows[r][0],rows[r][1],rows[r][2],rows[r][3]];
			MapsLib.row.push(rg);
			console.log(rows[r][4]);
		console.log(rows[r][0]);
		console.log(rows[r][1]);
		console.log(rows[r][2]);
		console.log(rows[r][3]);
		}catch(e){;}
		
	$(FuncInit.idtab).fadeIn('fast');
},
displayList: function() {
	MapsLib.cpte=0;
	for (var row in MapsLib.row)
		try{
			var ctg= MapsLib.row[row][0];
			if(ctg.split("http:").length==1)
				{ var spl= ctg.split("*"); var lg= spl.length; if(lg==1) { ctg="<img src='http://runsense.github.io/js/img/ico/"+ctg+".png' style='width: 30px;height: 30px'></img>"; }else { ctg=''; for(var i in spl) ctg=ctg+"<img src='http://runsense.github.io/js/img/ico/"+spl[i]+".png' style='width: 15px;height: 30px'></img>";}}
			else ctg="<img src='"+ctg+"' style='width: 30px;height: 30px'></img>";
			FuncTab.list_table += "\
			  <tr >\
				<td> "+ctg+"</td>\
				<td >" + MapsLib.row[row][1] + "</td><td >" + MapsLib.row[row][2] + "</td>\
				<td   style='color:blue;width:20px;' >" + MapsLib.row[row][3] + "</td>\
				<td   style='color:blue;width:20px;' >" + MapsLib.row[row][4] + "</td>\
			  </tr>";
		}catch(e){;}
},
=======
clearSearch: function() {MapsLib.row=[];MapsLib.polygonTableID=null;for(var i=0;i<MapsLib.polygon.length;i++) if(MapsLib.polygon[i] != null){MapsLib.polygon[i].setMap(null); MapsLib.polygon[i]=null; } map.setCenter(MapsLib.map_centroid); map.setZoom(FuncTree.zoom);},
getList: function() { var slcCol = "categ,nom,description,lat,lng"; query(slcCol, 10, "FuncTab.displayList");},
srchOnAll: function(txt){MapsLib.colSrch="description";var th= $( "#r_theme" ).val();var li= $("#r_lieu").val();if(txt!='')try{FuncTab.search=txt;MapsLib.row=[];MapsLib.cpte= 0;var fsrc= FuncTree.source;var bsrc=true;FuncTab.crTb();var ssrcMap;for(var i in fsrc) if(bsrc){var src= fsrc[i];var items= src.items;for(var j in items){if(bsrc){var srcMap=items[j];if(srcMap.id==li) bsrc=false;var ssimts= items[j].items;for(var k in ssimts) {var ssrcMap=ssimts[k];var spl= ssrcMap.id.split('_')[1];if(th!=''){if(spl==th) {getSearch(ssrcMap.value);}}else getSearch(ssrcMap.value);}}} if(src.id==li) bsrc=false;}}finally{MapsLib.displayList();FuncTab.fshBDD();MapsLib.cpte= 0;}},
addrow : function(json){try{MapsLib.handleError(json);}catch(e){;}try{var rows = json["rows"];for(var r in rows)if(rows[r]!=undefined){var rg=[rows[r][4],rows[r][0],rows[r][1],rows[r][2],rows[r][3],rows[r][5]];MapsLib.row.push(rg);}}finally{$(FuncInit.idtab).fadeIn('fast');}},
displayList: function(){MapsLib.cpte=0;for (var row in MapsLib.row)try{var ctg=MapsLib.row[row][0];if(ctg.split("http:").length==1){var spl=ctg.split("*");var lg=spl.length;if(lg==1){ctg="<img src='http://runsense.github.io/js/img/ico/"+ctg+".png' style='width: 30px;height: 30px'></img>";}else{ctg='';for(var i in spl) ctg=ctg+"<img src='http://runsense.github.io/js/img/ico/"+spl[i]+".png' style='width: 15px;height: 30px'></img>";}}else ctg="<img src='"+ctg+"' style='width: 30px;height: 30px'></img>";FuncTab.lat=MapsLib.row[row][3];FuncTab.lng=MapsLib.row[row][4];FuncTab.list_table += "<tr ><td> "+ctg+"</td><td >" + MapsLib.row[row][1] + "</td><td >" + MapsLib.row[row][2] + "</td><td   style='color:blue;width:20px;' >" + MapsLib.row[row][3] + "</td><td   style='color:blue;width:20px;' >" + MapsLib.row[row][4] + "</td><td   style='visibility:hidden;' >" + MapsLib.row[row][5] + "</td></tr>";}catch(e){;}},
>>>>>>> 4a33f70171e9f195c3b21c8bf3036fa4e8db5315
handleError: function(json) { if (json["error"] != undefined){var error = json["error"]["errors"];console.log("Error in Fusion Table call!");for (var row in error) { console.log(" Domain: " + error[row]["domain"]);console.log(" Reason: " + error[row]["reason"]);console.log(" Message: " + error[row]["message"]);}}}
}
getSearch=function(value){var callback= "MapsLib.addrow";var slcCol = "nom,description,lat,lng,categ,id";var queryStr = []; queryStr.push("SELECT " + slcCol); queryStr.push(" FROM " +value);queryStr.push(" WHERE "+MapsLib.colSrch+" CONTAINS '"+FuncTab.search+"' ");var sql = encodeURIComponent(queryStr.join(" "));$.ajax({url: "https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback="+callback+"&key="+MapsLib.googleApiKey, dataType: "jsonp"});};
query=function(slcCol, limit, callback){for(var i in MapsLib.polygonTableID){if(MapsLib.polygonTableID[i]!="NO"){MapsLib.cpte=i; $(FuncInit.idtab).append("<div title='Revenir MAP A DROITE(View MAP RIGHT)' id="+i+" style='background-color: #FFFFFF;'/>");var queryStr = []; queryStr.push("SELECT " + slcCol); queryStr.push(" FROM " + MapsLib.polygonTableID[i]);var sql = encodeURIComponent(queryStr.join(" ")); $.ajax({url: "https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback="+callback+"&key="+MapsLib.googleApiKey, dataType: "jsonp"});}else { $(FuncInit.idtab).empty(); $(FuncInit.idtab).append("<div  id="+i+" style='background-color: #FF0000;>NO DATA</div>");}}$(FuncInit.idinf).empty(); FuncTree.append("D\'scend en bas po&ugrave; l&egrave;v lo l'act </br> (GO ON TRANSPARENT  left down panel)","blue");};
initialize=function(){//not compressed!!So Fast otherwise
try{ 
MapsLib.geocoder = new google.maps.Geocoder(); 
FuncRoute.directionsDisplay = new google.maps.DirectionsRenderer(); 
}catch(e){;}
var myOptions = { zoom: MapsLib.defaultZoom, center: MapsLib.map_centroid, mapTypeId: google.maps.MapTypeId.ROADMAP,styleId:2,templateId:1 };
map = new google.maps.Map($("#map_canvas")[0],myOptions);
MapsLib.strVw=new google.maps.StreetViewPanorama(document.getElementById("pano"),{position: MapsLib.map_centroid,pov:{heading: 34,pitch: 10 }});
map.setStreetView(MapsLib.strVw);
google.maps.event.addListener(map, "click",
 function(event) { MapsLib.clickmap(event); });
google.maps.event.addDomListener(window, 'resize', function()
 { 
	map.setCenter(MapsLib.map_centroid); map.setZoom(FuncTree.zoom); 
 });
try{ 
FuncRoute.directionsDisplay.setMap(map); }catch(e){;} 
google.maps.event.addListener(map, 'mouseover', function(event){
 FuncTree.rvzoom=map.getZoom();
 map.setZoom(FuncTree.zoom);
 });
 MapsLib.doSearch();
 
		if(FuncInit.initSrch!=''){MapsLib.colSrch="nom";var srch=FuncInit.initSrch;FuncTree.bms=false;
		$("#r_lieu").val(FuncInit.initl);$("#r_theme").val(FuncInit.initt);
		$(FuncInit.idrbb).val(srch);MapsLib.srchOnAll(srch);$(FuncInit.idrbb).focus();$(FuncInit.idrbb).mouseenter();
		$(FuncInit.idinf).empty();FuncTree.append('PLAY WITH MOUSE for search go top right and left down!!Y GAGN ZOUER POU FE LE RECHERCHE EN HAUT A DROITE EN BAS A GAUCHE','#660066');
		}
}


