import React, { Component } from 'react';

  class Newcourt extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          name : '',
          image : '',
          comments : ''
        };
  
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeImage= this.handleChangeImage.bind(this);
      this.handleChangeComments = this.handleChangeComments.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeName(event) {
      this.setState({
            name: event.target.value
        }
        );
    }
    handleChangeImage(event) {
        this.setState({
              image: event.target.value
        }
        );
    }

    handleChangeComments(event) {
    this.setState({
            comments: event.target.value
        }
        );
    }

  
    handleSubmit(event) {
       alert('A gym was submitted: ' + this.state.name);
        
        fetch("/api/add/courts/" + this.state.name, {
            method: "POST",
            url: `https://courtbuddy-123456.appspot.com/`,
            credentials: 'include',
            headers: {
                Accept: 'application/json',
            }
        })

        .then((response) => {
            return response.json();
            })
        
        .then(response => console.log('Success:', JSON.stringify(response)))
    
      
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleChangeName} />
                </label>
            </div> 

            <div>
                <label>
                Image:
                <input type="text" value={this.state.image} onChange={this.handleChangeImage} />
            </label>
            </div>
            
        <div>
            <label>
            Comments:
            <textarea rows="5" cols="20" type="text" value={this.state.comments} onChange={this.handleChangeComments}/>
            
            </label>
        </div>
          

          <input type="submit" value="Submit"/>
        </form>
      );
    }
  }

export default Newcourt


