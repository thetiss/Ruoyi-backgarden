module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 80,
    open: true,
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      '/use': {
        target: `http://public-api-v1.aspirantzhang.com/users`,
        changeOrigin: true,
        pathRewrite: {
          '^/use': ''
        }
      }
    },
    disableHostCheck: true
  }
};
