<template>
  <div id="header">
    <div class="width">
      <div class="logo" id="logo">
        <router-link 
          href="javascript:void(0);"
          to="/"
          class="img_logo" 
        > 
          <img class="img_logo" src="../../../assets/images/logo.gif">
        </router-link>
      </div>
      <div class="search">
        <div class="search_input"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang='stylus'>
@import '~styles/varibles.styl';

#header 
  background: $white;
  border-bottom: 1px solid #ddd;

  .width 
    height: 2.8rem;
    min-width: 19.8rem;
    max-width: 19.8rem;
    background: $white;
    position: relative;
    z-index: 1;
    margin: auto;
    .logo
      width: 190px;
      height: 120px;
      background-color: $white;
      position absolute
      .img_logo
        width: 190px;
        height: 120px;
    .search
      width: 16rem;
      height: 2.8rem;
      background-color: #546;
      position: absolute;
      right: 0;
      .search_input
        width: 8rem;
        height: 1rem;
        background-color: pink;
        position: absolute;
        top: .56rem;
        left: .8rem;
  

</style>