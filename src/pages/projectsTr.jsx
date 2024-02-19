import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBarTr from "../components/common/navBarTr";
import FooterTr from "../components/common/footerTr";
import AllProjectsTr from "../components/projects/allProjectsTr";
import HeaderProjectTr from "../components/projects/headerProjectTr";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const ProjectsTr = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBarTr active="projects" />
				<div className="content-wrapper">
					<HeaderProjectTr />	
					<div className="projects-container">
						<div className="projects-list">
							<AllProjectsTr />
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

export default ProjectsTr;
