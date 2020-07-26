import {
  VictoryChart,
  VictoryLabel,
  VictoryBar,
  VictoryStack,
  VictoryAxis,
} from 'victory';

import './CSS/life.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrackVisibility from 'react-on-screen';

const LifeChart = () => {
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

  const handleLifeData = () => {
    return (
      data &&
      data.map((elm) => {
        return {
          x: elm['Country or region'],
          y: elm['Healthy life expectancy'],
        };
      })
    );
  };

  const height = 500;
  const width = 500;

  return (
    <div className='life-container' id='life'>
      <div className='life-container_info'>
        <img src={require('./CSS/life.svg')}></img>
        <h5>Healthy Life Expectancy</h5>
        <p>
          Here displays the top ten countries for healthy life expectancy. the
          data for healthy life expectancy at birth is constructed based on data
          from the Wolrd Health Organization (WHO) Global Health Observatory
          data repository, with data available for 2005, 2010, 2015, and 2016.
          To match this report's sample period, interpolation and extrapolation
          are used.
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
                  duration: 1000,
                  // onLoad: { duration: 1000 },
                }}
              >
                <VictoryStack
                  style={{ data: { width: 35 }, labels: { fontSize: 15 } }}
                >
                  <VictoryBar
                    style={{ data: { fill: 'blue' } }}
                    data={handleLifeData()}
                  />
                  <VictoryBar
                    style={{ data: { fill: 'cyan' } }}
                    data={handleLifeData()}
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
                    .map((point) => point['Healthy life expectancy'].x)
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

export default LifeChart;
