export default [{
    path: '/2',
    component: '../layout/BaseLayout',
    routes: [{
        path: '1',
        component: './hello/HelloWorld'
    }]
}, {
    path: '1',
    component: './ShoppingList'
}, {
    path: '3',
    component: './ShoppingList',
    Routes: ['./src/routes/test.js', './src/routes/test1.js']
}]