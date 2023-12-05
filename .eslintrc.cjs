module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:import/errors',
		'prettier'
	],
	settings: {
		'import/resolver': {
			alias: {
				extensions: ['.ts', '.tsx'],
				map: [['@/', './src']]
			}
		}
	},
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true }
		]
	}
}
