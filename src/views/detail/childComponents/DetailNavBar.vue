<template>
  <div class="detailNav">
    <nav-bar class="detailNav">
      <div slot="left" class="navLeft" @click="backToHome">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="navCenter">
        <span v-for="(item, index) in title" 
              :key="index" 
              @click="titleItemClick(index)"
              :class="{actived: currentIndex === index}">{{item}}</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
// 导入公共的组件
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name: "DetailNavBar",
  components: {
    NavBar: NavBar,
  },
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    }
  },
  methods: {
    // 监听每个标题的点击, 并且向父组件，发出一个事件，用来实现上下联动效果
    titleItemClick(index) {
      this.currentIndex = index;
      this.$emit("navBarClick", index)
      // console.log(index);
    },

    // 点击左侧按钮的点击，然后回到首页
    backToHome() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
 .detailNav {
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
  }
  .navLeft {
    text-align: center;
  }

  .navLeft img {
    vertical-align: middle;
  }

  .navCenter {
    display: flex;
  }  

  .navCenter span {
    flex: 1;
    font-size: 14px;
  }

  .actived {
    color: var(--color-tint);
  }
</style>