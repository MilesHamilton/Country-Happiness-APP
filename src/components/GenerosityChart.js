import { VictoryPie, VictoryLegend } from 'victory';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <>
      <h3>Generosity</h3>
      <VictoryLegend
        orientation='vertical'
        gutter={20}
        data={handleCountryData()}
        colorScale={[
          'tomato',
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
      <VictoryPie
        innerRadius={80}
        colorScale={[
          'tomato',
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
        labelRadius={({ innerRadius }) => innerRadius + 30}
        style={{ labels: { fill: 'white', fontSize: 10, fontWeight: 'bold' } }}
        data={handleGenerosityData()}
        labels={handleGenerosityData()}
      />
    </>
  );
}
