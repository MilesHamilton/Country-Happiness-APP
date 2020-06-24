import {
  VictoryChart,
  VictoryLabel,
  VictoryBar,
  VictoryStack,
  VictoryAxis,
} from 'victory';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GDPChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios(
        'https://enigmatic-temple-08680.herokuapp.com/page/1/10'
      );
      setData(res.data);
    };
    fetch();
  }, []);

  const handleGDPData = () => {
    return (
      data &&
      data.map((elm) => {
        return { x: elm['Country or region'], y: elm['GDP per capita'] };
      })
    );
  };

  const width = 400;
  const height = 400;

  return (
    <>
      <h3>GDP per capita</h3>
      <VictoryChart horizontal height={height} width={width} padding={40}>
        <VictoryStack style={{ data: { width: 25 }, labels: { fontSize: 15 } }}>
          <VictoryBar
            style={{ data: { fill: 'tomato' } }}
            data={handleGDPData()}
          />
          <VictoryBar
            style={{ data: { fill: 'orange' } }}
            data={handleGDPData()}
            labels={({ datum }) => `${Math.abs(datum.y)}`}
          />
        </VictoryStack>

        <VictoryAxis
          style={{
            axis: { stroke: 'transparent' },
            ticks: { stroke: 'transparent' },
            tickLabels: { fontSize: 15, fill: 'black' },
          }}
          tickLabelComponent={
            <VictoryLabel x={width / 2} textAnchor='middle' />
          }
          tickValues={data.map((point) => point['GDP per capita'].x).reverse()}
        />
      </VictoryChart>
    </>
  );
};

export default GDPChart;
