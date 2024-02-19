import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";
import "./styles/socials.css";

const SocialsTr = () => {
	return (
		<div className="socials">
			{/* Twitter */}
			<div className="social" style={{paddingBottom: "5px"}}>
				<a href={INFO.socials.twitter} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faTwitter}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Twitter'da Py</div>
				</a>
			</div>
			{/* Instagram */}
			<div className="social" style={{paddingBottom: "5px"}}>
				<a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faInstagram}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Instagram'da Py</div>
				</a>
			</div>
			{/* Personal GitHub Account */}
			<div className="social" style={{paddingBottom: "5px"}}>
				<a href={INFO.socials.githubPersonal} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faGithub}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Kişisel GitHub Hesabı</div>
				</a>
			</div>
			{/* GitHub Account for Work */}
			<div className="social" style={{paddingBottom: "5px"}}>
				<a href={INFO.socials.githubWork} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faGithub}
							className="social-icon"
						/>
					</div>
					<div className="social-text">İş için GitHub</div>
				</a>
			</div>
			{/* LinkedIn */}
			<div className="social" style={{paddingBottom: "5px"}}>
				<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faLinkedin}
							className="social-icon"
						/>
					</div>
					<div className="social-text">LinkedIn Sayfası</div>
				</a>
			</div>
			{/* Email */}
			<div className="email">
				{/* Personal */}
				<div className="email-wrapper">
					<a href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer">
						<div className="social-icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>
						<div className="social-text">{INFO.main.email}</div>
					</a>
				</div>
				{/* Vitamu */}
				<div className="email-wrapper">
					<a href={`mailto:${INFO.main.emailVitamu}`} target="_blank" rel="noreferrer">
						<div className="social-icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>
						<div className="social-text">{INFO.main.emailVitamu}</div>
					</a>
				</div>
				{/* Maynard Vision */}
				<div className="email-wrapper">
					<a href={`mailto:${INFO.main.emailMaynad}`} target="_blank" rel="noreferrer">
						<div className="social-icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>
						<div className="social-text">{INFO.main.emailMaynad}</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default SocialsTr;
