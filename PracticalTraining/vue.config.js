// vue.config.js


module.exports ={
  // 选项
  productionSourceMap: false,
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  devServer: {
      port: 8080,
      host: '0.0.0.0',
      https: false,
      open: true,
      proxy:{
        '/amap': {
            　　target: 'https://restapi.amap.com/v3',
            　　　　changeOrigin: true,
            　　　　ws: true,
            　　　　pathRewrite: {
                                '^/amap': ''
            　　}
            },
      }
  },

}