// © 2025 kerem.ai · All rights reserved.
// This file contains the header component for the website.
// It includes the header animation and the navigation bar.

import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./styles/header.css";
import "./styles/header.scss";

const HeaderAnimation = () => {
    // This component renders an animated header with a list of file extensions.
    return (
        <div class="header-animation">
            <div class="header-animation__container">
                <p class="header-animation__container__text">kerem</p>
                <ul class="header-animation__container__list">
                    <li class="header-animation__container__list__item" style={{ color: "#13a5da" }}>.ai</li>
                    <li class="header-animation__container__list__item" style={{ color: "#ffa41c" }}>.py</li>
                    <li class="header-animation__container__list__item" style={{ color: "#ffa41c" }}>.cpp</li>
                    <li class="header-animation__container__list__item" style={{ color: "#c770f0" }}>.anything</li>
                </ul>
            </div>
        </div>
    );
};

const NavBar = (props) => {
    // This component renders a navigation bar with a list of links.
    const { active } = props;

    return (
        <nav className="header-nav">
            <div className="header-nav-background">
                <ul className="header-nav-list">
                    <li className={active === "home" ? "header-nav-item active" : "header-nav-item"}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={active === "about" ? "header-nav-item active" : "header-nav-item"}>
                        <Link to="/about">About</Link>
                    </li>
                    <li className={active === "projects" ? "header-nav-item active" : "header-nav-item"}>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className={active === "stories" ? "header-nav-item active" : "header-nav-item"}>
                        <Link to="/stories">Stories</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

const Header = (props) => {
    // This component renders the header with the animation and the navigation bar.
    const { active } = props;

    return (
        <header className="header">
            <div className="header-container">
                <HeaderAnimation />
                <NavBar active={active} />
            </div>
        </header>
    );
};

export default Header;
