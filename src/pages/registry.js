import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import Head from '../components/head';
import registryStyles from './registry.module.scss';

export const query = graphql`
  query {
    file(relativePath: {eq: "Zola-Logo.png"}) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 353) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const RegistryPage = ({ data }) => {
  return (
    <Layout topMargin>
      <Head title="Registry" />
      <section className="section">
        <div className={`container ${registryStyles.container}`}>
          <h2 className={`title is-2 is-size-4-mobile ${registryStyles.textContent}`}>
            Registry
          </h2>
          <a className={registryStyles.image} target="_blank" href="http://www.zola.com/registry/constanceandalexander">
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="Zola"
              className={registryStyles.image}
            />
          </a>
        </div>
      </section>
    </Layout>
  );
}

export default RegistryPage;