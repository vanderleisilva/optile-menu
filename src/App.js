import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="page-header">
          <h1>Optile Menu <small className="hidden-sm">Optile react.js coding challenge</small></h1>
        </div>
        <div className="thumbnail">
          
          <img src="..." alt="..." />
          <div className="caption">
            <p>See what we have for lunch without leave your seat</p>
            <p>
              <a href="#" className="btn btn-primary" title="Update Menu" role="button">
                Update <span className="glyphicon glyphicon-upload" aria-hidden="true"></span>
              </a> 
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
