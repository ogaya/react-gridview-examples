module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "./dist/index.bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            }
        ]
    },   
    resolve: {
        extensions: ["", ".js", ".ts", ".tsx"]
    }
};
