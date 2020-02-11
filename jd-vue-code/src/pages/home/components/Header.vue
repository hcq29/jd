<template>
  <div id="header">
    <div class="width">
      <div class="logo" id="logo">
        <router-link href="javascript:void(0);" to="/" class="img_logo">
          <img class="img_logo" src="../../../assets/images/logo.gif" />
        </router-link>
      </div>
      <div class="search" ref="search">
        <div class="search_m">

        </div>
        <div class="top_input">
          <div v-show="small_logo" class="small_logo"></div>
          <div class="search_input">
            <input type="text" placeholder="海飞丝洗发水" />
            <button class="search_btn">
              <i class="iconfont icon-search"></i>
            </button>
          </div>
          <div
            class="dropdown"
            @mouseenter="dropdown_Cart = !dropdown_Cart"
            @mouseleave="dropdown_Cart = !dropdown_Cart"
          >
            <div class="my_SCartNumber">
              <i class="iconfont icon-cart"></i>
              <a href="#" class="my_SCart">我的购物车</a>
              <i class="ci-count">0</i>
            </div>
            <div class="my_SCartshow" v-if="dropdown_Cart">
              <div>
                <i class="iconfont icon-cart nocart"></i>
              </div>
              <div>购物车中还没有商品，赶紧选购吧！</div>
            </div>
          </div>
        </div>
      </div>
      <div id="hotwords" class="hotwords">
        <ul class="hot_lu">
          <li>
            <a href="#" class="style_red">开学每满减</a>
          </li>
          <li>
            <a href="#">家装建材</a>
          </li>
          <li>
            <a href="#">元宵汤圆</a>
          </li>
          <li>
            <a href="#">每100-50</a>
          </li>
          <li>
            <a href="#">家清纸品</a>
          </li>
          <li>
            <a href="#">延时补贴</a>
          </li>
          <li>
            <a href="#">折扣家电</a>
          </li>
        </ul>
      </div>
      <div class="hotwords hotwords_bigger">
        <ul class="hot_lu">
          <li>
            <a href="#" class="style_red">秒杀</a>
          </li>
          <li>
            <a href="#" class="style_red">优惠券</a>
          </li>
          <li>
            <a href="#">PLUS会员</a>
          </li>
          <li>
            <a href="#">品牌闪购</a>
          </li>
          <li>
            <a href="#">拍卖</a>
          </li>
          <li>
            <a href="#">京东家电</a>
          </li>
          <li>
            <a href="#">京东超市</a>
          </li>
          <li>
            <a href="#">京东生鲜</a>
          </li>
          <li>
            <a href="#">京东国际</a>
          </li>
          <li>
            <a href="#">京东金融</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {
      dropdown_Cart: false,
      small_logo: false
    };
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 760) {
        this.$refs.search.className = 'search search-fix'
        this.small_logo = true;
      } else {
        this.small_logo = false;
        this.$refs.search.className = 'search'
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped lang='stylus'>
@import '~styles/varibles.styl';

#header {
  background: $white;
  border-bottom: 1px solid #ddd;

  .width {
    height: 2.8rem;
    width: 19.8rem;
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

      .top_input {
        width: 19.8rem;
        height: 1.4rem;
        position: absolute;

        .small_logo {
          background-image: url('../../../assets/images/sprite.png');
          background-repeat: no-repeat;
          background-size: 190px 160px;
          width: 3rem;
          height: 3rem;
          background-position: 0 -120px;
          position: absolute;
          top: 0.5rem;
          left: -3.5rem;
        }

        .search_input {
          width: 9.8rem;
          height: 0.7rem;
          position: absolute;
          top: 0.56rem;
          left: 4.75rem;
          border: 0.04rem solid #e1251b;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          background-color: $white;

          input {
            width: 7.34rem;
            color: $darkTextColor;
            font-size: 0.24rem;
            padding: 2px 44px 2px 17px;
            line-height: 0.53rem;
            font-family: 'Microsoft soft';
          }

          .search_btn {
            width: 1.1rem;
            height: 100%;
            background-color: #e1251b;
            color: #fff;
            float: right;
          }

          .search_btn:hover {
            background-color: #c81623;
          }
        }

        .dropdown {
          width: 2.6rem;
          height: 0.7rem;
          position: absolute;
          top: 0.56rem;
          left: 14.8rem;
          border: 0.01rem solid #eee;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          border: 1px solid #eee;
          color: $bgColor;
          background-color: $white;

          .my_SCartNumber {
            height: 0.7rem;
            line-height: 0.7rem;
            text-align: center;

            .icon-cart {
              font-weight: 600;
              margin-right: 0.2rem;
            }

            .my_SCart {
              color: $bgColor;
            }

            .ci-count {
              position: absolute;
              left: 0.62rem;
              top: 0.04rem;
              height: 0.26rem;
              width: 0.34rem;
              line-height: 0.26rem;
              font-size: 0.28rem;
              color: #fff;
              border-radius: 0.3rem;
              background-color: red;
            }
          }

          .my_SCartshow {
            width: 6.18rem;
            height: 1.4rem;
            line-height: 1.4rem;
            position: absolute;
            margin-left: -3.64rem;
            top: 0.66rem;
            z-index: 2;
            color: $gray;
            text-align: center;
            background: #fff;
            border: 1px solid $bgColor;

            div {
              display: inline-block;

              .nocart {
                font-size: 0.7rem;
              }
            }
          }
        }

        .dropdown:hover {
          border: 0.02rem solid $bgColor;
        }
      }
    }

    .search-fix{
      position fixed
    }

    .hotwords {
      position: absolute;
      left: 4.54rem;
      height: 0.4rem;
      line-height: 0.4rem;
      top: 1.4rem;

      .hot_lu {
        list-style: none;
        float: left;

        li {
          display: inline-block;
          margin-right: 0.1rem;

          .style_red {
            color: $bgColor;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }

        li a:hover {
          color: $bgColor;
        }
      }
    }

    .hotwords_bigger {
      position: absolute;
      left: 4.4rem;
      height: 0.4rem;
      margin-top: 0.88rem;
      font-size: 0.3rem;
      line-height: 0.4rem;

      .hot_lu {
        list-style: none;
        float: left;

        li {
          display: inline-block;
          margin-right: 0.35rem;

          a {
            color: $darkTextColor;
          }

          .style_red {
            color: $bgColor;
            font-weight: 600;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }

        li a:hover {
          color: $bgColor;
        }
      }
    }
  }
}
</style>