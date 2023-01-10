const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV === 'development';

const styleLoader = {
  loader: 'style-loader'
};

const MiniCssExtractPluginLoader = {
  loader: MiniCssExtractPlugin.loader
};

module.exports = [
  devMode ? { ...styleLoader } : { ...MiniCssExtractPluginLoader },
  {
    loader: 'css-loader',
    // The modules option enables/disables the CSS Modules specification and setup basic behaviour.
    // https://webpack.js.org/loaders/css-loader/#modules
    // options: {
    //   modules: true,
    // }
  }
];
