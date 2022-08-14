import React from "react";

const Hero = ({ title, parafo }) => {
	return (
		<section>
			<article>
				<h2>{title}</h2>
				<p>{parafo}</p>
			</article>
		</section>
	);
};

export default Hero;
