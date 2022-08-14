import React from "react";

const Contacto = () => {
	const pervenirEnvio = e => {
		e.preventDefault();
	};

	return (
		<section className="contacto">
			<div className="infoText">
				<h2>CONTACT US</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia
					sint beatae soluta nostrum dolor cum eius expedita dolores eligendi!
				</p>
			</div>
			<article className="formBox">
				<form onSubmit={pervenirEnvio}>
					<input type="text" name="name" id="name" placeholder="NAME" />
					<input type="email" name="email" id="email" placeholder="EMAIL" />
					<input type="tel" name="tel" id="tel" placeholder="PHOME" />
					<textarea
						name="mensaje"
						id="mensaje"
						cols="10"
						rows="5"
						placeholder="°MENSSAGE"
					></textarea>
					<input type="submit" value={"send"} />
				</form>
			</article>
		</section>
	);
};

export default Contacto;
