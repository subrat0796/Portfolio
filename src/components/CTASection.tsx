import React from "react";
import Arrow from "./AnimatedArrow/Arrow";

const CTASection = () => {
	return (
		<div className="h-[100%] w-10/12 mx-auto flex flex-col items-center justify-evenly">
			<div className="text-center">
				<h1 className="text-5xl font-giloryBold text-darkBlue mxl:text-[2.5rem]">
					Looking for a <span className="text-yellow">developer</span>?
				</h1>
				<h1 className="text-5xl font-giloryBold text-darkBlue mt-2 mxl:text-[2.5rem]">
					Wanna know more about <span className="text-yellow">me</span>?
				</h1>
				<p className="text-[24px] font-semibold text-lightGray">
					Here's what you are looking for
				</p>
			</div>
			{/* button */}
			<Arrow></Arrow>
		</div>
	);
};

export default CTASection;
