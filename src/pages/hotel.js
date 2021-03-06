import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';
import hotelStyles from './hotel.module.scss';

const HotelPage = () => {
  return (
    <Layout topMargin>
      <Head title="Hotel" />
      <section className="section">
        <div className={`container ${hotelStyles.container}`}>
          <h2 className={`title is-2 is-size-4-mobile ${hotelStyles.textContent}`}>
            Hotel
          </h2>
          {/* <a className={`${hotelStyles.anchor} ${hotelStyles.marginTop}`} href="http://www.comfortsuitesbeachfront.com" target="_blank" rel="noopener noreferrer">
            <h4 className={`subtitle is-4 is-size-6-mobile ${hotelStyles.textContent}`}>
              Comfort Suites Beachfront
            </h4>
          </a>
          <h4 className={`subtitle is-4 is-size-6-mobile ${hotelStyles.textContent} ${hotelStyles.marginBottom}`}>
            To Book: 757-491-2400
          </h4>
          <h4 className={`subtitle is-4 is-size-6-mobile ${hotelStyles.textContent} ${hotelStyles.marginBottom}`}>
            Group Name: Edmonds Jones Wedding
          </h4>
          <h4 className={`subtitle is-4 is-size-6-mobile ${hotelStyles.textContent} ${hotelStyles.marginBottom}`}>
            Friday and Saturday required for group rate
          </h4>
          <h4 className={`subtitle is-4 is-size-6-mobile ${hotelStyles.textContent}`}>
            Book by 2/20/20
          </h4> */}

          {/* <a className={`${hotelStyles.anchor} ${hotelStyles.marginTop}`} href="https://www.diamondresortsandhotels.com/?MKC=GEDJONWED" target="_blank" rel="noopener noreferrer">
            <h4 className={`subtitle is-4 is-size-6-mobile ${hotelStyles.textContent}`}>
              Ocean Beach Club (Booking Link)
            </h4>
          </a>
          <h4 className={`subtitle is-4 is-size-6-mobile ${hotelStyles.textContent} ${hotelStyles.marginBottom}`}>
            Reservations Department: 1-800-438-2929
          </h4>
          <h4 className={`subtitle is-4 is-size-6-mobile ${hotelStyles.textContent} ${hotelStyles.marginBottom}`}>
            Group Name: Edmonds Jones Wedding
          </h4>
          <h4 className={`subtitle is-4 is-size-6-mobile ${hotelStyles.textContent} ${hotelStyles.marginBottom}`}>
            Block Code: GEDJONWED
          </h4>
          <h4 className={`subtitle is-4 is-size-6-mobile ${hotelStyles.textContent}`}>
            Book by 3/3/20
          </h4> */}


          <a className={`${hotelStyles.anchor} ${hotelStyles.marginTop}`} href="https://www.airbnb.com/s/Virginia-Beach--VA--United-States/homes" target="_blank" rel="noopener noreferrer">
            <h4 className={`subtitle is-4 is-size-6-mobile ${hotelStyles.textContent}`}>
              Airbnb
            </h4>
          </a>
        </div>
      </section>
    </Layout>
  );
}

export default HotelPage;