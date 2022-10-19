import React from "react";

const Navbar = () => {
	return (
		<header>
			<nav className="flex p-4 items-center justify-between w-10/12 mx-auto">
				{/* logo */}
				<div>
					<h1 className="text-white text-2xl font-giloryBold">
						Subrat<span className="text-yellow">.</span>
					</h1>
				</div>
				{/* nav menu */}
				<div className="flex w-7/12 justify-end">
					<ul className="flex font-gilory w-[60%] font-bold align-middle justify-evenly">
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
					<div className="flex align-middle justify-center w-2/6">
						<div className="text-center my-auto mx-2 transition ease-in-out duration-200 text-yellow font-bold rounded-3xl p-2 w-full bg-transparent border border-yellow hover:bg-yellow hover:text-black">
							Resume
						</div>
						<div className="text-center my-auto mx-2 transition ease-in-out duration-200 text-black font-bold rounded-3xl p-2 w-full bg-yellow border hover:bg-transparent hover:text-yellow">
							Contact Me
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
