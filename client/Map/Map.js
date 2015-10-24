Template.map.onRendered(drawMap);
function drawMap() {
  var map = L.map('map').setView([53.4548633,-2.2113206], 13);

   L.tileLayer.provider('Thunderforest.Outdoors').addTo(map)

  
}