import React from "react";
import CardServices from "./CardServices";

const Services = () => {
	return (
		<section className="servicesContainer">
			<div className="infoText">
				<h2>services we can offer you</h2>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
					dignissimos sit, eligendi quasi unde ipsa quam illo voluptatum
					reiciendis recusandae!
				</p>
			</div>
			<article className="grid-global">
				<CardServices
					icon={"fa-solid fa-feather-pointed"}
					title={"naturalize"}
					parafo={
						"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dignissimos sit,"
					}
				/>
				<CardServices
					icon={"fa-solid fa-graduation-cap"}
					title={"learn"}
					parafo={
						"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dignissimos sit,"
					}
				/>
				<CardServices
					icon={"fa-solid fa-hand-holding-droplet"}
					title={"live"}
					parafo={
						"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dignissimos sit,"
					}
				/>
				<CardServices
					icon={"fa-solid fa-heart-pulse"}
					title={"wants"}
					parafo={
						"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dignissimos sit,"
					}
				/>
				<CardServices
					icon={"fa-brands fa-slideshare"}
					title={"visit"}
					parafo={
						"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dignissimos sit,"
					}
				/>
				<CardServices
					icon={"fa-solid fa-sliders"}
					title={"test"}
					parafo={
						"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dignissimos sit,"
					}
				/>
			</article>
		</section>
	);
};

export default Services;
