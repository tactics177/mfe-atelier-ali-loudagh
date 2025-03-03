import { ModuleFederationPlugin } from '@module-federation/enhanced/webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: "development",
  devServer: {
    port: 3000,
  },
  output: {
    publicPath: "http://localhost:3000/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      remotes: [
        {
          header: "header@http://localhost:3001/remoteEntry.js",
        },
      ],
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
