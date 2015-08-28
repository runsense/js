//Objet Librairie Variable
var FuncInit= FuncInit || {};
var FuncInit={
	idtree	: "#jqxTree",
	idtab	: "#listv",
	idmap	: "#map_canvas",
	idp		: "#panel",
	idinf	: "#info",
	iditi	: "#iti",
	idbtn	: "#btn",
	txtInit : ["terain et jeux POOL" //0
				,"sentiers et routes PATH & ROAD"	//1
				,"manger & dormir EAT & SLEEP"		//2
				,"Lieu dit et quartier PLACE & QUARTER"	//3
				,"boite de nuit & pub NIGHT CLUB & FESTIVALS"	//4
				,"loisirs, info marinne ENTERTAINEMENT & SEA INFO"//5
				,"http://runsense.github.io/js/img/"//6
				,"http://maps.google.com/mapfiles/kml/shapes/"//7
				,".png"					//8
				,"<span style='background-color: #FFF;'>"//9
				," </span>"				//10
				,"http://runsense.github.io/js/img/blason/"//11
				,".gif"]//12
				,
	srcId 	: [{label:'Mafate',value:'Mafate',id:'Ma'},{label:'Saint-Gilles',value:'Saint-Gilles',id:'SG'},{label:'Saint-Leu',value:'Saint-Leu',id:'SL'},
				{label:'Trois-Bassins',value:'TroisBassins',id:'TB'},{label:'Saint-Paul',value:'Saint-Paul',id:'SPA'},{label:'l Etang Salé',value:'EtangSalé',id:'ES'},{label:'Entre-Deux',value:'Entre-Deux',id:'ED'},{label:'Les Avirons',value:'LesAvirons',id:'AV'},
				{label:'Saint-Pierre',value:'Saint-Pierre',id:'SPI'},{label:'Saint-Joseph',value:'Saint-Joseph',id:'SJ'},{label:'Petite Ile',value:'PetiteIle',id:'PI'},{label:'Saint-Louis',value:'Saint-Louis',id:'SLO'},{label:'Cilaos',value:'Cilaos',id:'CI'},{label:'Tampon',value:'Tampon',id:'T'},{label:'La Plaine des Cafres',value:'LaPlaineDesCafres',id:'PC'},{label:'Volcan' ,value:'enclosduTremblet',id:'ET'},
				{label:'Saint-Phillippe',value:'Saint-Phillippe',id:'SPH'},{label:'Saint-Denis',value:'Saint-Denis',id:'SD'},{label:'Sainte-Marie',value:'Sainte-Marie',id:'SM'},{label:'Sainte-Suzanne',value:'Sainte-Suzanne',id:'SS'},{label:'La Possession',value:'LaPossession',id:'Pos'},{label:'Le Port',value:'LePort',id:'Por'},
				{label:'Bras-Panon',value:'Bras-Panon',id:'BPn'},{label:'Saint-André',value:'Saint-André',id:'SAd'},{label:'Saint-Benoit',value:'Saint-Benoit',id:'SB'},{label:'Sainte-Anne',value:'Sainte-Anne',id:'SAn'},{label:'Sainte-Rose',value:'Sainte-Rose',id:'SR'},{label:'La Plaine des Palmistes',value:'LaPlaineDesPalmistes',id:'PP'},{label:'Salazie',value:'Salazie',id:'SAz'}]
			,
	tmp		:	''
};