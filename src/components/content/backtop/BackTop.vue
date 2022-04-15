<template>
  <div class="backTop" v-show="isShow">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop",
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .backTop {
    position: fixed;   
    right: 10px;
    bottom: 50px;
    width: 50px;
    height: 50px; 
  }

  .backTop img {
    width: 100%;
  }
</style>