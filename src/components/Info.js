import React from 'react';
import './CSS/info.css';

export default function Info() {
  return (
    <div className='icon_container' id='info'>
      <div className='icon_info'>
        <h4>Measuring world happiness</h4>
        <p>
          These rankings were calculated by evaluating several different
          variables in each country
        </p>
      </div>
      <div className='icons'>
        <div className='svg-data gdp'>
          <img src={require('./CSS/gdp.svg')}></img>

          <p>GDP per capita</p>
        </div>
        <i class='material-icons'>add</i>
        <div className='svg-data generosity'>
          <img src={require('./CSS/generosity.svg')}></img>
          <p>Generosity</p>
        </div>
        <i class='material-icons'>add</i>
        <div className='svg-data freedom'>
          <img src={require('./CSS/freedom.svg')}></img>
          <p>Freedom to Make Life Choices</p>
        </div>
        <i class='material-icons'>add</i>
        <div className='svg-data life'>
          <img src={require('./CSS/life.svg')}></img> <p>Life Expentancy</p>
        </div>
        <i class='material-icons'>add</i>
        <div className='svg-data curruption'>
          <img src={require('./CSS/corruption.svg')}></img>{' '}
          <p>Perceptions of Corruption</p>
        </div>
        <i class='material-icons'>add</i>
        <div className='svg-data social'>
          <img src={require('./CSS/social.svg')}></img> <p>Social Support</p>
        </div>
        <i class='material-icons equals'>drag_handle</i>
        <div className='svg-data happiness'>
          <img src={require('./CSS/happiness.svg')}></img> <p>Happiness</p>
        </div>
      </div>
    </div>
  );
}
