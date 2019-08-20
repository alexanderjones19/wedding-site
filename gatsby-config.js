module.exports = {
  siteMetadata: {
    title: `Edmonds Jones Wedding`,
    // siteUrl: `tbd`,
    description: `Website for the wedding of Constance Edmonds and Alexander Jones`
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
}
