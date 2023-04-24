module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			display: ['Unica One', 'sans-serif'],
			sans: ['Vollkorn', 'sans-serif'],
			mono: ['Space Mono', 'monospace']
		},
		backgroundImage: {
			'gradient-fade': 'linear-gradient(180deg, #000, transparent)',
			'gradient-3': 'radial-gradient(circle at top left,rgba(56,80,69, 0.75),transparent 80%),radial-gradient(circle at top right,rgba(183,198,175, 0.75),transparent 100%),radial-gradient(at bottom left,rgba(183,198,175, 0.75),transparent 100%),radial-gradient(at bottom right,rgba(56,80,69, 0.75),transparent 80%);',
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
