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

  const {schoolsData} = await graphql(`
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
  for (const {node} of schoolsData.schools.edges){
    await createPage({
      path: `/school/${node.slug}`,
      component: path.resolve('./src/components/school.js'),
      context: {
        slug: node.slug
      },
    })
  }


}
