/* eslint-disable */
const assert = require('assert');

describe('webpack.ssr.js test case', () => {
  const ssrConfig = require('../../lib/webpack.ssr.js');
  it('entry', () => {
    const expStr = new RegExp('learning-builder-webpack/test/template/src/search/index-server.js');
    assert.ok(ssrConfig.entry.search.match(expStr));
  });
});
