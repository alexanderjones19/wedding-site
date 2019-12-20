import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import Head from '../components/head';
import registryStyles from './registry.module.scss';

export const query = graphql`
  query {
    zola: file(relativePath: {eq: "Zola-Logo.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 324) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    bedBath: file(relativePath: {eq: "Bed-Bath-Beyond-Logo.png"}) {
      childImageSharp {
        fluid(maxWidth: 2088, maxHeight: 720) {
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
          <a className={`${registryStyles.image} ${registryStyles.imageMargin}`} target="_blank" rel="noopener noreferrer" href="http://www.zola.com/registry/constanceandalexander">
            <Img
              fluid={data.zola.childImageSharp.fluid}
              alt="Zola"
              className={registryStyles.image}
            />
          </a>
          <a className={`${registryStyles.image} ${registryStyles.imageMargin}`} target="_blank" rel="noopener noreferrer" href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/548131920?eventType=Wedding">
            <Img
              fluid={data.bedBath.childImageSharp.fluid}
              alt="Bed Bath and Beyond"
              className={registryStyles.image}
            />
          </a>
        </div>
      </section>
    </Layout>
  );
}

export default RegistryPage;