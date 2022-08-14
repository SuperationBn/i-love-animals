import React from "react";

const UltimoCliente = () => {
	return (
		<section className="ultimoCliente">
			<div className="infoText">
				<h2>LAST CLIENTS</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
					mollitia reprehenderit iste expedita modi repellendus consequatur,
					odio, temporibus, inventore commodi doloremque? Beatae possimus enim
					voluptatibus!
				</p>
			</div>
			<article className="grid-global">
				<div className="client client-uno">
					<div className="client-container">
						<div className="data">
							<span>28</span>
							<span>SEP</span>
						</div>
						<div className="content-all">
							<div className="imgClient">
								<div className="marco"></div>
								<img
									src="https://images.pexels.com/photos/9985929/pexels-photo-9985929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									alt="img"
									loading="lazy"
								/>
							</div>
							<span>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							</span>
							<h3>
								one of our client, decided to accept this new friend into his
								life.
							</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
								similique dicta modi quia ipsam reprehenderit, quisquam dolore
								dolorum expedita?
							</p>
						</div>
					</div>
				</div>
				<div className="client client-dos">
					<div className="client-container">
						<div className="data">
							<span>07</span>
							<span>JUN</span>
						</div>
						<div className="content-all">
							<div className="imgClient">
								<div className="marco"></div>

								<img
									src="https://images.pexels.com/photos/11140490/pexels-photo-11140490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									alt="img"
									loading="lazy"
								/>
							</div>
							<span>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							</span>
							<h3>
								one of our client, decided to accept this new friend into his
								life.
							</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
								similique dicta modi quia ipsam reprehenderit, quisquam dolore
								dolorum expedita?
							</p>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
};

export default UltimoCliente;
