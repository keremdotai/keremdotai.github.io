// © 2025 kerem.ai · All rights reserved.
// This file contains the read article page for the website.

import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import Header from "../components/common/header";
import Footer from "../components/common/footer";

import INFO from "../data/user";
import myArticles from "../data/articles";

import "./styles/readArticle.css";

let ArticleStyle = styled.div``;

const ReadArticle = () => {
	const { slug } = useParams();

	const article = myArticles.find(article => article().link === slug);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [article]);

	ArticleStyle = styled.div`
		${article().style}
	`;

	return (
		<React.Fragment>
			{/* SEO */}
			<Helmet>
				<title>{`${article().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={article().description} />
				<meta name="keywords" content={article().keywords.join(", ")} />
			</Helmet>

			{/* Page Content */}
			<div className="page-content">
				{/* Header */}
				<Header active="stories" />

				{/* Content Wrapper */}
				<div className="content-wrapper">
					<div className="read-article-container">
						{/* Title */}
						<div className="title" style={{ paddingBottom: "4vh" }}>
							{article().title}
						</div>

						{/* Article Wrapper */}
						<div className="read-article-wrapper">
							{/* Date Container */}
							<div className="read-article-date-container">
								<div className="read-article-date">
									{article().date}
								</div>
							</div>

							{/* Body */}
							<div className="read-article-body">
								<ArticleStyle>{article().body}</ArticleStyle>
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

export default ReadArticle;
