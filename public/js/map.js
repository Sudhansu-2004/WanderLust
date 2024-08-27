mapboxgl.accessToken = mapToken; // Replace with your MapTiler API token
const map = new mapboxgl.Map({
  container: "map", // Container ID
  style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${mapToken}`, // MapTiler style URL with API token
  center: [77.209, 28.6139], // Starting position [lng, lat]
  zoom: 9, // Starting zoom
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat([77.209, 28.6139]) // Replace with actual coordinates
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      "<h4>Exact Location will be provided after booking!</h4"
    )
  )
  .addTo(map);
