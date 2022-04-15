<template>
  <div class="tabControl">
    <div class="tabControlItem" 
         v-for="(item, index) in titles" 
         :key="index" 
         @click="itemClick(index)">
      <span :class="{active: currentIndex === index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    //=>监听 item的点击
    itemClick(index) {
      this.currentIndex = index;

      //=>向父组件发出一个自定义事件，告诉它当前点击的是谁
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
  .tabControl {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 14px;
    background-color: #fff;
  }

  .tabControl .tabControlItem {
    flex: 1;
  }

  .tabControl .tabControlItem span {
    padding: 8px;
  }

  .active {
    color: var(--color-tint);
    border-bottom: 2px solid var(--color-tint);
  }

</style>