import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

import "./styles/techstack.css";

const explicitTheme = {
  light: ['#f0f0f0', '#f0dcfa', '#e6bbfa', '#d885ff', "#c770f0"],
  dark: ['#f0f0f0', '#f0dcfa', '#e6bbfa', '#d885ff', "#c770f0"],
};

function GithubWork() {
  return (
    <Row className="tech-row">
      <GitHubCalendar
        username="keremdotmu"
        blockSize={12}
        blockMargin={5}
        theme={explicitTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default GithubWork;
