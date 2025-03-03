import { ModuleFederationPlugin } from '@module-federation/enhanced/webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    mode: "development",
    devServer: {
        port: 3001,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    },
    output: {
        publicPath: "http://localhost:3001/",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "header",
            filename: "remoteEntry.js",
            exposes: {
                "./Header": "./src/Header.js",
            },
            // shared: {
            //     react: { singleton: true, requiredVersion: "auto" },
            //     "react-dom": { singleton: true, requiredVersion: "auto" },
            // },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
