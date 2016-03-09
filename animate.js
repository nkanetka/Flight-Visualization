function HomeControl(controlDiv, map) {
  	controlDiv.style.padding = '10px';
  	var controlUI = document.createElement('div');
  	controlUI.style.backgroundColor = 'white';
  	controlUI.style.borderRadius = '2px';
  	controlUI.style.cursor = 'pointer';
	controlUI.style.textAlign = 'center';
	controlUI.title = 'Change Opacity Button';
	controlDiv.appendChild(controlUI);
	var controlText = document.createElement('div');
	controlText.style.fontFamily='Helvetica-neue,sans-serif';
	controlText.style.fontSize='12px';
	controlText.style.paddingTop = '8px';
	controlText.style.paddingLeft = '8px';
	controlText.style.paddingRight = '8px';
	controlText.style.paddingBottom = '8px';
	controlText.innerHTML = 'Change Opacity'
	controlUI.appendChild(controlText);

  	google.maps.event.addDomListener(controlUI, 'click', function() {
    	changeOpacity();
  	});
};

var changeOpacity = function() {
	var wrapper = document.getElementById("wrapper"),
		mapOpacity = wrapper.style.opacity;

	if (mapOpacity == 1.0) {
		wrapper.style.opacity = 0.5;
	} else {
		wrapper.style.opacity = 1.0;
	}
};

var initialize = function () {
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
		center: new google.maps.LatLng(44.256458, -76.744456),
		zoom: 5,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles:styles
	}
	
	var map = new google.maps.Map(mapCanvas,mapOptions);
	var centerControlDiv = document.createElement('div');
	map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

	// Create a DIV to hold the control and call HomeControl()
  	var homeControlDiv = document.createElement('div');
  	var homeControl = new HomeControl(homeControlDiv, map);
  	map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);

	var flightPath = {
		path: google.maps.SymbolPath.CIRCLE,
		scale:1,
		strokeColor: '#FFF'
	};

	var flightPathIcon = [{icon:flightPath,offset:'100%'}]

	var poe610 = new google.maps.Polyline({
		path: POE610Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe532 = new google.maps.Polyline({
		path: POE532Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe572 = new google.maps.Polyline({
		path: POE572Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe246 = new google.maps.Polyline({
		path: POE246Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe684 = new google.maps.Polyline({
		path: POE684Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe406 = new google.maps.Polyline({
		path: POE406Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe938 = new google.maps.Polyline({
		path: POE938Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe250 = new google.maps.Polyline({
		path: POE250Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe122 = new google.maps.Polyline({
		path: POE122Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe384 = new google.maps.Polyline({
		path: POE384Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe408 = new google.maps.Polyline({
		path: POE408Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe412 = new google.maps.Polyline({
		path: POE412Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe124 = new google.maps.Polyline({
		path: POE124Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe252 = new google.maps.Polyline({
		path: POE252Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe536 = new google.maps.Polyline({
		path: POE536Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe418 = new google.maps.Polyline({
		path: POE418Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe258 = new google.maps.Polyline({
		path: POE258Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe686 = new google.maps.Polyline({
		path: POE686Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe662 = new google.maps.Polyline({
		path: POE662Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe574 = new google.maps.Polyline({
		path: POE574Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe386 = new google.maps.Polyline({
		path: POE386Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe634 = new google.maps.Polyline({
		path: POE634Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe512 = new google.maps.Polyline({
		path: POE512Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe940 = new google.maps.Polyline({
		path: POE940Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe132 = new google.maps.Polyline({
		path: POE132Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe724 = new google.maps.Polyline({
		path: POE724Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe260 = new google.maps.Polyline({
		path: POE260Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe354 = new google.maps.Polyline({
		path: POE354Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe420 = new google.maps.Polyline({
		path: POE420Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe630 = new google.maps.Polyline({
		path: POE630Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe136 = new google.maps.Polyline({
		path: POE136Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe716 = new google.maps.Polyline({
		path: POE716Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe424 = new google.maps.Polyline({
		path: POE424Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe264 = new google.maps.Polyline({
		path: POE264Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe140 = new google.maps.Polyline({
		path: POE140Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe409 = new google.maps.Polyline({
		path: POE409Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe125 = new google.maps.Polyline({
		path: POE125Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe249 = new google.maps.Polyline({
		path: POE249Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe661 = new google.maps.Polyline({
		path: POE661Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe413 = new google.maps.Polyline({
		path: POE413Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe633 = new google.maps.Polyline({
		path: POE633Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe939 = new google.maps.Polyline({
		path: POE939Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe715 = new google.maps.Polyline({
		path: POE715Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe253 = new google.maps.Polyline({
		path: POE253Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe385 = new google.maps.Polyline({
		path: POE385Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe535 = new google.maps.Polyline({
		path: POE535Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe511 = new google.maps.Polyline({
		path: POE511Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe129 = new google.maps.Polyline({
		path: POE129Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe685 = new google.maps.Polyline({
		path: POE685Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe415 = new google.maps.Polyline({
		path: POE415Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe131 = new google.maps.Polyline({
		path: POE131Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe723 = new google.maps.Polyline({
		path: POE723Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe573 = new google.maps.Polyline({
		path: POE573Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe257 = new google.maps.Polyline({
		path: POE257Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe135 = new google.maps.Polyline({
		path: POE135Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe353 = new google.maps.Polyline({
		path: POE353Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe419 = new google.maps.Polyline({
		path: POE419Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe635 = new google.maps.Polyline({
		path: POE635Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe391 = new google.maps.Polyline({
		path: POE391Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe613 = new google.maps.Polyline({
		path: POE613Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe259 = new google.maps.Polyline({
		path: POE259Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe945 = new google.maps.Polyline({
		path: POE945Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe687 = new google.maps.Polyline({
		path: POE687Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe421 = new google.maps.Polyline({
		path: POE421Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe261 = new google.maps.Polyline({
		path: POE261Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe139 = new google.maps.Polyline({
		path: POE139Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe575 = new google.maps.Polyline({
		path: POE575Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe263 = new google.maps.Polyline({
		path: POE263Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe637 = new google.maps.Polyline({
		path: POE637Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe539 = new google.maps.Polyline({
		path: POE539Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	var poe423 = new google.maps.Polyline({
		path: POE423Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	});

	
	setTimeout(function() {animateFlight(poe532,45.9)},000);
	setTimeout(function() {animateFlight(poe572,38.4)},000);
	setTimeout(function() {animateFlight(poe246,32.4)},000);
	setTimeout(function() {animateFlight(poe684,44.2)},000);
	setTimeout(function() {animateFlight(poe406,44.2)},000);
	setTimeout(function() {animateFlight(poe938,44.2)},000);
	setTimeout(function() {animateFlight(poe250,44.2)},1000);
	setTimeout(function() {animateFlight(poe122,44.7)},000);
	setTimeout(function() {animateFlight(poe384,44.8)},000);
	setTimeout(function() {animateFlight(poe408,44.3)},000);
	setTimeout(function() {animateFlight(poe412,44.4)},000);
	setTimeout(function() {animateFlight(poe124,45.2)},1000);
	setTimeout(function() {animateFlight(poe252,44.6)},2000);
	setTimeout(function() {animateFlight(poe536,45.4)},2000);
	setTimeout(function() {animateFlight(poe418,44.0)},2000);
	setTimeout(function() {animateFlight(poe258,44.0)},3000);
	setTimeout(function() {animateFlight(poe686,44.0)},2000);
	setTimeout(function() {animateFlight(poe662,44.0)},4000);
	setTimeout(function() {animateFlight(poe574,44.0)},5000);
	setTimeout(function() {animateFlight(poe386,44.0)},6000);
	setTimeout(function() {animateFlight(poe634,44.0)},7000);
	setTimeout(function() {animateFlight(poe512,44.0)},1000);
	setTimeout(function() {animateFlight(poe940,44.0)},2000);
	setTimeout(function() {animateFlight(poe132,44.0)},4000);
	setTimeout(function() {animateFlight(poe724,44.0)},7000);
	setTimeout(function() {animateFlight(poe260,44.0)},9000);
	setTimeout(function() {animateFlight(poe354,44.0)},10000);
	setTimeout(function() {animateFlight(poe420,44.0)},1000);
	setTimeout(function() {animateFlight(poe630,44.0)},2000);
	setTimeout(function() {animateFlight(poe136,44.0)},6000);
	setTimeout(function() {animateFlight(poe716,44.0)},3000);
	setTimeout(function() {animateFlight(poe424,44.0)},4000);
	setTimeout(function() {animateFlight(poe264,44.0)},9000);
	setTimeout(function() {animateFlight(poe140,44.0)},000);
	setTimeout(function() {animateFlight(poe409,44.0)},000);
	setTimeout(function() {animateFlight(poe125,44.0)},6000);
	setTimeout(function() {animateFlight(poe249,44.0)},3000);
	setTimeout(function() {animateFlight(poe661,44.0)},1000);
	setTimeout(function() {animateFlight(poe413,44.0)},5000);
	setTimeout(function() {animateFlight(poe633,44.0)},000);
	setTimeout(function() {animateFlight(poe939,44.0)},000);
	setTimeout(function() {animateFlight(poe715,44.0)},3000);
	setTimeout(function() {animateFlight(poe253,44.0)},5000);
	setTimeout(function() {animateFlight(poe385,44.0)},3000);
	setTimeout(function() {animateFlight(poe535,44.0)},7000);
	setTimeout(function() {animateFlight(poe511,44.0)},2000);
	setTimeout(function() {animateFlight(poe129,44.0)},000);
	setTimeout(function() {animateFlight(poe685,44.0)},000);
	setTimeout(function() {animateFlight(poe415,44.0)},7000);
	setTimeout(function() {animateFlight(poe131,44.0)},4000);
	setTimeout(function() {animateFlight(poe723,44.0)},000);
	setTimeout(function() {animateFlight(poe573,44.0)},3000);
	setTimeout(function() {animateFlight(poe257,44.0)},9000);
	setTimeout(function() {animateFlight(poe135,44.0)},7000);
	setTimeout(function() {animateFlight(poe353,44.0)},1000);
	setTimeout(function() {animateFlight(poe419,44.0)},2000);
	setTimeout(function() {animateFlight(poe635,44.0)},4000);
	setTimeout(function() {animateFlight(poe391,44.0)},8000);
	setTimeout(function() {animateFlight(poe613,44.0)},000);
	setTimeout(function() {animateFlight(poe259,44.0)},5000);
	setTimeout(function() {animateFlight(poe945,44.0)},4000);
	setTimeout(function() {animateFlight(poe687,44.0)},000);
	setTimeout(function() {animateFlight(poe421,44.0)},7000);
	setTimeout(function() {animateFlight(poe261,44.0)},9000);
	setTimeout(function() {animateFlight(poe139,44.0)},1000);
	setTimeout(function() {animateFlight(poe575,44.0)},2000);
	setTimeout(function() {animateFlight(poe263,44.0)},6000);
	setTimeout(function() {animateFlight(poe637,44.0)},4000);
	setTimeout(function() {animateFlight(poe539,44.0)},3000);
	setTimeout(function() {animateFlight(poe423,44.0)},000);
}

function animateFlight(poe, speed){
	var count = 0;
	window.setInterval(function() {
	count = (count + 1) //% 200; // Add modulus something to get it to repeat

	var icons = poe.get('icons');
	icons[0].offset = (count / 2) + '%';
	poe.set('icons', icons);
	}, 20);
}

google.maps.event.addDomListener(window, 'load', initialize);