// © 2025 kerem.ai · All rights reserved.
// This file contains the Socials component for the website.
// It displays the user's social media accounts.

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faBluesky, faXTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { FaBluesky } from "react-icons/fa6";

import INFO from "../../data/user";
import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="socials">
			{/* Twitter */}
			<div className="social" style={{paddingBottom: "5px"}}>
				<a href={INFO.socials.twitter} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faXTwitter}
							className="social-icon"
						/>
					</div>
					<div className="social-text">keremdotpy</div>
				</a>
			</div>
			{/* Bluesky */}
			<div className="social" style={{paddingBottom: "5px"}}>
				<a href={INFO.socials.bluesky} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faBluesky}
							className="social-icon"
						/>
					</div>
					<div className="social-text">keremdotpy.bsky.social</div>
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
					<div className="social-text">keremdotpy</div>
				</a>
			</div>
			{/* Personal GitHub Account */}
			<div className="social" style={{paddingBottom: "5px"}}>
				<a href={INFO.socials.github} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faGithub}
							className="social-icon"
						/>
					</div>
					<div className="social-text">mkeremavci</div>
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
					<div className="social-text">in/keremdotai</div>
				</a>
			</div>
			{/* Email */}
			<div className="email-wrapper">
				<a href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon icon={faEnvelope} />
					</div>
					<div className="social-text">{INFO.main.email}</div>
				</a>
			</div>
		</div>
	);
};

export default Socials;
