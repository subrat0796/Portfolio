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
			},
		},
	},
	plugins: [],
};
