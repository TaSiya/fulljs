module.exports = {
    entry : './src/index.js',
    output : {
        path : __dirname + '/pulic',
        filename : 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                loader : 'babel-loader'
            }
        ]
    }
};