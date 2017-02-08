function setTitle(title) {
    document.title = title;
}
export const routes = [
    {
        path: '*',
        indexRoute: {
            getComponent(nextState, cb) {
                require.ensure([], function (require) {
                    // 使用commonjs的方式引入es6模块，需要指定哪个对象，此处是default
                    cb(null, require('./page/CitySelect/CitySelectPage.jsx').default);
                }, 'home');
            },
            onEnter() {
                setTitle('搜索');
            }

        },
        childRoutes: [
            
        ]
    }
];
