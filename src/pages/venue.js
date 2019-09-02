import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import Head from '../components/head';
import venueStyles from './venue.module.scss';

export const query = graphql`
  query {
    file(relativePath: { eq: "MOCA_Logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 641, maxHeight: 240) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    site {
      siteMetadata {
        venue
        venueAddress
        venueWebsite
      }
    }
  }
`;

const VenuePage = ({ data }) => {
  return (
    <Layout topMargin>
      <Head title="Venue" />
      <section className="section">
        <div className={`container ${venueStyles.container}`}>
          <h2 className={`title is-2 ${venueStyles.textContent}`}>
            Venue
          </h2>
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Virginia Museum of Contemporary Art"
            className={venueStyles.image}
          />
          <a className={venueStyles.anchor} href={data.site.siteMetadata.venueWebsite} target="_blank" rel="noopener noreferrer">
            <h4 className={`subtitle is-4 ${venueStyles.textContent}`}>
              {data.site.siteMetadata.venue} Website
            </h4>
          </a>
          <h4 className={`subtitle is-4 ${venueStyles.textContent}`}>
            {data.site.siteMetadata.venueAddress}
          </h4>
        </div>
      </section>
    </Layout>
  );
}

export default VenuePage;