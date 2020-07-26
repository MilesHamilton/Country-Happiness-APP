import './App.css';
import Nav from './components/Nav';
import Info from './components/Info';
import CountryScoreTable from './components/CountryScoreTable';
import CorruptionChart from './components/CorruptionChart';
import SocialSupportChart from './components/SocialSupportChart';
import GDPChart from './components/GDPChart';
import GenerosityChart from './components/GenerosityChart';
import Layout from './components/Layout';
import React from 'react';
import FreedomChart from './components/FreedomChart';
import LifeChart from './components/LifeChart';
import Footer from './components/Footer';
import TrackVisibility from 'react-on-screen';

var dcroll = require('react-scroll');
var E3vents = dcroll.Events;

E3vents.scrollEvent.register('begin', function (to, element) {
  console.log('begin', to, element);
});

export default function App() {
  return (
    <div>
      <Nav />
      <div className='container'>
        <div className='row'>
          <div className='layout'>
            <Layout />
          </div>
          <div className='col s12'>
            <Info />
          </div>
          <div className='col s12'>
            <CountryScoreTable />
          </div>
          <div className='col s12'>
            <GDPChart />
          </div>
          <div className='col s12'>
            <GenerosityChart />
          </div>
          <div className='col s12'>
            <CorruptionChart />
          </div>
          <div className='col s12'>
            <SocialSupportChart />
          </div>
          <div className='col s12'>
            <FreedomChart />
          </div>
          <div className='col s12'>
            <LifeChart />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
