import React, { useState } from "react";

const classes = (showDrawer: boolean): string => {
	if (showDrawer)
		return "flex-col w-8/12 max-h-full z-10 justify-center items-center xl:hidden absolute left-[50%] -translate-x-1/2 text-center -translate-y-[350px] transition ease-in-out duration-300 translate-y-[0px]";
	return "flex-col w-8/12  max-h-full z-10 justify-center items-center xl:hidden absolute left-[50%] -translate-x-1/2 text-center -translate-y-[350px] transition ease-in-out duration-300";
};

const Navbar = () => {
	const [showDrawer, setShowDrawer] = useState(false);

	const handleDrawerClick = (event: React.MouseEvent<HTMLDivElement>) => {
		setShowDrawer((prev) => !prev);
	};

	return (
		<header>
			<nav className="flex p-4 items-center justify-between w-11/12 2xl:w-10/12 mx-auto">
				{/* logo */}
				<div>
					<h1 className="text-white text-2xl font-giloryBold">
						Subrat<span className="text-yellow">.</span>
					</h1>
				</div>
				{/* hamberger bar */}
				<div onClick={(e) => handleDrawerClick(e)} className="xl:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="white"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="white"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</div>

				{/* nav menu */}
				<div className="flex w-7/12 justify-end mxl:hidden">
					<ul className="flex font-inter font-semibold w-[60%] font-bold align-middle justify-evenly xl:w-[40%]">
						<li className="my-auto text-white transition ease-in-out duration-200 hover:text-yellow">
							About me
						</li>
						<li className="my-auto text-white transition ease-in-out duration-200 hover:text-yellow">
							Works
						</li>
						<li className="my-auto text-white transition ease-in-out duration-200 hover:text-yellow">
							Blogs
						</li>
					</ul>
					{/* buttons */}
					<div className="flex align-middle  justify-center w-2/6">
						<div className="text-[16px] text-center my-auto mx-2 transition ease-in-out duration-200 text-yellow font-inter font-bold rounded-3xl p-2 w-full bg-transparent border border-yellow hover:bg-yellow hover:text-black 2xl:text-[18px]">
							Resume
						</div>
						<div className="text-[16px] text-center my-auto mx-2 transition ease-in-out duration-200 text-black font-inter font-bold rounded-3xl p-2 w-full bg-yellow border hover:bg-transparent hover:text-yellow 2xl:text-[18px]">
							Contact Me
						</div>
					</div>
				</div>
			</nav>
			{/* mobile menu */}
			<div className={classes(showDrawer)}>
				<ul className="">
					<li className="mt-2 text-white transition ease-in-out duration-200 hover:text-yellow">
						About me
					</li>
					<li className="mt-2 text-white transition ease-in-out duration-200 hover:text-yellow">
						Works
					</li>
					<li className="mt-2 text-white transition ease-in-out duration-200 hover:text-yellow">
						Blogs
					</li>
					{/* buttons */}

					<li className="text-[16px] text-center mt-2 transition ease-in-out duration-200 text-yellow font-bold rounded-3xl p-2 w-full bg-transparent border border-yellow hover:bg-yellow hover:text-black 2xl:text-[18px]">
						Resume
					</li>
					<li className="text-[16px] text-center mt-2 transition ease-in-out duration-200 text-black font-bold rounded-3xl p-2 w-full bg-yellow border hover:bg-transparent hover:text-yellow 2xl:text-[18px]">
						Contact Me
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Navbar;
