<template>
  <div id="home">
    <home-shortcut :list="shortcutList"></home-shortcut>
    <home-banner></home-banner>
    <home-banner></home-banner>
  </div>
</template>

<script>
import HomeShortcut from "./components/Shortcut";
import HomeHeader from './components/Header';
import HomeBanner from './components/Banner';
import axios from "axios";
export default {
  name: "Home",
  components: {
    HomeShortcut,
    HomeHeader,
    HomeBanner
  },
  data() {
    return {
      shortcutList: []
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
        this.shortcutList = data.cities
        console.log(this.shortcutList)
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