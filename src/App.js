import React, { Component } from "react";
import "./App.css";
import Form from "./Form.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device: 0,
      network: 0,
      country: 463,
      hours: 0,
      emissions: null,
    };
  }

  onChange(field, value) {
    this.setState({ [field]: value });
  }

  setEmissions() {
    let newEmission =
      this.state.device +
      this.state.network * (this.state.hours * this.state.country);
    console.log(newEmission, "here");
    console.log(this.state, "hereeeee");

    this.setState({ emissions: newEmission });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <h1 className="title">Carbon Emissons Calculator</h1>
          </div>
          <div className="row">
            <Form
              onChange={this.onChange.bind(this)}
              setEmissions={this.setEmissions.bind(this)}
            ></Form>
          </div>
          <div className="row">
            {this.state.emissions ? this.state.emissions : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
