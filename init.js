//<![CDATA[
        $(window).resize(function () {
          var h = $(window).height(),
            offsetTop = 105; // Calculate the top offset
        
          $('#map_canvas').css('height', (h - offsetTop));
        }).resize();
        
        $(function() {
		
          MapsLib.initialize();

		  $("body").css('background-image', FuncTree.styles[1]);
		  $("body").css('background-repeat', 'no-repeat');
		  $("body").css('background-size', '100%');
		
		  $("#listv").on("mouseenter",function(){
		  
				$(this).animate({
					opacity: '1',
					height: '100%',
					width: '70%'
				});
				$('#map_canvas').animate({
					opacity: '0.3'
				});
				$('body').animate({
					height: '100% !important',
					margin: '0px !important',
					padding: '0px !important',
				});
				$('#itin').empty();
				FuncTree.append("<small>Revenir MAP </small>(A DROITE)"
								,"green");
			})
			;
		$("#panel").css('background','none');
		  $("#panel").hover(function(){
				$('#listv').animate({
					opacity: '0.3',
					height: '30%',
					width: '100%'
				});
				$('#map_canvas').animate({
					opacity: '1'
				});
			
			});
		 /* $("small").hover(function(){
				$('#listv').animate({
					opacity: '0.3',
					height: '30%',
					width: '30%'
				});
				$('#map_canvas').animate({
					opacity: '1'
				});
			
			});*/
		  $('#btn').bind('click',function(){
			$('small').show();
            $('#jqxTree').show();
			$('#itin').hide();
			$('#dep').val(null);$('#arv').val(null);
			$('#listv').show();
			
			MapsLib.s=null;MapsLib.e=null;
          });
		
		  $('#find_me').click(function(){
            MapsLib.findMe(); 
            return false;
          });
		  $('#dep').click(function(){
            MapsLib.additi('dep'); 
            return true;
          });
		  $('#arv').click(function(){
            MapsLib.additi('arv'); 
			 return true;
          });
		  $('#map_canvas').mouseleave(function(){
			FuncRoute.calcRoute();
			 return true;
          });
		  $('#iti').click(function(){
             FuncRoute.calcRoute();
				
            return true;
          });
			//$("#jqxTree").jqxTree('expandItem', $("#E")[0]);

        });
      //]]>