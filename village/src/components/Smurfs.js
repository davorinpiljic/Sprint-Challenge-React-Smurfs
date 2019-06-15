import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Redirect, NavLink } from "react-router-dom"

import Smurf from './Smurf';

class Smurfs extends React.Component {
  constructor(props) {
  super(props)
  this.state ={
    

  }
}
  oneSmurf = (event, smurf) => {
    event.preventDefault()
    this.props.oneSmurf(smurf)
  }
  updateSmurf = (event, smurf) => {
    event.preventDefault()
    this.props.setUpdateForm(smurf)
  }
  deleteSmurf = (event, smurf) => {
    event.preventDefault()
    this.props.deleteSmurf(smurf)
    this.props.history.push("/smurfs")
  }
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div>
              <Smurf
                smurf={smurf}
              />
                
              <button 
                type="button"
                class="btn btn-secondary"
                onClick={event => this.oneSmurf(event, smurf)}>View Smurf</button>
              <button 
                type="button"
                class="btn btn-primary"
                onClick={event => this.updateSmurf(event, smurf)}>Update Smurf</button>
              <button 
                type="button"
                class="btn btn-danger"
                onClick={event => this.deleteSmurf(event, smurf)}>Delete Smurf</button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}



Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
