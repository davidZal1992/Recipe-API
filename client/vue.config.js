module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: '"https://david-matan-recipe-api-server.herokuapp.com/',
          ws: true,
          changeOrigin: true
        }
      }
    }
  } 