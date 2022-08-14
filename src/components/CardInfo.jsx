import React from "react";

const CardInfo = ({ img, title, parafo }) => {
	return (
		<div className="infoCardContainer">
			<div className="imgCardInfo">
				<img src={img} alt="" loading="lazy" />
			</div>

			<h3>{title}</h3>
			<p>{parafo}</p>
		</div>
	);
};

export default CardInfo;
