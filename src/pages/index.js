import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "components/Layout";
import Container from "components/Container";

import img_gatsby from "assets/images/gatsby-astronaut.png";

const IndexPage = () => {
	const { graphCmsPage = {} } = useStaticQuery(graphql`
		query PageQuery {
			graphCmsPage(id: { eq: "Page:ckkubui888h720b74z6lj5n2a" }) {
				tagline
				headline
				id
			}
		}
	`);

	const { headline, tagline } = graphCmsPage;

	return (
		<Layout pageName="home">
			<Helmet>
				<title>Home Page</title>
			</Helmet>
			<Container>
				<p className="gatsby-astronaut">
					<img src={img_gatsby} alt="Build with Gatsby!" />
				</p>
				<h1>{headline}</h1>
				<p>{tagline}</p>
				<h2>Still Getting Started?</h2>
				<p>Run the following in your terminal!</p>
				<pre>
					<code>
						gatsby new [directory]
						https://github.com/colbyfayock/gatsby-starter-sass
					</code>
				</pre>
			</Container>
		</Layout>
	);
};

export default IndexPage;
