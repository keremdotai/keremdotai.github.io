// © 2025 kerem.ai · All rights reserved.
// This file contains the articles page for the website.

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Article from "../components/articles/article";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/articles.css";

const Articles = () => {
	// This component renders the articles page for the website.
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "stories");

	return (
		<React.Fragment>
			{/* SEO */}
			<Helmet>
				<title>{`Stories | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			{/* Page Content */}
			<div className="page-content">
				{/* Header */}
				<Header active="stories" />

				{/* Content Wrapper */}
				<div className="content-wrapper">
					{/* Main Container */}
					<div className="articles-main-container">
	
						{/* Title */}
						<div className="title" style={{ paddingBottom: "4vh" }}>
							Scenes uncompiled
						</div>

						{/* Introduction */}
						<div className="paragraph" style={{ paddingBottom: "4vh" }}>
						These are stories written outside the scope of engineering — fiction, fragments,
						and screenplays shaped by imagination rather than logic.
						Some are personal, others entirely invented, but all come from a desire to
						explore language, character, and meaning. <strong className="purple">
							All stories are written in Turkish.
						</strong> Translations may come later —
						or maybe they'll stay exactly as they are.
						</div>

						{/* Articles Container */}
						<div className="articles-container">
							<div className="articles-wrapper">
								{myArticles
									.sort((a, b) => new Date(b().date_to_sort) - new Date(a().date_to_sort))
									.map((article, index) => (
										<div
											className="articles-article"
											key={article().link}
										>
											<Article
												date={article().date}
												title={article().title}
												description={article().description}
												link={"/story/" + article().link}
											/>
										</div>
									))}
							</div>
						</div>
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

export default Articles;
