import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  a = "Bhavin";
  b = 10
  c = 5
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
        
      </div>
    )
  }
}

