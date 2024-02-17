import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

import "./styles/techstack.css";

function GithubPersonal() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code Personally</strong>
      </h1>
      <GitHubCalendar
        username="mkeremavci"
        blockSize={15}
        blockMargin={5}
        color="#13a5da"
        fontSize={16}
      />
    </Row>
  );
}

export default GithubPersonal;
