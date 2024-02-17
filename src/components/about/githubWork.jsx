import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

import "./styles/techstack.css";

function GithubWork() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code for Work</strong>
      </h1>
      <GitHubCalendar
        username="keremdotmu"
        blockSize={15}
        blockMargin={5}
        color="#13a5da"
        fontSize={12}
      />
    </Row>
  );
}

export default GithubWork;
