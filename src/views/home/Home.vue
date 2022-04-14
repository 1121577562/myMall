<template>
  <div class="home">
    <nav-bar class="homeNav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
//=> 导入公共组件
import NavBar from 'components/common/navbar/NavBar.vue'

//=> 导入子组件

//=> 导入api接口，和一些方法


export default {
  name: "Home",
  components: {
    NavBar: NavBar
  }
}
</script>

<style scoped>
  .homeNav {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }

</style>