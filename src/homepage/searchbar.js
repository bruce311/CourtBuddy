import React, { Component } from 'react';

class Courtslist extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        courts: []
      };
    }

    componentDidMount() {
        fetch('/api/courts', {
            method: "GET",
            credentials: 'include'
        })
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
            this.setState({
                courts: myJson
            })
        });  
    }

    render() {
        return (
        <div>
            <div>
            { this.state.courts && this.state.courts.map(item => (
                <div>
                <h2>
                 {item.name} 
                </h2>
                 <img src = {item.image}/> 
                 <p>
                 {item.comments}
                 </p>                 
               </div>
            ))}
            </div>
        </div>
        );
    }
  }
  

  export default Courtslist 
