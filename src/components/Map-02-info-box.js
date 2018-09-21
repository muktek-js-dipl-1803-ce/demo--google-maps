
import React, { Component } from 'react';

import { withScriptjs, withGoogleMap , GoogleMap } from "react-google-maps"

// (1) import InfoBox
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";

// (2) import global variable google sdk
const google = window.google

class CustomInfoBox extends Component {
  render(){
    /* (3) configure the infobox props, (defaultPosition)  */
    return <InfoBox
      defaultPosition={new google.maps.LatLng(19.4, -99.1)}
      options={{ closeBoxURL: ``, enableEventPropagation: true }}
    >
     {/* (4) configure the infobox styles/content  */}
      <div style={{ opacity: 0.75,  padding: '.4rem'}}>
        <span style={{ fontSize: `29px`, color: `rebeccapurple` , background: '#eee' }}>
          &uarr; <br/>
          {/*<i className="fa fas-marker/>"*/}
          <span style={{fontSize: '12px', background: '#eee',}}> Mexico City</span>
        </span>
      </div>
    </InfoBox>
  }
}

class MapContainerComponent extends Component {
  render(){
    const props = this.props

    return <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 19.4, lng: -99.1 }}
    >
      <CustomInfoBox/>

    </GoogleMap>
  }
}

MapContainerComponent = withGoogleMap(MapContainerComponent)
MapContainerComponent = withScriptjs(MapContainerComponent)

class MapDomWrapperInfoBox extends Component {
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

export default MapDomWrapperInfoBox;
