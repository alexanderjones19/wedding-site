import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const Error404Page = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>Sorry, the page you are looking for was not found.</h1>
      <p><Link to="/">Return home</Link></p>
    </Layout>
  );
}

export default Error404Page;