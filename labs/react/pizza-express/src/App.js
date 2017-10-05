import React, { Component } from 'react';
import './index.css'

import Description from './components/Description.jsx'
import MenuList from './components/MenuList.jsx'
import LocationList from './components/LocationList.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="navbar">
          <a href="#description">OurStory</a>
          <a href ="#menu">Menu</a>
          <h1>PIZZA-EXPRESS</h1>
          <a href="#locations">Locations</a>
          <a href="#contact">Contact</a>
          </div>
        <div className="splash-image">
          <span>Fight for the last slice.</span>
        </div>
        <div>
       <Description />
       </div>
       <div className="menu">
        <MenuList />
        </div>
        <div>
          <div>
          <LocationList />
          </div>
        </div>
      </div>
    
    );
  }
}
export default App;