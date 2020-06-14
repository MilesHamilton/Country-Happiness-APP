import { VictoryChart, VictoryBar } from 'victory';
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
      <VictoryChart domainPadding={20} width={200} height={200}>
        <VictoryBar
          style={{ data: { fill: '#c43a31' } }}
          // data={sampleData}
        />
      </VictoryChart>
    </div>
  );
}
