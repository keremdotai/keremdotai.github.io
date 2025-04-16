// © 2025 kerem.ai · All rights reserved.
// This file contains the homepage for the website.

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

// Common Components
import Header from "../components/common/header";
import Footer from "../components/common/footer";

// Homepage Components
import HomeQuote from "../components/homepage/homeQuote";
import HomeGrid from "../components/homepage/homeGrid";

// Data
import INFO from "../data/user";
import SEO from "../data/seo";

// Styles
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
				{/* Header */}
				<Header active="home" />

				{/* Content Wrapper */}
				<div className="content-wrapper">
					<div className="homepage-container">
						{/* Title */}
						<div className="subtitle" style={{ marginLeft: "5%" }}>
							Hey, I’m Kerem — a full-time ML engineer, open-source explorer, and cat dad based in Istanbul.
							I build deep learning systems that run in the real world — from embedded AI to cloud-native ML infra.
							This site is my digital workspace, where I share what I’ve built, what I’ve broken,
							and what I’ve learned along the way.
						</div>

						{/* Home Quote */}
						<HomeQuote />

						{/* Home Grid */}
						<HomeGrid />	
					</div>

					{/* Footer */}
					<div className="page-footer">
						<Footer />
					</div>
				</div>

				
			</div>
		</React.Fragment>
	);
};

export default Homepage;
