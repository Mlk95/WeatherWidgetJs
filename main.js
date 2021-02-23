document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
 });

getLocation();

function getLocation()
{
	if (navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(fetchWeatherApi);
	}
	else {
		alert("Geolocation not supported by this browser, couldnt get your current postion");
	}
}

// fetch request for https://fcc-weather-api.glitch.me/ with coordinates from geolocation
function fetchWeatherApi(position)
{
	const x = position.coords.latitude;
	const y = position.coords.longitude;
	const request = fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${x}&lon=${y}`);
	request
	 .then(data => data.json())
	 .then(data => {
		console.log(data); 
		this.createNodes(data)
	  })
	 .catch((error) => {
		console.error(error);
		alert("Error: Something went wrong");
	  });
}

// create nodes for the DOM 
function createNodes(data)
{
	// get container where widget will be placed
	const container = document.querySelector('#widgetContainer');
	
	// creating Elements for the DOM and appending the container node
	const infoContainer = document.createElement('div');
	infoContainer.setAttribute("id", "infoContainer");
	
	const iconContainer = document.createElement('div');
	iconContainer.setAttribute("id", "iconContainer");
	
	const loc = document.createElement('h1');
	loc.setAttribute("id", "caption");
	var date = new Date().toLocaleString('de-DE').split(",");
	
	//Elements for iconContainer
	const icon = document.createElement('img');
	setAttributes(icon, {id:"wticon", alt:"Placeholder", width:"128", height:"128"});
	const clock = document.createElement('p');
	
	//Elements for infoContainer
	const wtTempCurrent = document.createElement('p');
	const wtTempMax = document.createElement('p');
	const wtTempMin = document.createElement('p');
	const wtWindSpeed = document.createElement('p');
	const wtWindDir = document.createElement('p');
	
	//set node contents 
	loc.innerHTML = data.name + " den " + date[0];
	
	icon.src = data.weather['0'].icon;
	clock.innerHTML = "&#9716; " + date[1];
	
	wtTempCurrent.innerHTML = "Aktuelle Temperatur: " + data.main['temp'] + " &ordm;" + "C";
	wtTempMax.innerHTML = "Max. Temperatur: " + data.main['temp_max'] + " &ordm;" + "C" ;
	wtTempMin.innerHTML = "Min. Temperatur: " + data.main['temp_min'] + " &ordm;" + "C" ;
	wtWindSpeed.innerHTML =  "Windgeschwindigkeit: " + data.wind['speed'] + " km/h";
	wtWindDir.innerHTML =  "Windrichtung: " + getWindDirection(data.wind['deg']);
	
	container.append(loc, iconContainer, infoContainer);
	iconContainer.append(icon, clock);
	infoContainer.append(wtTempCurrent, wtTempMax, wtTempMin, wtWindSpeed, wtWindDir);
}

// Setting multiple attributes at once in JavaScript so you dont have to call Element.setAttribute(name, value) for every attribute.
function setAttributes(node, options)
{
   Object.keys(options).forEach(function(attr) {
   node.setAttribute(attr, options[attr]);
   })
}

// Get current wind direction as string
function getWindDirection(deg)
{	
	var direction = "";
	switch(true) {
		case (deg === 0):
			direction = "N";
			break;
		case (deg === 90):
			direction = "O";
			break;
		case (deg === 180):
			direction = "S";
			break;			
		case (deg === 270):
			direction = "W";
			break;
		case (deg > 0 && deg < 90):
			direction = "NO";
			break;
		case (deg > 90 && deg < 180):
			direction = "SO";
			break;
		case (deg > 180 && deg < 270):
			direction = "SW";
			break;
		case (deg > 270 && deg < 359):
			direction = "NW";
			break;
	}
	return direction;
}



