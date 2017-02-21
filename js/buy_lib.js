$.urlParam=function(name){var results=new RegExp('[\?&]'+name+'=([^&#]*)').exec(window.location.href);try{return results[1]||0;}catch(e){return null;}};
var A=A||{};
var A={ak:'AKIAI5LRTOJW7RFXOMEA',
id:'',
m:'FR',
dt:new Date().toISOString(),
mag:function(m){switch(m){case 'BR':return 'http://webservices.amazon.com.br/onca/xml';case 'bCA':return 'http://webservices.amazon.ca/onca/xml';
case 'CN':return 'http://webservices.amazon.cn';
case 'DE':return 'http://webservices.amazon.de';
case 'ES':return 'http://webservices.amazon.es';
case 'FR':return 'http://webservices.amazon.fr';
case 'IN':return 'http://webservices.amazon.in';
case 'IT':return 'http://webservices.amazon.it';
case 'JP':return 'http://webservices.amazon.co.jp';
case 'MX':return 'http://webservices.amazon.com.mx';
case 'UK':return 'http://webservices.amazon.co.uk';
case 'US':return 'http://webservices.amazon.com';
default:break;}},
itmFc:{a:'ItemSearch',b:'SimilarityLookup',c:'ItemLookup'},
srcEng:{a:'SearchIndex=FashionMen&Keywords=',b:'&ItemId='},
tx:'reunion'};
var F=F||{};
var F={
query:'AWSAccessKeyId='+A.ak+'&AssociateTag=rICB9qNUTtahGA0+H+7qozsF+koYLE2g7u+hyRSA&'+A.srcEng.a+A.tx+'&Sort=price&Keywords='+A.tx+'&ResponseGroup=Accessories%2CImages%2CItemAttributes&Timestamp='+A.dt.replace(/:/g,'%3A'),
srch:function(query,mkp) {
    hash_data = ['GET',mkp, '/onca/xml', query].join("\n")
    secret = "xfKMIJlIqrwNSRtYX+a7MrPw8wQh/cWBQq+rABEX"
    hmac=F.hmac_(hash_data, secret);
    var sign=$.base64.encode(hmac);
    console.log("js_sign="+sign);	
	alert(mkp+'?Service=AWSECommerceService&Operation='+A.itmFc.a+'&'+F.query+'&Signature='+sign);
	$.ajaxSetup({
	headers:{   
		'Access-Control-Allow-Origin: *':mkp
	  }
	});
$.ajax({url:mkp+'?Service=AWSECommerceService&Operation='+A.itmFc.a+'&'+F.query+'&Signature='+sign,
	success:F.load});
	},
hmac_:function(message,secret) {
		var newHMAC=CryptoJS.HmacSHA256(message,secret);
		return newHMAC;
	},
load:function(data,statut,xhr){
	alert(data);
	$('#'+A.m).append(data);
}
}

F.srch($.urlParam('tx'),A.mag(A.m));




