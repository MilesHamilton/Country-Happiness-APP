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

  const handleSocialData = () => {
    return (
      data &&
      data.map((elm) => {
        return elm['Social support'];
      })
    );
  };

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
};

export default GDPChart;
