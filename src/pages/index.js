import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';

import indexStyles from './index.module.scss';
import Layout from '../components/layout';
import Head from '../components/head';

export const query = graphql`
  query {
    file(relativePath: { eq: "constance_alexander_NYC_engagement-126.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 6700, maxHeight: 4467) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         description
  //       }
  //     }
  //   }
  // `);

  return (
    <Layout>
      <Head title="Home" />
      <section className={`hero is-fullheight ${indexStyles.section}`}>
        <div className={`hero-body ${indexStyles.heroBody}`}>
          <div className={indexStyles.containerDiv}>
            <Img
              fluid={data.file.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt="Constance Edmonds and Alexander Jones"
              className={indexStyles.heroImg}
              imgStyle={{
                top: 'initial',
                bottom: 0,
                height: 'initial',
                minHeight: '100%',
                marginBottom: 0
              }}
            />
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={indexStyles.container}>
        <div className={indexStyles.content}>
          <h1>Welcome</h1>
        </div>
        <br />
        <div className={indexStyles.content}>
          <p>Welcome section, thank you for visiting etc. </p>
        </div>
      </div>
      
    </Layout>
  );
}

export default IndexPage;