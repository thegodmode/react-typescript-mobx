var path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src') + '/app/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'awesome-typescript-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts", "tsx"]
    }
}