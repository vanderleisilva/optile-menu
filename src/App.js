import React, { Component } from 'react';
import Upload from "./upload/Upload";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="page-header">
          <h1>Optile Menu <small className="hidden-sm">Optile react.js coding challenge</small></h1>
        </div>
        <Upload apiUrl="http://localhost:8080" />      
      </div>
    );
  }
}

export default App;
