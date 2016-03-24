import React, { Component } from 'react';


export default class App extends Component {

  render() {
    var img = require('../static/Aisenz-Logo.jpg');
    var styles = require('./app.scss');
    console.log(styles);
    return (
      <div className="row">
        <img src={img}> </img>
      </div>
    );
  }
}
