var path = require("path");
var webpack = require("webpack"); // Used for plugins.

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // Output path must absolute...
    filename: 'bundle.js',
    publicPath: '/dist' // Where the assets are found.
  },

/*  Loaders are the node-based utilities built for webpack to help webpack to compile and/or transform a given type of resource that can be bundled as a javascript module.*/
  module: {
    rules: [ // These are our loaders...
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [ // Webpack executes loaders in reverse order. Loaders are applied on a per-file basis
          'style-loader', // Add the css code to the style tag.
          'css-loader', // Put css into javascript.
          'sass-loader' // Convert the scss to css.
        ]
      }
    ]
  }
 /* plugins: [ // Applies to overall code (minification, etc).
    new webpack.optimize.UglifyJsPlugin({
      // Options go here...
    })
  ]*/
};