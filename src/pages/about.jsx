// © 2025 kerem.ai · All rights reserved.
// This file contains the about page for the website.

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";

// Common Components
import Header from "../components/common/header";
import Footer from "../components/common/footer";

// Components specific to this page
import Socials from "../components/about/socials";
import TechStack from "../components/about/techstack";
import GithubStats from "../components/about/githubStats";
import Resume from "../components/about/resume";
import Research from "../components/about/research";

// Data
import INFO from "../data/user";
import SEO from "../data/seo";

// Styles
import "./styles/about.css";

const About = () => {
	// This component renders the about page for the website.
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			{/* SEO */}
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			{/* Page Content */}
			<div className="page-content">
				{/* Header */}
				<Header active="about" />

				{/* Content Wrapper */}
				<div className="content-wrapper">
					{/* About Container - Top Section */}
					<div className="about-container">
						<div className="about-main">
							{/* Left Side */}
							<div className="about-left-side">
								{/* Title */}
								<div className="title about-title">
									Machine Learning enthusiast, full-time engineer, lifelong cat dad, and a relentless learner.
								</div>
								{/* Content - Paragraphs */}
								<div className="paragraph">
									Currently building intelligent battery systems at <a href="https://eatron.com/" target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "#ffa41c"}}><b>Eatron Technologies</b></a>,
									where I work on BMS-AI technologies — blending deep learning with embedded constraints and real-world reliability.
									My role spans from core model design to infrastructure and deployment,
									bridging the gap between research and robust, production-ready software.
								</div>
								<div className="paragraph">
									Before Eatron, I led the tech team at <b style={{color: "#c770f0"}}>Vitamu</b>,
									a healthcare startup focused on AI-powered diagnostics.
									I also co-founded <b style={{color: "#c770f0"}}>Maynard Vision</b>,
									an ambitious attempt at revolutionizing digital piracy prevention with real-time video analysis.
									While these startups didn’t survive, the experience shaped how I think about product,
									scale, and the trade-offs between innovation and feasibility.
								</div>
								<div className="paragraph">
									I earned my Bachelor’s in Electrical and Electronics Engineering from <b style={{color: "#13a5da"}}>Bogazici University</b>,
									and started a Master’s in Computer Engineering before choosing to go all-in on the startup world.
									Along the way, I became an active contributor to <a href="https://inzva.com/" target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "#ffa41c"}}><b>inzva</b></a>,
									an Istanbul-based AI and algorithms community where I’ve mentored others and helped organize events.
								</div>
								<div className="paragraph">
									Outside of work, I live in Istanbul with my six cats, obsess over board games,
									and occasionally write stories and campaign scenarios.
									I believe in good code, honest teams, and never going a day without learning something new.
								</div>
							</div>

							{/* Right Side */}
							<div className="about-right-side">
								<div className="about-socials">
									<Socials />
								</div>
							</div>
							{/* End of Top Section */}
						</div>
					</div>

					{/* Research Section */}
					<h1 className="project-heading">
						<strong className="purple">Research</strong> Interest
					</h1>

					<Container fluid className="about-section">
						<Research />
					</Container>

					{/* Professional Skillset Section */}
					<h1 className="project-heading">
						Professional <strong className="purple">Skillset </strong>
					</h1>

					<Container fluid className="about-section">
						<TechStack />
					</Container>

					{/* Days I Code Personally Section */}
					<h1 className="project-heading" style={{ paddingBottom: "20px" }}>
						Days I <strong className="purple">Code Personally</strong>
					</h1>

					<Container fluid className="about-section">
						<GithubStats />
					</Container>

					{/* Resume Section */}
					<h1 className="project-heading" style={{ paddingBottom: "20px" }}>
						<strong className="purple">Resume</strong>
					</h1>

					<Container fluid className="about-section">
						<Resume />
					</Container>
					
					{/* Footer */}
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
