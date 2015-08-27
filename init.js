//<![CDATA[
        $(window).resize(function () {
          var h = $(window).height(),
            offsetTop = 105; 
        
          $(FuncInit.idmap).css('height', (h - offsetTop));
        }).resize();
        
        $(function() {
		
          MapsLib.initialize();

		  $("body").css('background-image', FuncTree.styles[1]);
		  $("body").css('background-repeat', 'no-repeat');
		  $("body").css('background-size', '100%');
		  $("#fl").bind('click',function(){
			MapsLib.findMe();
		  });
		  $(FuncInit.idtab).on("mouseenter",function(){
				
				$(this).animate({
					opacity: '0.75',
					height: '100%',
					width: '70%'
				});
				$(FuncInit.idmap).animate({
					opacity: '0.3'
				});
				$(FuncInit.idp).animate({
						opacity: '0.3'
					});
				$('body').animate({
					height: '100% !important',
					margin: '0px !important',
					padding: '0px !important',
				});
				$(FuncInit.idinf).empty();
				FuncTree.append("<small>Revenir MAP </small>(A DROITE)"
								,"green");
				$(FuncInit.idinf).bind('click',function(){
					$(FuncInit.idtab).animate({
						opacity: '1',
						height: '15%',
						width: '100%'
					});
					$(FuncInit.idmap).animate({
						opacity: '1'
					});
					$(FuncInit.idp).animate({
						opacity: '1'
					});
				
				});
				
			});
			$(FuncInit.idinf).bind('click',function(){
					$(FuncInit.idtab).animate({
						opacity: '0.75',
						height: '100%',
						width: '70%'
					});
					$(FuncInit.idmap).animate({
						opacity: '0.3'
					});
					$(FuncInit.idp).animate({
						opacity: '0.3'
					});
				});
		
		  $(FuncInit.idp).hover(function(){
				$(FuncInit.idtab).animate({
					opacity: '1',
					height: '15%',
					width: '100%'
				});
				$(FuncInit.idmap).animate({
					opacity: '1'
				});
				$(FuncInit.idp).animate({
						opacity: '1'
					});
			
			});
		$("#rtrm").click(function(){
				$(FuncInit.idtab).animate({
					opacity: '1',
					height: '15%',
					width: '100%'
				});
				$(FuncInit.idmap).animate({
					opacity: '1'
				});
				$(FuncInit.idp).animate({
					opacity: '1'
				});
			});
	
		  $(FuncInit.idbtn).bind('click',function(){//init itin
			$('small').show();
            $(FuncInit.idbox).show();
			$(FuncInit.idinf).hide();
			$('#dep').val(null);$('#arv').val(null);
			$(FuncInit.idtab).show();
			$(FuncInit.iditi).css('color','blue');$(FuncInit.iditi).css('border-color','#FFFF00');$(FuncInit.iditi).css('font-size','15px');$(FuncInit.iditi).css('font-weight','none');
			MapsLib.s=null;MapsLib.e=null;
			 $(FuncInit.idbtn).hide();
          });
		  $(FuncInit.idinf).bind('click',function(){
				$(FuncInit.idtab).animate({
					opacity: '1',
					height: '15%',
					width: '100%'
				});
				$(FuncInit.idmap).animate({
					opacity: '1'
				});
				$(FuncInit.idp).animate({
					opacity: '1'
				});
			});
		$('#clear').css('color','blue');$('#clear').css('border-color','blue');		
		$('#clear').bind('click',function(){
			var items = $(FuncInit.idbox).jqxTree('getCheckedItems');
					for(var i in items)
							$(FuncInit.idbox).jqxTree('uncheckItem', items[i].element);
			$(FuncInit.idbox).jqxTree({checkboxes: true, source: FuncTree.source, width: '100%', height: 'auto', theme: 'summer' });
			$(FuncInit.idbox).jqxTree('refresh');
			
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
		  $(FuncInit.idmap).mouseleave(function(){
			
				FuncRoute.calcRoute();
			
			 return true;
          });
		  $(FuncInit.iditi).click(function(){
             FuncRoute.calcRoute();
				
            return true;
          });
	
        });
      //]]>