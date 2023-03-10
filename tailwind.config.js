/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'1fr-2fr': '1fr 2fr',
			},
		},
	},
	plugins: [],
};
