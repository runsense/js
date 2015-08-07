	var txtInit = ["terrain","sentier","manger&dormir","visite","nuit","activité","http://runsense.github.io/js/img/","http://maps.google.com/mapfiles/kml/shapes/",".png"];

var FuncTree = FuncTree || {};
var FuncTree = {
	updBackG	:".ui-page",
	ptbid		:new Array(),
	styles		:["","http://runsense.github.io/js/f.png"],
	zoom		:10,
	srcStyle		:[
					{label: txtInit[0],value: "play"},
					{label: txtInit[1],value: "#FF1493"},
					{label: txtInit[2],value: "dining"},
					{label: txtInit[3],value: "realestate"},
					{label: txtInit[4],value: "star"},
					{label: txtInit[5],value: "ranger_station"},
					{label: "EST",value: "#DAA520",lien:txtInit[6]+"Est.png"},
						{label: "Bras-Panon",value: "#4B0082",lien:txtInit[6]+"brasPanon.png" },
						{label: "Saint-André",value: "#006400",lien:txtInit[6]+"saintAndre.png"},
						{label: "Saint-Benoit",value: "#008B8B",lien:txtInit[6]+"saintBenoit.png"},
						{label: "Sainte-Anne",value: "#800000",lien:txtInit[6]+"sainteAnne.png"},
						{label: "Sainte-Rose",value: "#98FB98",lien:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sainte-Rose_eglise.jpg/800px-Sainte-Rose_eglise.jpg"},
						{label: "La Plaine Des Palmistes",value: "#CD5C5C",lien:"https://upload.wikimedia.org/wikipedia/commons/b/b3/Ppalmistes2.jpg"},
						{label: "Salazie",value: "#000080",lien:"http://www.transeet.fr/wp-content/uploads/2013/05/Ile-de-la-Reunion-510x350.jpg"},
					{label:"OUEST", value:"#8B0000",lien:txtInit[6]+"Ouest.png"},
						{label: "Mafate",value: "#4B0082",lien:txtInit[6]+"Mafate.png"},
						{label: "Saint-Gilles",value: "#006400",lien:txtInit[6]+"saintGilles.png"},
						{label: "Saint-Leu",value: "#008B8B",lien:txtInit[6]+"saintLeu.png"},
						{label: "TroisBassins",value: "#800000",lien:txtInit[6]+"troisBassins.png"},
						{label: "Saint-Paul",value: "#98FB98",lien:txtInit[6]+"saintPaul.png"},
						{label: "Etang Salé",value: "#CD5C5C",lien:txtInit[6]+"etangSale.png"},
						{label: "Entre-Deux",value: "#000080",lien:txtInit[6]+"entreDeux.png"},
						{label: "Les Avirons",value: "#FFD700",lien:txtInit[6]+"lesAvirons.png"},
					{label: "SUD",value:"#66CDAA",lien:txtInit[6]+"sud.png"},
						{label: "Saint-Pierre",value: "#4B0082",lien:txtInit[6]+"saintPierre.png"},
						{label: "Saint-Joseph",value: "#006400",lien:txtInit[6]+"saintJoseph.png"},
						{label: "Petite Ile",value: "#008B8B",lien:"https://upload.wikimedia.org/wikipedia/commons/1/11/Reunion_PetiteIle.JPG"},
						{label: "Saint-Louis",value: "#800000",lien:"https://upload.wikimedia.org/wikipedia/commons/e/e1/R%C3%A9union_LesMakes.JPG"},
						{label: "Cilaos",value: "#98FB98",lien:"https://upload.wikimedia.org/wikipedia/commons/4/43/Cirque_De_Cilaos_On_Reunion.jpg"},
						{label: "Tampon",value: "#CD5C5C",lien:txtInit[6]+"tampon.png"},
						{label: "La Plaine Des Cafres",value: "#000080",lien:txtInit[6]+"laPlaineDesCafres.png"},
						{label: "enclos du Tremblet",value: "#FFD700",lien:"https://upload.wikimedia.org/wikipedia/commons/3/37/Piton_de_la_Fournaise%2C_R%C3%A9union_Island_%28High_Resolution%29.jpg"},
						{label: "Saint-Phillipe",value: "#66CDAA",lien:txtInit[6]+"saintPhilippe.png"},
					{label: "NORD",value: "#4169E1",lien:txtInit[6]+"rocheEcrite.png"},
						{label: "Saint-Denis",value: "#4B0082",lien: "https://upload.wikimedia.org/wikipedia/commons/b/b9/SaintDenisReunion003.jpg"},
						{label: "Sainte-Marie",value: "#006400",lien:txtInit[6]+"sainteMarie.png"},
						{label: "Sainte-Suzanne",value: "#008B8B",lien:txtInit[6]+"sainteSuzanne.png"},
						{label: "La Possession",value: "#800000",lien:txtInit[6]+"laPossession.png"},
						{label: "Le Port",value: "#98FB98",lien:txtInit[6]+"lePort.png"}
				],
		 source :[
			{ id:"E",label: "EST",  value:"1kdUa3ca31BGjEODS180K8B1zsF9ArFmIZLPiiaRp",  items: [
				{ id:"BPn",label: "Bras-Panon", value:"1Eu99fE8gzP8aRvHmC0aoAgGvWLA7sicIJZQzNEHo",  items: [
					{ id:"BPn_t", label: "terrain", value:"1SjOgOCz9LrImoNYW3dlV8AVwekzwgkwkIFrnL9r5"},
                    { id:"BPn_s", label: "sentier", value:"1ccHNKyGhBgTzVkJ6QaeDmsLfWWb8APIPf5PPo6iV"},
                    { id:"BPn_md", label: "manger et dormir", value:"1Bzgou8rOmmto6PjPp71N_-JkAsIAOZI8ezXu_eFp"},
					{ id:"BPn_v", label: "visite", value:"1JqQPaUTMc-kjl8xVIWHnE6s0z4oW4WXhhSZbmm6p"},
					{ id:"BPn_a",label: "activité",value:"1F6J56n5iAOxSXwnJCczlEqtM0exQzaQ6lW89xqOq"}					
				 ]
                },
				 { id:"SAd", label: "Saint-André", value:"1nwNhdQtG4G82HAm7m3GnPNLYFYxf7NkLazRvyow9", items: [
					{ id:"SAd_t", label: "terrain",value:"1vWcldb-WuU1rtH-ElhKI-f_4pLEeJDzzvMaWJSrC"},
                    { id:"SAd_s", label: "sentier",value:"1QxdvqoXSnGh2RaPPYVqkXGMYzs5KyLKNtH6Rjq1Y"},
                    {  id:"SAd_md", label: "manger et dormir",value:"1LoBKzzZG09THxPP4G9WQAvH_TQHHejDAkm6Bd7sn"},
					{ id:"SAd_v", label: "visite",value:"1_JSO07ViQqKGnrbD8l_IjO_T_ipipBS_oH_qs_1c"},
					{ id:"SAd_a", label: "activité",value:"1tVigoTd-SoRI0O-CtE7hMZp-ygWhd3jX25z0GPOD"}						
				 ] },
				 { id:"SB", label: "Saint-Benoit", value:"1gdjt3qeIeAvBxMRhmLwlnCgzr7CTt71iJrZ8dCTY", items: [
					 { id:"SB_t", label: "terrain",value:"1zvWu4e_eyQ1Ho7T4wM63hhl6JtFqOixA7PZDWxPa"},
                    { id:"SB_s", label: "sentier",value:"1K5q_Z_O-QIXt74ZKG9de3lF_uEbKKrBX13HJq1AX"},
                    {  id:"SB_md", label: "manger et dormir",value:"1VHstJP2RjDAvnmoDCGgJrtOTLWkgNAHltpI97KYx"},
					{ id:"SB_v", label: "visite",value:"1hjSY4vwWwCRB8bQJ3uX7c7TyhvrX5c7p5jMDmhtO"},
					{ id:"SB_n", label: "nuit",value:"1z9NOfJnMEtQxerYyCFif9xX3g6YT91tRxZJiNzcb"},
					{ id:"SB_a", label: "activité",value:"1u5cwPRUeVIpuiDkPw1lv_gzrO2DuQ20W0zERTTdc"}						
				 ] },
				 { id:"SAn", label: "Sainte-Anne", value:"1s911vZP-Ftzh8TA3JoQSzwuRNbTwkJoZmYna_SFn", items: [
					{ id:"SAn_t", label: "terrain",value:"1nFu8dd5l9fDV2Fn-87mWp_cMrRwjxSjO-vy2Cv7b"},
                    { id:"SAn_s", label: "sentier",value:"120SVl3kmLTTetv0_mrthuHsAUgRr8bG8t8ywKsgi"},
                    {  id:"SAn_md", label: "manger et dormir",value:"1sJdzuo-LRbdDpgIQrXqbnxzEQPIPaJJ0txncB87r"},
					{ id:"SAn_v", label: "visite",value:"1iAH1oV5dyYxuUCOKa7W0xo3D4TUIoXCvzd9yTRJ_"}						
				 ] },
				 { id:"SR", label: "Sainte-Rose", value:"SainteRose", items: [
					{ id:"SR_t", label: "terrain",value:"1GKArjzvczShC_oTmoeSPVyxL_kfMEiyriOq4njIt"},
                    { id:"SR_s", label: "sentier",value:"1fWsTyPLLg_jZbHXLmn921wWRYNpp7Mph64n9PaCA"},
                    {  id:"SR_md", label: "manger et dormir",value:"1JelP0FaMsEp22nh7DWvjGWA-HHEll4WsusdNze3W"},
					{ id:"SR_v", label: "visite",value:"1beWOfA6DyHQS6-Kr9eZtG8i2io7Q4J9NquFgQyG-"}						
				 ] },
				{ id:"PP", label: "La Plaine Des Palmistes", value:"1jLXnDeXAjIbdZrgZFiovGef8BTUvyk5PkzoKsfCb", items: [
                    { id:"PP_s", label: "sentier", value:"1_ucovZZ5C18rlh_cGO6Uc2YgB23EmR-IQ9epBop4"},
                    {  id:"PP_md", label: "manger et dormir", value:"15V8aJ6r5JNfr4xP4ZKnmi4i9mZTt6f0l8WG5hbE3"},
					{ id:"PP_v", label: "visite", value:"1DxmzBkR4z4qdMDV6bIl8P3ysFbbdWr41h83yK7wn"},
					{ id:"PP_a", label: "activité",value:"1PebD0cnAun_RkcbEXdDgw4DowklvtSFOD08NlDOj"}						
				 ] },
				 { id:"S", label: "Salazie", value:"1zRn7YirASic3zXNjwr0jPpwlUURx5v1w0wK2JGSZ", items: [
					{ id:"S_t", label: "terrain",value:"1UzSHUROSXlwSlMlCe4WQBDyucf1m83YsGbX4FYhP"},
                    { id:"S_s", label: "sentier",value:"166vivC3Sr59gCaQR98o8-9sXHBfnKiJdX5hH_7tz"},
                    {  id:"S_md", label: "manger et dormir",value:"1wOqplnMkWf_CHXezRZBC3HvMSf2lcKcnNzgUx8Jp"},
					{ id:"S_v", label: "visite",value:"1oWl8XUdryHiQxlg83t_pu6ERxi4PPOjrvx2Vbuhj"},
					{ id:"S_a", label: "activité",value:"1TjFpDyS3jwXAsLdAUL92BdcjM__2SLu71VDkkli_"}						
				 ] }
			]
			},
			{ id:"N",label: "NORD", value:"1X7thBX2nmGVIivqpYNzSWN9iC4OCJDvP469Yvr15", items: [
				{ id:"SD", label: "Saint-Denis",value:"1B6GQb_eKzR2PmlhSHddq7I8v4KAlYB3HgtLLxWO6", items: [
					{ id:"SD_t", label: "terrain",value:"1A3qmh8ulO-hXKe2W57qihqlkXEMajktf6NUbvkH8"},
                    { id:"SD_s", label: "sentier",value:"1Vw4KON8Ww-OU2gTTg1web3a_kWjXOnc0cGmJ1xnR"},
                    {  id:"SD_md", label: "manger et dormir",value:"1Wx6ZbbFLkEIdbxfS2AHJyUprIINfqtWLLhA_ngNZ"},
					{ id:"SD_v", label: "visite",value:"1OIG0YWzJA6nr_Nr6F-lNVsnYfsKtA8ubbGA_Tx0v"},
					{ id:"SD_n", label: "nuit",value:"1PSVZqIwSOlIbOWgXTdUhMXe4Pj-IIhaOEiEz_kaV"},
					{ id:"SD_a", label: "activité",value:"1yJfcFEbn1487U-HHCv9UcihepFv3kVS7U82pMS3A"}						
				 ] },
				 { id:"SM", label: "Sainte-Marie",value:"192A1s6RA93KPg1cXOC7QYPI6MyGBb-AZtNpFNnyt", items: [
					{ id:"SM_t", label: "terrain",value:"1O2m7YXKBxLcAQZkuX1oOrA6dJFiZNv7KEZqkUTuZ"},
                    { id:"SM_s", label: "sentier",value:"1vGSpCnOiCfNeAQvIpPscZ26cUq7x31imy_VShUZd"},
                    {  id:"SM_md", label: "manger et dormir",value:"1FKB-9QH0VtpFGMtMeZZD_c2Fze2g9hYoxivizqav"},
					{ id:"SM_v", label: "visite",value:"1hYkKYnkxqvjmRc7IKgAz9xdYPiNI2VqZ6oWnLMLd"},
					{ id:"SM_a", label: "activité",value:"1CpsXyW6UwS2Ix6oTHfy64PKixJGYml3lnUjj_Rta"}						
				 ] },
				 { id:"SS", label: "Sainte-Suzanne",value: "11hA_F8nvGsVVgrtgSs0i4ehviHgHc1kmGDHv1JgS", items: [
					{ id:"SS_s", label: "sentier",value:"1uP6kIJhbe2VDpT-bXB9uMosjNNejhQGt_P7Ey2jf"},
                    { id:"SS_s", label: "sentier",value:"14tKW-WkeyvLupjFAoWXMbAgEa9--pO18c1Jnr_5j"},
                    {  id:"SS_md", label: "manger et dormir",value:"1CjnaMnc4aEFf3b9n498eqJaZKf9E3mndyDaF5PjG"},
					{ id:"SS_v", label: "visite",value:"1mw9EHc9TOcgbbTNijGTzw5zrCxXjisZuiqwMLnlw"}						
				 ] },
				{ id:"Pos", label: "La Possession",value:"1NjCzAjGKweKavFoZsexcszpxCpx3NEx7pKsNYqED", items: [
					{ id:"Pos_t", label: "terrain", value:"1lr8c-nv0zSUMfdnWxpvmIZBf4EOcNSduutH7z-7D"},
                    { id:"Pos_s", label: "sentier", value:"1H0BtHjh6l-SmQNh8ty4RXmhv-rGP36i6pHKiw1VL"},
                    {  id:"Pos_md", label: "manger et dormir", value:"1W14GqyphT5To9rr7laAjrAcJd9JLEd_5vj7b1RmE"},
					{ id:"Pos_v", label: "visite",value:"1elAEWqFcSey78i0T167f6OYuUKo3aSJ9DKcAH4JE"},
					{ id:"Pos_a", label: "activité",value:"1yfoGSvq6a0uGLL8GJPdsDZ1lGRWysaBfhoiR6hz8"}						
				 ] },
				 { id:"Por", label: "Le Port",value:"1muRbrt4rHjP_PJWRoIwlywN33ckv-pq3ADitGvI0", items: [
					{ id:"Por_t", label: "terrain",value:"1egvMm3Q0a8ISZ3dbmydPFqMdsLvDuHwUemNkY1mi"},
                    { id:"Por_s", label: "sentier",value:"19Zl9W3yXp0IdmcANjF_MlHX1R9hk8X27mFhJnmZH"},
                    {  id:"Por_md", label: "manger et dormir",value:"1LHKdsKbwR4CIR0L6Irt9m8jqScVnfxPMEm4JBA-3"},
					{ id:"Por_v", label: "visite",value:"1aOiWEpC7YfSJL10AebsxUpSpg-h-A4fcbIvjZxi8"},
					{ id:"Por_n", label: "nuit",value:"1YHjpqYf1aJqw-gylQDId1rCF_qDZDMSxUbxjRGG_"},
					{ id:"Por_a", label: "activité",value:"13B6si8MulZuOUFdcGkzj67HPwrMXklYzZOUuEi7Q"}						
				 ] }
				 
			]
			},
			{ id:"O",label: "OUEST", value:"1t35ApBEMf9xwiZA9EqZd-glj8GexmPuhpSr_ndlh", items: [
				{ id:"Ma", label: "Mafate",value:"1GveH25DbaQoreX86sPBmcFei9zfvi8UmD2y2qyqu", items: [
                    { id:"Ma_s", label: "sentier",value:"18JyKnH11VSG-SUHvvoIIxrkfTKDx4wwQd7Bpbe_p"},
                    {  id:"Ma_md", label: "manger et dormir",value:"1vfct65S_RoeN5rdKfGeUF7ux6EUrtXL5HzGj1p08"},
					{ id:"Ma_v", label: "visite",value:"1WeFn6tuD30_ShUb76sLjrA0SacbuV9j3E5h5k0cZ"}						
				 ] },
				 { id:"SG", label: "Saint-Gilles",value:"1sa1fCY5I_xhM7AyYIWyqJedxZzBmGcIfrH1Q8tke", items: [
					{ id:"SG_t", label: "terrain",value:"1cfDuclfE5Kz88w0egT267xw7Mg77Xw4wkEhi7bws"},
                    { id:"SG_s", label: "sentier",value:"19ViFSzg0Auo8m31abL2z_9OUjBHImUR0PFx9pTro"},
                    {  id:"SG_md", label: "manger et dormir",value:"12undvS9IMnRnEeTYClqje8BFf7nQYlQvD0VJmlb4"},
					{ id:"SG_v", label: "visite",value:"1hMxXypHObu1TaGNVj6Hig_bgSG6FEx68w8p3psqa"},
					{ id:"SG_n", label: "nuit",value:"1NEArpXB8yKypvOY0FlhXeg_BC-3AbUUvQIvxVyfI"},
					{ id:"SG_a", label: "activité",value:"13Tj9i_c7p5qrbFYM5a6OXBgGIhxUetOh-DAIVpDC"}						
				 ] },
				 { id:"SL", label: "Saint-Leu",value:"1ahKjlUXShjRwyOlo7ZCcZMSvEpJfRG9hY7_Qg6TA",  items: [
					{ id:"SL_t", label: "terrain",value:"1WreJYQyzcURwYIN8UqJUNUJHJ5k_xiyUeIzTkhTm"},
                    { id:"SL_s", label: "sentier",value:"11W_793Vb7vxwFp6vLsGV9n83by8wA0NJOD0_urIV"},
                    {  id:"SL_md", label: "manger et dormir",value:"1zurSKheMQdZ7cFgw5B7y3ihGUWXutuHHhsIonkhS"},
					{ id:"SL_v", label: "visite",value:"1pXRpIDoonJjBECHhUEtKjcG_AmiRC43vnejF1UXq"},
					{ id:"SL_n", label: "nuit",value:"1teakmILV4AZcMznt3ihFWUbLAH1W1ILNYxpi6Tz8"},
					{ id:"SL_a", label: "activité",value:"1v6kmzTDGRK_q66oyNuyr0842W4drPkVFJjoMDaRH"}						
				 ] },
				 { id:"TB", label: "TroisBassins",value:"12g6QNhlYlaTgGoEN_K3Tyl6QV31y6TUPuHXjM-g-", items: [
                    { id:"TB_s", label: "sentier",value:"11YVBN4CqL6oLdASJEJ_lJ13WWNEJc6_yZxQrQeoZ"},
                    {  id:"TB_md", label: "manger et dormir",value:"1yBld8_oUcv_2Ccnqz7xV2dKo16xbYoqtbhjjQIIC"},
					{ id:"TB_v", label: "visite",value:"1KbxFddq2D4uo3RNMruBz17I266wO9OYjXpwQNxoS"},
					{ id:"TB_a", label: "activité",value:"1uzRedo3Qe9b4HZjHlgcDxReLo6r3udNWyBIaOM7L"}						
				 ] },
				 { id:"SPA", label: "Saint-Paul",value:"1yPMDk3KG56Dero7Lway4oMIw42daQVKtK0PLjKNZ", items: [
					{ id:"SPA_t", label: "terrain",value:"1pF55Ecb8S5nMLRADZ_ZrYqhTdGXLQRu2v4knP32n"},
                    { id:"SPA_s", label: "sentier",value:"105O9BV8SR2p9EiMbh7nr8W2I75p_lxEWc9yFeOea"},
                    {  id:"SPA_md", label: "manger et dormir",value:"1arbnu4e3HPRxM4ys0AZEvHGk6cAZjSEE0tHPE07R"},
					{ id:"SPA_v", label: "visite",value:"1cX2TaI47iZtEMnZIu2ZDPRUSllt6MxhgQ7SVxE2O"},
					{ id:"SPA_n", label: "nuit",value:"1uAUFKQbO3b4azglINq0byh6IMTt0tcsew-ZDhHVK"},
					{ id:"SPA_a", label: "activité",value:"1yvNIMDlSsqd6REMTpDqNBKabGeFft-kquWsWvPA1"}						
				 ] },
				 { id:"ES", label: "Etang Salé",value:"1XgstlSHKGm72zgrRO6lFUdVSM6867jPyfLT-Mtcj", items: [
					{ id:"ES_t",label: "terrain",value:"1kdUa3ca31BGjEODS180K8B1zsF9ArFmIZLPiiaRp"},
                    { id:"ES_s",label: "sentier",value:"1Um2dvNwSoRN_SYsZMLjTwCR-qEhSVcCMZQgjncBF"},
                    {  id:"ES_md", label: "manger et dormir", value:"1Ya4SFxo6lr8uNoEBRhH_E8Zpq3InMkNmEilUdVfT"},
					{ id:"ES_v", label: "visite", value:"1ngS7I2W3ZEACE4VpYby5j0cKYTBJCzmtmYxUkPap"},
					{ id:"ES_n", label: "nuit",value:"1aaXjKHD9gFKajSSFONppPltXcSgAUKWvrbZ94gEG"},
					{ id:"ES_a", label: "activité", value:"1PL-tDeZMX1uhb3pgNaVFnX0T3eNs8aK60PKx5xd1"}						
				 ] },
				{ id:"ED", label: "Entre-Deux", value:"1uU-__tmwAmqtTXPsi57LhiD969SwF0xWjbnDEw-7", items: [
					{ id:"ED_a", label: "activité", value:"1rZG5fmVIUptJwXk5uiJfjVuIn-ooM9WuII0UkEy3"}						
				 ] },
				 { id:"Av", label: "Les Avirons", items: [
					{ id:"Av_t", label: "terrain",value:"1mWz8sMkRVFm7820e4XBNqBEFRI0gWQ_0-OxVQ0_B"},
                    { id:"Av_s", label: "sentier",value:"1mMsbTg4i0b6n8cXi4TYQzK6Ckbe4MMYzTqQ9fniT"},
                    {  id:"Av_md", label: "manger et dormir",value:"1hv5ee8OPODPryBpl0DqrwwzAzV0yvt3DnJ-AZBDB"},
					{ id:"Av_v", label: "visite",value:"14wzoLVQ3p-nHkPW1SuCOBTEQxmOLTDenF66Ywkb7"},
					{ id:"Av_a", label: "activité",value:"1XtwmwdSCQllPPQuge9CPbJtf5KIL71w3ZGON7Evm"}						
				 ] }
			]
			},
			{ id:"S",label: "SUD", value:"1XolYmmcAznvjC8X4Gx8vvOWY5a-dJOIyl5ZkWXmM",  items: [
				{ id:"SPI", label: "Saint-Pierre", value:"1MT3G_b9rZRjqusrdShjZ7kqEHe1JOmq-wp7Wt-JY", items: [
					{ id:"SPI_t", label: "terrain",value:"1nuksgXG9G7cBpwzV-_442xLhTnxx849HoIXe_6kx"},
                    { id:"SPI_s", label: "sentier",value:"1hGzzznJSMFAvbAoDUWMJj13Z1u4Vlv7WnAOKrpTC"},
                    {  id:"SPI_md", label: "manger et dormir",value:"1SgbVz3eHKfSPWp9XNk5NWxvNP_ahskNvyjKLeRtZ"},
					{ id:"SPI_v", label: "visite",value:"1Gjgt4ZhaV4RgzAzE4VkzI06ZWTV_-v97WQIs_0jx"},
					{ id:"SPI_n", label: "nuit",value:"1jg739vX36Xn5o4jgy_CUko40GooVm-4RQCNb8IE8"},
					{ id:"SPI_a", label: "activité",value:"1bRyWWEF7wu5Zy6Rg5Qm_zGuMfKyQhlK11FrsA7XD"}						
				 ] },
				{ id:"SJ", label: "Saint-Joseph", value:"1EdNBxumLvo_ZKbDvIAmdG4kL4aK8mwn715beAfxU", items: [
					{ id:"SJ_t", label: "terrain",value:"1FYDeFbUGzcd8BXd-486iI4wbbuOpp7kpFO-DXu53"},
                    { id:"SJ_s", label: "sentier",value:"1CvxRIBwlkoJNRqRLe7F4OvWfp-xkDGU5edSq0ASl"},
                    {  id:"SJ_md", label: "manger et dormir",value:"1et5h1MbG_qX1K3iLNCTvQWS5_uj2vayNXSXwwXVU"},
					{ id:"SJ_v", label: "visite",value:"12F1H2X-rQrYMAyn3T4lEp7J6XkRig3C5MB1vV1nN"},
					{ id:"SJ_n", label: "nuit",value:"1mGP2D37TYcg7aKBRPuDLofmhIziluf9i-rnGf5wx"},
					{ id:"SJ_a", label: "activité",value:"1DnBh8sOLdiSlZlq4oLZkAH84JiLW4BQN0l2xdFxc"}						
				 ] },
				{ id:"PI", label: "Petite Ile", value:"1dcDRLQyzoX7G70X4VjHYe5sgNtyiurA4pk5cvwXH", items: [
					{ id:"PI_t", label: "terrain",value:"1ZXBQvZmy7a-TdVUxcZZW0dEkl0VigG_nIx6cjnva"},
                    { id:"PI_s", label: "sentier",value:"1eO6-9Sir2Tl-MHrHyyXY6Ws5hJZBszblOM1b_7fg"},
                    {  id:"PI_md", label: "manger et dormir",value:"1wTC3c07JmeEexULCOeoCe5i12g95r7sPXZbIxDoQ"},
					{ id:"PI_v", label: "visite",value:"1Ecnj4R9f0uL_nliqIHl36utyF5K6f0tw9UvErgER"},
					{ id:"PI_a", label: "activité",value:"1_NSMIuxAJzXnBeRFUXt4Z6iYLCJgrKlXttllLfOh"}						
				 ] },
				 { id:"SLO", label: "Saint-Louis", value:"1M1iYxQ8PEELVmrQr_3bGh_-7UU09ghn1cvNo8WCV", items: [
					{ id:"SLO_t", label: "terrain",value:"1VavGGOruqsPbe6GqtS0-ysRBhQDhodfOUYH49Enf"},
                    { id:"SLO_s", label: "sentier",value:"1ESOd1qko4uxhvuUAltY5ZYMq00Ov_kqfpFl71FIO"},
                    {  id:"SLO_md", label: "manger et dormir",value:"1ETrdbfbNxfmKIGa7u6MC21igP8p16Hu8OvaM1ODL"},
					{ id:"SLO_v", label: "visite",value:"1wezhGcWJshrYRFFPdEUpnIWrHp6ggkrAjjNwNnAM"},
					{ id:"SLO_a", label: "activité",value:"1WQqAVJWl43bFI8l-3Sw6UMmxBlzgj-CvNo06T8tJ"}						
				 ] },
				 { id:"Ci", label: "Cilaos",value:"1Z0zITHQac_xwSfmHpvliZoioY58jZhUjWs9KX8Ln", items: [
					{ id:"Ci_t",label: "terrain", value:"18xgZcIBvJ1w2bk_gemnKh52HOkqmdDYsxYSjpS26"},
                    { id:"Ci_s",label: "sentier", value:"1hR6kwS000LgXzL2wt-TJayI0SG9AZemcnNctwoPe"},
                    {  id:"Ci_md", label: "manger et dormir",value:"1tdQ_vkcdqDJB037eDiyXo3YR-XlJUVvs_IcD3kD8"},
					{ id:"Ci_v", label: "visite", value:"1a0FJN_DioGC6sPhOJyt5Q4d7tUcae5GmRBNXemXP"},
					{ id:"Ci_a", label: "activité", value:"1JDZYdWYIysK0dxS9Rt6pEi7SGv864A5_BUgfi39u"}						
				 ] },
				 { id:"T", label: "Tampon", value:"1fS6sn1x_MDXE8mPT2dJGBE4mLyTseyvgQmt8fS7w", items: [
					{ id:"T_t", label: "terrain",value:"1TVMj_ErRYZSUl8IRlxS2A45BPf6yZBLmrdPUqLqx"},
                    { id:"T_s", label: "sentier",value:"1vxnUDRqG5ZwScgpGxjcOHGY72Na_7ubVhw5meBJr"},
                    {  id:"T_md", label: "manger et dormir",value:"1Tetq4TXpTTgtp0lBEGx6GSjZnurzUt4CFXlKaiOB"},
					{ id:"T_v", label: "visite",value:"1RHM6iPa9admK-4DMQpOEv8cZ3Sx8cix5taZzWOs_"},
					{ id:"T_n", label: "nuit",value:"195dI4uyd_AKasWDtn4eTQz3v6gcKlgE55N9_1zwE"}	,
					{ id:"T_a", label: "activité",value:"1x-iqx3tCYREWFoCBzt8ezhx0uVeiXaqrm8o6_ZKU"}						
				 ] },
				 { id:"PC", label: "La Plaine Des Cafres", value:"1r3TOcxghV2VoLauNU6PnoY3kzdcSIbtey0pnhWWz", items: [
                    { id:"PC_s", label: "sentier", value:"1NpjpyxxMv9KIki_DtXtzPRLdNwzJ7uBjxzoxJOoV"},
                    {  id:"PC_md", label: "manger et dormir",value:"1RPot4Hw0B_ogvWoGAu3sW2Tz-nP6NSLREbaDZsXJ"},
					{ id:"PC_v", label: "visite", value:"1EBGjcCB-FRK6AXy9EJ-lmLaQHfNsnXS_uhSNWz71"},
					{ id:"PC_a", label: "activité", value:"1iTq7746ceYVrcXqcM3Ugu1CYAO_qNR09CoWCUuNP"}						
				 ] },
				  { id:"eT", label: "enclos du Tremblet", value:"1NId8irdjYKXfpFKk5NZ-SD7ZGkUhl2w6m1LL5t4F", items: [
                    { id:"eT_s",label: "sentier", value:"1HG3aQEg2D1q_4d5n2_Gmk8rMQl6a995HY7dPJCZR"},
					{ id:"eT_v", label: "visite", value:"1cRObSW2PCNmCjRlONmIKRdj2VYbee9_bpa2oTHiX"}
				  ] }
				  ,
				  { id:"eT", label: "SaintPhillipe", value:"1H9qvzwkRMhjjEwgrs_CToYkSPKU9JpKz0NzxRMhY", items: [
                    { id:"T_t", label: "terrain",value:"1t4UNzRx7NREpOPfUh-jcfjj4jmZdlCrcV5UTnMBK"},
                    { id:"T_s", label: "sentier",value:"1tk1Ncnn2rK7hh9uNag18vlksj_ZETxBqzxX6edbw"},
                    {  id:"T_md", label: "manger et dormir",value:"1tJJW6s2ELbV-cSIecvLroNt9u1pY_ExyTSxEsyDG"},
					{ id:"T_v", label: "visite",value:"1p3_0vNQxgdOQMXhkO6PWCzUoBD5XLVThjWcFzDrL"},
					{ id:"T_a", label: "activité",value:"136pTZ-NKGCp0d1jqeOBXKXJJmK3sdF51h6lhiiF5"}
				  ] }
				  
				  
			]
			}
            ],
		ptbid: new Array(),
		applyChild	:function(items){
		for(var i in items)
					{
						FuncTree.chkItm(items[i]);
						
					}
	},
	chkItm :function(elmt){
		var rplc='#'+elmt.id;
				$("#jqxTree").jqxTree('checkItem', $(rplc)[0], true);
	},
	applysrch :function(item)
	{
		FuncTree.ptbid=new Array();
		try{
		var items = $('#jqxTree').jqxTree('getCheckedItems');
			items.push(item);
			//$('#listv').remove();
			//$('#listv').append(  '<table>' );
			for(var i in items)
				if(items[i]!=null)
					{
						FuncTree.ptbid.push(items[i].value);
						//$('#listv').append( '<tr><td>' + items[i].label+ '</td></tr>' );
					}

			 //$('#listv').append(  '</table>' );
			}catch(ex)
			{
				;
			}
		
	},
	schrrefifd :function(lbprt)
	{
		for(var i=0; i<FuncTree.source.length;i++)
			if(FuncTree.source[i].label==lbprt)
				return FuncTree.source[i];
			
	},
	chStyle :function(lbprt)
	{
		
		for(var i=0; i<FuncTree.srcStyle.length;i++)
			if(FuncTree.srcStyle[i].label==lbprt)
				return FuncTree.srcStyle[i].value;
	},
	chURL:function(lbprt)
	{
		for(var i=0; i<FuncTree.srcStyle.length;i++)
			if(FuncTree.srcStyle[i].label==lbprt)
				return FuncTree.srcStyle[i].lien;
	},
	append : function(txt,color)
	{
		$('#itin').append(txt);
		$('#itin').css("color",color);
		$('#itin').css("background-color","#FFFFFF");
	}
			
			};