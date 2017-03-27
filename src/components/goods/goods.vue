<template>
  <div class="goods">
    <div class="menu-wrapper">

    </div>
    <div class="food-wrapper">

    </div>
  </div>

</template>

<script type="text/ecmascript-6">
// const ERR_OK = 0;
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      goods: []
    };
  },
  created() {
    this.$http.get('./api/goods').then((response) => {
   response = response.body;
   if (response.errno === 0) {
this.goods = response.data;
console.log(this.goods);
   }
 });
  }
};
</script>

<style lang="scss">
.goods{
  display: flex;
  position: absolute;
  top: 174px;
  bottom: 46px;
  width: 100%;
  overflow: hidden;
  .menu-wrapper{
    flex: 0 0 80px;
    width: 80px;
    background-color: #f3f5f7;
  };
  .food-wrapper{
    flex: 1;
  }

}
</style>
