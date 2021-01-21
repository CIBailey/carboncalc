import React, { Component } from "react";
import data from "./data.json";

class Form extends Component {
  constructor(props) {
    super(props);
  }

  onFieldChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    this.props.onChange(fieldName, fieldValue);
  }

  render() {
    return (
      <div className="App">
        <form>
          <label>
            Hours:
            <input
              required
              type="number"
              name="hours"
              onChange={this.onFieldChange.bind(this)}
            />
          </label>
          <label>
            Device Type:
            <select
              required
              name="device"
              onChange={this.onFieldChange.bind(this)}
            >
              {Object.entries(data[0].device).map(([key, value]) => {
                return (
                  <option value={value} key={key}>
                    {key}
                  </option>
                );
              })}
            </select>
          </label>
          <label>
            Network Type:
            <select
              required
              name="network"
              onChange={this.onFieldChange.bind(this)}
            >
              {Object.entries(data[0].network).map(([key, value]) => {
                return (
                  <option value={value} key={key}>
                    {key}
                  </option>
                );
              })}
            </select>
          </label>
          <select
            requiredname="network"
            onChange={this.onFieldChange.bind(this)}
          >
            <option value={data[0].country.World} name="country"></option>
          </select>
          <button
            value="Calculate"
            onClick={this.props.setEmissions()}
          ></button>
        </form>
      </div>
    );
  }
}

export default Form;

// $(document).ready(function () {
//   console.log("ready");
//   $("[name='network']").trigger("change");
// });
