// © 2025 kerem.ai · All rights reserved.
// This file contains the projects for the website.
// Status can be used in the component:
// 📦 Production
// Stable and fully deployed projects currently in use.
// 🚀 Active
// Actively developed or frequently updated projects.
// 💡 Idea
// Concepts or rough plans that may evolve into full projects.
// 🚧 Development
// Projects under active construction or major feature work.
// 🧪 Experimental
// Prototype projects used to explore or validate new ideas.
// 💤 Dormant
// Paused or inactive projects, potentially resumed in the future.
// 🗃️ Archived
// Finished or discontinued projects, kept for reference.
// 🔍 Under Review
// Projects being evaluated, audited, or tested by you or others.
// 🎯 Planned
// Approved ideas or upcoming projects queued for future work.
// 🛠️ Maintenance
// Projects in a stable state but still receiving bug fixes or small updates.
// 📊 Dataset
// A curated or scraped collection of data, possibly accompanied by scripts for collection or processing.
// 🧰 Utility
// A reusable script, tool, or helper meant to support other workflows or projects.

const PROJECTS = [
	// Machine Learning & AI
	{
		title: "TorchJiC",
		description: "TorchJiC is an experimental framework for compiling Python functions or PyTorch operations directly into CUDA kernels — at runtime.",
		logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
		link: "https://github.com/keremdotai/torchjic",
		category: "Machine Learning & AI",
		status: "💡 Idea",
		date: "2025-05-01"
	},

	// Infrastructure & Tools
	{
		title: "pynetdicom+",
		description: "Extended version of pynetdicom library with additional features such as multi-process support and multi-SOP handling.",
		logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
		link: "https://github.com/keremdotai/pynetdicomplus",
		category: "Infrastructure & Tools",
		status: "📦 Production",
		date: "2024-03-15"
	},

	// Open Data for the Public
	{
		title: "Election Results Scraper",
		description: "Scraping election results from Turkish Supreme Election Council's website.",
		logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
		link: "https://github.com/keremdotai/sonuc-ysk-gov-tr-scraper",
		category: "Open Data for the Public",
		status: "📊 Dataset",
		date: "2024-09-01"
	},

	// APIs & Interfaces

	// Prototypes & Ideas
	{
		title: "keremdotai.github.io",
		description: "Source code of my personal website.",
		logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
		link: "https://github.com/keremdotai/keremdotai.github.io",
		category: "Prototypes & Ideas",
		status: "🚀 Active",
		date: "2025-04-15"
	},
];

export default PROJECTS;
