import routes from './config/route'
const path = require('path')
export default {
    // exportStatic: true,
    singular: true,
    // base: '/dist',
    publicPath: './',
    routes,
    plugins: [
        ['umi-plugin-react', {
            // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
            antd: true,
            dva: true,
            // dynamicImport: {
            //     webpackChunkName: true,
            // },
            chunks: ['testConfig', 'umi'],
        }],
    ],
    chainWebpack(config, {webpack}) {
        config.optimization.splitChunks({
            cacheGroups: {
                tt123: {
                    name: 'testConfig',
                    chunks: 'all',
                    filename: 'config.js',
                    enforce: true,
                    test: path.resolve(__dirname, './config/testConfig')
                },
            },
        })


// console.log(webpack)

    }
}