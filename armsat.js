const https = require('https');
console.log("Այղագիրը աշխատացուած է, ուղարկուում է հարցում, սպասէք 10 վայրկեան");
setInterval(() => {
	https.get('https://api.n2yo.com/rest/v1/satellite/positions/52765/Lat/Lon/0/2/&apiKey=7WFXEB-VKC4PN-KP7KZ3-50IH', (resp) => {
	  let data = '';

	  resp.on('data', (chunk) => {
		data += chunk;
	  });

	  resp.on('end', () => {
		data = JSON.parse(data);
		let latitude = data.positions[0].satlatitude;
		let longitude = data.positions[0].satlongitude;
		let satname = data.info.satname;
		console.log("Հայկական " + satname + " արբանեակի կոորդինատներն են latitude: " + latitude, "longitude: " + longitude)
	  });

	}).on("error", (err) => {
	  console.log("Error: " + err.message);
	});
}, 10000);

