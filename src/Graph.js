import React, { Component } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  LabelSeries,
  VerticalGridLines,
  HorizontalGridLines,
  HorizontalBarSeries,
} from "react-vis";

class Graph extends Component {
  render() {
    const formatData = [
      { y: "Your Emissions", x: this.props.dataGraph.emissions },
      { y: "Boiling a kettle", x: 34 },
    ];

    const BarSeries = HorizontalBarSeries;
    return (
      <div style={{ paddingLeft: "50px" }}>
        <XYPlot
          color="#68f394"
          animation
          width={800}
          height={200}
          yType="ordinal"
          stackBy="x"
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries data={formatData} />

          <LabelSeries data={formatData} getLabel={(d) => d.x} />
        </XYPlot>
      </div>
    );
  }
}

export default Graph;
