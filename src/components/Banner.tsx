import React, { useState } from "react";

import { ReactComponent as Exclamation } from "../assets/Exclamation.svg";

const Banner = () => {
	const [email, setEmail] = useState("");

	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	return (
		<div className="mx-auto my-2 h-[80%] w-10/12 flex justify-evenly items-center">
			{/* banner left */}
			<div className="w-1/2 mxl:w-full mxl:flex-col mxl:text-center">
				<h1 className="text-5xl font-bold text-white mxl:mx-auto mxl:text-4xl">
					Talk is cheap
				</h1>
				<h1 className="text-5xl font-bold text-white mxl:mx-auto flex items-center mxl:text-4xl mxl:justify-center">
					Show me code
					<Exclamation className="ml-1 mxl:text-3xl" />
				</h1>
				<p className="text-gray-300 min-w-min text-xs mt-3 mxl:text-xl">
					I like to craft scalable and solid frontend product with great user
					experience
				</p>
				{/* input and button */}
				<div className="w-[300px] flex p-2 rounded-3xl border border-yellow mt-3 mxl:mx-auto mxl:w-[200px]">
					<input
						type="text"
						placeholder="abcd@gmail.com"
						value={email}
						onChange={(e) => handleInput(e)}
						className="text-sm text-center placeholder-yellow w-full bg-transparent appearance-none border-yellow rounded py-2 px-1 mx-auto text-yellow focus:outline-none"
					/>
					<button>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="#B8E560"
							viewBox="0 0 24 24"
							strokeWidth="1"
							stroke="currentColor"
							className="w-10 h-10 text-black"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</button>
				</div>
			</div>
			{/* banner right */}
			<div className="h-10 bg-white w-10 mxl:hidden"></div>
		</div>
	);
};

export default Banner;
