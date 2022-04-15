<template>
  <div class="recommend">
    <div class="recommendItem" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <h2>{{item.title}}</h2>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    padding: 8px 10px;
    text-align: center;
    border-bottom: 5px solid #eee;
  }

  .recommend .recommendItem {
    flex: 1;
  }

  .recommendItem img {
    width: 75px;
    margin-bottom: 10px;
    vertical-align: middle;
  }
  
  .recommendItem h2 {
    font-size: 14px;
    color: #666;
    font-weight: 400;
  }

</style>