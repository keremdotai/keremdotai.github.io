import React from "react";
import { Row, Col } from "react-bootstrap";

import "./styles/research.css";

function ResearchTr() {
	return (
		<Row className="research-row">
			<Col xs={4} md={2} className="research-item">
				Bilgisayar Görüsü
			</Col>
			<Col xs={4} md={2} className="research-item">
				Derin Öğrenme
			</Col>
			<Col xs={4} md={2} className="research-item">
				Sağlıkta Yapay Zeka
			</Col>
			<Col xs={4} md={2} className="research-item">
				Yapay Öğrenmede Optimizasyon
			</Col>
			<Col xs={4} md={2} className="research-item">
				Üretken Yapay Zeka
			</Col>
			<Col xs={4} md={2} className="research-item">
				Hesaplamalı Sosyal Bilim
			</Col>
			<Col xs={4} md={2} className="research-item">
				Çok Biçimli Yapay Öğrenme
			</Col>
			<Col xs={4} md={2} className="research-item">
				Kablosuz Haberleşme
			</Col>
			<Col xs={4} md={2} className="research-item">
				Moleküler Haberleşme
			</Col>
			<Col xs={4} md={2} className="research-item">
				Bilgisayar Ağları
			</Col>
		</Row>
	);
}

export default ResearchTr;
