/*!
 * Runsense 97Kafr
 *
 * Copyright 2018, Dalleau Pascal
 *
 */
 W=function(a){this.v=a;this.d=function(v){this.v=v;};}
 
var T=T||{},B=B||{},R=R||{},F=F||{},M=M||{};
var T={
W:$(window),
anex:["TRAIL","Grand Raid","Trail de Bourbon","La Mascareignes"],srcZn:{NORD:'NORD',OUEST:'OUEST',EST:'EST',SUD:'SUD',TRAIL:'TRAIL'},
srcId:{
Mafate:{label:'Mafate',value:'Mafate',id:'Ma'},
SaintGilles:{label:'Saint-Gilles',value:'Saint-Gilles',id:'SG'},
SaintLeu:{label:'Saint-Leu',value:'Saint-Leu',id:'SL'},
TroisBassins:{label:'Trois-Bassins',value:'TroisBassins',id:'TB'},
SaintPaul:{label:'Saint-Paul',value:'Saint-Paul',id:'SPA'},
EtangSalé:{label:'l Etang Salé',value:'EtangSalé',id:'ES'},
EntreDeux:{label:'Entre-Deux',value:'Entre-Deux',id:'ED'},
LesAvirons:{label:'Les Avirons',value:'LesAvirons',id:'AV'},
SaintPierre:{label:'Saint-Pierre',value:'Saint-Pierre',id:'SPI'},
SaintJoseph:{label:'Saint-Joseph',value:'Saint-Joseph',id:'SJ'},
PetiteIle:{label:'Petite Ile',value:'PetiteIle',id:'PI'},
SaintLouis:{label:'Saint-Louis',value:'Saint-Louis',id:'SLO'},
Cilaos:{label:'Cilaos',value:'Cilaos',id:'CI'},
Tampon:{label:'Tampon',value:'Tampon',id:'T'},
LaPlaineDesCafres:{label:'La Plaine des Cafres',value:'LaPlaineDesCafres',id:'PC'},
enclosduTremblet:{label:'Volcan' ,value:'enclosduTremblet',id:'ET'},
SaintPhillippe:{label:'Saint-Phillippe',value:'Saint-Phillippe',id:'SPH'},
SaintDenis:{label:'Saint-Denis',value:'Saint-Denis',id:'SD'},
SainteMarie:{label:'Sainte-Marie',value:'Sainte-Marie',id:'SM'},
SainteSuzanne:{label:'Sainte-Suzanne',value:'Sainte-Suzanne',id:'SS'},
LaPossession:{label:'La Possession',value:'LaPossession',id:'Pos'},
LePort:{label:'Le Port',value:'LePort',id:'Por'},
BrasPanon:{label:'Bras-Panon',value:'Bras-Panon',id:'BPn'},
SaintAndré:{label:'Saint-André',value:'Saint-André',id:'SAd'},
SaintBenoit:{label:'Saint-Benoit',value:'Saint-Benoit',id:'SB'},
SainteAnne:{label:'Sainte-Anne',value:'Sainte-Anne',id:'SAn'},
SainteRose:{label:'Sainte-Rose',value:'Sainte-Rose',id:'SR'},
LaPlaineDesPalmistes:{label:'La Plaine des Palmistes',value:'LaPlaineDesPalmistes',id:'PP'},
Salazie:{label:'Salazie',value:'Salazie',id:'SAz'},
ladiagonaledesfous:{label:'Grand Raid',value:'la diagonale des fous',id:'trail_grandraid'},
TraildeBourbon:{label:'Trail de Bourbon',value:'Trail de Bourbon',id:'trail_debourbon'},
LaMascareignes:{label:'La Mascareignes',value:'La Mascareignes',id:'trail_mascareignes'}
},
initSrch:'',bxt:false,ak:new W(),src:'',bnm:$('#map_canvas').css('width')==='800px'?false:true,initl:'auto',
I:{r:"#jqxTree",t:"#listv",m:"#map_canvas",p:"#panel",n:"#info",i:"#iti",b:"#btn",u:"#pano",d:"#r_bdd",l:"#list_table"},
bstyle:"http://runsense.github.io/js/f.png",
B:function(v,b){v=b},
T:{a:"play",b:"hiker",c:"dining",d:"realestate",e:"star",f:"ranger_station",j:"terrain et jeux POOL",s:"sentiers pou tout PATH & ROAD",m:"manzé & dormir EAT & SLEEP",l:"Lieu di et Off. quartier nom PLACE & QUARTER",u:"boite de nuit & kabar NIGHT CLUB & FESTIVALS",o:"loisirs & l'gadiamb ENTERTAINEMENT & SEA INFO",h:"http://runsense.github.io/js/img/",g:"http://maps.google.com/mapfiles/kml/shapes/",p:".png",n:"<span style='background-color: #FFF;'>",w:"</span>",x:"http://runsense.github.io/js/img/blason/",k:".gif"},
C:{a:'15%',b:'0',c:'1',d:'0px !important',e:'100% !important',f:'0.3',g:'70%',h:'0.75',i:'100%',j:'no-repeat',k:'background-image',l:'background-repeat',m:'background-size',n:'none',o:'font-weight',p:'font-size',q:'border-color',r:'color',s:'0%',t:'blue',u:'red',v:"100%",w:"180%",x:"fontSize",y:"background",z:[/\s|'/g,'']},
J:{i:'getItem',v:'value',s:'select',k:'checkItem',u:'uncheckItem',e:'expandItem',c:'collapseItem',d:'td',r:'tr',o:'mouseover',v:'mouseleave',c:'selectItem'},
tmp:'',
frp:function(name){var results=new RegExp('[\?&]'+name+'=([^&#]*)').exec(window.location.href);try{return results[1]||0;}catch(e){return null;}},
exturi:function(){
	$.urlParam=T.frp;
	if($.urlParam('apikey')!=null){T.ak.d($.urlParam('apikey'));var n=$.urlParam('name');T.src={};T.src[n]={label:n,value:$.urlParam('fusiontableid')};T.bxt=true;}
	else{
		T.ak.d("AIzaSyBt_AYP2XcqjnOMLb6_tX6LyQRE1CXRYR0");
		T.src={
OUEST:{id:"OUEST",icon:T.T.x+"reunion"+T.T.k,html:"<span title='WEST' style='background-color: #FFF; #8B0000;'>OUEST</span> ",value:"1t35ApBEMf9xwiZA9EqZd-glj8GexmPuhpSr_ndlh",
	items:{
	Mafate:{id:"Mafate",icon:T.T.x+"Mafate"+T.T.k, html:"<span title='Green heart' style='background-color: #FFF; #4B0082;'>Mafate</span>",value:"1GveH25DbaQoreX86sPBmcFei9zfvi8UmD2y2qyqu",
		items:{
		Ma_s:{id:"Ma_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w,value:"18JyKnH11VSG-SUHvvoIIxrkfTKDx4wwQd7Bpbe_p"},		Ma_md:{id:"Ma_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w,value:"1vfct65S_RoeN5rdKfGeUF7ux6EUrtXL5HzGj1p08"},		Ma_v:{id:"Ma_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w,value:"1WeFn6tuD30_ShUb76sLjrA0SacbuV9j3E5h5k0cZ"}
	}},	SaintGilles:{id:"Saint-Gilles",icon:T.T.x+"Saint-Gilles"+T.T.k,html:"<span title='Beach' style='background-color: #FFF; #006400;'>Saint-Gilles</span>" ,value:"1sa1fCY5I_xhM7AyYIWyqJedxZzBmGcIfrH1Q8tke",
		items:{
		SG_t:{id:"SG_t",icon:T.T.g+T.T.a+T.T.p,html:T.T.n+T.T.j+T.T.w,value:"1cfDuclfE5Kz88w0egT267xw7Mg77Xw4wkEhi7bws"},		SG_s:{id:"SG_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w,value:"19ViFSzg0Auo8m31abL2z_9OUjBHImUR0PFx9pTro"},		SG_md:{id:"SG_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w,value:"12undvS9IMnRnEeTYClqje8BFf7nQYlQvD0VJmlb4"},		SG_v:{id:"SG_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w,value:"1hMxXypHObu1TaGNVj6Hig_bgSG6FEx68w8p3psqa"},		SG_n:{id:"SG_n",icon:T.T.g+T.T.e+T.T.p,html:T.T.n+T.T.u+T.T.w,value:"1NEArpXB8yKypvOY0FlhXeg_BC-3AbUUvQIvxVyfI"},		SG_a:{id:"SG_a",icon:T.T.g+T.T.f+T.T.p,html:T.T.n+T.T.o+T.T.w,value:"13Tj9i_c7p5qrbFYM5a6OXBgGIhxUetOh-DAIVpDC"}
		}},	SaintLeu:{id:"Saint-Leu",icon:T.T.x+"Saint-Leu"+T.T.k,html:"<span title='Saint-Leu' style='background-color: #FFF; #008B8B;'>Saint-Leu</span>",value:"1ahKjlUXShjRwyOlo7ZCcZMSvEpJfRG9hY7_Qg6TA",
		items:{
		SL_t:{id:"SL_t",icon:T.T.g+T.T.a+T.T.p,html:T.T.n+T.T.j+T.T.w,value:"1WreJYQyzcURwYIN8UqJUNUJHJ5k_xiyUeIzTkhTm"},		SL_s:{id:"SL_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w,value:"11W_793Vb7vxwFp6vLsGV9n83by8wA0NJOD0_urIV"},		SL_md:{id:"SL_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w,value:"1zurSKheMQdZ7cFgw5B7y3ihGUWXutuHHhsIonkhS"},		SL_v:{id:"SL_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w,value:"1pXRpIDoonJjBECHhUEtKjcG_AmiRC43vnejF1UXq"},		SL_n:{id:"SL_n",icon:T.T.g+T.T.e+T.T.p,html:T.T.n+T.T.u+T.T.w,value:"1teakmILV4AZcMznt3ihFWUbLAH1W1ILNYxpi6Tz8"},		SL_a:{id:"SL_a",icon:T.T.g+T.T.f+T.T.p,html:T.T.n+T.T.o+T.T.w,value:"1v6kmzTDGRK_q66oyNuyr0842W4drPkVFJjoMDaRH"}
	}},	TroisBassins:{id:"TroisBassins",icon:T.T.x+"TroisBassins"+T.T.k,html:"<span title='three pond' style='background-color: #FFF; #800000;'>Trois Bassins</span>",value:"12g6QNhlYlaTgGoEN_K3Tyl6QV31y6TUPuHXjM-g-",
		items:{
		TB_s:{id:"TB_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w,value:"11YVBN4CqL6oLdASJEJ_lJ13WWNEJc6_yZxQrQeoZ"},		TB_md:{id:"TB_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w,value:"1yBld8_oUcv_2Ccnqz7xV2dKo16xbYoqtbhjjQIIC"},		TB_v:{id:"TB_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w,value:"1KbxFddq2D4uo3RNMruBz17I266wO9OYjXpwQNxoS"},		TB_a:{id:"TB_a",icon:T.T.g+T.T.f+T.T.p,html:T.T.n+T.T.o+T.T.w,value:"1uzRedo3Qe9b4HZjHlgcDxReLo6r3udNWyBIaOM7L"}
		}},	SaintPaul:{id:"Saint-Paul",icon:T.T.x+"Saint-Paul"+T.T.k,html:"<span title='Saint-Paul' style='background-color: #FFF; #DAA520;'>Saint-Paul</span> ",value:"1yPMDk3KG56Dero7Lway4oMIw42daQVKtK0PLjKNZ",
		items:{
		SPA_t:{id:"SPA_t",icon:T.T.g+T.T.a+T.T.p,html:T.T.n+T.T.j+T.T.w,value:"1pF55Ecb8S5nMLRADZ_ZrYqhTdGXLQRu2v4knP32n"},		SPA_s:{id:"SPA_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w,value:"105O9BV8SR2p9EiMbh7nr8W2I75p_lxEWc9yFeOea"},		SPA_md:{id:"SPA_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w,value:"1arbnu4e3HPRxM4ys0AZEvHGk6cAZjSEE0tHPE07R"},		SPA_v:{id:"SPA_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w,value:"1cX2TaI47iZtEMnZIu2ZDPRUSllt6MxhgQ7SVxE2O"},		SPA_n:{id:"SPA_n",icon:T.T.g+T.T.e+T.T.p,html:T.T.n+T.T.u+T.T.w,value:"1uAUFKQbO3b4azglINq0byh6IMTt0tcsew-ZDhHVK"},		SPA_a:{id:"SPA_a",icon:T.T.g+T.T.f+T.T.p,html:T.T.n+T.T.o+T.T.w,value:"1yvNIMDlSsqd6REMTpDqNBKabGeFft-kquWsWvPA1"}
	}},	EtangSale:{id:"EtangSale",icon:T.T.x+"EtangSale"+T.T.k, html:"<span title='salt pond' style='background-color: #FFF; #CD5C5C;'>Etang Sale</span>",value:"1XgstlSHKGm72zgrRO6lFUdVSM6867jPyfLT-Mtcj",
		items:{
		ES_t:{id:"ES_t",icon:T.T.g+T.T.a+T.T.p,html:T.T.n+T.T.j+T.T.w,value:"1YXAJweeNZAKU2-Waa64ZIymHQ0bSI7lISM6bYHd6"},		ES_s:{id:"ES_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w,value:"1Um2dvNwSoRN_SYsZMLjTwCR-qEhSVcCMZQgjncBF"},		ES_md:{id:"ES_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w, value:"1Ya4SFxo6lr8uNoEBRhH_E8Zpq3InMkNmEilUdVfT"},		ES_v:{id:"ES_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w, value:"1ngS7I2W3ZEACE4VpYby5j0cKYTBJCzmtmYxUkPap"},		ES_n:{id:"ES_n",icon:T.T.g+T.T.e+T.T.p,html:T.T.n+T.T.u+T.T.w,value:"1aaXjKHD9gFKajSSFONppPltXcSgAUKWvrbZ94gEG"},		ES_a:{id:"ES_a",icon:T.T.g+T.T.f+T.T.p,html:T.T.n+T.T.o+T.T.w, value:"1PL-tDeZMX1uhb3pgNaVFnX0T3eNs8aK60PKx5xd1"}
		}},	EntreDeux:{id:"Entre-Deux",icon:T.T.x+"Entre-Deux"+T.T.k, html:"<span title='between twoo' style='background-color: #FFF; #000080;'>Entre-Deux</span>",value:"1uU-__tmwAmqtTXPsi57LhiD969SwF0xWjbnDEw-7",
		items:{
		ED_s:{id:"ED_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w,value:"1PeYW_q7kAdat2OxpIMFmZ32mDPStAXPgxDCpTfNW"},		ED_md:{id:"ED_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w, value:"1ddsy0cXwzchgqNKn7lb_U54aUolJxX15dtLrUHtP"},		ED_v:{id:"ED_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w, value:"1tRU-pUXalYcAlsXE5O1o9IO0dQXNLSNJSQqEE-hm"},		ED_a:{id:"ED_a",icon:T.T.g+T.T.f+T.T.p,html:T.T.n+T.T.o+T.T.w, value:"1rZG5fmVIUptJwXk5uiJfjVuIn-ooM9WuII0UkEy3"}
		}},	LesAvirons:{id:"LesAvirons",icon:T.T.x+"lesAvirons"+T.T.k, html: "<span title='rowing' style='background-color: #FFF; #FFD700;'>Les Avirons</span>", value:"1aNZ5BzIgAUCEArEmyIabDPTdpQkGv5p1eyKTbeBN",
		items:{
		Av_t:{id:"Av_t",icon:T.T.g+T.T.a+T.T.p,html:T.T.n+T.T.j+T.T.w,value:"1mWz8sMkRVFm7820e4XBNqBEFRI0gWQ_0-OxVQ0_B"},		Av_s:{id:"Av_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w,value:"1mMsbTg4i0b6n8cXi4TYQzK6Ckbe4MMYzTqQ9fniT"},		Av_md:{id:"Av_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w,value:"1hv5ee8OPODPryBpl0DqrwwzAzV0yvt3DnJ-AZBDB"},		Av_v:{id:"Av_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w,value:"14wzoLVQ3p-nHkPW1SuCOBTEQxmOLTDenF66Ywkb7"},		Av_a:{id:"Av_a",icon:T.T.g+T.T.f+T.T.p,html:T.T.n+T.T.o+T.T.w,value:"1XtwmwdSCQllPPQuge9CPbJtf5KIL71w3ZGON7Evm"}
		}}
}},SUD:{id:"SUD",icon:T.T.x+"reunion"+T.T.k,html:"<span title='SOUTH' style='background-color: #FFF; #66CDAA;'>SUD</span>", value:"1XolYmmcAznvjC8X4Gx8vvOWY5a-dJOIyl5ZkWXmM",style:"MediumAquaMarine ",
	items:{
	SaintPierre:{id:"Saint-Pierre",icon:T.T.x+"Saint-Pierre"+T.T.k,html:"<span title='holly stone' style='background-color: #FFF; #4B0082;'>Saint-Pierre</span>",value:"1MT3G_b9rZRjqusrdShjZ7kqEHe1JOmq-wp7Wt-JY",
		items:{
		SPI_t:{id:"SPI_t",icon:T.T.g+T.T.a+T.T.p,html:T.T.n+T.T.j+T.T.w,value:"1nuksgXG9G7cBpwzV-_442xLhTnxx849HoIXe_6kx"},		SPI_s:{id:"SPI_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w,value:"1hGzzznJSMFAvbAoDUWMJj13Z1u4Vlv7WnAOKrpTC"},		SPI_md:{id:"SPI_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w,value:"1SgbVz3eHKfSPWp9XNk5NWxvNP_ahskNvyjKLeRtZ"},		SPI_v:{id:"SPI_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w,value:"1Gjgt4ZhaV4RgzAzE4VkzI06ZWTV_-v97WQIs_0jx"},		SPI_n:{id:"SPI_n",icon:T.T.g+T.T.e+T.T.p,html:T.T.n+T.T.u+T.T.w,value:"1jg739vX36Xn5o4jgy_CUko40GooVm-4RQCNb8IE8"},		SPI_a:{id:"SPI_a",icon:T.T.g+T.T.f+T.T.p,html:T.T.n+T.T.o+T.T.w,value:"1bRyWWEF7wu5Zy6Rg5Qm_zGuMfKyQhlK11FrsA7XD"}
		}},	SaintJoseph:{id:"Saint-Joseph",icon:T.T.x+"Saint-Joseph"+T.T.k,html:"<span title='Saint-Joseph' style='background-color: #FFF; #006400;'>Saint-Joseph</span>",value:"1EdNBxumLvo_ZKbDvIAmdG4kL4aK8mwn715beAfxU",
		items:{
		SJ_t:{id:"SJ_t",icon:T.T.g+T.T.a+T.T.p,html:T.T.n+T.T.j+T.T.w,value:"1FYDeFbUGzcd8BXd-486iI4wbbuOpp7kpFO-DXu53"},		SJ_s:{id:"SJ_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w,value:"1CvxRIBwlkoJNRqRLe7F4OvWfp-xkDGU5edSq0ASl"},		SJ_md:{id:"SJ_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w,value:"1et5h1MbG_qX1K3iLNCTvQWS5_uj2vayNXSXwwXVU"},		SJ_v:{id:"SJ_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w,value:"12F1H2X-rQrYMAyn3T4lEp7J6XkRig3C5MB1vV1nN"},		SJ_n:{id:"SJ_n",icon:T.T.g+T.T.e+T.T.p,html:T.T.n+T.T.u+T.T.w,value:"1mGP2D37TYcg7aKBRPuDLofmhIziluf9i-rnGf5wx"},		SJ_a:{id:"SJ_a",icon:T.T.g+T.T.f+T.T.p,html:T.T.n+T.T.o+T.T.w,value:"1DnBh8sOLdiSlZlq4oLZkAH84JiLW4BQN0l2xdFxc"}
		}},	PetiteIle:{id:"PetiteIle",icon:T.T.x+"PetiteIle"+T.T.k,html:"<span title='small isle' style='background-color: #FFF; #008B8B;'>Petite Ile</span>",value:"1dcDRLQyzoX7G70X4VjHYe5sgNtyiurA4pk5cvwXH",
		items:{
		PI_t:{id:"PI_t",icon:T.T.g+T.T.a+T.T.p,html:T.T.n+T.T.j+T.T.w,value:"1ZXBQvZmy7a-TdVUxcZZW0dEkl0VigG_nIx6cjnva"},		PI_s:{id:"PI_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w,value:"1eO6-9Sir2Tl-MHrHyyXY6Ws5hJZBszblOM1b_7fg"},		PI_md:{id:"PI_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w,value:"1wTC3c07JmeEexULCOeoCe5i12g95r7sPXZbIxDoQ"},		PI_v:{id:"PI_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w,value:"1Ecnj4R9f0uL_nliqIHl36utyF5K6f0tw9UvErgER"},		PI_a:{id:"PI_a",icon:T.T.g+T.T.f+T.T.p,html:T.T.n+T.T.o+T.T.w,value:"1_NSMIuxAJzXnBeRFUXt4Z6iYLCJgrKlXttllLfOh"}
		}},	SaintLouis:{id:"Saint-Louis",icon:T.T.x+"Saint-Louis"+T.T.k,html:"<span title='Saint-Louis' style='background-color: #FFF; #800000;'>Saint-Louis</span>",value:"1M1iYxQ8PEELVmrQr_3bGh_-7UU09ghn1cvNo8WCV",
		items:{
		SLO_t:{id:"SLO_t",icon:T.T.g+T.T.a+T.T.p,html:T.T.n+T.T.j+T.T.w,value:"1VavGGOruqsPbe6GqtS0-ysRBhQDhodfOUYH49Enf"},		SLO_s:{id:"SLO_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w,value:"1ESOd1qko4uxhvuUAltY5ZYMq00Ov_kqfpFl71TO"},		SLO_md:{id:"SLO_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w,value:"1ETrdbfbNxfmKIGa7u6MC21igP8p16Hu8OvaM1ODL"},		SLO_v:{id:"SLO_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w,value:"1wezhGcWJshrYRFFPdEUpnIWrHp6ggkrAjjNwNnAM"},		SLO_a:{id:"SLO_a",icon:T.T.g+T.T.f+T.T.p,html:T.T.n+T.T.o+T.T.w,value:"1WQqAVJWl43bT8l-3Sw6UMmxBlzgj-CvNo06T8tJ"}
		}},	Cilaos:{id:"Cilaos",icon:T.T.x+"Cilaos"+T.T.k,html:"<span title='Cilaos' style='background-color: #FFF; #DAA520;'>Cilaos</span> ",value:"1Z0zITHQac_xwSfmHpvliZoioY58jZhUjWs9KX8Ln",
		items:{
		Ci_t:{id:"Ci_t",icon:T.T.g+T.T.a+T.T.p,html:T.T.n+T.T.j+T.T.w, value:"18xgZcIBvJ1w2bk_gemnKh52HOkqmdDYsxYSjpS26"},		Ci_s:{id:"Ci_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w, value:"1hR6kwS000LgXzL2wt-TJayI0SG9AZemcnNctwoPe"},		Ci_md:{id:"Ci_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w,value:"1tdQ_vkcdqDJB037eDiyXo3YR-XlJUVvs_IcD3kD8"},		Ci_v:{id:"Ci_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w, value:"1a0FJN_DioGC6sPhOJyt5Q4d7tUcae5GmRBNXemXP"},		Ci_a:{id:"Ci_a",icon:T.T.g+T.T.f+T.T.p,html:T.T.n+T.T.o+T.T.w, value:"1JDZYdWYIysK0dxS9Rt6pEi7SGv864A5_BUgfi39u"}
		}},	Tampon:{id:"Tampon",icon:T.T.x+"Tampon"+T.T.k,html:"<span title='rubber stamp' style='background-color: #FFF; #CD5C5C;'>Tampon</span>",value:"1fS6sn1x_MDXE8mPT2dJGBE4mLyTseyvgQmt8fS7w",
		items:{
		T_t:{id:"T_t",icon:T.T.g+T.T.a+T.T.p,html:T.T.n+T.T.j+T.T.w,value:"1TVMj_ErRYZSUl8IRlxS2A45BPf6yZBLmrdPUqLqx"},		T_s:{id:"T_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w,value:"1vxnUDRqG5ZwScgpGxjcOHGY72Na_7ubVhw5meBJr"},		T_md:{id:"T_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w,value:"1Tetq4TXpTTgtp0lBEGx6GSjZnurzUt4CFXlKaiOB"},		T_v:{id:"T_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w,value:"1RHM6iPa9admK-4DMQpOEv8cZ3Sx8cix5taZzWOs_"},		T_n:{id:"T_n",icon:T.T.g+T.T.e+T.T.p,html:T.T.n+T.T.u+T.T.w,value:"195dI4uyd_AKasWDtn4eTQz3v6gcKlgE55N9_1zwE"},		T_a:{id:"T_a",icon:T.T.g+T.T.f+T.T.p,html:T.T.n+T.T.o+T.T.w,value:"1x-iqx3tCYREWFoCBzt8ezhx0uVeiXaqrm8o6_ZKU"}
		}},	LaPlaineDesCafres:{id:"LaPlaineDesCafres",icon:T.T.x+"LaPlaineDesCafres"+T.T.k, html: "<span title='African Plain' style='background-color: #FFF; #000080;'>La Plaine Des Cafres</span>",value:"1r3TOcxghV2VoLauNU6PnoY3kzdcSIbtey0pnhWWz",
		items:{
		PC_s:{id:"PC_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w, value:"1NpjpyxxMv9KIki_DtXtzPRLdNwzJ7uBjxzoxJOoV"},		PC_md:{id:"PC_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w,value:"1RPot4Hw0B_ogvWoGAu3sW2Tz-nP6NSLREbaDZsXJ"},		PC_v:{id:"PC_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w, value:"1EBGjcCB-FRK6AXy9EJ-lmLaQHfNsnXS_uhSNWz71"},		PC_a:{id:"PC_a",icon:T.T.g+T.T.f+T.T.p,html:T.T.n+T.T.o+T.T.w, value:"1iTq7746ceYVrcXqcM3Ugu1CYAO_qNR09CoWCUuNP"}
		}},	enclosduTremblet:{id:"enclosduTremblet",icon:T.T.x+"Tremblet"+T.T.k,html: "<span title='Volcano' style='background-color: #FFF; #FFD700;'>enclos du Tremblet</span>",value:"1NId8irdjYKXfpFKk5NZ-SD7ZGkUhl2w6m1LL5t4F",
		items:{
		eT_s:{id:"eT_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w, value:"1HG3aQEg2D1q_4d5n2_Gmk8rMQl6a995HY7dPJCZR"},		eT_v:{id:"eT_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w, value:"1cRObSW2PCNmCjRlONmIKRdj2VYbee9_bpa2oTHiX"}
		}},	Saint:{id:"Saint-Phillippe",icon:T.T.x+"Saint-Phillippe"+T.T.k,html: "<span title='Saint-Phillippe' style='background-color: #FFF; #66CDAA;'>Saint-Phillippe</span>",value:"1H9qvzwkRMhjjEwgrs_CToYkSPKU9JpKz0NzxRMhY",
		items:{
		SPh_t:{id:"SPh_t",icon:T.T.g+T.T.a+T.T.p,html:T.T.n+T.T.j+T.T.w,value:"1t4UNzRx7NREpOPfUh-jcfjj4jmZdlCrcV5UTnMBK"},		SPh_s:{id:"SPh_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w,value:"1tk1Ncnn2rK7hh9uNag18vlksj_ZETxBqzxX6edbw"},		SPh_md:{id:"SPh_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w,value:"1tJJW6s2ELbV-cSIecvLroNt9u1pY_ExyTSxEsyDG"},		SPh_v:{id:"SPh_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w,value:"1p3_0vNQxgdOQMXhkO6PWCzUoBD5XLVThjWcFzDrL"},		SPh_a:{id:"SPh_a",icon:T.T.g+T.T.f+T.T.p,html:T.T.n+T.T.o+T.T.w,value:"136pTZ-NKGCp0d1jqeOBXKXJJmK3sdF51h6lhiiF5"}
		}}
	}},NORD:{id:"NORD",icon:T.T.x+"reunion"+T.T.k,html:"<span title='NORTH' style='background-color: #FFF; #4169E1;'>NORD</span>",value:"1X7thBX2nmGVIivqpYNzSWN9iC4OCJDvP469Yvr15",
	items:{
	SaintDenis:{id:"Saint-Denis",icon:T.T.x+"Saint-Denis"+T.T.k,html:"<span title='Saint-Denis' style='background-color: #FFF; #4B0082;'>Saint-Denis</span>",value:"1B6GQb_eKzR2PmlhSHddq7I8v4KAlYB3HgtLLxWO6",
		items:{
		SD_t:{id:"SD_t",icon:T.T.g+T.T.a+T.T.p,html:T.T.n+T.T.j+T.T.w,value:"1A3qmh8ulO-hXKe2W57qihqlkXEMajktf6NUbvkH8"},		SD_s:{id:"SD_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w,value:"1Vw4KON8Ww-OU2gTTg1web3a_kWjXOnc0cGmJ1xnR"},		SD_md:{id:"SD_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w,value:"1Wx6ZbbFLkEIdbxfS2AHJyUprIINfqtWLLhA_ngNZ"},		SD_v:{id:"SD_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w,value:"1OIG0YWzJA6nr_Nr6F-lNVsnYfsKtA8ubbGA_Tx0v"},		SD_n:{id:"SD_n",icon:T.T.g+T.T.e+T.T.p,html:T.T.n+T.T.u+T.T.w,value:"1PSVZqIwSOlIbOWgXTdUhMXe4Pj-IIhaOEiEz_kaV"},		SD_a:{id:"SD_a",icon:T.T.g+T.T.f+T.T.p,html:T.T.n+T.T.o+T.T.w,value:"1yJfcFEbn1487U-HHCv9UcihepFv3kVS7U82pMS3A"}
		}},	SainteMarie:{id:"Sainte-Marie",icon:T.T.x+"Sainte-Marie"+T.T.k,html:"<span title='Sainte-Marie' style='background-color: #FFF; #006400;'>Sainte-Marie</span>",value:"192A1s6RA93KPg1cXOC7QYPI6MyGBb-AZtNpFNnyt",
		items:{
		SM_t:{id:"SM_t",icon:T.T.g+T.T.a+T.T.p,html:T.T.n+T.T.j+T.T.w,value:"1O2m7YXKBxLcAQZkuX1oOrA6dJFiZNv7KEZqkUTuZ"},		SM_s:{id:"SM_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w,value:"1vGSpCnOiCfNeAQvIpPscZ26cUq7x31imy_VShUZd"},		SM_md:{id:"SM_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w,value:"1FKB-9QH0VtpFGMtMeZZD_c2Fze2g9hYoxivizqav"},		SM_v:{id:"SM_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w,value:"1hYkKYnkxqvjmRc7IKgAz9xdYPiNI2VqZ6oWnLMLd"},		SM_a:{id:"SM_a",icon:T.T.g+T.T.f+T.T.p,html:T.T.n+T.T.o+T.T.w,value:"1CpsXyW6UwS2Ix6oTHfy64PKixJGYml3lnUjj_Rta"}
		}},	SainteSuzanne:{id:"Sainte-Suzanne",icon:T.T.x+"Sainte-Suzanne"+T.T.k,html:"<span title='Sainte-Suzanne' style='background-color: #FFF; #008B8B;'>Sainte-Suzanne</span>" ,value: "11hA_F8nvGsVVgrtgSs0i4ehviHgHc1kmGDHv1JgS",
		items:{
		SS_t:{id:"SS_t",icon:T.T.g+T.T.a+T.T.p,html:T.T.n+T.T.j+T.T.w,value:"1uP6kIJhbe2VDpT-bXB9uMosjNNejhQGt_P7Ey2jf"},		SS_s:{id:"SS_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w,value:"14tKW-WkeyvLupjFAoWXMbAgEa9--pO18c1Jnr_5j"},		SS_md:{id:"SS_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w,value:"1CjnaMnc4aEFf3b9n498eqJaZKf9E3mndyDaF5PjG"},		SS_v:{id:"SS_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w,value:"1mw9EHc9TOcgbbTNijGTzw5zrCxXjisZuiqwMLnlw"},		SS_n:{id:"SS_n",icon:T.T.g+T.T.e+T.T.p,html:T.T.n+T.T.u+T.T.w,value:"1oYTut7YPTzdcOtwYCRlkpQylcjllRvwcrnizBN5Q"}
		}},	LaPossession:{id:"LaPossession",icon:T.T.x+"LaPossession"+T.T.k,html:"<span title='ownership' style='background-color: #FFF; #800000;'>La Possession</span>",value:"1NjCzAjGKweKavFoZsexcszpxCpx3NEx7pKsNYqED",
		items:{
		Pos_t:{id:"Pos_t",icon:T.T.g+T.T.a+T.T.p,html:T.T.n+T.T.j+T.T.w, value:"1lr8c-nv0zSUMfdnWxpvmIZBf4EOcNSduutH7z-7D"},		Pos_s:{id:"Pos_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w, value:"1H0BtHjh6l-SmQNh8ty4RXmhv-rGP36i6pHKiw1VL"},		Pos_md:{id:"Pos_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w, value:"1W14GqyphT5To9rr7laAjrAcJd9JLEd_5vj7b1RmE"},		Pos_v:{id:"Pos_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w,value:"1elAEWqFcSey78i0T167f6OYuUKo3aSJ9DKcAH4JE"},		Pos_a:{id:"Pos_a",icon:T.T.g+T.T.f+T.T.p,html:T.T.n+T.T.o+T.T.w,value:"1yfoGSvq6a0uGLL8GJPdsDZ1lGRWysaBfhoiR6hz8"}
		}},	LePort:{id:"LePort",icon:T.T.x+"LePort"+T.T.k,html: "<span title='harbor' style='background-color: #FFF; #DAA520;'>Le Port</span> ",value:"1muRbrt4rHjP_PJWRoIwlywN33ckv-pq3ADitGvI0",
		items:{
		Por_t:{id:"Por_t",icon:T.T.g+T.T.a+T.T.p,html:T.T.n+T.T.j+T.T.w,value:"1egvMm3Q0a8ISZ3dbmydPFqMdsLvDuHwUemNkY1mi"},		Por_s:{id:"Por_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w,value:"19Zl9W3yXp0IdmcANjF_MlHX1R9hk8X27mFhJnmZH"},		Por_md:{id:"Por_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w,value:"1LHKdsKbwR4CIR0L6Irt9m8jqScVnfxPMEm4JBA-3"},		Por_v:{id:"Por_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w,value:"1aOiWEpC7YfSJL10AebsxUpSpg-h-A4fcbIvjZxi8"},		Por_n:{id:"Por_n",icon:T.T.g+T.T.e+T.T.p,html:T.T.n+T.T.u+T.T.w,value:"1YHjpqYf1aJqw-gylQDId1rCF_qDZDMSxUbxjRGG_"},		Por_a:{id:"Por_a",icon:T.T.g+T.T.f+T.T.p,html:T.T.n+T.T.o+T.T.w,value:"13B6si8MulZuOUFdcGkzj67HPwrMXklYzZOUuEi7Q"}
		}}
		}},EST:{id:"EST",icon:T.T.x+"reunion"+T.T.k,html:"<span title='EAST' style='background-color: #FFF; #DAA520;'>EST</span>",value:"1kdUa3ca31BGjEODS180K8B1zsF9ArFmIZLPiiaRp",
	items:{
	BrasPanon:{id:"Bras-Panon",icon:T.T.x+"Bras-Panon"+T.T.k,html: "<span title='Panon arm' style='background-color: #FFF; #4B0082;'>Bras-Panon</span>",value:"1Eu99fE8gzP8aRvHmC0aoAgGvWLA7sicIJZQzNEHo",
		items:{
		BPn_t:{id:"BPn_t",icon:T.T.g+T.T.a+T.T.p,html:T.T.n+T.T.j+T.T.w, value:"1SjOgOCz9LrImoNYW3dlV8AVwekzwgkwkIFrnL9r5"},		BPn_s:{id:"BPn_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w, value:"1ccHNKyGhBgTzVkJ6QaeDmsLfWWb8APIPf5PPo6iV"},		BPn_md:{id:"BPn_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w, value:"1Bzgou8rOmmto6PjPp71N_-JkAsIAOZI8ezXu_eFp"},		BPn_v:{id:"BPn_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w, value:"1JqQPaUTMc-kjl8xVIWHnE6s0z4oW4WXhhSZbmm6p"},		BPn_a:{id:"BPn_a",icon:T.T.g+T.T.f+T.T.p,html:T.T.n+T.T.o+T.T.w,value:"1F6J56n5iAOxSXwnJCczlEqtM0exQzaQ6lW89xqOq"}
		}},	SaintAndre:{id:"Saint-Andre",icon:T.T.x+"Saint-Andre"+T.T.k, html: "<span title='Saint-Andr&#233;' style='background-color: #FFF; #006400;'>Saint-Andre</span>",value:"1nwNhdQtG4G82HAm7m3GnPNLYFYxf7NkLazRvyow9",
		items:{
		SAd_t:{id:"SAd_t",icon:T.T.g+T.T.a+T.T.p,html:T.T.n+T.T.j+T.T.w,value:"1vWcldb-WuU1rtH-ElhKI-f_4pLEeJDzzvMaWJSrC"},		SAd_s:{id:"SAd_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w,value:"1QxdvqoXSnGh2RaPPYVqkXGMYzs5KyLKNtH6Rjq1Y"},		SAd_md:{id:"SAd_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w,value:"1LoBKzzZG09THxPP4G9WQAvH_TQHHejDAkm6Bd7sn"},		SAd_v:{id:"SAd_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w,value:"1_JSO07ViQqKGnrbD8l_IjO_T_ipipBS_oH_qs_1c"},		SAd_n:{id:"SAd_n",icon:T.T.g+T.T.e+T.T.p,html:T.T.n+T.T.u+T.T.w,value:"1tVMs-082OJrhLvKNVua0QCH-hnrs4dhkePIbn2Sh"},		SAd_a:{id:"SAd_a",icon:T.T.g+T.T.f+T.T.p,html:T.T.n+T.T.o+T.T.w,value:"1tVigoTd-SoRI0O-CtE7hMZp-ygWhd3jX25z0GPOD"}
		}},	SaintBenoit:{id:"Saint-Benoit",icon:T.T.x+"Saint-Benoit"+T.T.k,html: "<span title='Saint-Benoit' style='background-color: #FFF; #008B8B;'>Saint-Benoit</span>",value:"1gdjt3qeIeAvBxMRhmLwlnCgzr7CTt71iJrZ8dCTY",
		items:{
		SB_t:{id:"SB_t",icon:T.T.g+T.T.a+T.T.p,html:T.T.n+T.T.j+T.T.w,value:"1zvWu4e_eyQ1Ho7T4wM63hhl6JtFqOixA7PZDWxPa"},		SB_s:{id:"SB_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w,value:"1K5q_Z_O-QIXt74ZKG9de3lF_uEbKKrBX13HJq1AX"},		SB_md:{id:"SB_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w,value:"1VHstJP2RjDAvnmoDCGgJrtOTLWkgNAHltpI97KYx"},		SB_v:{id:"SB_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w,value:"1hjSY4vwWwCRB8bQJ3uX7c7TyhvrX5c7p5jMDmhtO"},		SB_n:{id:"SB_n",icon:T.T.g+T.T.e+T.T.p,html:T.T.n+T.T.u+T.T.w,value:"1z9NOfJnMEtQxerYyCFif9xX3g6YT91tRxZJiNzcb"},		SB_a:{id:"SB_a",icon:T.T.g+T.T.f+T.T.p,html:T.T.n+T.T.o+T.T.w,value:"1u5cwPRUeVIpuiDkPw1lv_gzrO2DuQ20W0zERTTdc"}
		}},	SainteAnne:{id:"Sainte-Anne",icon:T.T.x+"Sainte-Anne"+T.T.k,html: "<span title='Sainte-Anne' style='background-color: #FFF; #800000;'>Sainte-Anne</span>",value:"1s911vZP-Ftzh8TA3JoQSzwuRNbTwkJoZmYna_SFn",
		items:{
		SAn_t:{id:"SAn_t",icon:T.T.g+T.T.a+T.T.p,html:T.T.n+T.T.j+T.T.w,value:"1nFu8dd5l9fDV2Fn-87mWp_cMrRwjxSjO-vy2Cv7b"},		SAn_s:{id:"SAn_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w,value:"120SVl3kmLTTetv0_mrthuHsAUgRr8bG8t8ywKsgi"},		SAn_md:{id:"SAn_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w,value:"1sJdzuo-LRbdDpgIQrXqbnxzEQPIPaJJ0txncB87r"},		SAn_v:{id:"SAn_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w,value:"1iAH1oV5dyYxuUCOKa7W0xo3D4TUIoXCvzd9yTRJ_"}
		}},	SainteRose:{id:"Sainte-Rose",icon:T.T.x+"Sainte-Rose"+T.T.k, html: "<span title='pink holly' style='background-color: #FFF; #DAA520;'>Sainte-Rose</span>",value:"1gIcPI4SAohpVFM0seVxdlBAw2b2zesvpZH4QJ6DC",
		items:{
		SR_t:{id:"SR_t",icon:T.T.g+T.T.a+T.T.p,html:T.T.n+T.T.j+T.T.w,value:"1GKArjzvczShC_oTmoeSPVyxL_kfMEiyriOq4njIt"},		SR_s:{id:"SR_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w,value:"1fWsTyPLLg_jZbHXLmn921wWRYNpp7Mph64n9PaCA"},		SR_md:{id:"SR_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w,value:"1JelP0FaMsEp22nh7DWvjGWA-HHEll4WsusdNze3W"},		SR_v:{id:"SR_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w,value:"1beWOfA6DyHQS6-Kr9eZtG8i2io7Q4J9NquFgQyG-"},		SR_n:{id:"SR_n",icon:T.T.g+T.T.e+T.T.p,html:T.T.n+T.T.u+T.T.w,value:"1a-nJFvtF_lUeKPNpgQbFubQXRXlkubvH6glUBg8v"},		SR_a:{id:"SR_a",icon:T.T.g+T.T.f+T.T.p,html:T.T.n+T.T.o+T.T.w,value:"1iPRpywzSmOxOlLm5O-uJmrbbnn6YHGzl1rhuaJzA"}
		}},	LaPlaineDesPalmistes:{id:"LaPlaineDesPalmistes",icon:T.T.x+"LaPlaineDesPalmistes"+T.T.k,html: "<span title='Palmist plain' style='background-color: #FFF; #CD5C5C;'>La Plaine Des Palmistes</span>",value:"1jLXnDeXAjIbdZrgZFiovGef8BTUvyk5PkzoKsfCb",
		items:{
		PP_t:{id:"PP_t",icon:T.T.g+T.T.a+T.T.p,html:T.T.n+T.T.j+T.T.w,value:"1oCcByb4vw2JlnNqp49lIysqTTRV6wK1xlqeC9ZGe"},		PP_s:{id:"PP_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w, value:"1_ucovZZ5C18rlh_cGO6Uc2YgB23EmR-IQ9epBop4"},		PP_md:{id:"PP_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w, value:"15V8aJ6r5JNfr4xP4ZKnmi4i9mZTt6f0l8WG5hbE3"},		PP_v:{id:"PP_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w, value:"1DxmzBkR4z4qdMDV6bIl8P3ysFbbdWr41h83yK7wn"},		PP_a:{id:"PP_a",icon:T.T.g+T.T.f+T.T.p,html:T.T.n+T.T.o+T.T.w,value:"1PebD0cnAun_RkcbEXdDgw4DowklvtSFOD08NlDOj"}
		}},	Salazie:{id:"Salazie",icon:T.T.x+"Salazie"+T.T.k,html: "<span title='Rain beauty' style='background-color: #FFF; #000080;'>Salazie</span>",value:"1zRn7YirASic3zXNjwr0jPpwlUURx5v1w0wK2JGSZ",
		items:{
		SAz_t:{id:"SAz_t",icon:T.T.g+T.T.a+T.T.p,html:T.T.n+T.T.j+T.T.w,value:"1UzSHUROSXlwSlMlCe4WQBDyucf1m83YsGbX4FYhP"},		SAz_s:{id:"SAz_s",icon:T.T.g+T.T.b+T.T.p,html:T.T.n+T.T.s+T.T.w,value:"166vivC3Sr59gCaQR98o8-9sXHBfnKiJdX5hH_7tz"},		SAz_md:{id:"SAz_md",icon:T.T.g+T.T.c+T.T.p,html:T.T.n+T.T.m+T.T.w,value:"1wOqplnMkWf_CHXezRZBC3HvMSf2lcKcnNzgUx8Jp"},		SAz_v:{id:"SAz_v",icon:T.T.g+T.T.d+T.T.p,html:T.T.n+T.T.l+T.T.w,value:"1oWl8XUdryHiQxlg83t_pu6ERxi4PPOjrvx2Vbuhj"},		SAz_a:{id:"SAz_a",icon:T.T.g+T.T.f+T.T.p,html:T.T.n+T.T.o+T.T.w,value:"1TjFpDyS3jwXAsLdAUL92BdcjM__2SLu71VDkkli_"}
		}}
		}},TRAIL:{id:"TRAIL",icon:T.T.g+"trail"+T.T.p,html:"<span title='TRAIL' style='background-color: #FFF; #8B0000;'>TRAIL</span> ",value:"12rov6ssjS1uEIKAXlNv2YBkRQ2E9J-wjoDlEEmkj",
	items:{
	trail_grandraid:{id:"trail_grandraid",icon:T.T.g+"trail"+T.T.p,html:"<span title='La Diagonales des fous' style='background-color: #FFF; #4B0082;'>Grand Raid</span>",value:"1IaozwH9nEpntzbAJ1Utk-zpBcVNIam8g-rkAk_hw"},	trail_mascareignes:{id:"trail_mascareignes",icon:T.T.g+"trail"+T.T.p,html:"<span title='trail sprint' style='background-color: #FFF; #4B0082;'>La Mascareignes</span>",value:"1MJHssVsy5bV2lLJMJ6JSnAjqetOnFqh7a5LbZJqb"},	trail_debourbon:{id:"trail_debourbon",icon:T.T.g+"trail"+T.T.p,html:"<span title='Dit le DE Bourbon' style='background-color: #FFF; #4B0082;'>Trail de Bourbon</span>",value:"13PJGESUNPMCm1vurRLDF_3LgCkvvIAYRe7W9PlXR"}
	}}
	};
		}
	if($.urlParam('lieu')!=null){T.initSrch=$.urlParam('name');T.initl=$.urlParam('lieu');T.initl=$.urlParam('theme');}},
init:function(){
	$("#r_tab").change(function(){F.bms=false;B.fsearch(this.value),$(T.I.t).mouseover();}),
	$(F.updBackG).css(T.C.k,F.styles[1]),
	$(F.updBackG).css(T.C.l,T.C.j),
	$(F.updBackG).css(T.C.m,T.C.i),
	$("#fl").bind('click',function(){M.findMe();}),
	$(T.I.t).on("mouseenter",function(){
		T.bnm?[$(this).animate({opacity:T.C.h,height:T.C.i,width:T.C.g}),
		$(T.I.m).animate({opacity:T.C.f}),
		$(T.I.p).animate({opacity:T.C.f}),
		$('body').animate({height:T.C.e,margin:T.C.d,padding:T.C.d})]:[$(this).animate({zIndex:T.C.c}),
		$(T.I.m).animate({zIndex:T.C.b}),
		$(T.I.p).animate({zIndex:T.C.b})],
		$(T.I.n).empty(),
		F.append("<small>&Agrave; r\'tourn Return MAP </small>(A DROITE)","green"),
		$(T.I.n).bind('click',function(){T.bnm?[$(T.I.t).animate({opacity:T.C.c,height:T.C.a,width:T.C.i}),
		$(T.I.m).animate({opacity:T.C.c}),
		$(T.I.p).animate({opacity:T.C.c})]:[$(T.I.t).animate({zIndex:T.C.c}),
		$(T.I.m).animate({zIndex:T.C.b}),$(T.I.p).animate({zIndex:T.C.b})];});}),
		$(T.I.n).bind('click',function(){T.bnm?[$(T.I.t).animate({opacity:T.C.h,height:T.C.i,width:T.C.g}),$(T.I.m).animate({opacity:T.C.f}),$(T.I.p).animate({opacity:T.C.f})]:[$(T.I.t).animate({zIndex:T.C.c}),$(T.I.m).animate({zIndex:T.C.b}),$(T.I.p).animate({zIndex:T.C.b})];}),
		$(T.I.p).hover(function(){T.bnm?[$(T.I.t).animate({opacity:T.C.c,height:T.C.a,width:T.C.i}),$(T.I.m).animate({opacity:T.C.c}),$(T.I.p).animate({opacity:T.C.c})]:[$(T.I.t).animate({zIndex:T.C.c}),$(T.I.m).animate({zIndex:T.C.b}),$(T.I.p).animate({zIndex:T.C.b})];}),
		$("#rtrm").click(function(){T.bnm?[$(T.I.t).animate({opacity:T.C.c,height:T.C.a,width:T.C.i}),$(T.I.m).animate({opacity:T.C.c}),$(T.I.p).animate({opacity:T.C.c})]:'';}),
		$(T.I.d).change(function(){
				T.B(F.bms,false);
				T.B(M.colSrch,"description");
				B.msg.d('BOUZ For see, move mouse!!');
				M.srchOnAll(this.value),
				$(T.I.n).empty(),
				F.append(B.msg,T.C.u);})
		.mouseleave(function(){
				B.crTb(),M.displayList(),B.fshBDD();T.B(B.search,'');}),
		$(T.I.p).focus(function(){B.crTb(),M.displayList(),B.fshBDD();T.B(B.search,'');})
		.blur(function(){B.crTb(),M.displayList(),B.fshBDD();T.B(B.search,'');}),
		$(T.I.d).click(function(){B.msg.d('Bouz en bas Move down on transparent!!'),$(T.I.n).empty(),F.append(B.msg,T.C.t);}),
		$(T.I.b).bind('click',function(){
				$(T.I.u).empty(),
				$(T.I.u).animate({width:T.C.s});
				$(T.I.p).animate({left: T.C.g}),
				$('#small').show(),
				$(T.I.n).empty(),
				$('#dep').val(null),
				$('#arv').val(null),
				$(T.I.t).show(),
				$(T.I.i).css(T.C.r,T.C.t);
				$(T.I.i).css(T.C.q,'#FFFF00'),
				$(T.I.i).css(T.C.p,'15px');
				$(T.I.i).css(T.C.o,T.C.n);
				M.s=null;M.e=null;
				$(T.I.b).hide(),
				M.initialize(),
				$(T.I.t).show();}),
			$(T.I.n).bind('click',function(){
				T.bnm?[$(T.I.t).animate({opacity:T.C.c,height:T.C.a,width:T.C.i}),
				$(T.I.m).animate({opacity:T.C.c}),$(T.I.p).animate({opacity: T.C.c})]:[$(T.I.t).animate({zIndex:T.C.c}),
				$(T.I.m).animate({zIndex:T.C.b}),
				$(T.I.p).animate({zIndex:T.C.b})];}),
			$('#clear').css(T.C.r,T.C.t),
			$('#clear').bind('click',function(){
					M.map_centroid=new google.maps.LatLng(-21.137472,55.546906);
					M.doSearch(),
					$(T.I.r).jqxTree('collapseAll').jqxTree('uncheckAll').jqxTree('refresh');}),
				$('#find_me').click(function(){M.findMe();return false;}),
				$('#dep').click(function(){M.chad='#dep'; return true;}),
				$('#arv').click(function(){M.chad='#arv'; return true;}),
				$(T.I.m).mouseleave(function(){
					map.getMapTypeId()===google.maps.MapTypeId.ROADMAP?map.setMapTypeId(google.maps.MapTypeId.HYBRID):
					map.getMapTypeId()===google.maps.MapTypeId.HYBRID?map.setMapTypeId(google.maps.MapTypeId.SATELLITE):
					map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
					R.calcRoute();return true;}),
				$(T.I.i).click(function(){R.calcRoute();return true;});
				if(!T.bxt){
					$("#r_theme").selectBox({mobile:true})
					.change(function(){
						F.bms=false;
						if(T.srcZn[T.tmp]?true:false){
							M.srchOnAll(this.value),
							$(T.I.n).empty(),
							F.append(B.msg,T.C.u);
							B.msg.d('R\'gard champ rouz, &eacute;crits &agrave; o&ugrave;, ou play plus bas!!');
						}else{var rplc='#'+T.tmp+'_'+$(this).val();
							T.bnm?$(T.I.r).jqxTree(T.J.c,$(rplc)[0]):F.applyMob(rplc);
							}
					}),
					$("#r_lieu").selectBox({mobile:true})
					.change(function(){
						T.B(F.bms,false),T.B(T.tmp,$(this).val()),
						$("#r_theme").selectBox(T.J.v,"general"),
						$(T.I.r).jqxTree(T.J.c,$('#'+T.tmp)[0]);});}
				else{$("#r_lieu").empty(),$("#r_lieu").html(T.initSrch),$("#r_theme").empty();}},
kpe:function(e){var x=e.which||e.keyCode;switch(x){case 99:window.open('http://runsense.re/concert.html');return false;case 109:window.open('http://youtube.runsense.re',"_self");return false;case 121:window.open('http://runsense.re/runYT.html',"_self");return false;case 114:window.open('http://runsense.re');return false;case 105:window.open('http://youtube.runsense.re/return.html',"_self");return false;case 104:window.open('http://youtube.runsense.re/runHipHop.html',"_self");return false;	case 118:window.open('http://youtube.runsense.re/retour.html',"_self");return false;default:break;}}};
T.W.keypress(T.kpe);
var B={
	bmrk:false,results:null,idx:0,search:"",list_table:"",l:{a:null,n:null},lat:null,lng:null,msg:new W("Pour Afficher les donners, cliquer ailleurs!!"),
	fsearch:function(s){var rplc='#'+s.replace(this,T.C.z);var table=$(T.I.l).dataTable();table.fnFilter(s),$(rplc).mouseover();},
	displayList:function(json){
		try{M.handleError(json);}catch(e){;}var columns=json["columns"];var rows=json["rows"];var rplc="#"+M.cpte;B.results=$(rplc);
		B.results.empty(),!rows?B.results.append("<span class='lead'>No results found</span>"):{a:B.crTb(),b:B.cRows(rows),c:B.fnsTb()};},
	crTb:function(){var rplc="#"+0;B.results=$(rplc);B.results.empty();B.list_table="<table class='table' id ='list_table'><tbody>";},
	fshBDD:function(){
		B.list_table+="</tbody></table>";M.map_centroid=B.l.a&&B.l.n&&B.l.n<55.8?new google.maps.LatLng(B.l.a,B.l.n):M.map_centroid;map.setCenter(M.map_centroid);
		B.results.append(B.list_table),
		$(T.I.l).dataTable({"aoColumns":[null,null,null,null,null,null],"sDom":'<"top"pf>rt<"bottom"lip><"clear">',"language":{"sProcessing":"T ou plane!!","infoEmpty":"La patience reste en vertus!!Wait or complete search!!","zeroRecords":B.msg},
			"bFilter":true,"bInfo":true,"scrollY":"450px","scrollCollapse":true,"paging":true,"bAutoWidth":false}),
		$(".table tbody").on('click',T.J.r,function(){
			if(!F.bchk){M.addSrchMarker.setMap(null);var lat=$(this).children('td:nth-child(4)').text();var lng=$(this).children('td:nth-child(5)').text();var nm='#'+$(this).children('td:nth-child(6)').text();B.tabToMap(lat,lng),$(T.I.r).jqxTree(T.J.c,$(nm)[0]),$(T.I.r).jqxTree(T.J.e,$(nm)[0]),$(T.I.m).focus();F.zoom=13;T.bnm=true;}
			})
		.on(T.J.o,T.J.r,function(){$(this).css(T.C.y,"#0404B4");})
		.on(T.J.v,T.J.r,function(){$(this).css(T.C.y,"");})
		.on(T.J.o,T.J.d,function(){$(this).css(T.C.y,"#B8860B"),$(this).css(T.C.x,T.C.w);})
		.on(T.J.v,T.J.d,function(){$(this).css(T.C.y,""),$(this).css(T.C.x,T.C.v);});},
	fnsTb:function(){
		B.list_table+="</tbody></table>";M.map_centroid=B.l.a!=""&&B.l.n!=""&&B.l.n<55.8?[new google.maps.LatLng(B.l.a,B.l.n),map.setCenter(M.map_centroid)]:'';
		B.results.append(B.list_table),
		$(T.I.l).dataTable({"aoColumns":[null,null,null,null,null,null,null],"sDom":'<"top"pf>rt<"bottom"lip><"clear">',"language":{"infoEmpty":"La patience reste en vertus!!Wait and move mouse","zeroRecords":"PLAY WITH MOUSE for search go top right and left down!!Y GAGN ZOUER POU FE LE RECHERCHE EN HAUT A DROITE EN BAS A GAUCHE"},"oSearch":{"sSearch":B.search},"bFilter":true,"bInfo":true,"scrollY":"450px","scrollCollapse":true,"paging":true,"bAutoWidth":false}),
		$(".table tbody").on('click',T.J.r,function(){
			if(!F.bchk){
				M.addSrchMarker.setMap(null);T.B(B.bchk,true);var nm=$(this).children('td:nth-child(2)').text();
				var lat=$(this).children('td:nth-child(5)').text();var lng=$(this).children('td:nth-child(6)').text();
				var idref=$(this).children('td:nth-child(7)').text();
				var r=nm.replace(this,[/\s|[-]/g,'']);
					if(T.srcId[r]&&T.srcId[r].label){
						T.B(B.bmrk,true);nm='#'+idref;
						}
					
				if(!B.bmrk&&T.srcZn[nm]){T.B(B.bmrk,true);nm='#'+nm;};
				B.tabToMap(lat,lng);T.B(B.bmrk,false);T.B(B.bchk,false);
				$(T.I.r).jqxTree(T.J.c,$(nm)[0]),
				$(T.I.m).focus();}})
		.on(T.J.o,T.J.r,function(){$(this).css(T.C.y,"#0404B4");})
		.on(T.J.v,T.J.r,function(){$(this).css(T.C.y,"");})
		.on(T.J.o,T.J.d,function(){$(this).css(T.C.y,"#B8860B"),$(this).css(T.C.x,T.C.w);})
		.on(T.J.v,T.J.d,function(){$(this).css(T.C.y,""),$(this).css(T.C.x,T.C.v);});},
	cRows:function(rows){
		for(var row in rows){
			var ctg=rows[row][0];var nom=rows[row][1];var desc=rows[row][2];B.l.a=rows[row][3];B.l.n=rows[row][4];
			if(ctg.split("http:").length===1){
				var spl=ctg.split("*");var lg=spl.length;
				if(lg===1){ctg="<img src='http://runsense.github.io/js/img/ico/"+ctg+".png' style='width: 30px;height: 30px'></img>";}
				else{ctg='';for(var i in spl){ctg=ctg+"<img src='http://runsense.github.io/js/img/ico/"+spl[i]+".png' style='width: 15px;height: 30px'></img>";}}
			}else{ctg="<img src='"+ctg+"' style='width: 30px;height: 30px'></img>";}
			B.list_table+="<tr id="+nom.replace(/ /g,'').replace(/'/g,'')+"><td >"+ctg+"</td><td >"+nom+"</td><td >"+desc+"</td><td >"+ctg+"</td><td style='color:blue;width:20px;' >"+B.l.a+"</td><td style='color:blue;width:20px;' >"+B.l.n+"</td><td style='visibility:hidden;' >"+rows[row][5]+"</td></tr>";}},
	tabToMap:function(lat,lng){
		if(lat>-22&&lng<55.8){
			M.map_centroid=new google.maps.LatLng(lat,lng);map.setCenter(M.map_centroid),map.setMapTypeId(google.maps.MapTypeId.ROADMAP),
			map.setZoom(F.zoom!=10?16:F.zoom),T.bnm?[$(T.I.t).animate({opacity:T.C.f,height:'30%'}),
			$(T.I.m).animate({opacity:T.C.c})]:[$(T.I.t).animate({zIndex:T.C.b}),
			$(T.I.m).animate({zIndex:T.C.c}),$(T.I.p).animate({zIndex:T.C.c})];
			M.chad='#arv';M.addrFromLatLng(M.map_centroid);
			if(!B.bmrk){var ad=$(M.chad).val();M.addSrchMarker=new google.maps.Marker({position:M.map_centroid,map:map,animation:google.maps.Animation.DROP,title:ad});}
}}};
var R={
	directionsDisplay:new google.maps.DirectionsRenderer(),directionsService:new google.maps.DirectionsService(),
	calcRoute:function(){
		$(T.I.n).empty(),$(T.I.n).show();
		M.e!==null?{a:R.directionsService.route(
		{origin:M.s,destination:M.e,travelMode:google.maps.TravelMode.DRIVING},
		function(response,status){
			status==google.maps.DirectionsStatus.OK?
			{a:R.directionsDisplay.setDirections(response),b:M.zoom(map),c:$(T.I.n).empty(),d:R.directionsDisplay.setPanel(document.getElementById('pano')),e:$('#small').hide(),f:$(T.I.u).animate({width:'35%'}),g:$(T.I.p).animate({left:T.C.i}),h:$(T.I.t).hide(),i:$(T.I.b).show()}:
			{a:$(T.I.n).empty(),b:$(T.I.n).append("<h1>Y GAGN PA t&EGRAVE;r l&AGRAVE!!(UNKNOW ADRESSE)</h1>"),c:$(T.I.n).css("color","#000"),d:$(T.I.n).css("background-color","red")}
		}),
		b:M.doSearch()}
		:'';}
	};
T.exturi();

var F={
	bchk:false,bgrow:false,bms:true,updBackG:"body",
	ptbid:['1So5MDh-kSSDOudH6iznmgC3DTfn4SBKiilMj27DI'],
	styles:["grocery",T.bstyle],
	zoom:F.zoom==12?11:F.zoom==11?10:F.zoom==10?12:10,
	srcStyle:{terrainetjeuxPOOL:{label:T.T.J,value:T.T.a},sentierspoutoutPATHROAD:{label:T.T.s,value:T.T.b},manzédormirEATSLEEP:{label:T.T.m,value:T.T.c},LieudietOffquartiernomPLACEQUARTER:{label:T.T.l,value:T.T.d},boitedenuitkabarNIGHTCLUBFESTIVALS:{label:T.T.u,value:T.T.e},loisirslgadiambENTERTAINEMENTSEAINFO:{label:T.T.o,value:T.T.f},EST:{label:"EST",value:"#DAA520",lien:T.T.h+"Est.png"},BrasPanon:{label:"Bras-Panon",value:"#4B0082",lien:T.T.h+"brasPanon.png"},SaintAndre:{label:"Saint-Andre",value:"#006400",lien:T.T.h+"saintAndre.png"},SaintBenoit:{label:"Saint-Benoit",value:"#008B8B",lien:T.T.h+"saintBenoit.png"},SainteAnne:{label:"Sainte-Anne",value:"#800000",lien:T.T.h+"sainteAnne.png"},SainteRose:{label:"Sainte-Rose",value:"#DAA520",lien:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sainte-Rose_eglise.jpg/800px-Sainte-Rose_eglise.jpg"},LaPlaineDesPalmistes:{label:"La Plaine Des Palmistes",value:"#CD5C5C",lien:"https://upload.wikimedia.org/wikipedia/commons/b/b3/Ppalmistes2.jpg"},Salazie:{label:"Salazie",value:"#000080",lien:"http://www.transeet.fr/wp-content/uploads/2013/05/Ile-de-la-Reunion-510x350.jpg"},OUEST:{label:"OUEST",value:"#CD5C5C",lien:T.T.h+"Ouest.png"},Mafate:{label:"Mafate",value:"#4B0082",lien:T.T.h+"mafate.png"},SaintGilles:{label:"Saint-Gilles",value:"#006400",lien:T.T.h+"saintGilles.png"},SaintLeu:{label:"Saint-Leu",value:"#008B8B",lien:T.T.h+"saintLeu.png"},TroisBassins:{label:"Trois Bassins",value:"#800000",lien:T.T.h+"troisBassins.png"},SaintPaul:{label:"Saint-Paul",value:"#DAA520",lien:T.T.h+"saintPaul.png"},EtangSale:{label:"Etang Sale",value:"#CD5C5C",lien:T.T.h+"etangSale.png"},EntreDeux:{label:"Entre-Deux",value:"#000080",lien:T.T.h+"entreDeux.png"},LesAvirons:{label:"Les Avirons",value:"#FFD700",lien:T.T.h+"lesAvirons.png"},SUD:{label:"SUD",value:"#66CDAA",lien:T.T.h+"sud.png"},SaintPierre:{label:"Saint-Pierre",value:"#4B0082",lien:T.T.h+"saintPierre.png"},SaintJoseph:{label:"Saint-Joseph",value:"#006400",lien:T.T.h+"saintJoseph.png"},PetiteIle:{label:"Petite Ile",value:"#008B8B",lien:"https://upload.wikimedia.org/wikipedia/commons/1/11/Reunion_PetiteIle.JPG"},SaintLouis:{label:"Saint-Louis",value:"#800000",lien:"https://upload.wikimedia.org/wikipedia/commons/e/e1/R%C3%A9union_LesMakes.JPG"},Cilaos:{label:"Cilaos",value:"#DAA520",lien:"https://upload.wikimedia.org/wikipedia/commons/4/43/Cirque_De_Cilaos_On_Reunion.jpg"},Tampon:{label:"Tampon",value:"#CD5C5C",lien:T.T.h+"tampon.png"},LaPlaineDesCafres:{label:"La Plaine Des Cafres",value:"#000080",lien:T.T.h+"laPlaineDesCafres.png"},enclosduTremblet:{label:"enclos du Tremblet",value:"#FFD700",lien:"https://upload.wikimedia.org/wikipedia/commons/3/37/Piton_de_la_Fournaise%2C_R%C3%A9union_Island_%28High_Resolution%29.jpg"},SaintPhillippe:{label:"Saint-Phillippe",value:"#66CDAA",lien:T.T.h+"saintPhillippe.png"},NORD:{label:"NORD",value:"#4169E1",lien:T.T.h+"rocheEcrite.png"},SaintDenis:{label:"Saint-Denis",value:"#4B0082",lien:"https://upload.wikimedia.org/wikipedia/commons/b/b9/SaintDenisReunion003.jpg"},SainteMarie:{label:"Sainte-Marie",value:"#006400",lien:T.T.h+"sainteMarie.png"},SainteSuzanne:{label:"Sainte-Suzanne",value:"#008B8B",lien:T.T.h+"sainteSuzanne.png"},LaPossession:{label:"La Possession",value:"#800000",lien:T.T.h+"laPossession.png"},LePort:{label:"Le Port",value:"#DAA520",lien:T.T.h+"lePort.png"},TRAIL:{label:T.anex[0],value:"#3300CC",lien:T.T.h+"trail.png"},GrandRaid:{label:T.anex[1],value:"poi"},TraildeBourbon:{label:T.anex[2],value:"poi"},LaMascareignes:{label:T.anex[3],value:"poi"}},
	x:function(v){return v.replace(this,[/\s|\&|[.-]/g,'']);},
	applyChild:function(items){$.each(items,F.chkItm(this));},
	chkItm:function(elmt){$(T.I.r).jqxTree(T.J.k,$('#'+elmt.id)[0],true);},
	slcItm:function(txt){return $(T.I.r).jqxTree(T.J.c,$('#'+txt)[0],true);},
	applysrch:function(i){F.ptbid=[];F.styles=[];var u=i?F.srcStyle[F.x(i.label)]:'';u!=null?F.styles.push(u):[F.styles.push(T.bstyle),F.ptbid.push(i.value)];},
	applyMob:function(rplc){F.ptbid=[];F.styles=[];rplc=rplc.replace(/#/g,'');var v=T.src[rplc];var u=F.srcStyle(v.html.split('>')[1].split('<')[0]);u!=null?[F.styles.push(u),F.ptbid.push(v.value)]:[F.styles.push[T.bstyle],F.ptbid.push(v.value)],M.doSearch();},
	append:function(txt,color){$(T.I.n).append(txt),$(T.I.n).css("color","white"),$(T.I.n).css("background-color",color);},
	selectBox:function(i){!i.id.match('_')?[$("#r_lieu").selectBox(T.J.v,i.id.split('_')[0]),T.tmp=T.srcZn[i.id],T.B(F.bms,true)]:[$("#r_theme").selectBox(T.J.v,i.id.split('_')[1]),T.B(F.bms,false)];},
	init:function(){
		$(T.I.r).jqxTree({checkboxes:true,source:T.src,width:T.C.i,height:F.initl}),
		$(T.I.r).on('expand',function(ev){var e=ev.args.element;var i=T.bnm?$(T.I.r).jqxTree(T.J.i,e):'';i&&!F.bgrow?[T.B(F.bgrow,true),F.selectBox(i),$(T.I.r).jqxTree(T.J.k,e,true),$('#small').show(),F.applysrch(i),M.doSearch(),$(T.I.r).jqxTree('ensureVisible',e)]:'';}),
		$(T.I.r).on('collapse',function(ev){T.B(F.bms,true),T.B(F.bgrow,true);F.ptbid=[];!F.bgrow?[$(T.I.t).empty(),F.applysrch(null),$('#small').hide(),M.doSearch()]:'';}),
		$(T.I.r).bind(T.J.s,function(ev){ev.preventDefault(),ev.stopPropagation();var e=ev.args.element;$(e).find("li").length>1?T.B(F.bms,true):'';var i=$(T.I.r).jqxTree(T.J.i,e);i?[F.selectBox(i),$.each(T.T,function(){this===i.label?T.B(F.bgrow,true):'';}),$(T.I.r).jqxTree(T.J.k,e,true),F.applysrch(i),M.doSearch()]:'';}),
		$(T.I.r).on('checkChange',function(ev){
			if(!F.bgrow){
				$('#clear').css(T.C.r,T.C.u),$('#clear').css(T.C.q,'green');var a=ev.args;var e=a.element;
				var item=$(T.I.r).jqxTree(T.J.i,e);var bIn=false;
				$.each(T.T,function(){bIn=item.label===this?true:bIn;});
				if(!bIn){
					T.tmp=item.label;var items=$(T.I.r).jqxTree('getCheckedItems');var pre=e.parentElement.parentElement;
					if($(T.I.r).jqxTree(T.J.i,pre)){
						$.each(items,function(){this.element!=pre&&this.element!=e?$(T.I.r).jqxTree(T.J.u,this.element):'';});}
				}T.B(F.bgrow,true);a.checked?$(T.I.r).jqxTree(T.J.e,e):$(T.I.r).jqxTree(T.J.c,e);}
			else{$('#clear').css(T.C.o,'bold').css(T.C.p,'13px');}});}};
		google.maps.visualRefresh=true;
var M={colSrch:'description',s:null,e:null,cpte:0,chad:'',datajson:['',''],
geocoder:new google.maps.Geocoder(),polygonTableID:[],polygon:new Array(),googleApiKey:T.ak.v,locationColumn:"lat",
map_centroid:new google.maps.LatLng(-21.137472,55.546906),
locationScope:"reunion",row:[],addSrchMarker:new google.maps.Marker(),h:34,p:10,
initialize:function(){try{M.geocoder=new google.maps.Geocoder();R.directionsDisplay=new google.maps.DirectionsRenderer();}catch(e){;}
	var myOptions={zoom:F.zoom,center:M.map_centroid,mapTypeId:google.maps.MapTypeId.ROADMAP,styleId:2,templateId:1};
	map=new google.maps.Map($("#map_canvas")[0],myOptions);map.setStreetView(new google.maps.StreetViewPanorama(document.getElementById("pano"),{position: M.map_centroid,pov:{heading:34,pitch:10}}),
	google.maps.event.addListener(map,"click",function(event){M.clickmap(event);}),
	google.maps.event.addDomListener(window,'resize',function(){map.setCenter(M.map_centroid),map.setZoom(F.zoom);});
	try{R.directionsDisplay.setMap(map);}catch(e){;}google.maps.event.addListener(map,T.J.o,function(event){map.setZoom(F.zoom);}),M.doSearch();if(T.initSrch!=''){M.colSrch="nom";var srch=T.initSrch;T.B(F.bms,false);$("#r_lieu").val(T.initl),$("#r_theme").val(T.initl),$(T.I.d).val(srch),M.srchOnAll(srch),$(T.I.d).focus(),$(T.I.d).mouseenter(),$(T.I.n).empty(),F.append('PLAY WITH MOUSE for search go top right and left down!!Y GAGN ZOUER POU FE LE RECHERCHE EN HAUT A DROITE EN BAS A GAUCHE','#660066');}},
doSearch:function(location){F.bgrow=false;M.clearSearch();M.polygonTableID=F.ptbid;M.polygon=[];try{var tl=M.polygonTableID.length;map.setMapTypeId(google.maps.MapTypeId.SATELLITE);for(var i=0;i<tl;i++){var stl=F.styles[i];stl==T.T.c||stl==T.T.e?map.setMapTypeId(google.maps.MapTypeId.HYBRID):'';var layer=new google.maps.FusionTablesLayer({query:{from:M.polygonTableID[i],select:"geometry"},styles:[{markerOptions:{iconName:stl},polygonOptions:{fillColor:stl,fillOpacity:0.4,strokeColor:"#FFFFF0",strokeWeight:"int"},polylineOptions:{strokeColor:stl,strokeWeight:"int"}}]});try{var chcmp=F.styles[i+1];var c=chcmp.charAt(0)!='#'&&chcmp!='NO';c&&!T.bnm?$(F.updBackG).css(T.C.k,'url('+chcmp+')'):c?[$(F.updBackG).css(T.C.k,'url('+chcmp+')'),$(F.updBackG).css(T.C.l,T.C.j),$(F.updBackG).css(T.C.m,T.C.i)]:$(F.updBackG).css(T.C.k,'url("+T.bstyle+")');stl.charAt(0)!='#'?$(T.I.p).css(T.C.q,stl):'';F.styles=[];}finally{google.maps.event.addListener(layer,'click',function(e){M.anLayer(e);}),M.polygon.push(layer),M.polygon[i].setMap(map);}}}catch(e){;}finally{M.getList(),$(T.I.m).focus(),$.each(T.anex,function(){T.tmp===this?map.setZoom(10):'';});}},
anLayer:function(e){if(!F.bchk&&!F.bgrow){var s=e.infoWindowHtml.split('<b>nom:</b> ')[1].split('<br>')[0];T.B(F.bchk,true);var rplc='#'+s.replace(this,T.C.z);M.chad='#arv';console.log(rplc),B.fsearch(s),$(T.I.r).jqxTree(T.J.c,$(rplc)[0]),M.addrFromLatLng(e.latLng),T.B(F.bchk,false);return s;}},
findMe:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(position){fl=new google.maps.LatLng(position.coords.latitude,position.coords.longitude);M.chad='#dep';M.addrFromLatLng(fl),map.setCenter(fl);},null):F.append('Lo l\'action fo config!!Configurate your Position',T.C.u);},
getSearch:function(v){$.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql=SELECT nom,description,lat,lng,categ,id FROM "+v+"&callback=M.addrow&key="+M.googleApiKey,dataType:"jsonp"});},
query:function(slcCol,limit,callback){
	for(var i in M.polygonTableID){
		if(M.polygonTableID[i]!="NO"){
			M.cpte=i;$(T.I.t).append("<div title='Revenir MAP A DROITE(View MAP RIGHT)' id="+i+" style='background-color: #FFFFFF;'/>"),
			$.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql=SELECT "+slcCol+" FROM "+M.polygonTableID[i]+"&callback="+callback+"&key="+M.googleApiKey,dataType:"jsonp"});}
		else{$(T.I.t).empty(),$(T.I.t).append("<div  id="+i+" style='background-color: #FF0000;>NO DATA</div>");}}
	$(T.I.n).empty(),F.append("D\'scend en bas po&ugrave; l&egrave;v lo l'act </br> (GO ON TRANSPARENT  left down panel)","blue");},
addrFromLatLng:function(l){
	console.log(l),M.geocoder.geocode({'latLng':l},function(r,status){
		if(status===google.maps.GeocoderStatus.OK){r.length>1?$(M.chad).val(r[0].formatted_address.split(',')[0]+','+r[1].formatted_address):$(M.chad).val(r[0].formatted_address);			
if(M.chad=='#dep'){M.s=results[0].formatted_address;$(T.I.i).css(T.C.p,'20px');$(T.I.i).css(T.C.o,'bold');}
else{M.e=results[0].formatted_address;$(T.I.i).css(T.C.r,T.C.u);$(T.I.i).css(T.C.q,'green');}}});},
zoom:function(map){var bounds=new google.maps.LatLngBounds();map.data.forEach(function(feature){M.processPoints(feature.getGeometry(),bounds.extend,bounds);}),map.fitBounds(bounds);},
processPoints:function(geometry,callback,thisArg){geometry instanceof google.maps.LatLng?callback.call(thisArg,geometry):geometry instanceof google.maps.Data.Point?callback.call(thisArg,geometry.get()):geometry.getArray().forEach(function(g){M.processPoints(g,callback,thisArg);});},
clickmap:function(pos){pos?M.addrFromLatLng(pos.latLng):'',map.setMapTypeId(google.maps.MapTypeId.HYBRID);},
clearSearch:function(){M.row=[];M.polygonTableID=null;$.each(M.polygon,function(){M.polygon[i]?M.polygon[i].setMap(null):null;}),map.setCenter(M.map_centroid),map.setZoom(F.zoom);},
getList:function(){var slcCol='categ,nom,description,lat,lng,id';M.query(slcCol, 10,'B.displayList');},
srchOnAll:function(txt){M.colSrch="description";var th=$("#r_theme").val();var li=$("#r_lieu").val();if(txt!=''){try{B.search=txt;M.row=[];M.cpte=0;var b=true;B.crTb(),$.each(T.src,function(){if(b){var items=this.items;$.each(this.items,function(){if(b){b=this.id==li?false:b;$.each(this.items,function(){M.getSearch(this.value);});}});b=src.id==li?false:b;}});}finally{M.displayList(),B.fshBDD();}}},
addrow:function(j){try{M.handleError(j),$.each(j["rows"],function(){this?M.row.push([this[4],this[0],this[1],this[2],this[3],this[5]]):'';});}finally{$(T.I.t).fadeIn('fast');}},
displayList:function(){M.cpte=0;$.each(M.row,function(){try{var ctg=this[0];var t=ctg.match(/(http:)/)?ctg.charAt(0)=='*'?"<img src='http://runsense.github.io/js/img/ico/"+ctg+".png' style='width:30px;height:30px'></img>":$.each(ctg.split('*'),function(){ctg=ctg+"<img src='http://runsense.github.io/js/img/ico/"+this+".png' style='width:15px;height:30px'></img>";}):"<img src='"+ctg+"' style='width:30px;height:30px'></img>";ctg=t?t:ctg;B.l={a:this[3],n:this[4]},B.list_table+="<tr><td> "+ctg+"</td><td>"+this[1]+"</td><td>"+this[2]+"</td><td style='color:blue;width:20px;' >"+this[3]+"</td><td style='color:blue;width:20px;'>"+this[4]+"</td><td style='visibility:hidden;'>"+this[5]+"</td></tr>";}catch(e){;}});},
handleError:function(j){var e=j["error"]?j["error"]["errors"]:'';console.log("Error in Fusion Table call!"),$.each(e,function(){console.log("Domain: "+this["domain"]),console.log(" Reason: "+this["reason"]),console.log(" Message: "+this["message"]);});}};