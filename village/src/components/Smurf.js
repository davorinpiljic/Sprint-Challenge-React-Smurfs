import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'

class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: this.props.activeSmurf || this.props.smurf
    };
  }
  
  componentDidUpdate(prevProps) {
    if (
        this.props.activeSmurf &&
        prevProps.activeSmurf != this.props.activeSmurf
      ) {
        this.setState({
          smurf: this.props.activeSmurf
        });
      }
  }
  render() {

  return (
    <div className="Smurf">
      <h3>{this.state.smurf.name}</h3>
      <strong>{this.state.smurf.height} tall</strong>
      <p>{this.state.smurf.age} smurf years old</p>
    </div>
  );
}
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

