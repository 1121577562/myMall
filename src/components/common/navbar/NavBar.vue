<template>
  <div class="navBar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
  .navBar {
    display: flex;
    align-items: center;
    height: 44px;
  }
  .navBar div {
    text-align: center;
    line-height: 44px;
  }
  .navBar .left,  .navBar .right {
    width: 60px;
  } 
  .navBar .center {
    flex: 1;
  } 
</style>