import React, { Component } from "react";
import "./App.css";
import Form from "./Form.js";
import Graph from "./Graph.js";
import data from "./data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device: Object.values(data.device)[0],
      network: Object.values(data.network)[0],
      country: Object.values(data.country)[0],
      hours: 0,
      emissions: null,
    };
  }

  onChange(field, value) {
    this.setState({ [field]: Number(value) });
  }

  setEmissions() {
    const newEmission =
      (this.state.device + this.state.network) *
      (this.state.hours * this.state.country);
    this.setState({ emissions: newEmission });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <h1 className="title">Calculate your emissions</h1>
          </div>
          <div className="row">
            <Form
              onChange={this.onChange.bind(this)}
              setEmissions={this.setEmissions.bind(this)}
            ></Form>
          </div>
          <div className="row">
            <div id="tagline">
              Breakdown of CO2 emissions from 1 hour of streaming, World (2019)
            </div>
          </div>
          <div className="row">
            <div id="unit">g CO2-eq</div>
          </div>
          <div className="row">
            <Graph dataGraph={this.state}></Graph>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
