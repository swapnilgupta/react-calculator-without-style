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
            }
        ]
    }
};
module.exports = config;
// export our config object.
// You may have noticed we are using es5 syntax here. This is because Webpack,
// file, expects es5 syntax
