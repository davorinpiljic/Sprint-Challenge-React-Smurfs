import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    };
  }

  addSmurf = event => {
    event.preventDefault();
    this.props.smurfAdd(this.state.smurf)
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
        <form onSubmit={this.addSmurf}>
          <input
            class="form-control"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            class="form-control"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            class="form-control"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit" class="btn btn-primary">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
