import React from 'react';
import './CSS/layout.css';

export default function Layout() {
  return (
    <div className='layout_container'>
      <h1>How happy is your country?</h1>
      <p>
        Finland is the happiest country on Earth, according to the latest World
        Happiness Report. The least? South Sudan. For everything in between,
        check out the ranking of 150 countries along the table.{' '}
        <a
          href='https://www.washingtonpost.com/graphics/world/world-happiness-2015/'
          target='_blank'
        >
          Related article.
        </a>
      </p>
    </div>
  );
}
