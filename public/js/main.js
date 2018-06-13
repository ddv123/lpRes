// Google maps section 

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

// Carousel scroll

var left = document.getElementById("left");
var right = document.getElementById("right");

left.addEventListener("mouseover", hoverRight);
right.addEventListener("mouseover", hoverLeft);

function hoverLeft() {

	var reel = document.getElementsByClassName("reel")[0];
	var int = setInterval ( scrollleft , 8);
	var x = reel.scrollLeft;

	var isMouseOut = false;

	document.getElementById("right").onmouseout = function(){
		return isMouseOut = true;
	};

	function scrollleft(){
		if ( isMouseOut ){
			clearInterval(int);
		} else {
			x++;
			reel.scrollTo(x, 0);
		}
	}
}

function hoverRight() {
	var reel = document.getElementsByClassName("reel")[0];
	var int = setInterval ( scrollleft , 8);
	var x = reel.scrollLeft;

	var isMouseOut = false;

	document.getElementById("left").onmouseout = function(){
		return isMouseOut = true;
	};

	function scrollleft(){
		if ( isMouseOut ){
			clearInterval(int);
		} else {
			x--;
			reel.scrollTo(x, 0);
		}
	}
}

// trigger fade in on scroll

window.addEventListener("scroll", function(){
	if (window.scrollY > 576) {
		carFade();
	}
});

// Carousel fade in 
function carFade(){
	var cardArray = document.querySelectorAll( ".reel article");
	var i = 1;

	Array.prototype.forEach.call(cardArray, function(arr) { 
	    setTimeout(function(){ 
	    	arr.classList.add("visible");
	    }, 400*i );
		i++;
	});
}







