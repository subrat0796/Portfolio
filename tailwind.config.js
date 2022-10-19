/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

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
			},
			screens: {
				m2xl: { max: "1535px" },
				mxl: { max: "1279px" },
				mlg: { max: "1023px" },
				mmd: { max: "767px" },
				msm: { max: "639px" },
			},
		},
	},
	plugins: [],
};
