<template>
  <div class="ListItem" @click="goodsItemClick">
    <div class="pic">
      <img :src="goodsItem.show.img" alt="" @load="imgLoad">
    </div>
    <div class="goodsDetail">
      <p>{{goodsItem.title}}</p>
      <span class="newPrice">{{goodsItem.price}}</span>
      <span class="hobbies">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    /**
     *  监听图片是否加载完成，解决better-scroll计算高度的问题
     *     这个地方使用事件总线，向外面发出一个事件
     */
    imgLoad() {
      this.$bus.$emit("imgLoad")
      // console.log("图片加载完成");
    },

    // 监听每个 goodsItem的点击，跳转到详情页面
    goodsItemClick() {
      this.$router.push({
        path: "/detail",
        query: {
          iid: this.goodsItem.iid
        }
      });
    }
  }
}
</script>

<style scoped>
  .ListItem {
    position: relative;
    width: 49%;
    padding-bottom: 40px;
    margin-bottom: 9px;
  }

  .ListItem .pic img {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 5px;
    vertical-align: middle;

  }

  .ListItem .goodsDetail {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 14px;
    text-align: center;
    line-height: 20px;
  }

  .ListItem .goodsDetail .newPrice {
    color: var(--color-high-text);
  }

  .ListItem .goodsDetail p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .hobbies::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url('~assets/img/detail/detail_bottom.png') no-repeat;
    background-size: 100%;
    background-position: 1px 3px;
    margin: 0 5px;
  }

</style>