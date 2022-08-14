import React from "react";

const CardTrabajos = ({ img, text }) => {
	return (
		<div className="cardTrabajos">
			<div className="tranajoImg">
				<img src={img} alt="" loading="lazy" />
			</div>
			<div className="textCardTrabajo">
				<h3>{text}</h3>
			</div>
		</div>
	);
};

export default CardTrabajos;
