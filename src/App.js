import './App.css';
import Nav from './components/Nav';
import CountryScoreTable from './components/CountryScoreTable';
import CorruptionChart from './components/CorruptionChart';
import SocialSupportChart from './components/SocialSupportChart';
import GDPChart from './components/GDPChart';
import GenerosityChart from './components/GenerosityChart';
import Form from './components/Form';
import React from 'react';
// import Posts from './components/Posts'

export default function App() {
  return (
    <div>
      <div>
        <Nav />
        <div className='wrapper'>
          <div className='row'>
            <div className='col s6'>
              <CountryScoreTable />
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
            <div className='col s6'>
              <Form />
            </div>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
