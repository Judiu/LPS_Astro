/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',"./node_modules/tw-elements/dist/js/**/*.js"],
	theme: {
		extend: {
			colors: {
				'LPSColor' : '#F4041B'
			}
		},
	},
	plugins: []
}

