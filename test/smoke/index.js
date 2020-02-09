const path = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');
const Mocha = require('mocha');
const prodConfig = require('../../lib/webpack.prod.js');

const mocha = new Mocha({
  timeout: '20000ms', // 设置超时时间
});

process.chdir(path.join(__dirname, '..', 'template'));

rimraf('./prod/dist', () => {
  webpack(prodConfig, (err, stats) => {
    if (err) {
      console.log(err); // eslint-disable-line
      process.exit(2);
    }
    console.log(stats.toString({ // eslint-disable-line
      colors: true,
      modules: false,
      children: false,
    }));
    console.log('Webpack build success begin run test.'); // eslint-disable-line

    mocha.addFile(path.join(__dirname, 'html-test.js'));
    mocha.addFile(path.join(__dirname, 'css-js-test.js'));
    mocha.run();
  });
});
