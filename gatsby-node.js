/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const {data} = await graphql(`
    {
      schools: allMongodbRawDataSchool{
        edges{
          node{
            slug
          }
        }
      }
    }
  `)
  for (const {node} of data.schools.edges){
    await createPage({
      path: `/seasons/${node.slug}`,
      component: path.resolve('./src/components/seasons.js'),
      context: {
        slug: node.slug
      },
    })
  }


}
