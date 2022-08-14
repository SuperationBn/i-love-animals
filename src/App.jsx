import "./App.css";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Information from "./components/Information";
import Mensaje from "./components/Mensaje";
import PorqueElegirnos from "./components/PorqueElegirnos";
import Services from "./components/Services";
import Slider from "./components/Slider";
import Trabajos from "./components/Trabajos";
import UltimoCliente from "./components/UltimoCliente";

function App() {
	return (
		<div className="App">
			<Header />
			<Slider />
			<div className="container-main">
				<main className="main">
					<Information />
					<Services />
					<PorqueElegirnos />
					<Trabajos />
					<Mensaje />
					<UltimoCliente />
					<Contacto />
				</main>
			</div>

			<Footer />
		</div>
	);
}

export default App;
