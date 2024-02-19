import React from "react";
import { Link } from "react-router-dom";
import Flag from "react-flagpack";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/tr">Ana Sayfa</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/tr/about">Hakkımda</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/tr/projects">Projeler</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/tr/articles">Yazılar</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/">English <Flag code="GB-UKM" size="S" /></Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2024 kerem.ai - Tüm hakları saklıdır.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
