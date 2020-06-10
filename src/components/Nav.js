import React, { Component } from 'react';

export class Nav extends Component {
  render() {
    return (
      <nav>
        <div class='nav-wrapper'>
          <a href='#' class='brand-logo'>
            Logo
          </a>
          <ul id='nav-mobile' class='right hide-on-med-and-down'>
            <li>
              <a href='sass.html'></a>
            </li>
            <li>
              <a href='badges.html'></a>
            </li>
            <li>
              <a href='collapsible.html'></a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
