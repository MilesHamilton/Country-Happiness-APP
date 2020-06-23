import { VictoryChart, VictoryScatter, VictoryLabel } from 'victory';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CorruptionChart({}) {
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
  console.log(handleCountryData());

  const handleCorruptionData = () => {
    return (
      data &&
      data.map((elm) => {
        return {
          y: elm['Perceptions of corruption'],
          x: elm['Country or region'],
          label: elm['Perceptions of corruption'],
        };
      })
    );
  };
  console.log(handleCorruptionData());

  return (
    <>
      <h1>Perceptions of Corruption</h1>
      <VictoryChart responsive={false} width={800} height={500} minDomain={0.2}>
        <VictoryScatter
          style={{ data: { fill: '#c43a31' } }}
          alignment='start'
          size={15}
          data={handleCorruptionData()}
          labelComponent={<VictoryLabel dy={-20} />}
        />
      </VictoryChart>
    </>
  );
}
