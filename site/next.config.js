const path = require('path');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  trailingSlash: true,
}

const withTM = require('next-transpile-modules')([
  '@org/components',
]);

module.exports = withPlugins(
  [withTM({
    webpack: (config) => {
      /**
       * "Invalid hook call"
       * https://github.com/martpie/next-transpile-modules#i-have-trouble-with-duplicated-dependencies-or-the-invalid-hook-call-error-in-react
       * */ 
      // config.resolve.alias['react'] = path.resolve(__dirname, '.', 'node_modules', 'react');
      // config.resolve.alias['styled-components'] = path.resolve(__dirname, '.', 'node_modules', 'styled-components');
      return config
    },
  })],
  nextConfig
);