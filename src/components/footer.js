import React from 'react';

import footerStyles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={`footer ${footerStyles.footer}`}>
      <div className="content has-text-centered">
        <p className={footerStyles.content}></p>
      </div>
    </footer>
  );
}

export default Footer;