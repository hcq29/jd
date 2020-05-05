<template>
  <div>
    <shortcut-ad></shortcut-ad>
    <div id="shortcut">
      <div class="content">
        <!-- 城市选择 -->
        <shortcut-fl :list="list"></shortcut-fl>
        <!-- items -->
        <shortcut-fr :list="list"></shortcut-fr>
      </div>
    </div>
  </div>
</template>

<script>
import ShortcutFl from "./fl";
import ShortcutFr from "./fr";
import ShortcutAd from "./ad";
export default {
  name: "HomeShortcut",
  props: {
    list: Array | Object
  },
  components: {
    ShortcutFl,
    ShortcutFr,
    ShortcutAd
  },
  data() {
    return {
      show: false,
      current_city: "广东"
    };
  },
  methods: {
    enter() {
      this.show = true;
    },
    leave() {
      this.show = false;
    }
  },
  mounted() {}
};
</script>

<style scoped lang='stylus'>
@import '~styles/varibles.styl';

#shortcut >>> .other_items:hover{
  color: $bgColor;
}

#shortcut >>>  li.spacer {
  overflow: hidden;
  width: .02rem;
  height: .2rem;
  background-color: #ccc;
  padding: 0;
}

#shortcut >>> .areamini, >>>.myjd, >>> .purchase, >>> .cService, >>> .navigation, >>> .mobile_pop{
  position: absolute;
  border-left: .02rem solid #ccc;
  border-right: .02rem solid #ccc;
  background-color: $white;
  -webkit-box-shadow: .02rem .04rem .02rem rgba(0, 0, 0, .1);
  box-shadow: .02rem .04rem .02rem rgba(0, 0, 0, .1);
}

#shortcut {
  width: 100%;
  height: $height;
  line-height: $height;
  border-bottom: .03rem solid #ddd;
  background: $borderColor;

  .content {
    width: $maxWidth;
    margin: auto;
    height: 100%;
    background: $borderColor;
  }
}
</style>