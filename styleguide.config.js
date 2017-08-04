const loaders = require('loaders');
const path = require('path');
module.exports = {
	title: 'Annie\'s Component Lab',
	styleguideDir: path.join(__dirname, 'docs'),
	sections: [
		{
			name: '',
			content: './docs/Intro.md',
		},
		{
			name: 'Identity',
			components: './src/components/Identity/**/[A-Z]*.jsx',
		},
		{
			name: 'Elements',
			components: './src/components/Elements/**/[A-Z]*.jsx',
		}
	],
	webpackConfig: require('./config/webpack.config.dev.js'),
	showUsage: true,
}
