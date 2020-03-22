import React from 'react';
import { graphql } from 'gatsby';
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

      <hr/>

      <section className="section">
        <div className="container">
          {/* <h2 className={`title is-2 is-size-4-mobile ${indexStyles.textContent}`}>
            Hello Friends and Family!
          </h2>
          <h4 className={`subtitle is-4 is-size-6-mobile ${indexStyles.textContent}`}>
            Thank you so much for being a part of our special day! Here you will find all of the information you need in preparation for our wedding. Please let us know if you have any lingering questions, you can find our email on the RSVP page. We love all of you, can't wait until April!
          </h4>
          <h5 className={`subtitle is-5 is-size-7-mobile ${indexStyles.textContent}`}>
            - Constance + Alexander
          </h5> */}
          <h2 className={`title is-2 is-size-4-mobile ${indexStyles.textContent}`}>
            Important Update:
          </h2>
          <h4 className={`subtitle is-4 is-size-6-mobile ${indexStyles.textContent}`}>
            In light of the coronavirus pandemic, and due to closures we couldn't control, we unfortunately have made the decision to postpone our wedding until July 17th, 2020. We hope that everyone will still be able to join us! In the meantime, please let us know if you have any questions or concerns.
          </h4>
          <h4 className={`subtitle is-4 is-size-6-mobile ${indexStyles.textContent}`}>
            edmondsjoneswedding@gmail.com
          </h4>
          <h5 className={`subtitle is-5 is-size-7-mobile ${indexStyles.textContent}`}>
            - Constance + Alexander
          </h5>
        </div>
      </section>
      
    </Layout>
  );
}

export default IndexPage;