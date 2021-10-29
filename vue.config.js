const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const path = require('path')

module.exports = {
  lintOnSave: false,
  //publicPath:"/web/",
  pluginOptions: {},
  devServer: {
    disableHostCheck: true,
    port: 8091
    // proxy: {
    //   "/api": {
    //     target: process.env.VUE_APP_SERVER,
    //     ws: false,
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== 'production') return
    return {
      plugins: [
        // new PrerenderSPAPlugin({
        //   staticDir: path.join(__dirname, 'dist'),
        //   routes: ['/'],
        //   //routes: ['/'],
        //   renderer: new Renderer({
        //     inject: {
        //       foo: 'bar'
        //     },
        //     //headless: false,
        //     renderAfterDocumentEvent: 'render-event',
        //     args: ['--no-sandbox', '--disable-setuid-sandbox']
        //   })
        // })
      ]
    }
  }
}
