<template>
  <div id="home">
    <nav-bar class="homeNav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control class="tabControl" ref="tabControl2" :titles="['流行', '新款', '精选']" @tabClick="tabClick"
    v-show="isShowTabControl"/> 
    <!-- 使用scroll组件，并且把要滚动的内容放到他里面 -->
    <scroll  class="content" 
             ref="scroll" 
            :probeType="3" 
            :pullUpLoad="true" 
            @pullingUp="pullingUp"
            @scroll="scroll">
      <home-swiper :swiperImg="banners" @homeSwiperLoad="homeSwiperLoad"/>
      <recommend :recommends="recommend"/> 
      <feature/>
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl1"/> 

      <goods-list :goods="goods[currentType].list" class="goods"/>
    </scroll>
    
    <back-top :isShow="isShow" @click.native="backTopClick"/>
    
  </div>
</template>

<script>
//=> 导入公共组件
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabcontrol/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from 'components/content/backtop/BackTop.vue'

//=> 导入子组件
import HomeSwiper from './childComponents/HomeSwiper.vue'
import Recommend from './childComponents/Recommend.vue'
import Feature from './childComponents/Feature.vue'

//=> 导入api接口，和一些方法
import {getHomeMoredata, getHomeGoods} from 'network/home.js'
import {debounce} from 'common/utils.js'
import {scrollY} from 'common/const.js'



export default {
  name: "Home",
  components: {
    NavBar: NavBar,
    HomeSwiper: HomeSwiper,
    TabControl: TabControl,
    GoodsList: GoodsList,
    Scroll: Scroll,
    BackTop: BackTop,
    Recommend: Recommend,
    Feature: Feature
  },
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      currentType: 'pop',
      refresh: null,
      isShow: false,
      tabControlOffsetTop: 0,
      isShowTabControl: false,
      scrollHomeY: 0 //=>保存离开home，页面时 y的值
    }
  },
  created() {
    // 1. 请求首页更多的数据
    this.getHomeMoredataInMethods();

    // 2.请求商品数据 (流行、新款、精选)
    Object.keys(this.goods).forEach(item=> {
      this.getHomeGoodsInMethods(item);
    });
  },

  mounted() {
    // 1.监听图片是否加载完成，然后解决better-scroll计算高度的问题
    // 使用debounce 方法，对应 refresh方法，进行防抖，防止触发的太频繁了
    this.refresh = debounce(this.$refs.scroll.refresh, 3000);
    this.$bus.$on("imgLoad", ()=> {
      this.refresh();
      // console.log("图片加载完成");
    });
  },

  activated() {
    console.log("activated");
    // 当前页面再次活跃时，重新设置 scrollY的值
    this.$refs.scroll.scrollTo(0, this.scrollHomeY, 0);
    this.$refs.scroll.refresh();
  },

  deactivated() {
    console.log("deactivated");
    // 保存离开时, scrollY的值
    this.scrollHomeY = this.$refs.scroll.getScrollY();
  },

  methods: {
    //==============网络请求方法，再次封装==================
    getHomeMoredataInMethods() {
      getHomeMoredata().then(res => {
        let data = res.data;
        // 1.获取banner 和 recommend数据
        this.banners = data.banner.list;
        this.recommend = data.recommend.list;
        // console.log(this.banners,  this.recommend);
      })
    },

    getHomeGoodsInMethods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        let data = res.data;
        // 保存流行、新款、精选的数据 和 把对应的页码加 1。
        this.goods[type].list.push(...data.list);
        this.goods[type].page++;

        // 数据加载完成后，告诉better-scroll,然后再次加载数据
        this.$refs.scroll.finishPullUp();
      });
    },


    //==============事件监听 和 其他方法的监听==================
    // 监听tabControl的点击
    tabClick(index) {
      switch(index) {
        case 0: 
          this.currentType = 'pop';
        break;
         case 1: 
          this.currentType = 'new';
        break;  
         case 2: 
          this.currentType = 'sell';
        break;    
      }
      // 解决两个 tabControl，显示不同步的问题
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },

    // 实现上拉加载更多数据
    pullingUp() {
      this.getHomeGoodsInMethods(this.currentType);
      console.log("拉到底部了！！");
    },

    // 监听页面的滚动，拿到y的值，从而决定是否显示回到顶部按钮
    scroll(position) {
      // 1. 当 position.y 大于 1000 时，显示回到顶部按钮 
      if (Math.abs(position.y) > scrollY) {
          // 如果大于 scrollY(1000)的值, 则把 isShow的值改为 true，显示回到顶部按钮
          this.isShow = true;
      }

      // 2.当position.y 的值，大于或者等于tabControlOffsetTop 的值，显示tabControl1 
      if (Math.abs(position.y) >= this.tabControlOffsetTop) {
        this.isShowTabControl = true;
      } else {
        this.isShowTabControl = false;
      } 
    },

    // 监听回到顶部按钮的点击，然后调用 this.$refs.scroll.scrollTo 方法，回到顶部
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 1500);
    },

    // 监听轮播图，图片是否加载完成，从而获取tabControl的 offsetTop 值
    homeSwiperLoad() {
      this.tabControlOffsetTop = this.$refs.tabControl1.$el.offsetTop;
      // console.log("轮播图数据加载完成", this.$refs.tabControl1.$el.offsetTop);
    }

  },
}
</script>

<style scoped>
  #home {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  /* 给homeNav组件设置背景颜色 */
  .homeNav {
    position: relative;
    z-index: 9;
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }

  .goods {
    background-color: #fff;
  }

  /* 计算content的高度 */
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }


  .tabControl {
    position: relative;
    z-index: 9;
  }

</style>