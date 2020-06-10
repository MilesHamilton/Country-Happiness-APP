import { VictoryPie } from 'victory';
import React, { useState, useEffect } from 'react';

export default function GenerosityChart() {
  const [data, setData] = useState({});

  useEffect(async () => {
    const url = await 'https://enigmatic-temple-08680.herokuapp.com/';
    console.log(url);
    setData(url.data);
  }, []);

  return (
    <div>
      <VictoryPie
        padAngle={({ datum }) => datum.y}
        innerRadius={50}
        // data={sampleData}
      />
    </div>
  );
}
