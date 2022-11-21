function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.87, lng: -87.619 },
    zoom: 8,
  });
}

window.initMap = initMap;
