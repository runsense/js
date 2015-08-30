/*!
 * Runsense 97Kafr
 *
 * Copyright 2018, Dalleau Pascal
 *
 */
//Objet Librairie Variable
var bnm=true;
var initl='auto';
if($('#panel').css('display') == 'none')
	{
		bnm=false;
		initl='250px';
	}
var FuncInit= FuncInit || {};
var FuncInit={
	bnm		:bnm,
	initl	:initl,
	idtree	: "#jqxTree",
	idtab	: "#listv",
	idmap	: "#map_canvas",
	idp		: "#panel",
	idinf	: "#info",
	iditi	: "#iti",
	idbtn	: "#btn",
	txtInit : ["terrain et jeux POOL" //0
				,"sentiers et routes PATH & ROAD"	//1
				,"manger & dormir EAT & SLEEP"		//2
				,"Lieu dit et quartier PLACE & QUARTER"	//3
				,"boite de nuit & pub NIGHT CLUB & FESTIVALS"	//4
				,"loisirs, info marinne ENTERTAINEMENT & SEA INFO"//5
				,"http://runsense.github.io/js/img/"//6
				,"http://maps.google.com/mapfiles/kml/shapes/"//7
				,".png"					//8
				,"<span style='background-color: #FFF;'>"//9
				," </span>"				//10
				,"http://runsense.github.io/js/img/blason/"//11
				,".gif"]//12
				,
	srcZn	:['NORD','OUEST','EST','SUD'],
	srcId 	: [{label:'Mafate',value:'Mafate',id:'Ma'},{label:'Saint-Gilles',value:'Saint-Gilles',id:'SG'},{label:'Saint-Leu',value:'Saint-Leu',id:'SL'},
				{label:'Trois-Bassins',value:'TroisBassins',id:'TB'},{label:'Saint-Paul',value:'Saint-Paul',id:'SPA'},{label:'l Etang Salé',value:'EtangSalé',id:'ES'},{label:'Entre-Deux',value:'Entre-Deux',id:'ED'},{label:'Les Avirons',value:'LesAvirons',id:'AV'},
				{label:'Saint-Pierre',value:'Saint-Pierre',id:'SPI'},{label:'Saint-Joseph',value:'Saint-Joseph',id:'SJ'},{label:'Petite Ile',value:'PetiteIle',id:'PI'},{label:'Saint-Louis',value:'Saint-Louis',id:'SLO'},{label:'Cilaos',value:'Cilaos',id:'CI'},{label:'Tampon',value:'Tampon',id:'T'},{label:'La Plaine des Cafres',value:'LaPlaineDesCafres',id:'PC'},{label:'Volcan' ,value:'enclosduTremblet',id:'ET'},
				{label:'Saint-Phillippe',value:'Saint-Phillippe',id:'SPH'},{label:'Saint-Denis',value:'Saint-Denis',id:'SD'},{label:'Sainte-Marie',value:'Sainte-Marie',id:'SM'},{label:'Sainte-Suzanne',value:'Sainte-Suzanne',id:'SS'},{label:'La Possession',value:'LaPossession',id:'Pos'},{label:'Le Port',value:'LePort',id:'Por'},
				{label:'Bras-Panon',value:'Bras-Panon',id:'BPn'},{label:'Saint-André',value:'Saint-André',id:'SAd'},{label:'Saint-Benoit',value:'Saint-Benoit',id:'SB'},{label:'Sainte-Anne',value:'Sainte-Anne',id:'SAn'},{label:'Sainte-Rose',value:'Sainte-Rose',id:'SR'},{label:'La Plaine des Palmistes',value:'LaPlaineDesPalmistes',id:'PP'},{label:'Salazie',value:'Salazie',id:'SAz'}]
			,
	tmp		:	''
};

//Objet creation tableau de réponse json
/*!
 * Runsense 97Kafr
 *
 * Copyright 2018, Dalleau Pascal
 *
 */
var FuncTab = FuncTab || {};
var FuncTab = {
 results		: null,
 idx			: 0,
 search			: "",
 fsearch		: function(s){var rplc ='#'+s.replace(/ /g,'').replace(/'/g,'');var table= $("#list_table").dataTable();table.fnFilter(s);$(rplc).mouseover();},
 list_table		:"",
 lat			:null,
 lng			:null,
 displayList: function(json) {
	try{MapsLib.handleError(json);}catch( e){ ;}
    var columns = json["columns"];var rows = json["rows"];var rplc="#"+MapsLib.cpte;
    FuncTab.results = $(rplc);FuncTab.results .empty(); 
	if (rows == null) { FuncTab.results.append("<span class='lead'>No results found</span>"); }
    else { FuncTab.crTb(); FuncTab.cRows(rows); FuncTab.fnsTb(); }
},
crTb: function()
{
	var rplc="#"+0;
    FuncTab.results = $(rplc);FuncTab.results .empty(); 
	FuncTab.list_table = "<table class='table' id ='list_table'><tbody>";

},
fshBDD:  function()
{
	
	FuncTab.list_table += "</tbody></table>";
		if(FuncTab.lat!=""&&FuncTab.lng!="") {if(FuncTab.lng<55.8){MapsLib.map_centroid= new google.maps.LatLng(FuncTab.lat,FuncTab.lng);map.setCenter(MapsLib.map_centroid);}}
      FuncTab.results.append(FuncTab.list_table);
	  $("#list_table").dataTable({
			"aoColumns": [null,null,null,null],
			  "sDom": '<"top"pf>rt<"bottom"lip><"clear">',
			  "bFilter": true,"bInfo": true,"scrollY":"450px","scrollCollapse": true,"paging":true,"bAutoWidth": false
			});
	$(".table tbody").on( 'click', 'tr', function (){
				if(!FuncTree.bchk)
				{
					
					var lat = $(this).children('td:nth-child(3)').text();
					var lng = $(this).children('td:nth-child(4)').text();
					FuncTab.tabToMap(lat,lng);
					var ad=$('#arv').val();
					FuncTree.ptbid=new Array();
					MapsLib.doSearch();
					MapsLib.addrMarker = new google.maps.Marker({
						position: MapsLib.map_centroid,
						map: map,
						animation: google.maps.Animation.DROP,
						title:ad
				  });
					$(FuncInit.idmap).focus();
					FuncTree.zoom=13;
				
				FuncInit.bnm=true;
				}
			}).on( 'mouseover', 'tr',
			  function () {
				$(this).css("background","#0404B4");
			  }).on( 'mouseleave', 'tr',
			  function () {
				$(this).css("background","");
			  }
			).on( 'mouseover', 'td', function (){
				$(this).css("background","#B8860B");
				$(this).css("fontSize","180%");
			}).on( 'mouseleave', 'td',
			  function () {
				$(this).css("background","");
				$(this).css("fontSize","100%");
			  }
			);
},
fnsTb: function()
{
	FuncTab.list_table += "</tbody></table>";
		if(FuncTab.lat!=""&&FuncTab.lng!="") {if(FuncTab.lng<55.8){MapsLib.map_centroid= new google.maps.LatLng(FuncTab.lat,FuncTab.lng);map.setCenter(MapsLib.map_centroid);}}
      FuncTab.results.append(FuncTab.list_table);
     $("#list_table").dataTable({
			"aoColumns": [null,null,null,null,null,null],
			  "sDom": '<"top"pf>rt<"bottom"lip><"clear">',
			  "oSearch": {"sSearch": FuncTab.search},
			  "bFilter": true,"bInfo": true,"scrollY":"450px","scrollCollapse": true,"paging":true,"bAutoWidth": false
			});
	$(".table tbody").on( 'click', 'tr', function (){
				if(!FuncTree.bchk)
				{
					FuncTree.bchk=true;
					var nm ='#'+$(this).children('td:nth-child(2)').text().replace(/ /g,'');
					var lat = $(this).children('td:nth-child(5)').text();
					var lng = $(this).children('td:nth-child(6)').text();
					FuncTab.tabToMap(lat,lng);
					$(FuncInit.idtree).jqxTree('selectItem', $(nm)[0]);
					FuncTree.bchk=false;
					$(FuncInit.idmap).focus();
				}
			}).on( 'mouseover', 'tr',
			  function () {
				$(this).css("background","#0404B4");
			  }).on( 'mouseleave', 'tr',
			  function () {
				$(this).css("background","");
			  }
			).on( 'mouseover', 'td', function (){
				$(this).css("background","#B8860B");
				$(this).css("fontSize","180%");
			}).on( 'mouseleave', 'td',
			  function () {
				$(this).css("background","");
				$(this).css("fontSize","100%");
			  }
			);
},
cRows: function(rows)
   {
	for (var row in rows) {
		var ctg = rows[row][0];
        var nom = rows[row][1];
        var desc = rows[row][2];
		 FuncTab.lat = rows[row][3];
		 FuncTab.lng = rows[row][4];
			if(ctg.split("http:").length==1)
				{ var spl= ctg.split("*"); var lg= spl.length; if(lg==1) { ctg="<img src='http://runsense.github.io/js/img/ico/"+ctg+".png' style='width: 30px;height: 30px'></img>"; }else { ctg=''; for(var i in spl) ctg=ctg+"<img src='http://runsense.github.io/js/img/ico/"+spl[i]+".png' style='width: 15px;height: 30px'></img>";}}
			else ctg="<img src='"+ctg+"' style='width: 30px;height: 30px'></img>";
					
        FuncTab.list_table += "\
          <tr id="+nom.replace(/ /g,'').replace(/'/g,'')+">\
			<td >" +ctg + "</td><td >" + nom + "</td><td >" + desc + "</td><td >" +ctg + "</td><td style='color:blue;width:20px;' >" + FuncTab.lat + "</td><td style='color:blue;width:20px;' >" + FuncTab.lng + "</td>\
          </tr>";
      }
},
tabToMap: function(lat,lng) {
		if(lat>-22)
			{
				if(lng<55.8)
				{
					MapsLib.map_centroid = new google.maps.LatLng(lat,lng);
						map.setCenter(MapsLib.map_centroid);
					FuncTree.zoom=16;
						map.setMapTypeId(google.maps.MapTypeId.HYBRID)
						map.setZoom(FuncTree.zoom);
					$(FuncInit.idtab).animate({ opacity: '0.3', height: '30%'});
					$(FuncInit.idmap).animate({ opacity: '1' });
					MapsLib.chad='#arv';
					MapsLib.addrFromLatLng(MapsLib.map_centroid);
				}
			}
	}
}

//Objet Itinéraire Google
/*!
 * Runsense 97Kafr
 *
 * Copyright 2018, Dalleau Pascal
 *
 */
var FuncRoute = FuncRoute || {};
var FuncRoute = {
  directionsDisplay : new google.maps.DirectionsRenderer(),
  directionsService : new google.maps.DirectionsService(),
  calcRoute: function () {
			$(FuncInit.idinf).empty();
			$(FuncInit.idinf).show();
              var start = MapsLib.s;
                var end = MapsLib.e;
			if(end!==null)
			{
				  var request = {
					  origin:start,
					  destination:end,
					  travelMode: google.maps.TravelMode.DRIVING
				  };
				  FuncRoute.directionsService.route(request, function(response, status) {
						
					if (status == google.maps.DirectionsStatus.OK) {
						
					  FuncRoute.directionsDisplay.setDirections(response);
					   MapsLib.zoom(map);
					   $(FuncInit.idinf).empty();
					   FuncRoute.directionsDisplay.setPanel(document.getElementById('info'));
					  
					   $(FuncInit.idtree).hide();
					   $('small').hide();
					   
					   $(FuncInit.idbtn).unbind();
					   
					   $(FuncInit.idbtn).bind('click',function(){
							$(this).hide();
							$(FuncInit.idtree).show();
							$(FuncInit.idinf).hide();
							$('#dep').val(null);$('#arv').val(null);
							MapsLib.s=null;MapsLib.e=null;
							$(FuncInit.idtab).on("mouseenter",function(){
		  
								$(this).animate({
									opacity: '1',
									height: '100%',
									width: '70%'
								});
								$(FuncInit.idmap).animate({
									opacity: '0.3'
								});
								$(FuncInit.idinf).empty();
								FuncTree.append("<small>Revenir MAP (RETURN MAP) </small>(A DROITE)"
								,"green");
							});
							FuncRoute.directionsDisplay = new google.maps.DirectionsRenderer();
							FuncRoute.directionsService = new google.maps.DirectionsService();
							MapsLib.initialize();
							
					});
					   $(FuncInit.idbtn).show();
					   $(FuncInit.idbtn).css("color","red");
					
					   $(FuncInit.idtab).off();
					   
					}else
					{
						$(FuncInit.idinf).empty();
						$(FuncInit.idinf).append("<h1>adresse non reconnu!!(UNKNOW ADRESSE)</h1>");
						$(FuncInit.idinf).css("color","#000");
						$(FuncInit.idinf).css("background-color","red");
					}
				  });
				  
				  
				  MapsLib.doSearch();
			  }
    }
};

//objet Arbre  
/*!
 * Runsense 97Kafr
 *
 * Copyright 2018, Dalleau Pascal
 *
 */
var FuncTree = FuncTree || {};
var FuncTree = {
	bchk		:false,
	bgrow		:false,
	bms			:true,
	updBackG	:"body",
	ptbid		:['1So5MDh-kSSDOudH6iznmgC3DTfn4SBKiilMj27DI'],
	styles		:["","http://runsense.github.io/js/f.png"],
	zoom		:10,
	rvzoom		:10,
	theme 		:[{label:'general',value:''},{label:FuncInit.txtInit[0],value:'t'},{label:FuncInit.txtInit[1],value:'s'},{label:FuncInit.txtInit[2],value:'md'},
					{label:FuncInit.txtInit[3],value:'v'},{label:FuncInit.txtInit[4],value:'n'},{label:FuncInit.txtInit[5],value:'a'} 
				],
	srcStyle		:[
					{label: FuncInit.txtInit[0],value: "play"},
					{label: FuncInit.txtInit[1],value: "hiker"},
					{label: FuncInit.txtInit[2],value: "dining"},
					{label: FuncInit.txtInit[3],value: "realestate"},
					{label: FuncInit.txtInit[4],value: "star"},
					{label: FuncInit.txtInit[5],value: "ranger_station"},
					{label: "EST",value: "#DAA520",lien:FuncInit.txtInit[6]+"Est.png"},
						{label: "Bras-Panon",value: "#4B0082",lien:FuncInit.txtInit[6]+"brasPanon.png" },
						{label: "Saint-Andre",value: "#006400",lien:FuncInit.txtInit[6]+"saintAndre.png"},
						{label: "Saint-Benoit",value: "#008B8B",lien:FuncInit.txtInit[6]+"saintBenoit.png"},
						{label: "Sainte-Anne",value: "#800000",lien:FuncInit.txtInit[6]+"sainteAnne.png"},
						{label: "Sainte-Rose",value: "#DAA520",lien:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sainte-Rose_eglise.jpg/800px-Sainte-Rose_eglise.jpg"},
						{label: "La Plaine Des Palmistes",value: "#CD5C5C",lien:"https://upload.wikimedia.org/wikipedia/commons/b/b3/Ppalmistes2.jpg"},
						{label: "Salazie",value: "#000080",lien:"http://www.transeet.fr/wp-content/uploads/2013/05/Ile-de-la-Reunion-510x350.jpg"},
					{label:"OUEST", value:" #CD5C5C",lien:FuncInit.txtInit[6]+"Ouest.png"},
						{label: "Mafate",value: "#4B0082",lien:FuncInit.txtInit[6]+"mafate.png"},
						{label: "Saint-Gilles",value: "#006400",lien:FuncInit.txtInit[6]+"saintGilles.png"},
						{label: "Saint-Leu",value: "#008B8B",lien:FuncInit.txtInit[6]+"saintLeu.png"},
						{label: "Trois Bassins",value: "#800000",lien:FuncInit.txtInit[6]+"troisBassins.png"},
						{label: "Saint-Paul",value: "#DAA520",lien:FuncInit.txtInit[6]+"saintPaul.png"},
						{label: "Etang Sale",value: "#CD5C5C",lien:FuncInit.txtInit[6]+"etangSale.png"},
						{label: "Entre-Deux",value: "#000080",lien:FuncInit.txtInit[6]+"entreDeux.png"},
						{label: "Les Avirons",value: "#FFD700",lien:FuncInit.txtInit[6]+"lesAvirons.png"},
					{label: "SUD",value:"#66CDAA",lien:FuncInit.txtInit[6]+"sud.png"},
						{label: "Saint-Pierre",value: "#4B0082",lien:FuncInit.txtInit[6]+"saintPierre.png"},
						{label: "Saint-Joseph",value: "#006400",lien:FuncInit.txtInit[6]+"saintJoseph.png"},
						{label: "Petite Ile",value: "#008B8B",lien:"https://upload.wikimedia.org/wikipedia/commons/1/11/Reunion_PetiteIle.JPG"},
						{label: "Saint-Louis",value: "#800000",lien:"https://upload.wikimedia.org/wikipedia/commons/e/e1/R%C3%A9union_LesMakes.JPG"},
						{label: "Cilaos",value: "#DAA520",lien:"https://upload.wikimedia.org/wikipedia/commons/4/43/Cirque_De_Cilaos_On_Reunion.jpg"},
						{label: "Tampon",value: "#CD5C5C",lien:FuncInit.txtInit[6]+"tampon.png"},
						{label: "La Plaine Des Cafres",value: "#000080",lien:FuncInit.txtInit[6]+"laPlaineDesCafres.png"},
						{label: "enclos du Tremblet",value: "#FFD700",lien:"https://upload.wikimedia.org/wikipedia/commons/3/37/Piton_de_la_Fournaise%2C_R%C3%A9union_Island_%28High_Resolution%29.jpg"},
						{label: "Saint-Phillippe",value: "#66CDAA",lien:FuncInit.txtInit[6]+"saintPhillippe.png"},
					{label: "NORD",value: "#4169E1",lien:FuncInit.txtInit[6]+"rocheEcrite.png"},
						{label: "Saint-Denis",value: "#4B0082",lien: "https://upload.wikimedia.org/wikipedia/commons/b/b9/SaintDenisReunion003.jpg"},
						{label: "Sainte-Marie",value: "#006400",lien:FuncInit.txtInit[6]+"sainteMarie.png"},
						{label: "Sainte-Suzanne",value: "#008B8B",lien:FuncInit.txtInit[6]+"sainteSuzanne.png"},
						{label: "La Possession",value: "#800000",lien:FuncInit.txtInit[6]+"laPossession.png"},
						{label: "Le Port",value: "#DAA520",lien:FuncInit.txtInit[6]+"lePort.png"}
				],
	source 		: [   
			{ id:"OUEST",icon:FuncInit.txtInit[11]+"reunion"+FuncInit.txtInit[12],html: "<span title='WEST' style='background-color: #FFF; #8B0000;'>OUEST</span> ", value:"1t35ApBEMf9xwiZA9EqZd-glj8GexmPuhpSr_ndlh", items: [
				{ id:"Mafate",icon:FuncInit.txtInit[11]+"Mafate"+FuncInit.txtInit[12], html: "<span title='Mafate' style='background-color: #FFF; #4B0082;'>Mafate</span>",value:"1GveH25DbaQoreX86sPBmcFei9zfvi8UmD2y2qyqu", items: [
                    { id:"Ma_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10],value:"18JyKnH11VSG-SUHvvoIIxrkfTKDx4wwQd7Bpbe_p"},
                    {  id:"Ma_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10],value:"1vfct65S_RoeN5rdKfGeUF7ux6EUrtXL5HzGj1p08"},
					{ id:"Ma_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10],value:"1WeFn6tuD30_ShUb76sLjrA0SacbuV9j3E5h5k0cZ"}						
				 ] },
				 { id:"Saint-Gilles",icon:FuncInit.txtInit[11]+"Saint-Gilles"+FuncInit.txtInit[12], html: "<span title='Saint-Gilles' style='background-color: #FFF; #006400;'>Saint-Gilles</span>" ,value:"1sa1fCY5I_xhM7AyYIWyqJedxZzBmGcIfrH1Q8tke", items: [
					{ id:"SG_t", icon:FuncInit.txtInit[7]+"play"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[0],value:"1cfDuclfE5Kz88w0egT267xw7Mg77Xw4wkEhi7bws"},
                    { id:"SG_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10],value:"19ViFSzg0Auo8m31abL2z_9OUjBHImUR0PFx9pTro"},
                    {  id:"SG_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10],value:"12undvS9IMnRnEeTYClqje8BFf7nQYlQvD0VJmlb4"},
					{ id:"SG_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10],value:"1hMxXypHObu1TaGNVj6Hig_bgSG6FEx68w8p3psqa"},
					{ id:"SG_n", icon:FuncInit.txtInit[7]+"star"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[4]+FuncInit.txtInit[10],value:"1NEArpXB8yKypvOY0FlhXeg_BC-3AbUUvQIvxVyfI"},
					{ id:"SG_a", icon:FuncInit.txtInit[7]+"ranger_station"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[5]+FuncInit.txtInit[10],value:"13Tj9i_c7p5qrbFYM5a6OXBgGIhxUetOh-DAIVpDC"}						
				 ] },
				 { id:"Saint-Leu",icon:FuncInit.txtInit[11]+"Saint-Leu"+FuncInit.txtInit[12],  html: "<span title='Saint-Leu' style='background-color: #FFF; #008B8B;'>Saint-Leu</span>",value:"1ahKjlUXShjRwyOlo7ZCcZMSvEpJfRG9hY7_Qg6TA",  items: [
					{ id:"SL_t", icon:FuncInit.txtInit[7]+"play"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[0],value:"1WreJYQyzcURwYIN8UqJUNUJHJ5k_xiyUeIzTkhTm"},
                    { id:"SL_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10],value:"11W_793Vb7vxwFp6vLsGV9n83by8wA0NJOD0_urIV"},
                    {  id:"SL_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10],value:"1zurSKheMQdZ7cFgw5B7y3ihGUWXutuHHhsIonkhS"},
					{ id:"SL_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10],value:"1pXRpIDoonJjBECHhUEtKjcG_AmiRC43vnejF1UXq"},
					{ id:"SL_n", icon:FuncInit.txtInit[7]+"star"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[4]+FuncInit.txtInit[10],value:"1teakmILV4AZcMznt3ihFWUbLAH1W1ILNYxpi6Tz8"},
					{ id:"SL_a", icon:FuncInit.txtInit[7]+"ranger_station"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[5]+FuncInit.txtInit[10],value:"1v6kmzTDGRK_q66oyNuyr0842W4drPkVFJjoMDaRH"}						
				 ] },
				 { id:"TroisBassins",icon:FuncInit.txtInit[11]+"TroisBassins"+FuncInit.txtInit[12], html: "<span title='Trois Bassins' style='background-color: #FFF; #800000;'>Trois Bassins</span>" ,value:"12g6QNhlYlaTgGoEN_K3Tyl6QV31y6TUPuHXjM-g-", items: [
                    { id:"TB_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10],value:"11YVBN4CqL6oLdASJEJ_lJ13WWNEJc6_yZxQrQeoZ"},
                    {  id:"TB_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10],value:"1yBld8_oUcv_2Ccnqz7xV2dKo16xbYoqtbhjjQIIC"},
					{ id:"TB_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10],value:"1KbxFddq2D4uo3RNMruBz17I266wO9OYjXpwQNxoS"},
					{ id:"TB_a", icon:FuncInit.txtInit[7]+"ranger_station"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[5]+FuncInit.txtInit[10],value:"1uzRedo3Qe9b4HZjHlgcDxReLo6r3udNWyBIaOM7L"}						
				 ] },
				 { id:"Saint-Paul",icon:FuncInit.txtInit[11]+"Saint-Paul"+FuncInit.txtInit[12],html: "<span title='Saint-Paul' style='background-color: #FFF; #DAA520;'>Saint-Paul</span> ",value:"1yPMDk3KG56Dero7Lway4oMIw42daQVKtK0PLjKNZ", items: [
					{ id:"SPA_t", icon:FuncInit.txtInit[7]+"play"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[0],value:"1pF55Ecb8S5nMLRADZ_ZrYqhTdGXLQRu2v4knP32n"},
                    { id:"SPA_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10],value:"105O9BV8SR2p9EiMbh7nr8W2I75p_lxEWc9yFeOea"},
                    {  id:"SPA_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10],value:"1arbnu4e3HPRxM4ys0AZEvHGk6cAZjSEE0tHPE07R"},
					{ id:"SPA_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10],value:"1cX2TaI47iZtEMnZIu2ZDPRUSllt6MxhgQ7SVxE2O"},
					{ id:"SPA_n", icon:FuncInit.txtInit[7]+"star"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[4]+FuncInit.txtInit[10],value:"1uAUFKQbO3b4azglINq0byh6IMTt0tcsew-ZDhHVK"},
					{ id:"SPA_a", icon:FuncInit.txtInit[7]+"ranger_station"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[5]+FuncInit.txtInit[10],value:"1yvNIMDlSsqd6REMTpDqNBKabGeFft-kquWsWvPA1"}						
				 ] },
				{ id:"EtangSale",icon:FuncInit.txtInit[11]+"EtangSale"+FuncInit.txtInit[12], html: "<span title='Etang Sal&#233;' style='background-color: #FFF; #CD5C5C;'>Etang Sale</span>",value:"1XgstlSHKGm72zgrRO6lFUdVSM6867jPyfLT-Mtcj", items: [
					{ id:"ES_t",icon:FuncInit.txtInit[7]+"play"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[0],value:"1YXAJweeNZAKU2-Waa64ZIymHQ0bSI7lISM6bYHd6"},
                    { id:"ES_s",icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10],value:"1Um2dvNwSoRN_SYsZMLjTwCR-qEhSVcCMZQgjncBF"},
                    {  id:"ES_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10], value:"1Ya4SFxo6lr8uNoEBRhH_E8Zpq3InMkNmEilUdVfT"},
					{ id:"ES_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10], value:"1ngS7I2W3ZEACE4VpYby5j0cKYTBJCzmtmYxUkPap"},
					{ id:"ES_n", icon:FuncInit.txtInit[7]+"star"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[4]+FuncInit.txtInit[10],value:"1aaXjKHD9gFKajSSFONppPltXcSgAUKWvrbZ94gEG"},
					{ id:"ES_a", icon:FuncInit.txtInit[7]+"ranger_station"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[5]+FuncInit.txtInit[10], value:"1PL-tDeZMX1uhb3pgNaVFnX0T3eNs8aK60PKx5xd1"}						
				 ] },
				{ id:"Entre-Deux",icon:FuncInit.txtInit[11]+"Entre-Deux"+FuncInit.txtInit[12], html: "<span title='Entre-Deux' style='background-color: #FFF; #000080;'>Entre-Deux</span>", value:"1uU-__tmwAmqtTXPsi57LhiD969SwF0xWjbnDEw-7", items: [
					{ id:"ED_s",icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10],value:"1PeYW_q7kAdat2OxpIMFmZ32mDPStAXPgxDCpTfNW"},
					{  id:"ED_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10], value:"1ddsy0cXwzchgqNKn7lb_U54aUolJxX15dtLrUHtP"},
					{ id:"ED_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10], value:"1tRU-pUXalYcAlsXE5O1o9IO0dQXNLSNJSQqEE-hm"},
					{ id:"ED_a", icon:FuncInit.txtInit[7]+"ranger_station"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[5]+FuncInit.txtInit[10], value:"1rZG5fmVIUptJwXk5uiJfjVuIn-ooM9WuII0UkEy3"}						
				 ] },
				 { id:"LesAvirons",icon:FuncInit.txtInit[11]+"lesAvirons"+FuncInit.txtInit[12], html: "<span title='Les Avirons' style='background-color: #FFF; #FFD700;'>Les Avirons</span>", value:"1aNZ5BzIgAUCEArEmyIabDPTdpQkGv5p1eyKTbeBN", items: [
					{ id:"Av_t", icon:FuncInit.txtInit[7]+"play"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[0],value:"1mWz8sMkRVFm7820e4XBNqBEFRI0gWQ_0-OxVQ0_B"},
                    { id:"Av_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10],value:"1mMsbTg4i0b6n8cXi4TYQzK6Ckbe4MMYzTqQ9fniT"},
                    {  id:"Av_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10],value:"1hv5ee8OPODPryBpl0DqrwwzAzV0yvt3DnJ-AZBDB"},
					{ id:"Av_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10],value:"14wzoLVQ3p-nHkPW1SuCOBTEQxmOLTDenF66Ywkb7"},
					{ id:"Av_a", icon:FuncInit.txtInit[7]+"ranger_station"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[5]+FuncInit.txtInit[10],value:"1XtwmwdSCQllPPQuge9CPbJtf5KIL71w3ZGON7Evm"}						
				 ] }
			]
			},
			{ id:"SUD",icon:FuncInit.txtInit[11]+"reunion"+FuncInit.txtInit[12],html: "<span title='SOUTH' style='background-color: #FFF; #66CDAA;'>SUD</span>", value:"1XolYmmcAznvjC8X4Gx8vvOWY5a-dJOIyl5ZkWXmM",style:"MediumAquaMarine ", items: [
				{ id:"Saint-Pierre", icon:FuncInit.txtInit[11]+"Saint-Pierre"+FuncInit.txtInit[12],  html: "<span title='Saint-Pierre' style='background-color: #FFF; #4B0082;'>Saint-Pierre</span>", value:"1MT3G_b9rZRjqusrdShjZ7kqEHe1JOmq-wp7Wt-JY", items: [
					{ id:"SPI_t", icon:FuncInit.txtInit[7]+"play"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[0],value:"1nuksgXG9G7cBpwzV-_442xLhTnxx849HoIXe_6kx"},
                    { id:"SPI_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10],value:"1hGzzznJSMFAvbAoDUWMJj13Z1u4Vlv7WnAOKrpTC"},
                    {  id:"SPI_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10],value:"1SgbVz3eHKfSPWp9XNk5NWxvNP_ahskNvyjKLeRtZ"},
					{ id:"SPI_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10],value:"1Gjgt4ZhaV4RgzAzE4VkzI06ZWTV_-v97WQIs_0jx"},
					{ id:"SPI_n", icon:FuncInit.txtInit[7]+"star"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[4]+FuncInit.txtInit[10],value:"1jg739vX36Xn5o4jgy_CUko40GooVm-4RQCNb8IE8"},
					{ id:"SPI_a", icon:FuncInit.txtInit[7]+"ranger_station"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[5]+FuncInit.txtInit[10],value:"1bRyWWEF7wu5Zy6Rg5Qm_zGuMfKyQhlK11FrsA7XD"}						
				 ] },
				{ id:"Saint-Joseph", icon:FuncInit.txtInit[11]+"Saint-Joseph"+FuncInit.txtInit[12],html: "<span title='Saint-Joseph' style='background-color: #FFF; #006400;'>Saint-Joseph</span>", value:"1EdNBxumLvo_ZKbDvIAmdG4kL4aK8mwn715beAfxU", items: [
					{ id:"SJ_t", icon:FuncInit.txtInit[7]+"play"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[0],value:"1FYDeFbUGzcd8BXd-486iI4wbbuOpp7kpFO-DXu53"},
                    { id:"SJ_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10],value:"1CvxRIBwlkoJNRqRLe7F4OvWfp-xkDGU5edSq0ASl"},
                    {  id:"SJ_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10],value:"1et5h1MbG_qX1K3iLNCTvQWS5_uj2vayNXSXwwXVU"},
					{ id:"SJ_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10],value:"12F1H2X-rQrYMAyn3T4lEp7J6XkRig3C5MB1vV1nN"},
					{ id:"SJ_n", icon:FuncInit.txtInit[7]+"star"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[4]+FuncInit.txtInit[10],value:"1mGP2D37TYcg7aKBRPuDLofmhIziluf9i-rnGf5wx"},
					{ id:"SJ_a", icon:FuncInit.txtInit[7]+"ranger_station"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[5]+FuncInit.txtInit[10],value:"1DnBh8sOLdiSlZlq4oLZkAH84JiLW4BQN0l2xdFxc"}						
				 ] },
				{ id:"PetiteIle",icon:FuncInit.txtInit[11]+"PetiteIle"+FuncInit.txtInit[12], html: "<span title='Petite Ile' style='background-color: #FFF; #008B8B;'>Petite Ile</span>", value:"1dcDRLQyzoX7G70X4VjHYe5sgNtyiurA4pk5cvwXH", items: [
					{ id:"PI_t", icon:FuncInit.txtInit[7]+"play"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[0],value:"1ZXBQvZmy7a-TdVUxcZZW0dEkl0VigG_nIx6cjnva"},
                    { id:"PI_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10],value:"1eO6-9Sir2Tl-MHrHyyXY6Ws5hJZBszblOM1b_7fg"},
                    {  id:"PI_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10],value:"1wTC3c07JmeEexULCOeoCe5i12g95r7sPXZbIxDoQ"},
					{ id:"PI_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10],value:"1Ecnj4R9f0uL_nliqIHl36utyF5K6f0tw9UvErgER"},
					{ id:"PI_a", icon:FuncInit.txtInit[7]+"ranger_station"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[5]+FuncInit.txtInit[10],value:"1_NSMIuxAJzXnBeRFUXt4Z6iYLCJgrKlXttllLfOh"}						
				 ] },
				 { id:"Saint-Louis", icon:FuncInit.txtInit[11]+"Saint-Louis"+FuncInit.txtInit[12], html: "<span title='Saint-Louis' style='background-color: #FFF; #800000;'>Saint-Louis</span> ", value:"1M1iYxQ8PEELVmrQr_3bGh_-7UU09ghn1cvNo8WCV", items: [
					{ id:"SLO_t", icon:FuncInit.txtInit[7]+"play"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[0],value:"1VavGGOruqsPbe6GqtS0-ysRBhQDhodfOUYH49Enf"},
                    { id:"SLO_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10],value:"1ESOd1qko4uxhvuUAltY5ZYMq00Ov_kqfpFl71FIO"},
                    {  id:"SLO_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10],value:"1ETrdbfbNxfmKIGa7u6MC21igP8p16Hu8OvaM1ODL"},
					{ id:"SLO_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10],value:"1wezhGcWJshrYRFFPdEUpnIWrHp6ggkrAjjNwNnAM"},
					{ id:"SLO_a", icon:FuncInit.txtInit[7]+"ranger_station"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[5]+FuncInit.txtInit[10],value:"1WQqAVJWl43bFI8l-3Sw6UMmxBlzgj-CvNo06T8tJ"}						
				 ] },
				 { id:"Cilaos", icon:FuncInit.txtInit[11]+"Cilaos"+FuncInit.txtInit[12],html: "<span title='Cilaos' style='background-color: #FFF; #DAA520;'>Cilaos</span> ",value:"1Z0zITHQac_xwSfmHpvliZoioY58jZhUjWs9KX8Ln", items: [
					{ id:"Ci_t",icon:FuncInit.txtInit[7]+"play"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[0], value:"18xgZcIBvJ1w2bk_gemnKh52HOkqmdDYsxYSjpS26"},
                    { id:"Ci_s",icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10], value:"1hR6kwS000LgXzL2wt-TJayI0SG9AZemcnNctwoPe"},
                    {  id:"Ci_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10],value:"1tdQ_vkcdqDJB037eDiyXo3YR-XlJUVvs_IcD3kD8"},
					{ id:"Ci_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10], value:"1a0FJN_DioGC6sPhOJyt5Q4d7tUcae5GmRBNXemXP"},
					{ id:"Ci_a", icon:FuncInit.txtInit[7]+"ranger_station"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[5]+FuncInit.txtInit[10], value:"1JDZYdWYIysK0dxS9Rt6pEi7SGv864A5_BUgfi39u"}						
				 ] },
				 { id:"Tampon",icon:FuncInit.txtInit[11]+"Tampon"+FuncInit.txtInit[12], html: "<span title='Tampon' style='background-color: #FFF; #CD5C5C;'>Tampon</span>", value:"1fS6sn1x_MDXE8mPT2dJGBE4mLyTseyvgQmt8fS7w", items: [
					{ id:"T_t", icon:FuncInit.txtInit[7]+"play"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[0],value:"1TVMj_ErRYZSUl8IRlxS2A45BPf6yZBLmrdPUqLqx"},
                    { id:"T_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10],value:"1vxnUDRqG5ZwScgpGxjcOHGY72Na_7ubVhw5meBJr"},
                    {  id:"T_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10],value:"1Tetq4TXpTTgtp0lBEGx6GSjZnurzUt4CFXlKaiOB"},
					{ id:"T_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10],value:"1RHM6iPa9admK-4DMQpOEv8cZ3Sx8cix5taZzWOs_"},
					{ id:"T_n", icon:FuncInit.txtInit[7]+"star"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[4]+FuncInit.txtInit[10],value:"195dI4uyd_AKasWDtn4eTQz3v6gcKlgE55N9_1zwE"}	,
					{ id:"T_a", icon:FuncInit.txtInit[7]+"ranger_station"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[5]+FuncInit.txtInit[10],value:"1x-iqx3tCYREWFoCBzt8ezhx0uVeiXaqrm8o6_ZKU"}						
				 ] },
				 { id:"LaPlaineDesCafres", icon:FuncInit.txtInit[11]+"LaPlaineDesCafres"+FuncInit.txtInit[12], html: "<span title='La Plaine Des Cafres' style='background-color: #FFF; #000080;'>La Plaine Des Cafres</span>", value:"1r3TOcxghV2VoLauNU6PnoY3kzdcSIbtey0pnhWWz", items: [
                    { id:"PC_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10], value:"1NpjpyxxMv9KIki_DtXtzPRLdNwzJ7uBjxzoxJOoV"},
                    {  id:"PC_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10],value:"1RPot4Hw0B_ogvWoGAu3sW2Tz-nP6NSLREbaDZsXJ"},
					{ id:"PC_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10], value:"1EBGjcCB-FRK6AXy9EJ-lmLaQHfNsnXS_uhSNWz71"},
					{ id:"PC_a", icon:FuncInit.txtInit[7]+"ranger_station"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[5]+FuncInit.txtInit[10], value:"1iTq7746ceYVrcXqcM3Ugu1CYAO_qNR09CoWCUuNP"}						
				 ] },
				  { id:"enclosduTremblet",icon:FuncInit.txtInit[11]+"Tremblet"+FuncInit.txtInit[12],html: "<span title='enclos du Tremblet' style='background-color: #FFF; #FFD700;'>enclos du Tremblet</span> ", value:"1NId8irdjYKXfpFKk5NZ-SD7ZGkUhl2w6m1LL5t4F", items: [
                    { id:"eT_s",icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10], value:"1HG3aQEg2D1q_4d5n2_Gmk8rMQl6a995HY7dPJCZR"},
					{ id:"eT_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10], value:"1cRObSW2PCNmCjRlONmIKRdj2VYbee9_bpa2oTHiX"}
				  ] }
				  ,
				  { id:"Saint-Phillippe",icon:FuncInit.txtInit[11]+"Saint-Phillippe"+FuncInit.txtInit[12],html: "<span title='Saint-Phillippe' style='background-color: #FFF; #66CDAA;'>Saint-Phillippe</span> " , value:"1H9qvzwkRMhjjEwgrs_CToYkSPKU9JpKz0NzxRMhY", items: [
                    { id:"SPh_t", icon:FuncInit.txtInit[7]+"play"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[0],value:"1t4UNzRx7NREpOPfUh-jcfjj4jmZdlCrcV5UTnMBK"},
                    { id:"SPh_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10],value:"1tk1Ncnn2rK7hh9uNag18vlksj_ZETxBqzxX6edbw"},
                    {  id:"SPh_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10],value:"1tJJW6s2ELbV-cSIecvLroNt9u1pY_ExyTSxEsyDG"},
					{ id:"SPh_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10],value:"1p3_0vNQxgdOQMXhkO6PWCzUoBD5XLVThjWcFzDrL"},
					{ id:"SPh_a", icon:FuncInit.txtInit[7]+"ranger_station"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[5]+FuncInit.txtInit[10],value:"136pTZ-NKGCp0d1jqeOBXKXJJmK3sdF51h6lhiiF5"}
				  ] }
			]
			},
			{ id:"NORD",icon:FuncInit.txtInit[11]+"reunion"+FuncInit.txtInit[12],html: "<span title='NORTH' style='background-color: #FFF; #4169E1;'>NORD</span>", value:"1X7thBX2nmGVIivqpYNzSWN9iC4OCJDvP469Yvr15", items: [
				{ id:"Saint-Denis",icon:FuncInit.txtInit[11]+"Saint-Denis"+FuncInit.txtInit[12],  html: "<span title='Saint-Denis' style='background-color: #FFF; #4B0082;'>Saint-Denis</span>",value:"1B6GQb_eKzR2PmlhSHddq7I8v4KAlYB3HgtLLxWO6", items: [
					{ id:"SD_t", icon:FuncInit.txtInit[7]+"play"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[0],value:"1A3qmh8ulO-hXKe2W57qihqlkXEMajktf6NUbvkH8"},
                    { id:"SD_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10],value:"1Vw4KON8Ww-OU2gTTg1web3a_kWjXOnc0cGmJ1xnR"},
                    {  id:"SD_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10],value:"1Wx6ZbbFLkEIdbxfS2AHJyUprIINfqtWLLhA_ngNZ"},
					{ id:"SD_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10],value:"1OIG0YWzJA6nr_Nr6F-lNVsnYfsKtA8ubbGA_Tx0v"},
					{ id:"SD_n", icon:FuncInit.txtInit[7]+"star"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[4]+FuncInit.txtInit[10],value:"1PSVZqIwSOlIbOWgXTdUhMXe4Pj-IIhaOEiEz_kaV"},
					{ id:"SD_a", icon:FuncInit.txtInit[7]+"ranger_station"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[5]+FuncInit.txtInit[10],value:"1yJfcFEbn1487U-HHCv9UcihepFv3kVS7U82pMS3A"}						
				 ] },
				 { id:"Sainte-Marie",icon:FuncInit.txtInit[11]+"Sainte-Marie"+FuncInit.txtInit[12], html: "<span title='Sainte-Marie' style='background-color: #FFF; #006400;'>Sainte-Marie</span>",value:"192A1s6RA93KPg1cXOC7QYPI6MyGBb-AZtNpFNnyt", items: [
					{ id:"SM_t", icon:FuncInit.txtInit[7]+"play"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[0],value:"1O2m7YXKBxLcAQZkuX1oOrA6dJFiZNv7KEZqkUTuZ"},
                    { id:"SM_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10],value:"1vGSpCnOiCfNeAQvIpPscZ26cUq7x31imy_VShUZd"},
                    {  id:"SM_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10],value:"1FKB-9QH0VtpFGMtMeZZD_c2Fze2g9hYoxivizqav"},
					{ id:"SM_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10],value:"1hYkKYnkxqvjmRc7IKgAz9xdYPiNI2VqZ6oWnLMLd"},
					{ id:"SM_a", icon:FuncInit.txtInit[7]+"ranger_station"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[5]+FuncInit.txtInit[10],value:"1CpsXyW6UwS2Ix6oTHfy64PKixJGYml3lnUjj_Rta"}						
				 ] },
				 { id:"Sainte-Suzanne",icon:FuncInit.txtInit[11]+"Sainte-Suzanne"+FuncInit.txtInit[12], html: "<span title='Sainte-Suzanne' style='background-color: #FFF; #008B8B;'>Sainte-Suzanne</span>" ,value: "11hA_F8nvGsVVgrtgSs0i4ehviHgHc1kmGDHv1JgS", items: [
					{ id:"SS_t", icon:FuncInit.txtInit[7]+"play"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[0],value:"1uP6kIJhbe2VDpT-bXB9uMosjNNejhQGt_P7Ey2jf"},
                    { id:"SS_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10],value:"14tKW-WkeyvLupjFAoWXMbAgEa9--pO18c1Jnr_5j"},
                    {  id:"SS_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10],value:"1CjnaMnc4aEFf3b9n498eqJaZKf9E3mndyDaF5PjG"},
					{ id:"SS_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10],value:"1mw9EHc9TOcgbbTNijGTzw5zrCxXjisZuiqwMLnlw"},
					{ id:"SS_n", icon:FuncInit.txtInit[7]+"star"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[4]+FuncInit.txtInit[10],value:"1oYTut7YPTzdcOtwYCRlkpQylcjllRvwcrnizBN5Q"},
				 ] },
				{ id:"LaPossession",icon:FuncInit.txtInit[11]+"LaPossession"+FuncInit.txtInit[12], html: "<span title='La Possession' style='background-color: #FFF; #800000;'>La Possession</span>",value:"1NjCzAjGKweKavFoZsexcszpxCpx3NEx7pKsNYqED", items: [
					{ id:"Pos_t", icon:FuncInit.txtInit[7]+"play"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[0], value:"1lr8c-nv0zSUMfdnWxpvmIZBf4EOcNSduutH7z-7D"},
                    { id:"Pos_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10], value:"1H0BtHjh6l-SmQNh8ty4RXmhv-rGP36i6pHKiw1VL"},
                    {  id:"Pos_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10], value:"1W14GqyphT5To9rr7laAjrAcJd9JLEd_5vj7b1RmE"},
					{ id:"Pos_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10],value:"1elAEWqFcSey78i0T167f6OYuUKo3aSJ9DKcAH4JE"},
					{ id:"Pos_a", icon:FuncInit.txtInit[7]+"ranger_station"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[5]+FuncInit.txtInit[10],value:"1yfoGSvq6a0uGLL8GJPdsDZ1lGRWysaBfhoiR6hz8"}						
				 ] },
				 { id:"LePort",icon:FuncInit.txtInit[11]+"LePort"+FuncInit.txtInit[12], html: "<span title='Le Port' style='background-color: #FFF; #DAA520;'>Le Port</span> ",value:"1muRbrt4rHjP_PJWRoIwlywN33ckv-pq3ADitGvI0", items: [
					{ id:"Por_t", icon:FuncInit.txtInit[7]+"play"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[0],value:"1egvMm3Q0a8ISZ3dbmydPFqMdsLvDuHwUemNkY1mi"},
                    { id:"Por_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10],value:"19Zl9W3yXp0IdmcANjF_MlHX1R9hk8X27mFhJnmZH"},
                    {  id:"Por_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10],value:"1LHKdsKbwR4CIR0L6Irt9m8jqScVnfxPMEm4JBA-3"},
					{ id:"Por_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10],value:"1aOiWEpC7YfSJL10AebsxUpSpg-h-A4fcbIvjZxi8"},
					{ id:"Por_n", icon:FuncInit.txtInit[7]+"star"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[4]+FuncInit.txtInit[10],value:"1YHjpqYf1aJqw-gylQDId1rCF_qDZDMSxUbxjRGG_"},
					{ id:"Por_a", icon:FuncInit.txtInit[7]+"ranger_station"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[5]+FuncInit.txtInit[10],value:"13B6si8MulZuOUFdcGkzj67HPwrMXklYzZOUuEi7Q"}						
				 ] }
				 
			]
			},
			{ id:"EST",icon:FuncInit.txtInit[11]+"reunion"+FuncInit.txtInit[12],  html: "<span title='EAST' style='background-color: #FFF; #DAA520;'>EST</span>",  value:"1kdUa3ca31BGjEODS180K8B1zsF9ArFmIZLPiiaRp", items: [
				{ id:"Bras-Panon",icon:FuncInit.txtInit[11]+"Bras-Panon"+FuncInit.txtInit[12], html: "<span title='Bras-Panon' style='background-color: #FFF; #4B0082;'>Bras-Panon</span>", value:"1Eu99fE8gzP8aRvHmC0aoAgGvWLA7sicIJZQzNEHo",  items: [
					{ id:"BPn_t",icon:FuncInit.txtInit[7]+"play"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[0]+FuncInit.txtInit[10], value:"1SjOgOCz9LrImoNYW3dlV8AVwekzwgkwkIFrnL9r5"},
                    { id:"BPn_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10], value:"1ccHNKyGhBgTzVkJ6QaeDmsLfWWb8APIPf5PPo6iV"},
                    { id:"BPn_md",icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10], value:"1Bzgou8rOmmto6PjPp71N_-JkAsIAOZI8ezXu_eFp"},
					{ id:"BPn_v",icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10], value:"1JqQPaUTMc-kjl8xVIWHnE6s0z4oW4WXhhSZbmm6p"},
					{ id:"BPn_a",icon:FuncInit.txtInit[7]+"ranger_station"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[5]+FuncInit.txtInit[10],value:"1F6J56n5iAOxSXwnJCczlEqtM0exQzaQ6lW89xqOq"}					
				 ]
                },
				 { id:"Saint-Andre",icon:FuncInit.txtInit[11]+"Saint-Andre"+FuncInit.txtInit[12], html: "<span title='Saint-Andr&#233;' style='background-color: #FFF; #006400;'>Saint-Andre</span>", value:"1nwNhdQtG4G82HAm7m3GnPNLYFYxf7NkLazRvyow9", items: [
					{ id:"SAd_t", icon:FuncInit.txtInit[7]+"play"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[0],value:"1vWcldb-WuU1rtH-ElhKI-f_4pLEeJDzzvMaWJSrC"},
                    { id:"SAd_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10],value:"1QxdvqoXSnGh2RaPPYVqkXGMYzs5KyLKNtH6Rjq1Y"},
                    {  id:"SAd_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10],value:"1LoBKzzZG09THxPP4G9WQAvH_TQHHejDAkm6Bd7sn"},
					{ id:"SAd_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10],value:"1_JSO07ViQqKGnrbD8l_IjO_T_ipipBS_oH_qs_1c"},
					{ id:"SAd_n", icon:FuncInit.txtInit[7]+"star"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[4]+FuncInit.txtInit[10],value:"1tVMs-082OJrhLvKNVua0QCH-hnrs4dhkePIbn2Sh"},
					{ id:"SAd_a", icon:FuncInit.txtInit[7]+"ranger_station"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[5]+FuncInit.txtInit[10],value:"1tVigoTd-SoRI0O-CtE7hMZp-ygWhd3jX25z0GPOD"}						
				 ] },
				 { id:"Saint-Benoit",icon:FuncInit.txtInit[11]+"Saint-Benoit"+FuncInit.txtInit[12], html: "<span title='Saint-Benoit' style='background-color: #FFF; #008B8B;'>Saint-Benoit</span>", value:"1gdjt3qeIeAvBxMRhmLwlnCgzr7CTt71iJrZ8dCTY", items: [
					 { id:"SB_t", icon:FuncInit.txtInit[7]+"play"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[0],value:"1zvWu4e_eyQ1Ho7T4wM63hhl6JtFqOixA7PZDWxPa"},
                    { id:"SB_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10],value:"1K5q_Z_O-QIXt74ZKG9de3lF_uEbKKrBX13HJq1AX"},
                    {  id:"SB_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10],value:"1VHstJP2RjDAvnmoDCGgJrtOTLWkgNAHltpI97KYx"},
					{ id:"SB_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10],value:"1hjSY4vwWwCRB8bQJ3uX7c7TyhvrX5c7p5jMDmhtO"},
					{ id:"SB_n", icon:FuncInit.txtInit[7]+"star"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[4]+FuncInit.txtInit[10],value:"1z9NOfJnMEtQxerYyCFif9xX3g6YT91tRxZJiNzcb"},
					{ id:"SB_a", icon:FuncInit.txtInit[7]+"ranger_station"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[5]+FuncInit.txtInit[10],value:"1u5cwPRUeVIpuiDkPw1lv_gzrO2DuQ20W0zERTTdc"}						
				 ] },
				 { id:"Sainte-Anne",icon:FuncInit.txtInit[11]+"Sainte-Anne"+FuncInit.txtInit[12], html: "<span title='Sainte-Anne' style='background-color: #FFF; #800000;'>Sainte-Anne</span>", value:"1s911vZP-Ftzh8TA3JoQSzwuRNbTwkJoZmYna_SFn", items: [
					{ id:"SAn_t", icon:FuncInit.txtInit[7]+"play"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[0],value:"1nFu8dd5l9fDV2Fn-87mWp_cMrRwjxSjO-vy2Cv7b"},
                    { id:"SAn_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10],value:"120SVl3kmLTTetv0_mrthuHsAUgRr8bG8t8ywKsgi"},
                    {  id:"SAn_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10],value:"1sJdzuo-LRbdDpgIQrXqbnxzEQPIPaJJ0txncB87r"},
					{ id:"SAn_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10],value:"1iAH1oV5dyYxuUCOKa7W0xo3D4TUIoXCvzd9yTRJ_"}						
				] },
				 { id:"Sainte-Rose",icon:FuncInit.txtInit[11]+"Sainte-Rose"+FuncInit.txtInit[12], html: "<span title='Sainte-Rose' style='background-color: #FFF; #DAA520;'>Sainte-Rose</span>", value:"1gIcPI4SAohpVFM0seVxdlBAw2b2zesvpZH4QJ6DC", items: [
					{ id:"SR_t", icon:FuncInit.txtInit[7]+"play"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[0],value:"1GKArjzvczShC_oTmoeSPVyxL_kfMEiyriOq4njIt"},
                    { id:"SR_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10],value:"1fWsTyPLLg_jZbHXLmn921wWRYNpp7Mph64n9PaCA"},
                    {  id:"SR_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10],value:"1JelP0FaMsEp22nh7DWvjGWA-HHEll4WsusdNze3W"},
					{ id:"SR_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10],value:"1beWOfA6DyHQS6-Kr9eZtG8i2io7Q4J9NquFgQyG-"},
					{ id:"SR_n", icon:FuncInit.txtInit[7]+"star"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[4]+FuncInit.txtInit[10],value:"1a-nJFvtF_lUeKPNpgQbFubQXRXlkubvH6glUBg8v"},
					{ id:"SR_a", icon:FuncInit.txtInit[7]+"ranger_station"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[5]+FuncInit.txtInit[10],value:"1iPRpywzSmOxOlLm5O-uJmrbbnn6YHGzl1rhuaJzA"}						
				 ] },
				{ id:"LaPlaineDesPalmistes",icon:FuncInit.txtInit[11]+"LaPlaineDesPalmistes"+FuncInit.txtInit[12], html: "<span title='La Plaine Des Palmistes' style='background-color: #FFF; #CD5C5C;'>La Plaine Des Palmistes</span>", value:"1jLXnDeXAjIbdZrgZFiovGef8BTUvyk5PkzoKsfCb", items: [
                    { id:"PP_t", icon:FuncInit.txtInit[7]+"play"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[0],value:"1oCcByb4vw2JlnNqp49lIysqTTRV6wK1xlqeC9ZGe"},
					{ id:"PP_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10], value:"1_ucovZZ5C18rlh_cGO6Uc2YgB23EmR-IQ9epBop4"},
                    {  id:"PP_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10], value:"15V8aJ6r5JNfr4xP4ZKnmi4i9mZTt6f0l8WG5hbE3"},
					{ id:"PP_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10], value:"1DxmzBkR4z4qdMDV6bIl8P3ysFbbdWr41h83yK7wn"},
					{ id:"PP_a", icon:FuncInit.txtInit[7]+"ranger_station"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[5]+FuncInit.txtInit[10],value:"1PebD0cnAun_RkcbEXdDgw4DowklvtSFOD08NlDOj"}						
				 ] },
				 { id:"Salazie",icon:FuncInit.txtInit[11]+"Salazie"+FuncInit.txtInit[12],  html: "<span title='Salazie' style='background-color: #FFF; #000080;'>Salazie</span>", value:"1zRn7YirASic3zXNjwr0jPpwlUURx5v1w0wK2JGSZ", items: [
					{ id:"SAz_t", icon:FuncInit.txtInit[7]+"play"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[0],value:"1UzSHUROSXlwSlMlCe4WQBDyucf1m83YsGbX4FYhP"},
                    { id:"SAz_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10],value:"166vivC3Sr59gCaQR98o8-9sXHBfnKiJdX5hH_7tz"},
                    {  id:"SAz_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10],value:"1wOqplnMkWf_CHXezRZBC3HvMSf2lcKcnNzgUx8Jp"},
					{ id:"SAz_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10],value:"1oWl8XUdryHiQxlg83t_pu6ERxi4PPOjrvx2Vbuhj"},
					{ id:"SAz_a", icon:FuncInit.txtInit[7]+"ranger_station"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[5]+FuncInit.txtInit[10],value:"1TjFpDyS3jwXAsLdAUL92BdcjM__2SLu71VDkkli_"}						
				 ] }
			]
			}
            ],
	applyChild	:function(items){
		for(var i in items)
					{
						FuncTree.chkItm(items[i]);
						
					}
	},
	chkItm :function(elmt){
		var rplc='#'+elmt.id;
				$(FuncInit.idtree).jqxTree('checkItem', $(rplc)[0], true);
	},
	slcItm :function(txt){
		var rplc='#'+txt;
		return $(FuncInit.idtree).jqxTree('selectItem', $(rplc)[0], true);
	},
	applysrch :function(i)
	{
		var tmp=FuncTree.ptbid;
		var stmp=FuncTree.styles;
		FuncTree.ptbid=new Array();
		FuncTree.styles=new Array();
		try{
			FuncTree.ptbid.push(i.value);
			FuncTree.styles.push(FuncTree.chStyle(i.label));
						var u=FuncTree.chURL(i.label);
						if(u!=null){FuncTree.styles.push(FuncTree.chURL(i.label));}
						else {FuncTree.styles.push("url(http://runsense.github.io/js/f.png)");}
			}catch(e)
			{ FuncTree.ptbid=tmp;FuncTree.styles=stmp; }
	},
	chStyle :function(l)
	{
		for(var i=0; i<FuncTree.srcStyle.length;i++)
			if(FuncTree.srcStyle[i].label==l)
				return FuncTree.srcStyle[i].value;
	},
	chURL:function(l)
	{
		for(var i=0; i<FuncTree.srcStyle.length;i++)
			if(FuncTree.srcStyle[i].label==l)
				return FuncTree.srcStyle[i].lien;
	},
	append : function(txt,color)
	{
		$(FuncInit.idinf).append(txt);
		$(FuncInit.idinf).css("color","white");
		$(FuncInit.idinf).css("background-color",color);
	}
};

	

$(FuncInit.idtree).jqxTree({checkboxes: true, source: FuncTree.source, width: '100%', height: FuncTree.initl, theme: 'summer' });
			//$('#jqxExpander').jqxExpander({  width: '300px', height: '450px', theme: 'summer' });
			
$('#jqxTree .jqx-tree-item').mouseenter(function (event) {
				event.stopPropagation();
				if(FuncInit.bnm&&FuncTree.bms)
				try{
						var text = event.target.textContent;
							text = text.replace(/ /g,'').replace(/'/g,'');
							text = '#'+text;
						var i = $(FuncInit.idtree).jqxTree('getItem',$(text)[0] );
						if(i!=null) {FuncTree.applysrch(i);MapsLib.doSearch();}
					}
				catch(e)
				{;}
});
$(FuncInit.idtree).on('expand', function (event) {
			if(FuncInit.bnm)
			{
				var e = event.args.element;
				var item = $(FuncInit.idtree).jqxTree('getItem',e );
				if($(FuncInit.idtree).jqxTree('getItem',e.parentElement.parentElement)!=null)
							FuncTree.zoom=12;
						else
							FuncTree.zoom=10;
				if(!FuncTree.bgrow)
				{
					FuncTree.bgrow=true;
					$(FuncInit.idtree).jqxTree('checkItem', e, true);
					$('small').show();
					FuncTree.applysrch(item);
					MapsLib.doSearch();
					$(FuncInit.idtree).jqxTree('ensureVisible', e);
				}
			}			
});
$(FuncInit.idtree).on('collapse', function (ev) {
FuncTree.bms=true; if(!FuncTree.bgrow){FuncTree.bgrow=true;FuncTree.ptbid=new Array();$(FuncInit.idtab).empty();FuncTree.applysrch(null);$('small').hide();FuncTree.zoom=10;MapsLib.doSearch(); }
});
			$(FuncInit.idtree).bind('select', function (ev) {
					ev.stopPropagation();
						
						FuncTree.zoom=13;
							var a = ev.args;
							var e = a.element;
							var i = $(FuncInit.idtree).jqxTree('getItem', e);
							if(i!=null)
								{
									if(i.id.match('_')==null) {
										$("#r_lieu").selectBox('value',i.label);
										FuncTree.bms=true;
									}
									else {
									var slc=i.id.split('_')[1];
										$("#r_theme").selectBox('value',slc);FuncTree.bms=false;

									}
									
									for(var cpt in FuncInit.txtInit) if(FuncInit.txtInit[cpt]==i.label) {FuncTree.bgrow=true;}
								
									$(FuncInit.idtree).jqxTree('checkItem', e, true);
										FuncTree.applysrch(i);
										MapsLib.doSearch();
								}
							
			});
			$(FuncInit.idtree).on('checkChange', function (ev)	
			{	
				if(!FuncTree.bgrow)
				{
					$('#clear').css('color','red');$('#clear').css('border-color','green');
					var a = ev.args;
					var e = a.element;
					var item = $(FuncInit.idtree).jqxTree('getItem', e);
					var bIn=false;
					for(var i in FuncInit.txtInit) {if(item.label==FuncInit.txtInit[i]) bIn=true;}
					if(!bIn)
					{			
						FuncInit.tmp= item.label;
						var items = $(FuncInit.idtree).jqxTree('getCheckedItems');
						var pre = e.parentElement.parentElement;
						var	prei = $(FuncInit.idtree).jqxTree('getItem', pre);
						if(prei!=null) 
						  for(var i in items) 
							{if(items[i].element!=pre&&items[i].element!=e) { $(FuncInit.idtree).jqxTree('uncheckItem', items[i].element); }}
					}
					FuncTree.bgrow=true;
					
					if(a.checked){ $(FuncInit.idtree).jqxTree('expandItem', e);}
					else {$(FuncInit.idtree).jqxTree('collapseItem', e);}
					
				}else
					{$('#clear').css('font-weight','bold');$('#clear').css('font-size','18px');}
			}); 

	$("#r_lieu").selectBox({
                        mobile: true
                    })
                    .change(function () {
						FuncInit.tmp= $(this).val();
						var ids = FuncInit.srcId;
						 var rplc ='#'+FuncInit.tmp;
						 $(FuncInit.idtree).jqxTree('selectItem',$(rplc)[0]); $("#r_theme").css('display','inline');
                    });
	$("#r_tab").change(function ()  {
			FuncTab.fsearch(this.value);
			$(FuncInit.idtab).mouseover();
		}); 

		$( "#r_theme" ).selectBox({
                        mobile: true
                    })
                    .change(function () {
						var bzn= false;
						var zns = FuncInit.srcZn
						for(var z in zns)
						{
							if(zns[z]==FuncInit.tmp)
								 bzn= true;
						}
						if(bzn)
						{
							FuncTree.bms=false;
							MapsLib.srchOnAll(this.value);
						}else
						{
							var ids = FuncInit.srcId;
							var rplc= '#';
							for(var id in ids)
							{
								if(ids[id].label==FuncInit.tmp)
									 rplc = rplc+ ids[id].id +'_';;
							}
							 rplc = rplc+ $(this).val();
							 $(FuncInit.idtree).jqxTree('selectItem',$(rplc)[0]); 
						}
                    });
		

google.maps.visualRefresh = true;

/*!
 * Runsense 97Kafr
 *
 * Copyright 2018, Dalleau Pascal
 *
 */
//Objet Librairie de Google Map
var MapsLib = MapsLib || {};
var MapsLib = {
  s                 :null,
  e                 :null,
  cpte				:0,
  chad				:'',
  datajson          :['',''],
  geocoder          : new google.maps.Geocoder(),
  polygonTableID    :[],
  polygon           : new Array(),
  googleApiKey		: "AIzaSyD49JCPjbwMZpVekOIPjWM6GQwEr6VCe8A",
  locationColumn	: "lat",
  map_centroid		: new google.maps.LatLng(-21.137472,55.546906),
  locationScope		: "reunion",  
  defaultZoom		: 10,
  row				:[],
initialize: function() {
	
	try{ MapsLib.geocoder = new google.maps.Geocoder(); FuncRoute.directionsDisplay = new google.maps.DirectionsRenderer(); }catch(e){;}
    var myOptions = { zoom: MapsLib.defaultZoom, center: MapsLib.map_centroid, mapTypeId: google.maps.MapTypeId.ROADMAP,styleId:2,templateId:1 };
    map = new google.maps.Map($("#map_canvas")[0],myOptions);
	google.maps.event.addListener(map, "click", function(event) { MapsLib.clickmap(event); });
	google.maps.event.addDomListener(window, 'resize', function() { map.setCenter(MapsLib.map_centroid); map.setZoom(FuncTree.zoom); });
	try{ FuncRoute.directionsDisplay.setMap(map); }catch(e){;}
	google.maps.event.addListener(map, 'mouseover', function(event){ FuncTree.rvzoom=map.getZoom();map.setZoom(FuncTree.zoom);});
    MapsLib.doSearch();

  },
doSearch: function(location) {
	FuncTree.bgrow = false;
	MapsLib.clearSearch();
	MapsLib.polygonTableID=FuncTree.ptbid;
    MapsLib.polygon=new Array();
	try{
		var tl=MapsLib.polygonTableID.length;
		
		map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
		
		for(var i=0; i<tl; i++)
			{
				if(FuncInit.bnm)
					{ var stl= FuncTree.styles[i]; if(stl=="dining"||stl=="star") map.setMapTypeId(google.maps.MapTypeId.ROADMAP); else if(stl=="play"||stl=="ranger_station"||stl=="realestate") map.setMapTypeId(google.maps.MapTypeId.HYBRID); }
				var layer = new google.maps.FusionTablesLayer({
					  query: {from:   MapsLib.polygonTableID[i],select: "geometry"},
					  styles: [{markerOptions: {iconName: stl,},polygonOptions: {fillColor: stl,strokeColor: "#FFFFF0",strokeWeight: "int"},polylineOptions: {strokeColor: stl,strokeWeight: "int"  }},] 
					});
				try{
						if(FuncInit.bnm)
						{
							var chcmp=FuncTree.styles[i+1];
							if(chcmp.charAt(0)!='#'&&chcmp!='NO') {$(FuncTree.updBackG).css('background-image', 'url(' + chcmp+ ')');$(FuncTree.updBackG).css('background-repeat', 'no-repeat');$(FuncTree.updBackG).css('background-size', '100%');}
							else $(FuncTree.updBackG).css('background-image', 'url(http://runsense.github.io/js/f.png)');
							if(stl.charAt(0)!='#') $(FuncInit.idp).css('border-color',stl);
							FuncTree.styles=new Array();
						}		
						google.maps.event.addListener(layer, 'click', function(e){ MapsLib.anLayer(e);});
					}catch(e){;}
				MapsLib.polygon.push(layer);
				MapsLib.polygon[i].setMap(map);	
			}
		}catch(e){;}
		MapsLib.getList();
		$(FuncInit.idtree).focus();
	},
anLayer: function(e){//commande click layer
		if(!FuncTree.bchk&&!FuncTree.bgrow)
							{
								var s= e.infoWindowHtml.split('<b>nom:</b> ')[1].split('<br>')[0];
								FuncTree.bchk=true;
								FuncTab.fsearch(s);	
									var rplc ='#'+s.replace(/ /g,'').replace(/'/g,'');
									  $(FuncInit.idtree).jqxTree('selectItem',$(rplc)[0]);
									MapsLib.chad='#arv'; MapsLib.addrFromLatLng(e.latLng);
								FuncTree.bchk=false;
								return s;
							}
	},
findMe: function() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        fl = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
        MapsLib.chad= '#dep';
		MapsLib.addrFromLatLng(fl);
						map.setCenter(fl);
      }, null);
    }
    else {FuncTree.append('Parametrer Geolocation sur configuration','red');}
  },
addrFromLatLng: function(latLngPoint) {
console.log(latLngPoint);
    MapsLib.geocoder.geocode({'latLng': latLngPoint}, function(results, status) {
	
      if (status == google.maps.GeocoderStatus.OK) {
		  if(results.length>1)
			$(MapsLib.chad).val(results[0].formatted_address.split(',')[0]+','+results[1].formatted_address);
		  else
			$(MapsLib.chad).val(results[0].formatted_address);
        if(MapsLib.chad=='#dep')
			{
				MapsLib.s=results[0].formatted_address;
				$(FuncInit.iditi).css('font-size','20px');$(FuncInit.iditi).css('font-weight','bold');
			}
		else
			{
				MapsLib.e=results[0].formatted_address;
				$(FuncInit.iditi).css('color','red');$(FuncInit.iditi).css('border-color','green');
				
			}
      } else {
        //alert("Geocoder failed due to: " + status);
      }
    });
  },
zoom: function(map) { var bounds = new google.maps.LatLngBounds(); map.data.forEach(function(feature) { MapsLib.processPoints(feature.getGeometry(), bounds.extend, bounds); }); map.fitBounds(bounds);},
processPoints: function(geometry, callback, thisArg) { if (geometry instanceof google.maps.LatLng) { callback.call(thisArg, geometry); } else if (geometry instanceof google.maps.Data.Point) { callback.call(thisArg, geometry.get()); } else {geometry.getArray().forEach(function(g) {MapsLib.processPoints(g, callback, thisArg);});}},
additi :function(butiti){ MapsLib.chad ='#'+ butiti;},
clickmap: function(pos){if(pos!=null) MapsLib.addrFromLatLng(pos.latLng); map.setMapTypeId(google.maps.MapTypeId.HYBRID);},
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
	$(FuncInit.idinf).empty(); FuncTree.append("ALLER sur le Panneau TRANSPARENT en BAS à gauche pour la description </br> (GO ON TRANSPARENT  left down panel)>","blue");
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
			
				var selectColumns = "nom,description,lat,lng";
				var queryStr = []; queryStr.push("SELECT " + selectColumns); queryStr.push(" FROM " +value);
				queryStr.push(" WHERE description CONTAINS '"+FuncTab.search+"' ");
				var sql = encodeURIComponent(queryStr.join(" "));
				//console.log(sql);
				$.ajax({url: "https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback="+callback+"&key="+MapsLib.googleApiKey, dataType: "jsonp", async : false});
},
addrow : function(json) {
	try{MapsLib.handleError(json);}catch( e){ ;}
	var rows = json["rows"];
	for(var r in rows)
		if(rows[r]!=undefined)
		try{
			var rg=[rows[r][0],rows[r][1],rows[r][2],rows[r][3]];
			MapsLib.row.push(rg);
		}catch(e){;}
	$(FuncInit.idtab).fadeIn('fast');
},
displayList: function() {
	MapsLib.cpte=0;
	for (var row in MapsLib.row)
		try{
			FuncTab.list_table += "\
			  <tr >\
				<td >" + MapsLib.row[row][0] + "</td><td >" + MapsLib.row[row][1] + "</td>\
				<td   style='color:blue;width:20px;' >" + MapsLib.row[row][2] + "</td>\
				<td   style='color:blue;width:20px;' >" + MapsLib.row[row][3] + "</td>\
			  </tr>";
		}catch(e){;}
},
handleError: function(json) { if (json["error"] != undefined){var error = json["error"]["errors"];console.log("Error in Fusion Table call!");for (var row in error) { console.log(" Domain: " + error[row]["domain"]);console.log(" Reason: " + error[row]["reason"]);console.log(" Message: " + error[row]["message"]);}}}
}

