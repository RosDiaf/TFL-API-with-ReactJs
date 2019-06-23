import React from "react";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0
    }
  }
  componentDidMount() {
    this.map = L.map("map", {
      center: [51.529163, -0.10997],
      zoom: 11,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
    this.marker = L.marker(this.props.markerPosition).addTo(this.map);
  }

  componentDidUpdate({ bikePoints }) {
    if (this.props.bikePoints !== bikePoints) {
      for(let item of this.props.bikePoints[0]) {
        this.marker = new L.marker([item.lat, item.lon])
				.bindPopup(item.name)
				.addTo(this.map);
      }
    }
  }

  render() {
    return (
      <div id="map" />
    );
  }
}

export default Map;
