module.exports = {
  // devServer:{
  //     port:80,
  //     host:process.env.MY_SELF_HOST
  // }

  configureWebpack: {
    externals: {
      //Valine: 'Valine'
    }
  },
  pluginOptions: {

  },
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://121.199.58.113:8080',
        ws: false,
        changeOrigin: true,
        secure: false,
      }
    }
  },
}