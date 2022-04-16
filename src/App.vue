<template>
  <div id="app">
    <main-tab-bar />
    <!-- Detail页面不做缓存，因为每个详情页面的数据是不相同的 -->
    <keep-alive exclude="Detail">
       <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar.vue'


export default {
  name: 'App',
  components: {
    MainTabBar:MainTabBar
  }
}
</script>

<style scoped>
/*引入base.css 样式, 用来初始化样式 */
@import url('~assets/css/base.css');



</style>
