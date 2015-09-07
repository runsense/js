For use for all 
NO TEST


Change or use init.js 

	if not, follow modele for init var
	
	just #dep and #arv need for route (start and end)

Call var in funcInit for init ur app with lib

	ak:'' ... key google api
	
	zm:10 ... ZOOMLEVEL
	
	rvzm:13 ... SECONDZOOM
	
	initl:'auto' ... width of widget, px or percent
	
	idtree:"#jqxTree" ... widget id
	
	idtab:"#listv" ... jquery datatable id
	
	idmap:"#map_canvas" ... Google map v3 canvas id
	
	idp:"#panel" .. right panel id (outside of widget)
	
	idinf:"#info" .. block information id (up of widget)
	
	iditi:"#iti" .. buton route id
	
	idbtn:"#btn" .. button disapear panel route id
	
	idsup:"#pano" ... panel streetview and route id
	
	idrbb:"#r_bdd" ... champ search FusionTable description id
	
	bstyle:"" ... sceen background Origin
	
	txtInit:["terrain et jeux POOL"/*0*/,"sentiers et routes PATH & ROAD"/*1*/,"manger & dormir EAT & SLEEP"/*2*/,"Lieu dit et quartier PLACE & QUARTER"	/*3*/,"boite de nuit & pub NIGHT CLUB & FESTIVALS"/*4*/,"loisirs, info marinne ENTERTAINEMENT & SEA INFO"/*5*/,"http://runsense.github.io/js/img/"/*6*/,"http://maps.google.com/mapfiles/kml/shapes/"/*7*/,".png"/*8*/,"<span style='background-color: #FFF;'>"/*9*/,"</span>"/*10*/,"http://runsense.github.io/js/img/blason/"/*11*/,".gif"]/*12*/
	...initialise source
	
	srcZn:['NORD','OUEST','EST','SUD'] ... fisrt level of tree
	
	srcId:[{label:'Mafate',value:'Mafate',id:'Ma'}....second level of tree width id of categ
	
	src:'{ id:"Mafate",icon:FuncInit.txtInit[11]+"Mafate"+FuncInit.txtInit[12], html: "<span title='Green heart' style='background-color: #FFF; #4B0082;'>Mafate</span>",value:"1GveH25DbaQoreX86sPBmcFei9zfvi8UmD2y2qyqu", items:[{ id:"Ma_s", icon:FuncInit.txtInit[7]+"hiker"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[1]+FuncInit.txtInit[10],value:"18JyKnH11VSG-SUHvvoIIxrkfTKDx4wwQd7Bpbe_p"},{id:"Ma_md", icon:FuncInit.txtInit[7]+"dining"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[2]+FuncInit.txtInit[10],value:"1vfct65S_RoeN5rdKfGeUF7ux6EUrtXL5HzGj1p08"},{id:"Ma_v", icon:FuncInit.txtInit[7]+"realestate"+FuncInit.txtInit[8], html: FuncInit.txtInit[9]+FuncInit.txtInit[3]+FuncInit.txtInit[10],value:"1WeFn6tuD30_ShUb76sLjrA0SacbuV9j3E5h5k0cZ"}]},
				 ' ... source of jqx widget
	
