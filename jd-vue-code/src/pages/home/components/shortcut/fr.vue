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
        <div v-for="myjd1 in list.myjd1" :key="myjd1.id" class="myjd_itmes">
          <a href="#" class="default">{{myjd1.name}}</a>
        </div>
        <div class="myjd_split"></div>
        <div v-for="myjd2 in list.myjd2" :key="myjd2.id" class="myjd_itmes">
          <a href="#" class="default">{{myjd2.name}}</a>
        </div>
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
        <div v-for="purchase in list.purchase" :key="purchase.id">
          <a href="#" class="default">{{purchase.name}}</a>
        </div>
      </div>
    </li>
    <li class="spacer"></li>
    <li class="hover_white" @mouseenter="cService = !cService" @mouseleave="cService = !cService">
      <a href="#">客户服务</a>
      <i class="iconfont icon-down"></i>
      <div v-show="cService" class="cService">
        <div v-for="cService in list.cService" class="cService_item" :key="cService.title">
          <div class="cService_title">{{cService.title}}</div>
          <div v-for="customer in cService.detail" :key="customer.id" class="customer">
            <a href="#" class="default">{{customer.name}}</a>
          </div>
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
          <dd v-for="navigation_item in navigation.detail" :key="navigation_item.id">
            <a href="#" class="default">{{navigation_item.name}}</a>
          </dd>
        </dl>
      </div>
    </li>
    <li class="spacer"></li>
    <li @mouseenter="jdPhone = !jdPhone" @mouseleave="jdPhone = !jdPhone">
      <a href="#" class="default">手机京东</a>
      <div v-show="jdPhone" id="J_mobile_pop" class="mobile_pop">
        <div class="mobile_pop_item">
          <div class="mobile_pop_qrcode">
            <img src="../../../../assets/images/ew1.jpg" />
          </div>
          <div class="mobile_pop_info">
            <h5 class="mobile_pop_tit">
              <a href="#">手机京东</a>
            </h5>
            <p class="mobile_pop_value">新人专享大礼包</p>
            <div class="mobile_pop_device">
              <a class="mobile_pop_device_ios" href="#">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-iphone" />
                </svg>
              </a>
              <a class="mobile_pop_device_and" href="#">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-android" />
                </svg>
              </a>
              <a class="mobile_pop_device_pad" href="#">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-phone" />
                </svg>
              </a>
            </div>
            <div style="font-size: 8px;">android iphone phone</div>
          </div>
        </div>
        <div class="mobile_pop_item">
          <div class="mobile_pop_qrcode">
            <img src="../../../../assets/images/ew2.jpg" />
          </div>
          <div class="mobile_pop_info">
            <h5 class="mobile_pop_tit">关注京东微信</h5>
            <p class="mobile_pop_value">微信扫一扫关注京东服务号订阅更多促销优惠福利</p>
          </div>
        </div>
        <div class="mobile_pop_item">
          <div class="mobile_pop_qrcode">
            <img src="../../../../assets/images/ew3.jpg" />
          </div>
          <div class="mobile_pop_info">
            <h5 class="mobile_pop_tit">
              <a href="#">京东金融客户端</a>
            </h5>
            <p class="mobile_pop_value">新人专享大礼包</p>
            <div class="mobile_pop_device">
              <a class="mobile_pop_device_ios" href="#">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-iphone" />
                </svg>
              </a>
              <a class="mobile_pop_device_and" href="#">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-android" />
                </svg>
              </a>
            </div>
            <div style="font-size: 8px;">&nbsp; &nbsp;android &nbsp; &nbsp; iphone</div>
          </div>
        </div>
      </div>
      <div class="vrcode">
        <img src="../../../../assets/images/ew1.jpg" />
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ShortcutFr",
  props: {
    list: Array | Object
  },
  data() {
    return {
      myjd_view: false,
      purchase: false,
      cService: false,
      navigation: false,
      jdPhone: false,
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
      text-align: left;
      margin-left: -2.02rem;

      .cService_item {
        border-bottom: 1px dotted #eee;
        padding-bottom: 6px;

        .cService_title {
          font-weight: 800;
          color: #777;
        }

        .customer {
          display: inline-block;
          margin-right: 0.4rem;
        }
      }
    }

    .navigation {
      z-index: 3;
      text-align: left;
      margin-left: -16.45rem;
      padding-bottom: 0.3rem;
      width: 19.5rem;
      color: #777;

      dl {
        width: 4rem;
        float: left;
        border-left: 0.02rem solid #eee;
        margin-top: 0.3rem;
        padding: 0 0rem 0 0.4rem;

        dt {
          font-weight: 800;
        }

        dd {
          display: inline-block;
          width: 1.8rem;
        }
      }

      :nth-child(1) {
        width: 5.4rem;
        border: none;
      }
    }

    .mobile_pop {
      z-index: 3;
      margin-left: -2rem;
      width: 3.8rem;

      .mobile_pop_item {
        padding: 15px 0;
        border-bottom: 1px solid #e7e7e7;

        .mobile_pop_qrcode {
          position: absolute;
          left: 5px;
          width: 1.48rem;
          height: 1.48rem;
          padding: 0.02rem;
          border: 1px solid #ccc;
          background-color: #f7f7f7;

          img {
            width: 1.48rem;
            height: 1.48rem;
          }
        }

        .mobile_pop_info {
          margin: 0 6px 0 90px;
          min-height: 70px;
          line-height: 0.38rem;

          .mobile_pop_device {
            display: flex;
            justify-content: space-around;
            width: 77px;
          }

          .mobile_pop_tit {
            font-weight: 800;
            color: #777;
          }

          .mobile_pop_value {
            color: $bgColor;
          }
        }

        .vrcode {
          position: absolute;
          z-index: 3;
          width: 1.3rem;
          height: 1.3rem;
          padding: 0.16rem;

          img {
            width: 1.3rem;
            height: 1.3rem;
          }
        }
      }
    }

    .mobile_pop:before {
      content: '';
      position: absolute;
      display: block;
      top: -9px;
      left: 60%;
      margin-left: -5px;
      width: 0;
      height: 0;
      line-height: 0;
      font-size: 0;
      border: 5px solid transparent;
      border-bottom-color: #fff;
    }

    .vrcode {
      position: absolute;
      padding: 0.15rem;
      z-index: 2;
      margin-left: -0.24rem;
      box-shadow: 0 0.04rem 0.16rem rgba(0, 0, 0, 0.1);

      img {
        width: 1.2rem;
        height: 1.2rem;
      }
    }

    .vrcode:before {
      content: '';
      position: absolute;
      z-index: 2;
      border: 0.1rem solid transparent;
      left: 0.44rem;
      top: -0.22rem;
      border-bottom-color: #fff;
    }
  }

  .default {
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