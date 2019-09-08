import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';
import hotelStyles from './hotel.module.scss';

const HotelPage = () => {
  return (
    <Layout topMargin>
      <Head title="Hotel" />
      <section className="section">
        <div className="container">
          <h2 className={`title is-2 is-size-4-mobile ${hotelStyles.textContent}`}>
            Hotel
          </h2>
          <h4 className={`subtitle is-4 is-size-6-mobile ${hotelStyles.textContent}`}>
            Information Coming Soon
          </h4>
        </div>
      </section>
    </Layout>
  );
}

export default HotelPage;