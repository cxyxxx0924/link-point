module.exports = {
  css: {
      loaderOptions: {
          sass: {
            additionalData: `@import "@/assets/_include-media.scss";`
          }
      }
  }
}