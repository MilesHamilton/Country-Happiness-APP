import React from 'react';
import './CSS/nav.css';
import { Link } from 'react-scroll';

export default function Nav() {
  return (
    <div className='navbar-fixed nav'>
      <nav>
        <div className='nav-wrapper'>
          <a href='#' className='brand-logo'>
            Country Happiness Index
          </a>
          <div className='link-wrapper'>
            <ul>
              <Link
                activeClass='active'
                to='info'
                spy={true}
                smooth={true}
                offset={-300}
                duration={500}
              >
                Home
              </Link>
              <Link
                activeClass='active'
                to='gdp'
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                GDP per Capita
              </Link>
              <Link
                activeClass='active'
                to='generosity'
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                Generosity
              </Link>
              <Link
                activeClass='active'
                to='corruption'
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                Perceptions of Corruption
              </Link>
              <Link
                activeClass='active'
                to='social'
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                Social Support
              </Link>
              <Link
                activeClass='active'
                to='freedom'
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                Freedom to Make Life Choices
              </Link>
              <Link
                activeClass='active'
                to='life'
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                Healthy Life Expectancy
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
