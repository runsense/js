$.urlParam=function(name){var results=new RegExp('[\?&]'+name+'=([^&#]*)').exec(window.location.href);try{return results[1]||0;}catch(e){return null;}};
/*var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://runsense.au.auth0.com/oauth/token",
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "processData": false,
  "data": "{\"grant_type\":\"client_credentials\",\"client_id\": \"kpDDBx1p1Kbl9cBnb6Ews4bvU2S6uDPV\",\"client_secret\": \"hoUWxmgBGCtvk58w4LO8-jWylQiVBQipa9Eot-o2zHmMWdMYb5yYlILyDTf8kGs0\",\"audience\": \"YOUR_API_IDENTIFIER\"}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});*/
//aws
//get credential


var lock =new Auth0Lock('kpDDBx1p1Kbl9cBnb6Ews4bvU2S6uDPV', 'runsense.au.auth0.com',{
        auth: {
          redirectUrl: 'http://runsense.Re/runBuy.html',
          responseType: 'token',
          params: {scope: 'openid'}
        }
    });
	
AWS.config.region = 'ap-southeast-2'; // Region

var btn_login = document.getElementById('btn-login');

btn_login.addEventListener('click', function() {
  lock.show({auth: {params: {state: 'credAct'}}});
});

lock.on("authenticated", function(authResult) {
  lock.getProfile(authResult.idToken, function(error, profile) {
    if (error) {
      // Handle error
	  alert("error"+error);
      return;
    }
	alert('id_token'+authResult.idToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("accessToken", authResult.accessToken);
    localStorage.setItem("profile", JSON.stringify(profile));
		alert("JSON.stringify(profile"+JSON.stringify(profile);
		credAct(authResult.idToken);
  });
});

//identityId = credentialsProvider.getIdentityId();
credAct=function(tok){
	AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-southeast-2:65b3cce2-eb19-42f5-a2af-28e031162916',

	  IdentityId: 'runBuilt-at-770434513982',

	  // optional, only necessary when the identity pool is not configured
	  // to use IAM roles in the Amazon Cognito Console
	  // See the RoleArn param for AWS.STS.assumeRoleWithWebIdentity (linked below)
	  RoleArn: 'arn:aws:cognito-identity:ap-southeast-2:770434513982:identitypool/ap-southeast-2:65b3cce2-eb19-42f5-a2af-28e031162916',
		Logins: {
		'runsense.au.auth0.com':tok
	 }
	});
	//save user data
	/*AWS.config.credentials.get(function(){

	   var syncClient = new AWS.CognitoSyncManager();

	   syncClient.openOrCreateDataset('myDataset', function(err, dataset) {

		  dataset.put('myKey', 'myValue', function(err, record){

			 dataset.synchronize({

				onSuccess: function(data, newRecords) {
					// Your handler code here
				}

			 });

		  });

	   });

	});*/
	F.srch('sizzla',A.mag(A.m),tok);//$.urlParam('tx')
}


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
srch:function(query,mkp,tok){
	A.tx=query;
	F.query='AWSAccessKeyId='+A.ak+'&AssociateTag=mixyoutube-21&Keywords=sizzla&Operation=ItemSearch&SearchIndex=Music&Service=AWSECommerceService&Timestamp='+A.dt.replace(/:/g,'%3A')+'&Version=2011-08-01';
	F.query=F.query.split(/&/g).sort().join('&');
	console.log(F.query);
    hash_data = ['GET',mkp, '/onca/xml', F.query].join("\n");
	console.log(hash_data);
    var hmac=F.hmac_(hash_data,  A.s);
    var sign=hmac.toString(CryptoJS.enc.Base64);
	sign=sign.replace(/\+/g,'%2B').replace(/=/g,'%3D');
    console.log("js_sign="+sign);	
	window.open('http://'+mkp+'/onca/xml?'+F.query+'&Signature='+sign);
	$.ajaxSetup({
		
		 xhrFields: { withCredentials: true },
		beforeSend: function (xhr) {
			xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://'+mkp+'/onca/xml');
			return true;
		},
		cache: false
	});
	
	$.ajax({
		url:'http://'+mkp+'/onca/xml?'+F.query+'&Signature='+tok,method:'get',
		dataType: 'jsonp',
		success:F.load,cache: false,
		error: function( xhr, textStatus, errorThrown ){
			alert('status'+xhr.status);
			alert('responseText'+xhr.responseText);
			}
	});
	/*var xhr = new XMLHttpRequest();
	
	xhr.open("GET", 'http://'+mkp+'/onca/xml?'+F.query+'&Signature='+sign, false);
	xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://'+mkp+'/onca/xml');
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	xhr.withCredentials = true;
	xhr.onload = function () {
		console.log(xhr.responseText);
	};
	xhr.send();*/
	},
hmac_:function(m,secret) {
	m=CryptoJS.HmacSHA256(m,secret);
		return /*CryptoJS.enc.Utf8.parse(m)*/m;
	},
load:function(data){
	alert('data'+data);
	$('#'+A.m).append(data);
},
ini:function(j){
	try{F.handleError(j);}catch(e){;}
	var d=j["rows"];
	A.ak=d[0][0];
	A.s=d[0][1];
	//F.srch('sizzla',A.mag(A.m));},
handleError:function(json){
if(json["error"]){console.log("Error in Fusion Table call!"),$.each(json["error"]["errors"],function(){console.log("Domain: "+this["domain"]),console.log(" Reason: "+this["reason"]),console.log(" Message: "+this["message"]);});}}

}

/*AWS.config.region = 'eu-west-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-southeast-2_hSsMeO3aN',
});

AWS.config.credentials = new AWS.CognitoIdentityCredentials({

  // either IdentityPoolId or IdentityId is required
  // See the IdentityPoolId param for AWS.CognitoIdentity.getID (linked below)
  // See the IdentityId param for AWS.CognitoIdentity.getCredentialsForIdentity
  // or AWS.CognitoIdentity.getOpenIdToken (linked below)
  IdentityPoolId: 'ap-southeast-2_hSsMeO3aN',
  IdentityId: 'runBuilt-at-770434513982',

  // optional, only necessary when the identity pool is not configured
  // to use IAM roles in the Amazon Cognito Console
  // See the RoleArn param for AWS.STS.assumeRoleWithWebIdentity (linked below)
  RoleArn: 'ap-southeast-2:770434513982:userpool/ap-southeast-2_hSsMeO3aN',

  // optional tokens, used for authenticated login
  // See the Logins param for AWS.CognitoIdentity.getID (linked below)
  Logins: {
    'graph.facebook.com': '1005602452901877',
    'www.amazon.com': 'ap-southeast-2:770434513982:userpool/ap-southeast-2_hSsMeO3aN',
    'accounts.google.com': '232001220597-91re5t8ohocrm15ladqhh8j2kqpj5aaj.apps.googleusercontent.com',
    'api.twitter.com': 'TWITTERTOKEN',
    'www.digits.com': 'DIGITSTOKEN'
  },

  // optional name, defaults to web-identity
  // See the RoleSessionName param for AWS.STS.assumeRoleWithWebIdentity (linked below)
  RoleSessionName: 'web',

  // optional, only necessary when application runs in a browser
  // and multiple users are signed in at once, used for caching
 // LoginId: 'example@gmail.com'

}, {
   // optionally provide configuration to apply to the underlying service clients
   // if configuration is not provided, then configuration will be pulled from AWS.config

   // region should match the region your identity pool is located in
   region: 'eu-west-1',

   // specify timeout options
   httpOptions: {
     timeout: 100
   }
});*/

FB.getLoginStatus(function(res) {
     if (res.status === 'connected') {
		console.log('Logged in.');
	  }
	  else {
		FB.login();
	  }
});
FB.ui(
 {
  method: 'share',
  href: 'https://developers.facebook.com/docs/'
}, function(res){});


$.ajax({url:'https://www.googleapis.com/fusiontables/v1/query?sql=SELECT nm,val FROM 1gUR93lfPRWJSNTnp0PmoYZzE7Hxpiurd7s0NXLjb&callback=F.ini&key=AIzaSyBGz-WlLTXCzhyqVkz-6N0QZQCV_HD7jdc',
dataType:'jsonp'});



/*FB.login(function(response) {
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

 

$access_token = $_REQUEST['access_token'];
  $graph_url = 'https://graph.facebook.com/oauth/access_token_info?'
      . 'client_id=YOUR_APP_ID&amp;access_token=' . $access_token;
  $access_token_info = json_decode(file_get_contents($graph_url));

  dothis();*/