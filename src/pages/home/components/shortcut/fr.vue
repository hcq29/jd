<template>
  <ul class="fr">
    <li class="login">
      <a href="#" class="default">你好，请登录</a>&nbsp;&nbsp;
      <a href="#" style="color: #E1251B">免费注册</a>
    </li>
    <li class="spacer"></li>
    <li>
      <a href="#" class="default">我的订单</a>
    </li>
    <li class="spacer"></li>
    <li class="hover_white" @mouseenter="mydjenter" @mouseleave="mydjleave">
      <a href="#">我的京东</a>
      <i class="iconfont icon-down"></i>
      <div v-show="myjd_view" class="myjd">
        <div v-for="myjd1 in list.myjd1" :key="myjd1.id" class="myjd_itmes">{{myjd1.name}}</div>
        <div class="myjd_split"></div>
        <div v-for="myjd2 in list.myjd2" :key="myjd2.id" class="myjd_itmes">{{myjd2.name}}</div>
      </div>
    </li>
    <li class="spacer"></li>
    <li>
      <a href="#" class="default">京东会员</a>
    </li>
    <li class="spacer"></li>
    <li class="hover_white" @mouseenter="purchase_enter" @mouseleave="purchase_leave">
      <a href="#" style="color: #E1251B">企业采购</a>
      <i class="iconfont icon-down"></i>
      <div v-show="purchase" class="purchase">
        <div v-for="purchase in list.purchase" :key="purchase.id">{{purchase.name}}</div>
      </div>
    </li>
    <li class="spacer"></li>
    <li class="hover_white">
      <a href="#">客户服务</a>
      <i class="iconfont icon-down"></i>
    </li>
    <li class="spacer"></li>
    <li class="hover_white">
      <a href="#">网站导航</a>
      <i class="iconfont icon-down"></i>
    </li>
    <li class="spacer"></li>
    <li>
      <a href="#" class="default">手机京东</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Fr",
  props: {
    list: Array | Object
  },
  data() {
    return {
      myjd_view: false,
      purchase: false,
      current_city: "广东"
    };
  },
  methods: {
    mydjenter() {
      this.myjd_view = true;
    },
    mydjleave() {
      this.myjd_view = false;
    },
    purchase_enter(){
      this.purchase = true;
    },
    purchase_leave(){
      this.purchase = false;
    }
  },
  mounted() {}
};
</script>

<style scoped lang='stylus'>
@import '~styles/varibles.styl';

.fr {
  float: right;
  padding-right: .32rem;
  border-bottom: .02rem solid $borderColor;

  li {
    display: inline-block;
    padding: 0 7px;

    .icon-down {
      font-size: .2rem;
      font-weight: 800;
    }

    .myjd {
      width: 4.8rem;
      z-index: 2;
      padding: .25rem;

      top: .62rem;
      text-align: left;

      .myjd_itmes {
        width: 1.5rem;
        padding: 0 .8rem 0 0;
        display: inline-block;
      }

      .myjd_itmes:hover {
        color: $bgColor;
        cursor: pointer;
      }

      .myjd_split {
        width: 5.26rem;
        border-bottom: .02rem solid #eee;
        margin: .2rem -.24rem;
      }
    }

    .purchase{
      width: 2.5rem;
      z-index: 2;
      padding: .25rem;
      top: .62rem;
      text-align: left;
      div{
        display inline-block
        margin-right .27rem;
      }
    }
  }

  .default:hover {
    color: $bgColor;
    cursor: pointer;
  }

  .hover_white {
    padding: 0;
    width: 1.5rem;
    text-align: center;
  }

  .hover_white:hover {
    background-color: $white;
  }
}
</style>