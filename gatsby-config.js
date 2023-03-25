/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `MS Prep Football Archive`,
    description: `MS Prep Football Archive`,
    author: `Michael R Creel`,
    siteUrl: `https://gatsbyfootball.gatsbyjs.io/`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-mongodb',
      options: {
        dbName: 'rawData',
        collection: [
          'Game', 'School', 'Season'
        ],
        server: {
          address: 'ac-9x7xkea-shard-00-01.1dbe7gc.mongodb.net',
          port: 27017
        },
        auth: {
          user: 'michael',
          password: 'michael_password'
        },
        extraParams: {
          replicaSet: 'Main-shard-0',
          ssl: true,
          authSource: 'admin',
          retryWrites: true
        },
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
