const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    target: "web",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[contenthash].bundle.js",
        chunkFilename: "[contenthash].bundle.js",
        publicPath: "/",
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        modules: ["node_modules", "./src"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            {
                test: /\.(png|jpe?g|gif|swf)$/i,
                loader: "file-loader",
                options: {
                    name: "img/[name]-[hash:6].[ext]",
                },
            },
            {
                test: /\.(woff|woff2|ttf|eot|otf)$/,
                loader: "file-loader",
                options: {
                    name: "fonts/[name]-[hash:6].[ext]",
                },
            },
            {
                test: /\.svg$/,
                loader: "file-loader",
                options: {
                    name: "icons/[name]-[hash:6].[ext]",
                },
            },
        ],
    },
    devServer: {
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
                mode: "write-references",
            },
        }),
    ],
};
