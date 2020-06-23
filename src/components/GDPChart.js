import { VictoryVoronoi } from 'victory';
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
      console.log(res.data);
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

  const handleGDPData = () => {
    return (
      data &&
      data.map((elm) => {
        return { x: elm['GDP per capita'], y: elm['GDP per capita'] };
      })
    );
  };
  console.log(handleGDPData());

  return (
    <div>
      <VictoryVoronoi
        style={{ data: { stroke: '#c43a31', strokeWidth: 2 } }}
        width={200}
        height={200}
        data={handleGDPData()}
      />
    </div>
  );
};

export default GDPChart;
