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
			<a href="/kerem-avci-cv.pdf" target="_blank" style={{ textDecoration: "none" }}>
				<Button className="resume-button" size="lg" >
					<b><AiOutlineDownload /> &nbsp; Download Resume</b>
				</Button>
			</a>
		</Row>
	);
}

export default Resume;
