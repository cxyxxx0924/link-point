import path from 'path'
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/_include-media.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/link-point/'
    : '/'
}