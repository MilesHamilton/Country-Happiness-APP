import React, { Component } from 'react';
import { VictoryPie } from 'victory';
export class GenerosityChart extends Component {
  render() {
    return (
      <div>
        <VictoryPie
          padAngle={({ datum }) => datum.y}
          innerRadius={50}
          // data={sampleData}
        />
      </div>
    );
  }
}

export default GenerosityChart;
