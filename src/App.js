import React, { Component } from 'react';
import './App.css';
import {View} from './homepage/view';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <img className = "icon" src = 'http://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/256/Sport-basketball-icon.png'/>
          <h1 className = "courtbuddy">CourtBuddy</h1> 
        </div>
        
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












