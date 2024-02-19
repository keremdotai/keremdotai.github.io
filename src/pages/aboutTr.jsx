import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";

import NavBarTr from "../components/common/navBarTr";
import FooterTr from "../components/common/footerTr";
import SocialsTr from "../components/about/socialsTr";
import TechStack from "../components/about/techstack";
import GithubPersonal from "../components/about/githubPersonal";
import GithubWork from "../components/about/githubWork";
import ResearchTr from "../components/about/researchTr";
import ResumeTr from "../components/about/resumeTr";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";
import "./styles/about.scss";

const AboutTr = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Hakkımda | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBarTr active="about" />
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
                        <li class="content__container__list__item">.anything</li>
                      </ul>
                    </div>
                  </div>
								</div>
								{/* Subtitle */}
								<div className="subtitle about-subtitle">
									Yapay Öğrenme meraklısı, Full-stack Yapay Öğrenme Mühendisi, kedi babası ve hayat boyu öğrenci.
								</div>
								<div className="paragraph">
									<a href="https://www.maynardvision.com/" target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "#c770f0"}}><b>Maynard Vision</b></a>, bir Yapay Zeka temelli anti-korsan şirketi, kurucu ortağı.
									<a href="https://www.vitamu.co.uk/" target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "#c770f0"}}><b>Vitamu</b></a>, bir Yapay Zeka sağlık girişimi, teknik ekip lideri.
								</div>
								<div className="paragraph">
									Boğaziçi Üniversitesi Elektrik Elektronik Mühendisliği bölümünden lisans mezunu.
									Bilgisayar Mühendisliği yüksek lisansını girişimciliğe yönelmek için bıraktı.
								</div>
								<div className="paragraph">
									<a href="https://inzva.com/" target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "#c770f0"}}><b>inzva</b></a>'da, Yapay Zeka ve algoritma konularında çalışan kâr amacı gütmeyen bir kurum, katılımcı ve eğitim rehberi.
								</div>
								<div className="paragraph">
									yasak
									İstanbul'da beş güzel kediyle yaşıyor. 2 yıldan fazla süredir arkadaşlarıyla Pathfinder evreninde bir maceracı. Kutu oyunu aşığı. Hikaye ve senaryo yazar. Yer, içer ve eğlenir!
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-socials">
									<SocialsTr />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<SocialsTr />
						</div>
					</div>

					<h1 className="project-heading">
						<strong className="purple">Araştırma</strong> Alanları
					</h1>

					<Container fluid className="about-section">
						<ResearchTr />
					</Container>
					

					<h1 className="project-heading">
						Profesyonal <strong className="purple">Yetiler</strong>
					</h1>

					<Container fluid className="about-section">
						<TechStack />
					</Container>

					<h1 className="project-heading" style={{ paddingBottom: "20px" }}>
						<strong className="purple">Kendim için Kodladığım</strong> Günler
					</h1>

					<Container fluid className="about-section">
						<GithubPersonal />
					</Container>

					<h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        		<strong className="purple">İş için Kodladığım</strong> Günler
      		</h1>

					<Container fluid className="about-section">
						<GithubWork />
					</Container>

					<h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        		<strong className="purple">Özgeçmiş</strong>
      		</h1>

					<Container fluid className="about-section">
						<ResumeTr />
					</Container>
					
					<div className="page-footer">
						<FooterTr />
					</div>
				</div>
			</div>

		</React.Fragment>
	);
};

export default AboutTr;
