import { VictoryBar, VictoryChart, VictoryTooltip } from 'victory';
import React, { Component } from 'react';

export default class SocialSupportChart extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    fetch('https://enigmatic-temple-08680.herokuapp.com/page/1/10')
      .then((parsed) => parsed.json())
      .then((data) => {
        this.setState({ data: data });
        console.log(data);
      });
  };

  handleSocialData = () => {
    return (
      this.state.data &&
      this.state.data.map((elm) => {
        return {
          y: elm['Social support'],
          x: elm['Country or region'],
          label: elm['Social support'],
        };
      })
    );
  };

  render() {
    return (
      <>
        <h3>Social Support</h3>
        <VictoryChart responsive={false} width={800} height={500}>
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
            data={this.handleSocialData()}
          />
        </VictoryChart>
      </>
    );
  }
}
