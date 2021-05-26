module.exports = {
  css: {
      loaderOptions: {
          sass: {
            prependData: `@import "@/assets/_include-media.scss";`
          }
      }
  }
}