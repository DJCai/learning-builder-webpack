/* eslint-disable */
const assert = require('assert')

describe('webpack.prod.js test case', () => {
  const prodConfig = require('../../lib/webpack.prod.js')
  it('entry', () => {
    const expStr = new RegExp('learning-builder-webpack/test/template/src/(index|search)/index.js')
    assert.ok(prodConfig.entry.index.match(expStr))
  })
})