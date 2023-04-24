module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			display: ['Unica One', 'sans-serif'],
			sans: ['Vollkorn', 'sans-serif'],
			mono: ['Space Mono', 'monospace']
		},
		backgroundImage: {
			'gradient-fade': 'linear-gradient(90deg, #d7d2c9, #60677a)',
			'gradient-3': 'radial-gradient(circle at top left,rgba(255, 255, 255, 0.5),transparent 100%),radial-gradient(circle at top right,rgba(255, 255, 255, 0.5),transparent 80%),radial-gradient(at bottom left,rgba(255, 0, 255, 0.5),transparent 100%),radial-gradient(at bottom right,rgba(255, 100, 100, 0.5),transparent 70%);',
		},
		extend: {
			colors: {
				svelteOrange: '#FF3E00',
				svelteDark: '#F03A00',
				beige: '#d2b097',
				hotPink: '#FF1966',
				dark: '#111111',
				light: '#FAFAFA'
			}
		},
		listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal',
			square: 'square',
			roman: 'upper-roman'
		}
	},
	plugins: []
}
