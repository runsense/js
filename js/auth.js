$.urlParam=function(name){var results=new RegExp('[\?&]'+name+'=([^&#]*)').exec(window.location.href);try{return results[1]||0;}catch(e){return null;}};
var FcTA=FcTA||{};var FcTA={
		prmt:['env','folder','style','nom','vid'],
		CLIENT_ID:'509253366175-jge7lbsp8q2qsjej2mfk3u315t1mprta.apps.googleusercontent.com',
		SCOPES:['https://www.googleapis.com/auth/drive'],
		checkAuth:function(){gapi.auth.authorize({'client_id':FcTA.CLIENT_ID,'scope':FcTA.SCOPES.join(' '),'immediate':false},FcTA.handleAuthResult);},
		handleAuthResult:function(authResult){var authorizeDiv=document.getElementById('authorize-div');if(authResult && !authResult.error){
			var prmt=[$.urlParam('env'),$.urlParam('sryle'),$.urlParam('nom'),$.urlParam('vid')];authorizeDiv.style.display='none';FcTA.callScriptErr(prmt);}else{authorizeDiv.style.display='inline';}FcTA.callScriptErr(prmt);},
		handleAuthClick:function(event){gapi.auth.authorize({client_id:CLIENT_ID,scope:FcTA.SCOPES,immediate:false},FcTA.handleAuthResult);return false;},
		callScriptErr:function(){var scriptId="1wpIl6YCi_miuJlHHTprpVC36bOEFOuYdPlre6DsJWC9q4n_0luSdZup1";var request={'function':'apiCalls','parameters':[FcTA.prmt]};var op=gapi.client.request({'root':'https://script.googleapis.com','path':'v1/scripts/'+scriptId+':run','method':'POST','body':request});op.execute(function(resp){if(resp.error&&resp.error.status){FcTA.appendPre('Error calling API:');FcTA.appendPre(JSON.stringify(resp, null, 2));}else if(resp.error){var error=resp.error.details[0];FcTA.appendPre('Script error message:'+error.errorMessage);if(error.scriptStackTraceElements){FcTA.appendPre('Script error stacktrace:');for(var i=0;i<error.scriptStackTraceElements.length;i++){var trace=error.scriptStackTraceElements[i];FcTA.appendPre('\t'+trace.function+':'+trace.lineNumber);}}}else{var rslt=resp.response.result;FcTA.appendPre('error is send \n'+rslt);}
		alert(rslt);
		});},
		appendPre:function(message){var pre=document.getElementById('output');var textContent=document.createTextNode(message+'\n');pre.appendChild(textContent);}
	};