const path = require('path');

module.exports = {
    mode: 'development',    
    entry: {
        swiper_home: './src/js/swiper_home_input.js',
        swiper_course_details: './src/js/swiper_course_details_input.js',
        yup: './src/js/yup_input.js',
        animate: './src/js/animate_input.js',
        aos: './src/js/aos_input.js',
    },
    output: {
        path: path.resolve(__dirname, './src/js/'),
        filename: '[name].bundle.js' 
    },
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
};