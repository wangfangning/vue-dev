<template>
<div class="star" :class="starType">
<span v-for="itemClass in itemClasses" :class="itemClass" class="star_item"></span>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    size:{
      type: Number
    },
    score: {
      type: Number
    }

  },
  computed: {
    starType() {
      console.log(size);
      return 'star-' + this.size
    }
  }
};

</script>

<style lang="scss">
@import "./commom/sass/mixin.scss"
.star{
  font-size: 0;
  .star_item{
    display: inline-block;
    background-repeat: no-repeat;
  };
  &.star-48{
    .star_item{
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;
      &.on{
        @include bg-image('star48_on');
      }
    }
  };
  &.star-36{};
  &.star-24{};

}
</style>
