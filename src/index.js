/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

module.exports = function(api) {
	api.extendWebpack(cfg => {
		// add/remove/change cfg (Webpack configuration Object)
		cfg.module.rules.push({
			enforce: 'pre',
			test: /\.(ts|js|vue)$/,
			loader: 'eslint-loader',
			exclude: /node_modules/,
			options: {
				formatter: require('eslint').CLIEngine.getFormatter('stylish')
			}
		});
	});
};
