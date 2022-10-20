import React from "react";
import "./App.css";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import CTASection from "./components/CTASection";
import AboutMe from "./components/AboutMe";
import MyWorks from "./components/MyWorks";

function App() {
	return (
		// wrapper
		<div className="">
			{/* hero section */}
			<div className="bg-darkBlue h-[80vh]">
				<Navbar />
				<Banner />
			</div>
			<div className="bg-lightOrange h-[80vh]">
				<CTASection />
			</div>
			<div className="bg-white h-[80vh]">
				<AboutMe />
			</div>
			<div className="bg-lightOrange h-[110vh] mxl:h-min">
				<MyWorks />
			</div>
		</div>
	);
}

export default App;
