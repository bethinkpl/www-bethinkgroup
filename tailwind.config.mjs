/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				canvas: colors.gray[50],
				background: colors.gray[50],
				text: colors.gray[900],
				link: colors.cyan[600],
			},
			fontFamily: {
				sans: ['Rubik', ...defaultTheme.fontFamily.sans],
			},
			spacing: ({ theme }) => ({
				'layout-navbar-height': '5rem',
			}),
		},
	},
	plugins: [],
};
