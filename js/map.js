function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 41.880193, lng: -87.633866},
    zoom: 13,
  });

  var marker1 = new google.maps.Marker({
    position: {lat: 41.871193, lng: -87.618983},
    map: map,
  });

  var text1 = "The best spot for Frisbee";

  var info1 = new google.maps.InfoWindow({
    content: text1,
  });

  google.maps.event.addListener (marker1, 'click', function() {
    info1.open(map, marker1);
  });

  var marker2 = new google.maps.Marker({
    position: {lat: 41.885250, lng: -87.651030},
    map: map,
  });

  var text2 = "My favorite food market!";

  var info2 = new google.maps.InfoWindow({
    content: text2,
  });

  google.maps.event.addListener (marker2, 'click', function() {
    info2.open(map, marker2);
  });
};

window.initMap = initMap;
