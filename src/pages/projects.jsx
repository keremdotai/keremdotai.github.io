// © 2025 kerem.ai · All rights reserved.
// This file contains the projects page for the website.

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import Header from "../components/common/header";
import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import PROJECTS from "../data/projects";

import "./styles/projects.css";

const Projects = () => {
	// This component renders the projects page for the website.
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	// Group projects by category and sort by date
	const categories = [
		"Machine Learning & AI",
		"Infrastructure & Tools",
		"Open Data for the Public",
		"APIs & Interfaces",
		"Prototypes & Ideas"
	];

	const [expandedCategories, setExpandedCategories] = useState(
		categories.reduce((acc, category) => {
			acc[category] = true;
			return acc;
		}, {})
	);

	const toggleCategory = (category) => {
		setExpandedCategories(prev => ({
			...prev,
			[category]: !prev[category]
		}));
	};

	const groupedProjects = categories.reduce((acc, category) => {
		const categoryProjects = PROJECTS
			.filter(project => project.category === category)
			.sort((a, b) => new Date(b.date) - new Date(a.date));
		
		if (categoryProjects.length > 0) {
			acc[category] = categoryProjects;
		}
		return acc;
	}, {});

	return (
		<React.Fragment>
			{/* SEO */}
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			{/* Page Content */}
			<div className="page-content">
				{/* Header */}
				<Header active="projects" />

				{/* Content Wrapper */}
				<div className="content-wrapper">
					{/* Projects Container */}
					<div className="projects-container">

						{/* Title */}
						<div className="title" style={{ paddingBottom: "4vh" }}>
							Projects & Ideas — Code in the Wild
						</div>

						{/* Introduction */}
						<div className="paragraph" style={{ paddingBottom: "4vh" }}>
							This page contains a collection of my projects and ideas, organized across different categories.
							Some are polished and production-ready; others are conceptual, experimental, or in progress.
							Together, they reflect a mindset of building, learning, and occasionally wandering off
							the beaten path in pursuit of something useful or unexpected.
						</div>
						
						{/* Categories */}
						{Object.entries(groupedProjects).map(([category, projects]) => (
							<div key={category} className="category-section">
								{/* Section Header */}
								<div 
									className="category-header"
									onClick={() => toggleCategory(category)}
								>
									<h2 className="category-title">{category}</h2>
									<FontAwesomeIcon 
										icon={expandedCategories[category] ? faChevronUp : faChevronDown} 
										className="category-toggle-icon"
									/>
								</div>

								{/* Projects List */}
								{expandedCategories[category] && (
									<div className="projects-list">
										<AllProjects projects={projects} />
									</div>
								)}
							</div>
						))}
					</div>

					{/* Footer */}
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
