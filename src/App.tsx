import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
	return (
		// wrapper
		<div className="">
			{/* hero section */}
			<div className="bg-darkBlue h-[80vh]">
				<Navbar />
				<Banner />
			</div>
		</div>
	);
}

export default App;
