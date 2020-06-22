import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';
import axios from 'axios';
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
      this.state.data.map((elm, index) => {
        return { y: elm['Social support'], x: elm['Country or region'] };
      })
    );
  };

  render() {
    console.log(this.handleSocialData());
    console.log(this.state);
    return (
      <>
        <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 15 }}>
          <VictoryBar
            // cornerRadius={{ topLeft: ({ datum }) => datum.x * 4 }}
            style={{
              data: {
                fill: '#c43a31',
                width: 15,
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
