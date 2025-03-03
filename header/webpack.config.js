import { ModuleFederationPlugin } from '@module-federation/enhanced/webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: "development",
  devServer: {
    port: 3001,
  },
  output: {
    publicPath: "http://localhost:3001/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "header",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/Header",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
