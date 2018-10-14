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
          <p>
            <View />
          </p>
        </header>
      </div>
    );
  }
}

export default App;





// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       items: []
//     };
//   }

//   componentDidMount() {
//     fetch("https://api.example.com/items")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             items: result.items
//           });
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//   }

//   render() {
//     const { error, isLoaded, items } = this.state;
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <ul>
//           {items.map(item => (
//             <li key={item.name}>
//               {item.name} {item.price}
//             </li>
//           ))}
//         </ul>
//       );
//     }
//   }
// }










