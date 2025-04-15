// © 2025 kerem.ai · All rights reserved.
// This file contains the Resume component for the website.
// It displays the user's resume.

import React from "react";
import { Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";

import "./styles/resume.css";

function Resume() {
	return (
		<Row className="resume-row">
			<Button variant="primary" size="lg" target="_blank" style={{color: "#c770f0", textDecoration: "none", fontSize: "20px"}} >
				<b><AiOutlineDownload /> &nbsp; Download Resume</b>
			</Button>
		</Row>
	);
}

export default Resume;
