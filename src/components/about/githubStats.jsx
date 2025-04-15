import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

import "./styles/github.css";

const explicitTheme = {
  light: ['#f0f0f0', '#f0dcfa', '#e6bbfa', '#d885ff', "#c770f0"],
  dark: ['#f0f0f0', '#f0dcfa', '#e6bbfa', '#d885ff', "#c770f0"],
};

function GithubStats() {
  return (
    <Row className="github-row">
      <GitHubCalendar
        username="mkeremavci"
        blockSize={12}
        blockMargin={5}
        theme={explicitTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default GithubStats;
