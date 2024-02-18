import React from "react";
import { Row, Col } from "react-bootstrap";

import "./styles/research.css";

function Research() {
	return (
		<Row className="research-row">
			<Col xs={4} md={2} className="research-item">
				Computer Vision
			</Col>
			<Col xs={4} md={2} className="research-item">
				Deep Learning
			</Col>
			<Col xs={4} md={2} className="research-item">
				AI in Healthcare
			</Col>
			<Col xs={4} md={2} className="research-item">
				Optimization in ML
			</Col>
			<Col xs={4} md={2} className="research-item">
				Generative AI
			</Col>
			<Col xs={4} md={2} className="research-item">
				Computational Social Science
			</Col>
			<Col xs={4} md={2} className="research-item">
				Multimodal ML
			</Col>
			<Col xs={4} md={2} className="research-item">
				Wireless Communication
			</Col>
			<Col xs={4} md={2} className="research-item">
				Moleculer Communication
			</Col>
			<Col xs={4} md={2} className="research-item">
				Computer Networks
			</Col>
		</Row>
	);
}

export default Research;
