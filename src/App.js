import React from 'react';
import Map from './Map/Map';
import Table from './Table/Table'
import 'leaflet/dist/leaflet.css'
import { bikePoint } from './assets/mock/bikePoint'
import { getBikePointData } from "./API/TFLAPI"

// function App() {
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isSideBarOpen: true,
        bikePoints: []
    }
  }

  toggleSideBar = () => {
    this.setState({
      isSideBarOpen: !this.state.isSideBarOpen
    })
  }

  handleChildClick = async () => {
    let data = await getBikePointData();
    let bikePointsArr = [];
    data.map((subitem, i) => {
      return bikePointsArr.push(
        {
          name: subitem.commonName,
          id: subitem.id,
          lat: subitem.lat,
          lon: subitem.lon
        }
      )
    });

    this.setState({
      bikePoints: [
        ...this.state.bikePoints, 
        bikePointsArr
      ]
    })
  }

  render() {
    let state = { markerPosition: { lat: bikePoint[0].lat, lng: bikePoint[0].lon } };
    const { markerPosition } = state;
    return (
      <div className={'d-flex ' + (!this.state.isSideBarOpen ? 'toggled' : null)} id="wrapper">
          <Table onClick={this.handleChildClick} />
          <div id="page-content-wrapper">
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
              <button className="btn btn-primary" id="menu-toggle" onClick={this.toggleSideBar}>
                Toggle Menu {(this.state.isSideBarOpen ? '[Opened]' : '[Closed]') }
              </button>
            </nav>
            <div className="container-fluid">
              <h1 className="mt-4">
                <Map markerPosition={markerPosition} bikePoints={this.state.bikePoints}/>
              </h1>
            </div>
          </div>    
        </div>
    );
  }
}

export default App;
