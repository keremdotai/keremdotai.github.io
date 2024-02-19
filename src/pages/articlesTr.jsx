import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBarTr from "../components/common/navBarTr";
import FooterTr from "../components/common/footerTr";
import ArticleTr from "../components/articles/articleTr";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/articles.css";

const ArticlesTr = () => {
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
				<NavBarTr active="articles" />
				<div className="content-wrapper">
					<div className="articles-main-container">
						<div className="title articles-title">
							Blog postları, araştırma yazıları, hikayeler ve daha fazlası.
						</div>

						<div className="subtitle articles-subtitle">
							Burada farklı konulardaki düşüncelerimi, araştırma çıktılarımı ve yazdığım yazıları ve senaryoları bulabilirsiniz.
						</div>

						<div className="paragraph">
							Dil seçeneğine göre içerikler değişebilmektedir. İngilizce içerikler için <a href="/#/articles" style={{textDecoration: "none", color: "#ff9a3c"}}><b>buraya</b></a> tıklayınız.
						</div>

						<div className="articles-container">
							<div className="articles-wrapper">
								{myArticles.map((article, index) => (
									<div
										className="articles-article"
										key={(index + 1).toString()}
									>
										<ArticleTr
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
						<FooterTr />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ArticlesTr;
