<template>
<div class="shopcart">
  <div class="content">
    <div class="content_left">
      <div class="logo_wrapper">
        <div class="logo">
          <i class="icon-shopping_cart"></i>
        </div>
        <div class="num" v-show="totalCount>0">
          {{totalCount}}
        </div>
      </div>
      <div class="price">
        ￥{{totalPrice}}
      </div>
      <div class="desc">
        另需配送费￥{{deliveryPrice}}元
      </div>
    </div>
    <div class="content_right">
      <div class="pay">
        ￥{{minPrice}}元起送
      </div>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    selectFoods: {
      type: Array,
      default () {
        return [{
            price: 10,
            count: 2
          },
          {
            price: 10,
            count: 3
          }
        ];
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.selectFoods.forEach((food) => {
        total += food.price * food.count;
      });
      return total;
    },
    totalCount() {
      let count = 0;
      this.selectFoods.forEach((food) => {
        count += food.count;
      });
      return count;
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
    .content {
        display: flex;
        background: #141d27;
        font-size: 0;
        color: rgba(255,255,255,0.4);
        .content_left {
            flex: 1;
            .logo_wrapper {
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
                .logo {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background: #2b343c;
                    text-align: center;
                    .icon-shopping_cart {
                        line-height: 44px;
                        font-size: 24px;
                        color: #80858a;
                    }
                };
                .num {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 24px;
                    height: 16px;
                    line-height: 16px;
                    text-align: center;
                    border-radius: 16px;
                    font-size: 9px;
                    font-weight: 700;
                    color: #fff;
                    background: rgb(240,20,20);
                    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
                }
            };
            .price {
                display: inline-block;
                vertical-align: top;
                margin-top: 12px;
                padding-right: 12px;
                line-height: 24px;
                box-sizing: border-box;
                border-right: 1px solid rgba(255, 255, 255, .1);
                font-size: 16px;
                font-weight: 700;

            };
            .desc {
                display: inline-block;
                vertical-align: top;
                margin-left: 12px;
                line-height: 48px;

                font-size: 10px;

            }
        };
        .content_right {
            flex: 0 0 105px;
            width: 105px;
            .pay {
                height: 48px;
                line-height: 48px;
                text-align: center;
                font-size: 12px;
                font-weight: 700;
                background: #2b333b;
            }
        };

    }
}
</style>
