import React from "react";

const Footer = () => {
	return (
		<>
			<footer className="footerContainer">
				<div className="container">
					<div className="enlaces">
						<a
							href="https://github.com/SuperationBn/"
							className="link git"
							target={"_blank"}
						>
							<i className="fa-brands fa-github"></i>
							<span>github</span>
						</a>
						<a
							href="https://www.youtube.com/channel/UCaJfBRNf09phqvio0mCOZYg/featured"
							className="link youtube"
							target={"_blank"}
						>
							<i className="fa-brands fa-youtube"></i>
							<span>youtube</span>
						</a>
						<a
							href="https://www.instagram.com/superationbn/"
							className="link instagram"
							target={"_blank"}
						>
							<i className="fa-brands fa-instagram"></i>
							<span>instagram</span>
						</a>
					</div>
					<div className="derechos">
						Copyright © 2022 - All Rights Reserved / SuperationBn
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
