<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    // 1.创建better-scroll实例
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad, //如果给该属性设置为 true，可以开启上拉加载更多功能
      click: true
    });

    // 2.监听better-scroll的滚动
    this.scroll.on("scroll", (position)=> {
      // 向外发出一个scroll事件，告诉外部已经发生滚动了
      this.$emit("scroll", position);
    });

    // 3.监听上拉加载更多事件，实现加载更多的数据
    this.scroll.on("pullingUp", ()=> {
      // 向外发出一个上拉加载更多事件
      this.$emit("pullingUp");
    })
    // console.log(this.scroll);
  },
  methods: {
    // 1.当上拉加载更多数据后，告诉better-scroll，数据已经加载完成，进行下一次的加载
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },

    // 2.当图片加载完成后，最后调用一些 refresh方法
    refresh() {
      // console.log("图片加载完成，触发了几次 refresh方法");
      this.scroll && this.scroll.refresh();
    },

    // 3.使用scrollTo 方法，实现回到顶部功能
    scrollTo(x, y, duration = 1500) {
      this.scroll && this.scroll.scrollTo(x, y, duration)
    },

    // 3.使用 better-scroll 实例的 y 属性，获取当前页面 y轴的坐标
    getScrollY() {
      return this.scroll && this.scroll.y;
    }
  }
}
</script>

<style scoped>

</style>