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
		if(tl!=0)
			map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
		
		
		for(var i=0; i<tl; i++)
			{
			
				var layer = new google.maps.FusionTablesLayer({
					  query: {
						from:   MapsLib.polygonTableID[i],
						select: "geometry"
					  },
					  styles: [{
					  markerOptions: {
						iconName: FuncTree.styles[i],
					  },
					  polygonOptions: {
						fillColor: FuncTree.styles[i],
						strokeColor: "#FFFFF0",
						strokeWeight: "int"
					  },
					  polylineOptions: {
						strokeColor: FuncTree.styles[i],
						strokeWeight: "int"  }
					}] 
					  
					});
					try{
							var chcmp=FuncTree.styles[i+1];
						if(chcmp.charAt(0)!='#'&&chcmp!='NO')
							{
								$(FuncTree.updBackG).css('background-image', 'url(' + FuncTree.styles[i+1] + ')');
								$(FuncTree.updBackG).css('background-repeat', 'no-repeat');
								$(FuncTree.updBackG).css('background-size', '100%');
							}
						else
							$(FuncTree.updBackG).css('background-image', 'url(http://runsense.github.io/js/f.png)');
							
							$("#panel").css('border-color',FuncTree.styles[i]);
							FuncTree.styles=new Array();
							
						google.maps.event.addListener(layer, 'click', function(e) {
						  /* var tmp=$("#listv").html();
						   $("#listv").empty();
							$("#listv").append("<div title='Revenir MAP (A DROITE)' id='finfo' '/>");
								$("#finfo").append("<div title='Revenir MAP (A DROITE)' id='infoclic' style='background-color: #FFFFFF;'/>");
									$("#finfo").prepend("<fieldset style='width:100px;'><legend>Information du clic</legend>");
									   $("#infoclic").append(e.infoWindowHtml);
									   $("#infoclic").append(tmp);
									$("#finfo").append("</fieldset>");*/
									
						   MapsLib.chad='#arv';
						   MapsLib.addrFromLatLng(e.latLng);
						
								map.setZoom(13);
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
    MapsLib.geocoder.geocode({'latLng': latLngPoint}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
		  if(results.length>1)
			$(MapsLib.chad).val(results[0].formatted_address.split(',')[0]+','+results[1].formatted_address);
		  else
			$(MapsLib.chad).val(results[0].formatted_address);
        if(MapsLib.chad=='#dep')
			{
				MapsLib.s=results[0].formatted_address;
				
			}
		else
			{
				MapsLib.e=results[0].formatted_address;
				
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
			$("#listv").append("<div title='Revenir MAP (A DROITE)' id="+i+" style='background-color: #FFFFFF;'/>");
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
	
	$('#itin').empty();
	
	FuncTree.append("poser la souris sur le Panneau TRASPARENT en BAS à gauche pour la description","blue");
	
	
  },
  
  getList: function() {
    var selectColumns = "nom,description,lat,lng";
    MapsLib.query(selectColumns, 10, "MapsLib.displayList");
  },

  displayList: function(json) {
	try{
		MapsLib.handleError(json);
		}catch( e)
		{ ;}
    var columns = json["columns"];
	
    var rows = json["rows"];
	var rplc="#"+MapsLib.cpte;
   var results = $(rplc);
    results.empty(); //hide the existing list and empty it out first

    if (rows == null) {
      //clear results list
      results.append("<span class='lead'>No results found</span>");
      }
    else {

      //set table headers
	  var l = rows.length;
      var list_table = "\
      <table class='table' id ='list_table'>\
        <thead>\
          <tr>\
            <th>Nom</th>\
			<th>Description </th><th style='background-color:blue'>taille: "+l +"</th>\
          </tr>\
        </thead>\
        <tbody>";
		var lat=null;
		var lng=null;
		var row;
		
      for ( row in rows) {
        var nom = rows[row][0];
        var desc = rows[row][1];
		 lat = rows[row][2];
		 lng = rows[row][3];
			
        list_table += "\
          <tr id="+nom+">\
            <td >" + nom + "</td>\
			<td >" + desc + "</td>\
          </tr>";
      }
		
      list_table += "\
          </tbody>\
        </table>";
		if(lat!=""&&lng!="")
			{
				if(lng<55.8)
				{
					
					MapsLib.map_centroid= new google.maps.LatLng(lat,lng);
					map.setCenter(MapsLib.map_centroid);
				}
				
			}
      results.append(list_table);
     // alert(row);
		if(row>=10)
		  {
			$("#list_table").dataTable({
			  "aoColumns": [ // tells DataTables how to perform sorting for each column
				  null, 
				  null
			  ],
			  
			  "bFilter": false, // disable search box 
			  "bInfo": false, //results count
			  "sPaginationType": "bootstrap", // custom CSS for pagination in Bootstrap
			  "bAutoWidth": false
			});
		  }
    }

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

