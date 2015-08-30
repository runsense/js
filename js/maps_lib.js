/*!
 * Runsense 97Kafr
 *
 * Copyright 2018, Dalleau Pascal
 *
 */

google.maps.visualRefresh = true;


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

