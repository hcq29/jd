<template>
  <div v-show="show" class="shortcutad">
    <div class="width">
      <img
        src="https://img10.360buyimg.com/babel/jfs/t1/93397/8/11673/135678/5e38ea64E000df9e1/d0595b5f09d9de76.jpg!cc_990x80!q70.jpg.webp"
      />
      <span class="close" @click="close">X</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShortcutAd",
  props: {
    list: Array | Object
  },
  data() {
    return {
      show: true
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