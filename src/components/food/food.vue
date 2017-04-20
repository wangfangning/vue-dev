<template>
<transition name="move">
  <div class="food" v-show="showFlag">
    <div class="food_content">
      <div class="image_header">
        <img :src="food.image" alt="">
        <div class="back" @click="show">
          <i class="icon-arrow_lift"></i>
        </div>

      </div>
      <div class="content">
      <h1 class="title">{{food.name}}</h1>
      <div class="detail">
<span class="cell_count">{{food.cellCount}}</span>
<span class="rating">好评率{{food.rating}}%</span>
      </div>
      <div class="price">
        <span class="now">￥{{food.price}}</span>
        <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
      </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    food: {
      type: Object
    }
  },
  data() {
    return {
      showFlag: false
    };
  },
  methods: {
    show() {
      this.showFlag = !this.showFlag;
    }
  }
};
</script>

<style lang="scss">
.food {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 48px;
    width: 100%;
    z-index: 30;
    background: #fff;
    transform: translate3d(0,0,0);
    transition: all 0.4s;
    &.move-enter,
    &.move-leave-active {
        transform: translate3d(100%,0,0);
    }
.image_header{
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  };
  .back{
    position: absolute;
    top: 10px;
    left: 0;
    .icon-arrow_lift{
      display: block;
      padding: 8px;
      font-size: 20px;
      color: #fff;
    }
  }
}
}
</style>
