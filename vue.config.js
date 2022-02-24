//新建vue.config.js

module.exports = {
    publicPath: "./",  //新版本, 不修改打包后用不了
    devServer: {
        port: 8888,
        open: true,//编译项目浏览器自动打开
        proxy: {
            '/': {
                target: 'http://www.baidu.com',
                changeOrigin: true,
                // pathRewiter: {
                //     "^/api": "/"//接口前公用部分，通常api（看后端接口命名） ^表示以** 开头
                // }
            },
        }
    },
};

