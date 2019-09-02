module.exports = {
  siteMetadata: {
    title: `Constance + Alexander`,
    // siteUrl: `tbd`,
    description: `Website for the wedding of Constance Edmonds and Alexander Jones`,
    venue: `Virginia Museum of Contemporary Art`,
    venueAddress: `2200 Parks Ave, Virginia Beach, VA 23451`,
    venueWebsite: `https://virginiamoca.org/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Prata`
          },
          {
            family: `Padauk`
          }
        ]
      }
    }
  ]
}
