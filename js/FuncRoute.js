var FuncRoute = FuncRoute || {};
var FuncRoute = {
  directionsDisplay : new google.maps.DirectionsRenderer(),
  directionsService : new google.maps.DirectionsService(),
  calcRoute: function () {
			$('#itin').empty();
			$('#itin').show();
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
					   FuncRoute.directionsDisplay.setPanel(document.getElementById('itin'));
					  
					   $('#jqxTree').hide();
					   $('small').hide();
					   
					   $('#btn').unbind();
					   
					   $('#btn').bind('click',function(){
							$(this).hide();
							$('#jqxTree').show();
							$('#itin').hide();
							$('#dep').val(null);$('#arv').val(null);
							MapsLib.s=null;MapsLib.e=null;
							$("#listv").on("mouseenter",function(){
		  
								$(this).animate({
									opacity: '1',
									height: '100%',
									width: '70%'
								});
								$('#map_canvas').animate({
									opacity: '0.3'
								});
								$('#itin').empty();
								FuncTree.append("<small>Revenir MAP </small>(A DROITE)"
								,"green");
							});
							FuncRoute.directionsDisplay = new google.maps.DirectionsRenderer();
							FuncRoute.directionsService = new google.maps.DirectionsService();
							MapsLib.initialize();
					});
					   $('#btn').show();
					   $('#btn').css("color","red");
					
					   $("#listv").off();
					   
					}else
					{
						$('#itin').append("impossible de tracer l'itinéraire");
						$('#itin').css("color","red");
					}
				  });
				  
				  
				  MapsLib.doSearch();
			  }
    }
};