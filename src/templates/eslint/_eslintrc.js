module.exports = {
	root: true,

	parserOptions: {
		parser: '@typescript-eslint/parser',
		sourceType: 'module'
	},

	env: {
		browser: true,
		node: true
	},

	// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
	// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/essential',
		'@vue/prettier'
	],

	// required to lint *.vue files
	plugins: ['vue', '@typescript-eslint'],

	globals: {
		ga: true, // Google Analytics
		cordova: true,
		__statics: true,
		process: true
	},

	// add your custom rules here
	rules: {
		'prefer-promise-reject-errors': 'off',

		// allow console.log during development only
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		// allow debugger during development only
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'@typescript-eslint/interface-name-prefix': ['error', 'always'],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/ban-ts-ignore': 'warn'
	}
};
