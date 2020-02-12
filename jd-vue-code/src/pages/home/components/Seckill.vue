<template>
  <div class="width">
    <div class="left float"></div>
    <div class="center float"></div>
    <div class="right float"></div>
    <div :class="sticky" ref="sticky"></div>
  </div>
</template>

<script>
// import Bscroll from 'better-scroll'
export default {
  name: "HomeSeckill",
  data() {
    return {
      sticky: "sticky"
    };
  },
  computed: {
    scroll(e) {
      console.log(e);
    }
  },
  methods:{
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if(scrollTop > 755){
        this.$refs.sticky.style.position = 'fixed';
        this.$refs.sticky.style.top = '1.6rem';
      }else{
        this.$refs.sticky.style.position = 'static'
        this.$refs.sticky.style.top = '0rem';
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="stylus" scoped>
.width {
  width: 19.8rem;
  height: 5.2rem;
  margin: auto;
  background-color: #453;

  .float {
    float: left;
    
  }

  .left {
    width: 3.8rem;
    height: 100%;
    background-color: #ccc;
  }

  .center {
    width: 12.6rem;
    height: 100%;
    background-color: lightblue;
  }

  .right {
    width: 3.4rem;
    height: 100%;
    background-color: lightgreen;
  }

  .sticky {
    width: 1.2rem;
    height: 7rem;
    background-color: #453;
    margin-left: 20.26rem;
    top 0
    transition .5s
  }
}
</style>

