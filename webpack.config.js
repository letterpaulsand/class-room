const path = require('path');

module.exports = {
  entry: 'src/html/index/index.js',// ----------------------------------------
  output: {
    path: path.resolve(__dirname, 'index'),
    filename: 'index.[hash].js',
  },
  
};