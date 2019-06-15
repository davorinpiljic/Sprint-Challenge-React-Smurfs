import React, { Component } from 'react';

import axios from 'axios'

import { BrowserRouter as Router, Route, Link, Redirect, NavLink } from "react-router-dom"

import './App.css';
import SmurfForm from './components/SmurfForm';
import UpdateSmurf from './components/UpdateSmurf';

import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      activeSmurf: null,
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => this.setState( {smurfs: response.data} ))
      .catch(error => console.log(error))
  }
  smurfAdd = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(response => {this.setState({smurfs: response.data})})
      .then(this.props.history.push("/smurfs"))
      .catch(error => console.log(error))
  }
  deleteSmurf = smurf => {
    axios 
      .delete(`http://localhost:3333/smurfs/${smurf.id}`)
      .then(response => {
        this.setState({
          smurfs: response.data,
          activeSmurf: null,
        })
        this.props.history.push("/")
        this.props.history.push("/smurfs")
      })
  }
  updateSmurf = smurf => {
    axios
      .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
      .then(response => {
        this.setState({
          activeSmurf: null,
          smurfs: response.data
        })
        this.props.history.push("/smurfs")
      })
      .catch(error => console.log(error))
  }
  setUpdateForm = (smurf) => {
    this.setState({    
      activeSmurf: smurf
    })
    this.props.history.push("/updatesmurf")
  }
  oneSmurf = (smurf) => {
    this.setState({
      activeSmurf: smurf
    })
    this.props.history.push(`/smurfs/${smurf.id}`)
  }


  render() {
    return (
      <div className="App">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">Smurf Village</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <NavLink class="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/smurfs">Smurfs <span class="sr-only">(current)</span></NavLink>        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/smurfform">Add a Smurf <span class="sr-only">(current)</span></NavLink>        
          </li>

      </ul>
    </div>
  </nav>
          {/* <Link to="/smurfs">Smurfs</Link>
          <Link to="/smurfform">Add Smurf</Link> */}
        <div>
          <Route 
            exact path="/smurfs"
            render={props =>( 
            <Smurfs {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
              updateSmurf={this.updateSmurf}
              setUpdateForm={this.setUpdateForm}
              oneSmurf={this.oneSmurf}
            />)
            }
          />
          <Route 
            exact path="/smurfs/:id"
            render={props =>( 
            <Smurf {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
              updateSmurf={this.updateSmurf}
              setUpdateForm={this.setUpdateForm}
              oneSmurf={this.oneSmurf}
              activeSmurf={this.state.activeSmurf}

            />)
            }
          />
          <Route
            exact path="/smurfform"
            render={props =>(
            <SmurfForm {...props}
              smurfAdd={this.smurfAdd}
              deleteSmurf={this.deleteSmurf}
            />)
          }
          />
          <Route
            exact path="/updatesmurf"
            render={props =>(
              <UpdateSmurf {...props}
                updateSmurf={this.updateSmurf}
                activeSmurf={this.state.activeSmurf}
                />)}
          />
        </div>
      </div>
    );
  }
}

export default App;
