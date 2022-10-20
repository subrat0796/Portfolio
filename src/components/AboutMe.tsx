import React from "react";

const AboutMe = () => {
	return (
		<div className="h-[100%] w-10/12 mx-auto flex items-center justify-evenly">
			{/* description */}
			<div className="text-center w-[40%] mx:w-full">
				<p className="text-sm text-lightGray font-semibold">About me</p>
				<h1 className="text-6xl font-giloryBold mxl:text-[2.5rem] text-darkBlue">
					Know me better
				</h1>
				<p className="text-[16px] text-darkGray mt-3">
					Since starting of my code journey , I've done remote work for
					agencies, consulted for startups, and collaborated with talented
					people to create digital products for both business and consumer use
					working on technologies like ReactJs, ExpressJs,NodeJs, React Native
					and databases like MongoDB and Postgresql.
				</p>
			</div>
			{/* image */}
			<div className="h-[340px] w-[40%] mx:hidden">
				{/* outer circle */}
				<div className="border-yellow border-[10px] h-full bg-gray-50 w-[340px] mx-auto rounded-full"></div>
				<div className="bg-yellow right-[-57%] bottom-[25%] h-[89px] w-[89px] rounded-full relative z-10"></div>
				{/* small arc representation part */}
			</div>
		</div>
	);
};

export default AboutMe;
