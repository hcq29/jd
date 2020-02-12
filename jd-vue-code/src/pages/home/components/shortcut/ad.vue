<template>
  <div v-show="show" class="shortcutad">
    <div class="width">
      <img :src="adImg"/>
      <span class="close" @click="close">X</span>
    </div>
  </div>
</template>

<script>
import adImg from 'images/ad.jpg'
export default {
  name: "ShortcutAd",
  data() {
    return {
      show: true,
      adImg
    };
  },
  methods: {
      close(){
          this.show = false
      }
  }
};
</script>

<style scoped lang='stylus'>
@import '~styles/varibles.styl';

.shortcutad {
  height: 1.6rem;
  background-color: rgb(10, 10, 2);

  .width {
    height: 1.6rem;
    width: 19.8rem;
    background: $white;
    position: relative;
    z-index: 1;
    margin: auto;

    img {
      height: 1.6rem;
    }

    .close {
      position: absolute;
      right: 0.2rem;
      top: .04rem;
      font-size: 0.28rem;
      cursor: pointer;
      font-weight: 700;
      color: $white;
      background: #2d2d2d;
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      opacity: 0.3;
    }
  }
}
</style>