import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBarTr from "../components/common/navBarTr";
import FooterTr from "../components/common/footerTr";
import HeaderHome from "../components/homepage/headerHome";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const HomepageTr = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBarTr active="home" />
				<div className="content-wrapper">
					<HeaderHome />
					<div className="homepage-container">
						<div className="page-footer">
							<FooterTr />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default HomepageTr;
