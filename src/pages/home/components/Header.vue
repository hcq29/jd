<template>
  <div id="header">
    <div class="width">
      <div class="logo" id="logo">
        <router-link href="javascript:void(0);" to="/" class="img_logo">
          <img class="img_logo" src="../../../assets/images/logo.gif" />
        </router-link>
      </div>
      <div class="search">
        <div class="top_input">
          <div class="search_input"></div>
          <div class="my_SCart"></div>
        </div>
        <div id="hotwords" ></div>
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

#header {
  background: $white;
  border-bottom: 1px solid #ddd;

  .width {
    height: 2.8rem;
    min-width: 19.8rem;
    max-width: 19.8rem;
    background: $white;
    position: relative;
    z-index: 1;
    margin: auto;

    .logo {
      width: 190px;
      height: 120px;
      background-color: $white;
      position: absolute;

      .img_logo {
        width: 190px;
        height: 120px;
      }
    }

    .search {
      width: 16rem;
      height: 2.8rem;
      position: absolute;
      right: 0;
      .top_input{
        width: 16rem;
        height: 1.4rem;

        .search_input {
          width: 9.8rem;
          height: 0.7rem;
          position: absolute;
          top: 0.56rem;
          left: 0.75rem;
          border: 0.04rem solid #e1251b;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }
        
        .my_SCart {
          width: 2.6rem;
          height: 0.7rem;
          position: absolute;
          top: 0.56rem;
          left: 10.8rem;
          border: 0.01rem solid #eee;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          overflow: hidden;
          border: 1px solid #eee;
        }
      }
    }
  }
}
</style>