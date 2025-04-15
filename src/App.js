import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Notfound from "./pages/404";

import "./styles/app.css";

function App() {

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/stories" element={<Articles />} />
				<Route path="/story/:slug" element={<ReadArticle />} />
				<Route path="/*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
