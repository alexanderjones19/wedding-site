import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';
import RsvpStyles from './rsvp.module.scss';

const RsvpPage = () => {
  return (
    <Layout topMargin>
      <Head title="RSVP" />
      {/* <section className={`section ${RsvpStyles.contentSection}`}>
        <div className="container">
          <p className={RsvpStyles.content}>
            Please RSVP with the form below.
          </p>
        </div>
      </section> */}
      <section className={`section ${RsvpStyles.formSection}`}>
        <div className={`container ${RsvpStyles.formContainer}`}>
          <iframe title="RSVP Form" src="https://docs.google.com/forms/d/e/1FAIpQLSdAH2PxLq6opruisO7mESzxfJN9WmZCBk6nBWAGnVto7s29CQ/viewform?embedded=true" width="640" height="808" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
        </div>
      </section>
    </Layout>
  );
}

export default RsvpPage;