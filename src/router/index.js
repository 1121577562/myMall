import Vue from "vue";
import VueRouter from "vue-router";

// 导入组件，然后配置路由映射关系
const Home = () =>
    import ("views/home/Home.vue");
const Category = () =>
    import ("views/category/Category.vue")

const Cart = () =>
    import ("views/cart/Cart.vue");
const Profile = () =>
    import ("views/profile/Profile.vue");



//=> 1.安装插件
Vue.use(VueRouter);

//=> 2.创建路由对象 和 配置映射关系
const routes = [{
        path: "/",
        redirect: "/home"
    }, {
        path: "/home",
        component: Home
    },
    {
        path: "/category",
        component: Category
    },
    {
        path: "/cart",
        component: Cart
    },
    {
        path: "/profile",
        component: Profile
    }
];


const router = new VueRouter({
    routes: routes,
    mode: "history"
});


//=> 3.导出router对象，并且把它在main.js文件中，导入。
export default router;