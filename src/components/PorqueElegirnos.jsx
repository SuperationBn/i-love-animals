import React from "react";

const PorqueElegirnos = () => {
	return (
		<>
			<section className="porqueContainer">
				<article className="grid-global">
					<div id="PorQueInfo">
						<div className="text-box">
							<h2>WHY CHOSE US</h2>
							<span>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</span>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
								aperiam sed libero laboriosam deserunt veniam id quidem
								distinctio ullam assumenda?
							</p>
							<div className="icons">
								<span> uno</span>
								<span>dos</span>
								<span>tres</span>
								<span>cuatro</span>
							</div>
						</div>
					</div>
					<div id="imgPorQue">
						<img
							src="https://images.pexels.com/photos/11717400/pexels-photo-11717400.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
							alt="img"
							loading="lazy"
						/>
					</div>
				</article>
			</section>
		</>
	);
};

export default PorqueElegirnos;
