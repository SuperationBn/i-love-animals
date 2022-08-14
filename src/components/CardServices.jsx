import React from "react";

const CardServices = ({ icon, title, parafo }) => {
	return (
		<div className="cardServisesContainer">
			<i className={icon}></i>
			<h3>{title}</h3>
			<p>{parafo}</p>
		</div>
	);
};

export default CardServices;
