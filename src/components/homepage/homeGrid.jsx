// © 2025 kerem.ai · All rights reserved.
// This file contains the grid for the homepage.
// First column is the projects, second column is the stories.
// Each box is a card with a title, description, and a link.
// Besides, we can swipe the cards to see the next one.
// In the mobile version, the grid is displayed vertically.

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

// Data
import PROJECTS from '../../data/projects';
import myArticles from '../../data/articles';

// Styles
import './styles/homeGrid.css';

const HomeGrid = () => {
	const [currentProject, setCurrentProject] = useState(0);
	const [currentStory, setCurrentStory] = useState(0);

	const cardVariants = {
		enter: {
			opacity: 0,
			scale: 0.95
		},
		center: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.3,
				ease: "easeOut"
			}
		},
		exit: {
			opacity: 0,
			scale: 0.95,
			transition: {
				duration: 0.2,
				ease: "easeIn"
			}
		}
	};

	const paginate = (newDirection, type) => {
		if (type === 'project') {
			setCurrentProject((prev) => (prev + newDirection + projects.length) % projects.length);
		} else {
			setCurrentStory((prev) => (prev + newDirection + stories.length) % stories.length);
		}
	};

	// Get latest projects sorted by date
	const projects = [...PROJECTS]
		.sort((a, b) => new Date(b.date) - new Date(a.date))
		.slice(0, 5) // Show only the 5 latest projects
		.map(project => ({
			title: project.title,
			description: project.description,
			link: project.link
		}));

	const stories = [...myArticles]
		.sort((a, b) => new Date(b().date_to_sort) - new Date(a().date_to_sort))
		.slice(0, 5) // Show only the 5 latest projects
		.map(article => ({
			title: article().title,
			description: article().description,
			link: article().link
		}));

	return (
		<div className="home-grid">
			<div className="carousel">
				<div className="category-bar">
					<button className="nav-button" onClick={() => paginate(-1, 'project')}>
						<FaArrowLeft />
					</button>
					<h2>Latest Projects</h2>
					<button className="nav-button" onClick={() => paginate(1, 'project')}>
						<FaArrowRight />
					</button>
				</div>
				<AnimatePresence mode="wait">
					<motion.div
						key={currentProject}
						variants={cardVariants}
						initial="enter"
						animate="center"
						exit="exit"
						className="card"
						onClick={() => window.location.href = projects[currentProject].link}
					>
						<div className="card-content">
							<div className="card-title">{projects[currentProject].title}</div>
							<div className="card-description">{projects[currentProject].description}</div>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>

			<div className="carousel">
				<div className="category-bar">
					<button className="nav-button" onClick={() => paginate(-1, 'story')}>
						<FaArrowLeft />
					</button>
					<h2>Latest Stories</h2>
					<button className="nav-button" onClick={() => paginate(1, 'story')}>
						<FaArrowRight />
					</button>
				</div>
				<AnimatePresence mode="wait">
					<motion.div
						key={currentStory}
						variants={cardVariants}
						initial="enter"
						animate="center"
						exit="exit"
						className="card"
						onClick={() => window.location.href = '#'}
					>
						<div className="card-content">
							<div className="card-title">{stories[currentStory].title}</div>
							<div className="card-description">{stories[currentStory].description}</div>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default HomeGrid;
