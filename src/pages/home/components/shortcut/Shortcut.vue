<template>
  <div id="shortcut">
    <div class="content">
      <!-- 城市选择 -->
      <shortcut-fl :list="list"></shortcut-fl>
      <shortcut-fr :list="list"></shortcut-fr>
    </div>
  </div>
</template>

<script>
import ShortcutFl from "./fl";
import ShortcutFr from "./fr";
export default {
  name: "HomeShortcut",
  props: {
    list: Array
  },
  components: {
    ShortcutFl,
    ShortcutFr
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

#shortcut >>> .other_items {
  &:hover {
    color: $bgColor;
  }
}

#shortcut >>>  li.spacer {
  overflow: hidden;
  margin: 0.22rem 0.08rem 0;
  width: 0.02rem;
  height: 0.2rem;
  background-color: #ccc;
  padding: 0;
}

#shortcut {
  width: 100%;
  height: $height;
  line-height: $height;
  border-bottom: 0.03rem solid #ddd;
  background: $borderColor;

  .content {
    width: 19.8rem;
    margin: auto;
    height: 100%;
    background: $borderColor;
  }
}
</style>