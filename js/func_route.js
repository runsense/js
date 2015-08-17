var FuncRoute = FuncRoute || {};
var FuncRoute = {
  directionsDisplay : new google.maps.DirectionsRenderer(),
  directionsService : new google.maps.DirectionsService(),
  calcRoute: function () {
			$('#info').empty();
			$('#info').show();
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
					   $('#info').empty();
					   FuncRoute.directionsDisplay.setPanel(document.getElementById('info'));
					  
					   $('#jqxTree').hide();
					   $('small').hide();
					   
					   $('#btn').unbind();
					   
					   $('#btn').bind('click',function(){
							$(this).hide();
							$('#jqxTree').show();
							$('#info').hide();
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
								$('#info').empty();
								FuncTree.append("<small>Revenir MAP (RETURN MAP) </small>(A DROITE)"
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
						$('#info').empty();
						$('#info').append("<h1>adresse non reconnu!!(UNKNOW ADRESSE)</h1>");
						$('#info').css("color","#000");
						$('#info').css("background-color","red");
					}
				  });
				  
				  
				  MapsLib.doSearch();
			  }
    }
};