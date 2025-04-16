/* © 2025 kerem.ai · All rights reserved. */
/* This file contains the all projects component. */

import React from "react";

import Project from "./project";
import "./styles/allProjects.css";

const AllProjects = ({ projects }) => {
	return (
		<div className="all-projects-container">
			{projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						status={project.status}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
