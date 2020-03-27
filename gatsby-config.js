module.exports = {
  siteMetadata: {
    siteUrl: `https://zults.com.br/`,
    title: `Agência Digital`,
    description: `Somos uma agência de marketing digital especializada em desenvolvimento de sites e gestão de redes sociais. Atendemos Varginha, Minas Gerais e onde você estiver`,
    author: `Zults Agência Digital`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/zults-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`300`, `400`, `700`]
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-marketing-platform',
      options: {
        dataLayer: {
          gaPropertyId: 'UA-157722925-1',
        },
        tagmanager: {
          id: 'GTM-P645D9B'
        },
        analytics: {
          id: 'UA-157722925-1'
        }
      },
    },
    'gatsby-plugin-sitemap',
  ],
}
