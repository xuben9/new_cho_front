module.exports = {
  devServer: {
    proxy: {
      '/aposServer': {
        target: 'http://localhost:8086/cho',
        pathRewrite: { '/aposServer': '' }
      }
    }
  }
}
