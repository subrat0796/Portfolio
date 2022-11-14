import React from "react";

import Eclipses from "../assets/Group 23.png";

const ContactMe = () => {
	return (
		<div className="h-[100%] w-6/12 mx-auto mt-32 ">
			{/*  */}
			<div className="bg-white min-w-[100px] max-w-[700px] relative h-[200px] top-[50%]"></div>
			<div className="">
				<img src={Eclipses} alt="Eclipses" />
			</div>
		</div>
	);
};

export default ContactMe;
