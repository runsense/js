/*!
 * Runsense 97Kafr
 *
 * Copyright 2018, Dalleau Pascal
 *
 */
 $(window).resize(function(){var h=$(window).height();var offsetTop=105;$('#map').css('height',(h-offsetTop));}).resize();
var bnm=$('#map').css('width')==='800px'?false:true;var initl='auto';
var Z={
	x:["reggae newRoots"/*0*/,"ragga dancehall"/*1*/,"pop poprock rock hardRock "/*2*/,"Hip-Hop"/*3*/,"dance electro house"/*4*/,"traditional latino zouk classic"/*5*/,"http://runsense.Re/img/"/*6*/,"http://maps.google.com/mapfiles/kml/shapes/"/*7*/,".png"/*8*/,"<span style='background-color: #FFF;'>"/*9*/,"</span>"/*10*/,"http://runsense.Re/img/blason/"/*11*/,".gif"/*12*/
,'america'/*13*/,'africa','asia','europa','oceania','orient']
};
var F=F||{};
F={Wi:$(window),tkcr:{},dCmp:0,b:{a:true,b:false,c:false,d:false,e:true,f:true,g:'',h:'',i:''},
W:$(window).width(),H:$(window).height(),ctg:'',tbctg:[],
I:{x:'#jqxTree',t:'#listv',m:'#map',p:'#panel',i:'#info',r:'#iti',b:'#btn',o:'#pano'},
rf:['15JWgv5XJiGI7iqzsLQKOakEniw04ydBtvQYx2M0a'],
srcZn:{america:{val:Z.x[13],itm:['berkley','Chicago','Toronto'],i:0},africa:{val:Z.x[14],itm:[],i:1},asia:{val:Z.x[15],itm:[],i:2},europa:{val:Z.x[16],itm:[],i:3},oceania:{val:Z.x[17],itm:[],i:4},orient:{val:Z.x[18],itm:[],i:5}},
srcId:[{label:Z.x[13],value:Z.x[13],id:'am'},{label:Z.x[14],value:Z.x[14],id:'af'},{label:Z.x[15],value:Z.x[15],id:'as'},{label:Z.x[16],value:Z.x[16],id:'eu'},{label:Z.x[17],value:Z.x[17],id:'or'},{label:Z.x[18],value:Z.x[18],id:'or'}],
initSrch:'',ak:'AIzaSyBGCmv9Ef1ZZ1ZNydPdJL66JHHgA-FNgRE',src:[],latlng:[],zm:4,bnm:bnm,initl:initl,bstyle:"https://external-cdg2-1.xx.fbcdn.net/safe_image.php?d=AQCNzGc2JHFqCuw9&w=487&h=471&url=https%3A%2F%2Fwww.templepurohit.com%2Fwp-content%2Fuploads%2F2015%2F12%2FLord-Bhairav-Incarnation-of-Lord-Shiva-e1450418131966.jpg&_nc_hash=AQC0SFeWHhQoCnwm",
srcStyle:[],tmp:'',
exturi:function(){
	F.srcStyle=[{label:Z.x[0],value:"sunny"},{label:Z.x[1],value:"partly_cloudy"},{label:Z.x[2],value:"museum"},{label:Z.x[3],value:"bars"},{label:Z.x[4],value:"firedept"},{label:Z.x[5],value:"parks"},{label:Z.x[13],value:"#FFD700",lien:""},{label:Z.x[14],value:"#FFD700",lien:""},{label:Z.x[15],value:"#FFD700",lien:""},{label:Z.x[16],value:"#FFD700",lien:""},{label:Z.x[17],value:"#FFD700",lien:""},{label:Z.x[18],value:"#FFD700",lien:""}];
	F.src=[	{id:Z.x[13],html:"<span title='Land of "+Z.x[13]+"' style='background-color: #FFF; #8B0000;'>"+Z.x[13]+"</span> ",value:"1zSpljlSAgTTot2X48Mx6yfG9LWjd8aMYUSX1LKLR",items:[]},{id:Z.x[14],html:"<span title='Land of "+Z.x[14]+"' style='background-color: #FFF; #8B0000;'>"+Z.x[14]+"</span> ",value:"1dH1duiufLT1S-cRB9wvJxInS_1q66_ZUpdDy3GJJ",items:[]},{id:Z.x[15],html:"<span title='Land of "+Z.x[15]+"' style='background-color: #FFF; #8B0000;'>"+Z.x[15]+"</span> ",value:"19E1eFUuxhe0YvoUblrRvFobDSHvWUK4YbYzsQxCm",items:[]},{id:Z.x[16],html:"<span title='Land of "+Z.x[16]+"' style='background-color: #FFF; #8B0000;'>"+Z.x[16]+"</span> ",value:"1gKRGL9638tVyUJ5kcVOGRzSqQT-sqYSbkGG7LS6y",items:[]},{id:Z.x[17],html:"<span title='Land of "+Z.x[17]+"' style='background-color: #FFF; #8B0000;'>"+Z.x[17]+"</span> ",value:"1Q4qH3_0RnxF3usaZ2Avjtt7W38h4NwTa9gUYQKrI",items:[]},{id:Z.x[18],html:"<span title='Land of "+Z.x[18]+"' style='background-color: #FFF; #8B0000;'>"+Z.x[18]+"</span> ",value:"1H1o4IiK5jSJnQh1572OqscGSRRv6K5Do86aKld0W",items:[]}];
	F.refcb();
},
refcb:function(){
	$.each(F.src,function(){
	F.dCmp++;$.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql=SELECT id,ref,font,nom,land,lat,lng,date  FROM  "+this.value+"&callback=F.itmRef&key="+F.ak,dataType:"jsonp"});});},
	itmRef:function(json){
		F.dCmp--;try{F.handleError(json);}catch(e){;}$.each(json["rows"],function(){
		if(this&&this[0]){var nm=String(this[3]);var tt=this[7]?this[7]+' '+this[4]:this[4];
		try{
		F.src[Number(this[0])].items.push({id:nm,html:"<span title='"+tt+"' style='background-color: #FFF; #8B0000;'>"+nm+"</span> ",value:this[1].charAt(0)=='*'?this[1]:this[5]+','+this[6],items:[]});
		}catch(e){;}
		this[2]?F.srcStyle.push({label:nm.replace(/\W/g,''),value:'',lien:this[2]}):'';}});F.dCmp==0?H.init():'';},
ldctg:function(tx,s){var id='#'+$("select#r_theme option:selected").attr('id').replace(/(slc_)/,'');var spl=s.value.split(',');
$(F.I.x).jqxTree('selectItem',$(id)[0]),A.tabToMap(spl[0],spl[1],tx,true);},
cCateg:function(){var s=F.tbctg;var k=Object.keys(F.tkcr);k?$('#lr_ctg').text('TidY by categ'):$('#lr_ctg').text('No categ'),$("#r_ctg").empty(),
jQuery.each(k,function(){$('<option/>',{'value':F.tkcr[this],'text':F.tkcr[this]}).appendTo('#r_ctg');}),$("#r_theme").empty(),
$.each(s,function(){if(this&&typeof this.t=='string'){$('<option/>',{'style':this.style,'value':this.v,'text':this.t,'id':this.id}).appendTo('#r_theme');}}),
$('#r_ctg').on('change',function(){var tx=$("select#r_ctg option:selected").text();
A.fsearch(tx);}).on('mouseover',function(){$(this).addClass('anm');}).on('mouseleave',function(){$(this).removeClass('anm');}),
$('#r_theme').on('change',function(){var tx=$("select#r_theme option:selected").text();
tx=='Info New'?$('#clear').click():F.ldctg(tx,this);}).on('mouseover',function(){$(this).removeClass('anm');}).on('mouseleave',function(){$(this).addClass('anm');});},
handleError:function(json){if(json["error"]!=undefined){var error=json["error"]["errors"];console.log("Error in Fusion Table call!");for(var row in error){console.log("Domain: "+error[row]["domain"]);console.log(" Reason: "+error[row]["reason"]);console.log(" Message: "+error[row]["message"]);}}},
kpe:function(e){
	var x=e.which||e.keyCode;switch(x){case 99:window.open('http://runsense.re/concert.html');return false;case 109:window.open('http://youtube.runsense.re',"_self");return false;case 121:window.open('http://runsense.re/runYT.html',"_self");return false;case 114:window.open('http://runsense.re');return false;case 105:window.open('http://youtube.runsense.re/return.html',"_self");return false;case 104:window.open('http://youtube.runsense.re/runHipHop.html',"_self");return false;case 118:window.open('http://youtube.runsense.re/retour.html',"_self");return false;default:break;}
	}};
	
F.Wi.keypress(F.kpe);
var A=A||{};var A={results:null,idx:0,search:"",list_table:"",lat:'',lng:'',slcCol:'',msg:"Pour Afficher les donners, cliquer ailleurs!!",
fsearch:function(s){var rplc='#'+s;var table=$("#list_table").dataTable();table.fnFilter(s);$(rplc).mouseover();},
displayList:function(json){try{M.handleError(json);}catch(e){;}var columns=json["columns"];var rows=json["rows"];rows.sort(function(a,b){return new Date(a[9]).getTime()-new Date(b[9]).getTime();});var rplc="#"+M.cpte;A.results=$(rplc);A.results.empty();if(rows===null){A.results.append("<span class='lead'>No results found</span>");}else{A.crTb();if(F.b.a){var lgt=rows.length-6;rows.splice(6,lgt);rows.push(['Info New','Info New','Info New','Info New','Info New']);F.b.a=false;}F.tkcr={};A.cRows(rows);A.fnsTb();}},
crTb:function(){var rplc="#"+0;A.results=$(rplc);A.results.empty();
A.list_table="<table class='table' id ='list_table' width="+F.W+"><thead><tr><th id='nom' title='y Di'>Name</th><th id='categ' title='lé kom'>Categ</th><th id='date' title='lé quan'>read Date</th><th id='place' title='Oussa i lé'>Place</th><th></th><th title='Kosa i lé'>Desc</th><th>link</th><th>lat</th><th>Lng</th><th id='lr_th' title='Tidy l'action'>Date for Tidy</th><th>lo font</th></tr></thead><tbody>";},
fshBDD:function(){A.list_table+="</tbody></table>";A.results.append(A.list_table);$("#list_table").dataTable({"aoColumns":['','','','','','','','','',''],"sDom":'<"top"pf>rt<"bottom"lip><"clear">',"language":{"sProcessing":"To Process!!","infoEmpty":"La patience reste en vertus!!Wait or complete search!!","zeroRecords":A.msg},"oSearch":{"sSearch":A.search},"bFilter":true,"bInfo":true,"scrollY":"450px","scrollCollapse":true,"paging":true,"bAutoWidth":false});$(".table tbody").on('click','tr',function(){M.addSrchMarker.setMap(null);var lat=$(this).children('td:nth-child(3)').text();var lng=$(this).children('td:nth-child(4)').text();var nm='#'+$(this).children('td:nth-child(1)').text();A.search=nm;A.tabToMap(lat,lng,nm,false);$(F.I.x).jqxTree('selectItem',$(nm)[0]);$(F.I.x).jqxTree('expandItem',$(nm)[0]);$(F.I.m).focus();H.zoom=8;F.bnm=true;}).on('mouseover','tr',function(){$(this).css("background","#0404B4");}).on('mouseleave','tr',function(){$(this).css("background","");}).on('mouseover','td',function(){$(this).css("background","#B8860B");$(this).css("fontSize","180%");}).on('mouseleave','td',function(){$(this).css("background","");$(this).css("fontSize","100%");});},
cRows:function(rows){try{F.tbctg=[''];for(var row in rows){var rw=rows[row];var nom=rw[1];var ctg='',desc='',lk='',lat='',lng='',rdt='',font='',tk=rw[8]?"<a href='"+rw[8]+"'>tickets?"+rw[8]+"</a>":'no links';try{rdt=rw[9];lat=rw[3];lng=rw[4];ctg=rw[7];if(rw[7].match(/\*/)){ctg='LAND';rw[6]=null;}font=rw[5];}catch(ex){;}try{desc=rw[2];if(lk){lk=rw[8];}}catch(ex){;}if(rdt){font=rw[10];var dt=new Date(rdt);rdt=(Number(dt.getYear())+1900)+'/'+(Number(dt.getMonth())+1)+'/'+dt.getDate();}else{rdt='';}if(row<1){A.lat=lat;A.lng=lng;}if(nom!=''){A.list_table=A.list_table+"<tr id="+nom.replace(/\W/g,'')+"><td >"+nom;if(rw[6]){A.list_table=A.list_table+"</td><td >"+ctg+"</td><td >"+rw[5]+"</td><td ><b>"+rw[6]+"</b><td >"+lk;}else{A.list_table=A.list_table+"</td><td style='visibility:hidden;width:0px;'></td><td style='visibility:hidden;width:0px;'><b></b><td style='visibility:hidden;width:0px;'></td><td >";}A.list_table=A.list_table+"</td><td >"+desc+"</td><td >"+tk+"</td><td class='bleu' >"+lat+"</td><td class='bleu' >"+lng+"</td><td>"+rdt+"</td><td><img  src='"+font+"' width=50;/></td></tr>";}var id='';var nw=Date.now();if(!F.tkcr[ctg]){F.tkcr[ctg]=ctg;}if(rdt&&new Date(rdt).getTime()<nw){id='background-color:red;color:#FFD700;';}if(rw[6]){F.tbctg.push({t:rw[6],v:lat+','+lng,style:id,id:'slc_'+nom.replace(/\W/g,'')});$('#lr_th').text('TIMING List by place');}else if(rw[1]){F.tbctg.push({t:rw[1],v:lat+','+lng,style:id,id:'slc_'+nom.replace(/\W/g,'')});$('#lr_th').text('Land');}}}finally{F.b.b=true;}},
fnsTb:function(){$('#wait').hide();A.list_table+="</tbody></table>";F.cCateg(F.tbctg),!isNaN(A.lat)&&!isNaN(A.lng)?M.mCd(A.lat,A.lng):'';
A.results.append(A.list_table);$("#list_table").dataTable({"aoColumns":['','','','','','','','','','',''],"sDom":'<"top"pf>rt<"bottom"li><"clear">',"order":[[7,"asc"]],"language":{"infoEmpty":"La patience reste en vertus!!Wait and move mouse","zeroRecords":"CLICK on right TREE for Search"},"bFilter":true,"bInfo":true,"scrollY":"450px","scrollCollapse":true,"paging":true,"bAutoWidth":true});
var b=true;$("#list_table.table tbody").on('click','tr',function(){var nm=$(this).children('td:nth-child(1)').text();if(nm=='Info New'){$('#clear').click();}else{var lat=$(this).children('td:nth-child(7)').text();var lng=$(this).children('td:nth-child(8)').text();/*var chcmp=$(this).children('td:nth-child(10)').text();$(F.I.x).css('background-image', 'url(' +chcmp+ ')');*/var ids=F.srcId;F.b.c=F.srcZn[nm]?true:false;!isNaN(lat)&!isNaN(lng)?A.tabToMap(lat,lng,nm,false):'';F.b.c=false;nm='#'+nm.replace(/ /g,'');$(F.I.x).jqxTree('selectItem',$(nm)[0]);$(F.I.m).focus(),$(F.I.x).jqxTree('expandItem',$(nm)[0]),$(F.I.m).animate({opacity:'0.7'});b=false;}}).on('mouseover','tr',function(){var lat=$(this).children('td:nth-child(7)').text();var lng=$(this).children('td:nth-child(8)').text();!isNaN(lat)&&!isNaN(lng)?M.mCd(lat,lng):'';}).on('mouseover','td',function(){$(this).css("border","5px groove #A00");$(this).css("fontSize","180%");}).on('mouseleave','td',function(){$(this).css("fontSize","130%");});
$("#list_table.table").on('mouseover',function(){if(b){$(F.I.m).animate({opacity:'0.7'});}}),$("#list_table.table").on('mouseleave',function(){$(F.I.m).animate({opacity:'1'});/*$('body').scrollTop(1);*/});},
	tabToMap:function(lat,lng,str,b){
		M.mCd(lat,lng);
		H.zoom=F.b.c?4:7;
		H.rvzoom=H.rvzoom!=H.zoom?H.zoom:H.zoom==4?7:H.zoom==7?9:4;		
		map.setMapTypeId(
			google.maps.MapTypeId.ROADMAP
			),
		map.setZoom(
			H.zoom
			);
		M.chad='#arv';
		M.addrFromLatLng(
			M.map_centroid
			);
		var rplc='#'+str;
		str&&b?{a:A.fsearch(str),b:$(F.I.x).jqxTree('selectItem',$(rplc)[0])}:str?$(F.I.x).jqxTree('selectItem',$(rplc)[0]):'';			
		if(!F.b.c){
			var ad=$(
				M.chad
				).val();
			var infowindow=new google.maps.InfoWindow(
								{
									content:str+'</br>'+ad
								}
			);
			M.addSrchMarker=new google.maps.Marker(
								{
									position:M.map_centroid,
									map:map,
									animation:google.maps.Animation.BOUNCE ,
									title:ad
								}
			);
			M.addSrchMarker.addListener('click',
				function(){
					infowindow.open(
						map,M.addSrchMarker
						);
				}),
			map.setZoom(9);
		}else{
			map.setZoom(5);
		}
	}}
	var R=R||{};var R={directionsDisplay:'',directionsService:'',calcRoute:function(){$(F.I.i).empty(),$(F.I.i).show();if(M.e!==null){var request={origin:M.s,destination:M.e,travelMode:google.maps.TravelMode.DRIVING};R.directionsService.route(request,function(response,status){if(status==google.maps.DirectionsStatus.OK){R.directionsDisplay.setDirections(response),M.zoom(map),$(F.I.i).empty(),R.directionsDisplay.setPanel(document.getElementById('pano')),$('small').hide(),$(F.I.o).animate({width:'35%'}),$(F.I.p).animate({left:'100%'}),$(F.I.t).hide(),$(F.I.b).show();}else{$(F.I.i).empty(),$(F.I.i).append("<h1>Y GAGN PA t&EGRAVE;r l&AGRAVE!!(UNKNOW ADRESSE)</h1>"),$(F.I.i).css("color","#000"),$(F.I.i).css("background-color","red");}});$.ajax({sucess:M.doSearch()});}}};
var M=M||{};var M={p:'',sv:'',colSrch:'description',s:null,e:null,cpte:0,chad:'',datajson:['',''],
geocoder:'',polygonTableID:[],polygon:new Array(),locationColumn:"lat",
map_centroid:'',
locationScope:"reunion",defaultZoom:F.zm,row:[],addSrchMarker:'',h:34,p:10,
mCd:function(l,g){M.map_centroid=new google.maps.LatLng(l,g);map.setCenter(M.map_centroid);M.sv.getPanorama({location:{lat:l,lng:g},radius:500},M.proc)},
proc:function(dt,st){if(st==='OK'){var marker=new google.maps.Marker({position:dt.location.latLng,map:map,title:dt.location.description});M.p.setPano(dt.location.pano),M.p.setPov({heading:270,pitch:0}),M.p.setVisible(true),marker.addListener('click',function(){M.p.setPano(dt.location.pano),M.p.setPov({heading:270,pitch:0}),M.p.setVisible(true);});}},
initialize:function(){M.sv=new google.maps.StreetViewService();R.directionsService=new google.maps.DirectionsService();R.geocoder=new google.maps.Geocoder();M.map_centroid=new google.maps.LatLng(-21.0786953,55.5155754);M.geocoder=new google.maps.Geocoder();R.directionsDisplay=new google.maps.DirectionsRenderer();map=new google.maps.Map($("#map")[0],{zoom:M.defaultZoom,center:M.map_centroid,mapTypeId:google.maps.MapTypeId.ROADMAP,styleId:2,templateId:1});M.p=new google.maps.StreetViewPanorama($('#str')[0],{position:M.map_centroid,pov:{heading:34,pitch:10}});map.setStreetView(M.p),M.p.addListener('position_changed',function(){var positionCell=document.getElementById('position-cell');map.setCenter(M.p.getPosition());}),google.maps.event.addListener(map,"click",function(p){M.clickmap(p);}),google.maps.event.addDomListener(window,'resize',function(){map.setCenter(M.map_centroid),map.setZoom(H.zoom);}),R.directionsDisplay.setMap(map),google.maps.event.addListener(map,'mouseover',function(event){H.zoom=H.zoom==4?7:H.zoom==7?9:H.zoom==9?11:H.zoom==11?13:H.zoom==13?16:4;map.setZoom(H.zoom);}),$.ajax({sucess:M.doSearch()}),$('#r_theme').addClass('anm');google.maps.visualRefresh=true;},
doSearch:function(){
	F.b.e=false;M.clearSearch();M.polygonTableID=F.rf;M.polygon=new Array();
	try{var tl=M.polygonTableID.length;map.setMapTypeId(google.maps.MapTypeId.SATELLITE);for(var i=0;i<tl;i++){var stl=H.styles[i];var layer=new google.maps.FusionTablesLayer({query:{from:M.polygonTableID[i],select: "geometry"},styles:[{markerOptions:{iconName: stl,},polygonOptions:{fillColor:stl,fillOpacity:0.4,strokeColor:"#FFFFF0",strokeWeight:"int"},polylineOptions:{strokeColor:stl,strokeWeight:"int"}}]});try{var chcmp=H.styles[i+1];chcmp.charAt(0)!='#'&&chcmp!='NO'?{a:$(H.updBackG).css('background-image', 'url(' + chcmp+ ')'),b:F.bnm?{a:(H.updBackG).css('background-repeat', 'no-repeat'),b:$(H.updBackG).css('background-size','100%')}:''}:$(H.updBackG).css('background-image', 'url('+F.bstyle+')');stl.charAt(0)!='#'?$(F.I.p).css('border-color',stl):'';H.styles=new Array();}finally{google.maps.event.addListener(layer,'click',function(e){M.anLayer(e);}),M.polygon.push(layer),M.polygon[i].setMap(map);}}}catch(e){;}finally{$.each(F.anex,function(){F.tmp===this?map.setZoom(10):'';});}M.getList();},anLayer:function(e){if(!F.b.d&&!F.b.e){var s=e.infoWindowHtml.split('<b>nom:</b> ')[1].split('<br>')[0];F.b.d=true;A.fsearch(s);var rplc='#'+s.replace(/\W/g,'');$(F.I.x).jqxTree('selectItem',$(rplc)[0]);M.chad='#arv';F.b.d=false;return s;}},findMe:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(position){fl=new google.maps.LatLng(position.coords.latitude,position.coords.longitude);M.chad='#dep';M.addrFromLatLng(fl),map.setCenter(fl);},null):'';},query:function(slcCol,limit,callback){for(var i in M.polygonTableID){if(M.polygonTableID[i]!="NO"){M.cpte=i;$(F.I.t).append("<div title='Information table' id="+i+" style='background-color: #FFFFFF;'/>");var sql="SELECT "+slcCol+" FROM "+M.polygonTableID[i];$.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback="+callback+"&key="+F.ak,dataType:"jsonp"});}else{$(F.I.t).empty();$(F.I.t).append("<div  id="+i+" style='background-color: #FF0000;>NO DATA</div>");}}$(F.I.i).empty();},
addrFromLatLng:function(ll){try{M.geocoder.geocode({'latLng':ll},function(results, status){if(status===google.maps.GeocoderStatus.OK){if(results.length>1){$(M.chad).val(results[0].formatted_address.split(',')[0]+','+results[1].formatted_address);}else{$(M.chad).val(results[0].formatted_address);}if(M.chad=='#dep'){M.s=results[0].formatted_address;$(F.I.r).css('font-size','20px');$(F.I.r).css('font-weight','bold');}else{M.e=results[0].formatted_address;$(F.I.r).css('color','red'),$(F.I.r).css('border-color','green');}}});}catch(e){;}},zoom:function(map){var bounds=new google.maps.LatLngBounds();map.data.forEach(function(feature){M.processPoints(feature.getGeometry(),bounds.extend,bounds);});map.fitBounds(bounds);},processPoints:function(geometry,callback,thisArg){if(geometry instanceof google.maps.LatLng){callback.call(thisArg, geometry);}else if(geometry instanceof google.maps.Data.Point){callback.call(thisArg, geometry.get());}else{geometry.getArray().forEach(function(g) {M.processPoints(g, callback, thisArg);});}},clickmap:function(pos){if(pos!=null){M.sv.getPanorama({location:pos.latLng,radius:500},M.proc),M.addrFromLatLng(pos.latLng);}map.setMapTypeId(google.maps.MapTypeId.HYBRID);},clearSearch:function(){M.row=[];M.polygonTableID=null;for(var i=0;i<M.polygon.length;i++){if(M.polygon[i]!=null){M.polygon[i].setMap(null);M.polygon[i]=null;}}map.setCenter(M.map_centroid),map.setZoom(H.zoom);},getList:function(){A.slcCol="id,nom,dsc,lat,lng";A.slcCol=F.b.b?A.slcCol+",date,land,ref,link,rdt,font":A.slcCol+',font';M.query(A.slcCol,10,"A.displayList");},handleError:function(json){if(json["error"]!=undefined){var error=json["error"]["errors"];console.log("Error in Fusion Table call!");for(var row in error){console.log("Domain: "+error[row]["domain"]);console.log(" Reason: "+error[row]["reason"]);console.log(" Message: "+error[row]["message"]);}}}};
var H=H||{};var H={re:'',updBackG:"body",styles:["info",F.bstyle],zoom:2,rvzoom:4,theme:[{label:'general',value:''},{label:Z.x[0],value:'r'},{label:Z.x[1],value:'d'},{label:Z.x[2],value:'h'},{label:Z.x[3],value:'p'},{label:Z.x[4],value:'c'},{label:Z.x[5],value:'t'}],applysrch:function(i){var tmp=F.rf;var stmp=H.styles;F.rf=new Array();H.styles=new Array();try{F.rf.push(i.value);var u=H.chStyle(i.label.replace(' ',''));H.styles.push(u);u=H.chURL(i.label);if(u){H.styles.push(u);}else{H.styles.push(F.bstyle);}}catch(e){F.rf=tmp;H.styles=stmp;}},applyMob:function(rplc){var tmp=F.rf;var stmp=H.styles;F.rf=new Array();H.styles=new Array();try{rplc=rplc.replace(/#/g,'');var src=H.src;for(var c in src){if(src[c].id==rplc){var i=src[c];i.html=i.html.split('>')[1].split('<')[0];F.rf.push(i.value);H.styles.push(H.chStyle(i.html));var u=H.chURL(i.html);if(u){H.styles.push(u);}else{H.styles.push(F.bstyle);}}}}catch(e){F.rf=tmp;H.styles=stmp;}$.ajax({sucess:M.doSearch()});},chStyle:function(l){var rslt;$.each(F.srcStyle,function(){rslt=this.label===l?this.value:rslt;});return rslt;},chURL:function(l){var rslt;$.each(F.srcStyle,function(){rslt=this.label===l?this.lien:rslt;});return rslt;},
refcb:function(v){F.dCmp++;$.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql=SELECT id,ref,font,nom,land,lat,lng,date FROM  "+v+"&callback=F.itmRef&key="+F.ak,dataType:"jsonp"});},
selectBox:function(i){if(i.id.match('_')===null){var d=i.id;F.tmp='';F.tmp=F.srcZn[d]?d:F.tmp;F.tmp==''?$.each(F.srcId,function(){F.tmp=this.label===d?this.id:F.tmp;}):'';F.tmp=F.tmp==''?d.split('_')[0]:F.tmp;F.b.f=true;}else{$("#r_theme").selectBox('value',i.id.split('_')[1]);F.b.f=false;}},
init:function(){var w=$(window).width()/3.5;var exp=true;$(F.I.x).jqxTree({source:F.src,width:w+'px',height:F.H/2}),
$(F.I.x).on('expand',function(ev){if(F.bnm){var e=ev.args.element;var i=$(F.I.x).jqxTree('getItem',e);H.zoom=$(F.I.x).jqxTree('getItem',e.parentElement.parentElement)!=null?4:7;if(!F.b.e&&exp){F.b.e=true;H.selectBox(i),$('small').show(),H.applysrch(i),$.ajax({sucess:M.doSearch()}),$(F.I.x).jqxTree('ensureVisible',e),$(F.I.x).jqxTree('refresh');}else{exp=true;}}}),
$(F.I.x).on('collapse', function(ev){var a=ev.args;var e=a.element;var i=$(F.I.x).jqxTree('getItem',e);F.b.f=true;if(!F.b.e){F.b.e=true;F.rf=new Array();H.zoom=2;H.applysrch(null),$('small').hide(),H.selectBox(i),H.applysrch(i);F.rf=['15JWgv5XJiGI7iqzsLQKOakEniw04ydBtvQYx2M0a'];F.b.a=true;M.doSearch();}}),
$(F.I.x).bind('select',function(ev){var a=ev.args;var e=a.element;var tLi=$(e).find("li").length>=1;F.b.f=tLi?true:F.b.f;var i=$(F.I.x).jqxTree('getItem',e);var spl=A.slcCol.split(',');var v=i.value;var tstref=v.charAt(0)=='*';if(tLi||tstref){$('#wait').show();H.re=e;exp=false;H.selectBox(i),H.applysrch(i);try{var rplc="#"+i.id;$(F.I.x).jqxTree('expandItem',$(rplc)[0]);}catch(ex){;}F.rf=tstref?[v.substring(1)]:[v];$.ajax({sucess:M.doSearch()});}else{$('wait').show();var h=i.html;H.styles=new Array();H.styles.push(H.chStyle(h));var u=H.chURL(h);var spl=v.split(',');H.styles[1]=u?u:H.styles[1],A.tabToMap(spl[0],spl[1],i.id,false);}}),M.findMe();}};
H.init();
