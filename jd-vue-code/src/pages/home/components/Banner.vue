<template>
  <div id="banner">
    <div class="width">
      <div class="banner_left float">
        <ul>
          <li>家用电器</li>
          <li>手机 / 运营商 / 数码</li>
          <li>电脑 / 办公</li>
          <li>家居 / 家具 / 家装 / 厨具</li>
          <li>男装 / 女装 / 童装 / 内衣</li>
          <li>美妆 / 个护清洁 / 宠物</li>
          <li>女鞋 / 箱包 / 钟表 / 珠宝</li>
          <li>男鞋 / 运动 / 户外</li>
          <li>房产 / 汽车 / 汽车用品</li>
          <li>母婴 / 玩具乐器</li>
          <li>食品 / 酒类 / 生鲜 / 特产</li>
          <li>艺术 / 礼品鲜花 / 农资绿植</li>
          <li>医药保健 / 计生情趣</li>
          <li>图书 / 文娱 / 教育 / 电子书</li>
          <li>机票 / 酒店 / 旅游 / 生活</li>
          <li>理财 / 众筹 / 白条 / 保险</li>
          <li>安装 / 维修 / 清洗 / 二手</li>
          <li>工业品</li>
        </ul>
      </div>
      <div class="banner_center float">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="index in 8" :key="index">
            <img :src="require('../../../assets/images/banner1/bannerImg' + (index - 1) + '.jpg')" />
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev">＜</div>
          <div class="swiper-button-next" slot="button-next">＞</div>
        </swiper>
      </div>
      <div class="banner_righto float">
        <swiper :options="swiperOption2" ref="mySwiper_r">
          <!-- slides -->
          <swiper-slide v-for="index in 2" :key="index">
            <div v-for="imgInd in 3" :key="imgInd">
              <img
                :src="require('../../../assets/images/banner2/' + (index * 2 + imgInd ) + '.jpg')"
              />
            </div>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev">＜</div>
          <div class="swiper-button-next" slot="button-next">＞</div>
        </swiper>
      </div>
      <div class="banner_rightt float">
        <div class="login">
          <div class="login_top">
            <img class="head_img" src="../../../assets/images/head.png" />
            <div class="welcome">
              <a href="#" class="redColor">Hi~欢迎逛京东!</a>
              <p>
                <a href="#" class="redColor">登录</a> |
                <a href="#" class="redColor">注册</a>
              </p>
            </div>
          </div>
          <div class="login_btn">
            <button class="new_btn">
              <a href="#">新人福利</a>
            </button>
            <button class="plus_btn">
              <a href="#">PLUS会员</a>
            </button>
          </div>
        </div>
        <div class="express_news">
          <div class="news_title">
            <span>京东快报</span>
            <a class="redColor" href="#">更多 ></a>
          </div>
          <div class="news" v-if="list">
            <div v-for="(mynews, index) in list.news" :key="index">
              <a href="#">{{mynews.title}}</a>
              <a href="#">{{mynews.detail}}</a>
            </div>
          </div>
        </div>
        <div class="items" v-if="list">
          <a href="#" class="item" v-for="(item , index) in list.items" :key="index">
            <i :class="'iconfont ' + item.icon" v-if="item" :style="'color: ' + item.color"></i>
            <span class="redColor">{{item.title}}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    list: Object
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOption2: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
          delay: 6000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>

<style scoped lang='stylus'>
@import '~styles/varibles.styl';

#banner >>> .swiper-pagination-bullet {
  width: 0.16rem;
  height: 0.16rem;
  margin-right: 0.08rem;
  border: 0.02rem solid rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.9);
}

#banner >>> .swiper-pagination-bullet-active {
  border: 0.06rem solid rgba(0, 0, 0, 0.1);
}

#banner {
  height: 9rem;
  position: relative;
  z-index: 1;
  margin: 0.2rem 0;
  color: $darkTextColor;

  .width {
    width: $maxWidth;
    height: 9rem;
    margin: auto;

    .float {
      float: left;
    }

    .banner_left {
      width: 3.4rem;
      height: 9rem;
      margin-right: 0.2rem;
      background-color: $white;
      overflow: hidden;

      ul {
        margin-top: 0.2rem;

        li {
          width: 100%;
          font-size: 0.24rem;
          list-style: none;
          display: inline-block;
          height: 0.48rem;
          line-height: 0.48rem;
          padding-left: 0.32rem;
          cursor: pointer;
          box-sizing: border-box;
          transition: 0.2s;
        }

        li:hover {
          background-color: #d9d9d9;
        }
      }
    }

    .banner_center {
      width: 11rem;
      height: 9rem;
      margin-right: 0.2rem;
      background-color: #eee !important;

      .swiper-slide {
        background-position: center;
        background-size: cover;

        img {
          width: 11rem;
          height: 9rem;
        }
      }

      .swiper-pagination {
        text-align: left;
        margin-left: 1rem;
      }

      .swiper-button-prev, .swiper-button-next {
        width: 0.5rem;
        height: 0.7rem;
        background-color: rgba(0, 0, 0, 0.15);
        background-image: none;
        transition: 0.5s;
        color: #fff;
        text-align: center;
        line-height: 0.7rem;
        font-weight: 800;

        &:hover {
          background-color: rgba(0, 0, 0, 0.4);
        }
      }

      .swiper-button-prev {
        left: 0;
        border-radius: 0 0.4rem 0.4rem 0;
      }

      .swiper-button-next {
        right: 0;
        border-radius: 0.4rem 0 0 0.4rem;
      }
    }

    .banner_righto {
      width: 3.4rem;
      height: 9rem;
      margin-right: 0.2rem;
      background-color: #eee !important;
      background-color: #F4F4F4;

      .swiper-slide {
        width: 3.4rem;
        height: 9rem;
        background-position: center;
        background-size: cover;
        background-color: #f4f4f4;

        img {
          width: 3.4rem;
          height: 2.8rem;
          margin-bottom: 0.3rem;
        }

        img:hover {
          opacity: 0.8;
        }
      }

      .swiper-button-prev, .swiper-button-next {
        width: 0.5rem;
        height: 0.8rem;
        background-color: rgba(0, 0, 0, 0.15);
        background-image: none;
        transition: 0.5s;
        color: #fff;
        text-align: center;
        line-height: 0.8rem;
        font-weight: 800;

        &:hover {
          background-color: rgba(0, 0, 0, 0.4);
        }
      }

      .swiper-button-prev {
        left: 0;
        border-radius: 0 0.4rem 0.4rem 0;
      }

      .swiper-button-next {
        right: 0;
        border-radius: 0.4rem 0 0 0.4rem;
      }
    }

    .banner_rightt {
      width: 3.4rem;
      height: 9rem;
      background-color: $white;

      .login {
        width: 3rem;
        margin: auto;
        margin-top: 0.2rem;
        color: $gray6;

        .login_top {
          width: 3rem;
          height: 1rem;
          line-height: 0.4rem;

          .head_img {
            width: 0.6rem;
            height: 0.6rem;
            float: left;
            border-radius: 0.44rem;
            border: 0.04rem solid $white;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            cursor: pointer;
          }

          .welcome {
            margin-left: 1.1rem;
            cursor: pointer;

            .redColor:hover {
              color: $bgColor;
            }
          }
        }

        .login_btn {
          width: 2.6rem;
          display: flex;
          justify-content: space-between;
          margin-left: 0.2rem;

          button {
            width: 1.22rem;
            height: 0.42rem;
            border-radius: 0.26rem;
            -webkit-transition: 0.5s;
            transition: 0.5s;
            cursor: pointer;
            font-size: 0.22rem;
          }

          .new_btn {
            background-color: $bgColor;

            a {
              color: $white;
            }
          }

          .new_btn:hover {
            background-color: $darkbgColor;
          }

          .plus_btn {
            background-color: #363634;

            a {
              color: #e5d790;
            }
          }

          .plus_btn:hover {
            background-color: $darkbgColor;

            a {
              color: $white;
            }
          }
        }
      }

      .login:after, .express_news:after {
        content: ' ';
        position: absolute;
        height: 1px;
        width: 3rem;
        top: 1.9rem;
        background: -webkit-gradient(linear, right top, left top, from(#fff), color-stop(#eee), color-stop(#eee), to(#fff));
        background: linear-gradient(270deg, #fff, #eee, #eee, #fff);
      }

      .express_news:after {
        top: 4.5rem;
      }

      .express_news {
        width: 2.6rem;
        margin: auto;
        margin-top: 0.5rem;

        .news_title {
          :nth-child(1) {
            color: $blackColor;
            font-weight: 600;
            font-size: 0.28rem;
          }

          .redColor {
            color: $gray;
            float: right;
            cursor: pointer;
          }

          .redColor:hover {
            color: $bgColor;
          }
        }

        .news {
          margin-top: 0.2rem;

          div {
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            word-wrap: inherit;
            text-overflow: ellipsis;
            margin-top: 0.1rem;
            cursor: pointer;

            :nth-child(1) {
              color: $bgColor;
              display: inline-block;
              padding: 0.04rem 0.06rem;
              background-color: rgba(225, 37, 27, 0.08);
              margin-right: 0.2rem;
            }

            :nth-child(2) {
              color: $gray6;
            }

            a:hover {
              color: $bgColor;
            }
          }
        }

        .news span:hover {
          color: $bgColor;
        }
      }

      .items {
        width: 3rem;
        margin-left: 0.2rem;
        margin-top: 0.5rem;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        .item {
          width: 1rem;
          height: 1.04rem;
          display: flex;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          line-height: 0.35rem;
          color: $gray6;

          .iconfont {
            width: 100%;
            height: 0.5rem;
            font-weight: 600;
            font-size: 0.5rem;
          }
        }

        .item:hover {
          color: $bgColor !important;
        }
      }
    }
  }
}
</style>