$.urlParam=function(name){var results=new RegExp('[\?&]'+name+'=([^&#]*)').exec(window.location.href);try{return results[1]||0;}catch(e){return null;}};

var A=A||{};
var A={ak:'',
s:'',
id:'',
m:'FR',
dt:new Date().toISOString(),

mag:function(m){return m=='BR'?'webservices.amazon.com.br':m=='bCA'?'webservices.amazon.ca':m=='CN'?'webservices.amazon.cn':m=='DE'?'webservices.amazon.de':m=='ES'?'webservices.amazon.es':m=='FR'?'webservices.amazon.fr':m=='IN'?'webservices.amazon.in':m=='IT'?'webservices.amazon.it':m=='JP'?'webservices.amazon.co.jp':m=='MX'?'webservices.amazon.com.mx':m=='UK'?'webservices.amazon.co.uk':m=='US'?'webservices.amazon.com':'';
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
	F.query='AWSAccessKeyId='+A.ak+'&AssociateTag=mixyoutube-21&Keywords=sizzla&Operation=ItemSearch&SearchIndex=Music&Service=AWSECommerceService&Timestamp='+A.dt.replace(/:/g,'%3A')+'&Version=2011-08-01';
	F.query=F.query.split(/&/g).sort().join('&');
	console.log(F.query);
    hash_data = ['GET',mkp, '/onca/xml', F.query].join("\n");
    //A.s ='cwG+fEW+2Ju8D+Mli7/cp3ADL+YLNeTBwb0/IMvE';
	console.log(hash_data);
    var hmac=F.hmac_(hash_data,  A.s);
    var sign=hmac.toString(CryptoJS.enc.Base64);
	sign=sign.replace(/\+/g,'%2B').replace(/=/g,'%3D');
    console.log("js_sign="+sign);	
	window.open('http://'+mkp+'/onca/xml?'+F.query+'&Signature='+sign);
	$.ajaxSetup({
		headers:{   
			'Access-Control-Allow-Origin':'*'
		  },
		 xhrFields: { withCredentials: false },
		beforeSend: function (xhr) {
			xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://'+mkp+'/onca/xml');
			return true;
		},
		cache: false
	});
	
	$.ajax({url:'http://'+mkp+'/onca/xml?'+F.query+'&Signature='+sign,method:'get',dataType: 'jsonp',
		success:F.load,cache: false,
		 error: function( jqXhr, textStatus, errorThrown ){
			   alert( jqXhr ); alert( textStatus );alert( errorThrown );
			}
	});
	var xhr = new XMLHttpRequest();
	
	xhr.open("GET", 'http://'+mkp+'/onca/xml?'+F.query+'&Signature='+sign, false);
	xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://'+mkp+'/onca/xml');
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	xhr.withCredentials = false;
	xhr.onload = function () {
		console.log(xhr.responseText);
	};
	xhr.send();
	},
hmac_:function(m,secret) {
	m=CryptoJS.HmacSHA256(m,secret);
		return /*CryptoJS.enc.Utf8.parse(m)*/m;
	},
load:function(data){
	alert(data); ;
	$('#'+A.m).append(data);
},
ini:function(j){
	try{F.handleError(j);}catch(e){;}
	var d=j["rows"];
	A.ak=d[0][0];
	A.s=d[0][1];
	F.srch('sizzla',A.mag(A.m));},
handleError:function(json){
if(json["error"]){console.log("Error in Fusion Table call!"),$.each(json["error"]["errors"],function(){console.log("Domain: "+this["domain"]),console.log(" Reason: "+this["reason"]),console.log(" Message: "+this["message"]);});}}

}

FB.getLoginStatus(function(res) {
     if (res.status === 'connected') {
		console.log('Logged in.');
	  }
	  else {
		FB.login();
	  }
	  alert(res.getAuthResponse);
});
FB.ui(
 {
  method: 'share',
  href: 'https://developers.facebook.com/docs/'
}, function(res){});


$.ajax({url:'https://www.googleapis.com/fusiontables/v1/query?sql=SELECT nm,val FROM 1gUR93lfPRWJSNTnp0PmoYZzE7Hxpiurd7s0NXLjb&callback=F.ini&key=AIzaSyBGz-WlLTXCzhyqVkz-6N0QZQCV_HD7jdc',
dataType:'jsonp'});
 alert(FB.getAuthResponse());
F.srch($.urlParam('tx'),A.mag(A.m));


FB.login(function(response) {
  alert('log'+response.status);
}, { auth_type: 'reauthenticate' })

function checkNonce(access_token) {
  $.post('checkNonce.php', {access_token: access_token}, function(data) {
    if (data == 1) {
      alert('The user has been successfully re-authenticated.');
      FB.api('/me', function(response) {
  alert('Good to see you, ' + response.name + '.');
});
    } else {
      alert('The nonce has been used before. Re-authentication failed.');
    }
  });
};

 

/* $access_token = $_REQUEST['access_token'];
  $graph_url = 'https://graph.facebook.com/oauth/access_token_info?'
      . 'client_id=YOUR_APP_ID&amp;access_token=' . $access_token;
  $access_token_info = json_decode(file_get_contents($graph_url));

  dothis();*/