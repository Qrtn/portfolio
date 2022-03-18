const https = require('https')
const path = require('path')
const fs = require('fs')

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

exports.onPostBootstrap = () => {
  const outputPath = path.join(__dirname, 'public', 'cs498gd_mp2.mp4')
  console.log('writing to', outputPath)
  const file = fs.createWriteStream(outputPath)

  return new Promise((resolve) =>
    https.get(
      'https://storage.googleapis.com/jeffreytang.com/cs498gd_mp2.mp4',
      function (response) {
        response.pipe(file)
        response.on('end', () => resolve)
      },
    ),
  )
}
