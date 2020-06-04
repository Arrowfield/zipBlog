module.exports = {
  lintOnSave: false,
  configureWebpack: {
    externals: {
      //Valine: 'Valine'
    }
  },
  pluginOptions: {
  },
  devServer: {
    disableHostCheck: true,
    port:8091
    // proxy: {
    //   "/api": {
    //     target: process.env.VUE_APP_SERVER,
    //     ws: false,
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },
  },
}
