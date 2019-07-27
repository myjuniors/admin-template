// 自定义的 vue项目的配置


module.exports = {
  publicPath: './', // 公共路径
  outputDir: process.env.NODE_ENV === "test" ? 'dist-test' : 'dist', // 不同的环境打不同包名
  devServer: { // 配置服务器
    port: 8000, // 端口号 
    open: true, // 自动打开浏览器
    https: false, // 关闭 https的请求
    overlay: {
      warnings: true,
      errors: true
    }
  }
}