/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes')['[data-theme=light]'],
					primary: '#47a025',
					'primary-focus': '#55b42e',
					'primary-content': '#fff',
					secondary: '#f65600',
					'secondary-focus': '#ff730a',
					'secondary-content': '#fff'
				}
			},
			{
				dark: {
					...require('daisyui/src/theming/themes')['[data-theme=dark]'],
					primary: '#906036',
					'primary-focus': '#906036',
					'primary-content': '#fff',
					secondary: '#0e8d62',
					'secondary-focus': '#0a4a37',
					'secondary-content': '#fff'
				}
			}
		]
	},
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')]
};
