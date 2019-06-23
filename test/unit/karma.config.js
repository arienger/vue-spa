// http://bit.ly/vue-spa-karma (https://gist.github.com/bstavroulakis/dcaf903e3f8d3bf6e6fa202b34c3849a#file-07-03-karma)
var webpackConfig = require('../../build/webpack.test.config.js')
module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack']
    },
    plugins: [
      'karma-mocha',
      'karma-sinon-chai',
      'karma-phantomjs-launcher',
      'karma-webpack'
    ],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  })
}
