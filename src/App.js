import React from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/header.js';
import Featured from "./components/featured";
import VenueNfo from "./components/venueNfo";
import Highlight from "./components/Highlight";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/header_footer/footer.js"


function App() {
  return (
    <div className="App">
      <Header/>
      
      <Element name="featured">
      <Featured />
      </Element>

      <Element name="venuenfo">
      <VenueNfo />
      </Element>
      
   

      <Element name="highlight">
      <Highlight />
      </Element>

      
       <Element name="pricing">
       <Pricing />
     </Element>

      <Element name="location">
       <Location />
       </Element>

      <Footer/>
    </div>
  );
}

export default App;
