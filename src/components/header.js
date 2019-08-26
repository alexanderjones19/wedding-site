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
    setHamburgerAria(hamburgerAria === false ? true : false);
    setHamburgerActive(hamburgerActive === false ? true : false);
  }

  return (
    <header className={headerStyles.header}>
      <nav className={`navbar is-fixed-top is-transparent is-spaced ${headerStyles.navbar}`} role="navigation" aria-label="main-navigation">
        <div className="navbar-brand">
          <Link className={`navbar-item ${headerStyles.navbarItem}`} to="/">
            {data.site.siteMetadata.title}
          </Link> 

          <a role="button" className={`navbar-burger ${headerStyles.burgerIcon} ${hamburgerActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded={hamburgerAria} onClick={toggle}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${headerStyles.navbarMenu} ${hamburgerActive ? 'is-active' : ''}`}>
          <div className="navbar-start">
            
          </div>
          <div className="navbar-end">
            <Link className={`navbar-item ${headerStyles.navbarItem}`} to="/gallery">
              Gallery
            </Link>

            <Link className={`navbar-item ${headerStyles.navbarItem}`} to="/venue">
              Venue
            </Link>

            <Link className={`navbar-item ${headerStyles.navbarItem}`} to="/schedule">
              Schedule
            </Link>

            <Link className={`navbar-item ${headerStyles.navbarItem}`} to="/travel">
              Hotel
            </Link>

            <Link className={`navbar-item ${headerStyles.navbarItem}`} to="/rsvp">
              RSVP
            </Link>

            <Link className={`navbar-item ${headerStyles.navbarItem}`} to="/registry">
              Registry
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;