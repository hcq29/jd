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
    <li
      class="hover_white"
      @mouseenter="myjd_view = !myjd_view"
      @mouseleave="myjd_view = !myjd_view"
    >
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
    <li class="hover_white" @mouseenter="purchase = !purchase" @mouseleave="purchase = !purchase">
      <a href="#" style="color: #E1251B">企业采购</a>
      <i class="iconfont icon-down"></i>
      <div v-show="purchase" class="purchase">
        <div
          class="purchase_item"
          v-for="purchase in list.purchase"
          :key="purchase.id"
        >{{purchase.name}}</div>
      </div>
    </li>
    <li class="spacer"></li>
    <li class="hover_white" @mouseenter="cService = !cService" @mouseleave="cService = !cService">
      <a href="#">客户服务</a>
      <i class="iconfont icon-down"></i>
      <div v-show="cService" class="cService">
        <div v-for="cService in list.cService" class="cService_item" :key="cService.title">
          <div class="cService_title">{{cService.title}}</div>
          <div
            v-for="customer in cService.detail"
            :key="customer.id"
            class="customer"
          >{{customer.name}}</div>
        </div>
      </div>
    </li>
    <li class="spacer"></li>
    <li
      class="hover_white"
      @mouseenter="navigation = !navigation"
      @mouseleave="navigation = !navigation"
    >
      <a href="#">网站导航</a>
      <i class="iconfont icon-down"></i>
      <div v-show="navigation" class="navigation">
        <dl v-for="navigation in list.navigation" :key="navigation.title">
          <dt class="navigation_title">{{navigation.title}}</dt>
          <dd
            v-for="navigation_item in navigation.detail"
            :key="navigation_item.id"
            class="navigation_item"
          >{{navigation_item.name}}</dd>
        </dl>
      </div>
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
      cService: false,
      navigation: false,
      current_city: "广东"
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped lang='stylus'>
@import '~styles/varibles.styl';

.fr {
  float: right;
  padding-right: 0.32rem;
  border-bottom: 0.02rem solid $borderColor;

  li {
    display: inline-block;
    padding: 0 7px;

    .icon-down {
      font-size: 0.2rem;
      font-weight: 800;
    }

    .myjd {
      width: 4.8rem;
      z-index: 3;
      padding: 0.25rem;
      top: 0.62rem;
      text-align: left;

      .myjd_itmes {
        width: 1.5rem;
        padding: 0 0.8rem 0 0;
        display: inline-block;
      }

      .myjd_itmes:hover {
        color: $bgColor;
        cursor: pointer;
      }

      .myjd_split {
        width: 5.26rem;
        border-bottom: 0.02rem solid #eee;
        margin: 0.2rem -0.24rem;
      }
    }

    .purchase {
      width: 2.5rem;
      z-index: 3;
      padding: 0.25rem;
      top: 0.62rem;
      text-align: left;

      div {
        display: inline-block;
        margin-right: 0.27rem;
      }
    }

    .cService {
      width: 3rem;
      z-index: 3;
      padding: 0.25rem;
      top: 0.62rem;
      text-align: left;
      margin-left: -2.02rem;
      .cService_item{
        border-bottom: 1px dotted #eee;
        padding-bottom: 6px;
        .cService_title {
          font-weight: 800;
        }

        .customer {
          display: inline-block;
          margin-right: 0.4rem;
        }
      }
      
    }
    .navigation {
      z-index: 3;
      top: 0.62rem;
      text-align: left;
      margin-left: -16.45rem;
      padding-bottom: .3rem;
      width: 19.5rem;
      dl{
        width: 4rem;
        float: left;
        border-left: .02rem solid #eee;
        margin-top: .3rem;
        padding: 0 0rem 0 0.4rem;
        dt{
          font-weight: 800;
        }
        dd{
          display: inline-block;
          width: 1.8rem;
        }
      }
      
      :nth-child(1){
        width: 5.4rem;
        border: none;
      }
    }
  }

  .default, .purchase_item, .customer, dd {
    &:hover {
      color: $bgColor;
      cursor: pointer;
    }
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