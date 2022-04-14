<template>
  <div class="tabbarItem" @click="tabClick">
    <div class="itemIcon" v-if="!showActive"><slot name="itemIcon"></slot></div>
    <div class="itemIconActive" v-else><slot name="itemIconActive"></slot></div>
    <div class="itemText" :style="{color: showActive ?activeColor: ''}"><slot name="itemText"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  props: {
    path: {
      type: String,
      default: '/home'
    },
    activeColor: {
      type: String,
      default : "red"
    }
  },
  methods: {
    // 监听tabbarItem的点击, 并且实现路由的跳转
    tabClick() {
      this.$router.replace(this.path)
    }
  },
  computed: {
    showActive() {
      return this.$route.path.includes(this.path);
    }
  }
}
</script>

<style scoped>
.tabbarItem {
  height: 49px;
  flex: 1;
  text-align: center;
  font-size: 14px;
}

.tabbarItem img {
  width: 26px;
  height: 26px;
  margin: 3px 0;
  vertical-align: middle;
}
/* 
.active  {
  color: red;
} */
</style>