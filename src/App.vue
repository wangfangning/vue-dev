<template>
<div class="app">
  <v-header :seller="seller"></v-header>
  <div class="tab border-1px">
    <div class="tab_item">
      <router-link to="/goods">商品</router-link>
    </div>
    <div class="tab_item">
      <router-link to="/ratings">评论</router-link>
    </div>
    <div class="tab_item">
      <router-link to="/seller">商家</router-link>
    </div>
  </div>
  <router-view :seller="seller"></router-view>
</div>
</template>

<script type="text/ecmascript-6">
import {urlParam} from 'common/js/util.js';
import header from 'components/header/header';

const ERR_OK = 0;

export default {
  data() {
    return {
      seller: {
        id: (() => {
          let queryParam = urlParam();
          return queryParam.id;
        })()
      }
    };
  },
  created() {
    // 向后台发送请求商家数据
    this.$http.get('/api/seller').then((response) => {
      response = response.body;
      if (response.errno === ERR_OK) {
        // 直接this.seller = response.data,因为json对象里seller没有id属性，所以会忽略；
        // 这里es6 Object.assgin()方法把this.seller对象和请求的数据组成新的对象返回；
        this.seller = Object.assign({}, this.seller, response.data);
      }
    });
  },
  components: {
    'v-header': header
  }
};
</script>

<style lang="scss">@import "/common/sass/mixin.scss";
.app {
    .tab {
        display: flex;
        text-align: center;
        width: 100%;
        height: 40px;
        line-height: 40px;
        @include border-1px(rgba(7,17,27,0.1));
        .tab_item {
            flex: 1;
            & > a {
                display: block;
                font-size: 14px;
                color: #4d555d;
            }
            a.active {
                color: #f01414;
            }
        }
    }

}
</style>
