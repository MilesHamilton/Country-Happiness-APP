import {
  VictoryChart,
  VictoryLabel,
  VictoryBar,
  VictoryStack,
  VictoryAxis,
} from 'victory';
import handleViewport from 'react-in-viewport';
import './CSS/gdpChart.css';
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

  const width = 500;
  const height = 600;

  return (
    <div className='contain'>
      <div className='contain_info'>
        <img src={require('./CSS/gdp.svg')}></img>
        <p>GDP per Capita</p>
      </div>
      <div className='gdp-chart'>
        <VictoryChart
          horizontal
          height={height}
          width={width}
          padding={40}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
            onEnter: { duration: 500, before: () => ({ y: 0 }) },
          }}
        >
          <VictoryStack
            style={{ data: { width: 35 }, labels: { fontSize: 15 } }}
          >
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
            tickValues={data
              .map((point) => point['GDP per capita'].x)
              .reverse()}
          />
        </VictoryChart>
      </div>
    </div>
  );
};

export default GDPChart;
