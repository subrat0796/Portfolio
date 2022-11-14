import React from "react";

type WorkDataType = {
	id: number;
	title: string;
	shortDescription: string;
	descriptionOne: string;
	descriptionTwo: string;
	githubLink: string;
	productLink: string;
	imageLink: any;
};

const WorkData: WorkDataType[] = [
	{
		id: 1,
		title: "CRWN Clothing",
		shortDescription: "A one stop clothing e-commerce",
		descriptionOne: "A complete one stop clothing e-commerce built using ",
		descriptionTwo:
			"react , redux and essential react hooks and hosted live on netfliy with using firebase as it's backend",
		githubLink: "https://github.com/subrat0796/crwn-clothing",
		productLink: "https://delightful-frangollo-a369d4.netlify.app/",
		imageLink: require("../assets/crwn-clothing.jpg"),
	},
	{
		id: 2,
		title: "React Template Cli",
		shortDescription: "A complete react essential template",
		descriptionOne: "The only npm package that you would need ",
		descriptionTwo:
			"to get a kickstart template for small and medium scale react projects !!",
		githubLink: "https://github.com/subrat0796/react-template-cli",
		productLink: "https://www.npmjs.com/package/create-react-temp",
		imageLink: require("../assets/react-template-cli.png"),
	},
	{
		id: 3,
		title: "Products Scrapping",
		shortDescription: "Products api with real data",
		descriptionOne:
			"Presenting the most suitable API that would scarpe the data ",
		descriptionTwo:
			"from amazon and flipkart regarding the products that we want to add and hola we are good to go",
		githubLink: "https://github.com/subrat0796/Products-Scarping",
		productLink: "https://products-scaping.herokuapp.com/",
		imageLink: require("../assets/products-scarping.jpg"),
	},
];

const MyWorks = () => {
	return (
		<div className="h-[100%] w-10/12 mx-auto flex flex-col items-center justify-evenly">
			<div className="mt-16">
				<p className="text-darkGray text-center mxl:mt-6">My works</p>
				<h1 className="text-darkBlue w-[60%] text-6xl mx-auto text-center font-giloryBold m2xl:text-5xl mxl:text-4xl mxl:w-full">
					Discover my previous work experience
				</h1>
			</div>
			<div className="flex items-center mt-16 justify-evenly w-[90%] mxl:flex-col">
				{WorkData.map(
					({
						descriptionOne,
						descriptionTwo,
						githubLink,
						id,
						imageLink,
						productLink,
						shortDescription,
						title,
					}) => {
						return (
							<div
								className="w-[396px] h-[500px] cursor-pointer group perspective mx-auto rounded-3xl m2xl:w-[300px] m2xl:h-[420px] m2xl:mt-4"
								key={id}
							>
								<div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
									<div className="absolute backface-hidden bg-white w-full h-full rounded-3xl flex flex-col justify-around">
										{/* img */}
										<img
											src={imageLink}
											alt=""
											className="h-[324px] w-[324px] rounded-xl mx-auto m2xl:h-[270px] m2xl:w-[270px]"
										/>
										<div className="w-5/6 mx-auto pb-6">
											<h1 className="text-darkBlack text-[34px] m2xl:text-[24px]">
												{title}
											</h1>
											<h2 className="text-darkBlack text-[20px] m2xl:text-[16px]">
												{shortDescription}
											</h2>
										</div>
									</div>
									<div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-darkBlue overflow-hidden rounded-3xl">
										<div className="mx-auto w-5/6 flex flex-col justify-end h-full">
											<h1 className="text-white w-[50%] font-semibold text-xl m2xl:text-base">
												{title.toLowerCase()}
											</h1>
											<p>
												<span className="text-lightWhite m2xl:text-sm">
													{descriptionOne}
												</span>
												<span className="text-white m2xl:text-sm">
													{descriptionTwo}
												</span>
											</p>
											{/* links */}
											<div className="flex justify-between items-center mb-8">
												<a
													href={githubLink}
													className="underline text-yellow text-base m2xl:text-sm"
													target="_blank"
													rel="noreferrer"
												>
													Check Github
												</a>
												<a
													href={productLink}
													target="_blank"
													rel="noreferrer"
													className="w-min flex items-center justify-center p-2 rounded-3xl border border-yellow mt-3 mxl:mx-auto"
												>
													<h1 className="text-white text-base">Demo</h1>
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
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					}
				)}
				{/* card */}
			</div>
		</div>
	);
};

export default MyWorks;
