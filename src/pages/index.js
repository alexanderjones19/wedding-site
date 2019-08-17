import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title="Home" />
      <h3>{data.site.siteMetadata.description}</h3>
    </Layout>
  );
}

export default IndexPage;