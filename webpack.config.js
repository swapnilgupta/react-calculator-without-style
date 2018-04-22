const path = require('path'); 
// create our config object

const config = {
    entry: path.join(__dirname, './client/index.js'),
    output: {
        path: path.join(__dirname, './public/'),
        filename: 'bundle.js'
    },
    module: {  // define our loaders here
        rules: [ // array of rules to handle different file
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            },
            {
                // check for files ending with .css (uses Regex)
                test: /\.css$/,
                // use these loaders of .css files. 'css loader get run first and is
                // used to handle the imports of our css files inside our jsx files.
                // The style loader then mounts our css into the DOM
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions : ['.js', '.jsx']
    }
};
module.exports = config;
// export our config object.
// You may have noticed we are using es5 syntax here. This is because Webpack,
// file, expects es5 syntax
