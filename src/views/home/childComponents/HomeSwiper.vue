<template>
  <div class="homeSwiper"> 
    <swiper>
      <swiper-item v-for="(item, index) in swiperImg" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="homeImgLoad">
        </a>
      </swiper-item>  
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index.js' 


export default {
  name: "HomeSwiper",
  components: {
    Swiper: Swiper,
    SwiperItem: SwiperItem
  },
  props: {
    swiperImg: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  methods: {
    homeImgLoad() {
      // 防止频繁的发出homeSwiperLoad 事件
      if(!this.isLoad) {
        this.$emit("homeSwiperLoad");
        this.isLoad = true;
      }
    }
  }
}
</script>

<style scoped>

</style>