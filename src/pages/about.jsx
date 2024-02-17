import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";
import TechStack from "../components/about/techstack";
import GithubPersonal from "../components/about/githubPersonal";
import GithubWork from "../components/about/githubWork";
import Resume from "../components/about/resume";
import Research from "../components/about/research";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";
import "./styles/about.scss";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
                {/* Title */}
								<div className="title about-title">
                  <div class="content">
                    <div class="content__container">
                      <p class="content__container__text">
                        kerem
                      </p>
                      <ul class="content__container__list">
                        <li class="content__container__list__item">.ai</li>
                        <li class="content__container__list__item">.py</li>
                        <li class="content__container__list__item">.mu</li>
                        <li class="content__container__list__item">.everybody</li>
                      </ul>
                    </div>
                  </div>
								</div>
								{/* Subtitle */}
								<div className="subtitle about-subtitle">
									Machine Learning entusiast, Full-stack ML Engineer, a cat dad, and a lifelong learner.
								</div>
								<div className="paragraph">
									Co-founder of <a href="https://www.maynardvision.com/" target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "#c770f0"}}><b>Maynard Vision</b></a>, a revolutionary AI-based anti-piracy company.
									Tech team lead of <a href="https://www.vitamu.co.uk/" target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "#c770f0"}}><b>Vitamu</b></a>, an AI healthcare start-up.
								</div>
								<div className="paragraph">
									Has a Bachelor's degree in Electrical and Electronics Engineering from Bogazici University, Istanbul.
									Left his Master of Science in Computer Engineering to pursue a career in start-up ecosystem.
								</div>
								<div className="paragraph">
									A member and a guide in the community of <a href="https://inzva.com/" target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "#c770f0"}}><b>inzva</b></a>, an NGO dedicated to Artificial Intelligence and algorithms.
								</div>
								<div className="paragraph">
									Lives with five beautiful cats in Istanbul. Plays Pathfinder with friends for more than 2 years. Board game geek. Writes stories and scenarios. Eats, drinks, and has fun!
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>

					<h1 className="project-heading">
						<strong className="purple">Research</strong> Interest
					</h1>

					<Container fluid className="about-section">
						<Research />
					</Container>
					

					<h1 className="project-heading">
						Professional <strong className="purple">Skillset </strong>
					</h1>

					<Container fluid className="about-section">
						<TechStack />
					</Container>

					<h1 className="project-heading" style={{ paddingBottom: "20px" }}>
						Days I <strong className="purple">Code Personally</strong>
					</h1>

					<Container fluid className="about-section">
						<GithubPersonal />
					</Container>

					<h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        		Days I <strong className="purple">Code for Work</strong>
      		</h1>

					<Container fluid className="about-section">
						<GithubWork />
					</Container>

					<h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        		<strong className="purple">Resume</strong>
      		</h1>

					<Container fluid className="about-section">
						<Resume />
					</Container>
					
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>

		</React.Fragment>
	);
};

export default About;
