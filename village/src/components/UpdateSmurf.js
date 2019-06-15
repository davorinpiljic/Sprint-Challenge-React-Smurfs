import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'

class UpdateSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: this.props.activeSmurf || {
        name: '',
        age: '',
        height: ''
      }
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

  updateSmurf = event => {
    event.preventDefault();
    this.props.updateSmurf(this.state.smurf)
  }

  handleInputChange = e => {
    this.setState({ 
        smurf: {
          ...this.state.smurf,
          [e.target.name]: e.target.value 
        }
      });
  };

  render() {
    return (
      <div className="form-group">
        <form onSubmit={this.updateSmurf}>
          <input
            class="form-control"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            class="form-control"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            class="form-control"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button onClick={this.updateSmurf} type="submit" class="btn btn-primary">Update Smurf</button>
        </form>
      </div>
    );
  }
}

export default UpdateSmurf;
