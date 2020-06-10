import React, { Component } from 'react';
import {
  VictoryChart,
  VictoryPolarAxis,
  VictoryStack,
  VictoryZoomContainer,
  VictoryBar,
} from 'victory';
import { useState, useEffect } from 'react';

export default function SocialSupportChart() {
  const [data, setData] = useState({});

  useEffect(async () => {
    const url = await 'https://enigmatic-temple-08680.herokuapp.com/';
    console.log(url);
    setData(url.data);
  }, []);

  return (
    <div>
      <VictoryChart
        polar
        maxDomain={{ x: 360 }}
        height={150}
        width={150}
        padding={30}
        // containerComponent={<VictoryZoomContainer />}
      >
        <VictoryPolarAxis
          dependentAxis
          style={{
            axis: { stroke: 'none' },
            tickLabels: { fill: 'none' },
            grid: { stroke: 'grey', strokeDasharray: '4, 8' },
          }}
        />
        <VictoryPolarAxis tickValues={[0, 45, 90, 135, 180, 225, 270, 315]} />
        <VictoryStack
          colorScale={['#ad1b11', '#c43a31', '#dc7a6b']}
          style={{ data: { width: 50 } }}
        >
          <VictoryBar />
          <VictoryBar />
          <VictoryBar />
        </VictoryStack>
      </VictoryChart>
    </div>
  );
}
