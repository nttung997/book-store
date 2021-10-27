module.exports = {
  publicPath: process.env.VUE_APP_BASE_URL,
  outputDir: process.env.NODE_ENV === 'production'
    ? 'build'
    : 'dist',
  assetsDir: 'assets'
};
