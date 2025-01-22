// config-overrides.js
const path = require('path');

module.exports = function override(config, env) {
  // Exclude the @mediapipe package from the source map warnings
  config.module.rules.push({
    test: /\.js$/,
    enforce: 'pre',
    use: ['source-map-loader'],
    exclude: /node_modules\/@mediapipe/,
  });

  return config;
};
