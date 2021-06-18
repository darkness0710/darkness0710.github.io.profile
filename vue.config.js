module.exports = {
 	chainWebpack: config => {
 	    config.module.rules.delete('eslint');
 	},
 	publicPath: '/darkness0710.github.io.profile',
 	outputDir: 'docs'
}