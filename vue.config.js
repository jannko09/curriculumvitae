module.exports = {
  publicPath: '/curriculumvitae/',
    css: {
      loaderOptions: {
        sass: {
            prependData: `
            @import "@/styles/main.scss";
            `
        }
      }
    }
  };