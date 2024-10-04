const { defineConfig } = require('@vue/cli-service');
const path = require('path'); // path 모듈을 사용하여 경로를 설정

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src') // @를 src 폴더로 설정
      }
    }
  }
});
