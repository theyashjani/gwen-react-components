module.exports = {
	presets: [["react-app", { absoluteRuntime: false }]],
	plugins: [["@babel/plugin-proposal-class-properties", { loose: true }], "babel-plugin-styled-components", "@babel/plugin-proposal-optional-chaining"],
}
