<template lang="html">
  <div class="title">
    <div class="line">

    </div>
    <div class="text">{{title}}
    </div>
    <div class="line">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    }
  },
  data() {
    return {
      'title': this.text
    };
  }
};
</script>

<style lang="scss">
.detail_main{
  .title {
      display: flex;
      width: 80%;
      margin: 28px auto 24px;
      .line {
          flex: 1;
          position: relative;
          top: 6px;
          border-top: 1px solid rgba(255,255,255,0.2);
      };
      .text {
          padding: 0 12px;
          font-weight: 700;
          font-size: 14px;
      }
  };
}
</style>
