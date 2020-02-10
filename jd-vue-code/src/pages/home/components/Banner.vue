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
      <div class="banner_center float"></div>
      <div class="banner_right float">
        <div class="login">
          <div class="login_top">
            <img class="head_img" src="../../../assets/images/head.png" />
            <div class="welcome">
              <p>Hi~欢迎逛京东!</p>
              <p>
                <span>登录</span> |
                <span>注册</span>
              </p>
            </div>
          </div>
          <div class="login_btn">
            <button class="new_btn">新人福利</button>
            <button class="plus_btn">PLUS会员</button>
          </div>
        </div>
        <div class="express_news">
          <div class="news_title">
            <span>京东快报</span>
            <span>更多 ></span>
          </div>
          <div class="news">
            <div>
              <span>热门</span>N95口罩今年你备了么？没有买到的N95口罩的这里看看
            </div>
            <div>
              <span>HOT</span>一家独霸中国口罩市场，美国3M口罩为何能总能被畅销？
            </div>
            <div>
              <span>最新</span>还在为买不到口罩发愁吗？国家发声了！
            </div>
            <div>
              <span>推荐</span>小米10配置出炉！5G+6400像素+超级快充
            </div>
          </div>
        </div>
        <div class="items">
          <div class="item">
            <i>
              <svg class="icon i_icon" aria-hidden="true">
                <use xlink:href="#icon-huafei" />
              </svg>
            </i>
            <span>话费</span>
          </div>
          <div class="item">
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-feiji" />
              </svg>
            </i>
            <span>机票</span>
          </div>
          <div class="item">
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiudian" />
              </svg>
            </i>
            <span>酒店</span>
          </div>
          <div class="item">
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-youxi" />
              </svg>
            </i>
            <span>游戏</span>
          </div>
          <div class="item">
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiayouka" />
              </svg>
            </i>
            <span>加油卡</span>
          </div>
          <div class="item">
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-huochepiao" />
              </svg>
            </i>
            <span>火车票</span>
          </div>
          <div class="item">
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zhongchou" />
              </svg>
            </i>
            <span>众筹</span>
          </div>
          <div class="item">
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-licai" />
              </svg>
            </i>
            <span>理财</span>
          </div>
          <div class="item">
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-baitiao" />
              </svg>
            </i>
            <span>白条</span>
          </div>
          <div class="item">
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-dianyingpiao" />
              </svg>
            </i>
            <span>电影票</span>
          </div>
          <div class="item">
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-qiyegou" />
              </svg>
            </i>
            <span>企业购</span>
          </div>
          <div class="item">
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-lipinka" />
              </svg>
            </i>
            <span>礼品卡</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner"
};
</script>

<style scoped lang='stylus'>
@import '~styles/varibles.styl';

#banner {
  height: 9.6rem;
  position: relative;
  z-index: 1;
  margin: 0.2rem 0;
  color: $darkTextColor;

  .width {
    width: 19.8rem;
    height: 9.6rem;
    margin: auto;

    .float {
      float: left;
    }

    .banner_left {
      width: 3.8rem;
      height: 9.6rem;
      margin-right: 0.2rem;
      background-color: $white;
      overflow: hidden;

      ul {
        margin-top: 0.2rem;

        li {
          width: 100%;
          font-size: 0.28rem;
          list-style: none;
          display: inline-block;
          height: 0.51rem;
          line-height: 0.51rem;
          padding-left: 0.32rem;
          cursor: pointer;
          box-sizing: border-box;
        }

        li:hover {
          background-color: #d9d9d9;
        }
      }
    }

    .banner_center {
      width: 11.8rem;
      height: 9.6rem;
      margin-right: 0.2rem;
      background-color: pink;
    }

    .banner_right {
      width: 3.8rem;
      height: 9.6rem;
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
            width: 0.8rem;
            height: 0.8rem;
            float: left;
            border-radius: 0.44rem;
            border: 0.04rem solid $white;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          }

          .welcome {
            margin-left: 1.1rem;
          }
        }

        .login_btn {
          width: 3rem;
          display: flex;
          justify-content: space-between;

          button {
            width: 1.4rem;
            height: 0.5rem;
            border-radius: 0.26rem;
            transition: 0.5s;
          }

          .new_btn {
            color: $white;
            background-color: $bgColor;
          }

          .new_btn:hover {
            background-color: #c81623;
          }

          .plus_btn {
            color: #e5d790;
            background-color: #363634;
          }

          .plus_btn:hover {
            color: $white;
            background-color: #c81623;
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
        top: 4.4rem;
      }

      .express_news {
        width: 3.2rem;
        margin: auto;
        margin-top: 0.5rem;

        .news_title {
          :nth-child(1) {
            color: $blackColor;
            font-weight: 600;
            font-size: 0.28rem;
          }

          :nth-child(2) {
            color: $gray;
            float: right;
          }
        }

        .news {
          div {
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            word-wrap: inherit;
            text-overflow: ellipsis;
            margin-top: 0.1rem;
            color: $gray6;

            :nth-child(1) {
              color: $bgColor;
              display: inline-block;
              padding: 0.04rem 0.06rem;
              background-color: rgba(225, 37, 27, 0.08);
              margin-right: 0.2rem;
            }
          }
        }
      }

      .items {
        margin-top: 0.5rem;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        .item {
          width: 1.2rem;
          height: 1.16rem;
          display: flex;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          line-height: 0.35rem;

          i .icon {
            width: 0.5rem;
            height: 0.5rem;
            font-weight 600
          }
        }
      }
    }
  }
}
</style>