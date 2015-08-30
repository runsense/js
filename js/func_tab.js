//Objet creation tableau de réponse json

var FuncTab = FuncTab || {};
var FuncTab = {
 results		: null,
 idx			: 0,
 search			: "",
 fsearch		: function(s){var rplc ='#'+s.replace(/ /g,'').replace(/'/g,'');var table= $("#list_table").dataTable();table.fnFilter(s);$(rplc).mouseover();},
 list_table		:"",
 lat			:null,
 lng			:null,
 displayList: function(json) {
	try{MapsLib.handleError(json);}catch( e){ ;}
    var columns = json["columns"];var rows = json["rows"];var rplc="#"+MapsLib.cpte;
    FuncTab.results = $(rplc);FuncTab.results .empty(); 
	if (rows == null) { FuncTab.results.append("<span class='lead'>No results found</span>"); }
    else { FuncTab.crTb(); FuncTab.cRows(rows); FuncTab.fnsTb(); }
},
crTb: function()
{
	var rplc="#"+0;
    FuncTab.results = $(rplc);FuncTab.results .empty(); 
	FuncTab.list_table = "<table class='table' id ='list_table'><tbody>";

},
fshBDD:  function()
{
	
	FuncTab.list_table += "</tbody></table>";
		if(FuncTab.lat!=""&&FuncTab.lng!="") {if(FuncTab.lng<55.8){MapsLib.map_centroid= new google.maps.LatLng(FuncTab.lat,FuncTab.lng);map.setCenter(MapsLib.map_centroid);}}
      FuncTab.results.append(FuncTab.list_table);
	  $("#list_table").dataTable({
			"aoColumns": [null,null,null,null],
			  "sDom": '<"top"pf>rt<"bottom"lip><"clear">',
			  "bFilter": true,"bInfo": true,"scrollY":"450px","scrollCollapse": true,"paging":true,"bAutoWidth": false
			});
	$(".table tbody").on( 'click', 'tr', function (){
				if(!FuncTree.bchk)
				{
					
					var lat = $(this).children('td:nth-child(3)').text();
					var lng = $(this).children('td:nth-child(4)').text();
					FuncTab.tabToMap(lat,lng);
					var ad=$('#arv').val();
					FuncTree.ptbid=new Array();
					MapsLib.doSearch();
					MapsLib.addrMarker = new google.maps.Marker({
						position: MapsLib.map_centroid,
						map: map,
						animation: google.maps.Animation.DROP,
						title:ad
				  });
					$(FuncInit.idmap).focus();
					FuncTree.zoom=13;
				
				FuncInit.bnm=true;
				}
			}).on( 'mouseover', 'tr',
			  function () {
				$(this).css("background","#0404B4");
			  }).on( 'mouseleave', 'tr',
			  function () {
				$(this).css("background","");
			  }
			).on( 'mouseover', 'td', function (){
				$(this).css("background","#B8860B");
				$(this).css("fontSize","180%");
			}).on( 'mouseleave', 'td',
			  function () {
				$(this).css("background","");
				$(this).css("fontSize","100%");
			  }
			);
},
fnsTb: function()
{
	FuncTab.list_table += "</tbody></table>";
		if(FuncTab.lat!=""&&FuncTab.lng!="") {if(FuncTab.lng<55.8){MapsLib.map_centroid= new google.maps.LatLng(FuncTab.lat,FuncTab.lng);map.setCenter(MapsLib.map_centroid);}}
      FuncTab.results.append(FuncTab.list_table);
     $("#list_table").dataTable({
			"aoColumns": [null,null,null,null,null,null],
			  "sDom": '<"top"pf>rt<"bottom"lip><"clear">',
			  "oSearch": {"sSearch": FuncTab.search},
			  "bFilter": true,"bInfo": true,"scrollY":"450px","scrollCollapse": true,"paging":true,"bAutoWidth": false
			});
	$(".table tbody").on( 'click', 'tr', function (){
				if(!FuncTree.bchk)
				{
					FuncTree.bchk=true;
					var nm ='#'+$(this).children('td:nth-child(2)').text().replace(/ /g,'');
					var lat = $(this).children('td:nth-child(5)').text();
					var lng = $(this).children('td:nth-child(6)').text();
					FuncTab.tabToMap(lat,lng);
					$(FuncInit.idtree).jqxTree('selectItem', $(nm)[0]);
					FuncTree.bchk=false;
					$(FuncInit.idmap).focus();
				}
			}).on( 'mouseover', 'tr',
			  function () {
				$(this).css("background","#0404B4");
			  }).on( 'mouseleave', 'tr',
			  function () {
				$(this).css("background","");
			  }
			).on( 'mouseover', 'td', function (){
				$(this).css("background","#B8860B");
				$(this).css("fontSize","180%");
			}).on( 'mouseleave', 'td',
			  function () {
				$(this).css("background","");
				$(this).css("fontSize","100%");
			  }
			);
},
cRows: function(rows)
   {
	for (var row in rows) {
		var ctg = rows[row][0];
        var nom = rows[row][1];
        var desc = rows[row][2];
		 FuncTab.lat = rows[row][3];
		 FuncTab.lng = rows[row][4];
			if(ctg.split("http:").length==1)
				{ var spl= ctg.split("*"); var lg= spl.length; if(lg==1) { ctg="<img src='http://runsense.github.io/js/img/ico/"+ctg+".png' style='width: 30px;height: 30px'></img>"; }else { ctg=''; for(var i in spl) ctg=ctg+"<img src='http://runsense.github.io/js/img/ico/"+spl[i]+".png' style='width: 15px;height: 30px'></img>";}}
			else ctg="<img src='"+ctg+"' style='width: 30px;height: 30px'></img>";
					
        FuncTab.list_table += "\
          <tr id="+nom.replace(/ /g,'').replace(/'/g,'')+">\
			<td >" +ctg + "</td><td >" + nom + "</td><td >" + desc + "</td><td >" +ctg + "</td><td style='color:blue;width:20px;' >" + FuncTab.lat + "</td><td style='color:blue;width:20px;' >" + FuncTab.lng + "</td>\
          </tr>";
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
						map.setMapTypeId(google.maps.MapTypeId.HYBRID)
						map.setZoom(FuncTree.zoom);
					$(FuncInit.idtab).animate({ opacity: '0.3', height: '30%'});
					$(FuncInit.idmap).animate({ opacity: '1' });
					MapsLib.chad='#arv';
					MapsLib.addrFromLatLng(MapsLib.map_centroid);
				}
			}
	}
}