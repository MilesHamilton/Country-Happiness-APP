import { VictoryChart, VictoryScatter, VictoryLabel } from 'victory';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import TrackVisibility from 'react-on-screen';
import './CSS/corruption.css';

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
    <div className='corruption-container' id='corruption'>
      <div className='corruption-container_info'>
        <img src={require('./CSS/corruption.svg')}></img>
        <h5>Perceptions of Corruption</h5>
        <p>
          Here dispalys the top ten countries perceptions of corruption. the
          average of binary answers to two Gallop World Poll questions: “Is
          corruption widespread throughout the government or not?” and “Is
          corruption widespread within businesses or not?” Where data for
          government corruption are missing, the perception of business
          corruption is used as the overall corruption-perception measure.
        </p>
      </div>

      <div className='corruption-chart'>
        <VictoryChart
          width={850}
          height={500}
          minDomain={0.1} // animate={{ easing: 'exp' }}
        >
          <VictoryScatter
            style={{ data: { fill: '#c43a31' } }}
            alignment='start'
            size={25}
            data={handleCorruptionData()}
            labelComponent={<VictoryLabel dy={-30} />}
          />
        </VictoryChart>
      </div>
    </div>
  );
}
