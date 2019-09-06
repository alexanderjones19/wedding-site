import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';
import rsvpStyles from './rsvp.module.scss';

const RsvpPage = () => {
  return (
    <Layout topMargin>
      <Head title="RSVP" />
      <section className={`section ${rsvpStyles.sectionStyles}`}>
        <div className="container">
          <h2 className={`title is-2 ${rsvpStyles.textContent}`}>
            RSVP
          </h2>
          <h4 className={`subtitle is-4 ${rsvpStyles.textContent}`}>
            Contact: edmondsjoneswedding@gmail.com
          </h4>
        </div>
      </section>
      <section className={`section ${rsvpStyles.sectionStyles}`}>
        <div className={`container ${rsvpStyles.formContainer}`}>
          <iframe title="RSVP Form" src="https://docs.google.com/forms/d/e/1FAIpQLSdAH2PxLq6opruisO7mESzxfJN9WmZCBk6nBWAGnVto7s29CQ/viewform?embedded=true" width="640" height="808" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
        </div>
      </section>
    </Layout>
  );
}

export default RsvpPage;