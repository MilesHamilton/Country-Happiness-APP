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
    };
    fetch();
  }, []);

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

  return (
    <>
      <h3>Perceptions of Corruption</h3>
      <VictoryChart responsive={false} width={800} height={500} minDomain={0.2}>
        <VictoryScatter
          style={{ data: { fill: '#c43a31' } }}
          alignment='start'
          size={25}
          data={handleCorruptionData()}
          labelComponent={<VictoryLabel dy={-30} />}
        />
      </VictoryChart>
    </>
  );
}
