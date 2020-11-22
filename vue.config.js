module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: "http://an67.pythonanywhere.com/api"
  }
};
