import React from 'react';
import './resources/styles.css';

import Header from './components/header_footer/header.js';
import Featured from "./components/featured";
import VenueNfo from "./components/venueNfo";
import Highlight from "./components/Highlight";


function App() {
  return (
    <div className="App">
      <Header/>
      <Featured/>
      <VenueNfo/>
      <Highlight/>
    </div>
  );
}

export default App;
