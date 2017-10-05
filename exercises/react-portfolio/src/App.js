import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Profile from './components/Profile.jsx'
import SpecialtiesList from './components/SpecialtiesList.jsx'

class App extends Component {
  render() {
    const isLoggedIn = false;

    return (
      <div className="App">
        
      { isLoggedIn ? <button>Log Out</button> : <button>Log In</button>}



        <Profile />
        <SpecialtiesList />
      </div>
    );
  }
}

export default App;