<template>
  <div id="shortcut">
    <div class="content">
      <!-- 城市选择 -->
      <ul class="fl">
        <li class="shortcut_btn">
          <router-link tag="div" href="javascript:void(0);" class="location" :to="'/'">
            <i class="iconfont icon-location"></i>
            <span>广东</span>
          </router-link>
          <div class="areamini">
            <div class="items">
              <div v-for="item in list" :key="item.id" class="item">
                <router-link
                  tag="a"
                  :data-id="item.id"
                  href="javascript:void(0);"
                  class="to_city"
                  :to="'/'"
                >{{item.name}}</router-link>
              </div>
            </div>
            <div class="areamini_inter">
              <div class="areamini_inter_split"></div>
              <p class="desc">地区专享版本</p>
              <router-link
                tag="a"
                data-id="ga"
                href="javascript:void(0);"
                class="other_items"
                :to="'/'"
              >中國港澳</router-link>
            </div>
            <div class="areamini_inter">
              <div class="areamini_inter_split"></div>
              <p class="areamini_inter_desc">Available Sites</p>
              <div class="other_item" v-for="other in others" :key="other.id">
                <router-link
                  tag="a"
                  :data-id="other.id"
                  href="javascript:void(0);"
                  class="other_items"
                  :to="'/'"
                >
                  <svg class="icon" aria-hidden="true">
                    <use :xlink:href="'#icon-' + other.icon" />
                  </svg>
                  {{other.name}}
                </router-link>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <!-- 信息 -->
      <ul class="fr">
        <li class="login">
          <a href="#">你好，请登录 </a>&nbsp;&nbsp;
          <a href="#" style="color: #E1251B"> 免费注册</a>
        </li>
        <li class="spacer"></li>
        <li class>我的订单</li>
        <li class="spacer"></li>
        <li>
          <a href="#">我的京东</a>
          <i class="iconfont icon-down"></i>
        </li>
        <li class="spacer"></li>
        <li><a href="#">京东会员</a></li>
        <li class="spacer"></li>
        <li>
          <a href="#" style="color: #E1251B">企业采购</a>
          <i class="iconfont icon-down"></i>
        </li>
        <li class="spacer"></li>
        <li>
          <a href="#">客户服务</a>
          <i class="iconfont icon-down"></i>
        </li>
        <li class="spacer"></li>
        <li>
          <a href="#">网站导航</a>
          <i class="iconfont icon-down"></i>
        </li>
        <li class="spacer"></li>
        <li><a href="#">手机京东</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    list: Array
  },
  data() {
    return {
      others: [
        { id: "GS", name: "Global Site", icon: "global" },
        { id: "CP", name: "Сайт России", icon: "eluosi" },
        { id: "SI", name: "Situs Indonesia", icon: "yinni" },
        { id: "SdE", name: "Sitio de España", icon: "Spain" },
        { id: "TG", name: "เว็บไซต์ประเทศไทย", icon: "taiguo" }
      ]
    };
  },
  methods: {},
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
  margin: 0.22rem 0.27rem 0;
  width: 0.02rem;
  height: 0.2rem;
  background-color: #ccc;
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

    .fl {
      float: left;

      .shortcut_btn {
        position: relative;
        z-index: 21;
        border: 0.02rem solid $borderColor;

        .location {
          width: 1.1rem;
          display: flex;
          justify-content: center;
          cursor: pointer;
        }

        .iconfont {
          color: $bgColor;
        }

        .areamini {
          width: 6.44rem;
          height: 9rem;
          position: absolute;
          margin: auto;
          border-left: 0.02rem solid #ccc;
          border-right: 0.02rem solid #ccc;
          background-color: #fff;
          -webkit-box-shadow: 0.02rem 0.04rem 0.02rem rgba(0, 0, 0, 0.1);
          box-shadow: 0.02rem 0.04rem 0.02rem rgba(0, 0, 0, 0.1);

          .items {
            width: 6.1rem;
            height: 4.7rem;
            margin: 0.17rem;

            .item {
              float: left;
              width: 1.2rem;
              padding: 0.04rem 0;
              text-align: center;

              .to_city {
                color: #999;
                padding: 0.13rem 0.2rem;
              }

              .to_city:hover {
                color: $bgColor;
                background-color: #f4f4f4;
              }
            }
          }

          .areamini_inter {
            margin: 10px 0px 10px 10px;

            .areamini_inter_split {
              width: 262px;
              height: 0px;
              border-bottom: 1px dotted rgb(238, 238, 238);
            }

            .other_item {
              margin: 2px 0px 0 10px;
              float: left;
              width: 134px;
            }
          }
        }

        .location:hover {
          color: $bgColor;
        }
      }

      .shortcut_btn:hover {
        z-index: 23;
        background: #fff;
      }
    }

    .fr {
      float: right;

      li {
        float: left;

        .icon-down {
          font-size: 0.2rem;
          font-weight: 800
        }
      }
    }
  }
}
</style>