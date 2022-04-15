import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

Vue.config.productionTip = false

//=> 1.设置事件总线 (goodsListItem中的图片需要监听是否加载完成)
Vue.prototype.$bus = new Vue();

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');