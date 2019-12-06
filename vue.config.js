const webpack = require('webpack')

module.exports = {
    devServer: {
        port: 8416,
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery',
                'window.jQuery': 'jquery',
                jquery: 'jquery',
            })
        ]
    }
}