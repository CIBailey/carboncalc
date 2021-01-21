import React, { Component } from "react";
import "./App.css";
import Form from "./Form.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { device: 0, network: 0, country: 463, emissions: 0 };
  }

  onChange(field, value) {
    this.setState({ [field]: value });
  }

  setEmissions() {
    // this.setState({ emissions: newEmission });
  }

  render() {
    console.log(this.state);
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
          <div className="row">Data Here</div>
        </div>
      </div>
    );
  }
}

export default App;
