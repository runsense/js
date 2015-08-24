//<![CDATA[
        $(window).resize(function () {
          var h = $(window).height(),
            offsetTop = 105; 
        
          $('#map_canvas').css('height', (h - offsetTop));
        }).resize();
        
        $(function() {
		
          MapsLib.initialize();

		  $("body").css('background-image', FuncTree.styles[1]);
		  $("body").css('background-repeat', 'no-repeat');
		  $("body").css('background-size', '100%');
		
		  $("#listv").on("mouseenter",function(){
		  
				$(this).animate({
					opacity: '0.75',
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
				$('#info').empty();
				FuncTree.append("<small>Revenir MAP </small>(A DROITE)"
								,"green");
			})
			;
		
		  $("#panel").hover(function(){
				$('#listv').animate({
					opacity: '0.3',
					height: '15%',
					width: '100%'
				});
				$('#map_canvas').animate({
					opacity: '1'
				});
			
			});
		$("#rtrm").click(function(){
				$('#listv').animate({
					opacity: '0.3',
					height: '15%',
					width: '100%'
				});
				$('#map_canvas').animate({
					opacity: '1'
				});
			
			});
	
		  $('#btn').bind('click',function(){
			$('small').show();
            $('#jqxTree').show();
			$('#info').hide();
			$('#dep').val(null);$('#arv').val(null);
			$('#listv').show();
			$('#iti').css('color','blue');$('#iti').css('border-color','#FFFF00');$('#iti').css('font-size','15px');$('#iti').css('font-weight','none');
			MapsLib.s=null;MapsLib.e=null;
          });
		$('#clear').css('color','blue');$('#clear').css('border-color','blue');		
		$('#clear').bind('click',function(){
			var items = $('#jqxTree').jqxTree('getCheckedItems');
					for(var i in items)
							$('#jqxTree').jqxTree('uncheckItem', items[i].element);
			
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
	

        });
      //]]>