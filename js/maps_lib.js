/*!
 * Runsense 97Kafr
 *
 * Copyright 2018, Dalleau Pascal
 *
 */

google.maps.visualRefresh = true;


//"AIzaSyDc_KEt2MhrQFwbLEZz-DFzZAIE3Dyr_NA" 
var MapsLib = MapsLib || {};
var MapsLib = {
  s                 :null,
  e                 :null,
  cpte				:0,
  chad:               '',
  datajson          :['',''],
  geocoder          : new google.maps.Geocoder(),
  polygonTableID    :[],
  polygon           : new Array(),
  googleApiKey		: "AIzaSyD49JCPjbwMZpVekOIPjWM6GQwEr6VCe8A",
  locationColumn	: "lat",
  map_centroid		: new google.maps.LatLng(-21.137472,55.546906),
  locationScope		: "reunion", 
  recordName		: "result", 
  recordNamePlural	: "results",  
  defaultZoom		: 10,

initialize: function() {
	MapsLib.geocoder = new google.maps.Geocoder();
	try{
		FuncRoute.directionsDisplay = new google.maps.DirectionsRenderer();
	}catch(e)
	{
		;
	}
    var myOptions = {
      zoom: MapsLib.defaultZoom,
      center: MapsLib.map_centroid,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styleId: 2,
	  templateId: 1
    };
    map = new google.maps.Map($("#map_canvas")[0],myOptions);
	
	google.maps.event.addListener(map, "click", function(event) {
                        MapsLib.clickmap(event);
    });
						 
        
		
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(MapsLib.map_centroid);
		map.setZoom(FuncTree.zoom);
    });

	try{
		FuncRoute.directionsDisplay.setMap(map);
	}catch(e)
	{
		;
	}
	google.maps.event.addListener(map, 'mouseover', function(event) {
                map.setZoom(FuncTree.zoom);
    });
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
				var stl= FuncTree.styles[i];
							if(stl=="play"||stl=="dining"||stl=="star"||stl=="ranger_station")
								map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
							
								
					
				var layer = new google.maps.FusionTablesLayer({
					  query: {
						from:   MapsLib.polygonTableID[i],
						select: "geometry"
					  },
					  styles: [{
					  markerOptions: {
						iconName: stl,
					  },
					  polygonOptions: {
						fillColor: stl,
						strokeColor: "#FFFFF0",
						strokeWeight: "int"
					  },
					  polylineOptions: {
						strokeColor: stl,
						strokeWeight: "int"  }
					},
					
					  ] 
					  
					});
				
					try{
							var chcmp=FuncTree.styles[i+1];
						if(chcmp.charAt(0)!='#'&&chcmp!='NO')
							{
								$(FuncTree.updBackG).css('background-image', 'url(' + chcmp+ ')');
								$(FuncTree.updBackG).css('background-repeat', 'no-repeat');
								$(FuncTree.updBackG).css('background-size', '100%');
							}
						else
							$(FuncTree.updBackG).css('background-image', 'url(http://runsense.github.io/js/f.png)');
							
							if(stl.charAt(0)!='#')
								$("#panel").css('border-color',stl);
							
								
								
							FuncTree.styles=new Array();
							
						google.maps.event.addListener(layer, 'click', function(e) {
								MapsLib.anLayer(e);
						});
					}catch(e)
						{
							;
						}
				MapsLib.polygon.push(layer);
				MapsLib.polygon[i].setMap(map);	
				
				
			}
			
		}catch( ex)
		{
			;
		}
		
		MapsLib.getList();
		$("#jqxTree").jqxTree('selectItem', null);
		
	},
anLayer: function(e){
		if(!FuncTree.bchk&&!FuncTree.bgrow)
							{
								FuncTree.bchk=true;
										var rplc ='#'+e.infoWindowHtml.split('<b>nom:</b> ')[1].split('<br>')[0]
											.replace(/ /g,'').replace(/'/g,'');
										
										$('#jqxTree').jqxTree('selectItem',$(rplc)[0]);
										
										
										   MapsLib.chad='#arv';
										   MapsLib.addrFromLatLng(e.latLng);
										   var z= map.getZoom();
										   $('.dataTables_scrollBody').animate({
													scrollTop: $('#list_table tbody tr').offset().top
											}, 400);
											$(rplc).mouseover();
											
								FuncTree.bchk=false;
							}
	},
findMe: function() {
    // Try W3C Geolocation (Preferred)
    var foundLocation;

    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        foundLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
        MapsLib.addrFromLatLng(foundLocation);
      }, null);
    }
    else {
      alert("Sorry, we could not find your location.");
    }
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
				$('#iti').css('font-size','20px');$('#iti').css('font-weight','bold');
			}
		else
			{
				MapsLib.e=results[0].formatted_address;
				$('#iti').css('color','red');$('#iti').css('border-color','green');
				
			}
      } else {
        //alert("Geocoder failed due to: " + status);
      }
    });
  },
zoom: function(map) {
              var bounds = new google.maps.LatLngBounds();
			
              map.data.forEach(function(feature) {
			  
                MapsLib.processPoints(feature.getGeometry(), bounds.extend, bounds);
              });
              map.fitBounds(bounds);
  },
processPoints: function(geometry, callback, thisArg) {
              if (geometry instanceof google.maps.LatLng) {
                callback.call(thisArg, geometry);
              } else if (geometry instanceof google.maps.Data.Point) {
                callback.call(thisArg, geometry.get());
              } else {
                geometry.getArray().forEach(function(g) {
                  MapsLib.processPoints(g, callback, thisArg);
                });
              }
  },
additi :function(butiti){
              MapsLib.chad ='#'+ butiti;
  },
clickmap: function(pos)
                {
                 
                   if(pos!=null)
                    {
                        MapsLib.addrFromLatLng(pos.latLng);
                       
                    }
                   

                    map.setMapTypeId(google.maps.MapTypeId.HYBRID)

  },
clearSearch: function() {
   MapsLib.polygonTableID=null;
	for(var i=0;i<MapsLib.polygon.length;i++)
		if (MapsLib.polygon[i] != null)
			{
				MapsLib.polygon[i].setMap(null);
				MapsLib.polygon[i]=null;
			}
    map.setCenter(MapsLib.map_centroid);
	map.setZoom(FuncTree.zoom);
  },
query: function(selectColumns, limit, callback) {
	
	for(var i in MapsLib.polygonTableID)
	{
		if(MapsLib.polygonTableID[i]!="NO")
		{
			MapsLib.cpte=i;
			$("#listv").append("<div title='Revenir MAP A DROITE(View MAP RIGHT)' id="+i+" style='background-color: #FFFFFF;'/>");
			var queryStr = [];
			queryStr.push("SELECT " + selectColumns);
			queryStr.push(" FROM " + MapsLib.polygonTableID[i]);
			

			var sql = encodeURIComponent(queryStr.join(" "));
			$.ajax({url: "https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback="+callback+"&key="+MapsLib.googleApiKey, dataType: "jsonp"});
		}else
		{
			$("#listv").empty();
			$("#listv").append("<div  id="+i+" style='background-color: #FF0000;>NO DATA</div>");
		}
			
	}
	
	$('#info').empty();
	
	FuncTree.append("ALLER sur le Panneau TRANSPARENT en BAS à gauche pour la description </br> (GO ON TRANSPARENT  left down panel)>","blue");
	
	
  },
getList: function() {
    var selectColumns = "categ,nom,description,lat,lng";
    MapsLib.query(selectColumns, 10, "FuncTab.displayList");
  },
handleError: function(json) {
    if (json["error"] != undefined) {
      var error = json["error"]["errors"]
      console.log("Error in Fusion Table call!");
      for (var row in error) {
        console.log(" Domain: " + error[row]["domain"]);
        console.log(" Reason: " + error[row]["reason"]);
        console.log(" Message: " + error[row]["message"]);
      }
    }
  }
}

