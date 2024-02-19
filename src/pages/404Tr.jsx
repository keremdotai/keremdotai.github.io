import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

import NavBar from "../components/common/navBar";
import INFO from "../data/user";

import "./styles/404.css";

const NotfoundTr = () => {
	useEffect(() => {
		document.title = `404 | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>
			<div className="not-found page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="notfound-container">
						<div className="notfound-message">
							<div className="notfound-title">
								Haydaaa! <FontAwesomeIcon icon={faFaceSadTear} />
							</div>
							<div className="not-found-message">
								Aradığın sayfayı bulamadık.
								<br />
								Ulaşmaya çalıştığın URL
								<br />
								<div className="not-found-error-link">{window.location.href}</div>
								<br />
								bu sunucuda bulunamadı.
							</div>
							<a href="/#/tr" className="not-found-link">
								Ana sayfaya geri dön
							</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default NotfoundTr;
