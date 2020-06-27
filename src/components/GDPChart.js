import {
  VictoryChart,
  VictoryLabel,
  VictoryBar,
  VictoryStack,
  VictoryAxis,
} from 'victory';

import './CSS/gdpChart.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrackVisibility from 'react-on-screen';

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

  const height = 500;
  const width = 500;

  return (
    <div className='contain'>
      <div className='contain_info'>
        <img src={require('./CSS/gdp.svg')}></img>
        <h5>GDP per Capita</h5>
        <p>
          Here displays the top ten countries for GDP per capita. It is
          calculated in terms of Purchasing Power Parity (PPP) from the World
          Development Indicater (WDI) taken from the World Bank. after
          adujustment for population growth the index is displayed using the
          natural log of GDP per capita, as this form fits significantly better
          than the raw data.
        </p>
      </div>
      <TrackVisibility offset={600} once>
        {({ isVisible }) =>
          isVisible && (
            <div className='gdp-chart'>
              <VictoryChart
                horizontal
                height={height}
                width={width}
                padding={40}
                animate={{
                  duration: 1500,
                  onLoad: { duration: 1000 },
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
          )
        }
      </TrackVisibility>
    </div>
  );
};

export default GDPChart;
