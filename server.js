var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  proxy: {
  },
  watchOptions: {
    aggregateTimeout: 1000,
    poll: 2000
  },
  quiet: false,
  noInfo: false,
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false
  }
}).listen(3000, '0.0.0.0', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});
