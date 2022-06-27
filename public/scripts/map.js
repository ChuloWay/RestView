
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
  center: restaurant.geometry.coordinates, // starting position [lng, lat]
  zoom: 10 // starting zoom
});


new mapboxgl.Marker()
  .setLngLat(restaurant.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 })
      .setHTML(
        `<h3>${restaurant.title}</h3><p>${restaurant.location}</p>`
      )
  )
  .addTo(map)
