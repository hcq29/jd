<template>
  <div id="home">
    <home-shortcut :list="list"></home-shortcut>
    <home-header></home-header>
    <home-banner :list="list.banner"></home-banner>
    <home-seckill :list="list.seckill"></home-seckill>
    <home-jcoreone></home-jcoreone>
    <home-jcoretwo></home-jcoretwo>
  </div>
</template>

<script>
import HomeShortcut from "./components/shortcut/Shortcut";
import HomeHeader from './components/Header';
import HomeBanner from './components/Banner';
import HomeSeckill from './components/Seckill';
import HomeJcoreone from './components/Jcoreone';
import HomeJcoretwo from './components/Jcoretwo';
import axios from "axios";
export default {
  name: "Home",
  components: {
    HomeShortcut,
    HomeHeader,
    HomeBanner,
    HomeSeckill,
    HomeJcoreone,
    HomeJcoretwo
  },
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      var instance = axios
        .create({
          headers: { "content-type": "application/x-www-form-urlencoded" }
        })
        .get("static/mock/header.json")
        .then(this.getListSucc);
    },
    getListSucc(res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.list = data
        console.log(this.list)
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
  #home
    color #999
    font-size .24rem
    width 100%
</style>