/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

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
        components: path.resolve(__dirname, 'src/components'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        assets: path.resolve(__dirname, 'src/assets'),
        layout: path.resolve(__dirname, 'src/layout'),
        pages: path.resolve(__dirname, 'src/pages'),
        routes: path.resolve(__dirname, 'src/routes'),
        styles: path.resolve(__dirname, 'src/styles'),
        theme: path.resolve(__dirname, 'src/theme'),
      }
    }
  })
}

// Generate a Slug Each Post Data
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });

    createNodeField({ node, name: 'slug', value: slug });
  }
};

// Generate Post Page Through Markdown Data
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  // Get All Markdown File For Paging
  const queryAllMarkdownData = await graphql(
    `
      {
        allMarkdownRemark(
          sort: [{frontmatter: {date: DESC}}, {frontmatter: {title: ASC}}]
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
                update
              }
            }
          }
        }
      }
    `,
  );

  // Handling GraphQL Query Error
  if (queryAllMarkdownData.errors) {
    reporter.panicOnBuild(`Error while running query`);
    return;
  }

  // Import Post Template Component
  const PostTemplateComponent = path.resolve(
    __dirname,
    'src/templates/post_template.tsx',
  );

  // Page Generating Function
  const generatePostPage = ({
    node: {
      fields: { slug },
    },
  }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    const pageOptions = {
      path: slug,
      component: PostTemplateComponent,
      context: { slug, previous, next },
    };

    createPage(pageOptions);
  };

  const posts = queryAllMarkdownData.data.allMarkdownRemark.edges.filter(({node}) => node.frontmatter.update && node.frontmatter.tags !== null)

  // Generate Post Page And Passing Slug Props for Query
  posts.forEach(generatePostPage);
};