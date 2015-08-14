/*!
 * Runsense 97Kafr
 *
 * Copyright 2018, Dalleau Pascal
 *
 */


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
	
   
    MapsLib.doSearch();

  },

  doSearch: function(location) {
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
					},
					
					  ] 
					  
					});
					
				MapsLib.polygon.push(layer);
					
				
				
			}
			
		}catch( ex)
		{
			;
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
   
  },
  tabToMap: function(lat,lng) {
		if(lat>-22)
			{
				if(lng<55.8)
				{
					
					MapsLib.map_centroid = new google.maps.LatLng(lat,lng);
						map.setCenter(MapsLib.map_centroid);
					FuncTree.zoom=16;
						map.setZoom(FuncTree.zoom);
					$('#listv').animate({
						opacity: '0.3',
						height: '30%',
						width: '100%'
					});
					$('#map_canvas').animate({
						opacity: '1'
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

