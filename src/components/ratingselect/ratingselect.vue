<template>
<div class="ratingselect">
  <div class="rating_type">
    <span>{{desc.all}}</span>
    <span>{{desc.positive}}</span>
    <span>{{desc.negative}}</span>
  </div>
  <div class="switch">
    <span class="icon-check_circle"></span>
    <span class="text">只看有内容的评价</span>
  </div>
  <ul>
    <li v-for="item in ratings">{{item.username}}</li>
  </ul>
 </div>
</template>

<script type="text/ecmascript-6">
// const POSITIVE = 0;
// const NEGATIVE = 1;
const ALL = 2;

export default {
  props: {
    ratings: {
      type: Array,
      default () {
        return [];
      }
    },
    selectType: {
      type: Number,
      default: ALL
    },
    onlyContent: {
      type: Boolean,
      default: false
    },
    desc: {
      typr: Object,
      default () {
        return {
          all: '全部',
          positive: '满意',
          negative: '不满意'
        };
      }
    }
  }
};
</script>

<style lang="scss">
@import "../../common/sass/mixin.scss";

.ratingselect{
  .rating_type{
    padding: 18px 0;
    margin: 0 18px;
    @include border-1px(rgba(7,17,27,0.2));
  }
}
</style>
