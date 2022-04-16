<template>
  <!-- 这个地方判断是否数据请求回来，使用 v-if 不要使用v-show，因为使用v-show最终也会在DOM结构中渲染，而v-if则不会，要不会报一堆错误。 -->
  <div class="detailBaseInfo" v-if="Object.keys(goods).length !== 0">
    <div class="detailTitle">
      <h2>{{goods.title}}</h2>
    </div>
    <div class="detailPrice">
      <span class="newPrice">{{goods.newPrice}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <i class="iconDiscount">{{goods.discount}}</i>
    </div>
    <div class="detailColumns">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="detailService">
      <!-- services中的最后一项，不需要展示，因为它在上面进行展示，而且当 icon不存在时，不展示图片 -->
     
      <div class="serviceItem"  
           v-for="(item, index) in goods.services.slice(0, goods.services.length -1)" 
          :key="index">
       <img v-if="item.icon" :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  i {
    font-style: normal;
  }



  .detailBaseInfo {
    width: 100%;
    padding: 10px;
  }

  .detailTitle h2{
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }

  .detailPrice {
    display: flex;
    align-items: center;
    padding-top: 10px;
  }

  .detailPrice .newPrice {
    font-size: 20px;
    color: var(--color-high-text);
    margin-right: 10px;
  }

  .detailPrice .oldPrice {
    color: #b5afa6;
    font-size: 15px;
    text-decoration: line-through;    
  }

  .detailPrice .iconDiscount {
    position: relative;
    left: 5px;
    bottom: 8px;
    display: inline-block;
    padding: 5px;
    background-color: #f75762;
    border-radius: 14.5px;
    color: #fff;
  }

  .detailColumns {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    font-size: 14px;
    color: #b5afa6;
  }

  .detailService {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
  }


  /* .detailService .serviceItem {
  
  } */

  .serviceItem img {
    position: relative;
    bottom: 1px;
    width: 17px;
    height: 17px;
    vertical-align: middle;
  }

</style>