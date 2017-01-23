/*!
 * Runsense 97Kafr
 *
 * Copyright 2018, Dalleau Pascal
 *
 */
var bnm=$('#map_canvas').css('width')==='800px'?false:true;var initl='auto';
var FI=FI||{};var FI={/*blockzoom*/
	anex:["TRAIL","Grand Raid","Trail de Bourbon","La Mascareignes"],
	srcZn:['NORD','OUEST','EST','SUD','TRAIL'],
	srcId:[{label:'Mafate',value:'Mafate',id:'Ma'},{label:'Saint-Gilles',value:'Saint-Gilles',id:'SG'},{label:'Saint-Leu',value:'Saint-Leu',id:'SL'},{label:'Trois-Bassins',value:'TroisBassins',id:'TB'},{label:'Saint-Paul',value:'Saint-Paul',id:'SPA'},{label:'l Etang Salé',value:'EtangSalé',id:'ES'},{label:'Entre-Deux',value:'Entre-Deux',id:'ED'},{label:'Les Avirons',value:'LesAvirons',id:'AV'},{label:'Saint-Pierre',value:'Saint-Pierre',id:'SPI'},{label:'Saint-Joseph',value:'Saint-Joseph',id:'SJ'},{label:'Petite Ile',value:'PetiteIle',id:'PI'},{label:'Saint-Louis',value:'Saint-Louis',id:'SLO'},{label:'Cilaos',value:'Cilaos',id:'CI'},{label:'Tampon',value:'Tampon',id:'T'},{label:'La Plaine des Cafres',value:'LaPlaineDesCafres',id:'PC'},{label:'Volcan' ,value:'enclosduTremblet',id:'ET'},{label:'Saint-Phillippe',value:'Saint-Phillippe',id:'SPH'},{label:'Saint-Denis',value:'Saint-Denis',id:'SD'},{label:'Sainte-Marie',value:'Sainte-Marie',id:'SM'},{label:'Sainte-Suzanne',value:'Sainte-Suzanne',id:'SS'},{label:'La Possession',value:'LaPossession',id:'Pos'},{label:'Le Port',value:'LePort',id:'Por'},{label:'Bras-Panon',value:'Bras-Panon',id:'BPn'},{label:'Saint-André',value:'Saint-André',id:'SAd'},{label:'Saint-Benoit',value:'Saint-Benoit',id:'SB'},{label:'Sainte-Anne',value:'Sainte-Anne',id:'SAn'},{label:'Sainte-Rose',value:'Sainte-Rose',id:'SR'},{label:'La Plaine des Palmistes',value:'LaPlaineDesPalmistes',id:'PP'},{label:'Salazie',value:'Salazie',id:'SAz'},{label:'Grand Raid',value:'la diagonale des fous',id:'trail_grandraid'},{label:'Trail de Bourbon',value:'Trail de Bourbon',id:'trail_debourbon'},{label:'La Mascareignes',value:'La Mascareignes',id:'trail_mascareignes'}],
	initSrch:'',bxt:false,ak:'',src:'',zm:10,bnm:bnm,initl:initl,idtree:"#jqxTree",idtab:"#listv",idmap:"#map_canvas",idp:"#panel",idinf:"#info",iditi:"#iti",idbtn:"#btn",idsup:"#pano",idrbb:"#r_bdd",bstyle:"http://runsense.github.io/js/f.png",
	txtInit:["terrain et jeux POOL"/*0*/,"sentiers pou tout PATH & ROAD"/*1*/,"manzé & dormir EAT & SLEEP"/*2*/,"Li& di et Off. quartier nom PLACE & QUARTER"/*3*/,"boite de nuit & kabar NIGHT CLUB & FESTIVALS"/*4*/,"loisirs & l'gadiamb ENTERTAINEMENT & SEA INFO"/*5*/,"http://runsense.github.io/js/img/"/*6*/,"http://maps.google.com/mapfiles/kml/shapes/"/*7*/,".png"/*8*/,"<span style='background-color: #FFF;'>"/*9*/,"</span>"/*10*/,"http://runsense.github.io/js/img/blason/"/*11*/,".gif"/*12*/],
	tmp:'',
	frp:function(name){var results=new RegExp('[\?&]'+name+'=([^&#]*)').exec(window.location.href);try{return results[1]||0;}catch(e){return null;}},
	exturi:function(){
		$.urlParam=FI.frp;
		if($.urlParam('apikey')!=null){
			FI.ak=$.urlParam('apikey');FI.src=[{label:$.urlParam('name'),value:$.urlParam('fusiontableid')}];FI.bxt=true;
		}else{
			FI.ak="AIzaSyBt_AYP2XcqjnOMLb6_tX6LyQRE1CXRYR0";
			FI.src=[{id:"OUEST",icon:FI.txtInit[11]+"reunion"+FI.txtInit[12],html:"<span title='WEST' style='background-color: #FFF; #8B0000;'>OUEST</span> ",value:"1t35ApBEMf9xwiZA9EqZd-glj8GexmPuhpSr_ndlh",items:[{id:"Mafate",icon:FI.txtInit[11]+"Mafate"+FI.txtInit[12], html:"<span title='Green heart' style='background-color: #FFF; #4B0082;'>Mafate</span>",value:"1GveH25DbaQoreX86sPBmcFei9zfvi8UmD2y2qyqu", items:[{id:"Ma_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10],value:"18JyKnH11VSG-SUHvvoIIxrkfTKDx4wwQd7Bpbe_p"},{id:"Ma_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10],value:"1vfct65S_RoeN5rdKfGeUF7ux6EUrtXL5HzGj1p08"},{id:"Ma_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10],value:"1WeFn6tuD30_ShUb76sLjrA0SacbuV9j3E5h5k0cZ"}]},{id:"Saint-Gilles",icon:FI.txtInit[11]+"Saint-Gilles"+FI.txtInit[12],html:"<span title='Beach' style='background-color: #FFF; #006400;'>Saint-Gilles</span>" ,value:"1sa1fCY5I_xhM7AyYIWyqJedxZzBmGcIfrH1Q8tke",items:[{id:"SG_t",icon:FI.txtInit[7]+"play"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[0]+FI.txtInit[10],value:"1cfDuclfE5Kz88w0egT267xw7Mg77Xw4wkEhi7bws"},{id:"SG_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10],value:"19ViFSzg0Auo8m31abL2z_9OUjBHImUR0PFx9pTro"},{id:"SG_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10],value:"12undvS9IMnRnEeTYClqje8BFf7nQYlQvD0VJmlb4"},{id:"SG_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10],value:"1hMxXypHObu1TaGNVj6Hig_bgSG6FEx68w8p3psqa"},{id:"SG_n",icon:FI.txtInit[7]+"star"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[4]+FI.txtInit[10],value:"1NEArpXB8yKypvOY0FlhXeg_BC-3AbUUvQIvxVyfI"},{id:"SG_a",icon:FI.txtInit[7]+"ranger_station"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[5]+FI.txtInit[10],value:"13Tj9i_c7p5qrbFYM5a6OXBgGIhxUetOh-DAIVpDC"}]},{id:"Saint-Leu",icon:FI.txtInit[11]+"Saint-Leu"+FI.txtInit[12],html:"<span title='Saint-Leu' style='background-color: #FFF; #008B8B;'>Saint-Leu</span>",value:"1ahKjlUXShjRwyOlo7ZCcZMSvEpJfRG9hY7_Qg6TA",items:[{id:"SL_t",icon:FI.txtInit[7]+"play"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[0]+FI.txtInit[10],value:"1WreJYQyzcURwYIN8UqJUNUJHJ5k_xiyUeIzTkhTm"},{id:"SL_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10],value:"11W_793Vb7vxwFp6vLsGV9n83by8wA0NJOD0_urIV"},{id:"SL_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10],value:"1zurSKheMQdZ7cFgw5B7y3ihGUWXutuHHhsIonkhS"},{id:"SL_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10],value:"1pXRpIDoonJjBECHhUEtKjcG_AmiRC43vnejF1UXq"},{id:"SL_n",icon:FI.txtInit[7]+"star"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[4]+FI.txtInit[10],value:"1teakmILV4AZcMznt3ihFWUbLAH1W1ILNYxpi6Tz8"},{id:"SL_a",icon:FI.txtInit[7]+"ranger_station"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[5]+FI.txtInit[10],value:"1v6kmzTDGRK_q66oyNuyr0842W4drPkVFJjoMDaRH"}]},{id:"TroisBassins",icon:FI.txtInit[11]+"TroisBassins"+FI.txtInit[12],html:"<span title='three pond' style='background-color: #FFF; #800000;'>Trois Bassins</span>",value:"12g6QNhlYlaTgGoEN_K3Tyl6QV31y6TUPuHXjM-g-", items:[{id:"TB_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10],value:"11YVBN4CqL6oLdASJEJ_lJ13WWNEJc6_yZxQrQeoZ"},{id:"TB_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10],value:"1yBld8_oUcv_2Ccnqz7xV2dKo16xbYoqtbhjjQIIC"},{id:"TB_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10],value:"1KbxFddq2D4uo3RNMruBz17I266wO9OYjXpwQNxoS"},{id:"TB_a",icon:FI.txtInit[7]+"ranger_station"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[5]+FI.txtInit[10],value:"1uzRedo3Qe9b4HZjHlgcDxReLo6r3udNWyBIaOM7L"}]},{id:"Saint-Paul",icon:FI.txtInit[11]+"Saint-Paul"+FI.txtInit[12],html:"<span title='Saint-Paul' style='background-color: #FFF; #DAA520;'>Saint-Paul</span> ",value:"1yPMDk3KG56Dero7Lway4oMIw42daQVKtK0PLjKNZ",items:[{id:"SPA_t",icon:FI.txtInit[7]+"play"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[0]+FI.txtInit[10],value:"1pF55Ecb8S5nMLRADZ_ZrYqhTdGXLQRu2v4knP32n"},{id:"SPA_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10],value:"105O9BV8SR2p9EiMbh7nr8W2I75p_lxEWc9yFeOea"},{id:"SPA_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10],value:"1arbnu4e3HPRxM4ys0AZEvHGk6cAZjSEE0tHPE07R"},{id:"SPA_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10],value:"1cX2TaI47iZtEMnZIu2ZDPRUSllt6MxhgQ7SVxE2O"},{id:"SPA_n",icon:FI.txtInit[7]+"star"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[4]+FI.txtInit[10],value:"1uAUFKQbO3b4azglINq0byh6IMTt0tcsew-ZDhHVK"},{id:"SPA_a",icon:FI.txtInit[7]+"ranger_station"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[5]+FI.txtInit[10],value:"1yvNIMDlSsqd6REMTpDqNBKabGeFft-kquWsWvPA1"}]},{id:"EtangSale",icon:FI.txtInit[11]+"EtangSale"+FI.txtInit[12], html:"<span title='salt pond' style='background-color: #FFF; #CD5C5C;'>Etang Sale</span>",value:"1XgstlSHKGm72zgrRO6lFUdVSM6867jPyfLT-Mtcj",items:[{id:"ES_t",icon:FI.txtInit[7]+"play"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[0]+FI.txtInit[10],value:"1YXAJweeNZAKU2-Waa64ZIymHQ0bSI7lISM6bYHd6"},{id:"ES_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10],value:"1Um2dvNwSoRN_SYsZMLjTwCR-qEhSVcCMZQgjncBF"},{id:"ES_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10], value:"1Ya4SFxo6lr8uNoEBRhH_E8Zpq3InMkNmEilUdVfT"},{id:"ES_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10], value:"1ngS7I2W3ZEACE4VpYby5j0cKYTBJCzmtmYxUkPap"},{id:"ES_n",icon:FI.txtInit[7]+"star"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[4]+FI.txtInit[10],value:"1aaXjKHD9gFKajSSFONppPltXcSgAUKWvrbZ94gEG"},{id:"ES_a",icon:FI.txtInit[7]+"ranger_station"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[5]+FI.txtInit[10], value:"1PL-tDeZMX1uhb3pgNaVFnX0T3eNs8aK60PKx5xd1"}]},{id:"Entre-Deux",icon:FI.txtInit[11]+"Entre-Deux"+FI.txtInit[12], html:"<span title='between twoo' style='background-color: #FFF; #000080;'>Entre-Deux</span>",value:"1uU-__tmwAmqtTXPsi57LhiD969SwF0xWjbnDEw-7",items:[{id:"ED_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10],value:"1PeYW_q7kAdat2OxpIMFmZ32mDPStAXPgxDCpTfNW"},{id:"ED_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10], value:"1ddsy0cXwzchgqNKn7lb_U54aUolJxX15dtLrUHtP"},{id:"ED_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10], value:"1tRU-pUXalYcAlsXE5O1o9IO0dQXNLSNJSQqEE-hm"},{id:"ED_a",icon:FI.txtInit[7]+"ranger_station"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[5]+FI.txtInit[10], value:"1rZG5fmVIUptJwXk5uiJfjVuIn-ooM9WuII0UkEy3"}]},{id:"LesAvirons",icon:FI.txtInit[11]+"lesAvirons"+FI.txtInit[12], html: "<span title='rowing' style='background-color: #FFF; #FFD700;'>Les Avirons</span>", value:"1aNZ5BzIgAUCEArEmyIabDPTdpQkGv5p1eyKTbeBN", items:[{id:"Av_t",icon:FI.txtInit[7]+"play"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[0]+FI.txtInit[10],value:"1mWz8sMkRVFm7820e4XBNqBEFRI0gWQ_0-OxVQ0_B"},{id:"Av_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10],value:"1mMsbTg4i0b6n8cXi4TYQzK6Ckbe4MMYzTqQ9fniT"},{id:"Av_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10],value:"1hv5ee8OPODPryBpl0DqrwwzAzV0yvt3DnJ-AZBDB"},{id:"Av_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10],value:"14wzoLVQ3p-nHkPW1SuCOBTEQxmOLTDenF66Ywkb7"},{id:"Av_a",icon:FI.txtInit[7]+"ranger_station"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[5]+FI.txtInit[10],value:"1XtwmwdSCQllPPQuge9CPbJtf5KIL71w3ZGON7Evm"}]}]},{id:"SUD",icon:FI.txtInit[11]+"reunion"+FI.txtInit[12],html:"<span title='SOUTH' style='background-color: #FFF; #66CDAA;'>SUD</span>", value:"1XolYmmcAznvjC8X4Gx8vvOWY5a-dJOIyl5ZkWXmM",style:"MediumAquaMarine ",items: [{id:"Saint-Pierre",icon:FI.txtInit[11]+"Saint-Pierre"+FI.txtInit[12],html:"<span title='holly stone' style='background-color: #FFF; #4B0082;'>Saint-Pierre</span>",value:"1MT3G_b9rZRjqusrdShjZ7kqEHe1JOmq-wp7Wt-JY",items:[{id:"SPI_t",icon:FI.txtInit[7]+"play"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[0]+FI.txtInit[10],value:"1nuksgXG9G7cBpwzV-_442xLhTnxx849HoIXe_6kx"},{id:"SPI_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10],value:"1hGzzznJSMFAvbAoDUWMJj13Z1u4Vlv7WnAOKrpTC"},{id:"SPI_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10],value:"1SgbVz3eHKfSPWp9XNk5NWxvNP_ahskNvyjKLeRtZ"},{id:"SPI_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10],value:"1Gjgt4ZhaV4RgzAzE4VkzI06ZWTV_-v97WQIs_0jx"},{id:"SPI_n",icon:FI.txtInit[7]+"star"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[4]+FI.txtInit[10],value:"1jg739vX36Xn5o4jgy_CUko40GooVm-4RQCNb8IE8"},{id:"SPI_a",icon:FI.txtInit[7]+"ranger_station"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[5]+FI.txtInit[10],value:"1bRyWWEF7wu5Zy6Rg5Qm_zGuMfKyQhlK11FrsA7XD"}]},{id:"Saint-Joseph",icon:FI.txtInit[11]+"Saint-Joseph"+FI.txtInit[12],html:"<span title='Saint-Joseph' style='background-color: #FFF; #006400;'>Saint-Joseph</span>",value:"1EdNBxumLvo_ZKbDvIAmdG4kL4aK8mwn715beAfxU",items:[{id:"SJ_t",icon:FI.txtInit[7]+"play"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[0]+FI.txtInit[10],value:"1FYDeFbUGzcd8BXd-486iI4wbbuOpp7kpFO-DXu53"},{id:"SJ_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10],value:"1CvxRIBwlkoJNRqRLe7F4OvWfp-xkDGU5edSq0ASl"},{id:"SJ_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10],value:"1et5h1MbG_qX1K3iLNCTvQWS5_uj2vayNXSXwwXVU"},{id:"SJ_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10],value:"12F1H2X-rQrYMAyn3T4lEp7J6XkRig3C5MB1vV1nN"},{id:"SJ_n",icon:FI.txtInit[7]+"star"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[4]+FI.txtInit[10],value:"1mGP2D37TYcg7aKBRPuDLofmhIziluf9i-rnGf5wx"},{id:"SJ_a",icon:FI.txtInit[7]+"ranger_station"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[5]+FI.txtInit[10],value:"1DnBh8sOLdiSlZlq4oLZkAH84JiLW4BQN0l2xdFxc"}]},{id:"PetiteIle",icon:FI.txtInit[11]+"PetiteIle"+FI.txtInit[12],html:"<span title='small isle' style='background-color: #FFF; #008B8B;'>Petite Ile</span>",value:"1dcDRLQyzoX7G70X4VjHYe5sgNtyiurA4pk5cvwXH",items:[{id:"PI_t",icon:FI.txtInit[7]+"play"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[0]+FI.txtInit[10],value:"1ZXBQvZmy7a-TdVUxcZZW0dEkl0VigG_nIx6cjnva"},{id:"PI_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10],value:"1eO6-9Sir2Tl-MHrHyyXY6Ws5hJZBszblOM1b_7fg"},{id:"PI_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10],value:"1wTC3c07JmeEexULCOeoCe5i12g95r7sPXZbIxDoQ"},{id:"PI_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10],value:"1Ecnj4R9f0uL_nliqIHl36utyF5K6f0tw9UvErgER"},{id:"PI_a",icon:FI.txtInit[7]+"ranger_station"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[5]+FI.txtInit[10],value:"1_NSMIuxAJzXnBeRFUXt4Z6iYLCJgrKlXttllLfOh"}]},{id:"Saint-Louis",icon:FI.txtInit[11]+"Saint-Louis"+FI.txtInit[12],html:"<span title='Saint-Louis' style='background-color: #FFF; #800000;'>Saint-Louis</span>",value:"1M1iYxQ8PEELVmrQr_3bGh_-7UU09ghn1cvNo8WCV",items:[{id:"SLO_t",icon:FI.txtInit[7]+"play"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[0]+FI.txtInit[10],value:"1VavGGOruqsPbe6GqtS0-ysRBhQDhodfOUYH49Enf"},{id:"SLO_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10],value:"1ESOd1qko4uxhvuUAltY5ZYMq00Ov_kqfpFl71FIO"},{id:"SLO_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10],value:"1ETrdbfbNxfmKIGa7u6MC21igP8p16Hu8OvaM1ODL"},{id:"SLO_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10],value:"1wezhGcWJshrYRFFPdEUpnIWrHp6ggkrAjjNwNnAM"},{id:"SLO_a",icon:FI.txtInit[7]+"ranger_station"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[5]+FI.txtInit[10],value:"1WQqAVJWl43bFI8l-3Sw6UMmxBlzgj-CvNo06T8tJ"}]},{id:"Cilaos",icon:FI.txtInit[11]+"Cilaos"+FI.txtInit[12],html:"<span title='Cilaos' style='background-color: #FFF; #DAA520;'>Cilaos</span> ",value:"1Z0zITHQac_xwSfmHpvliZoioY58jZhUjWs9KX8Ln",items:[{id:"Ci_t",icon:FI.txtInit[7]+"play"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[0]+FI.txtInit[10], value:"18xgZcIBvJ1w2bk_gemnKh52HOkqmdDYsxYSjpS26"},{id:"Ci_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10], value:"1hR6kwS000LgXzL2wt-TJayI0SG9AZemcnNctwoPe"},{id:"Ci_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10],value:"1tdQ_vkcdqDJB037eDiyXo3YR-XlJUVvs_IcD3kD8"},{id:"Ci_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10], value:"1a0FJN_DioGC6sPhOJyt5Q4d7tUcae5GmRBNXemXP"},{id:"Ci_a",icon:FI.txtInit[7]+"ranger_station"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[5]+FI.txtInit[10], value:"1JDZYdWYIysK0dxS9Rt6pEi7SGv864A5_BUgfi39u"}]},{id:"Tampon",icon:FI.txtInit[11]+"Tampon"+FI.txtInit[12],html:"<span title='rubber stamp' style='background-color: #FFF; #CD5C5C;'>Tampon</span>",value:"1fS6sn1x_MDXE8mPT2dJGBE4mLyTseyvgQmt8fS7w",items:[{id:"T_t",icon:FI.txtInit[7]+"play"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[0]+FI.txtInit[10],value:"1TVMj_ErRYZSUl8IRlxS2A45BPf6yZBLmrdPUqLqx"},{id:"T_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10],value:"1vxnUDRqG5ZwScgpGxjcOHGY72Na_7ubVhw5meBJr"},{id:"T_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10],value:"1Tetq4TXpTTgtp0lBEGx6GSjZnurzUt4CFXlKaiOB"},{id:"T_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10],value:"1RHM6iPa9admK-4DMQpOEv8cZ3Sx8cix5taZzWOs_"},{id:"T_n",icon:FI.txtInit[7]+"star"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[4]+FI.txtInit[10],value:"195dI4uyd_AKasWDtn4eTQz3v6gcKlgE55N9_1zwE"},{id:"T_a",icon:FI.txtInit[7]+"ranger_station"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[5]+FI.txtInit[10],value:"1x-iqx3tCYREWFoCBzt8ezhx0uVeiXaqrm8o6_ZKU"}]},{id:"LaPlaineDesCafres",icon:FI.txtInit[11]+"LaPlaineDesCafres"+FI.txtInit[12], html: "<span title='African Plain' style='background-color: #FFF; #000080;'>La Plaine Des Cafres</span>",value:"1r3TOcxghV2VoLauNU6PnoY3kzdcSIbtey0pnhWWz",items:[{id:"PC_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10], value:"1NpjpyxxMv9KIki_DtXtzPRLdNwzJ7uBjxzoxJOoV"},{id:"PC_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10],value:"1RPot4Hw0B_ogvWoGAu3sW2Tz-nP6NSLREbaDZsXJ"},{id:"PC_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10], value:"1EBGjcCB-FRK6AXy9EJ-lmLaQHfNsnXS_uhSNWz71"},{id:"PC_a",icon:FI.txtInit[7]+"ranger_station"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[5]+FI.txtInit[10], value:"1iTq7746ceYVrcXqcM3Ugu1CYAO_qNR09CoWCUuNP"}]},{id:"enclosduTremblet",icon:FI.txtInit[11]+"Tremblet"+FI.txtInit[12],html: "<span title='Volcano' style='background-color: #FFF; #FFD700;'>enclos du Tremblet</span>",value:"1NId8irdjYKXfpFKk5NZ-SD7ZGkUhl2w6m1LL5t4F",items:[{id:"eT_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10], value:"1HG3aQEg2D1q_4d5n2_Gmk8rMQl6a995HY7dPJCZR"},{id:"eT_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10], value:"1cRObSW2PCNmCjRlONmIKRdj2VYbee9_bpa2oTHiX"}]},{id:"Saint-Phillippe",icon:FI.txtInit[11]+"Saint-Phillippe"+FI.txtInit[12],html: "<span title='Saint-Phillippe' style='background-color: #FFF; #66CDAA;'>Saint-Phillippe</span>",value:"1H9qvzwkRMhjjEwgrs_CToYkSPKU9JpKz0NzxRMhY",items:[{id:"SPh_t",icon:FI.txtInit[7]+"play"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[0]+FI.txtInit[10],value:"1t4UNzRx7NREpOPfUh-jcfjj4jmZdlCrcV5UTnMBK"},{id:"SPh_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10],value:"1tk1Ncnn2rK7hh9uNag18vlksj_ZETxBqzxX6edbw"},{id:"SPh_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10],value:"1tJJW6s2ELbV-cSIecvLroNt9u1pY_ExyTSxEsyDG"},{id:"SPh_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10],value:"1p3_0vNQxgdOQMXhkO6PWCzUoBD5XLVThjWcFzDrL"},{id:"SPh_a",icon:FI.txtInit[7]+"ranger_station"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[5]+FI.txtInit[10],value:"136pTZ-NKGCp0d1jqeOBXKXJJmK3sdF51h6lhiiF5"}]}]},{id:"NORD",icon:FI.txtInit[11]+"reunion"+FI.txtInit[12],html:"<span title='NORTH' style='background-color: #FFF; #4169E1;'>NORD</span>", value:"1X7thBX2nmGVIivqpYNzSWN9iC4OCJDvP469Yvr15", items:[{id:"Saint-Denis",icon:FI.txtInit[11]+"Saint-Denis"+FI.txtInit[12],html:"<span title='Saint-Denis' style='background-color: #FFF; #4B0082;'>Saint-Denis</span>",value:"1B6GQb_eKzR2PmlhSHddq7I8v4KAlYB3HgtLLxWO6",items:[{id:"SD_t",icon:FI.txtInit[7]+"play"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[0]+FI.txtInit[10],value:"1A3qmh8ulO-hXKe2W57qihqlkXEMajktf6NUbvkH8"},{id:"SD_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10],value:"1Vw4KON8Ww-OU2gTTg1web3a_kWjXOnc0cGmJ1xnR"},{id:"SD_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10],value:"1Wx6ZbbFLkEIdbxfS2AHJyUprIINfqtWLLhA_ngNZ"},{id:"SD_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10],value:"1OIG0YWzJA6nr_Nr6F-lNVsnYfsKtA8ubbGA_Tx0v"},{id:"SD_n",icon:FI.txtInit[7]+"star"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[4]+FI.txtInit[10],value:"1PSVZqIwSOlIbOWgXTdUhMXe4Pj-IIhaOEiEz_kaV"},{id:"SD_a",icon:FI.txtInit[7]+"ranger_station"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[5]+FI.txtInit[10],value:"1yJfcFEbn1487U-HHCv9UcihepFv3kVS7U82pMS3A"}]},{id:"Sainte-Marie",icon:FI.txtInit[11]+"Sainte-Marie"+FI.txtInit[12],html:"<span title='Sainte-Marie' style='background-color: #FFF; #006400;'>Sainte-Marie</span>",value:"192A1s6RA93KPg1cXOC7QYPI6MyGBb-AZtNpFNnyt", items:[{id:"SM_t",icon:FI.txtInit[7]+"play"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[0]+FI.txtInit[10],value:"1O2m7YXKBxLcAQZkuX1oOrA6dJFiZNv7KEZqkUTuZ"},{id:"SM_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10],value:"1vGSpCnOiCfNeAQvIpPscZ26cUq7x31imy_VShUZd"},{id:"SM_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10],value:"1FKB-9QH0VtpFGMtMeZZD_c2Fze2g9hYoxivizqav"},{id:"SM_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10],value:"1hYkKYnkxqvjmRc7IKgAz9xdYPiNI2VqZ6oWnLMLd"},{id:"SM_a",icon:FI.txtInit[7]+"ranger_station"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[5]+FI.txtInit[10],value:"1CpsXyW6UwS2Ix6oTHfy64PKixJGYml3lnUjj_Rta"}]},{id:"Sainte-Suzanne",icon:FI.txtInit[11]+"Sainte-Suzanne"+FI.txtInit[12],html:"<span title='Sainte-Suzanne' style='background-color: #FFF; #008B8B;'>Sainte-Suzanne</span>" ,value: "11hA_F8nvGsVVgrtgSs0i4ehviHgHc1kmGDHv1JgS",items:[{id:"SS_t",icon:FI.txtInit[7]+"play"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[0]+FI.txtInit[10],value:"1uP6kIJhbe2VDpT-bXB9uMosjNNejhQGt_P7Ey2jf"},{id:"SS_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10],value:"14tKW-WkeyvLupjFAoWXMbAgEa9--pO18c1Jnr_5j"},{id:"SS_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10],value:"1CjnaMnc4aEFf3b9n498eqJaZKf9E3mndyDaF5PjG"},{id:"SS_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10],value:"1mw9EHc9TOcgbbTNijGTzw5zrCxXjisZuiqwMLnlw"},{id:"SS_n",icon:FI.txtInit[7]+"star"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[4]+FI.txtInit[10],value:"1oYTut7YPTzdcOtwYCRlkpQylcjllRvwcrnizBN5Q"},]},{id:"LaPossession",icon:FI.txtInit[11]+"LaPossession"+FI.txtInit[12],html:"<span title='ownership' style='background-color: #FFF; #800000;'>La Possession</span>",value:"1NjCzAjGKweKavFoZsexcszpxCpx3NEx7pKsNYqED",items:[{id:"Pos_t",icon:FI.txtInit[7]+"play"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[0]+FI.txtInit[10], value:"1lr8c-nv0zSUMfdnWxpvmIZBf4EOcNSduutH7z-7D"},{id:"Pos_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10], value:"1H0BtHjh6l-SmQNh8ty4RXmhv-rGP36i6pHKiw1VL"},{id:"Pos_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10], value:"1W14GqyphT5To9rr7laAjrAcJd9JLEd_5vj7b1RmE"},{id:"Pos_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10],value:"1elAEWqFcSey78i0T167f6OYuUKo3aSJ9DKcAH4JE"},{id:"Pos_a",icon:FI.txtInit[7]+"ranger_station"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[5]+FI.txtInit[10],value:"1yfoGSvq6a0uGLL8GJPdsDZ1lGRWysaBfhoiR6hz8"}]},{id:"LePort",icon:FI.txtInit[11]+"LePort"+FI.txtInit[12],html: "<span title='harbor' style='background-color: #FFF; #DAA520;'>Le Port</span> ",value:"1muRbrt4rHjP_PJWRoIwlywN33ckv-pq3ADitGvI0",items:[{id:"Por_t",icon:FI.txtInit[7]+"play"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[0]+FI.txtInit[10],value:"1egvMm3Q0a8ISZ3dbmydPFqMdsLvDuHwUemNkY1mi"},{id:"Por_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10],value:"19Zl9W3yXp0IdmcANjF_MlHX1R9hk8X27mFhJnmZH"},{id:"Por_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10],value:"1LHKdsKbwR4CIR0L6Irt9m8jqScVnfxPMEm4JBA-3"},{id:"Por_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10],value:"1aOiWEpC7YfSJL10AebsxUpSpg-h-A4fcbIvjZxi8"},{id:"Por_n",icon:FI.txtInit[7]+"star"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[4]+FI.txtInit[10],value:"1YHjpqYf1aJqw-gylQDId1rCF_qDZDMSxUbxjRGG_"},{id:"Por_a",icon:FI.txtInit[7]+"ranger_station"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[5]+FI.txtInit[10],value:"13B6si8MulZuOUFdcGkzj67HPwrMXklYzZOUuEi7Q"}]}]},{id:"EST",icon:FI.txtInit[11]+"reunion"+FI.txtInit[12],  html:"<span title='EAST' style='background-color: #FFF; #DAA520;'>EST</span>",  value:"1kdUa3ca31BGjEODS180K8B1zsF9ArFmIZLPiiaRp",items:[{id:"Bras-Panon",icon:FI.txtInit[11]+"Bras-Panon"+FI.txtInit[12], html: "<span title='Panon arm' style='background-color: #FFF; #4B0082;'>Bras-Panon</span>", value:"1Eu99fE8gzP8aRvHmC0aoAgGvWLA7sicIJZQzNEHo",items:[{id:"BPn_t",icon:FI.txtInit[7]+"play"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[0]+FI.txtInit[10], value:"1SjOgOCz9LrImoNYW3dlV8AVwekzwgkwkIFrnL9r5"},{id:"BPn_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10], value:"1ccHNKyGhBgTzVkJ6QaeDmsLfWWb8APIPf5PPo6iV"},{id:"BPn_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10], value:"1Bzgou8rOmmto6PjPp71N_-JkAsIAOZI8ezXu_eFp"},{id:"BPn_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10], value:"1JqQPaUTMc-kjl8xVIWHnE6s0z4oW4WXhhSZbmm6p"},{id:"BPn_a",icon:FI.txtInit[7]+"ranger_station"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[5]+FI.txtInit[10],value:"1F6J56n5iAOxSXwnJCczlEqtM0exQzaQ6lW89xqOq"}]},{id:"Saint-Andre",icon:FI.txtInit[11]+"Saint-Andre"+FI.txtInit[12], html: "<span title='Saint-Andr&#233;' style='background-color: #FFF; #006400;'>Saint-Andre</span>", value:"1nwNhdQtG4G82HAm7m3GnPNLYFYxf7NkLazRvyow9", items:[{id:"SAd_t",icon:FI.txtInit[7]+"play"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[0]+FI.txtInit[10],value:"1vWcldb-WuU1rtH-ElhKI-f_4pLEeJDzzvMaWJSrC"},{id:"SAd_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10],value:"1QxdvqoXSnGh2RaPPYVqkXGMYzs5KyLKNtH6Rjq1Y"},{id:"SAd_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10],value:"1LoBKzzZG09THxPP4G9WQAvH_TQHHejDAkm6Bd7sn"},{id:"SAd_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10],value:"1_JSO07ViQqKGnrbD8l_IjO_T_ipipBS_oH_qs_1c"},{id:"SAd_n",icon:FI.txtInit[7]+"star"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[4]+FI.txtInit[10],value:"1tVMs-082OJrhLvKNVua0QCH-hnrs4dhkePIbn2Sh"},{id:"SAd_a",icon:FI.txtInit[7]+"ranger_station"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[5]+FI.txtInit[10],value:"1tVigoTd-SoRI0O-CtE7hMZp-ygWhd3jX25z0GPOD"}]},{id:"Saint-Benoit",icon:FI.txtInit[11]+"Saint-Benoit"+FI.txtInit[12], html: "<span title='Saint-Benoit' style='background-color: #FFF; #008B8B;'>Saint-Benoit</span>", value:"1gdjt3qeIeAvBxMRhmLwlnCgzr7CTt71iJrZ8dCTY",items:[{id:"SB_t",icon:FI.txtInit[7]+"play"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[0]+FI.txtInit[10],value:"1zvWu4e_eyQ1Ho7T4wM63hhl6JtFqOixA7PZDWxPa"},{id:"SB_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10],value:"1K5q_Z_O-QIXt74ZKG9de3lF_uEbKKrBX13HJq1AX"},{id:"SB_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10],value:"1VHstJP2RjDAvnmoDCGgJrtOTLWkgNAHltpI97KYx"},{id:"SB_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10],value:"1hjSY4vwWwCRB8bQJ3uX7c7TyhvrX5c7p5jMDmhtO"},{id:"SB_n",icon:FI.txtInit[7]+"star"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[4]+FI.txtInit[10],value:"1z9NOfJnMEtQxerYyCFif9xX3g6YT91tRxZJiNzcb"},{id:"SB_a",icon:FI.txtInit[7]+"ranger_station"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[5]+FI.txtInit[10],value:"1u5cwPRUeVIpuiDkPw1lv_gzrO2DuQ20W0zERTTdc"}]},{id:"Sainte-Anne",icon:FI.txtInit[11]+"Sainte-Anne"+FI.txtInit[12], html: "<span title='Sainte-Anne' style='background-color: #FFF; #800000;'>Sainte-Anne</span>", value:"1s911vZP-Ftzh8TA3JoQSzwuRNbTwkJoZmYna_SFn",items:[{id:"SAn_t",icon:FI.txtInit[7]+"play"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[0]+FI.txtInit[10],value:"1nFu8dd5l9fDV2Fn-87mWp_cMrRwjxSjO-vy2Cv7b"},{id:"SAn_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10],value:"120SVl3kmLTTetv0_mrthuHsAUgRr8bG8t8ywKsgi"},{id:"SAn_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10],value:"1sJdzuo-LRbdDpgIQrXqbnxzEQPIPaJJ0txncB87r"},{id:"SAn_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10],value:"1iAH1oV5dyYxuUCOKa7W0xo3D4TUIoXCvzd9yTRJ_"}]},{id:"Sainte-Rose",icon:FI.txtInit[11]+"Sainte-Rose"+FI.txtInit[12], html: "<span title='pink holly' style='background-color: #FFF; #DAA520;'>Sainte-Rose</span>", value:"1gIcPI4SAohpVFM0seVxdlBAw2b2zesvpZH4QJ6DC",items:[{id:"SR_t",icon:FI.txtInit[7]+"play"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[0]+FI.txtInit[10],value:"1GKArjzvczShC_oTmoeSPVyxL_kfMEiyriOq4njIt"},{id:"SR_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10],value:"1fWsTyPLLg_jZbHXLmn921wWRYNpp7Mph64n9PaCA"},{id:"SR_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10],value:"1JelP0FaMsEp22nh7DWvjGWA-HHEll4WsusdNze3W"},{id:"SR_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10],value:"1beWOfA6DyHQS6-Kr9eZtG8i2io7Q4J9NquFgQyG-"},{id:"SR_n",icon:FI.txtInit[7]+"star"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[4]+FI.txtInit[10],value:"1a-nJFvtF_lUeKPNpgQbFubQXRXlkubvH6glUBg8v"},{id:"SR_a",icon:FI.txtInit[7]+"ranger_station"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[5]+FI.txtInit[10],value:"1iPRpywzSmOxOlLm5O-uJmrbbnn6YHGzl1rhuaJzA"}]},{id:"LaPlaineDesPalmistes",icon:FI.txtInit[11]+"LaPlaineDesPalmistes"+FI.txtInit[12], html: "<span title='Palmist plain' style='background-color: #FFF; #CD5C5C;'>La Plaine Des Palmistes</span>", value:"1jLXnDeXAjIbdZrgZFiovGef8BTUvyk5PkzoKsfCb", items:[{id:"PP_t",icon:FI.txtInit[7]+"play"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[0]+FI.txtInit[10],value:"1oCcByb4vw2JlnNqp49lIysqTTRV6wK1xlqeC9ZGe"},{id:"PP_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10], value:"1_ucovZZ5C18rlh_cGO6Uc2YgB23EmR-IQ9epBop4"},{  id:"PP_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10], value:"15V8aJ6r5JNfr4xP4ZKnmi4i9mZTt6f0l8WG5hbE3"},{id:"PP_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10], value:"1DxmzBkR4z4qdMDV6bIl8P3ysFbbdWr41h83yK7wn"},{id:"PP_a",icon:FI.txtInit[7]+"ranger_station"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[5]+FI.txtInit[10],value:"1PebD0cnAun_RkcbEXdDgw4DowklvtSFOD08NlDOj"}]},{id:"Salazie",icon:FI.txtInit[11]+"Salazie"+FI.txtInit[12],  html: "<span title='Rain beauty' style='background-color: #FFF; #000080;'>Salazie</span>", value:"1zRn7YirASic3zXNjwr0jPpwlUURx5v1w0wK2JGSZ", items:[{id:"SAz_t",icon:FI.txtInit[7]+"play"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[0]+FI.txtInit[10],value:"1UzSHUROSXlwSlMlCe4WQBDyucf1m83YsGbX4FYhP"},{id:"SAz_s",icon:FI.txtInit[7]+"hiker"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[1]+FI.txtInit[10],value:"166vivC3Sr59gCaQR98o8-9sXHBfnKiJdX5hH_7tz"},{id:"SAz_md",icon:FI.txtInit[7]+"dining"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[2]+FI.txtInit[10],value:"1wOqplnMkWf_CHXezRZBC3HvMSf2lcKcnNzgUx8Jp"},{id:"SAz_v",icon:FI.txtInit[7]+"realestate"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[3]+FI.txtInit[10],value:"1oWl8XUdryHiQxlg83t_pu6ERxi4PPOjrvx2Vbuhj"},{id:"SAz_a",icon:FI.txtInit[7]+"ranger_station"+FI.txtInit[8],html:FI.txtInit[9]+FI.txtInit[5]+FI.txtInit[10],value:"1TjFpDyS3jwXAsLdAUL92BdcjM__2SLu71VDkkli_"}]}]},{id:"TRAIL",icon:FI.txtInit[7]+"trail"+FI.txtInit[8],html:"<span title='TRAIL' style='background-color: #FFF; #8B0000;'>TRAIL</span> ",value:"12rov6ssjS1uEIKAXlNv2YBkRQ2E9J-wjoDlEEmkj",items:[{id:"trail_grandraid",icon:FI.txtInit[7]+"trail"+FI.txtInit[8],html:"<span title='La Diagonales des fous' style='background-color: #FFF; #4B0082;'>Grand Raid</span>",value:"1IaozwH9nEpntzbAJ1Utk-zpBcVNIam8g-rkAk_hw"},{id:"trail_mascareignes",icon:FI.txtInit[7]+"trail"+FI.txtInit[8], html:"<span title='trail sprint' style='background-color: #FFF; #4B0082;'>La Mascareignes</span>",value:"1MJHssVsy5bV2lLJMJ6JSnAjqetOnFqh7a5LbZJqb"},{id:"trail_debourbon",icon:FI.txtInit[7]+"trail"+FI.txtInit[8], html:"<span title='Dit le DE Bourbon' style='background-color: #FFF; #4B0082;'>Trail de Bourbon</span>",value:"13PJGESUNPMCm1vurRLDF_3LgCkvvIAYRe7W9PlXR"}]}];}
		if($.urlParam('lieu')!=null){
				FI.initSrch=$.urlParam('name');FI.initl=$.urlParam('lieu');FI.initl=$.urlParam('theme');}
		},
	init:function(){
		$("#r_tab").change(function (){
			FTr.bms=false;FT.fsearch(this.value);
			$(FI.idtab).mouseover();});
		$(FTr.updBackG).css('background-image', FTr.styles[1]);
		$(FTr.updBackG).css('background-repeat', 'no-repeat');
		$(FTr.updBackG).css('background-size', '100%');
		$("#fl").bind('click',function(){M.findMe();});
		$(FI.idtab).on("mouseenter",function(){
			if(FI.bnm){$(this).animate({opacity: '0.75',height: '100%',width: '70%'}),
			$(FI.idmap).animate({opacity: '0.3'}),
			$(FI.idp).animate({opacity: '0.3'}),
			$('body').animate({height: '100% !important',margin: '0px !important',padding: '0px !important'});
			}else{
				$(this).animate({zIndex:'1'}),$(FI.idmap).animate({zIndex:'0'}),$(FI.idp).animate({zIndex:'0'});}
			$(FI.idinf).empty(),
			FTr.append("<small>&Agrave; r\'tourn Return MAP </small>(A DROITE)","green"),
			$(FI.idinf).bind('click',function(){
				if(FI.bnm){
					$(FI.idtab).animate({opacity:'1',height:'15%',width:'100%'}),
					$(FI.idmap).animate({opacity:'1'}),
					$(FI.idp).animate({opacity:'1'});
				}else{
					$(FI.idtab).animate({zIndex:'1'}),
					$(FI.idmap).animate({zIndex:'0'}),
					$(FI.idp).animate({zIndex:'0'});
			}});
		});
		$(FI.idinf).bind('click',function(){
			if(FI.bnm){
				$(FI.idtab).animate({opacity: '0.75',height: '100%',width: '70%'}),
				$(FI.idmap).animate({opacity: '0.3'}),
				$(FI.idp).animate({opacity: '0.3'});
			}else{
				$(FI.idtab).animate({zIndex:'1'}),
				$(FI.idmap).animate({zIndex:'0'}),
				$(FI.idp).animate({zIndex:'0'});
		}});
		$(FI.idp).hover(function(){
			if(FI.bnm){
				$(FI.idtab).animate({opacity: '1',height: '15%',width: '100%'}),
				$(FI.idmap).animate({opacity: '1'}),
				$(FI.idp).animate({opacity: '1'});
			}else{
				$(FI.idtab).animate({zIndex:'1'}),
				$(FI.idmap).animate({zIndex:'0'}),
				$(FI.idp).animate({zIndex:'0'});
		}});
		$("#rtrm").click(function(){
			if(FI.bnm){
				$(FI.idtab).animate({opacity: '1',height: '15%',width: '100%'}),
				$(FI.idmap).animate({opacity: '1'});$(FI.idp).animate({opacity: '1'});
		}});
		$(FI.idrbb).change(function(){
			FTr.bms=false;FTr.bms=false;
			M.colSrch="description";
			M.srchOnAll(this.value),
			$(FI.idinf).empty();
			FT.msg= 'BOUZ For see, move mouse!!';
			FTr.append(FT.msg,'red');})
		.mouseleave(function(){
			FT.crTb(),M.displayList(),
			FT.fshBDD();FT.search='';});
		$(FI.idp).focus(function(){
			FT.crTb(),M.displayList(),
			FT.fshBDD();FT.search='';
		}).blur(function(){
			FT.crTb(),M.displayList(),
			FT.fshBDD();FT.search='';});
		$(FI.idrbb).click(function(){
			FT.msg= 'Bouz en bas Move down on transparent!!';
			$(FI.idinf).empty(),FTr.append(FT.msg,'blue');});
		$(FI.idbtn).bind('click',function(){
			$(FI.idsup).empty(),
			$(FI.idsup).animate({ width: '0%' });$(FI.idp).animate({left: '70%'}),
			$('small').show(),
			$(FI.idinf).empty(),$('#dep').val(null),$('#arv').val(null),
			$(FI.idtab).show(),
			$(FI.iditi).css('color','blue');$(FI.iditi).css('border-color','#FFFF00'),
			$(FI.iditi).css('font-size','15px');$(FI.iditi).css('font-weight','none');
			M.s=null;M.e=null;
			$(FI.idbtn).hide(),M.initialize(),
			$(FI.idtab).show();});
		$(FI.idinf).bind('click',function(){
			if(FI.bnm){
				$(FI.idtab).animate({opacity: '1',height: '15%',width: '100%'}),
				$(FI.idmap).animate({opacity: '1'});$(FI.idp).animate({opacity: '1'});
			}else{
				$(FI.idtab).animate({zIndex:'1'});$(FI.idmap).animate({zIndex:'0'}),$(FI.idp).animate({zIndex:'0'});}});
			$('#clear').css('color','blue'),
			$('#clear').bind('click',function(){
				M.map_centroid=new google.maps.LatLng(-21.137472,55.546906);
				FTr.zoom=10;M.doSearch(),
				$(FI.idtree).jqxTree('collapseAll'),$(FI.idtree).jqxTree('uncheckAll'),
				$(FI.idtree).jqxTree('refresh');
				});
			$('#find_me').click(function(){
				M.findMe();return false;});
			$('#dep').click(function(){
				M.chad='#dep'; return true;});
			$('#arv').click(function(){
				M.chad='#arv'; return true;});
			$(FI.idmap).mouseleave(function(){
			map.getMapTypeId()===google.maps.MapTypeId.ROADMAP?map.setMapTypeId(google.maps.MapTypeId.HYBRID):map.getMapTypeId()===google.maps.MapTypeId.HYBRID?map.setMapTypeId(google.maps.MapTypeId.SATELLITE):map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
			FR.calcRoute();return true;});
		$(FI.iditi).click(function(){
			FR.calcRoute();return true;});
		if(!FI.bxt){
			$("#r_theme").selectBox({mobile:true}).change(function(){
				FTr.bms=false;var bzn=false;var zns =FI.srcZn;
				for(var z in zns){
					bzn=zns[z]==FI.tmp?true:bzn;}
				if(bzn){
					M.srchOnAll(this.value),
					$(FI.idinf).empty(),FTr.append(FT.msg,'red');
					FT.msg= 'R\'gard champ rouz, &eacute;crits &agrave; o&ugrave;, ou play plus bas!!';
					}
				else{
					var ids=FI.srcId;var rplc='#'+FI.tmp+'_';
					rplc=rplc+$(this).val();
					FI.bnm?$(FI.idtree).jqxTree('selectItem',$(rplc)[0]):FTr.applyMob(rplc);}
			});
			$("#r_lieu").selectBox({mobile:true}).change(function(){
				FTr.bms=false;FI.tmp=$(this).val();
				$("#r_theme").selectBox('value',"general");
				var rplc='#'+FI.tmp;$(FI.idtree).jqxTree('selectItem',$(rplc)[0]);
			});
		}else{
			$("#r_lieu").empty();$("#r_lieu").html(FI.initSrch);$("#r_theme").empty();}
}};
var FT=FT||{};var FT={
	bmrk:false,results:null,idx:0,search:"",list_table:"",lat:null,lng:null,
	msg:"Pour Afficher les donners, cliquer ailleurs!!",
	fsearch:function(s){
		var rplc='#'+s.replace(/\s|'/g,'');
		var table=$("#list_table").dataTable();table.fnFilter(s);
		$(rplc).mouseover();},
	displayList:function(json){
		try{M.handleError(json);}catch(e){;}
		var columns=json["columns"];var rows=json["rows"];
		var rplc="#"+M.cpte;FT.results=$(rplc);
		FT.results.empty();
		!rows?FT.results.append("<span class='lead'>No results found</span>"):{a:FT.crTb(),b:FT.cRows(rows),c:FT.fnsTb()};},
	crTb:function(){
		var rplc="#"+0;FT.results=$(rplc);
		FT.results.empty();FT.list_table="<table class='table' id ='list_table'><tbody>";},
	fshBDD:function(){
		FT.list_table+="</tbody></table>";
		M.map_centroid=FT.lat!=""&&FT.lng!=""&&FT.lng<55.8?{s:new google.maps.LatLng(FT.lat,FT.lng),a:map.setCenter(M.map_centroid)}.s:'';		
		FT.results.append(FT.list_table),
		$("#list_table").dataTable({
			"aoColumns":[null,null,null,null,null,null],
			"sDom":'<"top"pf>rt<"bottom"lip><"clear">',
			"language":{
				"sProcessing":"T ou plane!!",
				"infoEmpty":"La patience reste en vertus!!Wait or complete search!!",
				"zeroRecords":FT.msg},
				"bFilter":true,"bInfo":true,"scrollY":"450px","scrollCollapse":true,"paging":true,"bAutoWidth":false}),
		$(".table tbody").on('click','tr',function(){
			if(!FTr.bchk){
				M.addSrchMarker.setMap(null);
				var lat=$(this).children('td:nth-child(4)').text();var lng=$(this).children('td:nth-child(5)').text();var nm='#'+$(this).children('td:nth-child(6)').text();
				FT.tabToMap(lat,lng),
				$(FI.idtree).jqxTree('selectItem',$(nm)[0]),
				$(FI.idtree).jqxTree('expandItem',$(nm)[0]),
				$(FI.idmap).focus();
				FTr.zoom=13;FI.bnm=true;
			}}).on('mouseover','tr',function(){
				$(this).css("background","#0404B4");
			}).on('mouseleave','tr',function(){
				$(this).css("background","");
			}).on('mouseover','td',function(){
				$(this).css("background","#B8860B"),
				$(this).css("fontSize","180%");}).on('mouseleave','td',function(){
					$(this).css("background",""),$(this).css("fontSize","100%");
				});},
	fnsTb:function(){
		FT.list_table+="</tbody></table>";
		M.map_centroid=FT.lat!=""&&FT.lng!=""&&FT.lng<55.8?{s:new google.maps.LatLng(FT.lat,FT.lng),a:map.setCenter(M.map_centroid)}.s:'';
		FT.results.append(FT.list_table),
		$("#list_table").dataTable({
			"aoColumns":[null,null,null,null,null,null,null],
			"sDom":'<"top"pf>rt<"bottom"lip><"clear">',
			"language":{
				"infoEmpty":"La patience reste en vertus!!Wait and move mouse",
				"zeroRecords":"PLAY WITH MOUSE for search go top right and left down!!Y GAGN ZOUER POU FE LE RECHERCHE EN HAUT A DROITE EN BAS A GAUCHE"
			},"oSearch":{
				"sSearch":FT.search},
			"bFilter":true,"bInfo":true,"scrollY":"450px","scrollCollapse":true,"paging":true,"bAutoWidth":false}),
		$(".table tbody").on('click','tr',function(){
			if(!FTr.bchk){
				M.addSrchMarker.setMap(null);
				FTr.bchk=true;
				var nm=$(this).children('td:nth-child(2)').text().replace(/\s/g,'');var lat=$(this).children('td:nth-child(5)').text();
				var lng=$(this).children('td:nth-child(6)').text();var idref=$(this).children('td:nth-child(7)').text();
				var ids=FI.srcId;
			for(var id in ids){if(ids[id].label===nm){FT.bmrk=true;nm='#'+idref;}}
			if(!FT.bmrk){
				ids=FI.srcZn;
				for(var id in ids){if(ids[id]===nm){FT.bmrk=true;nm='#'+nm;}}};
			FT.tabToMap(lat,lng);FT.bmrk=false;
			$(FI.idtree).jqxTree('selectItem',$(nm)[0]);
			FTr.bchk=false;$(FI.idmap).focus();
		}}).on('mouseover','tr',function(){
			$(this).css("background","#0404B4");
		}).on('mouseleave','tr',function(){
			$(this).css("background","");
		}).on('mouseover','td',function(){
			$(this).css("background","#B8860B"),$(this).css("fontSize","180%");
		}).on('mouseleave','td',function(){
			$(this).css("background",""),$(this).css("fontSize","100%");});},
	cRows:function(rows){
		for(var row in rows){
			var ctg=rows[row][0];var nom=rows[row][1];var desc=rows[row][2];
			FT.lat=rows[row][3];FT.lng=rows[row][4];
			if(ctg.split("http:").length===1){
				var spl=ctg.split("*");var lg=spl.length;
				if(lg===1){
					ctg="<img src='http://runsense.github.io/js/img/ico/"+ctg+".png' style='width: 30px;height: 30px'></img>";
				}else{
				ctg='';for(var i in spl){ctg=ctg+"<img src='http://runsense.github.io/js/img/ico/"+spl[i]+".png' style='width: 15px;height: 30px'></img>";}
				}
			}else{ctg="<img src='"+ctg+"' style='width: 30px;height: 30px'></img>";}
			FT.list_table+="<tr id="+nom.replace(/ /g,'').replace(/'/g,'')+"><td >"+ctg+"</td><td >"+nom+"</td><td >"+desc+"</td><td >"+ctg+"</td><td style='color:blue;width:20px;' >"+FT.lat+"</td><td style='color:blue;width:20px;' >"+FT.lng+"</td><td style='visibility:hidden;' >"+rows[row][5]+"</td></tr>";
		}},
	tabToMap:function(lat,lng){
		if(lat>-22){
			if(lng<55.8){
				M.map_centroid=new google.maps.LatLng(lat,lng);				
				FTr.zoom=FTr.zoom!=10?16:FTr.zoom;
				map.setCenter(M.map_centroid),map.setMapTypeId(google.maps.MapTypeId.ROADMAP),
				map.setZoom(FTr.zoom);
				FI.bnm?{a:$(FI.idtab).animate({opacity:'0.3',height:'30%'}),b:$(FI.idmap).animate({opacity:'1'})}:
				{a:$(FI.idtab).animate({zIndex:'0'}),b:$(FI.idmap).animate({zIndex:'1'}),c:$(FI.idp).animate({zIndex:'1'})}
				M.chad='#arv';M.addrFromLatLng(M.map_centroid);
				if(!FT.bmrk){
					var ad=$(M.chad).val();
					M.addSrchMarker=new google.maps.Marker({position:M.map_centroid,map:map,animation:google.maps.Animation.DROP,title:ad});
			}}
}}};
var FR=FR||{};var FR={
	directionsDisplay:new google.maps.DirectionsRenderer(),
	directionsService:new google.maps.DirectionsService(),
	calcRoute:function(){$(FI.idinf).empty(),$(FI.idinf).show();M.e!==null?{a:FR.directionsService.route({origin:M.s,destination:M.e,travelMode:google.maps.TravelMode.DRIVING},function(response,status){status==google.maps.DirectionsStatus.OK?{a:FR.directionsDisplay.setDirections(response),b:M.zoom(map),c:$(FI.idinf).empty(),d:FR.directionsDisplay.setPanel(document.getElementById('pano')),e:$('small').hide(),f:$(FI.idsup).animate({width:'35%'}),g:$(FI.idp).animate({left:'100%'}),h:$(FI.idtab).hide(),i:$(FI.idbtn).show()}:{a:$(FI.idinf).empty(),b:$(FI.idinf).append("<h1>Y GAGN PA t&EGRAVE;r l&AGRAVE!!(UNKNOW ADRESSE)</h1>"),c:$(FI.idinf).css("color","#000"),d:$(FI.idinf).css("background-color","red")}}),b:M.doSearch()}:'';}};
FI.exturi();
var FTr=FTr||{};var FTr={
	bchk:false,bgrow:false,bms:true,updBackG:"body",ptbid:['1So5MDh-kSSDOudH6iznmgC3DTfn4SBKiilMj27DI'],
	styles:["grocery",FI.bstyle],zoom:2,rvzoom:11,
	theme:[{label:'general',value:''},{label:FI.txtInit[0],value:'t'},{label:FI.txtInit[1],value:'s'},{label:FI.txtInit[2],value:'md'},{label:FI.txtInit[3],value:'v'},{label:FI.txtInit[4],value:'n'},{label:FI.txtInit[5],value:'a'}],
	srcStyle:[{label:FI.txtInit[0],value:"play"},{label:FI.txtInit[1],value:"hiker"},{label:FI.txtInit[2],value:"dining"},{label:FI.txtInit[3],value:"realestate"},{label:FI.txtInit[4],value:"star"},{label:FI.txtInit[5],value:"ranger_station"},{label:"EST",value:"#DAA520",lien:FI.txtInit[6]+"Est.png"},{label:"Bras-Panon",value:"#4B0082",lien:FI.txtInit[6]+"brasPanon.png"},{label:"Saint-Andre",value:"#006400",lien:FI.txtInit[6]+"saintAndre.png"},{label:"Saint-Benoit",value:"#008B8B",lien:FI.txtInit[6]+"saintBenoit.png"},{label:"Sainte-Anne",value:"#800000",lien:FI.txtInit[6]+"sainteAnne.png"},{label:"Sainte-Rose",value:"#DAA520",lien:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sainte-Rose_eglise.jpg/800px-Sainte-Rose_eglise.jpg"},{label:"La Plaine Des Palmistes",value:"#CD5C5C",lien:"https://upload.wikimedia.org/wikipedia/commons/b/b3/Ppalmistes2.jpg"},{label:"Salazie",value:"#000080",lien:"http://www.transeet.fr/wp-content/uploads/2013/05/Ile-de-la-Reunion-510x350.jpg"},{label:"OUEST",value:"#CD5C5C",lien:FI.txtInit[6]+"Ouest.png"},{label:"Mafate",value:"#4B0082",lien:FI.txtInit[6]+"mafate.png"},{label:"Saint-Gilles",value:"#006400",lien:FI.txtInit[6]+"saintGilles.png"},{label:"Saint-Leu",value:"#008B8B",lien:FI.txtInit[6]+"saintLeu.png"},{label:"Trois Bassins",value:"#800000",lien:FI.txtInit[6]+"troisBassins.png"},{label:"Saint-Paul",value:"#DAA520",lien:FI.txtInit[6]+"saintPaul.png"},{label:"Etang Sale",value:"#CD5C5C",lien:FI.txtInit[6]+"etangSale.png"},{label:"Entre-Deux",value:"#000080",lien:FI.txtInit[6]+"entreDeux.png"},{label:"Les Avirons",value:"#FFD700",lien:FI.txtInit[6]+"lesAvirons.png"},{label:"SUD",value:"#66CDAA",lien:FI.txtInit[6]+"sud.png"},{label:"Saint-Pierre",value:"#4B0082",lien:FI.txtInit[6]+"saintPierre.png"},{label:"Saint-Joseph",value:"#006400",lien:FI.txtInit[6]+"saintJoseph.png"},{label:"Petite Ile",value:"#008B8B",lien:"https://upload.wikimedia.org/wikipedia/commons/1/11/Reunion_PetiteIle.JPG"},{label:"Saint-Louis",value:"#800000",lien:"https://upload.wikimedia.org/wikipedia/commons/e/e1/R%C3%A9union_LesMakes.JPG"},{label:"Cilaos",value:"#DAA520",lien:"https://upload.wikimedia.org/wikipedia/commons/4/43/Cirque_De_Cilaos_On_Reunion.jpg"},{label:"Tampon",value:"#CD5C5C",lien:FI.txtInit[6]+"tampon.png"},{label:"La Plaine Des Cafres",value:"#000080",lien:FI.txtInit[6]+"laPlaineDesCafres.png"},{label:"enclos du Tremblet",value:"#FFD700",lien:"https://upload.wikimedia.org/wikipedia/commons/3/37/Piton_de_la_Fournaise%2C_R%C3%A9union_Island_%28High_Resolution%29.jpg"},{label:"Saint-Phillippe",value:"#66CDAA",lien:FI.txtInit[6]+"saintPhillippe.png"},{label:"NORD",value:"#4169E1",lien:FI.txtInit[6]+"rocheEcrite.png"},{label:"Saint-Denis",value:"#4B0082",lien:"https://upload.wikimedia.org/wikipedia/commons/b/b9/SaintDenisReunion003.jpg"},{label:"Sainte-Marie",value:"#006400",lien:FI.txtInit[6]+"sainteMarie.png"},{label:"Sainte-Suzanne",value:"#008B8B",lien:FI.txtInit[6]+"sainteSuzanne.png"},{label:"La Possession",value:"#800000",lien:FI.txtInit[6]+"laPossession.png"},{label:"Le Port",value:"#DAA520",lien:FI.txtInit[6]+"lePort.png"},{label:FI.anex[0],value:"#3300CC",lien:FI.txtInit[6]+"trail.png"},{label:FI.anex[1],value:"poi"},{label:FI.anex[2],value:"poi"},{label:FI.anex[3],value:"poi"}],
	applyChild:function(items){
		$.each(items,FTr.chkItm(this));},
	chkItm:function(elmt){
		$(FI.idtree).jqxTree('checkItem',$('#'+elmt.id)[0],true);},
	slcItm:function(txt){
		return $(FI.idtree).jqxTree('selectItem',$('#'+txt)[0],true);},
	applysrch:function(i){
		var tmp=FTr.ptbid;var stmp=FTr.styles;
		FTr.ptbid=new Array();FTr.styles=new Array();
		try{FTr.ptbid.push(i.value),FTr.styles.push(FTr.chStyle(i.label));var u=FTr.chURL(i.label);
			u!=null?FTr.styles.push(FTr.chURL(i.label)):FTr.styles.push(FI.bstyle);
		}catch(e){FTr.ptbid=tmp;FTr.styles=stmp;}},
	applyMob:function(rplc){
		var tmp=FTr.ptbid;var stmp=FTr.styles;
		FTr.ptbid=new Array();FTr.styles=new Array();
		try{rplc=rplc.replace(/#/g,'');var src=FTr.src;
			for(var c in src){
				if(src[c].id==rplc){
				var i=src[c];i.html=i.html.split('>')[1].split('<')[0];
				FTr.ptbid.push(i.value),FTr.styles.push(FTr.chStyle(i.html));
				var u=FTr.chURL(i.html);
			u!=null?FTr.styles.push(FTr.chURL(i.html)):FTr.styles.push(FI.bstyle);			
		}}}catch(e){
			FTr.ptbid=tmp;FTr.styles=stmp;}
		M.doSearch();},
	chStyle:function(l){var rslt;
		for(var i in FTr.srcStyle.length){rslt=FTr.srcStyle[i].label===l?FTr.srcStyle[i].value:rslt;}return rslt;},
	chURL:function(l){var rslt;
		for(var i in FTr.srcStyle.length){rslt=FTr.srcStyle[i].label===l?FTr.srcStyle[i].lien:rslt;}return rslt;},
	append:function(txt,color){
		$(FI.idinf).append(txt),$(FI.idinf).css("color","white"),$(FI.idinf).css("background-color",color);},
	selectBox:function(i){
		if(i.id.match('_')===null){
			var itmid=i.id;FI.tmp='';
			$("#r_lieu").selectBox('value',itmid);
			var zns=FI.srcZn;
			for(var z in zns){FI.tmp=zns[z]==itmid?itmid:FI.tmp;}
			if(FI.tmp===''){var ids=FI.srcId;for(var id in ids){FI.tmp=ids[id].label===itmid?ids[id].id:FI.tmp;}}
			if(FI.tmp==''){FI.tmp=itmid.split('_')[0];}
			FTr.bms=true;
		}else{var slc=i.id.split('_')[1];$("#r_theme").selectBox('value',slc);FTr.bms=false;}},
	init:function(){
		$(FI.idtree).jqxTree({checkboxes:true,source:FI.src,width:'100%',height:FTr.initl,theme:'summer'}),		
		$(FI.idtree).on('expand',function(ev){if(FI.bnm){var e=ev.args.element;var i=$(FI.idtree).jqxTree('getItem',e);FTr.zoom=$(FI.idtree).jqxTree('getItem',e.parentElement.parentElement)?12:10;FTr.bgrow=!FTr.bgrow?[true,FTr.selectBox(i),$(FI.idtree).jqxTree('checkItem',e, true),$('small').show(),FTr.applysrch(i),M.doSearch(),$(FI.idtree).jqxTree('ensureVisible',e)].shift():FTr.bgrow;}}),
		$(FI.idtree).on('collapse', function(ev){FTr.bms=true;if(!FTr.bgrow){FTr.bgrow=true;FTr.ptbid=new Array();FTr.zoom=10;$(FI.idtab).empty(),FTr.applysrch(null),$('small').hide(),M.doSearch();}}),
		$(FI.idtree).bind('select',function(ev){ev.preventDefault(),ev.stopPropagation();var e=ev.args.element;FTr.bms=$(e).find("li").length>1?true:FTr.bms;var i=$(FI.idtree).jqxTree('getItem',e);i?[FTr.selectBox(i),$.each(FI.txtInit,function(){FTr.bgrow=this===i.label?true:FTr.bgrow;}),$(FI.idtree).jqxTree('checkItem',e,true),FTr.applysrch(i),M.doSearch()]:'';}),
		$(FI.idtree).on('checkChange',function(ev){
			if(!FTr.bgrow){
				$('#clear').css('color','red');$('#clear').css('border-color','green');
				var a=ev.args;var e=a.element;
				var item=$(FI.idtree).jqxTree('getItem',e);
				var bIn=false;
				for(var i in FI.txtInit){
					if(item.label===FI.txtInit[i]){bIn=true;}
					}
				if(!bIn){
					FI.tmp=item.label;var items=$(FI.idtree).jqxTree('getCheckedItems');
					var pre=e.parentElement.parentElement;
					var	prei=$(FI.idtree).jqxTree('getItem',pre);
					if(prei!=null) for(var i in items){
						if(items[i].element!=pre&&items[i].element!=e){$(FI.idtree).jqxTree('uncheckItem', items[i].element);}}
						}
				FTr.bgrow=true;
				a.checked?$(FI.idtree).jqxTree('expandItem',e):$(FI.idtree).jqxTree('collapseItem',e);
			}else{
				$('#clear').css('font-weight','bold'),$('#clear').css('font-size','18px');}});
		}};
		google.maps.visualRefresh=true;
var M=M||{};var M={
	colSrch:'description',s:null,e:null,cpte:0,chad:'',datajson:['',''],
	geocoder:new google.maps.Geocoder(),
	polygonTableID:[],polygon:new Array(),
	googleApiKey:FI.ak,locationColumn:"lat",
	map_centroid:new google.maps.LatLng(-21.137472,55.546906),
	locationScope:"reunion",defaultZoom:FI.zm,row:[],
	addSrchMarker:new google.maps.Marker(),
	h:34,p:10,
	strVw:new google.maps.StreetViewPanorama(document.getElementById("pano"),{
		position: M.map_centroid,pov:{heading:34,pitch:10}}),
	initialize:function(){
		try{M.geocoder=new google.maps.Geocoder();
		FR.directionsDisplay=new google.maps.DirectionsRenderer();
		}catch(e){;}
		var myOptions={zoom:M.defaultZoom,center:M.map_centroid,mapTypeId:google.maps.MapTypeId.ROADMAP,styleId:2,templateId:1};
		map=new google.maps.Map($("#map_canvas")[0],myOptions);
		
		map.setStreetView(M.strVw);google.maps.event.addListener(map, "click",function(event){ M.clickmap(event); });
		google.maps.event.addDomListener(window,'resize',function(){
			map.setCenter(M.map_centroid); map.setZoom(FTr.zoom);});
		try{FR.directionsDisplay.setMap(map);}catch(e){;}
		google.maps.event.addListener(map,'mouseover',function(event){
			FTr.rvzoom=map.getZoom();map.setZoom(FTr.zoom);});
		M.doSearch();
		if(FI.initSrch!=''){
			M.colSrch="nom";var srch=FI.initSrch;FTr.bms=false;
			$("#r_lieu").val(FI.initl);$("#r_theme").val(FI.initl);
			$(FI.idrbb).val(srch);M.srchOnAll(srch);
			$(FI.idrbb).focus();
			$(FI.idrbb).mouseenter();
			$(FI.idinf).empty();
			FTr.append('PLAY WITH MOUSE for search go top right and left down!!Y GAGN ZOUER POU FE LE RECHERCHE EN HAUT A DROITE EN BAS A GAUCHE','#660066');}},
	doSearch:function(location){
		FTr.bgrow=false;M.clearSearch();
		M.polygonTableID=FTr.ptbid;M.polygon=new Array();
		try{
			var tl=M.polygonTableID.length;map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
			for(var i=0;i<tl;i++){
				var stl=FTr.styles[i];
				if(stl=="dining"||stl=="star"){map.setMapTypeId(google.maps.MapTypeId.HYBRID);}
				var layer=new google.maps.FusionTablesLayer({
					query:{from:M.polygonTableID[i],select: "geometry"},
					styles:[{markerOptions:{iconName: stl,},polygonOptions:{fillColor:stl,fillOpacity:0.4,strokeColor:"#FFFFF0",strokeWeight:"int"},
					polylineOptions:{strokeColor:stl,strokeWeight:"int"}},]});
				try{
					var chcmp=FTr.styles[i+1];
					if(chcmp.charAt(0)!='#'&&chcmp!='NO'){
						$(FTr.updBackG).css('background-image', 'url(' + chcmp+ ')');
						if(FI.bnm){
							$(FTr.updBackG).css('background-repeat', 'no-repeat');$(FTr.updBackG).css('background-size', '100%');
					}}else{$(FTr.updBackG).css('background-image', 'url("+FI.bstyle+")');}
				if(stl.charAt(0)!='#'){$(FI.idp).css('border-color',stl);}
				FTr.styles=new Array();
				}finally{
					google.maps.event.addListener(layer, 'click',function(e){
						M.anLayer(e);});
					M.polygon.push(layer);M.polygon[i].setMap(map);
		}}}catch(e){;}finally{
			M.getList();$(FI.idmap).focus();var anex=FI.anex;
			for(var a in anex){if(FI.tmp===anex[a]){map.setZoom(10);}}}},
	anLayer:function(e){
		if(!FTr.bchk&&!FTr.bgrow){
			var s=e.infoWindowHtml.split('<b>nom:</b> ')[1].split('<br>')[0];
			FTr.bchk=true;FT.fsearch(s);
			var rplc='#'+s.replace(/ /g,'').replace(/'/g,'');
			console.log(rplc);$(FI.idtree).jqxTree('selectItem',$(rplc)[0]);
			M.chad='#arv'; M.addrFromLatLng(e.latLng);FTr.bchk=false;return s;}},
	findMe:function(){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(function(position){
				fl=new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
				M.chad='#dep';M.addrFromLatLng(fl);map.setCenter(fl);},null);
		}else{FTr.append('Lo l\'action fo config!!Configurate your Position','red');}},
	getSearch:function(value){
		var callback="M.addrow";
		var slcCol="nom,description,lat,lng,categ,id";
		var queryStr=[];queryStr.push("SELECT " + slcCol);
		queryStr.push(" FROM "+value);queryStr.push(" WHERE "+M.colSrch+" CONTAINS '"+FT.search+"' ");
		var sql=encodeURIComponent(queryStr.join(" "));
		$.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback="+callback+"&key="+M.googleApiKey, dataType: "jsonp"});},
		query:function(slcCol,limit,callback){
			for(var i in M.polygonTableID){
				if(M.polygonTableID[i]!="NO"){
					M.cpte=i;$(FI.idtab).append("<div title='Revenir MAP A DROITE(View MAP RIGHT)' id="+i+" style='background-color: #FFFFFF;'/>");
					var queryStr=[];queryStr.push("SELECT "+slcCol);queryStr.push(" FROM "+M.polygonTableID[i]);var sql=encodeURIComponent(queryStr.join(" "));
					$.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback="+callback+"&key="+M.googleApiKey,dataType:"jsonp"});
				}else{
					$(FI.idtab).empty();$(FI.idtab).append("<div  id="+i+" style='background-color: #FF0000;>NO DATA</div>");}}
			$(FI.idinf).empty();
			FTr.append("D\'scend en bas po&ugrave; l&egrave;v lo l'act </br> (GO ON TRANSPARENT  left down panel)","blue");},
	addrFromLatLng:function(latLngPoint){
		/*Sortie lat long console*/console.log(latLngPoint);
		M.geocoder.geocode({'latLng':latLngPoint},function(results, status){
			if(status===google.maps.GeocoderStatus.OK){
				if(results.length>1){$(M.chad).val(results[0].formatted_address.split(',')[0]+','+results[1].formatted_address);}
				else{$(M.chad).val(results[0].formatted_address);}
				if(M.chad=='#dep'){M.s=results[0].formatted_address;$(FI.iditi).css('font-size','20px');$(FI.iditi).css('font-weight','bold');}
				else{M.e=results[0].formatted_address;$(FI.iditi).css('color','red');$(FI.iditi).css('border-color','green');}}});},
	zoom:function(map){
		var bounds=new google.maps.LatLngBounds();
		map.data.forEach(function(feature){
			M.processPoints(feature.getGeometry(),bounds.extend,bounds);});
		map.fitBounds(bounds);},
	processPoints:function(geometry,callback,thisArg){
		if(geometry instanceof google.maps.LatLng){callback.call(thisArg, geometry);}
		else if(geometry instanceof google.maps.Data.Point){callback.call(thisArg, geometry.get());}
		else{geometry.getArray().forEach(function(g) {M.processPoints(g, callback, thisArg);});}},
	clickmap:function(pos){
		if(pos!=null){M.addrFromLatLng(pos.latLng);}
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);},
	clearSearch:function(){
		M.row=[];M.polygonTableID=null;
		for(var i=0;i<M.polygon.length;i++){if(M.polygon[i] != null){M.polygon[i].setMap(null); M.polygon[i]=null;}}
		map.setCenter(M.map_centroid);map.setZoom(FTr.zoom);},
	getList:function(){
		var slcCol="categ,nom,description,lat,lng,id";M.query(slcCol, 10, "FT.displayList");},
	srchOnAll:function(txt){
		M.colSrch="description";var th=$( "#r_theme" ).val();var li= $("#r_lieu").val();
		if(txt!=''){try{
			FT.search=txt;M.row=[];M.cpte= 0;
			var fsrc=FI.src;var bsrc=true;
			FT.crTb();var ssrcMap;
			for(var i in fsrc){if(bsrc){
				var src= fsrc[i];var items= src.items;
				for(var j in items){
					if(bsrc){
						var srcMap=items[j];
						if(srcMap.id==li){bsrc=false;}
						var ssimts= items[j].items;
						for(var k in ssimts){
							var ssrcMap=ssimts[k];var spl= ssrcMap.id.split('_')[1];
							if(th!=''){
								if(spl==th){
									M.getSearch(ssrcMap.value);
							}}else M.getSearch(ssrcMap.value);
				}}}
				if(src.id==li){bsrc=false;}
			}}}finally{
		M.displayList();FT.fshBDD();M.cpte= 0;}}},
	addrow:function(json){
		try{M.handleError(json);}catch(e){;}
		try{
			var rows=json["rows"];
			for(var r in rows){if(rows[r]!=undefined){
				var rg=[rows[r][4],rows[r][0],rows[r][1],rows[r][2],rows[r][3],rows[r][5]];
				M.row.push(rg);
		}}}finally{$(FI.idtab).fadeIn('fast');}},
	displayList:function(){
		M.cpte=0;
		for(var row in M.row)
			try{
				var ctg=M.row[row][0];
				if(ctg.split("http:").length===1){
					var spl=ctg.split("*");var lg=spl.length;
					if(lg===1){
						ctg="<img src='http://runsense.github.io/js/img/ico/"+ctg+".png' style='width:30px;height:30px'></img>";
					}else{
						ctg='';
						for(var i in spl){ctg=ctg+"<img src='http://runsense.github.io/js/img/ico/"+spl[i]+".png' style='width:15px;height:30px'></img>";}
				}}else ctg="<img src='"+ctg+"' style='width:30px;height:30px'></img>";
				FT.lat=M.row[row][3];
				FT.lng=M.row[row][4];
				FT.list_table+="<tr><td> "+ctg+"</td><td>"+M.row[row][1]+"</td><td>"+M.row[row][2]+"</td><td style='color:blue;width:20px;' >"+M.row[row][3]+"</td><td style='color:blue;width:20px;'>"+M.row[row][4]+"</td><td style='visibility:hidden;'>"+M.row[row][5]+"</td></tr>";
			}catch(e){;}},
	handleError:function(json){
		if(json["error"]!=undefined){
			var error=json["error"]["errors"];console.log("Error in Fusion Table call!");
			for(var row in error){
				console.log("Domain: "+error[row]["domain"]);
				console.log(" Reason: "+error[row]["reason"]);console.log(" Message: "+error[row]["message"]);}}}};