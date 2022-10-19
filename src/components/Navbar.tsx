import React from "react";

const Navbar = () => {
	return (
		<header>
			<nav className="flex p-4 items-center justify-between w-10/12 mx-auto">
				{/* logo */}
				<div>
					<h1 className="text-cyan-200 text-2xl font-giloryBold">
						Subrat<span className="text-amber-300">.</span>
					</h1>
				</div>
				{/* nav menu */}
				<div className="flex w-7/12 justify-end">
					<ul className="flex font-gilory font-bold align-middle justify-center">
						<li className="mx-2 my-auto transition ease-in-out duration-200 hover:text-amber-300">
							About me
						</li>
						<li className="mx-2 my-auto  transition ease-in-out duration-200 hover:text-amber-300">
							Works
						</li>
						<li className="mx-2 my-auto transition ease-in-out duration-200 hover:text-amber-300">
							Blogs
						</li>
					</ul>
					{/* buttons */}
					<div className="flex align-middle justify-center w-2/6">
						<div className="text-center my-auto mx-2 transition ease-in-out duration-200 text-green-300 font-bold rounded-3xl p-2 w-full bg-transparent border border-amber-200 hover:bg-green-300 hover:text-black">
							Resume
						</div>
						<div className="text-center my-auto mx-2 transition ease-in-out duration-200 text-black font-bold rounded-3xl p-2 w-full bg-green-300 border border-amber-200 hover:bg-white hover:text-green-300">
							Contact Me
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
