import { ModuleFederationPlugin } from '@module-federation/enhanced/webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    entry: './src/index.js',
    mode: "development",
    devServer: {
        port: 3000,
    },
    output: {
        publicPath: "http://localhost:3000/",
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
            name: "shell",
            remotes: {
                header: "header@http://localhost:3001/remoteEntry.js",
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
