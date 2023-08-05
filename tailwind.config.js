/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		minHeight: {
			85: '85vh',
		},
		extend: {
			spacing: {
				'minus-155': '-155px',
				'minus-80': '-80px',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
}
