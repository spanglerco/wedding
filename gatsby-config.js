/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-theme-material-ui',
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: 'Euphoria Script',
                variants: ['300', '400', '500'],
              },
              {
                family: 'Montserrat'
              }
            ],
          },
        },
      },
    }
  ],
}
