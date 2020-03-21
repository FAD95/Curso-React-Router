const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtP = require("mini-css-extract-plugin");

module.exports = env => {
  return {
    entry: {
      app: path.resolve(__dirname, "src/entries/app.js")
      // "redux": path.resolve(__dirname, 'src/entries/redux.js'),
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "js/[name].[hash].js",
      publicPath: path.resolve(__dirname, "dist") + "/",
      chunkFilename: "js/[id].[chunkhash].js"
    },
    devServer: {
      port: 9000
    },
    module: {
      rules: [
        {
          // test: que tipo de archivo quiero reconocer,
          // use: que loader se va a encargar del archivo
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["es2015", "react", "stage-2"]
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtP.loader
            },
            "css-loader"
          ]
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtP.loader
            },
            "css-loader",
            "sass-loader"
            
          ]
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 10000,
              fallback: "file-loader",
              name: "images/[name].[hash].[ext]"
            }
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtP({
        filename: "css/[name].[hash].css",
        chunkFilename: "css/[id].[hash].css"
      })
    ]
  };
};
