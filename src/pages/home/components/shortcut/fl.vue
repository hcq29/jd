<template>
  <ul class="fl">
    <li @mouseenter="enter" @mouseleave="leave" class="shortcut_btn">
      <router-link tag="div" href="javascript:void(0);" class="location" :to="'/'">
        <i class="iconfont icon-location"></i>
        <span>{{current_city}}</span>
      </router-link>
      <div v-show="show" class="areamini">
        <div class="items">
          <div v-for="item in list.cities" :key="item.id" class="item">
            <router-link
              tag="a"
              :data-id="item.id"
              href="javascript:void(0);"
              class="city_cur"
              :to="'/'"
              v-if="item.name == current_city"
            >{{item.name}}</router-link>
            <router-link
              tag="a"
              :data-id="item.id"
              href="javascript:void(0);"
              class="to_city"
              :to="'/'"
              v-else
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
          <div class="other_item" v-for="other in list.others" :key="other.id">
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
</template>

<script>
export default {
  name: "Fl",
  props: {
    list: Array
  },
  data() {
    return {
      show: false,
      current_city: "广东"
    };
  },
  methods: {
    enter() {
      this.show = true;
    },
    leave() {
      this.show = false;
    }
  },
  mounted() {}
};
</script>

<style scoped lang='stylus'>
@import '~styles/varibles.styl';

.fl {
  float: left;

  .shortcut_btn {
    position: relative;
    z-index: 2;

    .location {
      width: 1.1rem;
      height: 0.62rem;
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
      border-left: 0.02rem solid #ccc;
      border-right: 0.02rem solid #ccc;
      background-color: $white;
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

          .city_cur {
            color: $white;
            padding: 0.13rem 0.2rem;
            background-color: $bgColor;
          }

          .to_city:hover {
            color: $bgColor;
            background-color: #f4f4f4;
          }
        }
      }

      .areamini_inter {
        margin: 0.2rem 0 0.2rem 0.2rem;

        .areamini_inter_split {
          width: 5.24rem;
          height: 0;
          border-bottom: 0.02rem dotted rgb(238, 238, 238);
        }

        .other_item {
          margin: 0.04rem 0 0 0.2rem;
          float: left;
          width: 2.68rem;
        }
      }
    }

    .location:hover {
      color: $bgColor;
    }
  }

  .shortcut_btn:hover {
    background: $white;
  }
}
</style>