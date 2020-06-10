import './App.css';
import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import CountryScoreTable from './components/CountryScoreTable';
import CorruptionChart from './components/CorruptionChart';
import SocialSupportChart from './components/SocialSupportChart';
import GDPChart from './components/GDPChart';
import GenerosityChart from './components/GenerosityChart';
import Form from './components/Form';
// import Posts from './components/Posts'
import axios from 'axios';
import Paginator from 'react-hooks-paginator';

export default function App() {
  const pageLimit = 10;
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios('https://enigmatic-temple-08680.herokuapp.com/');
      setData(res.data);
      console.log(res);
    };
    fetch();
  }, []);

  useEffect(() => {
    setCurrentData(data.slice(offset, offset + pageLimit));
  }, [offset, data]);
  console.log();

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
