import {
  VictoryChart,
  VictoryPolarAxis,
  VictoryBar,
  VictoryTheme,
} from 'victory';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SocialSupportChart = () => {
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

  console.log();

  return (
    <>
      <VictoryChart polar theme={VictoryTheme.material}>
        {[handleCountryData].map((d, i) => {
          return (
            <VictoryPolarAxis
              dependentAxis
              key={i}
              label={d}
              labelPlacement='perpendicular'
              style={{ tickLabels: { fill: 'none' } }}
              axisValue={d}
            />
          );
        })}
        <VictoryBar
          style={{ data: { fill: 'tomato', width: 25 } }}
          data={[
            { handleCountryData },
            { handleSocialData },
            // { x: 'cat', y: 1.2 },
            // { x: 'dog', y: 1.5 },
            // { x: 'bird', y: 1.2 },
            // { x: 'frog', y: 1.9 },
            // { x: 'fish', y: 1.2 },
            // { x: 'monkey', y: 1.2 },
          ]}
        />
      </VictoryChart>
    </>
  );
};

export default SocialSupportChart;
