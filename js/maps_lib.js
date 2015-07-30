/*!
 * TEMPLATE INSTRUCTIONS: Look for sections below marked MODIFY and adjust to fit your data and index.html page
 * Learn more at
 * Data Visualization book-in-progress by Jack Dougherty at Trinity College CT
 * http://epress.trincoll.edu/dataviz
 * and
 * Searchable Map Template with Google Fusion Tables
 * http://derekeder.com/searchable_map_template/
 *
 * Copyright 2012, Derek Eder
 * Licensed under the MIT license.
 * https://github.com/derekeder/FusionTable-Map-Template/wiki/License
 *
 * Date: 17/03/2014 template modified by Derek Eder and Jack Dougherty
 *
 */

// Enable the visual refresh
google.maps.visualRefresh = true;
var bn=false;
var ptbid=["1ccHNKyGhBgTzVkJ6QaeDmsLfWWb8APIPf5PPo6iV","1pXRpIDoonJjBECHhUEtKjcG_AmiRC43vnejF1UXq","1LHKdsKbwR4CIR0L6Irt9m8jqScVnfxPMEm4JBA-3"];
var source = [
                { id:"BPn",label: "Bras-Panon",  items: [
                    { id:"BPn_s", label: "sentier", checked: true, value:"1ccHNKyGhBgTzVkJ6QaeDmsLfWWb8APIPf5PPo6iV"},
                    { id:"BPn_md", label: "manger et dormir", value:"1Bzgou8rOmmto6PjPp71N_-JkAsIAOZI8ezXu_eFp"},
					{ id:"BPn_v", label: "visite", value:"1JqQPaUTMc-kjl8xVIWHnE6s0z4oW4WXhhSZbmm6p"},
					{ id:"BPn_a",label: "activité",value:"1F6J56n5iAOxSXwnJCczlEqtM0exQzaQ6lW89xqOq"}					
				 ]
                },
                { id:"Cilaos", label: "Cilaos", items: [
                    { id:"Ci_s",label: "sentier", value:"1hR6kwS000LgXzL2wt-TJayI0SG9AZemcnNctwoPe"},
                    {  id:"Ci_md", label: "manger et dormir",value:"1tdQ_vkcdqDJB037eDiyXo3YR-XlJUVvs_IcD3kD8"},
					{ id:"Ci_v", label: "visite", value:"1a0FJN_DioGC6sPhOJyt5Q4d7tUcae5GmRBNXemXP"},
					{ id:"Ci_a", label: "activité", value:"1JDZYdWYIysK0dxS9Rt6pEi7SGv864A5_BUgfi39u"}						
				 ] },
                { id:"eT", label: "enclos du Tremblet", items: [
                    { id:"eT_s",label: "sentier", value:"1HG3aQEg2D1q_4d5n2_Gmk8rMQl6a995HY7dPJCZR"},
					{ id:"eT_v", label: "visite", value:"1cRObSW2PCNmCjRlONmIKRdj2VYbee9_bpa2oTHiX"},
				  ] },
				  
				 { id:"ED", label: "Entre-Deux", items: [
					{ id:"ED_a", label: "activité", value:"1rZG5fmVIUptJwXk5uiJfjVuIn-ooM9WuII0UkEy3"}						
				 ] },
				 { id:"ES", label: "Etang Salé", items: [
                    { id:"ES_s",label: "sentier",value:"1Um2dvNwSoRN_SYsZMLjTwCR-qEhSVcCMZQgjncBF"},
                    {  id:"ES_md", label: "manger et dormir", value:"1Ya4SFxo6lr8uNoEBRhH_E8Zpq3InMkNmEilUdVfT"},
					{ id:"ES_v", label: "visite", value:"1ngS7I2W3ZEACE4VpYby5j0cKYTBJCzmtmYxUkPap"},
					{ id:"ES_n", label: "nuit",value:"1aaXjKHD9gFKajSSFONppPltXcSgAUKWvrbZ94gEG"},
					{ id:"ES_a", label: "activité", value:"1PL-tDeZMX1uhb3pgNaVFnX0T3eNs8aK60PKx5xd1"}						
				 ] },
				 { id:"PC", label: "La Plaine Des Cafres", items: [
                    { id:"PC_s", label: "sentier", value:"1NpjpyxxMv9KIki_DtXtzPRLdNwzJ7uBjxzoxJOoV"},
                    {  id:"PC_md", label: "manger et dormir",value:"1RPot4Hw0B_ogvWoGAu3sW2Tz-nP6NSLREbaDZsXJ"},
					{ id:"PC_v", label: "visite", value:"1EBGjcCB-FRK6AXy9EJ-lmLaQHfNsnXS_uhSNWz71"},
					{ id:"PC_a", label: "activité", value:"1iTq7746ceYVrcXqcM3Ugu1CYAO_qNR09CoWCUuNP"}						
				 ] },
				 { id:"PP", label: "La Plaine Des Palmistes", items: [
                    { id:"PP_s", label: "sentier", value:"1_ucovZZ5C18rlh_cGO6Uc2YgB23EmR-IQ9epBop4"},
                    {  id:"PP_md", label: "manger et dormir", value:"15V8aJ6r5JNfr4xP4ZKnmi4i9mZTt6f0l8WG5hbE3"},
					{ id:"PP_v", label: "visite", value:"1DxmzBkR4z4qdMDV6bIl8P3ysFbbdWr41h83yK7wn"},
					{ id:"PP_a", label: "activité",value:"1PebD0cnAun_RkcbEXdDgw4DowklvtSFOD08NlDOj"}						
				 ] },
				 { id:"Pos", label: "La Possession", items: [
                    { id:"Pos_s", label: "sentier", value:"1H0BtHjh6l-SmQNh8ty4RXmhv-rGP36i6pHKiw1VL"},
                    {  id:"Pos_md", label: "manger et dormir", value:"1W14GqyphT5To9rr7laAjrAcJd9JLEd_5vj7b1RmE"},
					{ id:"Pos_v", label: "visite",value:"1elAEWqFcSey78i0T167f6OYuUKo3aSJ9DKcAH4JE"},
					{ id:"Pos_a", label: "activité",value:"1yfoGSvq6a0uGLL8GJPdsDZ1lGRWysaBfhoiR6hz8"}						
				 ] },
				 { id:"Por", label: "Le Port", items: [
                    { id:"Por_s", label: "sentier",value:"19Zl9W3yXp0IdmcANjF_MlHX1R9hk8X27mFhJnmZH"},
                    {  id:"Por_md", label: "manger et dormir",checked:true,value:"1LHKdsKbwR4CIR0L6Irt9m8jqScVnfxPMEm4JBA-3"},
					{ id:"Por_v", label: "visite",value:"1aOiWEpC7YfSJL10AebsxUpSpg-h-A4fcbIvjZxi8"},
					{ id:"Por_n", label: "nuit",value:"1YHjpqYf1aJqw-gylQDId1rCF_qDZDMSxUbxjRGG_"},
					{ id:"Por_a", label: "activité",value:"13B6si8MulZuOUFdcGkzj67HPwrMXklYzZOUuEi7Q"}						
				 ] },
				 { id:"Av", label: "Les Avirons", items: [
                    { id:"Av_s", label: "sentier",value:"1mMsbTg4i0b6n8cXi4TYQzK6Ckbe4MMYzTqQ9fniT"},
                    {  id:"Av_md", label: "manger et dormir",value:"1hv5ee8OPODPryBpl0DqrwwzAzV0yvt3DnJ-AZBDB"},
					{ id:"Av_v", label: "visite",value:"14wzoLVQ3p-nHkPW1SuCOBTEQxmOLTDenF66Ywkb7"},
					{ id:"Av_a", label: "activité",value:"1XtwmwdSCQllPPQuge9CPbJtf5KIL71w3ZGON7Evm"}						
				 ] },
				 { id:"Ma", label: "Mafate", items: [
                    { id:"Ma_s", label: "sentier",value:"18JyKnH11VSG-SUHvvoIIxrkfTKDx4wwQd7Bpbe_p"},
                    {  id:"Ma_md", label: "manger et dormir",value:"1vfct65S_RoeN5rdKfGeUF7ux6EUrtXL5HzGj1p08"},
					{ id:"Ma_v", label: "visite",value:"1WeFn6tuD30_ShUb76sLjrA0SacbuV9j3E5h5k0cZ"}						
				 ] },
				 { id:"PI", label: "Petite Ile", items: [
                    { id:"PI_s", label: "sentier",value:"1eO6-9Sir2Tl-MHrHyyXY6Ws5hJZBszblOM1b_7fg"},
                    {  id:"PI_md", label: "manger et dormir",value:"1wTC3c07JmeEexULCOeoCe5i12g95r7sPXZbIxDoQ"},
					{ id:"PI_v", label: "visite",value:"1Ecnj4R9f0uL_nliqIHl36utyF5K6f0tw9UvErgER"},
					{ id:"PI_a", label: "activité",value:"1_NSMIuxAJzXnBeRFUXt4Z6iYLCJgrKlXttllLfOh"}						
				 ] },
				 { id:"SAd", label: "Saint-André", items: [
                    { id:"SAd_s", label: "sentier",value:"1QxdvqoXSnGh2RaPPYVqkXGMYzs5KyLKNtH6Rjq1Y"},
                    {  id:"SAd_md", label: "manger et dormir",value:"1LoBKzzZG09THxPP4G9WQAvH_TQHHejDAkm6Bd7sn"},
					{ id:"SAd_v", label: "visite",value:"1_JSO07ViQqKGnrbD8l_IjO_T_ipipBS_oH_qs_1c"},
					{ id:"SAd_a", label: "activité",value:"1tVigoTd-SoRI0O-CtE7hMZp-ygWhd3jX25z0GPOD"}						
				 ] },
				 { id:"SB", label: "Saint-Benoit", items: [
                    { id:"SB_s", label: "sentier",value:"1K5q_Z_O-QIXt74ZKG9de3lF_uEbKKrBX13HJq1AX"},
                    {  id:"SB_md", label: "manger et dormir",value:"1VHstJP2RjDAvnmoDCGgJrtOTLWkgNAHltpI97KYx"},
					{ id:"SB_v", label: "visite",value:"1hjSY4vwWwCRB8bQJ3uX7c7TyhvrX5c7p5jMDmhtO"},
					{ id:"SB_n", label: "nuit",value:"1z9NOfJnMEtQxerYyCFif9xX3g6YT91tRxZJiNzcb"},
					{ id:"SB_a", label: "activité",value:"1u5cwPRUeVIpuiDkPw1lv_gzrO2DuQ20W0zERTTdc"}						
				 ] },
				 { id:"SD", label: "Saint-Denis", items: [
                    { id:"SD_s", label: "sentier",value:"1Vw4KON8Ww-OU2gTTg1web3a_kWjXOnc0cGmJ1xnR"},
                    {  id:"SD_md", label: "manger et dormir",value:"1Wx6ZbbFLkEIdbxfS2AHJyUprIINfqtWLLhA_ngNZ"},
					{ id:"SD_v", label: "visite",value:"1OIG0YWzJA6nr_Nr6F-lNVsnYfsKtA8ubbGA_Tx0v"},
					{ id:"SD_n", label: "nuit",value:"1PSVZqIwSOlIbOWgXTdUhMXe4Pj-IIhaOEiEz_kaV"},
					{ id:"SD_a", label: "activité",value:"1yJfcFEbn1487U-HHCv9UcihepFv3kVS7U82pMS3A"}						
				 ] },
				 { id:"SAn", label: "Sainte-Anne", items: [
                    { id:"SAn_s", label: "sentier",value:"120SVl3kmLTTetv0_mrthuHsAUgRr8bG8t8ywKsgi"},
                    {  id:"SAn_md", label: "manger et dormir",value:"1sJdzuo-LRbdDpgIQrXqbnxzEQPIPaJJ0txncB87r"},
					{ id:"SAn_v", label: "visite",value:"1iAH1oV5dyYxuUCOKa7W0xo3D4TUIoXCvzd9yTRJ_"}						
				 ] },
				 { id:"SM", label: "Sainte-Marie", items: [
                    { id:"SM_s", label: "sentier",value:"1vGSpCnOiCfNeAQvIpPscZ26cUq7x31imy_VShUZd"},
                    {  id:"SM_md", label: "manger et dormir",value:"1FKB-9QH0VtpFGMtMeZZD_c2Fze2g9hYoxivizqav"},
					{ id:"SM_v", label: "visite",value:"1hYkKYnkxqvjmRc7IKgAz9xdYPiNI2VqZ6oWnLMLd"},
					{ id:"SM_a", label: "activité",value:"1CpsXyW6UwS2Ix6oTHfy64PKixJGYml3lnUjj_Rta"}						
				 ] },
				 { id:"SR", label: "Sainte-Rose", items: [
                    { id:"SR_s", label: "sentier",value:"1fWsTyPLLg_jZbHXLmn921wWRYNpp7Mph64n9PaCA"},
                    {  id:"SR_md", label: "manger et dormir",value:"1JelP0FaMsEp22nh7DWvjGWA-HHEll4WsusdNze3W"},
					{ id:"SR_v", label: "visite",value:"1beWOfA6DyHQS6-Kr9eZtG8i2io7Q4J9NquFgQyG-"}						
				 ] },
				 { id:"SS", label: "Sainte-Suzanne", items: [
                    { id:"SS_s", label: "sentier",value:"14tKW-WkeyvLupjFAoWXMbAgEa9--pO18c1Jnr_5j"},
                    {  id:"SS_md", label: "manger et dormir",value:"1CjnaMnc4aEFf3b9n498eqJaZKf9E3mndyDaF5PjG"},
					{ id:"SS_v", label: "visite",value:"1mw9EHc9TOcgbbTNijGTzw5zrCxXjisZuiqwMLnlw"}						
				 ] },
				 { id:"SG", label: "Saint-Gilles", items: [
                    { id:"SG_s", label: "sentier",value:"19ViFSzg0Auo8m31abL2z_9OUjBHImUR0PFx9pTro"},
                    {  id:"SG_md", label: "manger et dormir",value:"12undvS9IMnRnEeTYClqje8BFf7nQYlQvD0VJmlb4"},
					{ id:"SG_v", label: "visite",value:"1hMxXypHObu1TaGNVj6Hig_bgSG6FEx68w8p3psqa"},
					{ id:"SG_n", label: "nuit",value:"1NEArpXB8yKypvOY0FlhXeg_BC-3AbUUvQIvxVyfI"},
					{ id:"SG_a", label: "activité",value:"13Tj9i_c7p5qrbFYM5a6OXBgGIhxUetOh-DAIVpDC"}						
				 ] },
				 { id:"SJ", label: "Saint-Joseph", items: [
                    { id:"SJ_s", label: "sentier",value:"1CvxRIBwlkoJNRqRLe7F4OvWfp-xkDGU5edSq0ASl"},
                    {  id:"SJ_md", label: "manger et dormir",value:"1et5h1MbG_qX1K3iLNCTvQWS5_uj2vayNXSXwwXVU"},
					{ id:"SJ_v", label: "visite",value:"12F1H2X-rQrYMAyn3T4lEp7J6XkRig3C5MB1vV1nN"},
					{ id:"SJ_n", label: "nuit",value:"1mGP2D37TYcg7aKBRPuDLofmhIziluf9i-rnGf5wx"},
					{ id:"SJ_a", label: "activité",value:"1DnBh8sOLdiSlZlq4oLZkAH84JiLW4BQN0l2xdFxc"}						
				 ] },
				 { id:"SL", label: "Saint-Leu",  items: [
                    { id:"SL_s", label: "sentier",value:"11W_793Vb7vxwFp6vLsGV9n83by8wA0NJOD0_urIV"},
                    {  id:"SL_md", label: "manger et dormir",value:"1zurSKheMQdZ7cFgw5B7y3ihGUWXutuHHhsIonkhS"},
					{ id:"SL_v", label: "visite",checked:true,value:"1pXRpIDoonJjBECHhUEtKjcG_AmiRC43vnejF1UXq"},
					{ id:"SL_n", label: "nuit",value:"1teakmILV4AZcMznt3ihFWUbLAH1W1ILNYxpi6Tz8"},
					{ id:"SL_a", label: "activité",value:"1v6kmzTDGRK_q66oyNuyr0842W4drPkVFJjoMDaRH"}						
				 ] },
				 { id:"SLO", label: "Saint-Louis", items: [
                    { id:"SLO_s", label: "sentier",value:"1ESOd1qko4uxhvuUAltY5ZYMq00Ov_kqfpFl71FIO"},
                    {  id:"SLO_md", label: "manger et dormir",value:"1ETrdbfbNxfmKIGa7u6MC21igP8p16Hu8OvaM1ODL"},
					{ id:"SLO_v", label: "visite",value:"1wezhGcWJshrYRFFPdEUpnIWrHp6ggkrAjjNwNnAM"},
					{ id:"SLO_a", label: "activité",value:"1WQqAVJWl43bFI8l-3Sw6UMmxBlzgj-CvNo06T8tJ"}						
				 ] },
				 { id:"SPA", label: "Saint-Paul", items: [
                    { id:"SPA_s", label: "sentier",value:"105O9BV8SR2p9EiMbh7nr8W2I75p_lxEWc9yFeOea"},
                    {  id:"SPA_md", label: "manger et dormir",value:"1arbnu4e3HPRxM4ys0AZEvHGk6cAZjSEE0tHPE07R"},
					{ id:"SPA_v", label: "visite",value:"1cX2TaI47iZtEMnZIu2ZDPRUSllt6MxhgQ7SVxE2O"},
					{ id:"SPA_n", label: "nuit",value:"1uAUFKQbO3b4azglINq0byh6IMTt0tcsew-ZDhHVK"},
					{ id:"SPA_a", label: "activité",value:"1yvNIMDlSsqd6REMTpDqNBKabGeFft-kquWsWvPA1"}						
				 ] },
				 { id:"SPH", label: "Saint-Phillipe", items: [
                    { id:"SPH_s", label: "sentier",value:"1tk1Ncnn2rK7hh9uNag18vlksj_ZETxBqzxX6edbw"},
                    {  id:"SPH_md", label: "manger et dormir",value:"1tJJW6s2ELbV-cSIecvLroNt9u1pY_ExyTSxEsyDG"},
					{ id:"SPH_v", label: "visite",value:"1p3_0vNQxgdOQMXhkO6PWCzUoBD5XLVThjWcFzDrL"},
					{ id:"SPH_a", label: "activité",value:"136pTZ-NKGCp0d1jqeOBXKXJJmK3sdF51h6lhiiF5"}						
				 ] },
				 { id:"SPI", label: "Saint-Pierre", items: [
                    { id:"SPI_s", label: "sentier",value:"1hGzzznJSMFAvbAoDUWMJj13Z1u4Vlv7WnAOKrpTC"},
                    {  id:"SPI_md", label: "manger et dormir",value:"1SgbVz3eHKfSPWp9XNk5NWxvNP_ahskNvyjKLeRtZ"},
					{ id:"SPI_v", label: "visite",value:"1Gjgt4ZhaV4RgzAzE4VkzI06ZWTV_-v97WQIs_0jx"},
					{ id:"SPI_n", label: "nuit",value:"1jg739vX36Xn5o4jgy_CUko40GooVm-4RQCNb8IE8"},
					{ id:"SPI_a", label: "activité",value:"1bRyWWEF7wu5Zy6Rg5Qm_zGuMfKyQhlK11FrsA7XD"}						
				 ] },
				 { id:"S", label: "Salazie", items: [
                    { id:"S_s", label: "sentier",value:"166vivC3Sr59gCaQR98o8-9sXHBfnKiJdX5hH_7tz"},
                    {  id:"S_md", label: "manger et dormir",value:"1wOqplnMkWf_CHXezRZBC3HvMSf2lcKcnNzgUx8Jp"},
					{ id:"S_v", label: "visite",value:"1oWl8XUdryHiQxlg83t_pu6ERxi4PPOjrvx2Vbuhj"},
					{ id:"S_a", label: "activité",value:"1TjFpDyS3jwXAsLdAUL92BdcjM__2SLu71VDkkli_"}						
				 ] },
				 { id:"T", label: "Tampon", items: [
                    { id:"T_s", label: "sentier",value:"1vxnUDRqG5ZwScgpGxjcOHGY72Na_7ubVhw5meBJr"},
                    {  id:"T_md", label: "manger et dormir",value:"1Tetq4TXpTTgtp0lBEGx6GSjZnurzUt4CFXlKaiOB"},
					{ id:"T_v", label: "visite",value:"1RHM6iPa9admK-4DMQpOEv8cZ3Sx8cix5taZzWOs_"},
					{ id:"T_n", label: "nuit",value:"195dI4uyd_AKasWDtn4eTQz3v6gcKlgE55N9_1zwE"}	,
					{ id:"T_a", label: "activité",value:"1x-iqx3tCYREWFoCBzt8ezhx0uVeiXaqrm8o6_ZKU"}						
				 ] },
				 { id:"TB", label: "TroisBassins", items: [
                    { id:"TB_s", label: "sentier",value:"11YVBN4CqL6oLdASJEJ_lJ13WWNEJc6_yZxQrQeoZ"},
                    {  id:"TB_md", label: "manger et dormir",value:"1yBld8_oUcv_2Ccnqz7xV2dKo16xbYoqtbhjjQIIC"},
					{ id:"TB_v", label: "visite",value:"1KbxFddq2D4uo3RNMruBz17I266wO9OYjXpwQNxoS"},
					{ id:"TB_a", label: "activité",value:"1uzRedo3Qe9b4HZjHlgcDxReLo6r3udNWyBIaOM7L"}						
				 ] }
            ];
	$('#jqxTree').jqxTree({checkboxes: true, source: source, height: '300px', width: '300px' });
	$('#jqxTree').on('expand', function (event) {
		ptbid=new Array();
		bn=false;
                var args = event.args;
				var elmt = args.element;
                var item = $('#jqxTree').jqxTree('getItem',elmt );
				$('#jqxTree').jqxTree('selectItem', elmt);
					$('#jqxTree').jqxTree('refresh');
				var rplc='#'+item.id;
				$("#jqxTree").jqxTree('checkItem', $(rplc)[0], true)
				
				var elmSrce =schrrefifd(item.label);
				
					var items=elmSrce.items;
				for(var i in items)
					{
						rplc='#'+items[i].id;
						
						$("#jqxTree").jqxTree('checkItem', $(rplc)[0], true)
					}
					applysrch(item);
					MapsLib.doSearch();
					bn=true;
           });
    $('#jqxTree').on('collapse', function (event) {
	ptbid=new Array();
	bn=false;
                var args = event.args;
                var elmt = args.element;
                var item = $('#jqxTree').jqxTree('getItem',elmt );
				/*$('#jqxTree').jqxTree('selectItem', elmt);
					$('#jqxTree').jqxTree('refresh');*/
				var rplc='#'+item.id;
				$("#jqxTree").jqxTree('checkItem', $(rplc)[0], false)
				
				var elmSrce =schrrefifd(item.label);
				
					var items=elmSrce.items;
				for(var i in items)
					{
						rplc='#'+items[i].id;
						$("#jqxTree").jqxTree('checkItem', $(rplc)[0], false)
					}
					
					 items = $('#jqxTree').jqxTree('getCheckedItems')
				for(var i in items)
					{
						rplc='#'+items[i].id;
						$("#jqxTree").jqxTree('checkItem', $(rplc)[0], false)
					}
					ptbid=null;
					MapsLib.doSearch();
			bn=true;
            });
	$('#jqxTree').bind('select', function (event) {
			
                var htmlElement = event.args.element;
                var item = $('#jqxTree').jqxTree('getItem', htmlElement);
				
				
				
				if(!item.checked)
					{
					
						$("#jqxTree").jqxTree('checkItem', htmlElement, true);
					//clear check	
					}
				else{
					
						$("#jqxTree").jqxTree('checkItem', htmlElement, false);
					//check item
				}
				
					
            });
	$("#jqxTree").bind('checkChange', function (event) {
				var elmt=event.args.element;
				var item = $('#jqxTree').jqxTree('getItem',elmt );
				if(bn)
					applysrch();
			});
	applysrch=function(item)
	{
	
	var items = $('#jqxTree').jqxTree('getCheckedItems');
		
		for(var i in items)
			if(items[i]!=null)
				ptbid.push(items[i].value);
						
		
	}
	schrrefifd=function(lbprt)
	{
		for(var i=0; i<source.length;i++)
			if(source[i].label==lbprt)
				return source[i];
			
	}   
	
var MapsLib = MapsLib || {};
var MapsLib = {

  //Setup section - put your Fusion Table details here
  //Using the v1 Fusion Tables API. See https://developers.google.com/fusiontables/docs/v1/migration_guide for more info

  //MODIFY the encrypted Table IDs of your Fusion Tables (found under File => About)
  //NOTE: numeric IDs will be depricated soon
  fusionTableId:"https://www.google.com/fusiontables/embedviz?viz=GVIZ&t=TABLE&q=select+col0%2C+col1%2C+col2%2C+col3%2C+col4+from+1jKAPLk2NOAcc2NdZ1sixkH-Sim7LAQwLAvGJgKLt&containerId=googft-gviz-canvas", //Point data layer
  
  polygonTableID:[], //Outline map layer of CT town boundaries
  polygon: new Array(),

  //*MODIFY Fusion Tables Requirement* API key. found at https://code.google.com/apis/console/
  //*Important* this key is for demonstration purposes. please register your own.
  googleApiKey:       "AIzaSyBT0oZNxCp8JSSQwaG0gq1U-MLIMF30bL4",

  //MODIFY name of the location column in your Fusion Table.
  //NOTE: if your location column name has spaces in it, surround it with single quotes
  //example: locationColumn:     "'my location'",
  //if your Fusion Table has two-column lat/lng data, see https://support.google.com/fusiontables/answer/175922
  locationColumn:     "lat",

  map_centroid:       new google.maps.LatLng(-21.137472,55.546906), //center that your map defaults to
  locationScope:      "reunion",      //geographical area appended to all address searches
  recordName:         "result",       //for showing number of results
  recordNamePlural:   "results",

  searchRadius:       805,            //in meters ~ 1/2 mile
  defaultZoom:        10,             //zoom level when map is loaded (bigger is more zoomed in)
  addrMarkerImage:    'images/blue-pushpin.png',
  currentPinpoint:    null,

  initialize: function() {
    $( "#result_count" ).html("");

    geocoder = new google.maps.Geocoder();
    var myOptions = {
      zoom: MapsLib.defaultZoom,
      center: MapsLib.map_centroid,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styleId: 2,
	  templateId: 1
    };
    map = new google.maps.Map($("#map_canvas")[0],myOptions);

    // maintains map centerpoint for responsive design
   /* google.maps.event.addDomListener(map, 'idle', function() {
        MapsLib.calculateCenter();
    });*/

       
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(MapsLib.map_centroid);
    });

    MapsLib.searchrecords = null;

    $("#search_address").val(MapsLib.convertToPlainString($.address.parameter('address')));
    
    MapsLib.doSearch();
  },

  doSearch: function(location) {
	MapsLib.clearSearch();
  
	MapsLib.polygonTableID=ptbid;
    MapsLib.polygon=new Array();
	try{
	for(var i=0; i<MapsLib.polygonTableID.length; i++)
		{
			
			MapsLib.polygon.push(
				new google.maps.FusionTablesLayer({
				  query: {
					from:   MapsLib.polygonTableID[i],
					select: "geometry"
				  }
				}));
			MapsLib.polygon[i].setMap(map);	
		}
		}catch( ex)
		{
			;
		}
		
	},
	
  addrFromLatLng: function(latLngPoint) {
    geocoder.geocode({'latLng': latLngPoint}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[1]) {
          $('#search_address').val(results[1].formatted_address);
          $('.hint').focus();
          MapsLib.doSearch();
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }
    });
  },

  drawSearchRadiusCircle: function(point) {
      var circleOptions = {
        strokeColor: "#4b58a6",
        strokeOpacity: 0.3,
        strokeWeight: 1,
        fillColor: "#4b58a6",
        fillOpacity: 0.05,
        map: map,
        center: point,
        clickable: false,
        zIndex: -1,
        radius: parseInt(MapsLib.searchRadius)
      };
      MapsLib.searchRadiusCircle = new google.maps.Circle(circleOptions);
  },

  

  handleError: function(json) {
    if (json["error"] != undefined) {
      var error = json["error"]["errors"]
      console.log("Error in Fusion Table call!");
      for (var row in error) {
        console.log(" Domain: " + error[row]["domain"]);
        console.log(" Reason: " + error[row]["reason"]);
        console.log(" Message: " + error[row]["message"]);
      }
    }
  },

  getCount: function(whereClause) {
    var selectColumns = "Count()";
    MapsLib.query(selectColumns, whereClause,"", "", "", "MapsLib.displaySearchCount");
  },

  displaySearchCount: function(json) {
    MapsLib.handleError(json);
    var numRows = 0;
    if (json["rows"] != null)
      numRows = json["rows"][0];

    var name = MapsLib.recordNamePlural;
    if (numRows == 1)
    name = MapsLib.recordName;
    $( "#result_box" ).fadeOut(function() {
        $( "#result_count" ).html(MapsLib.addCommas(numRows) + " " + name + " found");
      });
    $( "#result_box" ).fadeIn();
  },

  getList: function(whereClause) {
    // select specific columns from the fusion table to display in th list
    // NOTE: we'll be referencing these by their index (0 = School, 1 = GradeLevels, etc), so order matters!
    var selectColumns = "id, nom, adresse, description, geometry, lat, lng";
    MapsLib.query(selectColumns, whereClause,"", "", 500, "MapsLib.displayList");
  },

  displayList: function(json) {
    MapsLib.handleError(json);
    var columns = json["columns"];
    var rows = json["rows"];
    var template = "";

    var results = $("#listview");
    results.empty(); //hide the existing list and empty it out first

    if (rows == null) {
      //clear results list
      results.append("<span class='lead'>No results found</span>");
      }
    else {

      //set table headers
      var list_table = "\
      <table class='table' id ='list_table'>\
        <thead>\
          <tr>\
            <th>School</th>\
            <th>Grades&nbsp;&nbsp;</th>\
            <th>Address</th>\
            <th>Manager</th>\
            <th>Gain</th>\
          </tr>\
        </thead>\
        <tbody>";

      // based on the columns we selected in getList()
      // rows[row][0] = id
      // rows[row][1] = nom
      // rows[row][2] = adresse
      // rows[row][3] = description
      // rows[row][4] = geometry
      // rows[row][5] = lat
      // rows[row][6] = lng
      

      for (var row in rows) {

        var school = "<a href='" + rows[row][5] + "'>" + rows[row][0] + "</a>";
        var address = rows[row][2] + "<br />" + rows[row][3] + ", " + rows[row][4];

        list_table += "\
          <tr>\
            <td>" + school + "</td>\
            <td>" + rows[row][1] + "</td>\
            <td>" + address + "</td>\
            <td>" + rows[row][6] + "</td>\
            <td><span data-value='" + rows[row][7] + "'><img src='" + rows[row][8] + "' /></span></td>\
          </tr>";
      }

      list_table += "\
          </tbody>\
        </table>";

      // add the table to the page
      results.append(list_table);
      
      // init datatable
      // once we have our table put together and added to the page, we need to initialize DataTables
      // reference: http://datatables.net/examples/index

      // custom sorting functions defined in js/jquery.dataTables.sorting.js
      // custom Bootstrap styles for pagination defined in css/dataTables.bootstrap.css

      $("#list_table").dataTable({
          "aaSorting": [[0, "asc"]], //default column to sort by (School)
          "aoColumns": [ // tells DataTables how to perform sorting for each column
              { "sType": "html-string" }, //School name with HTML for the link, which we want to ignore
              null, // Grades - default text sorting
              null, // Address - default text sorting
              null, // Manager - default text sorting
              { "sType": "data-value-num" } // Gain - sort by a hidden data-value attribute
          ],
          "bFilter": false, // disable search box since we already have our own
          "bInfo": false, // disables results count - we already do this too
          "bPaginate": true, // enables pagination
          "sPaginationType": "bootstrap", // custom CSS for pagination in Bootstrap
          "bAutoWidth": false
      });
    }
   },


  addCommas: function(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  },

  // maintains map centerpoint for responsive design
  calculateCenter: function() {
    center = map.getCenter();
  
              var bounds = new google.maps.LatLngBounds();
              map.data.forEach(function(feature) {
            //    MapsLib.processPoints(feature.getGeometry(), bounds.extend, bounds);
              });
             // map.fitBounds(bounds);
  },
	processPoints: function (geometry, callback, thisArg) {
              if (geometry instanceof google.maps.LatLng) {
                callback.call(thisArg, geometry);
              } else if (geometry instanceof google.maps.Data.Point) {
                callback.call(thisArg, geometry.get());
              } else {
                geometry.getArray().forEach(function(g) {
                  processPoints(g, callback, thisArg);
                });
              }
  },

  clearSearch: function() {
   MapsLib.polygonTableID=null;
	for(var i=0;i<MapsLib.polygon.length;i++)
		if (MapsLib.polygon[i] != null)
			{
				MapsLib.polygon[i].setMap(null);
				MapsLib.polygon[i]=null;
			}
    
  },
  
  //converts a slug or query string in to readable text
  convertToPlainString: function(text) {
    if (text == undefined) return '';
  	return decodeURIComponent(text);
  }
  
  //-----custom functions-------
  // NOTE: if you add custom functions, make sure to append each one with a comma, except for the last one.
  // This also applies to the convertToPlainString function above
  
  //-----end of custom functions-------
}
