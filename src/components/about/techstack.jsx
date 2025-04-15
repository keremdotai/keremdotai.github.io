// © 2025 kerem.ai · All rights reserved.
// This file contains the TechStack component for the website.
// It displays the user's tech stack.

import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiMongodb, DiPython, DiDjango, DiRedis, DiPostgresql } from "react-icons/di";
import { SiMlflow,SiTensorflow, SiPytorch, SiFastapi, SiWeightsandbiases, SiScikitlearn, SiGooglecloud, SiOpencv } from "react-icons/si";
import { FaLinux, FaAws, FaDocker, FaReact } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";

import "./styles/techstack.css";

function TechStack() {
  return (
    <Row className="tech-row">
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGolang />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMlflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWeightsandbiases />
      </Col> 
    </Row>
  );
}

export default TechStack;
