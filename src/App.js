import React, { Component } from 'react';
import './App.css';

// import MapDomWrapperBasicSetup from './components/Map-01-basic-setup.js'
// import MapDomWrapperInfoBox from './components/Map-02-info-box.js'
// import MapDomWrapperMarkersList from './components/Map-03-markers-list.js'
import MapDomWrapperDirections from './components/Map-04-directions.js'


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Google Maps Wonderland</h1>
        <MapDomWrapperDirections />
      </div>
    );
  }
}

export default App;
