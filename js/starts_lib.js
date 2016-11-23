/*!
 * Runsense 97Kafr
 *
 * Copyright 2018, Dalleau Pascal
 *
 */
var bnm=true;var initl='auto';
	if($('#map_canvas').css('width')==='800px'){bnm=false;}
var FI=FI||{};FI={
	dCmp:0,bIni:false,width:$(window).width(),
	tbId:['#jqxTree','#listv','#map_canvas','#panel','#info','#iti','#btn','#pano'],
	anex:["TRAIL","Grand Raid","Trail de Bourbon","La Mascareignes"],
	ptbid:['15JWgv5XJiGI7iqzsLQKOakEniw04ydBtvQYx2M0a'],
	srcZn:[{val:'america',itm:['berkley','Chicago','Toronto']},{val:'africa',itm:[]},{val:'asia',itm:[]},{val:'europa',itm:[]},{val:'oceania',itm:[]},{val:'orient',itm:[]}],	
	srcId:[{label:'america',value:'america',id:'am'},{label:'africa',value:'africa',id:'af'},{label:'asia',value:'asia',id:'as'},{label:'europa',value:'europa',id:'eu'},{label:'oceania',value:'oceania',id:'or'},{label:'orient',value:'orient',id:'or'}],
	initSrch:'',ak:'AIzaSyBwN-ZobOGzBEHQjPZNpb5DmD4z1oTrbF0',src:[],latlng:[],zm:4,bnm:bnm,initl:initl,bstyle:"http://runsense.Re/ryt.png",
	txtInit:["reggae newRoots"/*0*/,
	"ragga dancehall"/*1*/,
	"pop poprock rock hardRock "/*2*/,
	"Hip-Hop"/*3*/,
	"dance electro house"/*4*/,
	"traditional latino zouk classic"/*5*/,
	"http://runsense.Re/img/"/*6*/,
	"http://maps.google.com/mapfiles/kml/shapes/"/*7*/,
	".png"/*8*/,"<span style='background-color: #FFF;'>"/*9*/,
	"</span>"/*10*/,"http://runsense.Re/img/blason/"/*11*/,".gif"/*12*/],
	srcStyle:[],
	tmp:'',
	exturi:function(){
		for(var i=0;i<6;i++){}
		FI.srcStyle=[{label:FI.txtInit[0],value:"sunny"},
	{label:FI.txtInit[1],value:"partly_cloudy"},
	{label:FI.txtInit[2],value:"museum"},
	{label:FI.txtInit[3],value:"bars"},
	{label:FI.txtInit[4],value:"firedept"},
	{label:FI.txtInit[5],value:"parks"},
	{label:FI.srcZn[0].val,value:"#FFD700",lien:""},
	{label:FI.srcZn[1].val,value:"#FFD700",lien:""},
	{label:FI.srcZn[2].val,value:"#FFD700",lien:""},
	{label:FI.srcZn[3].val,value:"#FFD700",lien:""},
	{label:FI.srcZn[4].val,value:"#FFD700",lien:""},
	{label:FI.srcZn[5].val,value:"#FFD700",lien:""}];
			FI.src=[			
			{id:FI.srcZn[0].val,html:"<span title='"+FI.srcZn[0].val+"' style='background-color: #FFF; #8B0000;'>"+FI.srcZn[0].val+"</span> ",
			value:"1zSpljlSAgTTot2X48Mx6yfG9LWjd8aMYUSX1LKLR",items:[]},
			{id:FI.srcZn[1].val,html:"<span title='"+FI.srcZn[1].val+"' style='background-color: #FFF; #8B0000;'>"+FI.srcZn[1].val+"</span> ",
			value:"1dH1duiufLT1S-cRB9wvJxInS_1q66_ZUpdDy3GJJ",items:[]},
			{id:FI.srcZn[2].val,html:"<span title='"+FI.srcZn[2].val+"' style='background-color: #FFF; #8B0000;'>"+FI.srcZn[2].val+"</span> ",
			value:"19E1eFUuxhe0YvoUblrRvFobDSHvWUK4YbYzsQxCm",items:[]},
			{id:FI.srcZn[3].val,html:"<span title='"+FI.srcZn[3].val+"' style='background-color: #FFF; #8B0000;'>"+FI.srcZn[3].val+"</span> ",
			value:"1gKRGL9638tVyUJ5kcVOGRzSqQT-sqYSbkGG7LS6y",items:[]},
			{id:FI.srcZn[4].val,html:"<span title='"+FI.srcZn[4].val+"' style='background-color: #FFF; #8B0000;'>"+FI.srcZn[4].val+"</span> ",
			value:"1Q4qH3_0RnxF3usaZ2Avjtt7W38h4NwTa9gUYQKrI",items:[]},
			{id:FI.srcZn[5].val,html:"<span title='"+FI.srcZn[5].val+"' style='background-color: #FFF; #8B0000;'>"+FI.srcZn[5].val+"</span> ",
			value:"1H1o4IiK5jSJnQh1572OqscGSRRv6K5Do86aKld0W",items:[]}
			];
			FI.refcb();			
		},
	refcb:function(){
		var rfB=[];
		for(var i=0;i<6;i++){
			rfB.push(FI.src[i].value);
		}			
		FI.dCmp=FI.src.length;
		for(var rw=0;rw<6;rw++){
			var queryStr=[];queryStr.push("SELECT id,ref,font,nom,land,lat,lng,date");
			queryStr.push(" FROM  "+rfB[rw]);var sql=encodeURIComponent(queryStr.join(" "));
			$.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback=FI.itmRef&key="+FI.ak,dataType:"jsonp"});
		}	
	},
	itmRef:function(json){
		FI.dCmp=FI.dCmp-1;
		try{FI.handleError(json);}catch(e){;}
		var msk=json["rows"];if(msk&&msk.length==0) msk.push("choice another table");
		var i;		
		$.each(msk,function(){if(this){try{
			if(!isNaN(this[0])){i=Number(this[0]);}else{i=this[0];}var nm=this[3];var tt;if(this[7]){tt=this[7]+' '+this[4];}else{tt=this[4];}
			var val,dt;if(this[1].charAt(0)=='*'){val=this[1]}else{val=this[5]+','+this[6];}try{dt=this[7]+' '+this[4];}catch(e){;}
			FI.src[i].items.push({id:nm,html:"<span title='"+tt+"' style='background-color: #FFF; #8B0000;'>"+nm+"</span> ",value:val,items:[]});
			if(this[2]){FI.srcStyle.push({label:nm.replace(/\W/g,''),value:'',lien:this[2]});}
			
		}catch(e){;}
		}});
		if(FI.dCmp==0){FTr.init();}
	},
	refland:function(json){
		try{FI.handleError(json);}catch(e){;}
		var msk=json["rows"];if(msk.length==0) msk.push("choice another table");
		var i=0;
		$.each(msk,function(){
			$.each(FI.src,function(){FI.src[i].value=this[1];i=i+1;});
			});
		},
	handleError:function(json){
		if(json["error"]!=undefined){
			var error=json["error"]["errors"];console.log("Error in Fusion Table call!");
			for(var row in error){console.log("Domain: "+error[row]["domain"]);console.log(" Reason: "+error[row]["reason"]);console.log(" Message: "+error[row]["message"]);}}},
	init:function(){		
		/*$("#r_tab").change(function (){
			FTr.bms=false;FTa.fsearch(this.value);
			$(FI.tbId[1]).mouseover();});*/
		$(FTr.updBackG).css('background-image', FTr.styles[1]);
		//$(FTr.updBackG).css('background-repeat', 'no-repeat');
		$(FTr.updBackG).css('background-size', '100%');
		$("#fl").bind('click',function(){FM.findMe();});
		/*$(FI.tbId[1]).on("mouseenter",function(){
			if(FI.bnm){$(this).animate({opacity: '0.75',height: '100%',width: '70%'});
			$(FI.tbId[2]).animate({opacity: '0.3'});
			$(FI.tbId[3]).animate({opacity: '0.3'});
			$('body').animate({height: '100% !important',margin: '0px !important',padding: '0px !important'});
			}else{
				$(this).animate({zIndex:'1'});$(FI.tbId[2]).animate({zIndex:'0'});$(FI.tbId[3]).animate({zIndex:'0'});}
			$(FI.tbId[4]).empty();
			FTr.append("<small>&Agrave; r\'tourn Return MAP </small>(A DROITE)","green");
			$(FI.tbId[4]).bind('click',function(){
				if(FI.bnm){
					$(FI.tbId[1]).animate({opacity:'1',height:'15%',width:'100%'});
					$(FI.tbId[2]).animate({opacity:'1'});
					$(FI.tbId[3]).animate({opacity:'1'});
				}else{
					$(FI.tbId[1]).animate({zIndex:'1'});
					$(FI.tbId[2]).animate({zIndex:'0'});
					$(FI.tbId[3]).animate({zIndex:'0'});
			}});
		});
		$(FI.tbId[4]).bind('click',function(){
			if(FI.bnm){
				$(FI.tbId[1]).animate({opacity: '0.75',height: '100%',width: '70%'});
				$(FI.tbId[2]).animate({opacity: '0.3'});
				$(FI.tbId[3]).animate({opacity: '0.3'});
			}else{
				$(FI.tbId[1]).animate({zIndex:'1'});
				$(FI.tbId[2]).animate({zIndex:'0'});
				$(FI.tbId[3]).animate({zIndex:'0'});
		}});*/
		$(FI.tbId[3]).hover(function(){
			$('body').scrollLeft(600);});
		
		
		$(FI.tbId[6]).bind('click',function(){
			$(FI.tbId[7]).empty();
			$(FI.tbId[7]).animate({ width: '0%' });$(FI.tbId[3]).animate({left: '70%'});
			$('small').show();
			$(FI.tbId[4]).empty();$('#dep').val(null);$('#arv').val(null);
			$(FI.tbId[1]).show();
			$(FI.tbId[5]).css('color','blue');$(FI.tbId[5]).css('border-color','#FFFF00');
			$(FI.tbId[5]).css('font-size','15px');$(FI.tbId[5]).css('font-weight','none');
			FM.s=null;FM.e=null;
			$(FI.tbId[6]).hide();FM.initialize();
			$(FI.tbId[1]).show();});
		/*$(FI.tbId[4]).bind('click',function(){
			if(FI.bnm){
				$(FI.tbId[1]).animate({opacity: '1',height: '15%',width: '100%'});
				$(FI.tbId[2]).animate({opacity: '1'});$(FI.tbId[3]).animate({opacity: '1'});
			}else{
				$(FI.tbId[1]).animate({zIndex:'1'});$(FI.tbId[2]).animate({zIndex:'0'});$(FI.tbId[3]).animate({zIndex:'0'});}});*/
			$('#clear').css('color','blue');
			$('#clear').bind('click',function(){
				FI.bIni=false;FM.map_centroid=new google.maps.LatLng(-0,0);
				FTr.zoom=10;			
				$.each(FI.srcZn,function(){var rplc='#'+this.val;$(FI.tbId[0]).jqxTree('collapseItem', $(rplc)[0]);});				
				$(FI.tbId[0]).jqxTree('refresh');FM.polygonTableID=['15JWgv5XJiGI7iqzsLQKOakEniw04ydBtvQYx2M0a'];FM.doSearch();FI.bIni=true;});
				
			$('#find_me').click(function(){
				FM.findMe();return false;});
			$('#dep').click(function(){
				FM.chad='#dep'; return true;});
			$('#arv').click(function(){
				FM.chad='#arv'; return true;});
			$(FI.tbId[2]).mouseover(function(){});
			$(FI.tbId[2]).mouseleave(function(){
			if(map){if(map.getMapTypeId()===google.maps.MapTypeId.ROADMAP){map.setMapTypeId(google.maps.MapTypeId.HYBRID);}else if(map.getMapTypeId()===google.maps.MapTypeId.HYBRID){map.setMapTypeId(google.maps.MapTypeId.SATELLITE);}else{map.setMapTypeId(google.maps.MapTypeId.ROADMAP);}}
			FR.calcRoute();return true;});
		$(FI.tbId[5]).click(function(){
			FR.calcRoute();return true;});
				
				$("#r_theme").jqxComboBox({source:FI.txtInit.slice(0,6),placeHolder: "Music style"});                
                $('#r_theme').bind('select', function (event) {/*
                    var args = event.args;
                    var item = $('#r_theme').jqxComboBox('getItem', args.index);
					FTr.bms=false;var bzn=false;var zns =FI.srcZn;
				for(var z in zns){
					if(zns[z]==FI.tmp){bzn= true;}}
				if(bzn){
					FM.srchOnAll(this.value);
					$(FI.tbId[4]).empty();
					FTa.msg= 'R\'gard champ rouz, &eacute;crits &agrave; o&ugrave;, ou play plus bas!!';
					/*FTr.append(FTa.msg,'red');}
				/*else{
					var ids=FI.srcId;var rplc='#'+FI.tmp+'_';
					rplc=rplc+$(this).val();
					if(FI.bnm){$(FI.tbId[0]).jqxTree('selectItem',$(rplc)[0]);}
					else{FTr.applyMob(rplc);}}*/
                });
				
}};
FI.exturi();
var FTa=FTa||{};var FTa={
	bmrk:false,results:null,idx:0,search:"",list_table:"",lat:'',lng:'',
	slcCol:'',
	msg:"Pour Afficher les donners, cliquer ailleurs!!",
	fsearch:function(s){
		var rplc='#'+s;
		var table=$("#list_table").dataTable();table.fnFilter(s);
		$(rplc).mouseover();},
	displayList:function(json){
		try{FM.handleError(json);}catch(e){;}
		var columns=json["columns"];var rows=json["rows"];		
		var rplc="#"+FM.cpte;FTa.results=$(rplc);
		FTa.results.empty();
		if(rows===null){FTa.results.append("<span class='lead'>No results found</span>");}
		else{FTa.crTb();FTa.cRows(rows);FTa.fnsTb();}
		},
	crTb:function(){
		var rplc="#"+0;FTa.results=$(rplc);
		FTa.results.empty();FTa.list_table="<table class='table' id ='list_table' width="+FI.width+"><tbody>";},
	fshBDD:function(){
		FTa.list_table+="</tbody></table>";
		/*if(FTa.lat!=""&&FTa.lng!=""){			
				FM.map_centroid=new google.maps.LatLng(FTa.lat,FTa.lng);				
				map.setCenter(FM.map_centroid);}*/
		FTa.results.append(FTa.list_table);
		$("#list_table").dataTable({
			"aoColumns":['','','','','','','','',''],
			"sDom":'<"top"pf>rt<"bottom"lip><"clear">',
			"language":{
				"sProcessing":"T ou plane!!",
				"infoEmpty":"La patience reste en vertus!!Wait or complete search!!",
				"zeroRecords":FTa.msg},
			"oSearch":{
				"sSearch":FTa.search},
				"bFilter":true,"bInfo":true,"scrollY":"450px","scrollCollapse":true,"paging":true,"bAutoWidth":false});
		$(".table tbody").on('click','tr',function(){
			
				FM.addSrchMarker.setMap(null);
				var lat=$(this).children('td:nth-child(3)').text();var lng=$(this).children('td:nth-child(4)').text();var nm='#'+$(this).children('td:nth-child(1)').text();
				FTa.search=nm;
				FTa.tabToMap(lat,lng);
				$(FI.tbId[0]).jqxTree('selectItem',$(nm)[0]);
				$(FI.tbId[0]).jqxTree('expandItem',$(nm)[0]);
				$(FI.tbId[2]).focus();
				FTr.zoom=13;FI.bnm=true;
			}).on('mouseover',function(){$('#dataTables_info').focus();	
			}).on('mouseover','tr',function(){
				$(this).css("background","#0404B4");
			}).on('mouseleave','tr',function(){
				$(this).css("background","");
			}).on('mouseover','td',function(){
				$(this).css("background","#B8860B");
				$(this).css("fontSize","180%");}).on('mouseleave','td',function(){
					$(this).css("background","");$(this).css("fontSize","100%");
				});},
	cRows:function(rows){
		try{for(var row in rows){
			var nom=rows[row][1];var ctg='',desc,lk,lat,lng,rdt;
			try{ctg=rows[row][7];rdt=rows[row][9];lat=rows[row][3];lng=rows[row][4];}catch(ex){;}try{desc=rows[row][2];lk=rows[row][8];}catch(ex){;}
			if(rdt){var dt=new Date(rdt);rdt=(Number(dt.getYear())+1900)+'/'+(Number(dt.getMonth())+1)+'/'+dt.getDate();}else{rdt='';}
			if(row<1){FTa.lat=rows[row][3];FTa.lng=rows[row][4];}		
			if(nom!=''){FTa.list_table=FTa.list_table+"<tr id="+nom.replace(/\W/g,'')+"><td >"+nom;
			if(rows[row][5]){FTa.list_table=FTa.list_table+"</td><td >"+ctg+"</td><td >"+rows[row][5]+"</td><td ><b>"+rows[row][6]+"</b><td >"+lk;}
			else{FTa.list_table=FTa.list_table+"</td><td ></td><td ><b></b><td >";}
			FTa.list_table=FTa.list_table+"</td><td >"+desc+"</td><td style='visibility:hidden;' >"+lat+"</td><td style='visibility:hidden;' >"+lng+"</td><td>"+rdt+"</td></tr>";
			}}}finally{FI.bIni=true;}},
	fnsTb:function(){
		FTa.list_table+="</tbody></table>";
		if(FTa.lat!=""&&FTa.lng!=""){			
				FM.map_centroid=new google.maps.LatLng(FTa.lat,FTa.lng);
				map.setCenter(FM.map_centroid);}
		FTa.results.append(FTa.list_table);		
		$("#list_table").dataTable({
			"aoColumns":['','','','','','','',''],//id,nom,dsc,lat,lng,date,land,ref,link,rdt
			"sDom":'<"top"pf>rt<"bottom"><"clear">',
			"order": [[1, "asc"], [7, "desc"]],
			"language":{
				"infoEmpty":"La patience reste en vertus!!Wait and move mouse",
				"zeroRecords":"CLICK on right TREE for Search"
			},
			"bFilter":true,"bInfo":true,"scrollY":"450px","scrollCollapse":true,"paging":true,"bAutoWidth":false});	
			//$("#list_table").fnSort([[7, 'desc']]);
			var b=true;
		$("#list_table.table tbody").on('click','tr',function(){			
				FM.addSrchMarker.setMap(null);
				var nm=$(this).children('td:nth-child(1)').text();var lat=$(this).children('td:nth-child(7)').text();				
				var lng=$(this).children('td:nth-child(8)').text();//var idref=$(this).children('td:nth-child(7)').text();
				var ids=FI.srcId;
			//for(var id in ids){if(ids[id].label===nm){FTa.bmrk=true;nm='#'+idref;}}
			if(!FTa.bmrk){
				ids=FI.srcZn;
				for(var id in ids){if(ids[id].val===nm){FTa.bmrk=true;}}};
			FTa.tabToMap(lat,lng,nm);FTa.bmrk=false;
			nm='#'+nm.replace(/ /g,'');
			$(FI.tbId[0]).jqxTree('selectItem',$(nm)[0]);
			$(FI.tbId[2]).focus();
			$(FI.tbId[0]).jqxTree('expandItem',$(nm)[0]);
			$(FI.tbId[2]).animate({opacity:'0.7'});b=false;
			});$("#list_table.table").on('mouseover',function(){$("body").scrollTop(800);$(FI.tbId[0]).animate({opacity:'0'});if(b){$(FI.tbId[2]).animate({opacity:'0.7'});}
			});$("#list_table.table").on('mouseleave',function(){$(FI.tbId[0]).animate({opacity:'1'});$(FI.tbId[2]).animate({opacity:'1'});$('body').scrollTop(1);
			});$("#list_table.table tbody").on('mouseover','tr',function(){//$(this).css("fontSize","130%");
			});$("#list_table.table tbody").on('mouseleave','tr',function(){$(this).css("fontSize","100%");
			});$("#list_table.table tbody").on('mouseover','td',function(){/*$(this).css("background","#B8860B");*/$(this).css("fontSize","180%");
			});$("#list_table.table tbody").on('mouseleave','td',function(){/*$(this).css("background","");*/$(this).css("fontSize","130%");});},	
	tabToMap:function(lat,lng,str){		
				FM.map_centroid=new google.maps.LatLng(lat,lng);
				map.setCenter(FM.map_centroid);
				if(FTr.zoom==2){FTr.zoom=4;}else{FTr.zoom=7;}
				map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
				map.setZoom(FTr.zoom);
				/*if(FI.bnm){$(FI.tbId[1]).animate({opacity:'0.3',height:'30%'});$(FI.tbId[2]).animate({opacity:'1'});}
				else{$(FI.tbId[1]).animate({zIndex:'0'});$(FI.tbId[2]).animate({zIndex:'1'});$(FI.tbId[3]).animate({zIndex:'1'});}*/
				FM.chad='#arv';FM.addrFromLatLng(FM.map_centroid);
				FTa.fsearch(str);
				if(!FTa.bmrk){
					var ad=$(FM.chad).val();
					var infowindow=new google.maps.InfoWindow({content:str+'</br>'+ad});
					FM.addSrchMarker=new google.maps.Marker({position:FM.map_centroid,map:map,animation:google.maps.Animation.BOUNCE ,title:ad});
					FM.addSrchMarker.addListener('click',function(){infowindow.open(map, FM.addSrchMarker);});}}}
var FR=FR||{};var FR={
	directionsDisplay:new google.maps.DirectionsRenderer(),
	directionsService:new google.maps.DirectionsService(),
	calcRoute:function(){
		$(FI.tbId[4]).empty();$(FI.tbId[4]).show();
		if(FM.e!==null){
			var request={origin:FM.s,destination:FM.e,travelMode:google.maps.TravelMode.DRIVING};
			FR.directionsService.route(request,function(response,status){
				if(status==google.maps.DirectionsStatus.OK){
					FR.directionsDisplay.setDirections(response);
					FM.zoom(map);$(FI.tbId[4]).empty();
					FR.directionsDisplay.setPanel(document.getElementById('pano'));
					$('small').hide();
					$(FI.tbId[7]).animate({width:'35%'});$(FI.tbId[3]).animate({left:'100%'});
					$(FI.tbId[1]).hide();$(FI.tbId[6]).show();
				}else{
					$(FI.tbId[4]).empty();
					$(FI.tbId[4]).append("<h1>Y GAGN PA t&EGRAVE;r l&AGRAVE!!(UNKNOW ADRESSE)</h1>");
					$(FI.tbId[4]).css("color","#000");$(FI.tbId[4]).css("background-color","red");
				}});
				FM.doSearch();
}}};
var FTr=FTr||{};var FTr={
	re:'',bchk:false,bgrow:true,bms:true,updBackG:"body",
	styles:["info",FI.bstyle],zoom:2,rvzoom:4,
	theme:[{label:'general',value:''},{label:FI.txtInit[0],value:'r'},{label:FI.txtInit[1],value:'d'},{label:FI.txtInit[2],value:'h'},{label:FI.txtInit[3],value:'p'},{label:FI.txtInit[4],value:'c'},{label:FI.txtInit[5],value:'t'}],
	applyChild:function(items){
		for(var i in items){FTr.chkItm(items[i]);}},
	chkItm:function(elmt){
		var rplc='#'+elmt.id;$(FI.tbId[0]).jqxTree('checkItem',$(rplc)[0],true);},
	slcItm:function(txt){
		var rplc='#'+txt;return $(FI.tbId[0]).jqxTree('selectItem',$(rplc)[0],true);},
	applysrch:function(i){
		var tmp=FI.ptbid;var stmp=FTr.styles;
		FI.ptbid=new Array();FTr.styles=new Array();
		try{FI.ptbid.push(i.value);			
		var u=FTr.chStyle(i.label.replace(' ',''));FTr.styles.push(u);
		 u=FTr.chURL(i.label);if(u){FTr.styles.push(u);}else{FTr.styles.push(FI.bstyle);}
		}catch(e){FI.ptbid=tmp;FTr.styles=stmp;}},
	applyMob:function(rplc){
		var tmp=FI.ptbid;var stmp=FTr.styles;
		FI.ptbid=new Array();FTr.styles=new Array();
		try{rplc=rplc.replace(/#/g,'');var src=FTr.src;
			for(var c in src){if(src[c].id==rplc){
				var i=src[c];i.html=i.html.split('>')[1].split('<')[0];
				FI.ptbid.push(i.value);FTr.styles.push(FTr.chStyle(i.html));
				var u=FTr.chURL(i.html);
			if(u){FTr.styles.push(u);}
			else{FTr.styles.push(FI.bstyle);}
		}}}catch(e){
			FI.ptbid=tmp;FTr.styles=stmp;}
		FM.doSearch();},
	chStyle:function(l){var rslt;
		for(var i=0;i<FI.srcStyle.length;i++){if(FI.srcStyle[i].label===l){rslt=FI.srcStyle[i].value;}}return rslt;},
	chURL:function(l){var rslt;
		for(var i=0;i<FI.srcStyle.length;i++){if(FI.srcStyle[i].label===l){rslt=FI.srcStyle[i].lien;}}return rslt;},
	append:function(txt,color){
		/*$(FI.tbId[4]).append(txt);$(FI.tbId[4]).css("color","white");$(FI.tbId[4]).css("background-color",color);*/},
	selectBox:function(i){
		if(i.id.match('_')===null){
			var itmid=i.id;FI.tmp='';
			var zns=FI.srcZn;
			for(var z in zns){if(zns[z].val==itmid){FI.tmp=itmid;}}
			if(FI.tmp===''){var ids=FI.srcId;for(var id in ids){if(ids[id].label===itmid){FI.tmp=ids[id].id;}}}
			if(FI.tmp==''){FI.tmp=itmid.split('_')[0];}
			FTr.bms=true;
		}else{var slc=i.id.split('_')[1];$("#r_theme").selectBox('value',slc);FTr.bms=false;}},
	init:function(){var w=$(window).width()/3.5;FM.initialize();var exp=true;
		$(FI.tbId[0]).jqxTree({source:FI.src,width:w+'px',height:'600px',theme:'summer'});
		/*$('#exp').jqxExpander({showArrow: false, toggleMode: 'none'});
            $(FI.tbId[0]+" .jqx-tree-item").mouseenter(function (event){
				var itm = event.toElement.parentElement;
				var rplc='#'+itm.id;
				$(FI.tbId[0]).jqxTree('selectItem',$(rplc)[0]);
			});*/
		$(FI.tbId[0]).on('expand',function(ev){
			if(FI.bnm){var e=ev.args.element;
			var i=$(FI.tbId[0]).jqxTree('getItem',e );
			if($(FI.tbId[0]).jqxTree('getItem',e.parentElement.parentElement)!=null){FTr.zoom=10;}
			else{FTr.zoom=4;}
			if(!FTr.bgrow&&exp){
				FTr.selectBox(i);FTr.bgrow=true;
				$('small').show();FTr.applysrch(i);FM.doSearch();
				$(FI.tbId[0]).jqxTree('ensureVisible',e);$(FI.tbId[0]).jqxTree('refresh');}else{exp=true;}}});
		$(FI.tbId[0]).on('collapse', function(ev){
			FTr.bms=true;if(!FTr.bgrow){
				FTr.bgrow=true;
				FI.ptbid=new Array();$(FI.tbId[1]).empty();
				FTr.applysrch(null);$('small').hide();FTr.zoom=4;FM.doSearch();}});
		$(FI.tbId[0]).bind('select',function(ev){
			ev.stopPropagation();
			var a=ev.args;var e=a.element;
			var tLi=$(e).find("li").length>=1;
			if(tLi){FTr.bms=true;}
			var i=$(FI.tbId[0]).jqxTree('getItem',e);
			var spl=FTa.slcCol.split(',');
			var v=i.value;
			var tstref=v.charAt(0)=='*';			
			if(tLi||tstref){
				FTr.re=e;exp=false;
				FTr.selectBox(i);
				FTr.applysrch(i);
				try{var rplc="#"+i.id;$(FI.tbId[0]).jqxTree('expandItem',$(rplc)[0]);}catch(ex){;}	
				if(tstref){FI.ptbid=[v.substring(1)];}else{FI.ptbid=[v];}FM.doSearch();}
			else{var h=i.html;FTr.styles=new Array();FTr.styles.push(FTr.chStyle(h));var u=FTr.chURL(h);if(u){FTr.styles[1]=u;}
				var spl=v.split(',');FTa.tabToMap(spl[0],spl[1],i.id);}				
				});	                
		}};
		

var FM=FM||{};var FM={
	colSrch:'description',s:null,e:null,cpte:0,chad:'',datajson:['',''],
	geocoder:new google.maps.Geocoder(),
	polygonTableID:[],polygon:new Array(),
	locationColumn:"lat",
	map_centroid:new google.maps.LatLng(0,0),
	locationScope:"reunion",defaultZoom:FI.zm,row:[],
	addSrchMarker:new google.maps.Marker(),
	h:34,p:10,
	/*strVw:new google.maps.StreetViewPanorama(document.getElementById("map_canvas"),{
		position: FM.map_centroid,pov:{heading:34,pitch:10}}),*/
	initialize:function(){
		try{FM.geocoder=new google.maps.Geocoder();
		FR.directionsDisplay=new google.maps.DirectionsRenderer();
		}catch(e){;}
		var myOptions={zoom:FM.defaultZoom,center:FM.map_centroid,mapTypeId:google.maps.MapTypeId.ROADMAP,styleId:2,templateId:1};
		map=new google.maps.Map($("#map_canvas")[0],myOptions);		
		//map.setStreetView(FM.strVw);
		google.maps.event.addListener(map,"click",function(event){FM.clickmap(event);});
		google.maps.event.addDomListener(window,'resize',function(){
			map.setCenter(FM.map_centroid); map.setZoom(FTr.zoom);});
		try{FR.directionsDisplay.setMap(map);}catch(e){;}
		google.maps.event.addListener(map,'mouseover',function(event){
			FTr.rvzoom=map.getZoom();map.setZoom(FTr.zoom);});
		FM.doSearch();		
		
			/*if(typeof google !=='object'&&typeof google.maps !=='object'){FM.initialize();};*/google.maps.visualRefresh=true;
		//try{if(map.features.gm_bindings_==undefined)FM.initialize();}catch(e){window.location.reload();}
		},
	doSearch:function(location){
		FTr.bgrow=false;FM.clearSearch();
		FM.polygonTableID=FI.ptbid;FM.polygon=new Array();
		try{
			var tl=FM.polygonTableID.length;map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
			for(var i=0;i<tl;i++){
				var stl=FTr.styles[i];
				//if(stl=="dining"||stl=="star"){map.setMapTypeId(google.maps.MapTypeId.HYBRID);}
				var layer=new google.maps.FusionTablesLayer({
					query:{from:FM.polygonTableID[i],select: "geometry"},
					styles:[{markerOptions:{iconName: stl,},polygonOptions:{fillColor:stl,fillOpacity:0.4,strokeColor:"#FFFFF0",strokeWeight:"int"},
					polylineOptions:{strokeColor:stl,strokeWeight:"int"}},]});
				try{
					var chcmp=FTr.styles[i+1];
					if(chcmp.charAt(0)!='#'&&chcmp!='NO'){
						$(FTr.updBackG).css('background-image', 'url(' + chcmp+ ')');
						if(FI.bnm){
							$(FTr.updBackG).css('background-repeat', 'no-repeat');$(FTr.updBackG).css('background-size', '100%');
					}}else{$(FTr.updBackG).css('background-image', 'url("+FI.bstyle+")');}
				if(stl.charAt(0)!='#'){$(FI.tbId[3]).css('border-color',stl);}
				FTr.styles=new Array();
				}finally{
					google.maps.event.addListener(layer, 'click',function(e){
						FM.anLayer(e);});
					FM.polygon.push(layer);FM.polygon[i].setMap(map);
		}}}catch(e){;}finally{			
			var anex=FI.anex;for(var a in anex){if(FI.tmp===anex[a]){map.setZoom(10);}}}
			FM.getList();},
	anLayer:function(e){
		if(!FTr.bchk&&!FTr.bgrow){
			var s=e.infoWindowHtml.split('<b>nom:</b> ')[1].split('<br>')[0];
			FTr.bchk=true;FTa.fsearch(s);
			var rplc='#'+s.replace(/\W/g,'');
			console.log(rplc);$(FI.tbId[0]).jqxTree('selectItem',$(rplc)[0]);
			FM.chad='#arv';/* FM.addrFromLatLng(e.latLng);*/FTr.bchk=false;return s;}},
	findMe:function(){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(function(position){
				fl=new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
				FM.chad='#dep';FM.addrFromLatLng(fl);map.setCenter(fl);},null);
		}else{/*FTr.append('Lo l\'action fo config!!Configurate your Position','red');*/}},
	getSearch:function(value){
		var callback="FM.addrow";
		var queryStr=[];queryStr.push("SELECT " + FTa.slcCol);
		queryStr.push(" FROM "+value);queryStr.push(" WHERE "+FM.colSrch+" CONTAINS '"+FTa.search+"' ");
		var sql=encodeURIComponent(queryStr.join(" "));
		$.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback="+callback+"&key="+FI.ak, dataType: "jsonp"});},
	query:function(slcCol,limit,callback){
			for(var i in FM.polygonTableID){
				if(FM.polygonTableID[i]!="NO"){					
					FM.cpte=i;$(FI.tbId[1]).append("<div title='Information table' id="+i+" style='background-color: #FFFFFF;'/>");					
					var sql="SELECT "+slcCol+" FROM "+FM.polygonTableID[i];						
					$.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback="+callback+"&key="+FI.ak,dataType:"jsonp"});
				}else{
					$(FI.tbId[1]).empty();$(FI.tbId[1]).append("<div  id="+i+" style='background-color: #FF0000;>NO DATA</div>");}}
			$(FI.tbId[4]).empty();
			/*FTr.append("D\'scend en bas po&ugrave; l&egrave;v lo l'act </br> (GO ON TRANSPARENT  left down panel)","blue");*/},
	addrFromLatLng:function(latLngPoint){
		try{
		FM.geocoder.geocode({'latLng':latLngPoint},function(results, status){
			if(status===google.maps.GeocoderStatus.OK){
				if(results.length>1){$(FM.chad).val(results[0].formatted_address.split(',')[0]+','+results[1].formatted_address);}
				else{$(FM.chad).val(results[0].formatted_address);}
				if(FM.chad=='#dep'){FM.s=results[0].formatted_address;$(FI.tbId[5]).css('font-size','20px');$(FI.tbId[5]).css('font-weight','bold');}
		else{FM.e=results[0].formatted_address;$(FI.tbId[5]).css('color','red');$(FI.tbId[5]).css('border-color','green');}}});}catch(e){;}},
	zoom:function(map){
		var bounds=new google.maps.LatLngBounds();
		map.data.forEach(function(feature){
			FM.processPoints(feature.getGeometry(),bounds.extend,bounds);});
		map.fitBounds(bounds);},
	processPoints:function(geometry,callback,thisArg){
		if(geometry instanceof google.maps.LatLng){callback.call(thisArg, geometry);}
		else if(geometry instanceof google.maps.Data.Point){callback.call(thisArg, geometry.get());}
		else{geometry.getArray().forEach(function(g) {FM.processPoints(g, callback, thisArg);});}},
	clickmap:function(pos){
		if(pos!=null){FM.addrFromLatLng(pos.latLng);}
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);},
	clearSearch:function(){
		FM.row=[];FM.polygonTableID=null;
		for(var i=0;i<FM.polygon.length;i++){if(FM.polygon[i] != null){FM.polygon[i].setMap(null); FM.polygon[i]=null;}}
		map.setCenter(FM.map_centroid);map.setZoom(FTr.zoom);},
	getList:function(){FTa.slcCol="id,nom,dsc,lat,lng";if(FI.bIni){FTa.slcCol=FTa.slcCol+",date,land,ref,link,rdt";}FM.query(FTa.slcCol,10,"FTa.displayList");},
	addrow:function(json){
		try{FM.handleError(json);}catch(e){;}
		try{
			var rows=json["rows"];
			for(var r in rows){if(rows[r]!=undefined){
				var rg=[rows[r][4],rows[r][0],rows[r][1],rows[r][2],rows[r][3],rows[r][5]];
				FM.row.push(rg);
		}}}finally{$(FI.tbId[1]).fadeIn('fast');}},
	displayList:function(){
		FM.cpte=0;
		for(var row in FM.row)
			try{
				var ctg=FM.row[row][0];
				if(ctg.split("http:").length===1){
					var spl=ctg.split("*");var lg=spl.length;
					if(lg===1){
						ctg="<img src='http://runsense.github.io/js/img/ico/"+ctg+".png' style='width:30px;height:30px'></img>";
					}else{
						ctg='';
						for(var i in spl){ctg=ctg+"<img src='http://runsense.github.io/js/img/ico/"+spl[i]+".png' style='width:15px;height:30px'></img>";}
				}}else ctg="<img src='"+ctg+"' style='width:30px;height:30px'></img>";
				FTa.lat=FM.row[row][3];
				FTa.lng=FM.row[row][4];					
				FTa.list_table+="<tr><td> "+ctg+"</td><td>"+FM.row[row][1]+"</td><td>"+FM.row[row][2]+"</td><td style='color:blue;width:20px;' >"+FM.row[row][3]+"</td><td style='color:blue;width:20px;'>"+FM.row[row][4]+"</td><td style='visibility:hidden;'>"+FM.row[row][5]+"</td></tr>";
			}catch(e){;}},
	handleError:function(json){
		if(json["error"]!=undefined){
			var error=json["error"]["errors"];console.log("Error in Fusion Table call!");
			for(var row in error){
				console.log("Domain: "+error[row]["domain"]);
				console.log(" Reason: "+error[row]["reason"]);console.log(" Message: "+error[row]["message"]);}}}};