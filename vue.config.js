const IsProd = process.env.NODE_ENV === "production";
module.exports = {
  publicPath: IsProd ? "/production-sub-path/" : "/",
  devServer: {
    host: "0.0.0.0",
    port: 8083,
    open: true,
    compress: true,
    proxy: {
      "/authmember": {
        target: "http://newapimdev.waguda.com",
        changeOrigin: true
      },
      "/d": {
        target: "http://newapimdev.waguda.com",
        changeOrigin: true
        // pathRewrite: { '^/api': '' }
      }
    }
  }
};
