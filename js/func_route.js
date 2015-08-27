//Objet Itinéraire Google
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
					  
					   $(FuncInit.idbox).hide();
					   $('small').hide();
					   
					   $(FuncInit.idbtn).unbind();
					   
					   $(FuncInit.idbtn).bind('click',function(){
							$(this).hide();
							$(FuncInit.idbox).show();
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