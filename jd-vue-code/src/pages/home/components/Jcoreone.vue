<template>
  <div class="width">
    <div class="left">
      <div class="offer_tit">
        <div class="title_text">
          今日特价
          <span class="next">></span>
        </div>
        <div class="title_items">
          <ul>
            <li class="sele">精选</li>
            <li>美食</li>
            <li>数码</li>
            <li>百货</li>
            <li>预告</li>
          </ul>
        </div>
      </div>

      <div class="showdetail">
        <div class="special_1">
          <img
            :src="require('../../../assets/images/special/' + list[0].id + '.jpg')"
            :alt="list[0].title"
          />
          <h1 class="title">{{list[0].title}}</h1>
          <p class="price">
            ￥{{list[0].price}}
            <del class="price_origin">{{list[0].price_origin}}</del>
          </p>
          <p>已抢 300 件</p>
        </div>
        <div class="special_2">
          <div v-for="item in list" :key="item.id" class="low_cut">
            <div v-if="item.id > 1" class="low_list">
              <img
                :src="require('../../../assets/images/special/' + item.id + '.jpg')"
                :alt="item.title"
              />
              <h1 class="title">{{item.title}}</h1>
              <p class="price">￥{{item.price}}</p>
              <del>{{item.price_origin}}</del>
              <p class="re">热卖中</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="offer_tit">
        <div class="title_text">
          品牌闪购
          <span class="next">></span>
        </div>
      </div>

      <div class="showdetail">
        <div class="special_1">
          <img class="logo" src="../../../assets/images/special2/logo.jpg" alt="兰蔻品牌闪购日" />
          <h6 class="core-name">兰蔻品牌闪购日</h6>
          <h1 class="title">{{special2[0].title}} | 仅剩: 04:33:43</h1>
          <img :src="require('../../../assets/images/special2/' + special2[0].id + '.jpg')" />
        </div>
        <div class="special_2">
          <div v-for="item in special2" :key="item.id" class="low_cut" v-if="item.id > 1">
            <div :data-id="item.id" class="low_list">
              <img :src="require('../../../assets/images/special2/' + item.id + '.jpg')" />
              <p class="title">{{item.title}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeJcoreone",
  props: {
    list: Array,
    special2: Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.width {
  width: $maxWidth;
  height: 7rem;
  margin: auto;
  margin-top: 0.5rem;

  .left {
    width: 10.4rem;
    height: 7rem;
    background: #fff;
    float: left;
    position: relative;
    padding: 0.1rem;

    .offer_tit {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title_text {
        width: 2rem;
        height: 1rem;
        background-color: #fff;
        font-size: 0.4rem;
        color: #333;
        text-align: center;
        line-height: 1rem;
        font-weight: 800;

        .next {
          width: 0.3rem;
          height: 0.3rem;
          background-color: #fff;
          border: 0.03rem solid #e1251b;
          display: block;
          color: #e1251b;
          border-radius: 0.3rem;
          position: absolute;
          top: 0.46rem;
          line-height: 0.3rem;
          font-size: 0.2rem;
          left: 2.6rem;
          cursor: pointer;
          transition: 0.5s;
        }

        .next:hover {
          background-color: $bgColor;
          color: #fff;
        }
      }

      .title_items {
        li {
          display: inline-block;
          width: 1rem;
          height: 1rem;
          line-height: 1rem;
          text-align: center;
          font-size: 0.3rem;
        }

        .sele {
          color: #E1251B;
        }

        .sele::after {
          content: '';
          position: absolute;
          margin-left: -0.6rem;
          border-bottom: 0.04rem solid #f00;
          width: 0.6rem;
          top: 0;
          margin-top: 0.8rem;
        }

        .showdetail {
          background-color: #ddd;
        }
      }
    }

    .showdetail {
      position: absolute;
      width: 10.4rem;
      background-color: #fff;
      height: 6.1rem;
      top: 1rem;
      display: flex;
      flex-wrap: wrap;

      .special_1 {
        width: 2.8rem;
        height: 5.9rem;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #f4f4f4;
        margin: 0.1rem;

        .title {
          width: 2.6rem;
          overflow: hidden;
          display: block;
          height: 1rem;
          white-space: nowrap;
          color: #333;
          font-size: 0.28rem;
          text-overflow: ellipsis;
          line-height: 1rem;
        }

        .price {
          font-size: 0.36rem;
          color: #e1251b;

          .price_origin {
            font-size: 0.3rem;
            color: #aaa;
          }
        }

        img {
          width: 2rem;
          height: 2rem;
        }
      }

      .special_2 {
        width: 7.4rem;
        float: right;

        .low_list {
          .price {
            font-size: 0.3rem;
            color: #e1251b;
            margin-top: 0.2rem;
          }

          .re {
            margin-top: 0.2rem;
          }

          .title {
            height: 0.8rem;
            overflow: hidden;
            color: #444;
            line-height: 0.4rem;
          }
        }

        .low_cut {
          float: left;
          text-align: center;

          div {
            width: 3.5rem;
            height: 2.4rem;
            margin-top: 0.6rem;
            margin-right: 0.2rem;

            img {
              float: left;
              width: 2rem;
              height: 2rem;
              margin-right: 0.3rem;
            }
          }
        }
      }
    }
  }

  .right {
    width: 10.4rem;
    height: 7rem;
    background: #fff;
    position: relative;
    padding: 0.1rem;
    float: right;

    .offer_tit {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title_text {
        width: 2rem;
        height: 1rem;
        background-color: #fff;
        font-size: 0.4rem;
        color: #333;
        text-align: center;
        line-height: 1rem;
        font-weight: 800;

        .next {
          width: 0.3rem;
          height: 0.3rem;
          background-color: #fff;
          border: 0.03rem solid #e1251b;
          display: block;
          color: #e1251b;
          border-radius: 0.3rem;
          position: absolute;
          top: 0.46rem;
          line-height: 0.3rem;
          font-size: 0.2rem;
          left: 2.6rem;
          cursor: pointer;
          transition: 0.5s;
        }

        .next:hover {
          background-color: $bgColor;
          color: #fff;
        }
      }

      .title_items {
        li {
          display: inline-block;
          width: 1rem;
          height: 1rem;
          line-height: 1rem;
          text-align: center;
          font-size: 0.3rem;
        }

        .sele {
          color: #E1251B;
        }

        .sele::after {
          content: '';
          position: absolute;
          margin-left: -0.6rem;
          border-bottom: 0.04rem solid #f00;
          width: 0.6rem;
          top: 0;
          margin-top: 0.8rem;
        }

        .showdetail {
          background-color: #ddd;
        }
      }
    }

    .showdetail {
      position: absolute;
      width: 10.4rem;
      background-color: #fff;
      height: 6.1rem;
      top: 1rem;
      display: flex;
      flex-wrap: wrap;

      .special_1 {
        width: 4.8rem;
        height: 5.9rem;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: rgba(184, 212, 191, 0.2);
        margin: 0.1rem;

        h6 {
          font-size: 0.32rem;
          margin-top: 0.3rem;
          color: #555;
          font-weight: 800;
        }

        .logo {
          width: 1rem;
          height: 0.6rem;
        }

        .title {
          display: block;
          height: 1rem;
          white-space: nowrap;
          color: #333;
          font-size: 0.26rem;
          line-height: 1rem;
        }

        .price {
          font-size: 0.36rem;
          color: #e1251b;

          .price_origin {
            font-size: 0.3rem;
            color: #aaa;
          }
        }

        img {
          width: 2rem;
          height: 2rem;
        }
      }

      .special_2 {
        width: 5.4rem;
        float: right;

        .low_cut {
          width: 50%;
          height: 2rem;
          display: inline-block;

          .low_list {
            text-align center;
            .title {
              margin-top .2rem
            }

            img {
              width: 1.6rem;
              height: 0.8rem;
            }
          }
        }
      }
    }
  }
}
</style>