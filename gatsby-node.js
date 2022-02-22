const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const AlbumTemplate = path.resolve('src/templates/AlbumTemplate.js')

  const result = await graphql(`
    query {
      allAlbumsJson {
        nodes {
          directory
        }
      }
    }
  `)

  result.data.allAlbumsJson.nodes.forEach(({ directory }) => {
    createPage({
      path: `photos/${directory}`,
      component: AlbumTemplate,
      context: {
        directory,
        directoryRegex: `/^${directory}($|/)/`,
      },
    })
  })
}
