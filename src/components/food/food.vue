<template>
<div class="food" v-show="showFlag">

</div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    foods: {
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
      this.showFlag = true;
    }
  }
};
</script>

<style lang="scss">
.food{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 48px;
  width: 100%;
  z-index: 30;
  background: #fff;

}
</style>
