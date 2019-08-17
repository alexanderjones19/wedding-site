import React, { useState } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import headerStyles from './header.module.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [hamburgerAria, setHamburgerAria] = useState(false);
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const toggle = () => {
    console.log('toggle');
    setHamburgerAria(hamburgerAria === false ? true : false);
    setHamburgerActive(hamburgerActive === false ? true : false);
  }

  return (
    <header className={headerStyles.header}>
      <nav className="navbar" role="navigation" aria-label="main-navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            {data.site.siteMetadata.title}
          </Link> 

          <a role="button" className={`navbar-burger ${!hamburgerActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded={hamburgerAria} onClick={toggle}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${!hamburgerActive ? 'is-active' : ''}`}>
          <div className="navbar-start">
            
          </div>
          <div className="navbar-end">
            <Link className="navbar-item" to="/gallery">
              Gallery
            </Link>

            <Link className="navbar-item" to="/venue">
              Venue
            </Link>

            <Link className="navbar-item" to="/schedule">
              Schedule
            </Link>

            <Link className="navbar-item" to="/travel">
              Travel
            </Link>

            <Link className="navbar-item" to="/rsvp">
              RSVP
            </Link>

            <Link className="navbar-item" to="/registry">
              Registry
            </Link>
          </div>
        </div>
      </nav>

      {/* <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1> */}
    </header>
  );
}

export default Header;