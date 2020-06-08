import React, { Component } from 'react';
import { VictoryChart, VictoryScatter, VictoryTheme } from 'victory';

export class CountryScoreTable extends Component {
  render() {
    return (
      <div>
        <VictoryChart
          // theme={VictoryTheme.material}
          domain={{ x: [0, 5], y: [0, 7] }}
          width={200}
          height={200}
          labels={0}
        >
          <VictoryScatter
            style={{ data: { fill: '#c43a31' } }}
            size={2}
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 7 },
            ]}
          />
        </VictoryChart>
      </div>
    );
  }
}

export default CountryScoreTable;
