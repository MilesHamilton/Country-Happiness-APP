import React, { Component } from 'react';
import { VictoryChart, VictoryBar, VictoryTheme } from 'victory';

export class CorruptionChart extends Component {
  render() {
    return (
      <div>
        <VictoryChart domainPadding={20} width={200} height={200}>
          <VictoryBar
            style={{ data: { fill: '#c43a31' } }}
            // data={sampleData}
          />
        </VictoryChart>
      </div>
    );
  }
}

export default CorruptionChart;
