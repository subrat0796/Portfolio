/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

const MyClass = plugin(function ({ addUtilities }) {
	addUtilities({
		".my-rotate-y-180": {
			transform: "rotateY(180deg)",
		},
		".preserve-3d": {
			transformStyle: "preserve-3d",
		},
		".perspective": {
			perspective: "1000px",
		},
		".backface-hidden": {
			backfaceVisibility: "hidden",
		},
	});
});

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				gilory: ["GLight", ...defaultTheme.fontFamily.sans],
				giloryBold: ["GBold", "sans-serif"],
			},
			colors: {
				yellow: "#B8E560",
				darkBlue: "#161F65",
				lightOrange: "#F5F4ED",
				lightGray: "#B4B4B4",
				white: "#FFFFFF",
				lightWhite: "#FFFFFFB2",
				darkGray: "#676767",
				darkBlack: "#1E1E1E",
			},
			screens: {
				m2xl: { max: "1535px" },
				mxl: { max: "1279px" },
				mx: { max: "1180px" },
				mlg: { max: "1023px" },
				mmd: { max: "767px" },
				msm: { max: "639px" },
			},
		},
	},
	plugins: [MyClass],
};
