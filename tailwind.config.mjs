/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			primary: 'var(--color-primary)',
			accent: 'var(--color-accent)',
			'light-brown': {
				'50': '#f8f3f0',   // Lightest shade
				'100': '#f1e6e0',
				'200': '#e3cec2',
				'300': '#d5b6a3',
				'400': '#c79e85',
				'500': '#cd9773',   // Base color
				'600': '#b8805e',
				'700': '#9c694a',
				'800': '#805236',
				'900': '#643b22',   // Darkest shade
			  },
		},
		extend: {
		},
	},
	plugins: [],
}
