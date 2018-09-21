
import React, { Component } from 'react';

// (1) import DirectionsRenderer
import { DirectionsRenderer, withScriptjs, withGoogleMap , GoogleMap } from "react-google-maps"

// (2) access sdk from <script>
const google = window.google

class MapContainerComponent extends Component {
  state = {
    theDirections: null //(3) set default state
  }

  // (4) when component mounts...
  componentDidMount(){

    // (5) assign origin coords + destination coords
    const originLoc = {lat: 19.419, lng: -99.1895, place_name: 'Chapultapec'}
    const destinationLoc = {lat: 19.4352 , lng: -99.1412, place_name: 'Palacio Bellas Artes'}


    // (6) activate new instance of DirectionService from google sdk
    const DirectionsService = new google.maps.DirectionsService();

    // (7) configure the .route() method configure object (origin, destination, travelmode)
    DirectionsService.route({
      origin: new google.maps.LatLng(originLoc.lat, originLoc.lng),
      destination: new google.maps.LatLng(destinationLoc.lat, destinationLoc.lng),
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        console.log(result);
        // (7) set state with directions results when returned from google api
        this.setState({
          theDirections: result,
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  }

  render(){
    return <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 19.4, lng: -99.1 }}
      >
        {/*// (8) fender <DirectionsRenderer> component when directions results are put on state*/}
       { this.state.theDirections && <DirectionsRenderer directions={this.state.theDirections} />}
      </GoogleMap>

  }

}

MapContainerComponent = withGoogleMap(MapContainerComponent)
MapContainerComponent = withScriptjs(MapContainerComponent)


class MapDomWrapperDirections extends Component {
  state = {
    mapOptionsShowing : false,
  }

  render() {
    return (

        <MapContainerComponent
          googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCqRP1zo8G6vPGdnW5jryjhIaXEx10sA30"}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px`, width: '75%', margin : 'auto'}} />}
          mapElement={<div style={{ height: `100%` }} />}
          />
    );
  }
}

export default MapDomWrapperDirections;
