import React from 'react';
import './CSS/footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className='footer-wrapper'>
        <div className='credits'>
          <p>This project was created using</p>
          <a href='https://formidable.com/open-source/victory/' target='_blank'>
            <img src={require('./CSS/victory.svg')}></img>
          </a>
        </div>

        <div className='copywrite'>@2020 Miles Hamilton</div>
        <div className='sources'>
          <a href='https://worldhappiness.report/' target='_blank'>
            2020 World Happiness Report
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
