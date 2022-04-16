<template>
  <div class="detail">
    <detail-nav-bar @navBarClick="navBarClick"/>
    <detail-swiper :topImages="topImages" />
    <detail-base-info :goods="goods"/>
  </div>
</template>

<script>
// 导入公共的组件


// 导入本页面的子组件
import DetailNavBar from './childComponents/DetailNavBar.vue'
import DetailSwiper from './childComponents/DetailSwiper.vue'
import DetailBaseInfo from './childComponents/DetailBaseInfo.vue'

// 导入api接口、方法等
import {getDetail, Goods} from 'network/detail.js'

export default {
  name: "Detail",
  components: {
    DetailNavBar: DetailNavBar,
    DetailSwiper: DetailSwiper,
    DetailBaseInfo: DetailBaseInfo
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {}
    }
  },
  created() {
    // 1.保存iid的值，一会数据请求会使用到
    this.iid = this.$route.query.iid;

    // 2.根据 iid的值，请求详情页的数据
    getDetail(this.iid).then(res => {
      let data = res.result;
      // 2.1 保存轮播图的数据
      this.topImages = data.itemInfo.topImages;

      // 2.2 对DetailBaseInfo 中的数据进行提取展示
      this.goods = new Goods(data.itemInfo, data.columns,data.shopInfo.services);
     
      console.log(res);
    })
  },
  methods: {
    // 监听点击的是哪个标题
    navBarClick(index) {
      // console.log(index);
    }
  }
}
</script>

<style scoped>
 
</style>