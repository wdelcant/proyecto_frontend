import styles from "./maps/styles";


function initMap() {
  const coords = {
    lat: -32.99561,
    lng: -71.1807,
  };

  let map = new google.maps.Map(document.getElementById("map"), {
    center: coords,
    zoom: 17,
  });

  let marker = new google.maps.Marker({
    position: coords,
    map: map,
    title: "Cafeteria CódigoFacilito",
    styles: styles
  });

  let infoWindow = new google.maps.InfoWindow({
    content: "Cafeteria CódigoFacilito",
  });

    marker.addListener("click", () => {
    infoWindow.open(map, marker);
  }
    );
}

initMap();
