/**
 * Quasar App Extension install script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/install-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 */

module.exports = async api => {
	const devDependencies = {
		'@typescript-eslint/eslint-plugin': '2.5.0',
		'@typescript-eslint/parser': '2.5.0',
		'@vue/eslint-config-prettier': '5.0.0',
		'babel-eslint': '10.0.3',
		eslint: '6.5.1',
		'eslint-loader': '3.0.2',
		'eslint-plugin-prettier': '3.1.1',
		'eslint-plugin-vue': '5.2.3'
	};

	api.extendPackageJson({
		scripts: { lint: 'eslint --ext .js,.ts,.vue src' },
		devDependencies
	});

	api.render('./templates/eslint');

	const fs = require('fs');

	if (!fs.existsSync('.vscode')) {
		fs.mkdirSync('.vscode');
	}

	if (!fs.existsSync('.vscode/settings.json')) {
		fs.writeFileSync('.vscode/settings.json', '{}');
	}

	api.extendJsonFile('.vscode/settings.json', {
		'editor.formatOnSave': true,
		'eslint.autoFixOnSave': true,
		'eslint.validate': [
			{
				language: 'vue',
				autoFix: true
			},
			{
				language: 'html',
				autoFix: true
			},
			{
				language: 'javascript',
				autoFix: true
			}
		],

		'vetur.format.defaultFormatter.html': 'prettier',
		'vetur.format.defaultFormatter.js': 'prettier-eslint'
	});

	const execa = require('execa');

	execa('npm install').then(() => {
		if (api.prompts.fixLint) {
			execa('npm', ['run', 'lint', '--', '--fix']);
		}
	});
};
