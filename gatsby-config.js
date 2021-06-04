module.exports = {
  siteMetadata: {
    title: 'Jeffrey Tang',
    description: 'Jeffrey Tang is a CS student at the University of Illinois.',
    author: 'Jeffrey Tang',
  },
  plugins: [
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          placeholder: 'blurred',
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'photos',
        path: './photos',
      },
    },
  ],
}
