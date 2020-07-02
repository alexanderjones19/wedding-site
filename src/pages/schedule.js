import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';
import scheduleStyles from './schedule.module.scss';

const SchedulePage = () => {
  return (
    <Layout topMargin>
      <Head title="Schedule" />
      <section className="section">
        <div className="container">
          <h2 className={`title is-2 is-size-4-mobile ${scheduleStyles.textContent}`}>
            Schedule + COVID-19 Guidelines
          </h2>
          <h4 className={`subtitle is-4 is-size-6-mobile ${scheduleStyles.textContent}`}>
            Doors open - 5:30PM
          </h4>
          <h4 className={`subtitle is-4 is-size-6-mobile ${scheduleStyles.textContent}`}>
            Ceremony - 6PM
          </h4>
          <h4 className={`subtitle is-4 is-size-6-mobile ${scheduleStyles.textContent}`}>
            The following are the Covid-19 guidelines the museum has given us:
          </h4>
          <h4 className={`subtitle is-4 is-size-6-mobile ${scheduleStyles.textContent}`}>
            Everyone will be required to wear a mask inside the museum unless eating or drinking. 
          </h4>
          <h4 className={`subtitle is-4 is-size-6-mobile ${scheduleStyles.textContent}`}>
            For the ceremony, we will be using both the Rodriguez Pavilion and the adjoining Price Auditorium to ensure that we have the required social distancing. The ceremony will be live streamed into the Auditorium from the Pavilion. Due to the low occupancy in the ceremony space, only close family will be in Rodriguez. We apologize for any inconveniences, but we are doing everything to keep everyone safe and healthy! 
          </h4>
        </div>
      </section>
    </Layout>
  );
}

export default SchedulePage;