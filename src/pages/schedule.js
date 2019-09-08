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
            Schedule
          </h2>
          <h4 className={`subtitle is-4 is-size-6-mobile ${scheduleStyles.textContent}`}>
            Information Coming Soon
          </h4>
        </div>
      </section>
    </Layout>
  );
}

export default SchedulePage;