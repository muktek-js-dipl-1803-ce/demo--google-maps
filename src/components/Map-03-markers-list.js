import React, { Component } from 'react';

// (1) import marker
import { withScriptjs, withGoogleMap , GoogleMap, Marker } from "react-google-maps"


class MapContainerComponent extends Component {
  render(){
    const props = this.props
    return <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 19.4, lng: -99.1 }}
      >
        { /* (2) <Marker> component needs object with `lat`, `lng` properties */
          props.theLocations.map( (locObj) => { return <Marker position={locObj}/> } )
        }
    </GoogleMap>
  }
}

MapContainerComponent = withGoogleMap(MapContainerComponent)
MapContainerComponent = withScriptjs(MapContainerComponent)

class MapDomWrapperMarkersList extends Component {
  state = {
    mapOptionsShowing : false,
    locations : [
      // {lat: 14, lng: -99.2},
      // {lat: 14.2, lng: -99.2},
      // {lat: 14.1, lng: -99.1},
    ]
  }

  componentWillMount(){
    // request.get('/api/shops')
    //  .then ( serverRes => )
        this.setState({  //serverRes.body
          locations: [
            {lat: 19.419, lng: -99.1895, name: 'Chapultapec'},
            {lat: 19.3147, lng: -99.1854, name: 'Unknown'},
            {lat: 19.4352 , lng: -99.1412, name: 'Palacio Bellas Artes'}
          ]
        })
  }

  render() {
    return (
      <MapContainerComponent
        googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCqRP1zo8G6vPGdnW5jryjhIaXEx10sA30"}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px`, width: '75%', margin : 'auto'}} />}
        mapElement={<div style={{ height: `100%` }} />}
        isMarkerShown={true}
        /*pass this.state.locations as props to MapContainerComponent*/
        theLocations={this.state.locations} />
    );
  }
}

export default MapDomWrapperMarkersList;
