const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const workTemplate = path.resolve(`./src/templates/work.js`)
  const blogPostTemplate = path.resolve(`./src/templates/blogpost.js`)

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsWork {
          edges {
            node {
              slug
            }
          }
        }
        allDatoCmsBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsWork.edges.map(({ node: work }) => {
        createPage({
          path: `works/${work.slug}`,
          component: workTemplate,
          context: {
            slug: work.slug,
          },
        })
      })

      result.data.allDatoCmsBlogPost.edges.map(({ node: blogpost }) => {
        createPage({
          path: `blog/${blogpost.slug}`,
          component: blogPostTemplate,
          context: {
            slug: blogpost.slug,
          },
        })
      })

      resolve()
    })
  })
}
