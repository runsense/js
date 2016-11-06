/*!
 * Runsense 97Kafr
 *
 * Copyright 2018, Dalleau Pascal
 *
 */
var bnm=true;var initl='auto';
	if($('#map_canvas').css('width')==='800px'){bnm=false;}
var FuncInit=FuncInit||{};var FuncInit={
	dCmp:0,bIni:false,	
	anex:["TRAIL","Grand Raid","Trail de Bourbon","La Mascareignes"],
	ptbid:['15JWgv5XJiGI7iqzsLQKOakEniw04ydBtvQYx2M0a'],
	srcZn:[{val:'america',itm:[]},{val:'africa',itm:[]},{val:'asia',itm:[]},{val:'europa',itm:[]},{val:'oceania',itm:[]},{val:'orient',itm:[]}],	
	srcId:[{label:'america',value:'america',id:'am'},{label:'africa',value:'africa',id:'af'},{label:'asia',value:'asia',id:'as'},{label:'europa',value:'europa',id:'eu'},{label:'oceania',value:'oceania',id:'or'},{label:'orient',value:'orient',id:'or'}],
	initSrch:'',ak:'AIzaSyBwN-ZobOGzBEHQjPZNpb5DmD4z1oTrbF0',src:[],latlng:[],zm:4,bnm:bnm,initl:initl,idtree:"#jqxTree",idtab:"#listv",idmap:"#map_canvas",idp:"#panel",idinf:"#info",iditi:"#iti",idbtn:"#btn",idsup:"#pano",idrbb:"#r_bdd",bstyle:"http://runsense.Re/ryt.png",
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
		FuncInit.srcStyle=[{label:FuncInit.txtInit[0],value:"sunny"},
	{label:FuncInit.txtInit[1],value:"partly_cloudy"},
	{label:FuncInit.txtInit[2],value:"museum"},
	{label:FuncInit.txtInit[3],value:"bars"},
	{label:FuncInit.txtInit[4],value:"firedept"},
	{label:FuncInit.txtInit[5],value:"parks"},
	{label:FuncInit.srcZn[0].val,value:"",lien:""},
	{label:FuncInit.srcZn[1].val,value:"",lien:""},
	{label:FuncInit.srcZn[2].val,value:"",lien:""},
	{label:FuncInit.srcZn[3].val,value:"",lien:""},
	{label:FuncInit.srcZn[4].val,value:"",lien:""},
	{label:FuncInit.srcZn[5].val,value:"",lien:""}];
			FuncInit.src=[			
			{id:FuncInit.srcZn[0].val,html:"<span title='"+FuncInit.srcZn[0].val+"' style='background-color: #FFF; #8B0000;'>"+FuncInit.srcZn[0].val+"</span> ",
			value:"",items:[]},
			{id:FuncInit.srcZn[1].val,html:"<span title='"+FuncInit.srcZn[1].val+"' style='background-color: #FFF; #8B0000;'>"+FuncInit.srcZn[1].val+"</span> ",
			value:"",items:[]},
			{id:FuncInit.srcZn[2].val,html:"<span title='"+FuncInit.srcZn[2].val+"' style='background-color: #FFF; #8B0000;'>"+FuncInit.srcZn[2].val+"</span> ",
			value:"",items:[]},
			{id:FuncInit.srcZn[3].val,html:"<span title='"+FuncInit.srcZn[3].val+"' style='background-color: #FFF; #8B0000;'>"+FuncInit.srcZn[3].val+"</span> ",
			value:"",items:[]},
			{id:FuncInit.srcZn[4].val,html:"<span title='"+FuncInit.srcZn[4].val+"' style='background-color: #FFF; #8B0000;'>"+FuncInit.srcZn[4].val+"</span> ",
			value:"",items:[]},
			{id:FuncInit.srcZn[5].val,html:"<span title='"+FuncInit.srcZn[5].val+"' style='background-color: #FFF; #8B0000;'>"+FuncInit.srcZn[5].val+"</span> ",
			value:"",items:[]}
			];
			FuncInit.srch('FuncInit.refcb');
			
		},
	srch:function(cb){		
		var queryStr=[];queryStr.push("SELECT id,ref,font,nom");
		queryStr.push(" FROM  "+FuncInit.ptbid[0]);var sql=encodeURIComponent(queryStr.join(" "));
		$.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback="+cb+"&key="+FuncInit.ak,dataType:"jsonp"});},
	refcb:function(json){
		try{FuncInit.handleError(json);}catch(e){;}
		var msk=json["rows"];if(msk.length==0) msk.push("choice another table");		
		$.each(msk,function(){
			if(this){var i=Number(this[0]);
			try{FuncInit.src[i].value=this[1];
			FuncInit.srcStyle[i+6].lien=this[2];}catch(e){;}
			}
		});
		FuncInit.dCmp=FuncInit.src.length;
		$.each(FuncInit.src,function(){
			var queryStr=[];queryStr.push("SELECT id,ref,font,nom,land");
			queryStr.push(" FROM  "+this.value);var sql=encodeURIComponent(queryStr.join(" "));
			$.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback=FuncInit.itmRef&key="+FuncInit.ak,dataType:"jsonp"});
		});
		
	},
	itmRef:function(json){
		FuncInit.dCmp=FuncInit.dCmp-1;
		try{FuncInit.handleError(json);}catch(e){;}
		var msk=json["rows"];if(msk&&msk.length==0) msk.push("choice another table");
		var i;		
		$.each(msk,function(){if(this){try{
			if(!isNaN(this[0])){i=Number(this[0]);}var nm=this[3];
			FuncInit.src[i].items.push({id:nm,html:"<span title='"+nm+"' style='background-color: #FFF; #8B0000;'>"+nm+"</span> ",value:this[1],items:[]});
			FuncInit.srcStyle.push({label:nm,value:'',lien:this[2]});
			if(this[4])
			FuncInit.srcZn[i].itm.push(this[4]);
		}catch(e){;}
		}});
		if(FuncInit.dCmp==0){FuncTree.init();}
	},
	refland:function(json){
		try{FuncInit.handleError(json);}catch(e){;}
		var msk=json["rows"];if(msk.length==0) msk.push("choice another table");
		var i=0;
		$.each(msk,function(){
			$.each(FuncInit.src,function(){FuncInit.src[i].value=this[1];i=i+1;});
			});
		},
	handleError:function(json){
		if(json["error"]!=undefined){
			var error=json["error"]["errors"];console.log("Error in Fusion Table call!");
			for(var row in error){console.log("Domain: "+error[row]["domain"]);console.log(" Reason: "+error[row]["reason"]);console.log(" Message: "+error[row]["message"]);}}},
	init:function(){		
		$("#r_tab").change(function (){
			FuncTree.bms=false;FuncTab.fsearch(this.value);
			$(FuncInit.idtab).mouseover();});
		$(FuncTree.updBackG).css('background-image', FuncTree.styles[1]);
		$(FuncTree.updBackG).css('background-repeat', 'no-repeat');
		$(FuncTree.updBackG).css('background-size', '100%');
		$("#fl").bind('click',function(){MapsLib.findMe();});
		/*$(FuncInit.idtab).on("mouseenter",function(){
			if(FuncInit.bnm){$(this).animate({opacity: '0.75',height: '100%',width: '70%'});
			$(FuncInit.idmap).animate({opacity: '0.3'});
			$(FuncInit.idp).animate({opacity: '0.3'});
			$('body').animate({height: '100% !important',margin: '0px !important',padding: '0px !important'});
			}else{
				$(this).animate({zIndex:'1'});$(FuncInit.idmap).animate({zIndex:'0'});$(FuncInit.idp).animate({zIndex:'0'});}
			$(FuncInit.idinf).empty();
			FuncTree.append("<small>&Agrave; r\'tourn Return MAP </small>(A DROITE)","green");
			$(FuncInit.idinf).bind('click',function(){
				if(FuncInit.bnm){
					$(FuncInit.idtab).animate({opacity:'1',height:'15%',width:'100%'});
					$(FuncInit.idmap).animate({opacity:'1'});
					$(FuncInit.idp).animate({opacity:'1'});
				}else{
					$(FuncInit.idtab).animate({zIndex:'1'});
					$(FuncInit.idmap).animate({zIndex:'0'});
					$(FuncInit.idp).animate({zIndex:'0'});
			}});
		});*/
		$(FuncInit.idinf).bind('click',function(){
			if(FuncInit.bnm){
				$(FuncInit.idtab).animate({opacity: '0.75',height: '100%',width: '70%'});
				$(FuncInit.idmap).animate({opacity: '0.3'});
				$(FuncInit.idp).animate({opacity: '0.3'});
			}else{
				$(FuncInit.idtab).animate({zIndex:'1'});
				$(FuncInit.idmap).animate({zIndex:'0'});
				$(FuncInit.idp).animate({zIndex:'0'});
		}});
		$(FuncInit.idp).hover(function(){
			if(FuncInit.bnm){
				$(FuncInit.idtab).animate({opacity: '1',height: '15%',width: '100%'});
				$(FuncInit.idmap).animate({opacity: '1'});
				$(FuncInit.idp).animate({opacity: '1'});
			}else{
				$(FuncInit.idtab).animate({zIndex:'1'});
				$(FuncInit.idmap).animate({zIndex:'0'});
				$(FuncInit.idp).animate({zIndex:'0'});
		}});
		$("#rtrm").click(function(){
			if(FuncInit.bnm){
				$(FuncInit.idtab).animate({opacity: '1',height: '15%',width: '100%'});
				$(FuncInit.idmap).animate({opacity: '1'});$(FuncInit.idp).animate({opacity: '1'});
		}});
		$(FuncInit.idrbb).change(function(){
			FuncTree.bms=false;FuncTree.bms=false;
			MapsLib.colSrch="description";
			MapsLib.srchOnAll(this.value);
			$(FuncInit.idinf).empty();
			FuncTab.msg= 'BOUZ For see, move mouse!!';
			FuncTree.append(FuncTab.msg,'red');});
		$(FuncInit.idrbb).mouseleave(function(){
			FuncTab.crTb();MapsLib.displayList();
			FuncTab.fshBDD();FuncTab.search='';});
		$(FuncInit.idp).focus(function(){
			FuncTab.crTb();MapsLib.displayList();
			FuncTab.fshBDD();FuncTab.search='';
		}).blur(function(){
			FuncTab.crTb();MapsLib.displayList();
			FuncTab.fshBDD();FuncTab.search='';});
		$(FuncInit.idrbb).click(function(){
			$(FuncInit.idinf).empty();FuncTab.msg= 'Bouz en bas Move down on transparent!!';
			FuncTree.append(FuncTab.msg,'blue');});
		$(FuncInit.idbtn).bind('click',function(){
			$(FuncInit.idsup).empty();
			$(FuncInit.idsup).animate({ width: '0%' });$(FuncInit.idp).animate({left: '70%'});
			$('small').show();
			$(FuncInit.idinf).empty();$('#dep').val(null);$('#arv').val(null);
			$(FuncInit.idtab).show();
			$(FuncInit.iditi).css('color','blue');$(FuncInit.iditi).css('border-color','#FFFF00');
			$(FuncInit.iditi).css('font-size','15px');$(FuncInit.iditi).css('font-weight','none');
			MapsLib.s=null;MapsLib.e=null;
			$(FuncInit.idbtn).hide();MapsLib.initialize();
			$(FuncInit.idtab).show();});
		$(FuncInit.idinf).bind('click',function(){
			if(FuncInit.bnm){
				$(FuncInit.idtab).animate({opacity: '1',height: '15%',width: '100%'});
				$(FuncInit.idmap).animate({opacity: '1'});$(FuncInit.idp).animate({opacity: '1'});
			}else{
				$(FuncInit.idtab).animate({zIndex:'1'});$(FuncInit.idmap).animate({zIndex:'0'});$(FuncInit.idp).animate({zIndex:'0'});}});
			$('#clear').css('color','blue');
			$('#clear').bind('click',function(){
				MapsLib.map_centroid=new google.maps.LatLng(-0,0);
				FuncTree.zoom=10;MapsLib.doSearch();
				$(FuncInit.idtree).jqxTree('collapseAll');
				$(FuncInit.idtree).jqxTree('refresh');});
			$('#find_me').click(function(){
				MapsLib.findMe();return false;});
			$('#dep').click(function(){
				MapsLib.chad='#dep'; return true;});
			$('#arv').click(function(){
				MapsLib.chad='#arv'; return true;});
			$(FuncInit.idmap).mouseleave(function(){
			if(map.getMapTypeId()===google.maps.MapTypeId.ROADMAP){map.setMapTypeId(google.maps.MapTypeId.HYBRID);}
			else if(map.getMapTypeId()===google.maps.MapTypeId.HYBRID){map.setMapTypeId(google.maps.MapTypeId.SATELLITE);}else{map.setMapTypeId(google.maps.MapTypeId.ROADMAP);}
			FuncRoute.calcRoute();return true;});
		$(FuncInit.iditi).click(function(){
			FuncRoute.calcRoute();return true;});
				
				$("#r_theme").jqxComboBox({source:FuncInit.txtInit.slice(0,6),placeHolder: "Music style"});                
                $('#r_theme').bind('select', function (event) {
                    var args = event.args;
                    var item = $('#r_theme').jqxComboBox('getItem', args.index);
					FuncTree.bms=false;var bzn=false;var zns =FuncInit.srcZn;
				for(var z in zns){
					if(zns[z]==FuncInit.tmp){bzn= true;}}
				if(bzn){
					MapsLib.srchOnAll(this.value);
					$(FuncInit.idinf).empty();
					FuncTab.msg= 'R\'gard champ rouz, &eacute;crits &agrave; o&ugrave;, ou play plus bas!!';
					FuncTree.append(FuncTab.msg,'red');}
				else{
					var ids=FuncInit.srcId;var rplc='#'+FuncInit.tmp+'_';
					rplc=rplc+$(this).val();
					if(FuncInit.bnm){$(FuncInit.idtree).jqxTree('selectItem',$(rplc)[0]);}
					else{FuncTree.applyMob(rplc);}}
                });
				
}};
FuncInit.exturi();
var FuncTab=FuncTab||{};var FuncTab={
	bmrk:false,results:null,idx:0,search:"",list_table:"",lat:null,lng:null,
	slcCol:'',
	msg:"Pour Afficher les donners, cliquer ailleurs!!",
	fsearch:function(s){
		var rplc='#'+s.replace(/ /g,'').replace(/'/g,'');
		var table=$("#list_table").dataTable();table.fnFilter(s);
		$(rplc).mouseover();},
	displayList:function(json){
		try{MapsLib.handleError(json);}catch(e){;}
		var columns=json["columns"];var rows=json["rows"];		
		var rplc="#"+MapsLib.cpte;FuncTab.results=$(rplc);
		FuncTab.results.empty();
		if(rows===null){FuncTab.results.append("<span class='lead'>No results found</span>");}
		else{FuncTab.crTb();FuncTab.cRows(rows);FuncTab.fnsTb();}
		},
	crTb:function(){
		var rplc="#"+0;FuncTab.results=$(rplc);
		FuncTab.results.empty();FuncTab.list_table="<table class='table' id ='list_table'><tbody>";},
	fshBDD:function(){
		FuncTab.list_table+="</tbody></table>";
		if(FuncTab.lat!=""&&FuncTab.lng!=""){			
				MapsLib.map_centroid=new google.maps.LatLng(FuncTab.lat,FuncTab.lng);				
				map.setCenter(MapsLib.map_centroid);}
		FuncTab.results.append(FuncTab.list_table);
		$("#list_table").dataTable({
			"aoColumns":[null,null,null,null,null],
			"sDom":'<"top"pf>rt<"bottom"lip><"clear">',
			"language":{
				"sProcessing":"T ou plane!!",
				"infoEmpty":"La patience reste en vertus!!Wait or complete search!!",
				"zeroRecords":FuncTab.msg},
				"bFilter":true,"bInfo":true,"scrollY":"450px","scrollCollapse":true,"paging":true,"bAutoWidth":false});
		$(".table tbody").on('click','tr',function(){
			
				MapsLib.addSrchMarker.setMap(null);
				var lat=$(this).children('td:nth-child(4)').text();var lng=$(this).children('td:nth-child(5)').text();var nm='#'+$(this).children('td:nth-child(0)').text();
				FuncTab.tabToMap(lat,lng);
				$(FuncInit.idtree).jqxTree('selectItem',$(nm)[0]);
				$(FuncInit.idtree).jqxTree('expandItem',$(nm)[0]);
				$(FuncInit.idmap).focus();
				FuncTree.zoom=13;FuncInit.bnm=true;
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
			var nom=rows[row][1];var ctg;var desc;var lat;var lng;var lk;
			try{ctg=rows[row][0];lat=rows[row][3];lng=rows[row][4];}catch(ex){;}try{desc=rows[row][2];lk=rows[row][8];}catch(ex){;}
			if(row<1){FuncTab.lat=rows[row][3];FuncTab.lng=rows[row][4];}			
			FuncTab.list_table=FuncTab.list_table+"<tr id="+nom+"><td >"+nom;
			if(rows[row][5]){FuncTab.list_table=FuncTab.list_table+"</td><td >"+rows[row][5]+"</td><td ><b>"+rows[row][6]+"</b><td >"+lk;}
			FuncTab.list_table=FuncTab.list_table+"</td><td >"+desc+"</td><td style='visibility:hidden;' >"+lat+"</td><td style='visibility:hidden;' >"+lng+"</td></tr>";
		}}finally{FuncInit.bIni=true;}},
	fnsTb:function(){
		FuncTab.list_table+="</tbody></table>";
		if(FuncTab.lat!=""&&FuncTab.lng!=""){			
				MapsLib.map_centroid=new google.maps.LatLng(FuncTab.lat,FuncTab.lng);
				map.setCenter(MapsLib.map_centroid);}
		FuncTab.results.append(FuncTab.list_table);
		var spl=FuncTab.slcCol.split(',');
		$("#list_table").dataTable({
			"aoColumns":spl,
			"sDom":'<"top"pf>rt<"bottom"lip><"clear">',
			"language":{
				"infoEmpty":"La patience reste en vertus!!Wait and move mouse",
				"zeroRecords":"PLAY WITH MOUSE for search go top right and left down!!Y GAGN ZOUER POU FE LE RECHERCHE EN HAUT A DROITE EN BAS A GAUCHE"
			},"oSearch":{
				"sSearch":FuncTab.search},
			"bFilter":true,"bInfo":true,"scrollY":"450px","scrollCollapse":true,"paging":true,"bAutoWidth":false});
		$(".table tbody").on('click','tr',function(){			
				MapsLib.addSrchMarker.setMap(null);
				var nm=$(this).children('td:nth-child(0)').text().replace(/ /g,'');var lat=$(this).children('td:nth-child(4)').text();
				var lng=$(this).children('td:nth-child(5)').text();//var idref=$(this).children('td:nth-child(7)').text();
				var ids=FuncInit.srcId;
			//for(var id in ids){if(ids[id].label===nm){FuncTab.bmrk=true;nm='#'+idref;}}
			if(!FuncTab.bmrk){
				ids=FuncInit.srcZn;
				for(var id in ids){if(ids[id]===nm){FuncTab.bmrk=true;nm='#'+nm;}}};
			FuncTab.tabToMap(lat,lng);FuncTab.bmrk=false;
			$(FuncInit.idtree).jqxTree('selectItem',$(nm)[0]);
			FuncTree.bchk=false;$(FuncInit.idmap).focus();
		}).on('mouseover','tr',function(){
			$(this).css("background","#0404B4");
		}).on('mouseleave','tr',function(){
			$(this).css("background","");
		}).on('mouseover','td',function(){
			$(this).css("background","#B8860B");$(this).css("fontSize","180%");
		}).on('mouseleave','td',function(){
			$(this).css("background","");$(this).css("fontSize","100%");});},	
	tabToMap:function(lat,lng){
		if(lat>-22){
			if(lng<55.8){
				MapsLib.map_centroid=new google.maps.LatLng(lat,lng);
				map.setCenter(MapsLib.map_centroid);
				if(FuncTree.zoom!=10){FuncTree.zoom=16;}
				map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
				map.setZoom(FuncTree.zoom);
				if(FuncInit.bnm){$(FuncInit.idtab).animate({opacity:'0.3',height:'30%'});$(FuncInit.idmap).animate({opacity:'1'});}
				else{$(FuncInit.idtab).animate({zIndex:'0'});$(FuncInit.idmap).animate({zIndex:'1'});$(FuncInit.idp).animate({zIndex:'1'});}
				MapsLib.chad='#arv';MapsLib.addrFromLatLng(MapsLib.map_centroid);
				if(!FuncTab.bmrk){
					var ad=$(MapsLib.chad).val();
					MapsLib.addSrchMarker=new google.maps.Marker({position:MapsLib.map_centroid,map:map,animation:google.maps.Animation.DROP,title:ad});
			}}
}}}
var FuncRoute=FuncRoute||{};var FuncRoute={
	directionsDisplay:new google.maps.DirectionsRenderer(),
	directionsService:new google.maps.DirectionsService(),
	calcRoute:function(){
		$(FuncInit.idinf).empty();$(FuncInit.idinf).show();
		if(MapsLib.e!==null){
			var request={origin:MapsLib.s,destination:MapsLib.e,travelMode:google.maps.TravelMode.DRIVING};
			FuncRoute.directionsService.route(request,function(response,status){
				if(status==google.maps.DirectionsStatus.OK){
					FuncRoute.directionsDisplay.setDirections(response);
					MapsLib.zoom(map);$(FuncInit.idinf).empty();
					FuncRoute.directionsDisplay.setPanel(document.getElementById('pano'));
					$('small').hide();
					$(FuncInit.idsup).animate({width:'35%'});$(FuncInit.idp).animate({left:'100%'});
					$(FuncInit.idtab).hide();$(FuncInit.idbtn).show();
				}else{
					$(FuncInit.idinf).empty();
					$(FuncInit.idinf).append("<h1>Y GAGN PA t&EGRAVE;r l&AGRAVE!!(UNKNOW ADRESSE)</h1>");
					$(FuncInit.idinf).css("color","#000");$(FuncInit.idinf).css("background-color","red");
				}});
				MapsLib.doSearch();
}}};
var FuncTree=FuncTree||{};var FuncTree={
	bchk:false,bgrow:false,bms:true,updBackG:"body",
	styles:["grocery",FuncInit.bstyle],zoom:2,rvzoom:4,
	theme:[{label:'general',value:''},{label:FuncInit.txtInit[0],value:'r'},{label:FuncInit.txtInit[1],value:'d'},{label:FuncInit.txtInit[2],value:'h'},{label:FuncInit.txtInit[3],value:'p'},{label:FuncInit.txtInit[4],value:'c'},{label:FuncInit.txtInit[5],value:'t'}],
	applyChild:function(items){
		for(var i in items){FuncTree.chkItm(items[i]);}},
	chkItm:function(elmt){
		var rplc='#'+elmt.id;$(FuncInit.idtree).jqxTree('checkItem',$(rplc)[0],true);},
	slcItm:function(txt){
		var rplc='#'+txt;return $(FuncInit.idtree).jqxTree('selectItem',$(rplc)[0],true);},
	applysrch:function(i){
		var tmp=FuncInit.ptbid;var stmp=FuncTree.styles;
		FuncInit.ptbid=new Array();FuncTree.styles=new Array();
		try{FuncInit.ptbid.push(i.value);			
		var u=FuncTree.chStyle(i.label.replace(' ',''));FuncTree.styles.push(u);
		 u=FuncTree.chURL(i.label);if(u){FuncTree.styles.push(u);}else{FuncTree.styles.push(FuncInit.bstyle);}
		}catch(e){FuncInit.ptbid=tmp;FuncTree.styles=stmp;}},
	applyMob:function(rplc){
		var tmp=FuncInit.ptbid;var stmp=FuncTree.styles;
		FuncInit.ptbid=new Array();FuncTree.styles=new Array();
		try{rplc=rplc.replace(/#/g,'');var src=FuncTree.src;
			for(var c in src){if(src[c].id==rplc){
				var i=src[c];i.html=i.html.split('>')[1].split('<')[0];
				FuncInit.ptbid.push(i.value);FuncTree.styles.push(FuncTree.chStyle(i.html));
				var u=FuncTree.chURL(i.html);
			if(u){FuncTree.styles.push(u);}
			if(u){FuncTree.styles.push(u);}
			else{FuncTree.styles.push(FuncInit.bstyle);}
		}}}catch(e){
			FuncInit.ptbid=tmp;FuncTree.styles=stmp;}
		MapsLib.doSearch();},
	chStyle:function(l){var rslt;
		for(var i=0;i<FuncInit.srcStyle.length;i++){if(FuncInit.srcStyle[i].label===l){rslt=FuncInit.srcStyle[i].value;}}return rslt;},
	chURL:function(l){var rslt;
		for(var i=0;i<FuncInit.srcStyle.length;i++){if(FuncInit.srcStyle[i].label===l){rslt=FuncInit.srcStyle[i].lien;}}return rslt;},
	append:function(txt,color){
		$(FuncInit.idinf).append(txt);$(FuncInit.idinf).css("color","white");$(FuncInit.idinf).css("background-color",color);},
	selectBox:function(i){
		if(i.id.match('_')===null){
			var itmid=i.id;FuncInit.tmp='';
			$("#r_lieu").selectBox('value',itmid);
			var zns=FuncInit.srcZn;
			for(var z in zns){if(zns[z]==itmid) FuncInit.tmp=itmid;}
			if(FuncInit.tmp===''){var ids=FuncInit.srcId;for(var id in ids){if(ids[id].label===itmid){FuncInit.tmp=ids[id].id;}}}
			if(FuncInit.tmp==''){FuncInit.tmp=itmid.split('_')[0];}
			FuncTree.bms=true;
		}else{var slc=i.id.split('_')[1];$("#r_theme").selectBox('value',slc);FuncTree.bms=false;}},
	init:function(){
		$(FuncInit.idtree).jqxTree({source:FuncInit.src,width:'100%',height:FuncTree.initl,theme:'summer'});
		$(FuncInit.idtree).on('expand',function(ev){
			if(FuncInit.bnm){var e=ev.args.element;
			var i=$(FuncInit.idtree).jqxTree('getItem',e );
			if($(FuncInit.idtree).jqxTree('getItem',e.parentElement.parentElement)!=null){FuncTree.zoom=4;}
			else{FuncTree.zoom=3;}
			if(!FuncTree.bgrow){
				FuncTree.selectBox(i);FuncTree.bgrow=true;
				//$(FuncInit.idtree).jqxTree('checkItem', e, true);
				$('small').show();FuncTree.applysrch(i);MapsLib.doSearch();
				$(FuncInit.idtree).jqxTree('ensureVisible', e);}}});
		$(FuncInit.idtree).on('collapse', function(ev){
			FuncTree.bms=true;if(!FuncTree.bgrow){
				FuncTree.bgrow=true;
				FuncInit.ptbid=new Array();$(FuncInit.idtab).empty();
				FuncTree.applysrch(null);$('small').hide();FuncTree.zoom=4;MapsLib.doSearch();}});
		$(FuncInit.idtree).bind('select',function(ev){
			ev.stopPropagation();
			var a=ev.args;var e=a.element;
			if($(e).find("li").length>1){FuncTree.bms=true;}
			var i=$(FuncInit.idtree).jqxTree('getItem', e);
			var spl=FuncTab.slcCol.split(',');			
			if(i||i.value.length!=spl.length){
				FuncTree.selectBox(i);
				FuncTree.applysrch(i);
						try{var rplc="#"+FuncInit.src[i.id].id;
						$(FuncInit.idtree).jqxTree('expandItem',$(rplc)[0]);}catch(ex){;}	
			FuncInit.ptbid=[i.value];	
				MapsLib.doSearch();				
				}});
		
				
		var source=[];
		$.each(FuncInit.srcZn,function(){var gp=this;var tmp=[];
			$.each(gp.itm,function(){var v=this;var c;$.each(tmp,function(){if(this==v){c=1;}});
				if(c){;}else{source.push({value:v,label:v,group:gp.val});tmp.push(v);}
				});
			});
                $("#r_lieu").jqxComboBox({source:source,selectedIndex:0});                
                $('#r_lieu').bind('select', function (event) {
                    var args = event.args;
                    var item = $('#r_lieu').jqxComboBox('getItem', args.index);
					FuncTree.bms=false;
					$( "#r_theme" ).selectBox('value',"general");
					var rplc ='#'+item.label;$(FuncInit.idtree).jqxTree('selectItem',$(rplc)[0]);
                });
		}};
		google.maps.visualRefresh=true;

var MapsLib=MapsLib||{};var MapsLib={
	colSrch:'description',s:null,e:null,cpte:0,chad:'',datajson:['',''],
	geocoder:new google.maps.Geocoder(),
	polygonTableID:[],polygon:new Array(),
	locationColumn:"lat",
	map_centroid:new google.maps.LatLng(0,0),
	locationScope:"reunion",defaultZoom:FuncInit.zm,row:[],
	addSrchMarker:new google.maps.Marker(),
	h:34,p:10,
	strVw:new google.maps.StreetViewPanorama(document.getElementById("pano"),{
		position: MapsLib.map_centroid,pov:{heading:34,pitch:10}}),
	initialize:function(){
		try{MapsLib.geocoder=new google.maps.Geocoder();
		FuncRoute.directionsDisplay=new google.maps.DirectionsRenderer();
		}catch(e){;}
		var myOptions={zoom:MapsLib.defaultZoom,center:MapsLib.map_centroid,mapTypeId:google.maps.MapTypeId.ROADMAP,styleId:2,templateId:1};
		map=new google.maps.Map($("#map_canvas")[0],myOptions);		
		map.setStreetView(MapsLib.strVw);google.maps.event.addListener(map, "click",function(event){ MapsLib.clickmap(event); });
		google.maps.event.addDomListener(window,'resize',function(){
			map.setCenter(MapsLib.map_centroid); map.setZoom(FuncTree.zoom);});
		try{FuncRoute.directionsDisplay.setMap(map);}catch(e){;}
		google.maps.event.addListener(map,'mouseover',function(event){
			FuncTree.rvzoom=map.getZoom();map.setZoom(FuncTree.zoom);});
		MapsLib.doSearch();		
		if(FuncInit.initSrch!=''){
			MapsLib.colSrch="nom";var srch=FuncInit.initSrch;FuncTree.bms=false;
			$("#r_lieu").val(FuncInit.initl);$("#r_theme").val(FuncInit.initl);
			$(FuncInit.idrbb).val(srch);MapsLib.srchOnAll(srch);
			$(FuncInit.idrbb).focus();
			$(FuncInit.idrbb).mouseenter();
			$(FuncInit.idinf).empty();
			FuncTree.append('PLAY WITH MOUSE for search go top right and left down!!Y GAGN ZOUER POU FE LE RECHERCHE EN HAUT A DROITE EN BAS A GAUCHE','#660066');}},
	doSearch:function(location){
		FuncTree.bgrow=false;MapsLib.clearSearch();
		MapsLib.polygonTableID=FuncInit.ptbid;MapsLib.polygon=new Array();
		try{
			var tl=MapsLib.polygonTableID.length;map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
			for(var i=0;i<tl;i++){
				var stl=FuncTree.styles[i];
				if(stl=="dining"||stl=="star"){map.setMapTypeId(google.maps.MapTypeId.HYBRID);}
				var layer=new google.maps.FusionTablesLayer({
					query:{from:MapsLib.polygonTableID[i],select: "geometry"},
					styles:[{markerOptions:{iconName: stl,},polygonOptions:{fillColor:stl,fillOpacity:0.4,strokeColor:"#FFFFF0",strokeWeight:"int"},
					polylineOptions:{strokeColor:stl,strokeWeight:"int"}},]});
				try{
					var chcmp=FuncTree.styles[i+1];
					if(chcmp.charAt(0)!='#'&&chcmp!='NO'){
						$(FuncTree.updBackG).css('background-image', 'url(' + chcmp+ ')');
						if(FuncInit.bnm){
							$(FuncTree.updBackG).css('background-repeat', 'no-repeat');$(FuncTree.updBackG).css('background-size', '100%');
					}}else{$(FuncTree.updBackG).css('background-image', 'url("+FuncInit.bstyle+")');}
				if(stl.charAt(0)!='#'){$(FuncInit.idp).css('border-color',stl);}
				FuncTree.styles=new Array();
				}finally{
					google.maps.event.addListener(layer, 'click',function(e){
						MapsLib.anLayer(e);});
					MapsLib.polygon.push(layer);MapsLib.polygon[i].setMap(map);
		}}}catch(e){;}finally{			
			MapsLib.getList();$(FuncInit.idmap).focus();var anex=FuncInit.anex;
			for(var a in anex){if(FuncInit.tmp===anex[a]){map.setZoom(10);}}}},
	anLayer:function(e){
		if(!FuncTree.bchk&&!FuncTree.bgrow){
			var s=e.infoWindowHtml.split('<b>nom:</b> ')[1].split('<br>')[0];
			FuncTree.bchk=true;FuncTab.fsearch(s);
			var rplc='#'+s.replace(/ /g,'').replace(/'/g,'');
			console.log(rplc);$(FuncInit.idtree).jqxTree('selectItem',$(rplc)[0]);
			MapsLib.chad='#arv'; MapsLib.addrFromLatLng(e.latLng);FuncTree.bchk=false;return s;}},
	findMe:function(){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(function(position){
				fl=new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
				MapsLib.chad='#dep';MapsLib.addrFromLatLng(fl);map.setCenter(fl);},null);
		}else{FuncTree.append('Lo l\'action fo config!!Configurate your Position','red');}},
	getSearch:function(value){
		var callback="MapsLib.addrow";
		var queryStr=[];queryStr.push("SELECT " + FuncTab.slcCol);
		queryStr.push(" FROM "+value);queryStr.push(" WHERE "+MapsLib.colSrch+" CONTAINS '"+FuncTab.search+"' ");
		var sql=encodeURIComponent(queryStr.join(" "));
		$.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback="+callback+"&key="+FuncInit.ak, dataType: "jsonp"});},
	query:function(slcCol,limit,callback){
			for(var i in MapsLib.polygonTableID){
				if(MapsLib.polygonTableID[i]!="NO"){
					MapsLib.cpte=i;$(FuncInit.idtab).append("<div title='Revenir MAP A DROITE(View MAP RIGHT)' id="+i+" style='background-color: #FFFFFF;'/>");					
					var sql="SELECT "+slcCol+" FROM "+MapsLib.polygonTableID[i];					
					$.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback="+callback+"&key="+FuncInit.ak,dataType:"jsonp"});
				}else{
					$(FuncInit.idtab).empty();$(FuncInit.idtab).append("<div  id="+i+" style='background-color: #FF0000;>NO DATA</div>");}}
			$(FuncInit.idinf).empty();
			FuncTree.append("D\'scend en bas po&ugrave; l&egrave;v lo l'act </br> (GO ON TRANSPARENT  left down panel)","blue");},
	addrFromLatLng:function(latLngPoint){
		/*Sortie lat long console*/console.log(latLngPoint);
		MapsLib.geocoder.geocode({'latLng':latLngPoint},function(results, status){
			if(status===google.maps.GeocoderStatus.OK){
				if(results.length>1){$(MapsLib.chad).val(results[0].formatted_address.split(',')[0]+','+results[1].formatted_address);}
				else{$(MapsLib.chad).val(results[0].formatted_address);}
				if(MapsLib.chad=='#dep'){MapsLib.s=results[0].formatted_address;$(FuncInit.iditi).css('font-size','20px');$(FuncInit.iditi).css('font-weight','bold');}
				else{MapsLib.e=results[0].formatted_address;$(FuncInit.iditi).css('color','red');$(FuncInit.iditi).css('border-color','green');}}});},
	zoom:function(map){
		var bounds=new google.maps.LatLngBounds();
		map.data.forEach(function(feature){
			MapsLib.processPoints(feature.getGeometry(),bounds.extend,bounds);});
		map.fitBounds(bounds);},
	processPoints:function(geometry,callback,thisArg){
		if(geometry instanceof google.maps.LatLng){callback.call(thisArg, geometry);}
		else if(geometry instanceof google.maps.Data.Point){callback.call(thisArg, geometry.get());}
		else{geometry.getArray().forEach(function(g) {MapsLib.processPoints(g, callback, thisArg);});}},
	clickmap:function(pos){
		if(pos!=null){MapsLib.addrFromLatLng(pos.latLng);}
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);},
	clearSearch:function(){
		MapsLib.row=[];MapsLib.polygonTableID=null;
		for(var i=0;i<MapsLib.polygon.length;i++){if(MapsLib.polygon[i] != null){MapsLib.polygon[i].setMap(null); MapsLib.polygon[i]=null;}}
		map.setCenter(MapsLib.map_centroid);map.setZoom(FuncTree.zoom);},
	getList:function(){
	FuncTab.slcCol="id,nom,dsc,lat,lng";if(FuncInit.bIni){FuncTab.slcCol=FuncTab.slcCol+",date,land,ref,link";}MapsLib.query(FuncTab.slcCol, 10, "FuncTab.displayList");},
	srchOnAll:function(txt){
		MapsLib.colSrch="nom";var th=$( "#r_theme" ).val();var li= $("#r_lieu").val();
		if(txt!=''){try{
			FuncTab.search=txt;MapsLib.row=[];MapsLib.cpte= 0;
			var fsrc=FuncInit.src;var bsrc=true;			
			FuncTab.crTb();var ssrcMap=FuncInit.ptbid[0];
			for(var i in fsrc){if(bsrc){
				var src= fsrc[i];var items= src.items;
				for(var j in items){
					if(bsrc){
						var srcMap=items[j];
						if(srcMap.id==li){bsrc=false;}
						var ssimts= items[j].items;
						for(var k in ssimts){
							var ssrcMap=ssimts[k];var spl= ssrcMap.id.split('_')[1];
							if(th!=''){
								if(spl==th){
									MapsLib.getSearch(ssrcMap.value);
							}}else MapsLib.getSearch(ssrcMap.value);
				}}}
				if(src.id==li){bsrc=false;}
			}}}finally{
		MapsLib.displayList();FuncTab.fshBDD();MapsLib.cpte= 0;}}},
	addrow:function(json){
		try{MapsLib.handleError(json);}catch(e){;}
		try{
			var rows=json["rows"];
			for(var r in rows){if(rows[r]!=undefined){
				var rg=[rows[r][4],rows[r][0],rows[r][1],rows[r][2],rows[r][3],rows[r][5]];
				MapsLib.row.push(rg);
		}}}finally{$(FuncInit.idtab).fadeIn('fast');}},
	displayList:function(){
		MapsLib.cpte=0;
		for(var row in MapsLib.row)
			try{
				var ctg=MapsLib.row[row][0];
				if(ctg.split("http:").length===1){
					var spl=ctg.split("*");var lg=spl.length;
					if(lg===1){
						ctg="<img src='http://runsense.github.io/js/img/ico/"+ctg+".png' style='width:30px;height:30px'></img>";
					}else{
						ctg='';
						for(var i in spl){ctg=ctg+"<img src='http://runsense.github.io/js/img/ico/"+spl[i]+".png' style='width:15px;height:30px'></img>";}
				}}else ctg="<img src='"+ctg+"' style='width:30px;height:30px'></img>";
				FuncTab.lat=MapsLib.row[row][3];
				FuncTab.lng=MapsLib.row[row][4];					
				FuncTab.list_table+="<tr><td> "+ctg+"</td><td>"+MapsLib.row[row][1]+"</td><td>"+MapsLib.row[row][2]+"</td><td style='color:blue;width:20px;' >"+MapsLib.row[row][3]+"</td><td style='color:blue;width:20px;'>"+MapsLib.row[row][4]+"</td><td style='visibility:hidden;'>"+MapsLib.row[row][5]+"</td></tr>";
			}catch(e){;}},
	handleError:function(json){
		if(json["error"]!=undefined){
			var error=json["error"]["errors"];console.log("Error in Fusion Table call!");
			for(var row in error){
				console.log("Domain: "+error[row]["domain"]);
				console.log(" Reason: "+error[row]["reason"]);console.log(" Message: "+error[row]["message"]);}}}};


