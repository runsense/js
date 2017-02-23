$.urlParam=function(name){var results=new RegExp('[\?&]'+name+'=([^&#]*)').exec(window.location.href);try{return results[1]||0;}catch(e){return null;}};
var A=A||{};
var A={ak:'AKIAIY7CLRS7CJX5X5YA',
id:'',
m:'FR',
dt:new Date().toISOString(),
mag:function(m){return m=='BR'?'http://webservices.amazon.com.br/onca/xml':m=='bCA'?'http://webservices.amazon.ca/onca/xml':m=='CN'?'http://webservices.amazon.cn/onca/xml':m=='DE'?'http://webservices.amazon.de/onca/xml':m=='ES'?'http://webservices.amazon.es/onca/xml':m=='FR'?'http://webservices.amazon.fr/onca/xml':m=='IN'?'http://webservices.amazon.in/onca/xml':m=='IT'?'http://webservices.amazon.it/onca/xml':m=='JP'?'http://webservices.amazon.co.jp/onca/xml':m=='MX'?'http://webservices.amazon.com.mx/onca/xml':m=='UK'?'http://webservices.amazon.co.uk/onca/xml':m=='US'?'http://webservices.amazon.com/onca/xml':'';
},
itmFc:{a:'ItemSearch',b:'SimilarityLookup',c:'ItemLookup'},
srcEng:{a:'SearchIndex=Music&Keywords=',b:'&ItemId='},
tx:'sizzla'};
var F=F||{};
var F={
query:'Service=AWSECommerceService&Operation='+A.itmFc.a+
'&AWSAccessKeyId='+A.ak+'&AssociateTag=runbuy09-21&'+
A.srcEng.a+A.tx+'&Sort=price&ResponseGroup=Accessories%2CImages%2CItemAttributes&Timestamp='+A.dt.replace(/:/g,'%3A'),
srch:function(query,mkp){
	A.tx=query;
	F.query='Service=AWSECommerceService&AWSAccessKeyId=AKIAIY7CLRS7CJX5X5YA&AssociateTag=runbuy09-21&Operation=ItemSearch&SearchIndex=Music&Keywords=sizzla&Timestamp='+A.dt.replace(/:/g,'%3A');
	var pv=F.query.split(/&/g).sort().join('&');
	console.log(F.query);
	console.log(pv);
    hash_data = ['GET',mkp, '/onca/xml', pv].join("\n")
    secret ='kS0iNAmbNBFAs+QJaytfhUwR08mP1wgyjQtWRBDT';
    var hmac=F.hmac_(hash_data, secret);
    var sign=hmac.toString(CryptoJS.enc.Base64);
	sign=sign.replace(/\+/g,'%2B').replace(/=/g,'%3D');
    console.log("js_sign="+sign);	
	window.open(mkp+'?'+F.query+'&Signature='+sign);
	$.ajaxSetup({
	headers:{   
		'Access-Control-Allow-Origin: *':mkp
	  }
	});
	
$.ajax({url:mkp+'?'+F.query+'&Signature='+sign,
	success:F.load});
	},
hmac_:function(m,secret) {
	m=CryptoJS.HmacSHA256(m,secret);
		return /*CryptoJS.enc.Utf8.parse(m)*/m;
	},
load:function(data,statut,xhr){
	alert(data);
	$('#'+A.m).append(data);
}
}

F.srch('sizzla',A.mag(A.m));
//F.srch($.urlParam('tx'),A.mag(A.m));



