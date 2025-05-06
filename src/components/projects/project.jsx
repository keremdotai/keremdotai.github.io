/* © 2025 kerem.ai · All rights reserved. */
/* This file contains the project component. */

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, link, status } = props;

	return (
		<React.Fragment>
			<div className="project">
				<div className="project-container" onClick={() => window.open(link, '_blank')}>
					<div className="project-logo">
						<img src={logo} alt="logo" />
					</div>
					<div className="project-title">{title}</div>
					<div className="project-status">{status}</div>
					<div className="project-description">{description}</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
