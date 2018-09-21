import React, { Component } from 'react';

// (1) import components and configuration functions
import { withScriptjs, withGoogleMap , GoogleMap, Marker } from "react-google-maps"
// (2) import google sdk (from <script>)
const google = window.google

// (3) create container component
class MapContainerComponent extends Component {
  render(){
    const props = this.props

    // (4) configure container component
    return <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 19.40, lng: -99.10 }}
    >
      {/* (5) add Marker component  */}
      <Marker position={{ lat: 19.45, lng: -99.43 }}
    />
    </GoogleMap>
  }
}

MapContainerComponent = withGoogleMap(MapContainerComponent)
MapContainerComponent = withScriptjs(MapContainerComponent)

// (5) Configure Wrapper Compnetn
class MapDomWrapperBasicSetup extends Component {
  render() {
    return (
      //(6) Configure the Wrapper's props
      <MapContainerComponent
        googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCqRP1zo8G6vPGdnW5jryjhIaXEx10sA30"}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px`, width: '75%', margin : 'auto'}} />}
        mapElement={<div style={{ height: `100%` }} />}
       />
    )
  }
}

export default MapDomWrapperBasicSetup;
