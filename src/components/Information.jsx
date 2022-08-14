import React from "react";
import CardInfo from "./CardInfo";

const Information = () => {
	return (
		<section className="infoContainer">
			<div className="infoText">
				<h2>About Us</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
					voluptas perspiciatis quod, similique voluptatum aut sapiente adipisci
					consequatur iusto rerum corrupti debitis quisquam non nihil.
				</p>
			</div>
			<article className="grid-global">
				<CardInfo
					img={
						"https://images.pexels.com/photos/198162/pexels-photo-198162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					}
					title={"WHO WE ARE"}
					parafo={
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas perspiciatis quod, similique voluptatum aut sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facerevoluptas perspiciatis quod."
					}
				/>
				<CardInfo
					img={
						"https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					}
					title={"OUR MISSION"}
					parafo={
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas perspiciatis quod, similique voluptatum aut sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facerevoluptas perspiciatis quod."
					}
				/>
				<CardInfo
					img={
						"https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					}
					title={"OUR VISION"}
					parafo={
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas perspiciatis quod, similique voluptatum aut sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facerevoluptas perspiciatis quod."
					}
				/>
			</article>
		</section>
	);
};

export default Information;
