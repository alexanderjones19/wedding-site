import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import errorStyles from './404.module.scss';

const Error404Page = () => {
  return (
    <Layout topMargin>
      <Head title="404" />
      <section className="section">
        <div className="container">
          <h2 className={`title is-2 ${errorStyles.textContent}`}>
            404
          </h2>
          <h4 className={`subtitle is-4 ${errorStyles.textContent}`}>
            Sorry, the page you are looking for was not found.
          </h4>
          <h4 className={`subtitle is-4 ${errorStyles.textContent}`}>
            <Link className={errorStyles.anchor} to="/">Return home</Link>
          </h4>
        </div>
      </section>
      {/* <p><Link to="/">Return home</Link></p> */}
    </Layout>
  );
}

export default Error404Page;