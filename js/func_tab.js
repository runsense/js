//Objet creation tableau de réponse json
var FuncTab = FuncTab || {};
var FuncTab = {
 results		: null,
 idx			: 0,
displayList: function(json) {
	try{
		MapsLib.handleError(json);
		}catch( e)
		{ ;}
    var columns = json["columns"];
	
    var rows = json["rows"];
	var rplc="#"+MapsLib.cpte;
   FuncTab.results = $(rplc);
    FuncTab.results .empty(); //hide the existing list and empty it out first

    if (rows == null) {
      //clear results list
      FuncTab.results.append("<span class='lead'>No results found</span>");
      }
    else {

      FuncTab.cRows(rows)
    }

   },
cRows: function(rows)
   {
		//set table headers
	  var l = rows.length;
      var list_table = "\
      <table class='table' id ='list_table'>\
        <thead>\
          <tr>\
			<th></th>\
            <th>Nom (NAME)</th>\
			<th>Description (INFO)</th>\
          </tr>\
        </thead>\
        <tbody>";
		var lat=null;
		var lng=null;
		var row;
		
      for ( row in rows) {
		var ctg = rows[row][0];
        var nom = rows[row][1];
        var desc = rows[row][2];
		 lat = rows[row][3];
		 lng = rows[row][4];
			if(ctg.split("http:").length==1)
				{
					var spl= ctg.split("*");
					var lg= spl.length;
					if(lg==1)
					{
						ctg="<img src='http://runsense.github.io/js/img/ico/"+ctg+".png' style='width: 30px;height: 30px'></img>";
					}else
					{
						ctg='';
						for(var i in spl)
							ctg=ctg+"<img src='http://runsense.github.io/js/img/ico/"+spl[i]+".png' style='width: 15px;height: 30px'></img>";
					}
				}
			else
				ctg="<img src='"+ctg+"' style='width: 30px;height: 30px'></img>";
					
        list_table += "\
          <tr id="+nom.replace(/ /g,'').replace(/'/g,'')+">\
			<td >" +ctg + "</td>\
            <td >" + nom + "</td>\
			<td >" + desc + "</td>\
			<td style='visibility:hidden;' >" + lat + "</td>\
			<td style='visibility:hidden;' >" + lng + "</td>\
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
      FuncTab.results.append(list_table);
     // alert(row);
		if(row>=10)
		  {
			$("#list_table").dataTable({
			 
			  "aoColumns": [ // tells DataTables how to perform sorting for each column
				  null, 
				  null, 
				  null,
				  null, 
				  null
			  ],
			  "sDom": '<"top"pf>rt<"bottom"lip><"clear">',
			  "bFilter": true, // disable search box 
			  "bInfo": true, //results count
			  //"sPaginationType": "bootstrap", // custom CSS for pagination in Bootstrap
			  //"scrollY":        "400px",
			  "scrollCollapse": false,
			  "paging":         true,
			  "bAutoWidth": false
			});
			
		  }
		  
			
			$(".table tbody").on( 'click', 'tr', function (){
				if(!FuncTree.bchk)
				{
					FuncTree.bchk=true;
					var nm ='#'+$(this).children('td:nth-child(2)').text().replace(/ /g,'');
					
					var lat = $(this).children('td:nth-child(4)').text();
				
					var lng = $(this).children('td:nth-child(5)').text();
					
					FuncTab.tabToMap(lat,lng);
					
					$("#jqxTree").jqxTree('selectItem', $(nm)[0]);
					FuncTree.bchk=false;
				}
			}).on( 'mouseover', 'td', function (){
				$(this).css("background","#B8860B");
					/*FuncTab.idx= this.rowIndex-FuncTab.idx;
						
						$('.dataTables_scrollBody').animate({
								scrollTop: $('#list_table tbody tr').offset().top
						}, FuncTab.idx*180);*/
				
				
			  }).on( 'mouseleave', 'td',
			  function () {
				$(this).css("background","");
			  }
			);
			//$("#list_table").on( 'page.dt',   function () {console.log('change page');} ).dataTable
   },
tabToMap: function(lat,lng) {
		if(lat>-22)
			{
				if(lng<55.8)
				{
					
					MapsLib.map_centroid = new google.maps.LatLng(lat,lng);
						map.setCenter(MapsLib.map_centroid);
					FuncTree.zoom=16;
						map.setMapTypeId(google.maps.MapTypeId.HYBRID)
						map.setZoom(FuncTree.zoom);
					$('#listv').animate({
						opacity: '0.3',
						height: '30%',
						//width: '100%'
					});
					$('#map_canvas').animate({
						opacity: '1'
					});
					
				}
			}
			
   }
}