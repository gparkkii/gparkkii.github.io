/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require('path')

/**
 * Setup import alias
 */
exports.onCreateWebpackConfig = ({getConfig, actions}) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        types: path.resolve(__dirname, 'src/@types'),
        layout: path.resolve(__dirname, 'src/layout'),
        components: path.resolve(__dirname, 'src/components'),
        pages: path.resolve(__dirname, 'src/pages'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        images: path.resolve(__dirname, 'src/images'),
        utils: path.resolve(__dirname, 'src/utils'),
        theme: path.resolve(__dirname, 'src/theme'),
        styles: path.resolve(__dirname, 'src/styles'),
      }
    }
  })
}

// /**
//  * @type {import('gatsby').GatsbyNode['createPages']}
//  */
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }

