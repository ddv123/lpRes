function initMap(){
	
	// lovation of Puerto Penasco
	var penasco = {lat: 31.3268, lng: -113.5312};

	// Map options
	var options = {
		zoom: 7,
		center: penasco
	};

	// New map
	var map = new google.maps.Map(document.getElementById('map'), options);

	// Add marker
	var marker = new google.maps.Marker({
		position: penasco,
		map: map
	});

}