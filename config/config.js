export default {
    singular: true,
    routes: [{
        path: '/2',
        component: '../layout/BaseLayout',
        routes: [{
            path: '',
            component: './HelloWorld'
        }]
    }, {
        path: '1',
        component: './ShoppingList'
    }, {
        path: '3',
        component: './ShoppingList',
        Routes: ['./src/routes/test.js', './src/routes/test1.js']
    }],
    plugins: [
        ['umi-plugin-react', {
            // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
            antd: true,
            dva: true,
        }],
    ],
}