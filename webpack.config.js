const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import the plugin

module.exports = {
    entry: './src/index.js', // React entry point
    output: {
        path: path.resolve(__dirname, 'dist'), // Output folder
        filename: 'bundle.js',                // Output JS file
        clean: true,                          // Cleans up old build files
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,              // Match .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',   // Use Babel to transpile
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/,               // Match .css files
                use: ['style-loader', 'css-loader'],  // Use both loaders
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,  // Match image file types
                use: [
                    {
                        loader: 'file-loader', // Or use url-loader if you prefer inline images
                        options: {
                            name: 'assets/[name].[hash].[ext]', // Output image path
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',  // Source HTML template
            filename: 'index.html',          // Output file in the dist folder
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],          // Resolve these extensions
    },
    devServer: {
        static: path.join(__dirname, 'dist'), // Serve files from dist in dev mode
        port: 3000,
        open: true,                           // Automatically open browser
    },
};
