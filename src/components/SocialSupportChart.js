import { VictoryBar, VictoryChart, VictoryTooltip } from 'victory';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrackVisibility from 'react-on-screen';
import './CSS/social.css';

export default function SocialSupportChart({}) {
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

  const handleSocialData = () => {
    return (
      data &&
      data.map((elm) => {
        return {
          y: elm['Social support'],
          x: elm['Country or region'],
          label: elm['Social support'],
        };
      })
    );
  };

  return (
    <div className='social-container'>
      <div className='social-container_info'>
        <img src={require('./CSS/social.svg')}></img>
        <h5>Social Support</h5>
        <p flow-text>
          Here shows the top ten countries that rank in social support. Social
          support is the national average of the bianary responses (0=no, 1=yes)
          to the Gallup World Poll question, "if you were in trouble, do you
          have relatives or friends you can count on to help you whenever you
          need them, or not?
        </p>
      </div>
      <TrackVisibility offset={600} once>
        {({ isVisible }) =>
          isVisible && (
            <div className='social-chart'>
              <VictoryChart
                responsive={false}
                width={800}
                height={400}
                animate={{
                  duration: 1000,
                  // onLoad: { duration: 1000 },
                }}
              >
                <VictoryBar
                  labelComponent={
                    <VictoryTooltip
                      pointerOrientation='bottom'
                      flyoutWidth={50}
                      flyoutHeight={20}
                      pointerWidth={10}
                      cornerRadius={10}
                      active
                    />
                  }
                  style={{
                    data: {
                      fill: '#c43a31',
                      width: 50,
                    },
                  }}
                  alignment='start'
                  data={handleSocialData()}
                />
              </VictoryChart>
            </div>
          )
        }
      </TrackVisibility>
    </div>
  );
}
