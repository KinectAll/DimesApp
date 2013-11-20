var auth = {
    consumerKey: "XCmTmtrHFWcCxe_eHqbrSg",
    consumerSecret: "4Pgr2N0T3TxaJmclAlfxJY_HctE",
    accessToken: "_dFu9oUPxao8P09kp4pPJhu6x7VY8MOD",
    // This example is a proof of concept, for how to use the Yelp v2 API with javascript.
    // You wouldn't actually want to expose your access token secret like this in a real application.
    accessTokenSecret: "m1eZk0DHq_IF1X5Hif9DNzs0o8M",
    serviceProvider: {
	signatureMethod: "HMAC-SHA1"
    }
};
var Geo = {};

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
}

//If we are able to get the latitude and the longitude from the browser/device;
function success(position) {
    Geo.lat = position.coords.latitude;
    Geo.lng = position.coords.longitude;
    var latitude = Geo.lat.toString();
    var longitude = Geo.lng.toString();
    //PASS THIS TO THE BACK END
    var latLng = latitude + "," + longitude;

    //yelp search terms
    var terms = 'clothes';
    //yelp search location
    var near = 'Calgary';
    //console.log(latLng);
    //Test: 51.13281770591543,-114.12918967723309

    var accessor = {
	consumerSecret: auth.consumerSecret,
	tokenSecret: auth.accessTokenSecret
    };

    parameters = [];
    parameters.push(['term', terms]);
    //ll = latitude and longitude, change to location, near for places located in var near
    parameters.push(['ll', latLng]);

    parameters.push(['callback', 'cb']);
    parameters.push(['oauth_consumer_key', auth.consumerKey]);
    parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
    parameters.push(['oauth_token', auth.accessToken]);
    parameters.push(['oauth_signature_method', 'HMAC-SHA1']);
    console.log(parameters);

    var message = {
	'action': 'http://api.yelp.com/v2/search',
	'method': 'GET',
	'parameters': parameters
    };

    OAuth.setTimestampAndNonce(message);
    OAuth.SignatureMethod.sign(message, accessor);

    var parameterMap = OAuth.getParameterMap(message.parameters);
    parameterMap.oauth_signature = OAuth.percentEncode(parameterMap.oauth_signature);

    $.ajax({
	'url': message.action,
	'data': parameterMap,
	'cache': true,
	'dataType': 'jsonp',
	'jsonpCallback': 'cb',
	'success': function(data, textStats, XMLHttpRequest) {
	    //console.log(data);
	    var output = prettyPrint(data);
	    $("#near-results").append(output);
	}
    });
}

//if we fail at getting coordinates
function error() {
    alert("Geocoder failed");
}

