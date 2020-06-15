import { VictoryPie } from 'victory';
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
        return elm['Country or region'];
      })
    );
  };
  console.log(handleCountryData());

  const handleGenerosityData = () => {
    return (
      data &&
      data.map((elm) => {
        return elm['Generosity'];
      })
    );
  };
  console.log(handleGenerosityData());

  return (
    <div>
      <VictoryPie
        // padAngle={({ datum }) => datum.y}
        innerRadius={50}
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
        data={handleGenerosityData()}
        labels={handleCountryData()}
      />
    </div>
  );
}
