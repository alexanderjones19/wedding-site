import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import Gallery from '../components/gallery';

const GalleryPage = () => {
  const data = useStaticQuery(
    graphql`
      {
        allGalleryYaml {
          edges {
            node {
              title
              image {
                id
                childImageSharp {
                  fluid {
                    aspectRatio
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout topMargin>
      <Head title="Gallery" />
      <Gallery
        images={data.allGalleryYaml.edges.map(({ node }) => 
        ({
          id: node.image.id,
          ...node.image.childImageSharp.fluid,
          caption: node.title
        }))}
        itemsPerRow={[2, 3]}
      />
    </Layout>
  );
}

export default GalleryPage;