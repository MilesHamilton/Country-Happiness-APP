import React from 'react';
import './CSS/info.css';

export default function Info() {
  return (
    <div>
      <div className='svg-data gdp'>
        <img src={require('./CSS/gdp.svg')}></img>
      </div>
      <div className='svg-data gdp'>
        <img src={require('./CSS/generosity.svg')}></img>
      </div>
      <div className='svg-data gdp'>
        <img src={require('./CSS/freedom.svg')}></img>
      </div>
      <div className='svg-data gdp'>
        <img src={require('./CSS/dystopia.svg')}></img>
      </div>
      <div className='svg-data gdp'>
        <img src={require('./CSS/life.svg')}></img>
      </div>
      <div className='svg-data gdp'>
        <img src={require('./CSS/corruption.svg')}></img>
      </div>
      <div className='svg-data gdp'>
        <img src={require('./CSS/social.svg')}></img>
      </div>
      <div className='svg-data gdp'>
        <img src={require('./CSS/happiness.svg')}></img>
      </div>
    </div>
  );
}
