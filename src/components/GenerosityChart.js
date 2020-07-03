import { VictoryPie, VictoryLegend } from 'victory';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/generosityChart.css';

export default function GenerosityChart() {
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

  const handleCountryData = () => {
    return (
      data &&
      data.map((elm) => {
        return { name: elm['Country or region'] };
      })
    );
  };

  const handleGenerosityData = () => {
    return (
      data &&
      data.map((elm) => {
        return elm['Generosity'];
      })
    );
  };

  return (
    <div className='generosity-container'>
      <div className='generosity-container_info'>
        <img src={require('./CSS/generosity.svg')}></img>
        <h5>Generosity</h5>
        <p>
          Here shows the top ten most generous countries. Generosity is the
          residual of regressing the national average of GWP responses to the
          question “Have you donated money to a charity in the past month?” on
          GDP per capita.
        </p>
      </div>

      <div className='generosity-chart'>
        <VictoryPie
          innerRadius={80}
          colorScale={[
            'green',
            'orange',
            'gold',
            'cyan',
            'navy',
            'blue',
            'red',
            'skyblue',
            'brown',
            'pink',
          ]}
          animate={{ easing: 'exp' }}
          // animate={{
          //   duration: 1500,
          //   onLoad: { duration: 1000 },
          // }}
          labelRadius={({ innerRadius }) => innerRadius + 30}
          style={{
            labels: { fill: 'white', fontSize: 10, fontWeight: 'bold' },
          }}
          data={handleGenerosityData()}
          labels={handleGenerosityData()}
        />
      </div>
      <div className='generosity-legend'>
        <VictoryLegend
          orientation='vertical'
          gutter={0}
          width={100}
          data={handleCountryData()}
          colorScale={[
            'green',
            'orange',
            'gold',
            'cyan',
            'navy',
            'blue',
            'red',
            'skyblue',
            'brown',
            'pink',
          ]}
        />
      </div>
    </div>
  );
}
