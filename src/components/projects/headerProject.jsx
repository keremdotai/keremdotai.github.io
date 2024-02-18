import React from "react";

import "./styles/headerProject.css";


const HeaderProject = () => {
	return (
		<div>
			<div class="header-project">
				<h1 className="h1-normal">
					<div style={{fontSize: "150px"}}>Universe</div>
					<div style={{fontSize: "60px"}}>of an</div>
					<div style={{fontSize: "150px"}}>Engineer</div>
				</h1>
			</div>
			<div class="header-project-mobile">
				<h1 className="h1-mobile">
					<div style={{fontSize: "90px"}}>Universe</div>
					<div style={{fontSize: "50px"}}>of an</div>
					<div style={{fontSize: "90px"}}>Engineer</div>
				</h1>
			</div>
		</div>
	);
};

export default HeaderProject;
