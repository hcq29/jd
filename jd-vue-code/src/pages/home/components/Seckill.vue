<template>
  <div class="width">
    <a href="#" class="left float" :style="seckillImg">
      <div class="seckill_title">京东秒杀</div>

      <div>
        <div class="point">
          <span class="point_time" v-if="list">{{list.time}}</span>点场 倒计时
          <div class="cut_time">
            <span class="hour">00</span>
            <span class="minute">54</span>
            <span class="second">58</span>
          </div>
        </div>
      </div>
    </a>
    <div class="center float">
      <swiper :options="swiperOption1" ref="mySwiper1" v-if="list">
        <swiper-slide v-for="(miaosha , index) in list.center" :key="index">
          <div class="center_img">
            <img :src="require('../../../assets/images/SeckillImg/' + miaosha.id + '.jpg')" />
          </div>
          <h6 class="seckill_title">{{miaosha.title}}</h6>
          <div class="price">
            <span class="price_miaosha">
              <i>￥</i>
              {{miaosha.price}}
            </span>
            <span class="price_origin">
              <del>{{miaosha.price_origin}}</del>
            </span>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev">＜</div>
        <div class="swiper-button-next" slot="button-next">＞</div>
      </swiper>
    </div>
    <div class="right float">
      <swiper :options="swiperOption2" ref="mySwiper2" v-if="list">
        <swiper-slide v-for="(right, index) in list.right" :key="index">
          <div class="right_img">
            <img :src="require('../../../assets/images/SeckillImg/b' + right.id + '.jpg')" />
          </div>
          <div class="title">
            <h6>{{right.title1}}</h6>
            <h5>{{right.title2}}</h5>
          </div>
          <button class="btn">{{right.btn}}</button>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div :class="sticky" ref="sticky">
      <ul ref="stickyItems" class="sticky_items">
        <li ref="miaosha">京东秒杀</li>
        <li ref="tese">特色优选</li>
        <li ref="pindao">频道广场</li>
        <li ref="tuijian">为你推荐</li>
        <li>
          <i class="iconfont icon-kefu"></i>
          客服
        </li>
        <li>
          <i class="iconfont icon-w_shuxie"></i>
          反馈
        </li>
        <li class="back">
          <i class="iconfont icon-down"></i>
          返回
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import seckillImg from "images/seckillImg/seckill.png";
export default {
  name: "HomeSeckill",
  props: {
    list: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      swiperOption1: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOption2: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      },
      sticky: "sticky",
      seckillImg: {
        backgroundImage: "url(" + seckillImg + ")"
      }
    };
  },
  computed: {},
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var stickyStyle = this.$refs.sticky.style;
      var stickyItemsStyle = this.$refs.stickyItems.style;
      if (scrollTop > 755) {
        if(stickyStyle.position != "fixed"){
          stickyStyle.position = "fixed";
          stickyStyle.top = "1.6rem";
          stickyStyle.height = "9.3rem";
          stickyItemsStyle.overflow = "initial";
        }
      } else {
        if(stickyItemsStyle.overflow != "hidden"){
          stickyStyle.position = "static";
          stickyStyle.top = "0rem";
          stickyStyle.height = "7.92rem";
          stickyItemsStyle.overflow = "hidden";
        }
      }
      if(scrollTop > 755 && scrollTop < 950){
        this.$refs.miaosha.style.color = "#E1251B"
      }else{
        this.$refs.miaosha.style.color = "#333"
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.width >>> .swiper-container {
  height: 100%;
}

.width >>> .swiper-pagination-bullet {
  width: 0.08rem;
  height: 0.08rem;
}

.width >>> .swiper-pagination-bullet-active {
  background-color: $bgColor;
}

.width {
  width: 19.8rem;
  height: 5.2rem;
  margin: auto;
  background-color: $white;

  .float {
    float: left;
  }

  .left {
    width: 3.8rem;
    height: 100%;
    color: $white;
    background-color: $white;
    background-position: 50%;
    background-size: counter;
    background-repeat: no-repeat;

    .seckill_title {
      width: 100%;
      text-align: center;
      font-size: 0.6rem;
      font-weight: 700;
      margin-top: 0.6rem;
    }

    .point {
      margin-top: 2.2rem;
      font-size: 0.28rem;
      text-align: center;

      .point_time {
        font-size: 0.36rem;
        font-weight: 700;
        vertical-align: middle;
      }

      .cut_time {
        width: 100%;
        text-align: center;
        margin-top: 0.4rem;

        span {
          background-color: #000;
          font-size: 0.44rem;
          text-align: center;
          width: 0.6rem;
          padding: 0.1rem 0.02rem;
          display: inline-block;
          font-weight: 700;
          margin-left: 0.3rem;
        }

        .hour {
          margin-left: 0;
        }

        .hour:after {
          content: ':';
          position: absolute;
          margin-left: 0.18rem;
        }

        .minute:after {
          content: ':';
          position: absolute;
          margin-left: 0.18rem;
        }
      }
    }
  }

  .center {
    width: 12.6rem;
    height: 5.2rem;
    background-color: $white;
    position: relative;
    z-index: 0;

    .swiper-slide {
      background-position: center;
      background-size: cover;
      text-align: center;
      padding: 0.6rem 0 0 0;
      box-sizing: border-box;

      .center_img {
        width: 2.6rem;
        height: 2.6rem;
        margin: auto;
        background-color: #eee !important;

        img {
          width: 2.6rem;
          transition: 0.5s;
        }

        img:hover {
          opacity: 0.8;
        }
      }

      .seckill_title {
        width: 80%;
        height: 0.4rem;
        line-height: 0.4rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: auto;
        overflow: hidden;
        margin-top: 0.6rem;
        color: $darkTextColor;
      }

      .price {
        width: 3.2rem;
        height: 0.44rem;
        margin: auto;
        margin-top: 0.12rem;
        border: 0.02rem solid $bgColor;
        background: $bgColor;

        .price_miaosha {
          width: 1.8rem;
          height: 0.44rem;
          line-height: 0.48rem;
          display: inline-block;
          color: $white;
          font-size: 0.3rem;
          font-weight: 700;
          float: left;
        }

        .price_miaosha:after {
          content: ' ';
          width: 0;
          height: 0;
          border-color: transparent white transparent transparent;
          border-style: solid;
          border-width: 22px 8px 0 0;
          position: absolute;
          left: 98px;
        }

        .price_origin {
          width: 1.38rem;
          height: 0.44rem;
          line-height: 0.44rem;
          float: right;
          background: $white;

          del {
            text-decoration: line-through;
          }
        }
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

  .right {
    width: 3.4rem;
    height: 100%;
    position: relative;
    z-index: 0;
    background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.4), rgba(220, 224, 236, 0.4));

    .right_img {
      width: 2.6rem;
      height: 2.6rem;
      margin: auto;
      background-color: #eee;
      margin-top: 0.5rem;

      img {
        width: 2.6rem;
      }

      img:hover {
        opacity: 0.8;
      }
    }

    .title {
      text-align: center;
      height: 0.86rem;
      line-height: 0.4rem;
      margin-top: 0.2rem;

      h6 {
        font-size: 0.25rem;
      }

      h5 {
        font-size: 0.26rem;
        font-weight: 700;
        color: $darkTextColor;
      }
    }

    .btn {
      width: 1.6rem;
      height: 0.5rem;
      background: transparent;
      border: 0.02rem solid $bgColor;
      border-radius: 0.3rem;
      color: $bgColor;
      font-size: 0.22rem;
      font-weight: 700;
      font-family: fantasy;
      margin-left: 50%;
      position: relative;
      left: -0.8rem;
      transition: 0.3s;
    }

    .btn:hover {
      border: transparent;
      background-color: $darkbgColor;
      color: $white;
    }
  }

  .sticky {
    width: 1.2rem;
    height: 7.92rem;
    background-color: $white;
    margin-left: 20.26rem;
    top: 0;
    transition: 0.5s;

    .sticky_items {
      text-align: center;
      color: $darkTextColor;
      overflow hidden
      height: 7.92rem;

      .back{
        color $bgColor  
      }
      li {
        display: block;
        width: 0.6rem;
        line-height: 0.35rem;
        font-size: 0.3rem;
        padding: 0.3rem;
        cursor: pointer;
        transition: 0.3s;
        i {
          font-size: 0.45rem;
        }
      }

      li:hover {
        background-color: $darkbgColor;
        color: $white;
      }
    }
  }
}
</style>

