const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { enforce: 'pre', test: /\.tsx?$/, use: [ { loader: 'tslint-loader', options: { typeCheck: true, fix: true, },  }, ],  },

            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            { test: /\.css?$/, loaders: ["style-loader", { loader: "css-loader", options: { module: true, localIndentName: "[path][name]__[local]--[hash:base64:5]" } } ] }
        ]
    },

    devServer : {
        historyApiFallback: true,
        port              : 3000,                           // ポートを指定
        progress          : true,                           // 変換の進捗をコンソールに表示
        inline            : true,                           // インライン/iframeモードの指定(通常インラインでいい)
        clientLogLevel    : 'info',                         // バンドル作成に関するログのレベル(none, error, warning, info)
        contentBase       : path.resolve(__dirname, './dist'),                      // サーバの基準パス(ドキュメントルート)
        publicPath        : '/'                           // オンメモリのバンドルファイルの仮想的なパス
    },
};

