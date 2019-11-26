<template lang="html">
    <transition name="fade">
        <div class="dispatching" v-show="isShow">
            <h1 class="title"><i class="icon-arrow_lift" @click='hide($event)'></i>确认订单</h1>
            <div class="content-wrapper">
                <div class="address-wrapper">
                    <div class="address" v-if="address">
                        vvv
                    </div>
                    <div class="no-address" v-else>
                        请添加一个收货地址
                    </div>
                    <i class="icon-keyboard_arrow_right"></i>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            isShow: false,
            address: false
        };
    },
    methods: {
        show() {
            this.isShow = true;
        },
        hide(el) {
            console.log(el);
            this.isShow = false;
        }
    }
};
</script>

<style lang="scss">
.dispatching{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  transition: all 0.3s;
  transform: translate3d(0,0,0);
  z-index: 51;
  opacity: 1;
  &.fade-enter,&.fade-leave-active{
    transform: translate3d(20%,0,0);
    opacity: 0;
  };
  .title{
    position: relative;
    padding: 12px;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    color: #fff;
    background: #03a9f4;
    .icon-arrow_lift{
      position: absolute;
      top:0px;
      left: 0px;
      display: inline-block;
      padding: 12px;
      font-size: 20px;
    }
  }
  .content-wrapper{
    padding: 0 12px;

    .address-wrapper{
display: flex;
justify-content: center;
align-items: center;
      height: 70px;
      padding-left: 16px;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNSA0MiI+PHBhdGggZmlsbD0iIzMxOTBFOCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuNTQ4IDQwLjU5MmMuMTQ3LjEzNCAxLjE1My45NTcgMi40NTIuOTY0IDEuMy4wMDYgMi4zMjItLjg1NSAyLjQ1OC0uOTc5QzI0LjE2OCAzNi4zMDMgMzQgMjYuMjggMzQgMTcuMDc5IDM0IDcuNjQ3IDI2LjM4OSAwIDE3IDBTMCA3LjY0NyAwIDE3LjA4Yy0uMDY2IDkuMjEgOS44MjUgMTkuMjQ4IDE0LjU0OCAyMy41MTJ6TTE3IDI0LjI4NmE3LjI4NiA3LjI4NiAwIDEgMCAwLTE0LjU3MiA3LjI4NiA3LjI4NiAwIDAgMCAwIDE0LjU3MnoiLz48L3N2Zz4=);
      background-position: 0 48%;
      background-repeat: no-repeat;
      background-size: 16px;
      .no-address{
        flex: 1;
        margin-left: 10px;
      };
      .icon-keyboard_arrow_right{
        padding: 4px;
        font-size: 18px;
      }
    }
  }
}

</style>
