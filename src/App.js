import React, { Component } from 'react';
import './App.css';
import {View} from './homepage/view';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            {/* use routing to determine what app loads */}
            <View />
          </p>

        </header>
      </div>
    );
  }
}

export default App;












