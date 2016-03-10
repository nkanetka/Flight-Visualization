var HomeControl = function(controlDiv, map) {
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
},

changeOpacity = function() {
	var wrapper = document.getElementById("wrapper"),
		mapOpacity = wrapper.style.opacity;

	if (mapOpacity == 1.0) {
		wrapper.style.opacity = 0.5;
	} else {
		wrapper.style.opacity = 1.0;
	}
},

initialize = function () {
	var mapCanvas = document.getElementById('map'),
		mapOptions = {
		center: new google.maps.LatLng(44.256458, -76.744456),
		zoom: 5,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles:styles
	},
	
	map = new google.maps.Map(mapCanvas,mapOptions),
	centerControlDiv = document.createElement('div');
	map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

	// Create a DIV to hold the control and call HomeControl()
  	var homeControlDiv = document.createElement('div');
  		homeControl = new HomeControl(homeControlDiv, map),
  	map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);

	var flightPath = {
		path: google.maps.SymbolPath.CIRCLE,
		scale:1,
		strokeColor: '#FFF'
	},
		flightPathIcon = [{icon:flightPath,offset:'100%'}];

	var poe610 = new google.maps.Polyline({
		path: POE610Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe532 = new google.maps.Polyline({
		path: POE532Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe572 = new google.maps.Polyline({
		path: POE572Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe246 = new google.maps.Polyline({
		path: POE246Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe684 = new google.maps.Polyline({
		path: POE684Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe406 = new google.maps.Polyline({
		path: POE406Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe938 = new google.maps.Polyline({
		path: POE938Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe250 = new google.maps.Polyline({
		path: POE250Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe122 = new google.maps.Polyline({
		path: POE122Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe384 = new google.maps.Polyline({
		path: POE384Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe408 = new google.maps.Polyline({
		path: POE408Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe412 = new google.maps.Polyline({
		path: POE412Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe124 = new google.maps.Polyline({
		path: POE124Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe252 = new google.maps.Polyline({
		path: POE252Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe536 = new google.maps.Polyline({
		path: POE536Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe418 = new google.maps.Polyline({
		path: POE418Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe258 = new google.maps.Polyline({
		path: POE258Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe686 = new google.maps.Polyline({
		path: POE686Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe662 = new google.maps.Polyline({
		path: POE662Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe574 = new google.maps.Polyline({
		path: POE574Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe386 = new google.maps.Polyline({
		path: POE386Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe634 = new google.maps.Polyline({
		path: POE634Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe512 = new google.maps.Polyline({
		path: POE512Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe940 = new google.maps.Polyline({
		path: POE940Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe132 = new google.maps.Polyline({
		path: POE132Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe724 = new google.maps.Polyline({
		path: POE724Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe260 = new google.maps.Polyline({
		path: POE260Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe354 = new google.maps.Polyline({
		path: POE354Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe420 = new google.maps.Polyline({
		path: POE420Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe630 = new google.maps.Polyline({
		path: POE630Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe136 = new google.maps.Polyline({
		path: POE136Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe716 = new google.maps.Polyline({
		path: POE716Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe424 = new google.maps.Polyline({
		path: POE424Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe264 = new google.maps.Polyline({
		path: POE264Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe140 = new google.maps.Polyline({
		path: POE140Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe409 = new google.maps.Polyline({
		path: POE409Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe125 = new google.maps.Polyline({
		path: POE125Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe249 = new google.maps.Polyline({
		path: POE249Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe661 = new google.maps.Polyline({
		path: POE661Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe413 = new google.maps.Polyline({
		path: POE413Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe633 = new google.maps.Polyline({
		path: POE633Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe939 = new google.maps.Polyline({
		path: POE939Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe715 = new google.maps.Polyline({
		path: POE715Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe253 = new google.maps.Polyline({
		path: POE253Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe385 = new google.maps.Polyline({
		path: POE385Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe535 = new google.maps.Polyline({
		path: POE535Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe511 = new google.maps.Polyline({
		path: POE511Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe129 = new google.maps.Polyline({
		path: POE129Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe685 = new google.maps.Polyline({
		path: POE685Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe415 = new google.maps.Polyline({
		path: POE415Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe131 = new google.maps.Polyline({
		path: POE131Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe723 = new google.maps.Polyline({
		path: POE723Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe573 = new google.maps.Polyline({
		path: POE573Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe257 = new google.maps.Polyline({
		path: POE257Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe135 = new google.maps.Polyline({
		path: POE135Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe353 = new google.maps.Polyline({
		path: POE353Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe419 = new google.maps.Polyline({
		path: POE419Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe635 = new google.maps.Polyline({
		path: POE635Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe391 = new google.maps.Polyline({
		path: POE391Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe613 = new google.maps.Polyline({
		path: POE613Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe259 = new google.maps.Polyline({
		path: POE259Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe945 = new google.maps.Polyline({
		path: POE945Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe687 = new google.maps.Polyline({
		path: POE687Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe421 = new google.maps.Polyline({
		path: POE421Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe261 = new google.maps.Polyline({
		path: POE261Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe139 = new google.maps.Polyline({
		path: POE139Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe575 = new google.maps.Polyline({
		path: POE575Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe263 = new google.maps.Polyline({
		path: POE263Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe637 = new google.maps.Polyline({
		path: POE637Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe539 = new google.maps.Polyline({
		path: POE539Coords,
		icons: [{icon:flightPath,offset:'100%'}],
		strokeOpacity: 1.0,
		strokeWeight: 0,
		map:map
	}),

	poe423 = new google.maps.Polyline({
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
},

animateFlight = function(poe, speed){
	var count = 0,
		icons;
	window.setInterval(function() {
	count = (count + 1) //% 200; // Add modulus something to get it to repeat

	icons = poe.get('icons');
	icons[0].offset = (count / 2) + '%';
	poe.set('icons', icons);
	}, 20);
};

google.maps.event.addDomListener(window, 'load', initialize);