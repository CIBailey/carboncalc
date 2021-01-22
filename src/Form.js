import React, { Component } from "react";
import data from "./data.json";

class Form extends Component {
  constructor(props) {
    super(props);
    this.onCalculate = this.onCalculate.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
  }

  onFieldChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    this.props.onChange(fieldName, fieldValue);
  }

  onCalculate() {
    this.props.setEmissions();
  }

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.onCalculate();
          }}
        >
          <div className="row">
            <div className=" col-sm">
              <label>
                Hours:
                <input
                  className="form-control form-control-lg"
                  required
                  type="number"
                  name="hours"
                  onChange={this.onFieldChange}
                />
              </label>
            </div>
            <div className=" col-sm">
              <label>
                Device:
                <select
                  className="custom-select custom-select-lg"
                  required
                  name="device"
                  onChange={this.onFieldChange}
                >
                  {Object.entries(data.device).map(([key, value]) => {
                    return (
                      <option value={value} key={key}>
                        {key}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>
            <div className=" col-sm">
              <label>
                Network:
                <select
                  className="custom-select custom-select-lg"
                  required
                  name="network"
                  onChange={this.onFieldChange}
                >
                  {Object.entries(data.network).map(([key, value]) => {
                    return (
                      <option value={value} key={key}>
                        {key}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>
            <div>
              {" "}
              <button type="submit" className="btn btn-primary btn-lg">
                Calculate
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
