import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  handleUploadFile(event) {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    axios.post('http://localhost:8080/menu', data).then((response) => {
      console.log(response);
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="page-header">
          <h1>Optile Menu <small className="hidden-sm">Optile react.js coding challenge</small></h1>
        </div>
        <div className="thumbnail">
          <img src="http://localhost:8080/menu" alt="Lunch menu" /
>          <div className="caption">
            <p>See what we have for lunch without leave your seat</p>
            <p>
              <label title="Update Menu" className="btn btn-primary">
                  Update <span className="glyphicon glyphicon-upload" aria-hidden="true"></span> 
                  <input type="file" className="hidden" onChange={this.handleUploadFile} />
              </label>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
