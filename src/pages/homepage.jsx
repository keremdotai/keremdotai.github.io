import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Header from "../components/common/header";
import Footer from "../components/common/footer";
import HeaderHome from "../components/homepage/headerHome";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<React.Fragment>
			{/* SEO */}
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			{/* Page Content */}
			<div className="page-content">
				{/* <NavBar active="home" /> */}
				<Header active="home" />
				<div className="content-wrapper">
					<HeaderHome />
					<div className="homepage-container">
						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
