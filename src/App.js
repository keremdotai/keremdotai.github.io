import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import HomepageTr from "./pages/homepageTr";
import About from "./pages/about";
import AboutTr from "./pages/aboutTr";
import Projects from "./pages/projects";
import ProjectsTr from "./pages/projectsTr";
import Articles from "./pages/articles";
import ArticlesTr from "./pages/articlesTr";
import ReadArticle from "./pages/readArticle";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./styles/app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/tr" element={<HomepageTr />} />
				<Route path="/about" element={<About />} />
				<Route path="/tr/about" element={<AboutTr />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/tr/projects" element={<ProjectsTr />} />
				<Route path="/articles" element={<Articles />} />
				<Route path="/tr/articles" element={<ArticlesTr />} />
				<Route path="/article/:slug" element={<ReadArticle />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
