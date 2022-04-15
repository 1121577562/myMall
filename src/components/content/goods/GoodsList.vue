<template>
  <div class="goodsList">
    <goods-list-item v-for="(item, index) in goods" :key="index" :goodsItem="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  name: "GoodsList",
  components: {
    GoodsListItem: GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .goodsList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 8px 5px;
  }


</style>