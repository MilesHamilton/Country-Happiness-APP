import React, { Component } from 'react';
import { VictoryVoronoi } from 'victory';

export class GDPChart extends Component {
  render() {
    return (
      <div>
        <VictoryVoronoi
          style={{ data: { stroke: '#c43a31', strokeWidth: 2 } }}
          width={200}
          height={200}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 6 },
          ]}
        />
      </div>
    );
  }
}

export default GDPChart;
