<template>
<div class="shopcart">
  <div class="content">
    <div class="content_left">
      <div class="logo_wrapper">
        <div class="logo">
          <i class="icon-shopping_cart"></i>
        </div>
      </div>
      <div class="price">
0元
      </div>
      <div class="desc">
另需配送费￥{{deliveryPrice}}元
      </div>
    </div>
    <div class="content_right">

    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss">
.shopcart {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 48px;
    z-index: 50;
    width: 100%;
    .content{
      display: flex;
      background: #141d27;
      font-size: 0;
      .content_left{
        flex: 1;
        .logo_wrapper{
          display: inline-block;
          vertical-align: top;
          position: relative;
          top: -10px;
          margin: 0 12px;
          padding: 6px;
          width: 56px;
          height: 56px;
          box-sizing: border-box;
          border-radius: 50%;
          background: #141d27;
          .logo{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: #2b343c;
            text-align: center;
            .icon-shopping_cart{
              line-height: 44px;
              font-size: 24px;
              color: #80858a;
            }
          }
        };
        .price{
          display: inline-block;
          vertical-align: top;
          margin-top: 12px;
          padding-right: 12px;
          line-height: 24px;
          box-sizing: border-box;
          border-right: 1px solid rgba(255, 255, 255, .1);
          font-size: 16px;
          font-weight: 700;
          color: rgba(255,255,255,0.4)
        };
        .desc{
          display: inline-block;
          vertical-align: top;
          margin: 12px 0 0 12px;
          line-height: 24px;
          color: rgba(255,255,255,0.4);
          font-size: 10px;

        }
      };
      .content_right{
        flex: 0 0 105px;
        width: 105px;
      };

    }
}
</style>
