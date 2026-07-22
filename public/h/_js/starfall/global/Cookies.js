var Cookies = {
	
	cookiesValues:{},
	
	cookiesLoaded:false,
	
	init: function() {
		var xhr = new XMLHttpRequest();
		xhr.addEventListener('load', transferComplete);
		xhr.addEventListener('error', transferFailed);
		xhr.open('GET', '/h/readcookies.php?json=1&'+Math.random().toString().substr(2, 6));
		xhr.send();
		
		function transferComplete(evt) {
			var __str = decodeURIComponent(evt.target.responseText);
			if (__str) Cookies.cookiesValues = JSON.parse(__str);
			Cookies.cookiesLoaded = true;
		}

		function transferFailed(evt) {
			Cookies.cookiesLoaded = true;
			console.log('An error occurred while transferring the file.');
		}
	},

	setCookieValue: function(c, v) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', '/h/writecookies.php?'+c+'='+v+'&days=365&'+Math.random().toString().substr(2, 6));
		xhr.send();
	},
	
	getLocalCookies: function() {
		var cookiesLocal = {};
		decodeURIComponent(document.cookie).split("; ").map(function(v){
			var s = v.split("=");
			cookiesLocal[s[0]] = s[1];
		});
		return cookiesLocal;
	},
	
	setLocalCookie: function(c,v,setDomain) {
       	var d = new Date();
		var exdays = (v == '-') ? -364:364;
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		var __domain = (setDomain) ? 'domain=starfall.com':'';
		document.cookie = c + "=" + v + ";" + expires + ";path=/;" + __domain;
    },

	setLocalItem: function(c,v) {
		window.localStorage.setItem(c, JSON.stringify(v));
	},

	getLocalItem: function(c) {
		return JSON.parse(window.localStorage.getItem(c));
	},

	removeLocalItem: function (c) {
		window.localStorage.removeItem(c);
	}
}