module.exports = {
  siteMetadata: {
    title: 'MAMA - Digitale interaktive løsninger',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-relative-images`,
						options: {
							name: "images"
						}
					},
				  	{
						resolve: `gatsby-remark-images`,
						options: {	}
					}
				]
			}
		},
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
