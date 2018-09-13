import React, { Component } from 'react';
import Navaigation from './components/Navigation/Navigation';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navaigation />
        {/*<Logo />
        <ImageLinkForm />
        <FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
