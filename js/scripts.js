
var map = L.map('map').setView([10.50, -66.90], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

fetch('../data/LIBERTADOR.json')
    .then(response => response.json())
    .then(data => {
    L.geoJSON(data).addTo(map);
    })
.catch(error => console.error('Error cargando el GeoJSON:', error));

fetch('../data/SUCRE_4326.json')
    .then(response => response.json())
    .then(data => {
    L.geoJSON(data).addTo(map);
    })
.catch(error => console.error('Error cargando el GeoJSON:', error));
