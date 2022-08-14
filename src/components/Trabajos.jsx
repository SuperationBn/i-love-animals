import React from "react";
import CardTrabajos from "./CardTrabajos";

const Trabajos = () => {
	return (
		<section className="trabajos">
			<div className="infoText">
				<h2>Resent work</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
					sit dignissimos, optio at non voluptatem iusto enim alias maiores
					veniam!
				</p>
			</div>
			<article className="grid-global">
				<CardTrabajos
					img={
						"https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					}
					text={"tiger"}
				/>
				<CardTrabajos
					img={
						"https://images.pexels.com/photos/7598287/pexels-photo-7598287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					}
					text={"cougar"}
				/>
				<CardTrabajos
					img={
						"https://images.pexels.com/photos/11773548/pexels-photo-11773548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					}
					text={"rhinoceros"}
				/>
				<CardTrabajos
					img={
						"https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					}
					text={"elephant"}
				/>
				<CardTrabajos
					img={
						"https://images.pexels.com/photos/3529692/pexels-photo-3529692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					}
					text={"giraffe"}
				/>
				<CardTrabajos
					img={
						"https://images.pexels.com/photos/139399/bull-landscape-nature-mammal-139399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					}
					text={"bull"}
				/>
				<CardTrabajos
					img={
						"https://images.pexels.com/photos/7506265/pexels-photo-7506265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					}
					text={"panda"}
				/>
				<CardTrabajos
					img={
						"https://images.pexels.com/photos/918596/pexels-photo-918596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					}
					text={"wolf"}
				/>
			</article>
		</section>
	);
};

export default Trabajos;
