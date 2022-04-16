<template>
  <div>
    <swiper class="detailSwiper">
      <swiper-item v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>  
  </div>
</template>

<script>
// 导入公共组件
import {Swiper, SwiperItem} from 'components/common/swiper/index.js'

export default {
  name: "DetailSwiper",
  components: {
    Swiper: Swiper,
    SwiperItem: SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .detailSwiper {
    width: 100%;
    height: 300px;
  }

  .detailSwiper img {
    width: 100%;
    height: 100%;
  }
</style>