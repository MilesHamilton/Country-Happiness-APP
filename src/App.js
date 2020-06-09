import './App.css';
import React, { Component } from 'react';
import Nav from './components/Nav';
import CountryScoreTable from './components/CountryScoreTable';
import CorruptionChart from './components/CorruptionChart';
import SocialSupportChart from './components/SocialSupportChart';
import GDPChart from './components/GDPChart';
import GenerosityChart from './components/GenerosityChart';
import axios from 'axios';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  // componentDidMount = () => {
  //   axios.get('https://enigmatic-temple-08680.herokuapp.com/').then((res) => {
  //     this.setState({
  //       data: res.data,
  //     });
  //   });
  // };

  render() {
    console.log(this.state);
    return (
      <div>
        <Nav />
        <div className='wrapper'>
          <div className='row'>
            <div className='col s6'>
              <CountryScoreTable key={this.state} />
            </div>
            <div className='col s6'>
              <SocialSupportChart />
            </div>
            <div className='col s6'>
              <GenerosityChart />
            </div>
            <div className='col s6'>
              <CorruptionChart />
            </div>
            <div className='col s6'>
              <GDPChart />
            </div>
          </div>
          <footer></footer>
        </div>
      </div>
    );
  }
}

export default App;
