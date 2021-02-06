module.exports = {
	plugins: [
		"gatsby-plugin-resolve-src",
		"gatsby-plugin-sass",
		"gatsby-plugin-react-helmet",
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		{
			resolve: `gatsby-source-graphcms`,
			options: {
				endpoint: `https://api-us-west-2.graphcms.com/v2/ckkubhqtg25v401z68kq86xzc/master`,
			},
		},
	],
};
