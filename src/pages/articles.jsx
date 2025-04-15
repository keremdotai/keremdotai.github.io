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
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<Header active="articles" />
				<div className="content-wrapper">
					<div className="articles-main-container">
						<div className="title articles-title">
							Blog posts, research papers, stories, and more.
						</div>

						<div className="subtitle articles-subtitle">
							Here you can find my thoughts on many subjects, my research outputs, and the stories and scenarios I have written.
						</div>

						<div className="paragraph">
							Contents may vary according to the language option. Click <a href="/#/tr/articles" style={{textDecoration: "none", color: "#ff9a3c"}}><b>here</b></a> for Turkish contents.
						</div>

						<div className="articles-container">
							<div className="articles-wrapper">
								{myArticles.map((article, index) => (
									<div
										className="articles-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Articles;
