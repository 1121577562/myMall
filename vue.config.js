module.exports = {
    transpileDependencies: true,
    // 给项目文件起别名
    configureWebpack: {
        resolve: {
            extensions: [],
            //=>给某些文件配置别名
            alias: {
                // "@": "src" 默认配置中 @ 表示 src 目录
                "assets": "@/assets",
                "common": "@/common",
                "components": "@/components",
                "network": "@/network",
                "views": "@/views",
            }
        }
    }
}