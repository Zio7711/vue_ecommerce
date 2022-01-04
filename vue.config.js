module.exports = {
  //disable eslint
  lintOnSave: false,

  productionSourceMap: false,

  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.98.123.211',
      },
    },
  },
};
