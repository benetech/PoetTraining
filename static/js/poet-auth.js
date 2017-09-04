// Operations when the web page is loaded.
function onLoad() {
	var i, items, tabs;
	items = document.getElementsByClassName("tab-pane");
	for (i = 0; i < items.length; i++) {
		items[i].style.display = 'none';
	}
	//document.getElementById("statusNotAuth").style.display = 'block';
	//document.getElementById("statusAuth").style.display = 'none';
	// Initiatlize CognitoAuth object
	var auth = initCognitoSDK();
	document.getElementById("signInButton").addEventListener("click", function() {
		userButton(auth);
	});
	var curUrl = window.location.href;
	auth.parseCognitoWebResponse(curUrl);
}

// Initialize a cognito auth object.
function initCognitoSDK() {
	var authData = {
		ClientId : '4rmj6darifjq1gu3rl9r370nvl', // Your client id here
		AppWebDomain : 'poet-qa.auth.us-east-1.amazoncognito.com',
		TokenScopesArray : ['openid'],
		RedirectUriSignIn : 'https://poet-qa.diagramcenter.org',
		RedirectUriSignOut : 'https://poet-qa.diagramcenter.org'
	};
	var auth = new AWSCognito.CognitoIdentityServiceProvider.CognitoAuth(authData);
	auth.userhandler = {
		//onSuccess: <TODO: your onSuccess callback here>,
		//onFailure: <TODO: your onFailure callback here>
		onSuccess: function(result) {
			alert("Sign in success");
			showSignedIn(result);
		},
		onFailure: function(err) {
			alert("Error!" + err);
		}
	};
	// The default response_type is "token", uncomment the next line will make it be "code".
	// auth.useCodeGrantFlow();
	return auth;
}

// Perform user operations.
function userButton(auth) {
	var state = document.getElementById('signInButton').innerHTML;
	if (state === "Sign Out") {
		document.getElementById("signInButton").innerHTML = "Sign In";
		auth.signOut();
		showSignedOut();
	} else {
		auth.getSession();
	}
}

// Operations when signed in.
function showSignedIn(session) {
	//document.getElementById("statusNotAuth").style.display = 'none';
	//document.getElementById("statusAuth").style.display = 'block';
	document.getElementById("signInButton").innerHTML = "Sign Out";
	if (session) {
		var idToken = session.getIdToken().getJwtToken();
		if (idToken) {
			var payload = idToken.split('.')[1];
			var formatted = JSON.stringify(atob(payload), null, 4);
			//document.getElementById('idtoken').innerHTML = formatted;
		}
		var accToken = session.getAccessToken().getJwtToken();
		if (accToken) {
			var payload = accToken.split('.')[1];
			var formatted = JSON.stringify(atob(payload), null, 4);
			//document.getElementById('acctoken').innerHTML = formatted;
		}
		var refToken = session.getRefreshToken().getToken();
		if (refToken) {
			//document.getElementById('reftoken').innerHTML = refToken.substring(1, 20);
		}
	}
	//openTab("userdetails");
}

// Operations when signed out.
function showSignedOut() {
	//document.getElementById("statusNotAuth").style.display = 'block';
	//document.getElementById("statusAuth").style.display = 'none';
	//document.getElementById('idtoken').innerHTML = " ... ";
	//document.getElementById('acctoken').innerHTML = " ... ";
	//document.getElementById('reftoken').innerHTML = " ... ";
	//closeTab("userdetails");
}