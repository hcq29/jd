<template>
  <div class="width">
    <a href="#" class="left float" :style="seckillImg">
      
    </a>
    <div class="right float">
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
  </div>
</template>

<script>
import seckillImg from "images/find.jpg";
export default {
  name: 'HomeJcoretwo',
  props: {
    list: {
      find: Object
    }
  },
  data() {
    return {
      swiperOption1: {
        slidesPerView: 4,
        spaceBetween: 15,
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
    
  },
  mounted() {
    
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.width >>> .swiper-container {
  height: 100%;
}

.width >>> .redColor{
  background-color #c81623;
  color: #fff;
} 

.width >>> .swiper-pagination-bullet {
  width: 0.08rem;
  height: 0.08rem;
}

.width >>> .swiper-pagination-bullet-active {
  background-color: $bgColor;
}

.width {
  width: $maxWidth;
  height: 5.2rem;
  margin: auto;
  background-color: $white;
  margin-top: .6rem;

  .float {
    float: left;
  }

  .left {
    width: 3.84rem;
    height: 100%;
    color: #fff;
    background-color: #fff;
    background-size: counter;
    background-repeat: no-repeat;
    background-size: 100%;

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
    width: 15rem;
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
        width: 2.8rem;
        height: 0.44rem;
        margin: auto;
        margin-top: 0.12rem;
        border: 0.02rem solid $bgColor;
        background: $bgColor;

        .price_miaosha {
          width: 1.6rem;
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
          left: 1.81rem;
        }

        .price_origin {
          width: 1.2rem;
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

}
</style>

